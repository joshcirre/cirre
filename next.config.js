/** @type {import('next').NextConfig} */
module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://joshcirre.com',
				permanent: true,
			},
		];
	},
};
