// функции == классы, чтобы создать экземпляр(объект) - исп. New на функции:
function Animal(name) {
        this.name = name
        this.canWalk = true
    }

// var animal = new Animal("скотинка")

function Rabbit(name: String) {
    this.name = name
    this.animal = new Animal("скотинка")
}

// все объекты, созданные Rabbit
// будут иметь прототип (наследовать) animal
// Rabbit.prototype = animal

big = new Rabbit('Chuk')
small = new Rabbit('Gek')

alert(big.name)  // Chuk
alert(small.name) // Gek

alert(big.animal.canWalk) // true
small.animal.canWalk

