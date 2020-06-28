const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
];

const googleSearch = (query, database) => {
  const matches = database.filter((website) => website.includes(query));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
