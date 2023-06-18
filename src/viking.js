// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    };
    attack (){
        return this.strength;
    };
    receiveDamage (damage){
        this.health -= damage;
    };
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    };
    receiveDamage (damage){
        this.health -= damage;
        if (this.health <= 0){
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    };
    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage (damage){
        this.health -= damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    };
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    };
    vikingAttack(){
        vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);

        const result = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].strength);
        if (this.saxonArmy[saxonIndex].health <= 0){this.saxonArmy.splice(saxonIndex, 1)};
        return result;
    };
    saxonAttack(){
        vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);

        const result = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].strength);
        if (this.vikingArmy[vikingIndex].health <= 0){this.vikingArmy.splice(vikingIndex, 1)};
        return result;
    };
    showStatus(){};
}
