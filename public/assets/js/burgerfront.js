$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newBurger");

    var newBurgerState = {
      devoured: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed Burger to", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").click(function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("clicked")

    var newBurger1
     = {
      name: $("#ca").val(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger1

    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});