//variable
function addition(x: number, y: number): number {
    return x + y;
}
const result: number = addition(10, 20);
console.log(result);

//object
function damage(characterToDamage: { life: number}, amount: number): number {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
const resultObject = damage({ life: 100 }, 12);
console.log(result);