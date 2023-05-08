const owner = {
    name: 'Jonah',
    lastName: 'Theussl-Parseghian',
    age: '18',
    fullName() {
        return this.name + ' ' + this.lastName;
    }
}

document.getElementById('owner').innerHTML = `The owner of this webpage is ${owner.fullName()}`;
console.log(`${owner.name} is ${owner.age} years old`);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    present() {
        return `${this.name} is ${this.age} years old`;
    }
}

const friend = new Person("Carl", 18);
console.log(friend.present());

let count = 0;

function countUp() {

    count++;

    if (count == 69) {
        alert("Nice ! 😉");
    }

    document.getElementById('button1').innerHTML = `Click to add to the counter ! Count: ${count}`;
}
