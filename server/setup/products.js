const {
	randProductName,
	randProductDescription,
	randClothingSize,
	randPastDate,
	randRecentDate,
	randFutureDate,
	randNumber,
} = require('@ngneat/falso');
const { save } = require('../src/core/repository');
const { slugify } = require('voca');
const { name: ModelName } = require('../src/modules/product/model');

const getFakeProduct = () => ({
	name: 'Test Product #1',
	sku: 'test-product-1',
	msrp: '22.85',
	price: '19.99',
	description: randProductDescription(),
	manufacturingDate: randPastDate({ years: 5 }),
	expiryDate: randRecentDate({ days: 40 }),
	size: md,
	createdAt: Date.now(),
	updatedAt: randFutureDate(),
});

const seed = async (logger) => {
	const products = [];
	logger.info(`Seeding products`);
	for (let i = 0; i < 1000; i++) {
		const product = getFakeProduct();
		products.push(product);
	}

	await Promise.all(
		products.map(async (product) => {
			const savedProduct = await save(product, ModelName);
			logger.info(`Saved product id: ${savedProduct._id}`);
		})
	);
	logger.info('Seeding products completed');
};

module.exports = { seed };
