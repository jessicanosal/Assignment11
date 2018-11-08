$(document).ready(
    function(){
        $('#button').click(function(){
          var addTask = $('input[name=ListItem]').val();
             $('ol').append('<li>' + addTask + '</li>');
        });
       
       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $("li").click(function(){
        $(this).toggleClass('strike');
      })

      $("li").dblclick(function(){
         $(this).fadeOut('slow'); 
      })

      $('input').focus(function() {
        $(this).val('');
      });   
    }
);