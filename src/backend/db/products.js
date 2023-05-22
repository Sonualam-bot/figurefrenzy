import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [





  {
    _id: 1,
    name: "Goku",
    details: "Height: 5'9\", Race: Saiyan",
    price: 1649.99,
    originalPrice: 3999,
    category: "Dragon Ball",
    instock: true,
    discount: 10,
    hero: true,

    rating: 4.9,
    image_url: "https://www.theyouthspace.in/cdn/shop/files/IMG-20230516-WA0074.jpg?v=1684231586&width=2048"
  },
  {
    _id: 2,
    name: "Vegeta",
    details: "Height: 5'5\", Race: Saiyan",
    price: 1549.99,
    originalPrice: 3999,
    category: "Dragon Ball",
    instock: true,
    discount: 10,
    antiHero: true,
    rating: 4.8,
    image_url: "https://i.etsystatic.com/39017591/r/il/746c1f/4721122614/il_fullxfull.4721122614_tonj.jpg"
  },
  {
    _id: 3,
    name: "Sasuke Uchiha",
    details: "Height: 5'10\", Clan: Uchiha",
    price: 1344.99,
    originalPrice: 3499,
    category: "Naruto",
    instock: true,
    discount: 12,
    antiHero: true,
    rating: 4.7,
    image_url: "https://m.media-amazon.com/images/I/51y2U70hZKL._SY450_.jpg"
  },
  {
    _id: 4,
    name: "Itachi Uchiha",
    details: "Height: 5'11\", Clan: Uchiha",
    price: 1742.99,
    originalPrice: 3299,
    category: "Naruto",
    instock: false,
    discount: 18,
    villain: true,
    rating: 2.1,
    image_url: "https://m.media-amazon.com/images/I/711WeAPa1eL._SY355_.jpg"
  },
  {
    _id: 5,
    name: "Ichigo Kurosaki",
    details: "Height: 6'0\", Soul Reaper",
    price: 4499,
    originalPrice: 8999,
    category: "Bleach",
    instock: true,
    discount: 15,
    hero: true,
    rating: 4.6,
    image_url: "https://m.media-amazon.com/images/I/51hv2KcHDGL._SY355_.jpg"
  },
  {
    _id: 6,
    name: "Kisuke Urahara",
    details: "Height: 5'11\", Occupation: Former Captain",
    price: 1420,
    originalPrice: 2499,
    category: "Bleach",
    instock: false,
    discount: 20,
    hero: true,
    rating: 5,
    image_url: "https://static.myfigurecollection.net/upload/items/1/8234-3dcf2.jpg"
  },
  {
    _id: 7,
    name: "Lelouch vi Britannia",
    details: "Height: 5'9\", Alias: Zero",
    price: 1999,
    originalPrice: 2999,
    category: "Code Geass",
    instock: true,
    discount: 12,
    antiHero: true,
    rating: 3.2,
    image_url: "https://m.media-amazon.com/images/I/81twk3hRTQL._AC_SX679_.jpg"
  },
  {
    _id: 8,
    name: "Light Yagami",
    details: "Height: 5'10\", Occupation: Student",
    price: 1799,
    originalPrice: 2799,
    category: "Death Note",
    instock: true,
    discount: 8,
    villain: true,
    rating: 4.7,
    image_url: "https://preview.redd.it/new-game-toys-1-6-scale-death-note-figures-l-light-yagami-v0-ugr9s5qdt50a1.jpg?width=528&format=pjpg&auto=webp&s=aa417785313c08c530686662c937d9d7fca46198"
  },
  {
    _id: 9,
    name: "Naruto Uzumaki",
    details: "Height: 5'10\", Occupation: Hokage",
    price: 1699,
    originalPrice: 3999,
    category: "Naruto",
    instock: true,
    discount: 10,
    hero: true,
    rating: 4.9,
    image_url: "https://m.media-amazon.com/images/I/41CrFXu4qRL._SX522_.jpg"
  },
  {
    _id: 10,
    name: "Monkey D. Luffy",
    details: "Height: 5'8\", Occupation: Pirate",
    price: 1599,
    originalPrice: 3599,
    category: "One Piece",
    instock: false,
    discount: 20,
    hero: true,
    rating: 4.7,
    image_url: "https://m.media-amazon.com/images/I/51M4VKXcDCL._SX522_.jpg"
  },
  {
    _id: 11,
    name: "Trafalgar D. Water Law",
    details: "Height: 6'2\", Occupation: Pirate",
    price: 1499,
    originalPrice: 3499,
    category: "One Piece",
    instock: true,
    discount: 15,
    antiHero: true,
    rating: 4.8,
    image_url: "https://media.karousell.com/media/photos/products/2020/7/12/preorder_one_piece_trafalgar"
  },




  {
    _id: 12,
    name: "Edward Elric",
    details: "Height: 5'4\", Occupation: Alchemist",
    price: 2199,
    originalPrice: 3299,
    category: "Fullmetal Alchemist",
    instock: false,
    discount: 18,
    hero: true,
    rating: 4.9,
    image_url: "https://images.goodsmile.info/cgm/images/product/20220328/12511/97046/large/7616e731e2f5648cb1be9c0a38f8da29.jpg"
  },
  {
    _id: 13,
    name: "Envy",
    details: "Height: Variable, Homunculus",
    price: 1799,
    originalPrice: 2799,
    category: "Fullmetal Alchemist",
    instock: true,
    discount: 8,
    villain: true,
    rating: 4.7,
    image_url: "https://animestore.cz/15082-medium_default/fullmetal-alchemist-nendoroid-action-figure-envy-10-cm.jpg"
  },



  {
    _id: 14,
    name: "Eren Yeager",
    details: "Height: 5'9\", Titan Shifter",
    price: 2699,
    originalPrice: 3599,
    category: "Attack on Titan",
    instock: true,
    discount: 15,
    hero: true,
    rating: 4.8,
    image_url: "https://bbts1.azureedge.net/images/p/full/2021/01/9136be96-1c39-4412-ae16-06df13964e0e.jpg"
  },
  {
    _id: 15,
    name: "Levi Ackerman",
    details: "Height: 5'3\", Occupation: Captain",
    price: 2199,
    originalPrice: 3499,
    category: "Attack on Titan",
    instock: true,
    discount: 12,
    antiHero: true,
    rating: 4.7,
    image_url: "https://image.pushauction.com/0/0/af68162d-69e1-48d4-b847-145734432fb9/46ee2e81-5f6a-4633-b549-7f0080ae628b.jpeg"
  },
  {
    _id: 16,
    name: "Meliodas",
    details: "Height: 5'9\", Sin: Dragon's Sin of Wrath",
    price: 1999,
    originalPrice: 2999,
    category: "The Seven Deadly Sins",
    instock: true,
    discount: 10,
    hero: true,
    rating: 4.6,
    image_url: "https://pbs.twimg.com/media/FIiMtR5WQAwaq2g.jpg:large"
  },
  {
    _id: 17,
    name: "Escanor",
    details: "Height: 6'5\", Sin: Lion's Sin of Pride",
    price: 2499,
    originalPrice: 3399,
    category: "The Seven Deadly Sins",
    instock: false,
    discount: 20,
    villain: true,
    rating: 4.9,
    image_url: "https://cdna.artstation.com/p/assets/images/images/017/381/862/large/chanhyuk-yu-screenshot000.jpg"
  },
  {
    _id: 18,
    name: "Izuku Midoriya",
    details: "Height: 5'5\", Quirk: One For All",
    price: 2699,
    originalPrice: 3599,
    category: "My Hero Academia",
    instock: true,
    discount: 15,
    hero: true,
    rating: 4.8,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjd13wvBxrVutDXfYaPi5nkHD8HhjRjW1ZVA&usqp=CAU"
  },
  {
    _id: 19,
    name: "Katsuki Bakugo",
    details: "Height: 5'7\", Quirk: Explosion",
    price: 2499,
    originalPrice: 3499,
    category: "My Hero Academia",
    instock: true,
    discount: 12,
    antiHero: true,
    rating: 4.7,
    image_url: "https://cdn.shopify.com/s/files/1/0521/2418/8872/products/hr_uncr462547ucb.jpg?v=1658903278"
  },





  {
    _id: 20,
    name: "Gon Freecss",
    details: "Height: 5'1\", Nen Type: Enhancement",
    price: 1999,
    originalPrice: 2999,
    category: "Hunter x Hunter",
    instock: true,
    discount: 10,
    hero: true,

    rating: 4.6,
    image_url: ""
  },
  {
    _id: 21,
    name: "Hisoka Morow",
    details: "Height: 6'0\", Nen Type: Transmutation",
    price: 2399,
    originalPrice: 3399,
    category: "Hunter x Hunter",
    instock: false,
    discount: 18,
    villain: true,
    rating: 4.9,
    image_url: ""
  },
  {
    _id: 22,
    name: "Natsu Dragneel",
    details: "Height: 5'9\", Magic: Fire Dragon Slayer",
    price: 1899,
    originalPrice: 2899,
    category: "Fairy Tail",
    instock: true,
    discount: 8,
    hero: true,
    rating: 4.7,
    image_url: ""
  },


  {
    _id: 23,
    name: "Zeref Dragneel",
    details: "Height: 6'0\", Magic: Black Arts",
    price: 1299,
    originalPrice: 3299,
    category: "Fairy Tail",
    instock: true,
    discount: 15,
    villain: true,
    rating: 4.8,
    image_url: ""
  },
  {
    _id: 24,
    name: "Roronoa Zoro",
    details: "Height: 5'11\", Occupation: Swordsman",
    price: 1799,
    originalPrice: 2799,
    category: "One Piece",
    instock: true,
    discount: 12,
    hero: true,
    rating: 4.6,
    image_url: ""
  },
  {
    _id: 25,
    name: "Dio Brando",
    details: "Height: 6'0\", Stand: The World",
    price: 1999,
    originalPrice: 2999,
    category: "JoJo's Bizarre Adventure",
    instock: false,
    discount: 2,
    villain: true,
    rating: 4.9,
    image_url: ""
  },
  {
    _id: 26,
    name: "Yusuke Urameshi",
    details: "Height: 5'8\", Occupation: Spirit Detective",
    price: 2499,
    originalPrice: 3499,
    category: "Yu Yu Hakusho",
    instock: true,
    discount: 15,
    hero: true,
    rating: 4.8,
    image_url: ""
  },
  {
    _id: 27,
    name: "Sensui Shinobu",
    details: "Height: 6'0\", Occupation: Former Spirit Detective",
    price: 2199,
    originalPrice: 3299,
    category: "Yu Yu Hakusho",
    instock: false,
    discount: 18,
    villain: true,
    rating: 4.7,
    image_url: ""
  },
  {
    _id: 28,
    name: "Saitama",
    details: "Height: 5'9\", Hero Rank: S-Class",
    price: 2699,
    originalPrice: 3599,
    category: "One-Punch Man",
    instock: true,
    discount: 12,
    hero: true,
    rating: 4.7,
    image_url: ""
  },
  {
    _id: 29,
    name: "Lord Boros",
    details: "Height: 7'0\", Alien",
    price: 2299,
    originalPrice: 3299,
    category: "One-Punch Man",
    instock: true,
    discount: 10,
    villain: true,
    rating: 4.6,
    image_url: ""
  },
  {
    _id: 30,
    name: "Eren Yeager",
    details: "Height: 5'9\", Titan Shifter",
    price: 2699,
    originalPrice: 3599,
    category: "Attack on Titan",
    instock: true,
    discount: 15,
    hero: true,
    rating: 4.8,
    image_url: ""
  },



  {
    _id: 31,
    name: "Annie Leonhart",
    details: "Height: 5'6\", Titan Shifter",
    price: 2499,
    originalPrice: 3499,
    category: "Attack on Titan",
    instock: true,
    discount: 12,
    villain: true,
    rating: 4.7,
    image_url: ""
  },



  {
    _id: 32,
    name: "Gon Freecss",
    details: "Height: 5'1\", Nen Type: Enhancement",
    price: 1999,
    originalPrice: 2999,
    category: "Hunter x Hunter",
    instock: true,
    discount: 10,
    hero: true,
    rating: 4.6,
    image_url: ""
  },
  {
    _id: 33,
    name: "Hisoka Morow",
    details: "Height: 6'0\", Nen Type: Transmutation",
    price: 1899,
    originalPrice: 3399,
    category: "Hunter x Hunter",
    instock: false,
    discount: 18,
    villain: true,
    rating: 4.9,
    image_url: ""
  },
  {
    _id: 34,
    name: "Izuku Midoriya",
    details: "Height: 5'5\", Quirk: One For All",
    price: 1249,
    originalPrice: 3599,
    category: "My Hero Academia",
    instock: true,
    discount: 15,
    hero: true,
    rating: 4.8,
    image_url: ""
  },
  {
    _id: 35,
    name: "Tomura Shigaraki",
    details: "Height: 5'9\", Quirk: Decay",
    price: 2599,
    originalPrice: 3299,
    category: "My Hero Academia",
    instock: true,
    discount: 10,
    villain: true,
    rating: 4.7,
    image_url: ""
  },
  {
    _id: 36,
    name: "Natsu Dragneel",
    details: "Height: 5'9\", Magic: Fire Dragon Slayer",
    price: 899,
    originalPrice: 2899,
    category: "Fairy Tail",
    instock: true,
    discount: 8,
    hero: true,
    rating: 4.7,
    image_url: ""
  },
  {
    _id: 37,
    name: "Zeref Dragneel",
    details: "Height: 6'0\", Magic: Black Arts",
    price: 1699,
    originalPrice: 3299,
    category: "Fairy Tail",
    instock: true,
    discount: 15,
    villain: true,
    rating: 4.8,
    image_url: ""
  },
  {
    _id: 38,
    name: "Monkey D. Luffy",
    details: "Height: 5'8\", Occupation: Pirate",
    price: 2599,
    originalPrice: 3599,
    category: "One Piece",
    instock: false,
    discount: 20,
    hero: true,
    rating: 4.7,
    image_url: ""
  }









  // above data is being added


]
