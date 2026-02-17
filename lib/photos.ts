export interface Photo {
  src: string;
  caption: string;
  year: string;
  rotation: number;
}

export interface LetterSection {
  era: string;
  yearRange: string;
  narrative: string;
  photos: Photo[];
}

export const sections: LetterSection[] = [
  {
    era: "The Beginning",
    yearRange: "2002 - 2004",
    narrative:
      "It wasn't just me and Tim anymore, and our games. Suddenly we had this little guy to contend with. Our little brother. From that moment on, everything was the three of us.",
    photos: [
      {
        src: "/Pete/2004-04-18 Tim Peter in Consevatory2.jpg",
        caption: "Tim and you in the conservatory. Already causing trouble.",
        year: "2004",
        rotation: -3,
      },
      {
        src: "/Pete/IMG_0003.jpg",
        caption: "Present was nearly bigger than you",
        year: "~2003",
        rotation: 2,
      },
      {
        src: "/Pete/IMG_0018.jpg",
        caption: "The five of us",
        year: "~2004",
        rotation: -1,
      },
    ],
  },
  {
    era: "Those Curls & That Smile",
    yearRange: "2005 - 2006",
    narrative:
      "That mop of blonde curls and the cheekiest smile going. You could get away with murder, and you knew it. Elmdon Park, birthday cakes, always wanting to hold someone's hand. You were our little shadow and we loved every second of it (well, most of the time).",
    photos: [
      {
        src: "/Pete/2005-07-17 tom peter elmdon park3.jpg",
        caption: "Elmdon Park. You wouldn't let go of my hand.",
        year: "2005",
        rotation: 3,
      },
      {
        src: "/Pete/2006-02-17 Peter 4th birthday 11.jpg",
        caption: "4th birthday. You absolutely smashed those candles.",
        year: "2006",
        rotation: -2,
      },
      {
        src: "/Pete/IMG-20240217-WA0103.jpg",
        caption: "Another year, another cake to demolish... better than Cake Box?",
        year: "~2005",
        rotation: 4,
      },
    ],
  },
  {
    era: "School Days",
    yearRange: "2007 - 2010",
    narrative:
      "First day of school in that green jumper, you looked well proud. Guitar Hero sessions where you genuinely believed you were a rockstar. Matching football shirts on holiday. The three of us were inseparable. Always were.",
    photos: [
      {
        src: "/Pete/IMG-20240217-WA0095.jpg",
        caption: "First day of school. If only you knew what was coming.",
        year: "~2007",
        rotation: -3,
      },
      {
        src: "/Pete/IMG-20240217-WA0102.jpg",
        caption: "Genuinely thought you were in a band",
        year: "~2008",
        rotation: 2,
      },
      {
        src: "/Pete/IMG-20240217-WA0097.jpg",
        caption: "Turkey. Matching shirts. No photo of the screaming episode, and no, that lady couldn't buy you for a cow.",
        year: "~2009",
        rotation: -4,
      },
    ],
  },
  {
    era: "Growing Up",
    yearRange: "2011 - 2014",
    narrative:
      "Beach days turned into proper adventures. The three of us out there together, no agenda, no plan, just us. You were still the funny one, always had everyone in stitches. But I could see you becoming your own person, and I was so proud even then.",
    photos: [
      {
        src: "/Pete/IMG-20240217-WA0093.jpg",
        caption: "The 3 of us together, looking our best",
        year: "~2013",
        rotation: 3,
      },
      {
        src: "/Pete/IMG-20240217-WA0096.jpg",
        caption: "Us three on the beach. No worries in the world.",
        year: "~2012",
        rotation: -2,
      },
      {
        src: "/Pete/IMG-20240217-WA0084.jpg",
        caption: "You lugged all of that and barely moaned. Barely.",
        year: "~2014",
        rotation: 1,
      },
    ],
  },
  {
    era: "The Witty One",
    yearRange: "2015 - 2017",
    narrative:
      "Somewhere along the way you went from being my little brother to being the funniest person I know. That wit is razor sharp, even if it is a bit annoying at times. Countryside walks, that laugh that gets me every single time. You, me, and Tim, still the same boys.",
    photos: [
      {
        src: "/Pete/IMG-20240217-WA0091.jpg",
        caption: "You hugging Tim. Tim not loving it. Classic.",
        year: "~2015",
        rotation: -3,
      },
      {
        src: "/Pete/IMG-20240217-WA0119.jpg",
        caption: "This is the laugh. Every time.",
        year: "~2016",
        rotation: 4,
      },
      {
        src: "/Pete/IMG-20240217-WA0081.jpg",
        caption: "The three of us. When the world seems a better place.",
        year: "~2017",
        rotation: -1,
      },
    ],
  },
  {
    era: "Adventures Together",
    yearRange: "2018 - 2020",
    narrative:
      "Forest hikes, seaside trips, late nights under the stars. Life started pulling us in different directions, but we always found our way back to each other. Every adventure is better with the three of us in it.",
    photos: [
      {
        src: "/Pete/IMG_1004.PNG",
        caption: "Lost in the woods. No idea where we were.",
        year: "~2018",
        rotation: 2,
      },
      {
        src: "/Pete/IMG-20220913-WA0002.jpg",
        caption: "Who's on the phone? Always one of us.",
        year: "~2019",
        rotation: -3,
      },
      {
        src: "/Pete/IMG-20240217-WA0109.jpg",
        caption: "One of our many late night wanders",
        year: "~2019",
        rotation: 1,
      },
    ],
  },
  {
    era: "Look At Us Now",
    yearRange: "2021 - 2024",
    narrative:
      "Distance separates us now, but you and Tim are still the foundation of my heart. That will never change. Beach walks, road trips, hilltops with the best view, from that curly-haired little kid to the man standing next to me. Though height might question who the big brother is these days.",
    photos: [
      {
        src: "/Pete/PXL_20220507_162447479.jpg",
        caption: "Still walking the same way we always have",
        year: "2022",
        rotation: -2,
      },
      {
        src: "/Pete/PXL_20220507_161334379.MP.jpg",
        caption: "The boys. Beach. Done.",
        year: "2022",
        rotation: 3,
      },
      {
        src: "/Pete/IMG_5027.JPG",
        caption: "Top of the world. We need more of this in life.",
        year: "~2023",
        rotation: -4,
      },
      {
        src: "/Pete/IMG-20240217-WA0112.jpg",
        caption: "Road trip. Your face. Every time. (When the van was still holding up)",
        year: "~2023",
        rotation: 2,
      },
    ],
  },
  {
    era: "Always Brothers",
    yearRange: "Forever",
    narrative:
      "Christmas mornings, video calls across the miles, woodland walks in the cold. Through every year, every chapter, every daft moment, it's always been the three of us. And it always will be.",
    photos: [
      {
        src: "/Pete/IMG_5028.JPG",
        caption: "Christmas. Crowns. The usual.",
        year: "~2023",
        rotation: -3,
      },
      {
        src: "/Pete/IMG-20240217-WA0123.jpg",
        caption: "Freezing cold, couldn't care less",
        year: "~2024",
        rotation: 2,
      },
      {
        src: "/Pete/IMG_2387.PNG",
        caption: "Different places, same brothers",
        year: "~2024",
        rotation: -1,
      },
    ],
  },
];
