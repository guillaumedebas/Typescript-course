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
