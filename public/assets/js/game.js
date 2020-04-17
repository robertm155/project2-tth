var bootScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function bootScene ()
    {
        Phaser.Scene.call(this, { key: 'bootScene' });
    },
    preload: function ()
    {
    },
    create: function ()
    {
        this.scene.start('playerScene');
    }
    });
    
    var config = {
        type: Phaser.AUTO,
        width: 950,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: [bootScene, playerScene, druidScene, sorcererScene, skeletonScene, zombieScene, attackScene, uiScene]
    };

    var game = new Phaser.Game(config);