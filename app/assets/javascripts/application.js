// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap.min

$(document).ready(function() {
          $("#slider-breeder").slider({
              animate: true,
              value:1,
              min: 1,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });

          $("#slider-health").slider({
              animate: true,
              value:1,
              min: 1,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });
          $("#slider-train").slider({
              animate: true,
              value:1,
              min: 1,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });
          $("#slider-social").slider({
              animate: true,
              value:1,
              min: 1,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });
          $("#slider-energy").slider({
              animate: true,
              value:1,
              min: 1,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });

          //Added, set initial value.
          $("#amount").val(0);
          $("#duration").val(0);
          $("#amount-label").text(0);
          $("#duration-label").text(0);
          
          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();
        var $duration = slider == 2?val:$("#duration").val();

        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $duration = $( "#slider2" ).slider( "value" );
         */

         $total = "$" + ($amount * $duration);
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);
         $( "#duration" ).val($duration);
         $( "#duration-label" ).text($duration);
         $( "#total" ).val($total);
         $( "#total-label" ).text($total);

         $('#slider-health a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider-train a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider-breeder a').html('<label><span class="fa fa-paw"></span>');
      }