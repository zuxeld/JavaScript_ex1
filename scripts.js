// необходимая запись для того, чтобы:
// - при записи необъявлённой переменной возникала ошибка
"use strict";
// функции == классы, чтобы создать экземпляр(объект) - исп. New на функции:
function Animal(name) {
        this.name = name
        this.canWalk = true
    }

// var animal = new Animal("скотинка")

function Rabbit(name) {
    this.name = name
    this.animal = new Animal("скотинка")
}

// все объекты, созданные Rabbit
// будут иметь прототип (наследовать) animal
// Rabbit.prototype = animal

big = new Rabbit('Chuk')
small = new Rabbit('Gek')

console.log(big.name)  // Chuk
console.log(small.name) // Gek

console.log(big.animal.canWalk) // true
// small.animal.canWalk

