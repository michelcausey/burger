$(function() {
  console.log('script loaded')
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newburger = $(this).data("newburger");

    var newBurgerState = {
      devoured: newburger
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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger1
     = {
      name: $("#ca").val(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger1

    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
