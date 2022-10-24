import { uuid } from "uuidv4";

interface ProductItem {
  artist: string;
  album: string;
  price: string;
  year: string;
  image: string;
  id: string;
}

export const Products = {
  newProducts: <ProductItem[]>[
    {
      artist: "Ants From Up There",
      album: "Black Country, New Road",
      price: "50",
      year: "2022",
      image:
        "https://cdn2.albumoftheyear.org/750x/album/424961-ants-from-up-there.jpg",
      id: uuid(),
    },
    {
      artist: "Beyoncé",
      album: "Renaissance",
      price: "60",
      year: "2022",
      image:
        "https://cdn2.albumoftheyear.org/750x/album/515536-renaissance-1.jpg",
      id: uuid(),
    },
    {
      artist: "Nova Twins",
      album: "Supernova",
      price: "50",
      year: "2022",
      image: "https://cdn2.albumoftheyear.org/750x/album/465501-supernova.jpg",
      id: uuid(),
    },
    {
      artist: "The Weeknd",
      album: "Dawn FM",
      price: "55",
      year: "",
      image:
        "https://lh3.googleusercontent.com/5teqUPmWiFmagN0RggBKRXSW1zUj5_fVCEhbVhN6qt519EyHj6njy1x8dnJcRWNhQ5cl4dZgGaxbyqgv=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "FKA twigs",
      album: "CAPRISONGS",
      price: "65",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/oA73rK1lBPE_-6Ya0Me-uZX7nk2e0oJk-46IH6uFB40XU6z1WI7wSGNDo4YHr8B2iEU98hwm9jpEr2s=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Charli XCX",
      album: "CRASH",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/xbDTnd95Dcq7goxaFLiC9_K8abd_96NBZfP96T85Bu0CI5_IW7hc7vo0bJR-tPpH434B_WoXWBSXFmug=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Mitski",
      album: "Laurel Hell",
      price: "58",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/PCNp2F8G7tT864ZqYSrDYoeXmd1tvXA3pBcF6N5Vk5X-b68idyF9UtdJqEZOzqcZJ6Dl6iGTmiYFZjDHOw=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Harry Styles",
      album: "Harry's House",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/F618Qwn2yRlYhCqlMtEMnFHajg4rGZSGeWOF4ro7l3I9R6y7aGfowqqiNQqj6CgVR0yepTK6T5aRSfAF=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Kendrick Lamar",
      album: "Mr. Morale & the Big Steppers",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/ZSS6In_G6CBqzWhCtltNUxoirj2MUwOJ1MaVEauxTePsjBt6OwOtC6jN1YHd3OqnJbRq84rLk-Cy4dW3=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Beach House",
      album: "Once Twice Melody",
      price: "76",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/LbvAYjHilKECpccK415yIoR-yYjF2QeCaLqSDxRCRMWZVtdkkqYR9RUEuwOB3QVRcP6NOFEXrc9_So8=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Cult of Luna",
      album: "The Long Road North",
      price: "79",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/Ql79jQPYvKx3hGnvD7EQ13_NK5MWAkk3JeJoix5Z_oR6yRCBiH43ph3MBnuY5UkM9-IVid_7xcHpKCfY=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Florence + the Machine",
      album: "Dance Fever",
      price: "55",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/ZXUTwA-JkSXUGrLZ2vlbLXc5KKbOcQlhF8mhmommDegKGLkPEZDNPlzjLZ2hhodrbr9PWOlqtIY1B7g=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "The Smile",
      album: "A Light For Attracting Attention",
      price: "80",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/i2Ec3r3KCafB-SCYbPAK2M3zBvQJgVW5Cs_2cnpPB9duMSYETK0slGYzfCWiZFbSwJTTsmdKRTUcneQ2=w544-h544-l90-rj",
      id: uuid(),
    },

    {
      artist: "black midi",
      album: "Hellfire",
      price: "63",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/2y71XK6uz1CY9RysbzUr9b5Y-jqQpwwyQ4eSeSDF7-gWIyytW6OD2Gp8VTVL8OX4tEgDKYTs7rMePsk=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Avril Lavigne",
      album: "Love Sux",
      price: "71",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/U3celp0_C0eecLCLGj39kBAhhnOhCDyxEGeUMMBjGSozO_l-TCuKZiabwL6LJTA-bWmHJbcC98jwJEP7=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Red Hot Chili Peppers",
      album: "Unlimited Love",
      price: "55",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/OyjJAh6GLUJkxmzfHj4vam19bRHbu0qn1gx2Dm83rhCzkBu2YdesQaDjnuwtEqOVu8KFAw5YzNF7zviF=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "alt-J",
      album: "The Dream",
      price: "60",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/PqwxHCaoVIqqDQVAwFYvD-C9MRX5YLHIEoFy7zwKt-uElFVyVg7X8u1vek7WSZuraMlQ7pnmmd16S_I=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Celeste",
      album: "Assassine(s)",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/1k2OKb8nPHxKMGp300vO0QNVI5JKsJ_2cQcJAuaZ2BZdm9WOtQRMWgkV1Tcj5Bn0hXJJj0NbRVr5r7tt=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "BANKS",
      album: "Serpentina",
      price: "65",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/aE4Vuq9b_QVpPIIp9I3L0x13HEQqsqO3YpXYlIE1EWT2Z99RHegUq4diVeXNAP07MX5vVixloMJn84uSlw=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Wet Leg",
      album: "Wet Leg",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/8Q_GLHY6a5YaeWdRqdIs4vEt5stFFq9teqVAze-zxxub1j9HMgAXempxftTAN-P5664qEXFfZON87WLkew=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Tears for Fears",
      album: "The Tipping Point",
      price: "60",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/g7qS_LOwTcSJtROZxP4pxwpeAwLsSHCFljU-Oz2pAiZoGOP0_DqrbD2TWFEznLN-5N-a18HIO1NEOX69=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Stromae",
      album: "Multitude",
      price: "56",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/CPDQdsXKtZmWop2i5PGKIOKaFbphN_JbGX2L_ljyUNTFFkOWgQnzvtDLYzBKYXNrXySo1ZYCF3vxDJ1u=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "yeule",
      album: "Glitch Princess",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/EoCPgqmvP3W3mbGq0VZatQfdVS7ELTSLp5ithsVQBhEr6uLR1x9x66N8cZooqhKysDOVxbD0qJNbpqY=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Foxes",
      album: "The Kick",
      price: "640",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/takK74R_S4U7Mz1WIERQyYU1yunF2a7FG68g6w5s0y8nNtO8zdvc2Z46fwCAwTv2CJjT1r0mzmD1c8I=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Hatchie",
      album: "Giving The World Away",
      price: "55",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/6ocSHoyTkQYWC3OGn7ndS5BL2L1bF11x1E2oQxnEut7s0Y-H0AreYLj3mXae-UsBbEuextHRwyZVemQY=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Arcade Fire",
      album: "WE",
      price: "59",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/WzhZBqSKfc54qkNaRwPxpFt3mhodihkcKuxxyyJ2C7plRwYZs2imE-db_AiBG0-eXbjUD6-JzcMIVkjxWQ=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Viagra Boys",
      album: "Cave World",
      price: "70",
      year: "2022",
      image:
        "https://lh3.googleusercontent.com/Zfz4oqMKGzMPV_hS9B8JBeH_HWYNgeBO4nBSmDNYbuydxEP2bZKO1oFyqighAdMURxFOp0hJZ3IqphiH=w544-h544-l90-rj",
      id: uuid(),
    },
  ],

  vinylClassic: <ProductItem[]>[
    {
      artist: "Kate Bush",
      album: "The Hounds Of Love",
      price: "99",
      year: "1980",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/Kate-Bush-Hounds-Of-Love-Vinyl-1.jpg",
      id: uuid(),
    },
    {
      artist: "Pink Floyd ",
      album: "Dark Side Of The Moon",
      price: "120",
      year: "1973",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/darksideofthemoon.jpg",
      id: uuid(),
    },
    {
      artist: "Miles Davis",
      album: "Kind of Blue",
      price: "150",
      year: "1959",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/milesdavis-kindofblue.jpg",
      id: uuid(),
    },
    {
      artist: "The Doors",
      album: "The Doors",
      price: "125",
      year: "1967",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/thedoorsthedoors.jpg",
      id: uuid(),
    },
    {
      artist: "leetwood Mac",
      album: "Rumours",
      price: "1977",
      year: "100",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/fleetwoodmac-rumours.jpg",
      id: uuid(),
    },
    {
      artist: "Michael Jackson",
      album: "Thriller",
      price: "170",
      year: "1982",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/michaeljackson-thriller.jpg",
      id: uuid(),
    },
    {
      artist: "Oasis ",
      album: "What’s The Story Morning Glory",
      price: "130",
      year: "1995",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/oasis-whatsthestorymorningglory.jpg",
      id: uuid(),
    },
    {
      artist: "The White Stripes",
      album: "Elephant",
      price: "150",
      year: "2003",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/whitestripes-elephant.jpg",
      id: uuid(),
    },
    {
      artist: "Neil Young",
      album: "After The Gold Rush",
      price: "1970",
      year: "135",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/neilyoung-afterthegoldrush.jpg",
      id: uuid(),
    },
    {
      artist: "The Rolling Stones",
      album: "Sticky Fingers",
      price: "140",
      year: "1971 ",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/rollingstones-stickyfingers.jpg",
      id: uuid(),
    },
    {
      artist: "T-Rex",
      album: "Electric Warrior",
      price: "130",
      year: "1971",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/trex-electricwarrior.jpg",
      id: uuid(),
    },
    {
      artist: "Aretha Franklin ",
      album: " I Never Loved a Man The Way I Love You",
      price: "160",
      year: "1967",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/arethafranklin-ineverlovedamantheway.jpg",
      id: uuid(),
    },
    {
      artist: "Wu-Tang Clan",
      album: "Enter The Wu-Tang",
      price: "150",
      year: "1993",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/wutangclan-enterthewutang.jpg",
      id: uuid(),
    },
    {
      artist: "Nirvana",
      album: "Nevermind",
      price: "180",
      year: "1991",
      image:
        "https://www.yoursoundmatters.com/wp-content/uploads/2021/11/nirvana-nevermind.jpg",
      id: uuid(),
    },
  ],
  soundtracks: <ProductItem[]>[
    {
      artist: "Various Artists",
      album: "Promising Young Woman",
      price: "100",
      year: "2020",
      image:
        "https://lh3.googleusercontent.com/iXaNg1W6wUB3dei7jhrWalCY9uvpVUzkFR1vf2-MffGr_lsqL6zo4OB4k4u80l5nqR6qt91ouTSKmMk=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "TheLadybumbum",
      album: "Romeo + Juliet Soundtrack",
      price: "75",
      year: "2020",
      image:
        "https://lh3.googleusercontent.com/s5SBd5bkQegdE4qyrFTnBgLejTAwo3-9snUFHnyY3UGZ5n-jTjgxUkwRctnKsD3jj-w4ZaQd6Ndl1us=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Various Artists ",
      album: "One Night In Miami...",
      price: "110",
      year: "2021",
      image:
        "https://lh3.googleusercontent.com/aG0bDHeO-C2p4F6WEk5li8PehjWFA8mfvB3XPFy1hyBn9ejS8azdEK4JVOsg_86hwd2p7lg6xOq3A96Y=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Various Artists",
      album: "Motherless Brooklyn",
      price: "99",
      year: "2019",
      image:
        "https://lh3.googleusercontent.com/VTi4gwHS5mdarttcPLk6MOKEd4l__pPTCag7I3EhR-8M2KnAoayaS14rMJjNoVmif3d2WBCxVA_N-G1S=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "John DuPrez ",
      album: "Teenage Mutant Ninja Turtles I",
      price: "150",
      year: "2021",
      image:
        "https://lh3.googleusercontent.com/42BjdMHUUbq2WrFRCmlhoO5rQXMH_b_CqcyN3yACjQ8dgsl5gEPtgf22iMUJf3ihvSgWzgdmAha5TU4=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "John DuPrez ",
      album: "Teenage Mutant Ninja Turtles II",
      price: "120",
      year: "2021",
      image:
        "https://lh3.googleusercontent.com/42BjdMHUUbq2WrFRCmlhoO5rQXMH_b_CqcyN3yACjQ8dgsl5gEPtgf22iMUJf3ihvSgWzgdmAha5TU4=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "John DuPrez ",
      album: "Teenage Mutant Ninja Turtles III",
      price: "200",
      year: "2021",
      image:
        "https://lh3.googleusercontent.com/42BjdMHUUbq2WrFRCmlhoO5rQXMH_b_CqcyN3yACjQ8dgsl5gEPtgf22iMUJf3ihvSgWzgdmAha5TU4=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "John Carpenter & Alan Howarth",
      album: "Prince Of Darkness ",
      price: "100",
      year: "1987",
      image:
        "https://lh3.googleusercontent.com/gjX6A6LRCl09rT8LLvcWz4eh9tjS8n5ekUDNUakjNRNdHRSNBpWQacHMsCs4Mzdym0Q2-o26-Iqo1g-z=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Martin Phipps",
      album: "The Crown: Season Four",
      price: "130",
      year: "2020",
      image:
        "https://lh3.googleusercontent.com/1jwgFevtkATlrY9SiKJIdB-pTg23Z78OYh16Hy83mxWry_slaIEojbOyF9OstcZodt1Y5S2lgSCsToOWwA=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Ludwig Göransson ",
      album: "TENET",
      price: "170",
      year: "2020",
      image:
        "https://lh3.googleusercontent.com/KeajaD_DyMiUzl8HEry1Xl8cXMPBzoveRLxKMsWJwaCxtsnXCDgh78u2uh-qetTE22XKZUJGcr0_URfd=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "James Newton Howard ",
      album: "News of The World",
      price: "150",
      year: "2020",
      image:
        "https://lh3.googleusercontent.com/90tQMAGPsptyCGb5eRl0wb0tSQ58KVYJPQ7TVGxquzOtqm-mhezhEF-XyxjWmsn_HuXguMhJAp9mKmo=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Vince DiCola",
      album: "The Transformers: The Movie",
      price: "110",
      year: "2016",
      image:
        "https://lh3.googleusercontent.com/7LeVrXxi2WgAfYSM_85jxl96ZRO_sS2lympEbUb8j2CsChDvVgI9AGqhMDmBHheI7JMC-bj8SSOXOvjc=w544-h544-l90-rj",
      id: uuid(),
    },
    {
      artist: "Various Artists",
      album: "Spider-Man: Into the Spider-Verse",
      price: "150",
      year: "2018",
      image:
        "https://lh3.googleusercontent.com/IBwK4LOs4sO-Cd-_5YO4XC2B2N1hvyBvKfr60tT_ljIuwmOuVWWW2NypbcvzKgScVAbRsWEYbmsjfcm2cw=w544-h544-l90-rj",
      id: uuid(),
    },
    // {
    //     artist: '',
    //     album: '',
    //     price: '',
    //     year: '',
    //     image: '',
    //     id: uuid(),
    // },
    // {
    //     artist: '',
    //     album: '',
    //     price: '',
    //     year: '',
    //     image: '',
    //     id: uuid(),
    // },
    // {
    //     artist: '',
    //     album: '',
    //     price: '',
    //     year: '',
    //     image: '',
    //     id: uuid(),
    // },
    // {
    //     artist: '',
    //     album: '',
    //     price: '',
    //     year: '',
    //     image: '',
    //     id: uuid(),
    // },
  ],
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },

  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // {
  //     artist: '',
  //     album: '',
  //     price: '',
  //     year: '',
  //     image: '',
  //     id: uuid(),
  // },
  // ]
};

// module.exports = Products;
