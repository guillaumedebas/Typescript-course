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
// // Équivalent du type générique, avec une interface
// interface Shop<ItemType> {
//     name: string;
//     owner: Character;
//     items: Array<ItemType>;
// };
function createShop(name, owner, items) {
    return { name, owner, items };
}
const armory = createShop('My armory', { name: 'Bob', life: 100, attack: 1, defense: 2
}, []);
