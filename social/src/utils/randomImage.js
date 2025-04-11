export const getRandomImage = () =>
  `https://source.unsplash.com/random/300x200?sig=${Math.floor(
    Math.random() * 1000
  )}`;
