/*
function withdraw(person, sasia) {
    if (sasia > person.balanca) {
        console.log('Error: Insufficient balance. Transaction failed.');
    } else {
        person.balanca -= sasia;
        console.log(`Transaction successful. Your new balance is $${person.balanca}.`);
    }
}
*/
/*Shembulli 

const person = {
    name: 'Elsa Tuzi',
    balanca: 5000
};

console.log(`Initial balance: $${person.balanca}`);

withdraw(person, 500);
withdraw(person, 6000);
*/
const withdraw = (person, sasia) => {
    if (sasia > person.balanca) {
        console.log('Error: Insufficient balance. Transaction failed.');
    } else {
        person.balanca -= sasia;
        console.log(`Transaction successful. Your new balance is $${person.balanca}.`);
    }
};
const person = {
    name: 'Elsa Tuzi',
    balanca: 5000
};

console.log(`Initial balance: $${person.balanca}`);

withdraw(person, 500);
withdraw(person, 6000);