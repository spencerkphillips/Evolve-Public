const data = require('./users.json');

const {
	createUser,
	searchOne,
	updateAll,
	update,
} = require('../src/modules/authentication/service');

const User = require('../src/modules/authentication/model');
const { name: roleModel } = require('../src/modules/role/model');

const seed = async (logger) => {
	await Promise.all(
		data.map(async (User) => {
			logger.info(`Checking if user ${User.username} exists`);
			const userExists = await searchOne({ username: User.username }, 'User');
			if (!userExists) {
				const role = await searchOne({ alias: User.roleAlias }, 'Role');
				const savedUser = await createUser({
					...User,
					roleId: role._id,
				});
				logger.info(`Saved user id: ${savedUser._id}`);
			} else {
				logger.info(`User ${User.username} already exists`);
			}
		})
	);
	logger.info(`Seeding users finished`);
};

const migrate = async (logger) => {
	logger.info('User starting');
	const superadminUser = await searchOne({ username: 'superadmin' }, 'User');
	if (!superadminUser) {
		throw new Error('Superadmin user not found');
	}

	const adminRole = await searchOne({ name: 'admin' }, 'Role');
	if (!adminRole) {
		throw new Error('Admin role not found');
	}

	const superadminRole = await searchOne({ name: 'superadmin' }, 'Role');
	if (!adminRole) {
		throw new Error('Superadmin role not found');
	}

	const response = await updateAll(
		// { createdBy: { $exists: false } },
		{},
		{
			createdBy: superadminUser._id,
			updatedBy: superadminUser._id,
			roleId: adminRole._id,
			roleAlias: adminRole.alias,
			isActive: true,
		},
		'User'
	);
	logger.info(`Migrated ${response.nModified} users`);
	const saUpdateResponse = await update(
		{
			...superadminUser,
			roleId: superadminRole._id,
			roleAlias: superadminRole.alias,
			createdBy: superadminUser._id,
			updatedBy: superadminUser._id,
		},
		'User'
	);
	logger.info(`Migrated superadmin user ${saUpdateResponse.nModified}`);
	return response;
};

module.exports = { seed, migrate };
