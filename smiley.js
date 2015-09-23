$(document).ready(function() {
  	alert('Hi, I\'m you\'re pet rock. Please click on me.');
  	rockTalk();
});	

function userName() {
  return userName = prompt('What\'s your name?', 'NAME');
};

function play(){
  return Play = prompt('Do you want to play with me ' + userName + '?', 'YES or NO').toUpperCase();
};

function rockTalk (){
var clicks = 0;
$('#irock').click(function(){
  if(clicks == 0){   
     $(".straightface").remove();
      $(".smile").show();
      $(this).effect("bounce");
      userName();
      setTimeout(function(){
            alert('It\'s good to meet you, ' + userName + '.');
          }, 600);
    clicks++;
  } else if (clicks == 1) {
    play();
    switch (Play){
        case 'YES':
         $('#irock').effect("bounce");
          alert('YAY!' + 'Let\'s play Tag!');
          setTimeout(function(){
            animation();
          }, 600);
         clicks++; 
       break;
       case 'NO' :
           $(".smile").css({'-moz-transform': 'rotate(180deg)'});
           $(".smile").css({'-web-kit': 'rotate(180deg)'}); 
           clicks++;
       break;
       default:
            play();
      };
    } else if (clicks == 2) {
      $('#irock').stop(false, false);
      location.reload();  
      } 
});
};


function animation() {
   var options = {
      duration: 800,
      easing: 'easeInCirc'
   };

   $('#irock')
      .animate({
            left: 280,
            top: 280
         },
         options
      )
      .animate({
            left: 0,
         },
         options
      )
      .animate({
            left: 280,
            top: 0,
         },
         options
      )
      .animate({
            left: 0,
         },
         $.extend(true, {}, options, {
            complete: function() {
               animation();
            }
         })
      );
};
