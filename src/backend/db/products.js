import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [





  {
    _id: "1",
    name: "Goku",
    details: "Height: 5'9\", Race: Saiyan",
    price: 1649.99,
    originalPrice: 3999,
    category: "Dragon Ball",
    instock: true,
    discount: 10,
    hero: true,
    type: 'hero',
    rating: 4.9,
    image_url: "https://www.theyouthspace.in/cdn/shop/files/IMG-20230516-WA0074.jpg?v=1684231586&width=2048"
  },
  {
    _id: "2",
    name: "Vegeta",
    details: "Height: 5'5\", Race: Saiyan",
    price: 1549.99,
    originalPrice: 3999,
    category: "Dragon Ball",
    instock: true,
    discount: 10,
    antiHero: true,
    type: "antiHero",
    rating: 4.8,
    image_url: "https://cdn.shopify.com/s/files/1/0598/7578/6884/products/Sade5cb7b0d9b4d41988f23b463efab9en.jpg?v=1667262711"
  },
  {
    _id: "3",
    name: "Sasuke Uchiha",
    details: "Height: 5'10\", Clan: Uchiha",
    price: 1344.99,
    originalPrice: 3499,
    category: "Naruto",
    instock: true,
    discount: 12,
    antiHero: true,
    type: "antiHero",
    rating: 4.7,
    image_url: "https://cdn.shopify.com/s/files/1/0011/8367/8476/products/NarutoSetof12_6_5059b7c0-98b2-4c9e-874f-14d9edf8b631_1400x.png?v=1646648108"
  },
  {
    _id: "4",
    name: "Itachi Uchiha",
    details: "Height: 5'11\", Clan: Uchiha",
    price: 1742.99,
    originalPrice: 3299,
    category: "Naruto",
    instock: false,
    discount: 18,
    villain: true,
    type: "villain",
    rating: 2.1,
    image_url: "https://japanworld.it/66180-large_default/megahouse-precious-gem-series-naruto-shippuden-itachi-uchiha-susanoo.jpg"
  },
  {
    _id: "5",
    name: "Ichigo Kurosaki",
    details: "Height: 6'0\", Soul Reaper",
    price: 4499,
    originalPrice: 8999,
    category: "Bleach",
    instock: true,
    discount: 15,
    hero: true,
    type: 'hero',
    rating: 4.6,
    image_url: "https://i0.wp.com/informationislnd.com/wp-content/uploads/2020/08/Tsume-HQS-Kurosaki-Ichigo-final-getsuga-tensh%C5%8D.jpg?fit=1440%2C1035&ssl=1"
  },
  {
    _id: "6",
    name: "Kisuke Urahara",
    details: "Height: 5'11\", Occupation: Former Captain",
    price: 1420,
    originalPrice: 2499,
    category: "Bleach",
    instock: false,
    discount: 20,
    hero: true,
    type: 'hero',
    rating: 5,
    image_url: "https://preview.redd.it/wd8rf4k9gx571.jpg?auto=webp&s=9446fb7776664b1969bd61fe746cb307641a1be4"
  },
  {
    _id: "7",
    name: "Lelouch vi Britannia",
    details: "Height: 5'9\", Alias: Zero",
    price: 1999,
    originalPrice: 2999,
    category: "Code Geass",
    instock: true,
    discount: 12,
    antiHero: true,
    type: "antiHero",
    rating: 3.2,
    image_url: "https://www.pvcfigures.com/wp-content/uploads/2021/05/Code-Geass-Lelouch-of-the-Rebellion-Deformed-Vignette-Doll-Lelouch-12-cm-20484.jpg"
  },
  {
    _id: "8",
    name: "Light Yagami",
    details: "Height: 5'10\", Occupation: Student",
    price: 1799,
    originalPrice: 2799,
    category: "Death Note",
    instock: true,
    discount: 8,
    villain: true,
    type: "villain",
    rating: 4.7,
    image_url: "https://preview.redd.it/new-game-toys-1-6-scale-death-note-figures-l-light-yagami-v0-ugr9s5qdt50a1.jpg?width=528&format=pjpg&auto=webp&s=aa417785313c08c530686662c937d9d7fca46198"
  },
  {
    _id: "9",
    name: "Naruto Uzumaki",
    details: "Height: 5'10\", Occupation: Hokage",
    price: 1699,
    originalPrice: 3999,
    category: "Naruto",
    instock: true,
    discount: 10,
    hero: true,
    type: "hero",
    rating: 4.9,
    image_url: "https://m.media-amazon.com/images/I/41CrFXu4qRL._SX522_.jpg"
  },
  {
    _id: "10",
    name: "Monkey D. Luffy",
    details: "Height: 5'8\", Occupation: Pirate",
    price: 1599,
    originalPrice: 3599,
    category: "One Piece",
    instock: false,
    discount: 20,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://m.media-amazon.com/images/I/51M4VKXcDCL._SX522_.jpg"
  },
  {
    _id: "11",
    name: "Trafalgar D. Water Law",
    details: "Height: 6'2\", Occupation: Pirate",
    price: 1499,
    originalPrice: 3499,
    category: "One Piece",
    instock: true,
    discount: 15,
    antiHero: true,
    type: "antiHero",
    rating: 4.8,
    image_url: "https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/5e1c7948-6dd9-4bc4-846d-fcdc4ef20e1a/1679634278266.jpeg"
  },




  {
    _id: "12",
    name: "Edward Elric",
    details: "Height: 5'4\", Occupation: Alchemist",
    price: 2199,
    originalPrice: 3299,
    category: "Fullmetal Alchemist",
    instock: false,
    discount: 18,
    hero: true,
    type: 'hero',
    rating: 4.9,
    image_url: "https://images.goodsmile.info/cgm/images/product/20220328/12511/97046/large/7616e731e2f5648cb1be9c0a38f8da29.jpg"
  },
  {
    _id: "13",
    name: "Envy",
    details: "Height: Variable, Homunculus",
    price: 1799,
    originalPrice: 2799,
    category: "Fullmetal Alchemist",
    instock: true,
    discount: 8,
    villain: true,
    type: "villain",
    rating: 4.7,
    image_url: "https://animestore.cz/15082-medium_default/fullmetal-alchemist-nendoroid-action-figure-envy-10-cm.jpg"
  },



  {
    _id: "14",
    name: "Eren Yeager",
    details: "Height: 5'9\", Titan Shifter",
    price: 2699,
    originalPrice: 3599,
    category: "Attack on Titan",
    instock: true,
    discount: 15,
    hero: true,
    type: 'hero',
    rating: 4.8,
    image_url: "https://bbts1.azureedge.net/images/p/full/2021/01/9136be96-1c39-4412-ae16-06df13964e0e.jpg"
  },
  {
    _id: "15",
    name: "Levi Ackerman",
    details: "Height: 5'3\", Occupation: Captain",
    price: 2199,
    originalPrice: 3499,
    category: "Attack on Titan",
    instock: true,
    discount: 12,
    antiHero: true,
    type: "antiHero",
    rating: 4.7,
    image_url: "https://image.pushauction.com/0/0/af68162d-69e1-48d4-b847-145734432fb9/46ee2e81-5f6a-4633-b549-7f0080ae628b.jpeg"
  },
  {
    _id: "16",
    name: "Meliodas",
    details: "Height: 5'9\", Sin: Dragon's Sin of Wrath",
    price: 1999,
    originalPrice: 2999,
    category: "The Seven Deadly Sins",
    instock: true,
    discount: 10,
    hero: true,
    type: 'hero',
    rating: 4.6,
    image_url: "https://pbs.twimg.com/media/FIiMtR5WQAwaq2g.jpg:large"
  },
  {
    _id: "17",
    name: "Escanor",
    details: "Height: 6'5\", Sin: Lion's Sin of Pride",
    price: 2499,
    originalPrice: 3399,
    category: "The Seven Deadly Sins",
    instock: false,
    discount: 20,
    villain: true,
    type: "villain",
    rating: 4.9,
    image_url: "https://cdna.artstation.com/p/assets/images/images/017/381/862/large/chanhyuk-yu-screenshot000.jpg"
  },
  {
    _id: "18",
    name: "Izuku Midoriya",
    details: "Height: 5'5\", Quirk: One For All",
    price: 2699,
    originalPrice: 3599,
    category: "My Hero Academia",
    instock: true,
    discount: 15,
    hero: true,
    type: 'hero',
    rating: 4.8,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjd13wvBxrVutDXfYaPi5nkHD8HhjRjW1ZVA&usqp=CAU"
  },
  {
    _id: "19",
    name: "Katsuki Bakugo",
    details: "Height: 5'7\", Quirk: Explosion",
    price: 2499,
    originalPrice: 3499,
    category: "My Hero Academia",
    instock: true,
    discount: 12,
    antiHero: true,
    type: "antiHero",
    rating: 4.7,
    image_url: "https://cdn.shopify.com/s/files/1/0521/2418/8872/products/hr_uncr462547ucb.jpg?v=1658903278"
  },





  {
    _id: "20",
    name: "Gon Freecss",
    details: "Height: 5'1\", Nen Type: Enhancement",
    price: 1999,
    originalPrice: 2999,
    category: "Hunter x Hunter",
    instock: true,
    discount: 10,
    hero: true,
    type: "hero",
    rating: 4.6,
    image_url: "https://www.favorgk.com/cdn/shop/products/501_fb4ca793-5cf4-4497-821d-d40e7f9aa3f2_530x@2x.jpg?v=1637425748"
  },
  {
    _id: "21",
    name: "Hisoka Morow",
    details: "Height: 6'0\", Nen Type: Transmutation",
    price: 2399,
    originalPrice: 3399,
    category: "Hunter x Hunter",
    instock: false,
    discount: 18,
    villain: true,
    type: "villain",
    rating: 4.9,
    image_url: "https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/168/546/1_351b650c-7bb9-4d11-8f19-7a8237671e79__31877.1682765399.jpg?c=1"
  },
  {
    _id: "22",
    name: "Natsu Dragneel",
    details: "Height: 5'9\", Magic: Fire Dragon Slayer",
    price: 1899,
    originalPrice: 2899,
    category: "Fairy Tail",
    instock: true,
    discount: 8,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://i.pinimg.com/originals/33/3c/6e/333c6e7c7fe56f3b2344d31afa6fe316.jpg"
  },


  {
    _id: "23",
    name: "Zeref Dragneel",
    details: "Height: 6'0\", Magic: Black Arts",
    price: 1299,
    originalPrice: 3299,
    category: "Fairy Tail",
    instock: true,
    discount: 15,
    villain: true,
    type: "villain",
    rating: 4.8,
    image_url: "https://i.ebayimg.com/images/g/ogUAAOSwnCRiG3DV/s-l1600.jpg"
  },
  {
    _id: "24",
    name: "Roronoa Zoro",
    details: "Height: 5'11\", Occupation: Swordsman",
    price: 1799,
    originalPrice: 2799,
    category: "One Piece",
    instock: true,
    discount: 12,
    hero: true,
    type: 'hero',

    rating: 4.6,
    image_url: "https://shonenroad.com/wp-content/uploads/2022/09/roronoa-zoro-img.png"
  },
  {
    _id: "25",
    name: "Dio Brando",
    details: "Height: 6'0\", Stand: The World",
    price: 1999,
    originalPrice: 2999,
    category: "JoJo's Bizarre Adventure",
    instock: false,
    discount: 2,
    villain: true,
    type: "villain",
    rating: 4.9,
    image_url: "https://www.favorgk.com/cdn/shop/products/502_c5fd20fb-1120-4ccb-81ce-2208a10015f5_1024x1024@2x.jpg?v=1656063808"
  },
  {
    _id: "26",
    name: "Yusuke Urameshi",
    details: "Height: 5'8\", Occupation: Spirit Detective",
    price: 2499,
    originalPrice: 3499,
    category: "Yu Yu Hakusho",
    instock: true,
    discount: 15,
    hero: true,
    type: 'hero',
    rating: 4.8,
    image_url: "https://cdn.shopify.com/s/files/1/0260/4095/9047/products/65384-2823566.jpg?v=1670312508"
  },
  {
    _id: "27",
    name: "Hatake Kakashi",
    details: "Height: 6'0\", Occupation: Former Spirit Detective",
    price: 2199,
    originalPrice: 3299,
    category: "Yu Yu Hakusho",
    instock: false,
    discount: 18,
    villain: true,
    type: "villain",
    rating: 4.7,
    image_url: "https://cdna.artstation.com/p/assets/images/images/062/858/794/large/horizon-_lite-2.jpg?1684145692"
  },
  {
    _id: "28",
    name: "Saitama",
    details: "Height: 5'9\", Hero Rank: S-Class",
    price: 2699,
    originalPrice: 3599,
    category: "One-Punch Man",
    instock: true,
    discount: 12,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://cdn.shopify.com/s/files/1/0380/6380/0459/products/pre-order-one-punch-man-saitama-17-scale-figureopm-01-10ax-385325.jpg?v=1657281174"
  },
  {
    _id: "29",
    name: "Lord Boros",
    details: "Height: 7'0\", Alien",
    price: 2299,
    originalPrice: 3299,
    category: "One-Punch Man",
    instock: true,
    discount: 10,
    villain: true,
    type: "villain",
    rating: 4.6,
    image_url: "https://media.karousell.com/media/photos/products/2022/5/9/kitsune_statue__one_punch_man__1652100115_59f4c0b3_progressive"
  },
  {
    _id: "30",
    name: "Eren Yeager",
    details: "Height: 5'9\", Titan Shifter",
    price: 2699,
    originalPrice: 3599,
    category: "Attack on Titan",
    instock: true,
    discount: 15,
    hero: true,
    type: 'hero',
    rating: 4.8,
    image_url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fgood-smile-company-attack-on-titan-eren-yeager-figure-001.jpg?q=75&w=800&cbr=1&fit=max"
  },



  {
    _id: "31",
    name: "Annie Leonhart",
    details: "Height: 5'6\", Titan Shifter",
    price: 2499,
    originalPrice: 3499,
    category: "Attack on Titan",
    instock: true,
    discount: 12,
    villain: true,
    type: "villain",
    rating: 4.7,
    image_url: "https://imgs2.goodsmileus.com/image/cache/data/productimages/Nendoroids/AnnieLeonhart/03_2301171122502167-1200x1200.jpg"
  },



  {
    _id: "32",
    name: "Gohan",
    details: "Height: 5'1\", Nen Type: Enhancement",
    price: 1999,
    originalPrice: 2999,
    category: "Dragon Ballz",
    instock: true,
    discount: 10,
    hero: true,
    type: 'hero',
    rating: 4.6,
    image_url: "https://sc04.alicdn.com/kf/H3c6fa808cc5d442d8e625b2d17bd4eddz.jpg"
  },
  {
    _id: "33",
    name: "Picolo",
    details: "Height: 6'0\", Nen Type: Transmutation",
    price: 1899,
    originalPrice: 3399,
    category: "Dragon Ballz",
    instock: false,
    discount: 18,
    villain: true,
    type: "villain",
    rating: 4.9,
    image_url: "https://cdn.shopify.com/s/files/1/2566/3552/products/WechatIMG2897_1200x1200.jpg?v=1605115733"
  },
  {
    _id: "34",
    name: "All Might",
    details: "Height: 5'5\", Quirk: One For All",
    price: 1249,
    originalPrice: 3599,
    category: "My Hero Academia",
    instock: true,
    discount: 15,
    hero: true,
    type: 'hero',
    rating: 4.8,
    image_url: "https://cf.shopee.com.br/file/1373b826dc7fa9c03bd73bafda220fc9"
  },
  {
    _id: "35",
    name: "Tomura Shigaraki",
    details: "Height: 5'9\", Quirk: Decay",
    price: 2599,
    originalPrice: 3299,
    category: "My Hero Academia",
    instock: true,
    discount: 10,
    villain: true,
    type: "villain",
    rating: 4.7,
    image_url: "https://i0.wp.com/japandco.net/wp-content/uploads/2022/12/ICHIBAN-KUJI-MY-HERO-ACADEMIA-DEATH-STRUGGLE-FIGURINE-TOMURA-SHIGARAKI-LOT-E-JAPANDCO-2.jpg?fit=1080%2C1080&ssl=1"
  },
  {
    _id: "36",
    name: "Kamado Tanjiro",
    details: "Height: 5'9\", Magic: Fire Dragon Slayer",
    price: 899,
    originalPrice: 2899,
    category: "Demon Slayer",
    instock: true,
    discount: 8,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://p-bandai.com/img/sg/p/m/N2590593001001_002.jpg"
  },
  {
    _id: "37",
    name: "kamado Nejuko",
    details: "Height: 6'0\", Magic: Black Arts",
    price: 1699,
    originalPrice: 3299,
    category: "Demon Slayer",
    instock: true,
    discount: 15,
    villain: true,
    type: "villain",
    rating: 4.8,
    image_url: "https://images-na.ssl-images-amazon.com/images/I/61vbIydY9uL.jpg"
  },
  {
    _id: "38",
    name: "Madara Uchiha",
    details: "Height: 5'8\", Occupation: Pirate",
    price: 2599,
    originalPrice: 3599,
    category: "Demon Slayer",
    instock: false,
    discount: 20,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://images-cdn.ubuy.co.in/633aa0de7df7c81c19758145-anime-gk-susanoo-uchiha-madara-anime-pvc.jpg"
  },
  {
    _id: "39",
    name: "Inosuke Hasibira",
    details: "Height: 5'8\", Occupation: Pirate",
    price: 2599,
    originalPrice: 3599,
    category: "Demon Slayer",
    instock: false,
    discount: 20,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://sc04.alicdn.com/kf/H9d0dfba6a6e944798d89760756892cbfU.png"
  },
  {
    _id: "40",
    name: "Agatsuma Zenitsu",
    details: "Height: 5'8\", Occupation: Pirate",
    price: 2599,
    originalPrice: 3599,
    category: "Demon Slayer",
    instock: false,
    discount: 20,
    hero: true,
    type: 'hero',
    rating: 4.7,
    image_url: "https://images-na.ssl-images-amazon.com/images/I/A1CmioDXzNL.jpg"
  }









  // above data is being added


]
