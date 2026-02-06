import hunzaImg from "@/assets/destinations/hunza.jpg";
import skarduImg from "@/assets/destinations/skardu.jpg";
import swatImg from "@/assets/destinations/swat.jpg";
import naranImg from "@/assets/destinations/naran.jpg";
import fairyMeadowsImg from "@/assets/destinations/fairy-meadows.jpg";
import lahoreImg from "@/assets/destinations/lahore.jpg";
import mohenjoDaroImg from "@/assets/destinations/mohenjo-daro.jpg";
import deosaiImg from "@/assets/destinations/deosai.jpg";
import attabadImg from "@/assets/destinations/attabad.jpg";
import k2Img from "@/assets/destinations/k2.jpg";
import taxilaImg from "@/assets/destinations/taxila.jpg";
import neelumImg from "@/assets/destinations/neelum.jpg";

export interface Destination {
  id: string;
  name: string;
  region: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
}

export const destinations: Destination[] = [
  {
    id: "hunza",
    name: "Hunza Valley",
    region: "Gilgit-Baltistan",
    image: hunzaImg,
    shortDescription: "A breathtaking valley with snow-capped peaks and rich cultural heritage.",
    fullDescription: "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. The valley is known for its stunning natural beauty, ancient forts, and the legendary longevity of its inhabitants. Surrounded by majestic peaks including Rakaposhi and Ultar Sar, Hunza offers breathtaking landscapes at every turn. The valley is home to the historic Baltit and Altit forts, which have stood for over 700 years.",
    highlights: ["Baltit Fort", "Attabad Lake", "Eagle's Nest viewpoint", "Rakaposhi Base Camp", "Local apricot orchards"],
    bestTime: "April to October",
    duration: "4-5 days recommended",
    difficulty: "Moderate"
  },
  {
    id: "skardu",
    name: "Skardu",
    region: "Gilgit-Baltistan",
    image: skarduImg,
    shortDescription: "Gateway to the world's highest peaks and stunning alpine lakes.",
    fullDescription: "Skardu is a city located in Gilgit-Baltistan, serving as the gateway to some of the world's highest mountains including K2. The region is famous for its otherworldly landscapes, pristine lakes, and unique rock formations. Shangrila Resort, also known as 'Heaven on Earth', and the stunning Satpara Lake are must-visit destinations. Skardu is also the starting point for expeditions to K2 and other 8000m peaks.",
    highlights: ["Shangrila Lake", "Upper & Lower Kachura Lakes", "Skardu Fort", "Satpara Lake", "Cold Desert"],
    bestTime: "May to September",
    duration: "5-7 days recommended",
    difficulty: "Moderate"
  },
  {
    id: "swat",
    name: "Swat Valley",
    region: "Khyber Pakhtunkhwa",
    image: swatImg,
    shortDescription: "The 'Switzerland of Pakistan' with lush green valleys and rivers.",
    fullDescription: "Swat Valley, often called the 'Switzerland of Pakistan', is a picturesque valley known for its lush green meadows, crystal-clear rivers, and rich Buddhist heritage. The valley was once a major center of Buddhist civilization and is home to numerous archaeological sites. Mingora, the main city, serves as a base for exploring the region's natural beauty and historical treasures.",
    highlights: ["Malam Jabba Ski Resort", "Fizagat Park", "Swat Museum", "Mahodand Lake", "Buddhist ruins at Butkara"],
    bestTime: "March to October",
    duration: "3-4 days recommended",
    difficulty: "Easy"
  },
  {
    id: "naran-kaghan",
    name: "Naran Kaghan",
    region: "Khyber Pakhtunkhwa",
    image: naranImg,
    shortDescription: "Home to the legendary Saif ul Malook Lake and scenic beauty.",
    fullDescription: "Naran Kaghan Valley is one of Pakistan's most visited tourist destinations, featuring stunning alpine scenery, waterfalls, and the legendary Saif ul Malook Lake. The valley stretches along the Kunhar River and offers numerous viewpoints, hiking trails, and opportunities to experience traditional mountain hospitality. The area transforms into a snow-covered wonderland in winter.",
    highlights: ["Saif ul Malook Lake", "Lulusar Lake", "Babusar Pass", "Ansoo Lake", "Kunhar River"],
    bestTime: "June to September",
    duration: "3-5 days recommended",
    difficulty: "Moderate"
  },
  {
    id: "fairy-meadows",
    name: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    image: fairyMeadowsImg,
    shortDescription: "A mesmerizing meadow at the base of the mighty Nanga Parbat.",
    fullDescription: "Fairy Meadows is a grassland near one of the base camps of Nanga Parbat, the world's ninth highest mountain. The lush green meadow, surrounded by dense alpine forests and offering unobstructed views of Nanga Parbat's north face, is one of Pakistan's most iconic destinations. The journey to Fairy Meadows itself is an adventure, involving a jeep ride on one of the world's most dangerous roads followed by a trek.",
    highlights: ["Nanga Parbat viewpoint", "Beyal Camp trek", "Stargazing", "Traditional wooden huts", "Alpine flowers"],
    bestTime: "June to September",
    duration: "3-4 days recommended",
    difficulty: "Challenging"
  },
  {
    id: "lahore",
    name: "Lahore",
    region: "Punjab",
    image: lahoreImg,
    shortDescription: "The cultural heart of Pakistan with Mughal grandeur and vibrant bazaars.",
    fullDescription: "Lahore, the cultural capital of Pakistan, is a city that breathes history and tradition. From the majestic Badshahi Mosque and Lahore Fort to the bustling streets of the Walled City, Lahore offers an immersive experience into Mughal architecture, traditional cuisine, and Punjabi hospitality. The city's food streets are legendary, offering everything from traditional breakfast to midnight feasts.",
    highlights: ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens", "Anarkali Bazaar", "Food Street"],
    bestTime: "October to March",
    duration: "3-4 days recommended",
    difficulty: "Easy"
  },
  {
    id: "mohenjo-daro",
    name: "Mohenjo-daro",
    region: "Sindh",
    image: mohenjoDaroImg,
    shortDescription: "Ancient ruins of one of the world's earliest urban civilizations.",
    fullDescription: "Mohenjo-daro, meaning 'Mound of the Dead', is an archaeological site in Sindh dating back to around 2500 BCE. It was one of the largest settlements of the ancient Indus Valley Civilization and is now a UNESCO World Heritage Site. The site features remarkably well-planned streets, a sophisticated drainage system, and the famous Great Bath, showcasing the advanced urban planning of ancient times.",
    highlights: ["Great Bath", "Granary", "Assembly Hall", "Bronze Dancing Girl artifact", "UNESCO World Heritage Site"],
    bestTime: "November to February",
    duration: "1-2 days recommended",
    difficulty: "Easy"
  },
  {
    id: "deosai",
    name: "Deosai National Park",
    region: "Gilgit-Baltistan",
    image: deosaiImg,
    shortDescription: "One of the highest plateaus in the world with unique wildlife.",
    fullDescription: "Deosai National Park, known as the 'Land of Giants', is one of the highest plateaus in the world, averaging 4,114 meters above sea level. The park is home to the Himalayan brown bear and numerous other species. In spring and summer, the plateau transforms into a colorful carpet of wildflowers, making it a paradise for nature lovers and photographers.",
    highlights: ["Himalayan brown bears", "Sheosar Lake", "Wildflower meadows", "Bara Pani", "Unique bird species"],
    bestTime: "July to September",
    duration: "2-3 days recommended",
    difficulty: "Moderate"
  },
  {
    id: "attabad",
    name: "Attabad Lake",
    region: "Gilgit-Baltistan",
    image: attabadImg,
    shortDescription: "A stunning turquoise lake formed by a landslide in 2010.",
    fullDescription: "Attabad Lake was created in 2010 when a massive landslide blocked the Hunza River, creating this stunning turquoise lake. What was once a tragedy has become one of Pakistan's most beautiful attractions. The lake stretches for about 21 kilometers and offers boating opportunities with dramatic mountain scenery. The journey along the Karakoram Highway with views of the lake is unforgettable.",
    highlights: ["Boat rides", "Jet skiing", "Karakoram Highway views", "Underwater village remnants", "Mountain reflections"],
    bestTime: "April to October",
    duration: "1-2 days recommended",
    difficulty: "Easy"
  },
  {
    id: "k2-base-camp",
    name: "K2 Base Camp",
    region: "Gilgit-Baltistan",
    image: k2Img,
    shortDescription: "Trek to the base of the world's second highest peak.",
    fullDescription: "The K2 Base Camp trek is one of the world's most challenging and rewarding adventures. The journey takes you through some of the most spectacular mountain scenery on Earth, culminating at Concordia, the confluence of several glaciers with views of four 8000m peaks including K2, Broad Peak, and the Gasherbrum peaks. This is a serious undertaking requiring proper preparation and experienced guides.",
    highlights: ["Concordia viewpoint", "Baltoro Glacier", "Views of K2 and other 8000m peaks", "Trango Towers", "Adventure of a lifetime"],
    bestTime: "June to August",
    duration: "14-21 days recommended",
    difficulty: "Challenging"
  },
  {
    id: "taxila",
    name: "Taxila",
    region: "Punjab",
    image: taxilaImg,
    shortDescription: "Ancient Buddhist learning center and UNESCO World Heritage Site.",
    fullDescription: "Taxila is an ancient city and UNESCO World Heritage Site that was once a major center of Buddhist learning and Gandharan art. The site contains numerous archaeological remains spanning over 2000 years, from the 6th century BCE to the 5th century CE. The Taxila Museum houses an impressive collection of Gandharan sculptures and artifacts that tell the story of this ancient civilization.",
    highlights: ["Dharmarajika Stupa", "Julian Buddhist monastery", "Taxila Museum", "Sirkap ruins", "Gandharan sculptures"],
    bestTime: "October to March",
    duration: "1 day recommended",
    difficulty: "Easy"
  },
  {
    id: "neelum",
    name: "Neelum Valley",
    region: "Azad Kashmir",
    image: neelumImg,
    shortDescription: "A pristine valley with emerald rivers and dense forests.",
    fullDescription: "Neelum Valley, named after the Neelum River that flows through it, is a stunning valley in Azad Kashmir known for its crystal-clear rivers, dense forests, and traditional wooden architecture. The valley stretches for 200 kilometers and offers numerous waterfalls, viewpoints, and villages that showcase the rich Kashmiri culture. Sharda, an ancient university town, and Arang Kel are popular destinations.",
    highlights: ["Sharda archaeological site", "Arang Kel village", "Ratti Gali Lake", "Chitta Katha Lake", "Neelum River"],
    bestTime: "May to October",
    duration: "4-5 days recommended",
    difficulty: "Moderate"
  }
];
