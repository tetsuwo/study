/*!
 * Gamer
 * @role Originator
 */

function Gamer(param) {
    this.money = 0;
    this.fruits = [];
    this.fruitsName = [
        "バナナ", "りんご", "みかん", "ぶどう"
    ];
    this.initialize.apply(this, arguments);
}

Gamer.prototype.initialize = function(money) {
    this.money = money;
};

Gamer.prototype.getMoney = function() {
    return this.money;
};

Gamer.prototype.bet = function() {
    var dice = parseInt(Math.random() * 6) + 1;

    if (dice === 1) {
        this.money += 100;
        log("所持金が増えました。");
    } else if (dice === 2) {
        this.money /= 2;
        log("所持金が半分になりました。");
    } else if (dice === 6) {
        var fruit = this.getFruit();
        log("フルーツ「" + fruit + "」をもらいました。");
        this.fruits.push(fruit);
    } else {
        log("何も起こりませんでした。");
    }
};

Gamer.prototype.createMemento = function() {
    var m = new Memento(this.money);
    for (var i = 0; i < this.fruits; i++) {
        var f = this.fruits[i];
        if (f.indexOf("おいしい") === 0) {
            m.addFruit(f);
        }
    }
    return m;
};

Gamer.prototype.restoreMemento = function(memento) {
    this.money = memento.money;
    this.fruits = memento.fruits;
};

Gamer.prototype.toString = function() {
    return "[money = " + this.money + ", fruits = " + this.fruits.join() + "]";
};

Gamer.prototype.getFruit = function() {
    var prefix = "";
    if (parseInt(Math.random() * 2) - 1) {
        prefix = "おいしい";
    }
    return prefix + this.fruitsName[parseInt(Math.random() * this.fruitsName.length)];
};
