// (function init() {
//   var newName = prompt("What is your character's name?");
//   var newCaste = prompt("And their caste? (Warrior, Ranger, or Mage)").toLowerCase();
//   var newPlayer = new Player(newName, newCaste);
//   var response = prompt("Welcome " + newPlayer.name + "!\nWould you like to EXPLORE (and find gear) or ROAM the countryside (and fight monsters)?").toLowerCase();
//   if (response == "explore") {
//     utils.explore(newPlayer);
//   }
// })();

function Player(name, caste) {
  this.name = name;
  this.hp = 100;
  this.caste = caste;
  if(caste == "ranger") {
    this.str = 40;
    this.mana = 10;
    this.range = 30;
    this.speed = 20;
  } else if(caste == "warrior") {
    this.str = 60;
    this.mana = 5;
    this.range = 10;
    this.speed = 5;
  } else if(caste == "mage") {
    this.str = 20;
    this.mana = 50;
    this.range = 20;
    this.speed = 5;
  } else {
    alert("I suppose you're a commoner then...");
  }
}

var utils = {
  print: function(player) {
    alert("HP: " + player.hp +
      "\nStrength: " + player.str +
      "\nMana: " + player.mana +
      "\nRange: " + player.range +
      "\nSpeed: " + player.speed
    );
  },
  characterPrint: function(player) {
    alert("Name: " + player.name +
      "\nClass: " + player.caste + "\n"
    );
  },
  randomizer: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  newStats: function(player, weapon) {
    if(weapon.range) {
      player.range += weapon.range;
    }  if(weapon.speed) {
      player.speed += weapon.speed;
    }  if(weapon.hp) {
      player.hp += weapon.hp;
    }  if(weapon.mana) {
      player.mana += weapon.mana;
    }  if(weapon.str) {
      player.str += weapon.str;
    }
  },
  explore: function(player) {
    var weapon = utils.randomizer(weapons);
    var weaponName = weapon.name;
    var location = utils.randomizer(locations);
    
    alert("Exploring...");
    
    setTimeout(function() {
      alert(player.name + " found the " + weaponName + " at the " + location + "!\nWeapon: " + weapon.name + ",\nStats: " + weapon.stats + "\n");
    }, 2000);
    
    setTimeout(function() {
      alert("Current\n---------\n" + utils.print(player));
    }, 3000);
    
    setTimeout(function() {
      utils.newStats(player, weapon);
      alert("New\n---------\n" + utils.print(player));
    }, 4000);
  }
};

var mara = new Player("Mara", "mage");
utils.explore(mara);

var locations = [
  "Evergreen Forest", 
  "Garden of Thall", 
  "Oblivion Sewer", 
  "Orbal Dungeon of Death", 
  "Pool of Solitude", 
  "Galadril Foundry", 
  "Ruins of Snake"
];

var weapons = [
    
    {
      name: "Crossbow Of Death", 
      range: 30,
      speed: 20,
      hp: -20,
      stats: "HP: -20, Strength: 0, Mana: 0, Range: +30, Speed: +20 "
    },
    {
      name: "Longsword of Culling",
      str: 40,
      hp: -10,
      stats: "HP: -10, Strength: +40 , Mana: 0, Range: 0 , Speed: 0 "
    },
    {
      name: "Mighty Longsword",
      str: 50,
      speed: -10,
      stats: "HP: 0, Strength: +50, Mana: 0, Range: 0, Speed: -10"
    },
    {
      name: "Shortsword of the Noob",
      str: 10,
      speed: 5,
      stats: "HP: 0, Strength: +10, Mana: 0, Range: 0, Speed: +5 "
    },
    {

      name: "Shortsword of the Calling",
      str: 20,
      hp: 20,
      speed: 20,
      stats: "HP: +20, Strength: +20, Mana: 0, Range: 0, Speed: +20"
    },
    {
      name: "Axe of Decimation",
      str: 50,
      speed: 30,
      stats: "HP: 0, Strength: +50, Mana: 0, Range: 0, Speed: +30"
    },
    {

      name: "Wand Of Justice!",
      mana: 10,
      hp: 25,
      stats: "HP: +25 , Strength: 0, Mana: +10, Range: 0, Speed: 0"
    },
    {
      name: "Blessed Soulbound Staff",
      hp: 10,
      mana: 15,
      stats: "HP: +10 , Strength: 0, Mana: +15, Range:  0, Speed: 0 "
    },
    {
      name: "Wand of Darkest Night",
      hp: -20,
      mana: 30,
      stats: "HP: -20, Strength: 0, Mana: +30, Range: 0, Speed: 0 "
    }
    
];
