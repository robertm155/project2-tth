var uiScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function uiScene ()
    {
        Phaser.Scene.call(this, { key: 'uiScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';

        this.load.image('p1healthbar', 'game-art/userinterface/playerHealthbar.png');
        this.load.image('p2healthbar', 'game-art/userinterface/enemyHealthbar.png');
        this.load.image('hud', 'game-art/userinterface/hud.png');
        
    },
    create: function ()
    {
        //this.cameras.main.flash(300);
        this.scene.bringToTop();

        var hud = this.add.image(260, 515, 'hud');

        var atkBtn = this.add.text(50, 480, 'Attack');
        atkBtn.setScale(1.4);
        atkBtn.setInteractive();
        atkBtn.on('pointerout', function() {
            this.scene.scene.start('attackScene');
            //priority()
        })

        var playerHpDisplay = this.add.text(200, 480, player.name + "'s HP:" + playerHP);
        playerHpDisplay.setScale(1.4);
        var enemyHpDisplay = this.add.text(200, 500, enemyName + "'s HP:" + enemyHP);
        enemyHpDisplay.setScale(1.4);
         if(enemyHP <= 0 && enemyName == "Druid"){
            window.playerHP = player.hp;
            this.scene.launch('zombieScene');
         }else if (enemyHP <=0 && enemyName == "Zombie"){
            window.playerHP = player.hp;
            this.scene.launch('skeletonScene');
         }else if (enemyHP <=0 && enemyName == "Skeleton"){
            window.playerHP = player.hp;
            this.scene.launch('sorcererScene');
         }else if (enemyHP <=0 && enemyName == "Sorcereress"){
            {window.location.replace("/members");};
         }
    }
});

var playerScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function playerScene ()
    {
        Phaser.Scene.call(this, { key: 'playerScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';
    
        this.load.image('player', 'game-art/sprites/player/knight.png');
    },
    create: function ()
    {
        window.player = new Player(this, 200, 300, 'player', "Fionna", 350, 70, 65, 77);        
        this.add.existing(player);

        this.scene.launch('druidScene');
        this.scene.launch('uiScene');
    
        window.playerHP = player.hp;
        console.log(playerHP)
    }
});


var druidScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function druidScene ()
    {
        Phaser.Scene.call(this, { key: 'druidScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';

        this.load.image('background1', 'game-art/bg/druidroom.png');
        this.load.image('druid', 'game-art/sprites/enemies/druid.png');
    },
    create: function ()
    {
        //this.cameras.main.flash(1000);
        this.scene.sendToBack();
        this.add.image(400, 300, 'background1');

        window.enemy = new Player(this, 700, 300, 'druid', "Druid", 150, 80, 50, 70);     
        this.add.existing(enemy);
        enemy.setScale(0.6);

        enemyName = window.enemy.name;
        enemyHP = window.enemy.hp;
        console.log(enemyHP)

        //this.scene.on('pointerout', function() {
          //  this.scene.scene.start('sorcererScene');
        //})
    }
});

var zombieScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function zombieScene ()
    {
        Phaser.Scene.call(this, { key: 'zombieScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';

        this.load.image('background2', 'game-art/bg/zombieroom.png');
        this.load.image('zombie', 'game-art/sprites/enemies/zombie.png');
    },
    create: function ()
    {
        this.cameras.main.flash(1000);

        this.scene.remove('druidScene');

        this.scene.sendToBack();
        this.add.image(400, 300, 'background2');
        

        window.enemy = new Player(this, 700, 300, 'zombie', "Zombie", 200, 70, 40, 30);     
        this.add.existing(enemy);
        enemy.setScale(0.4);

        window.enemyName = enemy.name;
        window.enemyHP = enemy.hp;
    }
});


var skeletonScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function skeletonScene ()
    {
        Phaser.Scene.call(this, { key: 'skeletonScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';

        this.load.image('background3', 'game-art/bg/skeletonroom.png');
        this.load.image('skeleton', 'game-art/sprites/enemies/skeleton.png');
    },
    create: function ()
    {
        this.cameras.main.flash(1000);

        this.scene.remove('zombieScene');

        this.scene.sendToBack();
        this.add.image(400, 300, 'background3');
        

        window.enemy = new Player(this, 700, 300, 'skeleton', "Skeleton", 250, 80, 30, 90);     
        this.add.existing(enemy);
        enemy.setScale(0.6);

        window.enemyName = enemy.name;
        window.enemyHP = enemy.hp;
    }
});

var sorcererScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function sorcererScene ()
    {
        Phaser.Scene.call(this, { key: 'sorcererScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';

        this.load.image('background4', 'game-art/bg/sorcererroom.png');
        this.load.image('sorcerer', 'game-art/sprites/enemies/death_speaker.png');
    },
    create: function ()
    {
        this.cameras.main.flash(1000);
        this.scene.remove('skeletonScene');
        this.scene.sendToBack();
        this.add.image(400, 300, 'background4');

        window.enemy = new Player(this, 700, 300, 'sorcerer', "Sorcereress", 240, 90, 20, 60);     
        this.add.existing(enemy);
        enemy.setScale(0.4);

        window.enemyName = enemy.name;
        window.enemyHP = enemy.hp;
        console.log("success")
    }
});


var attackScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function attackScene ()
    {
        Phaser.Scene.call(this, { key: 'attackScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';
        this.load.image('druidAttack', 'game-art/userinterface/battle-sprites/druid-attack.png');
        this.load.image('zombieAttack', 'game-art/userinterface/battle-sprites/zombie-attack.png');
        this.load.image('druidAttack', 'game-art/userinterface/battle-sprites/skeleton-attack.png');
        this.load.image('speakerAttack', 'game-art/userinterface/battle-sprites/speaker-attack.png');
        this.load.image('knightAttack', 'game-art/userinterface/battle-sprites/knight-attack.png');
        
    },
    create: function ()
    {
        this.cameras.main.flash(1000);
        this.scene.bringToTop();

        var enemyAttack = this.add.image(500, 150, 'druidAttack');
        var playerAttack = this.add.image(500, 450, 'knightAttack');

         if(enemyName == "Druid"){
            enemyAttack = this.add.image(500, 150, 'druidAttack')
         }else if (enemyHP <=0 && enemyName == "Zombie"){
            enemyAttack = this.add.image(500, 150, 'zombieAttack')
         }else if (enemyHP <=0 && enemyName == "Skeleton"){
            enemyAttack = this.add.image(500, 150, 'skeletonAttack')
         }else if (enemyHP <=0 && enemyName == "Sorcereress"){
            enemyAttack = this.add.image(500, 150, 'speakerAttack')
         }

        enemyAttack.setInteractive()
        playerAttack.setInteractive()
        enemyAttack.on('pointerout', function() {
            priority()
            this.scene.scene.start('uiScene');
        })
        playerAttack.on('pointerout', function() {
            priority()
            this.scene.scene.start('uiScene');
        })

    }
});
    