import { LocaleType } from "locales/ru";
import { pluralizeEn } from "helpers/createPluralize";

export const en: LocaleType = {
  homePage: {
    test: "Lorem Ipsum is simply dummy text of the printing",
    getCount(count: number) {
      const str = pluralizeEn(count);
      switch (str) {
        case "one":
          return `${count} item`;
        case "other":
          return `${count} items`;
      }
    },
  },
  charactersPage: {
    title: "Character page",
  },
  locationsPage: {
    title: "Location page",
  },
  characterPage: {
    getDescription(name: string, species: string) {
      return `The character ${name} belongs to the variety ${species}`;
    },
    description: "The character <1>name</1> belongs to the variety <2>species</2>",
  },
};
