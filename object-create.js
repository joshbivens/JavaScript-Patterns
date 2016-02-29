var animal = {
  name: "",
  family: "",
  genus: "",
  species: "",
  printAnimal: function () {
    console.log("~~~ " + this.name + " ~~~\nFamily: " + this.family + "\nGenus: " + this.genus + "\nSpecies: " + this.species + "\n");
  }
};

var tiger = Object.create(animal, {
  name: { value: "Tiger" },
  family: { value: "Felidae" },
  genus: { value: "Panthera" },
  species: { value: "P. tigris" }
});

tiger.printAnimal();

var lion = Object.create(tiger, {
  name: { value: "Lion" },
  species: { value: "P. leo" }
});

lion.printAnimal();