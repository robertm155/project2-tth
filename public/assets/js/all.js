
$.get("/api/characters", function(data) {

    for (var i = 0; i < data.length; i++) {
      // create a parent div for the oncoming elements
      var wellSection = $("<div class='bg-dark text-white border border-primary p-3 mb-2' onclick='tester()'>");
      // add a class to this div: 'well'
      wellSection.addClass("well");
      // add an id to the well to mark which well it is
      wellSection.attr("id", "character-well-" + i);
      // append the well to the well section
      $("#well-section").append(wellSection);
  
      // Now add all of our character data to the well we just placed on the page
  
     
      $("#character-well-" + i).append("<h3 id='dbName'>" + data[i].Name + "</h3>");
      $("#character-well-" + i).append("<h3 id='dbClass'>class: " + data[i].Class + "</h3>");
      $("#character-well-" + i).append("<h3 id='dbHP'>HitPoints: " + data[i].Magic + "</h3>");
      $("#character-well-" + i).append("<h3 id='dbStrength'>Strength: " + data[i].Strength + "</h3>");
      $("#character-well-" + i).append("<h3 id='dbDefense'>Defense: " + data[i].Defense + "</h3>");
      $("#character-well-" + i).append("<h3 id='dbSpeed'>Speed: " + data[i].Speed + "</h3>");
    }
  });

function tester (){
  // $( "h3" ).each(function( index ) {
  //   console.log($( this ).text() );
  // });
  $(".hide").css('display', "none");

  var dbName;
  var dbClass;
  var dbHP;
  var dbStrength;
  var dbDefense;
  var dbSpeed;

  var playerSprite = "game-art/sprites/player/knight.png";
  var playerAttackSprite = "game-art/userinterface/battle-sprites/knight-attack.png";
  
  $.getScript("./assets/js/classes/character.js");
  $.getScript("./assets/js/battle-logic.js");
  $.getScript("./assets/js/scenes.js");
  $.getScript("./assets/js/game.js");
}






  