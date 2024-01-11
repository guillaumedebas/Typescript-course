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

