import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: 1,
    title: "hero",
    type: 'HERO_TYPE',
    hero: true,
    description:
      "A hero is a person who demonstrates an utmost commitment to their morals, no matter the obstacle or consequence.",
    image_url: "https://cdna.artstation.com/p/assets/images/images/045/592/094/large/johnny-azx-demon-slayer-kimetsu-no-yaiba-tanjiro-kamado-nezuko-10-small.jpg?1643097918",
  },
  {
    _id: 2,
    title: "villain",
    type: "VILLAIN_TYPE",
    villain: true,
    description:
      "A villain is defined as an evil or wicked character that enacts evil action and/or harms others.",
    image_url: "https://www.favorgk.com/cdn/shop/products/001_30a105ce-d7e2-4d86-897e-2dab11d7dee8_3120x.jpg?v=1619204798",
  },
  {
    _id: 3,
    title: "anti-hero",
    type: "ANTI_HERO_TYPE",
    antiHero: true,
    description:
      "An antihero (sometimes spelled as anti-hero) or antiheroine is a main character in a story who may lack conventional heroic qualities and attributes, such as idealism, courage, and morality.",
    image_url: "https://www.senseitoy.com/image/catalog/Fantasy/Akaza/Fantasy-Akaza-Upper-Moon-3-resin-statue-4.gif",
  },
];
