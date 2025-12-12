/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://joshcirre.com",
        permanent: true,
      },
      {
        source: "/meet",
        destination: "https://cal.com/joshcirre",
        permanent: true,
      },
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1fJs8VkWvH9fncp95sd51UyZMVK38F0mp/view?usp=sharing",
        permanent: true,
      },
      {
        source: "/suggest",
        destination: "https://suggest.gg/joshcirre",
        permanent: true,
      },
      {
        source: "/laravel",
        destination: "https://www.youtube.com/watch?v=iSS_9PHrQg0",
        permanent: true,
      },
      {
        source: "/yt",
        destination: "https://www.youtube.com/@joshcirre",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://www.x.com/joshcirre",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/joshcirre",
        permanent: true,
      },
      {
        source: "/bsky",
        destination: "https://bsky.app/profile/joshcirre.com",
        permanent: true,
      },
      {
        source: "/jiffyforjobs",
        destination: "https://www.youtube.com/watch?v=HLXrOD7SAKE",
        permanent: true,
      },
      {
        source: "/twitch",
        destination: "https://twitch.tv/joshcirre",
        permanent: true,
      },
      {
        source: "/live",
        destination: "https://www.youtube.com/@joshcirre/live",
        permanent: true,
      },
      {
        source: "/bet",
        destination: "https://beton.joshcirre.com",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "https://lddpod.com",
        permanent: true,
      },
      {
        source: "/ldd",
        destination: "https://lddpod.com",
        permanent: true,
      },
      {
        source: "/stickers",
        destination: "https://joshcirre.com/stickers",
        permanent: true,
      },
      {
        source: "/mirocanvas25",
        destination:
          "https://www.youtube.com/watch?v=0ULVViBpW5o?utm_medium=expedited-reg-email&draft=7-23-1-add-password&utm_campaign=glb-26q3-glb-he-c1_sdmp-canvas_25_virtual_event&utm_source=partner-sourced&utm_medium=partner&utm_content=Hosted%20Event&utm_term=InfluencerJoshcirre&src=-partner_glb",
        permanent: true,
      },
      {
        source: "/miro",
        destination: "http://miro.pxf.io/Xm7gEa",
        permanent: true,
      },
      {
        source: "/blankcanvas",
        destination: "http://miro.pxf.io/RGv6ay",
        permanent: true,
      },
    ];
  },
};
