import { createRandomID } from './helpers';

export const data = {
  posts: [
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'leomessi',
        name: 'Leo Messi',
        profilePic:
          'https://www.ole.com.ar/images/2018/10/23/pAtN-cEck_720x0.jpg',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2022, 11, 18),
      description: `CAMPEONES DEL MUNDO!!!!!!! 🌎🏆

      Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo puedo creer……
      
      Muchas gracias a mi familia, a todos los que me apoyan y también a todos los que creyeron en nosotros. Demostramos una vez más que los argentinos cuando luchamos juntos y unidos somos capaces de conseguir lo que nos propongamos. El mérito es de este grupo, que está por encima de las individualidades, es la fuerza de todos peleando por un mismo sueño que también era el de todos los argentinos… Lo logramos!!!
      
      VAMOS ARGENTINA CARAJO!!!!! 🙌🏻🙌🏻
      
      Nos estamos viendo muy pronto… `,
      imageUrl: [
        'https://www.record.com.mx/sites/default/files/articulos/2022/12/18/lionel_messi-17.jpg',
      ],
      likes: 75644374,
      location: 'Lusail Stadium',
    },
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'kyliejenner',
        name: 'Kylie',
        profilePic:
          'https://storage.googleapis.com/ares-profile-pictures/hd/kyliejenner-dea144effec72e1408742fb2e2aa14f7_hd.jpg',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2018, 1, 6),
      description: `stormi webster 👼🏽`,
      imageUrl: [
        'https://akns-images.eonline.com/eol_images/Entire_Site/201817/rs_600x600-180207123031-600.Stormi-Webster-Kylie-Jenner-Instagram-Kf.2718.png',
      ],
      likes: 17965750,
      location: null,
    },
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'world_record_egg',
        name: 'Egg Gang 🌎',
        profilePic:
          'https://imageio.forbes.com/blogs-images/biancamillercole/files/2019/01/WRE-2018-1.jpg?height=729&width=711&fit=bounds',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2019, 0, 4),
      description: `Let's set a world record together and get the most liked post on Instagram. Beating the current world record held by Kylie Jenner (18 million)! We got this 🙌

      #LikeTheEgg #EggSoldiers #EggGang`,
      imageUrl: [
        'https://imageio.forbes.com/blogs-images/biancamillercole/files/2019/01/WRE-2018-1.jpg?height=729&width=711&fit=bounds',
      ],
      likes: 60209779,
      location: null,
    },
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'selenagomez',
        name: 'Selena Gomez',
        profilePic:
          'https://yt3.googleusercontent.com/15tQxFe-sB8u_9AomX4M_FGRwcDmlmu6g_tCvfSQkSdkPJhH_y6g0fFM0J4kl5U8rxkJdIofyA=s900-c-k-c0x00ffffff-no-rj',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2016, 5, 25),
      description: `when your lyrics are on the bottle 😛 #ad`,
      imageUrl: [
        'https://assets.vogue.com/photos/5891213cfb0604bf1f5c0fe5/master/pass/00-holding-selena-gomez.jpg',
      ],
      likes: 6705479,
      location: null,
    },
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'tomholland2013',
        name: 'Tom Holland',
        profilePic:
          'https://i.pinimg.com/originals/14/4b/bc/144bbc6f9694638956fb9c88252ef3bb.jpg',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2022, 1, 23),
      description: `😏😏😏`,
      imageUrl: [
        'https://pbs.twimg.com/media/FMSXWuzXMAMiuPl?format=jpg&name=4096x4096',
      ],
      likes: 25223138,
      location: null,
    },
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'leomessi',
        name: 'Leo Messi',
        profilePic:
          'https://www.ole.com.ar/images/2018/10/23/pAtN-cEck_720x0.jpg',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2022, 11, 20),
      description: `Buen día ! 😁`,
      imageUrl: [
        'https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/20/d8f63106a2095382a597013b6b4486f0167154799357524_original.jpg?impolicy=abp_cdn&imwidth=650',
      ],
      likes: 54721708,
      location: null,
    },
    {
      id: createRandomID(6),
      author: {
        id: createRandomID(8),
        username: 'cristiano',
        name: 'Cristiano Ronaldo',
        profilePic: 'https://pbs.twimg.com/media/FQ7KxCVXIAMILRB.jpg',
        verified: true,
      },
      comments: [],
      createdAt: new Date(2022, 10, 19),
      description: `Victory is a State of Mind. A long tradition of crafting trunks photographed by @annieleibovitz for @louisvuitton`,
      imageUrl: ['https://pbs.twimg.com/media/Fh8lWD4XoAAr_xa.jpg:large'],
      likes: 42775866,
      location: null,
    },
  ],
};
