import nanoid from 'nanoid';
import {getRandomArrayNumber, getRandomDate, getRandomRating} from '../utils/common';

const ID_PREFIX = `id_`;
const REVIEWS_COUNT = 6;

const REVIEWS = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
  `What We Do in the Shadows`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
];

const USERS = [
  `Kate Muir`,
  `Bill Goodykoontz`,
  `Amanda Greever`,
  `Matthew Lickona`,
  `Paula Fleri-Soler`,
  `Alexey Khabirov`,
];


const generateReview = () => {
  return {
    id: ID_PREFIX + nanoid(5),
    comment: REVIEWS[getRandomArrayNumber(REVIEWS)],
    user: USERS[getRandomArrayNumber(USERS)],
    rating: getRandomRating(),
    date: getRandomDate(),
  };
};

const reviewMocks = Array(REVIEWS_COUNT).fill(``).map(generateReview);

export {reviewMocks};
