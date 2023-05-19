import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [

  // all villains below



  {
    _id: uuid(),
    "name": "Goku",
    "details": "Height: 5'9\", Race: Saiyan",
    "price": 1649.99,
    "originalPrice": 3999,
    "category": "Dragon Ball",
    "instock": true,
    "discount": 0.1,
    "type": "hero",
    "rating": 4.9,
    "image_url": "https://shorturl.at/lO369"
  },
  {
    _id: uuid(),
    "name": "Vegeta",
    "details": "Height: 5'5\", Race: Saiyan",
    "price": 1549.99,
    "originalPrice": 3999,
    "category": "Dragon Ball",
    "instock": true,
    "discount": 0.1,
    "type": "anti-hero",
    "rating": 4.8,
    "image_url": "https://shorturl.at/rDWY5"
  },
  {
    _id: uuid(),
    "name": "Sasuke Uchiha",
    "details": "Height: 5'10\", Clan: Uchiha",
    "price": 1344.99,
    "originalPrice": 3499,
    "category": "Naruto",
    "instock": true,
    "discount": 0.12,
    "type": "anti-hero",
    "rating": 4.7,
    "image_url": "https://m.media-amazon.com/images/I/51y2U70hZKL._SY450_.jpg"
  },
  {
    _id: uuid(),
    "name": "Itachi Uchiha",
    "details": "Height: 5'11\", Clan: Uchiha",
    "price": 1742.99,
    "originalPrice": 3299,
    "category": "Naruto",
    "instock": false,
    "discount": 0.18,
    "type": "villain",
    "rating": 4.9,
    "image_url": "https://m.media-amazon.com/images/I/711WeAPa1eL._SY355_.jpg"
  },
  {
    _id: uuid(),
    "name": "Ichigo Kurosaki",
    "details": "Height: 6'0\", Soul Reaper",
    "price": 4499,
    "originalPrice": 8999,
    "category": "Bleach",
    "instock": true,
    "discount": 0.15,
    "type": "hero",
    "rating": 4.6,
    "image_url": "https://m.media-amazon.com/images/I/51hv2KcHDGL._SY355_.jpg"
  },
  {
    _id: uuid(),
    "name": "Kisuke Urahara",
    "details": "Height: 5'11\", Occupation: Former Captain",
    "price": 1420,
    "originalPrice": 2499,
    "category": "Bleach",
    "instock": false,
    "discount": 0.2,
    "type": "hero",
    "rating": 4.5,
    "image_url": "https://static.myfigurecollection.net/upload/items/1/8234-3dcf2.jpg"
  },
  {
    _id: uuid(),
    "name": "Lelouch vi Britannia",
    "details": "Height: 5'9\", Alias: Zero",
    "price": 999,
    "originalPrice": 2999,
    "category": "Code Geass",
    "instock": true,
    "discount": 0.12,
    "type": "anti-hero",
    "rating": 4.8,
    "image_url": "https://m.media-amazon.com/images/I/81twk3hRTQL._AC_SX679_.jpg"
  },
  {
    _id: uuid(),
    "name": "Light Yagami",
    "details": "Height: 5'10\", Occupation: Student",
    "price": 37.99,
    "originalPrice": 2799,
    "category": "Death Note",
    "instock": true,
    "discount": 0.08,
    "type": "villain",
    "rating": 4.7,
    "image_url": "https://www.favorgk.com/cdn/shop/products/502_3f9c815d-e5d3-4ed0-ab79-25243c5f529b_1024x1024@2x.jpg?v=1668784739"
  },
  {
    _id: uuid(),
    "name": "Naruto Uzumaki",
    "details": "Height: 5'10\", Occupation: Hokage",
    "price": 49.99,
    "originalPrice": 3999,
    "category": "Naruto",
    "instock": true,
    "discount": 0.1,
    "type": "hero",
    "rating": 4.9,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Monkey D. Luffy",
    "details": "Height: 5'8\", Occupation: Pirate",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "One Piece",
    "instock": false,
    "discount": 0.2,
    "type": "hero",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Trafalgar D. Water Law",
    "details": "Height: 6'2\", Occupation: Pirate",
    "price": 44.99,
    "originalPrice": 3499,
    "category": "One Piece",
    "instock": true,
    "discount": 0.15,
    "type": "anti-hero",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Edward Elric",
    "details": "Height: 5'4\", Occupation: Alchemist",
    "price": 41.99,
    "originalPrice": 3299,
    "category": "Fullmetal Alchemist",
    "instock": false,
    "discount": 0.18,
    "type": "hero",
    "rating": 4.9,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Envy",
    "details": "Height: Variable, Homunculus",
    "price": 37.99,
    "originalPrice": 2799,
    "category": "Fullmetal Alchemist",
    "instock": true,
    "discount": 0.08,
    "type": "villain",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Eren Yeager",
    "details": "Height: 5'9\", Titan Shifter",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "Attack on Titan",
    "instock": true,
    "discount": 0.15,
    "type": "hero",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Levi Ackerman",
    "details": "Height: 5'3\", Occupation: Captain",
    "price": 44.99,
    "originalPrice": 3499,
    "category": "Attack on Titan",
    "instock": true,
    "discount": 0.12,
    "type": "anti-hero",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Meliodas",
    "details": "Height: 5'9\", Sin: Dragon's Sin of Wrath",
    "price": 39.99,
    "originalPrice": 2999,
    "category": "The Seven Deadly Sins",
    "instock": true,
    "discount": 0.1,
    "type": "hero",
    "rating": 4.6,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Escanor",
    "details": "Height: 6'5\", Sin: Lion's Sin of Pride",
    "price": 43.99,
    "originalPrice": 3399,
    "category": "The Seven Deadly Sins",
    "instock": false,
    "discount": 0.2,
    "type": "villain",
    "rating": 4.9,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Izuku Midoriya",
    "details": "Height: 5'5\", Quirk: One For All",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "My Hero Academia",
    "instock": true,
    "discount": 0.15,
    "type": "hero",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Katsuki Bakugo",
    "details": "Height: 5'7\", Quirk: Explosion",
    "price": 44.99,
    "originalPrice": 3499,
    "category": "My Hero Academia",
    "instock": true,
    "discount": 0.12,
    "type": "anti-hero",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Gon Freecss",
    "details": "Height: 5'1\", Nen Type: Enhancement",
    "price": 39.99,
    "originalPrice": 2999,
    "category": "Hunter x Hunter",
    "instock": true,
    "discount": 0.1,
    "type": "hero",
    "rating": 4.6,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Hisoka Morow",
    "details": "Height: 6'0\", Nen Type: Transmutation",
    "price": 43.99,
    "originalPrice": 3399,
    "category": "Hunter x Hunter",
    "instock": false,
    "discount": 0.18,
    "type": "villain",
    "rating": 4.9,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Natsu Dragneel",
    "details": "Height: 5'9\", Magic: Fire Dragon Slayer",
    "price": 38.99,
    "originalPrice": 2899,
    "category": "Fairy Tail",
    "instock": true,
    "discount": 0.08,
    "type": "hero",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Zeref Dragneel",
    "details": "Height: 6'0\", Magic: Black Arts",
    "price": 42.99,
    "originalPrice": 3299,
    "category": "Fairy Tail",
    "instock": true,
    "discount": 0.15,
    "type": "villain",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Roronoa Zoro",
    "details": "Height: 5'11\", Occupation: Swordsman",
    "price": 37.99,
    "originalPrice": 2799,
    "category": "One Piece",
    "instock": true,
    "discount": 0.12,
    "type": "hero",
    "rating": 4.6,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Dio Brando",
    "details": "Height: 6'0\", Stand: The World",
    "price": 39.99,
    "originalPrice": 2999,
    "category": "JoJo's Bizarre Adventure",
    "instock": false,
    "discount": 0.2,
    "type": "villain",
    "rating": 4.9,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Yusuke Urameshi",
    "details": "Height: 5'8\", Occupation: Spirit Detective",
    "price": 44.99,
    "originalPrice": 3499,
    "category": "Yu Yu Hakusho",
    "instock": true,
    "discount": 0.15,
    "type": "hero",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Sensui Shinobu",
    "details": "Height: 6'0\", Occupation: Former Spirit Detective",
    "price": 41.99,
    "originalPrice": 3299,
    "category": "Yu Yu Hakusho",
    "instock": false,
    "discount": 0.18,
    "type": "villain",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Saitama",
    "details": "Height: 5'9\", Hero Rank: S-Class",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "One-Punch Man",
    "instock": true,
    "discount": 0.12,
    "type": "hero",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Lord Boros",
    "details": "Height: 7'0\", Alien",
    "price": 42.99,
    "originalPrice": 3299,
    "category": "One-Punch Man",
    "instock": true,
    "discount": 0.1,
    "type": "villain",
    "rating": 4.6,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Eren Yeager",
    "details": "Height: 5'9\", Titan Shifter",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "Attack on Titan",
    "instock": true,
    "discount": 0.15,
    "type": "hero",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Annie Leonhart",
    "details": "Height: 5'6\", Titan Shifter",
    "price": 44.99,
    "originalPrice": 3499,
    "category": "Attack on Titan",
    "instock": true,
    "discount": 0.12,
    "type": "villain",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Gon Freecss",
    "details": "Height: 5'1\", Nen Type: Enhancement",
    "price": 39.99,
    "originalPrice": 2999,
    "category": "Hunter x Hunter",
    "instock": true,
    "discount": 0.1,
    "type": "hero",
    "rating": 4.6,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Hisoka Morow",
    "details": "Height: 6'0\", Nen Type: Transmutation",
    "price": 43.99,
    "originalPrice": 3399,
    "category": "Hunter x Hunter",
    "instock": false,
    "discount": 0.18,
    "type": "villain",
    "rating": 4.9,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Izuku Midoriya",
    "details": "Height: 5'5\", Quirk: One For All",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "My Hero Academia",
    "instock": true,
    "discount": 0.15,
    "type": "hero",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Tomura Shigaraki",
    "details": "Height: 5'9\", Quirk: Decay",
    "price": 42.99,
    "originalPrice": 3299,
    "category": "My Hero Academia",
    "instock": true,
    "discount": 0.1,
    "type": "villain",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Natsu Dragneel",
    "details": "Height: 5'9\", Magic: Fire Dragon Slayer",
    "price": 38.99,
    "originalPrice": 2899,
    "category": "Fairy Tail",
    "instock": true,
    "discount": 0.08,
    "type": "hero",
    "rating": 4.7,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Zeref Dragneel",
    "details": "Height: 6'0\", Magic: Black Arts",
    "price": 42.99,
    "originalPrice": 3299,
    "category": "Fairy Tail",
    "instock": true,
    "discount": 0.15,
    "type": "villain",
    "rating": 4.8,
    "image_url": ""
  },
  {
    _id: uuid(),
    "name": "Monkey D. Luffy",
    "details": "Height: 5'8\", Occupation: Pirate",
    "price": 46.99,
    "originalPrice": 3599,
    "category": "One Piece",
    "instock": false,
    "discount": 0.2,
    "type": "hero",
    "rating": 4.7,
    "image_url": ""
  }











  // above data is being added


]
