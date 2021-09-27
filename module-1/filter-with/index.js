import data from './db/data';

// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie

function filterWith(array, phrase) {
  const isArray = Array.isArray(array);
  if(!isArray) throw new Error('Argument array have to be an array');

  const isPhraseAreString = typeof phrase === 'string';
  if(!isPhraseAreString) throw new Error('Argument phrase have to be a string');

  const isPhraseHaveCorrectLength = phrase.length > 2;
  if(!isPhraseHaveCorrectLength) return [];

  const regExpForSearchingValue = new RegExp(phrase.toLowerCase().trim(), 'g');

  const result = array.filter((item) => {
    const isStringOrNumber = typeof item === 'string' || typeof item === 'number';
    if(isStringOrNumber) {
      return regExpForSearchingValue.test(item.toString().toLowerCase().trim());
    }
    const personDataValues = Object.values(item);

    const isIncludesPhrase = personDataValues.some(personValue => {
      if(typeof personValue === 'object') {
        return filterWith(personValue, phrase).length > 0;
      }
      return regExpForSearchingValue.test(personValue.toString().toLowerCase().trim());
    });

    return isIncludesPhrase;
  });

  return result;
}
// tak aby:
// - od 0 do 2 znaków w phrase zwracało pusty array,
// - a powyżej 2 ma filtrować po każdej wartości typu string lub number w obiekcie


// jako 1 argument podajemy naszą tablicę obiektów. Jako drugi argument szukaną frazę np:
console.log('filter result: ', filterWith(data, 'Cummings Baxter'));
console.log('filter result: ', filterWith(data, 'Cum'));
console.log('filter result: ', filterWith(data, '132'));

// funkcja zwraca tablicę z konretnym obiektem:
// const result1 = [
//   {
//     _id: "5e985a07feddae7617ac44f6",
//     age: 24,
//     eyeColor: "brown",
//     name: "Cummings Baxter",
//     gender: "male",
//     company: "VELOS",
//     email: "cummingsbaxter@velos.com",
//     phone: "+1 (907) 482-2451",
//     tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
//     friends: [
//       {
//         id: 0,
//         name: "Sheppard Jensen",
//       },
//     ],
//   },
// ];

console.log('filter result: ', filterWith(data, 'nisi'));
// jako phrase przekazujemy jeden z tagów w tablicy tags ,który znajduje się w konretnym obiekcie;

// const result = [
//   {
//     _id: "5e985a07feddae7617ac44f6",
//     age: 24,
//     eyeColor: "brown",
//     name: "Cummings Baxter",
//     gender: "male",
//     company: "VELOS",
//     email: "cummingsbaxter@velos.com",
//     phone: "+1 (907) 482-2451",
//     tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
//     friends: [
//       {
//         id: 0,
//         name: "Sheppard Jensen",
//       },
//     ],
//   },
//   {
//     _id: "5e985a0709dfa1e6fd93c6ad",
//     age: 32,
//     eyeColor: "brown",
//     name: "Madelyn Dickson",
//     gender: "female",
//     company: "KENGEN",
//     email: "madelyndickson@kengen.com",
//     phone: "+1 (984) 521-2439",
//     tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
//     friends: [
//       {
//         id: 0,
//         name: "Bruce Barton",
//       },
//       {
//         id: 1,
//         name: "Juliet Schmidt",
//       },
//       {
//         id: 2,
//         name: "Horton Haley",
//       },
//       {
//         id: 3,
//         name: "Herminia Witt",
//       },
//     ],
//   },
// ];

console.log(filterWith(data, 'Delacruz Acevedo'));;
// jako phrase przekazuje dane z tablicy friends,która znajduje się w konretnym obiekcie;

// const result = [
//   {
//     _id: "5e985a074984f9f08ccaaa4c",
//     age: 25,
//     eyeColor: "green",
//     name: "Barlow Ferguson",
//     gender: "male",
//     company: "TOYLETRY",
//     email: "barlowferguson@toyletry.com",
//     phone: "+1 (837) 484-2231",
//     tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
//     friends: [
//       {
//         id: 0,
//         name: "Delacruz Acevedo",
//       },
//       {
//         id: 1,
//         name: "Gloria Tanner",
//       },
//       {
//         id: 2,
//         name: "Cantrell Myers",
//       },
//       {
//         id: 3,
//         name: "Fisher Leonard",
//       },
//     ],
//   },
// ];
