// Mazmorra Icecrown Citadel

//iniciemos con la creacion de las clase characters para heros y bosses

class character {
  constructor(name, hp, atk, spd, def, maxMana, abilities){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.spd = spd;
    this.def = def;
    this.maxMana = maxMana;
    this.abilities = abilities;
    this.currentMana = maxMana;
    this.effects = []; //usaremos este array para los DoT, taunt, turnsLeft y alguna otra cosa que me ocurra en el futuro
    this.isAlive = true;
    this.isTaunted = false;
    this.tauntTarget = null;
  }
}