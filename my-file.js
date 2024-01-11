//variable
function addition(x, y) {
    return x + y;
}
const result = addition(10, 20);
console.log(result);
//object
function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const resultObject = damage({ life: 100 }, 12);
console.log(result);
//***example
const code1 = 123;
const code2 = '4frqfd';
//***example
const ten = 10; // Ok !
function fightCreature(target) { }
fightCreature('dragon'); //OK !
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
