//hero's statistics/properties
const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    streng: 100,
    Speed: 100,
    weapon: {
        type: '',
        damage: 2,}
}; 

//hero's 
function rest(params) {
    const hero = {health: 10};
    console.log(hero.health);
    alert(hero.health)
    return function hero(params) {
        
    }
};
function pickUpItem(params) {
    
};
function equipWeapon(params) {
    
};

rest(hero.health);
function hero(name, heroic, inventory, health, weaponName, damage) {
    hero.name = name;
    hero.heroic = heroic;
    hero.inventory = inventory;
    hero.health = health;
    hero.weapon = weaponName;
    hero.damage = damage;
};












