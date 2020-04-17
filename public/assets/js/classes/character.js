var Unit = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,
 
    initialize:
 
    function Unit(scene, x, y, texture, name, hp, strength, defense, speed) {
        Phaser.GameObjects.Sprite.call(this, scene, x, y, texture)
        this.name= name;
        this.maxHp = this.hp = hp;
        this.strength = strength;
        this.defense = defense;
        this.speed = speed;          
    },
    attack: function(target) {
        target.maxHp -= this.strength   
    },
    speed: function(targetSpeed) {
        if(this.speed < targetSpeed){
            this.attack()
        };        
    }
});

var Player = new Phaser.Class({
    Extends: Unit,
 
    initialize:
    function Player(scene, x, y, texture, name, hp, strength, defense, speed) {
        Unit.call(this, scene, x, y, texture, name,  hp, strength, defense, speed);
        this.setScale(0.5);
    }
});
