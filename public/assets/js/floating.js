$(document).ready(function(){
	
    $(".form-group .form-control").click(function(){
         if($(this).val()!=""){
             $(this).siblings("label").addClass("active");
         }
         else{
              $(this).siblings("label").removeClass("active");
         }
    });
  });

  