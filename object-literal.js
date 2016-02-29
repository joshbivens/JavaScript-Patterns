var item = {
  createItem: function(name, number) {
    return {
      name: name,
      number: number
    };
  }
}

var foo = item.createItem("bar", 43);
var baz = item.createItem("qux", 77);

var inventory = {
  items: [],
  addItem: function(item) {
    this.items.push(item);
  }
};

inventory.addItem(baz);
console.log(inventory.items);
inventory.addItem(baz);!
console.log(inventory.items);