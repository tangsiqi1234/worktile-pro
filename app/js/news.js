
 $(function(){
      $('.title').click(function(){
        if($('#dialogue').css("display")=='none'){
             $('#dialogue').show();
        }else{
             $('#dialogue').hide();
  }
  $('#dialogue').click(function(){
    $('#dialogue').hide();
  })

  $('#sample-project').click(function(){
    $('#selective-listing').show();
  })

  })


  $('#gonggao').click(function(){
      $('.path-right').css({"display":"block"});
  })
   
   $('.selectize-input').click(function(){
    if($('#typical-example').css("display")=='none'){
       $('#typical-example').show();
       $('.ui-select-choices-group').show();
    }else{
       $('#typical-example').hide();
       $('.ui-select-choices-group').hide();
    }
     
     
   })
});

$(function(){
    $("#Stick").click(function(){
            $(this).hide();
            $("#cancel").show();
            if($("this").css({"display":"none"})){
                  $("#cancel").click(function(){
                    $(this).hide();
                         $("#Stick").show();
                  })
            }
    })
  })

 


 $(function(){
 	 $('.but2').click(function(){
        if($('#Group-members').css("display")=='none'){
             $('#Group-members').show();
        }else{
             $('#Group-members').hide();
       }

       $('.modal-close').click(function(){        
         	$('#Group-members').hide();
        
       })
  })
 })


 $(function(){
 	 $('.but1').click(function(){
        if($('.modal-md').css("display")=='none'){
             $('.modal-md').show();
        }else{
             $('.modal-md').hide();
       }

       $('.lc-close').click(function(){
       	  $('.modal-md').hide();
       })

  })

    $('.btn-dis').click(function(){
          $('.modal-md').hide();
       })
 })


 $(function(){
   $('.but3').click(function(){
        if($('#video').css("display")=='none'){
             $('#video').show();
        }else{
             $('#video').hide();
       }

       $('.lc-close').click(function(){
          $('#video').hide();
       })
  })
    $('.btn-dis').click(function(){
          $('#video').hide();
       })
 })


 $(function(){
   $('.but4').click(function(){
        if($('#information').css("display")=='none'){
             $('#information').show();
        }else{
             $('#information').hide();
       }

       $('.lc-close').click(function(){
          $('#information').hide();
       })
  })
 })

 $(function(){
   $('.but5').click(function(){
        if($('.slide-show').css("display")=='none'){
             $('.slide-show').show();
        }else{
             $('.slide-show').hide();
       }

       $('.lc-close').click(function(){
          $('.slide-show').hide();
       })
  })
 })

 $(function(){
   $('#but6').click(function(){
        if($('#alerts').css("display")=='none'){
             $('#alerts').show();
        }else{
             $('#alerts').hide();
       }

       $('.lc-close').click(function(){
          $('#alerts').hide();
       })
  })
 })
 


 $(function(){
   $('#but7').click(function(){
        if($('#join-group').css("display")=='none'){
             $('#join-group').show();
        }else{
             $('#join-group').hide();
       }

       $('.hu').click(function(){
          $('#join-group').hide();
       })
  })
 })


 // $(function(){
 //   $('#add-mem').click(function(){
 //        if($('#add-me').css("display")=='none'){
 //             $('#add-me').show();
 //        }else{
 //             $('#add-me').hide();
 //       }

 //       $('.hu').click(function(){
 //          $('#ee').hide();
 //       })
 //  })
 // })



 $(function(){
   $('#button-add').click(function(){
        if($('#create-schedule').css("display")=='none'){
             $('#create-schedule').show();
        }else{
             $('#create-schedule').hide();
       }

       
  })
 })


  $(function(){
   $('#leaguer').click(function(){
        if($('#edit').css("display")=='none'){
             $('#edit').show();
        }else{
             $('#edit').hide();
       }

       
  })
 })

 $(function(){
   $('.lc-avatar-40 ').click(function(){
        if($('#material').css("display")=='none'){
             $('#material').show();
        }else{
             $('#material').hide();
       }

       
  })
 })

 $(function(){
   $('.member-more').click(function(){
        if($('#leaguer').css("display")=='none'){
             $('#leaguer').show();
        }else{
             $('#leaguer').hide();
       }

       
  })
 })


  $(function(){
   $('#three').click(function(){
        if($('#create-task').css("display")=='none'){
             $('#create-task').show();
        }else{
             $('#create-task').hide();
       }

       $('.lc-close').click(function(){
          $('#create-task').hide();
       })
  })

   $('.btn-dis').click(function(){
      $('#create-task').hide();
   })

 })


   $(function(){
   $('#smlie').click(function(){
        if($('#picture').css("display")=='none'){
             $('#picture').show();
        }else{
             $('#picture').hide();
       }

       
  })
 })

  $(function(){

    $('.one').click(function(){
       $('.first').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.fifth').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();
        $('.one-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })


    })

    $('.two').click(function(){
      
      $('.second').show();
      $('.first').hide();
      $('.fourth').hide();
      $('.fifth').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();
        $('.two-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
    
           
    })

    $('.four').click(function(){
       $('.fourth').show();
       $('.second').hide();
       $('.first').hide();
       $('.fifth').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.four-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

     $('.five').click(function(){
       $('.fifth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.five-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

      $('.six').click(function(){
       $('.sixth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.fifth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();


        $('.six-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

       $('.seven').click(function(){
       $('.seventh').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.fifth').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.seven-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

    $('.eight').click(function(){
       $('.eighth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.fifth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.eight-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

   $('.nine').click(function(){
       $('.nineth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.fifth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.nine-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

    $('.ten').click(function(){
       $('.tenth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.fifth').hide();
        $('.eleventh').hide();
       $('.twelfth').hide();

        $('.ten-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

     $('.eleven').click(function(){
       $('.eleventh').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.fifth').hide();
       $('.twelfth').hide();

        $('.eleven-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.twelve-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })

      $('.twelve').click(function(){
       $('.twelfth').show();
       $('.second').hide();
       $('.fourth').hide();
       $('.first').hide();
       $('.sixth').hide();
       $('.seventh').hide();
       $('.eighth').hide();
        $('.nineth').hide();
       $('.tenth').hide();
        $('.eleventh').hide();
       $('.fifth').hide();

        $('.twelve-o').css({
          'background-color':'#8F8F8F',
          'border-color':'#8F8F8F'
        })
         $('.two-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
        $('.six-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.four-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.five-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.seven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eight-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.nine-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.ten-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
         $('.eleven-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })
          $('.one-o').css({
          'background-color':'#c2c2c2',
          'border-color':'#c2c2c2'
        })

           
    })
  })
