$(document).ready(function() {
          $("#slider-breeder").slider({
              animate: true,
              value: 0,
              min: 0,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });
          

          $("#slider-health").slider({
              animate: true,
              value: 0,
              min: 0,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });
          $("#slider-train").slider({
              animate: true,
              value: 0,
              min: 0,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(3,ui.value); //changed
              }
          });
          $("#slider-social").slider({
              animate: true,
              value: 0,
              min: 0,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(4,ui.value); //changed
              }
          });
          $("#slider-energy").slider({
              animate: true,
              value: 0,
              min: 0,
              max: 5,
              step: 1,
              slide: function(event, ui) {
                  update(5,ui.value); //changed
              }
          });

          //Added, set initial value.
          $("#health").val(0);
          $("#breeder").val(0);
          $("#train").val(0);
          $("#social").val(0);
          $("#energy").val(0);
          $("#breeder-label").text(0);
          $("#health-label").text(0);
          $("#train-label").text(0);
          $("#social-label").text(0);
          $("#energy-label").text(0);
          
          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $breeder = slider == 1?val:$("#breeder").val();
        var $health = slider == 2?val:$("#health").val();
        var $train = slider == 3?val:$("#train").val();
        var $social = slider == 4?val:$("#social").val();
        var $energy = slider == 5?val:$("#energy").val();
        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $duration = $( "#slider2" ).slider( "value" );
         */

        $("#breeder-label").text($breeder);
        $("#health-label").text($health);
        $("#train-label").text($train);
        $("#social-label").text($social);
        $("#energy-label").text($energy);

        // $total = "$" + ($amount * $duration);
        // $( "#amount" ).val($amount);
        // $( "#amount-label" ).text($amount);
        // $( "#duration" ).val($duration);
        
        // $( "#total" ).val($total);
        // $( "#total-label" ).text($total);

        $('#slider-breeder a').html('<label><span class="fa fa-paw"></span>');
        $('#slider-health a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$health+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
        $('#slider-train a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$train+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
        // $('#slider-breeder a').html('<label><span class="fa fa-paw"></span>');
      }