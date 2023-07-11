import { pluralizeRu } from "helpers/createPluralize";

export const ru = {
  homePage: {
    test: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати',
    getCount(count: number) {
      const str = pluralizeRu(count);
      switch (str) {
        case "one":
          return `${count} товар`;
        case "few":
          return `${count} товара`;
        case "many":
          return `${count} товаров`;
      }
    },
  },
  charactersPage: {
    title: "Страница с персонажами",
  },
  locationsPage: {
    title: "Страница с локациями",
  },
  characterPage: {
    getDescription(name: string, species: string) {
      return `Персонаж ${name} относится к разновидности ${species}`;
    },
    description: "Персонаж <1>name</1> относится к разновидности <2>species</2>",
  },
};

export type LocaleType = typeof ru;
