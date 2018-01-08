 
//  step one one clicking the li the toggle switches the li off and on 

$(document).ready(function(){
    
    
    $("ul").on ("click", "li" , function(){
        $(this).toggleClass("classy");
    });
    
    
    
 


//  part two this is where the span is clicked and the parent li fades out and deletes



    $("ul").on("click" , "span " , function(event){
      $(this).parent().fadeOut(500, function() {
          $(this).remove();
          });
        
      //  event.stopPropagation();
      });
    
   
    


 

    $("#btn2").click(function(){
        
         var f = $("input").val();
        $("input").val("");
          $("ul").append("<li> "   + f +  " &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;       &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   &nbsp; &nbsp;                                <span>x</span></li>"); 
        
        
    });
});


