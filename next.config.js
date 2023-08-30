/** @type {import('next').NextConfig} */
module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://joshcirre.com',
				permanent: true,
			},
			{
				source: '/meet',
				destination: 'https://cal.com/joshcirre',
				permanent: true,
			},
		];
	},
};
