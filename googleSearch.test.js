const googleSearch = require("./googleSearch");

const database = [
  "dog.com",
  "cheesepuff.com",
  "disney.com",
  "dogpictures.com",
  "mydoggo.com",
];

describe("Google Search", () => {
  it("searches for input", () => {
    expect(googleSearch("silly test", database)).toEqual([]);
    expect(googleSearch("dog", database)).toEqual([
      "dog.com",
      "dogpictures.com",
      "mydoggo.com",
    ]);
  });

  it("works with undefined and null input", () => {
    expect(googleSearch(undefined, database)).toEqual([]);
    expect(googleSearch(null, database)).toEqual([]);
  });

  it("does not return more than three matches ", () => {
    expect(googleSearch(".com", database).length).toEqual(3);
  });
});
