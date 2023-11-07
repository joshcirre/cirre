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
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1fJs8VkWvH9fncp95sd51UyZMVK38F0mp/view?usp=sharing',
                permanent: true,
            },
            {
                source: '/resend',
                destination: 'https://resend-uploadthing-attachments.vercel.app/',
                permanent: true,
            }
		];
	},
};
