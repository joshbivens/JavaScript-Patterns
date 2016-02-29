function Item(name, number) {
  this.name = name;
  this.number = number;
}

var foo = new Item("foo", 42);
console.log(foo);
var bar = new Item("bar", 53);

function Inventory() {
  this.inventory = [];
  this.addItem = function(item) {
    this.inventory.push(item);
  }
}

var myInv = new Inventory();
myInv.addItem(foo);
console.log(myInv.inventory);
myInv.addItem(bar);
console.log(myInv.inventory);