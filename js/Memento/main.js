/*!
 * Memento
 * @role Memento
 */

function Main() {
    this.gamer = new Gamer(100);
    this.memento = this.gamer.createMemento();
}

Main.prototype.bet = function() {
    this.gamer.bet();
    log(this.gamer.toString());

    if (this.gamer.getMoney() > this.memento.getMoney()) {
        this.memento = this.gamer.createMemento();
    } else if (this.gamer.getMoney() < this.memento.getMoney() / 2) {
        this.gamer.restoreMemento(this.memento);
    }
};

// ----

function log(text) {
    var field = document.getElementById('log');
    field.innerHTML = text + "\n" + field.innerHTML;
}

// ----

var main = new Main();
