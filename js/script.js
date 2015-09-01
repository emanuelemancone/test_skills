// JavaScript Document
 $(function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
      // most effect types need no options passed by default
      var options = {};
      // run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    };
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // set effect from select menu value
    $( "#button" ).click(function() {
      runEffect();
    });
    $( "#effect" ).hide();
  });
  
