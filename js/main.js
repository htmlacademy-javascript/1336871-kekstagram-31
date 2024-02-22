const DESCRIPTIONS = [
  'Мое первое фото',
  'Путешествие',
  'Природа',
  'Город',
  'Мой питомец',
  'Мое хобби',
  'Моя работа'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const NAMES = ['Лена', 'Наташа', 'Дима', 'Коля', 'Вася', 'Маша', 'Катя', 'Женя', 'Петя', 'Оля'];

const MOCKS_ARRAY_LENGTH = 25;

let photoId = 1;
let commentId = 1;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const selectMessages = () => {
  const messages = Array.from(
    {length: getRandomInteger(1, 2)},
    () => getRandomArrayElement(MESSAGES)
  );

  const uniqueMessages = new Set(messages);

  return Array.from(uniqueMessages).join(' ');
};

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: selectMessages(),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, () => createComment()),
});

const createPosts = () => Array.from({length: MOCKS_ARRAY_LENGTH}, () => createPost());

createPosts();
