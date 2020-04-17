function priority () {
    //(player1.speed < player2.speed && player1.speed < enemy.speed) ? console.log("p1") : console.log("p2");
    if(player.speed > enemy.speed){
        playerAttacks()
        enemyAttacks()
        //reHud()
    }else{
        enemyAttacks()
        playerAttacks()
        //arbitor()
    }
} 

function playerAttacks(){
    var calc = enemy.defense - player.strength;
    var damage = Math.abs(calc)
    //console.log(damage)
    enemyHP = enemyHP - damage;
    console.log(enemyHP + " left for enemy")
}

function enemyAttacks(){
    var calc = player.defense - enemy.strength;
    var damage = Math.abs(calc)
    //console.log(damage)
    playerHP = playerHP - damage;
    console.log(playerHP + " left for player")
}
var enemyName;
var enemyHP;
