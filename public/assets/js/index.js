var start = $("#startGame")
var titleScreen = $("#title-link")
var createChara = $("#chara")
var charaClass = $(".charaClass")

start.on("click", () => {window.location.replace("/all");})

titleScreen.on("click", () => {window.location.replace("/members");})

createChara.on("click", () => {window.location.replace("/create");})

$("#view-all").on("click", () => {window.location.replace("/all");})

$(".generateChara").on("click", () => {window.location.replace("/all");})

$("#loginNav").on("click", () => {window.location.replace("/signup");})

//$(".custom-select").click( () => console.log($(".custom-select").val()))

$(".custom-select").click( () => {
    if($(".custom-select").val() === "mercenary"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/mercenary.png")
        $("#strength").val(95)
        $("#defense").val(70)
        $("#hp").val(300)
        $("#speed").val(75)
        $("#weapon").val("Sword")
    } else if ($(".custom-select").val() === "knight"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/knight.png")
        $("#strength").val(70)
        $("#defense").val(85)
        $("#hp").val(380)
        $("#speed").val(10)
        $("#weapon").val("Hammer")
    } else if ($(".custom-select").val() === "mage"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/mage.png")
        $("#strength").val(110)
        $("#defense").val(50)
        $("#hp").val(280)
        $("#speed").val(75)
        $("#weapon").val("Staff")
    } else if ($(".custom-select").val() === "assassin"){
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/assassin.png")
        $("#strength").val(75)
        $("#defense").val(60)
        $("#hp").val(250)
        $("#speed").val(135)
        $("#weapon").val("Dagger")
    } else {
        $("#charaSprite").attr("src", "./assets/game-art/sprites/player/default.png")
        $("#strength").val(60)
        $("#defense").val(60)
        $("#hp").val(300)
        $("#speed").val(60)
        $("#weapon").val("Fists of Justice")
    }
})
