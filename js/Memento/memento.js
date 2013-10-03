function Memento(param) {
    this.money = 0;
    this.fruits = [];
    this.initialize.apply(this, arguments);
}

Memento.prototype.initialize = function(money) {
    this.money = money;
};

Memento.prototype.getMoney = function() {
    return this.money;
};

Memento.prototype.addFruit = function(fruit) {
    this.fruits.push(fruit);
};

Memento.prototype.getFruits = function() {
    return this.fruits;
};
