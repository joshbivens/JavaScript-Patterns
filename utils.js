function Item(name, number) {
  this.name = name;
  this.number = number;
}

function Inventory() {
  this.items = [];
  this.add = function(item) {
    this.items.push(item);
  };
}

var utils = {
  print: function (items) {
    items.map(x => console.log("Item name: " + x.name + "\nItem No.: " + x.number + "\n"));
  },
  sort: function(items, key) {
    if(key == "number") {
      items.sort((a, b) => a.number - b.number);
    } else if (key == "name") {
      items.sort((a, b) => {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        0;
      });
    }
    return this.print(items);
  },
  total: function(items) {
    var total = 0;
    items.map(x => total += x.number);
    return total;
  }
};

var foo  = new Item("foo", 42);
var quux = new Item("quux", 53);
var baz  = new Item("baz", 22);

var myInv = new Inventory();
myInv.add(foo);
myInv.add(quux);
myInv.add(baz);

utils.sort(myInv.items, "name");
utils.total(myInv.items);
