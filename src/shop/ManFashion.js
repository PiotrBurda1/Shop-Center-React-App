import Garnitur1 from "../Foto/Garnitur1.jpg";
import Garnitur2 from "../Foto/Garnitur2.jpg";
import Garnitur3 from "../Foto/Garnitur3.jpg";
import Tshirt1 from "../Foto/Tshirt1.png";
import Tshirt2 from "../Foto/Tshirt2.png";
import Tshirt3 from "../Foto/Tshirt3.png";
import bluza1 from "../Foto/bluza1.jpg";
import bluza2 from "../Foto/bluza2.jpg";
import bluza3 from "../Foto/bluza3.jpg";
import spodnie1 from "../Foto/spodnie1.jpg";
import spodnie2 from "../Foto/spodnie2.jpg";
import spodnie3 from "../Foto/spodnie3.jpg";

const DUMMY_Object = [
  {
    category: "T-shirt",
    title: "Black T-shirt",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 14.99,
    id: 1,
    image: Tshirt1,
  },
  {
    category: "T-shirt",
    title: "Blue T-shirt",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 29.99,
    id: 2,
    image: Tshirt2,
  },
  {
    category: "T-shirt",
    title: "Red T-shirt",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 19.99,
    id: 3,
    image: Tshirt3,
  },
  {
    category: "Hoodie",
    title: "Black Hoodie",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 143.99,
    id: 5,
    image: bluza1,
  },
  {
    category: "Hoodie",
    title: "Gray Hoodie",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 89.99,
    id: 6,
    image: bluza2,
  },
  {
    category: "Hoodie",
    title: "White Hoodie",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 119.99,
    id: 7,
    image: bluza3,
  },

  {
    category: "Suit",
    title: "Smart Suit",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 233.99,
    id: 8,
    image: Garnitur1,
  },
  {
    category: "Suit",
    title: "Office Suit",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 134.99,
    id: 9,
    image: Garnitur2,
  },
  {
    category: "Suit",
    title: "Evening Suit",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 392.99,
    id: 10,
    image: Garnitur3,
  },

  {
    category: "Trousers",
    title: "Sport Trousers",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 49.99,
    id: 16,
    image: spodnie1,
  },
  {
    category: "Trousers",
    title: "Smart Trousers",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 66.99,
    id: 17,
    image: spodnie2,
  },
  {
    category: "Trousers",
    title: "Casual Trousers",
    info: "Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, sharp stones, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothing can insulate against cold or hot conditions, and it can provide a hygienic barrier, keeping infectious and toxic materials away from the body. It can protect feet from injury and discomfort or facilitate navigation in varied environments. Clothing also provides protection from ultraviolet radiation. It may be used to prevent glare or increase visual acuity in harsh environments, such as brimmed hats. Clothing is used for protection against injury in specific tasks and occupations, sports, and warfare. Fashioned with pockets, belts, or loops, clothing may provide a means to carry things while freeing the hands.",
    price: 82.99,
    id: 18,
    image: spodnie3,
  },
];

export default DUMMY_Object;
