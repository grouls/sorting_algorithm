import { CharactersCollection, LinkedList, NumbersCollection } from './Collections';

const numbersCollection = new NumbersCollection([10, -3, 7, 4]);
const charactersCollection = new CharactersCollection('racecar');
const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-1);
linkedList.add(-90);
linkedList.add(10);

numbersCollection.sort();
console.log('🚀 ~ file: index.ts ~ line 14 ~ sorter', numbersCollection.data);
charactersCollection.sort();
console.log('🚀 ~ file: index.ts ~ line 16 ~ charactersCollection', charactersCollection.data);

linkedList.sort();
linkedList.print();
