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
            },
            {
                source: '/suggest',
                destination: 'https://suggest.gg/joshcirre',
                permanent: true,
            },
            {
                source: '/laravel',
                destination: 'https://www.youtube.com/watch?v=iSS_9PHrQg0',
                permanent: true,
            },
            {
                source: '/yt',
                destination: 'https://www.youtube.com/@joshcirre',
                permanent: true,
            },
            {
                source: '/jiffyforjobs',
                destination: 'https://www.youtube.com/watch?v=HLXrOD7SAKE',
                permanent: true,
            },
            {
                source: '/twitch',
                destination: 'https://twitch.tv/joshcirre',
                permanent: true,
            },
            {
                source: '/live',
                destination: 'https://twitch.tv/joshcirre',
                permanent: true,
            },
            {
                source: '/mongodb',
                destination: 'https://drive.google.com/file/d/1_2hvII5NaYUkAw-PM4jsk1LaulvpICef/view?usp=sharing',
                permanent: true,
            },
            {
                source: '/hellomongodb',
                destination: 'https://www.youtube.com/watch?v=1TDHwFkGRl8',
                permanent: true,
            },
            {
                source:'/highlight',
                destination: 'https://drive.google.com/file/d/1ysi5dsCzY-GulBInde-ufhNxFF4zlQrp/view?usp=sharing',
                permanent: true,
            },
            {
                source: '/hellohighlight',
                destination: 'https://www.youtube.com/watch?v=048GxlHPbjk',
                permanent: true,
            },
            {
                source: '/bet',
                destination: 'https://beton.joshcirre.com',
                permanent: true,
            },
        ];
    },
};
