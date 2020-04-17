
$(".generateChara").on("click", function(event) {
    event.preventDefault();
    console.log("added");
  

    var Character = {

      name: $("#name").val().trim(),
      class: $("#class").val().trim(),
      strength: $("#strength").val().trim(),
      defense: $("#defense").val().trim(),
      magic: $("#hp").val().trim(),
      speed: $("#speed").val().trim()
      
    };
    
console.log(Character)
$.post("/api/new", Character)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding character...");
    });

});

 
