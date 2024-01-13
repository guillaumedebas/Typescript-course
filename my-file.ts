//variable
function addition(x: number, y: number): number {
    return x + y;
}
const result: number = addition(10, 20);
console.log(result);

//object
function damage(characterToDamage: { life: number }, amount: number): number {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const resultObject = damage({ life: 100 }, 12);
console.log(result);

//type
type Firstname = string;
type Lastname = Firstname;
type CodeSecret = string | number;
//***example
const code1: CodeSecret = 123;
const code2: CodeSecret = '4frqfd';
//***
type Ten = 10;
//***example
const ten: Ten = 10; // Ok !

type Creature = 'blob' | 'troll' | 'unicorn' | 'dragon';

function fightCreature(target: Creature) { }

fightCreature('dragon'); //OK !
//***
type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
};
type Pet = Character;
type Hero = Character & {
    pet?: Pet; //? = optionnelle
};
//Alternatif :
// interface Character {
//     name: string;
//     life: number;
//     attack: number;
//     defense: number;
// };
// type Pet = Character;
// interface Hero extends Character {
//     pet?: Pet;
// };
type ArrayOfNumbers = number[];

//Les génériques

type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
};
type Shop<ItemsType> = {
    name: string;
    owner: Character;
    items : Array<ItemsType>;
};

//type any never use ;-)
//Type unknown 
type Armory = Shop<Equipment>;
type PetShop = Shop<Pet>;
// // Équivalent du type générique, avec une interface
// interface Shop<ItemType> {
//     name: string;
//     owner: Character;
//     items: Array<ItemType>;
// };

function createShop<ItemsType>(name: string, owner: Character, items: Array<ItemsType>):
Shop<ItemsType> {
    return { name, owner, items};
}

const armory = createShop<Equipment>('My armory', {name: 'Bob', life: 100, attack: 1, defense: 2
}, []);

//utility types
//*Partial<T>
type Celibrity = {
    // Toutes les propriétés sont requises (elles n'ont pas le signe "?")
    name: string;
    life: number;
    attack: number;
    defense: number;
};
const myCelibrity: Partial<Celibrity> = {
    // On ne fournit que le nom, pas le reste des propriétés.
    // On n'a pas d'erreur car "Partial" rend
    // toutes les propriétés optionnelles.
    name: 'Mario',
};
//*Record<KeyType, ValueType>
// On définit un type représentant un objet dont les clés
// sont des chaînes de caractères (n'importe lesquelles)
// et les valeurs sont des nombres
type CollectionOfNumbers = Record<string, number>;
const stats: CollectionOfNumbers = {
    age: 45,
    life: 100,
    magic: 10,
    whateverTheNameItMustContainANumber: 20,
};

// On peut utiliser une union pour n'autoriser que des clés spécifiques
type StatisticNames = 'life' | 'attack' | 'defense';
const statistics: Record<StatisticNames, number> = {
    life: 100,
    attack: 10,
    defense: 20,
};
//https://www.typescriptlang.org/docs/handbook/utility-types.html
