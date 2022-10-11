import { CharactersCollection, NumbersCollection } from './Collections';

import { Sorter }                                  from './Sorter';

const numbersCollection = new NumbersCollection([10, -3, 7, 4]);
const charactersCollection = new CharactersCollection('racecar');

const sortArray = new Sorter(numbersCollection);
const sortChars = new Sorter(charactersCollection);

console.log('🚀 ~ file: index.ts ~ line 11 ~ sorter', numbersCollection.data);
sortArray.sort();
console.log('🚀 ~ file: index.ts ~ line 13 ~ sorter', numbersCollection.data);

console.log('🚀 ~ file: index.ts ~ line 15 ~ charactersCollection', charactersCollection.data);
sortChars.sort();
console.log('🚀 ~ file: index.ts ~ line 17 ~ charactersCollection', charactersCollection.data);
