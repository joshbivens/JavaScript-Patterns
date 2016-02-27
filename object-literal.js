//----------------
//  Item
//----------------
var item = {
  createItem: function(name, number) {
    return {
      name: name,
      number: number
    };
  }
}

// Create new items
var foo = item.createItem("bar", 43);
var baz = item.createItem("qux", 77);

//----------------
//  Inventory
//----------------
var inventory = {
  items: [],
  addItem: function(item) {
    this.items.push(item);
  }
};

// Push an item to inventory.items
inventory.addItem(baz);
// Check
console.log(inventory.items);
// Push another
inventory.addItem(baz);
// Check again. It works!
console.log(inventory.items);