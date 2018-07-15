$(document).ready(function(){
   
    flipImg="";
    arr=[];
    x=1;
    NOOFIMG=5;
    counter=NOOFIMG;
    curr="";
    prev="";
    
   
  function startflip(){
       flipImg.addClass('flip');
       setInterval(function(){ alert(flipImg); }, 3000);
  }
    
  function startloop(){ 
      $( ".book-bg ").children().each(function(index){
          
          $(this).css({'z-index':'index'})
           console.log(index + ": " + $( this).attr('class'));
          var name=$(this).attr('class');
          arr.push($(this));
     });
  }
  
   startloop(); 

   var timerhandle=setInterval(() =>{
             
        if(counter > -1){
                curr=arr[counter]; 
                curr.addClass('flip'); 
            if(!curr.hasClass('active-img')){ 
              var vTimeout=setTimeout(onFlip(curr),2000);
            }
               
                 prev=curr;//store the prev img
                 arr[counter--]; 
              }
          else{
                  clearInterval(timerhandle);
                  //arr.reverse; 
                  console.log('done');
          }
          },5000);
   
      
    var lastScrollTop = 0;
 
    var currentPage = 0;


function onFlip(curr){
   
        $(".active-img").removeClass("active-img"); 
        console.log( curr); 
       // curr.css("z-index","2")
        prev.addClass('inactive-img');
        //next.removeClass('pageflip');
       // curr.removeClass('flip');
        //curr.addClass('front');
        curr.addClass('active-img'); 
        console.log( prev);
        console.log(curr);
    }

function prevPage(prev) {
  
 // $('.flipped')
    if(prev){
            // prev.removeClass('active');
            // curr.next.addClass('active');
            // prev.removeClass('pageflip');
             prev.removeClass('flip');
             prev.addClass('front');
             prev.addClass('active-img');
             curr.removeClass('active-img');
            }
   
}
function reset(arr) { 
       counter=3;
       curr=arr[counter];
       if(counter > -1){
            if(curr){ 
             curr.addClass('pageflip');
             curr.removeClass('back');
                curr++;
            }
       }
 }
    

function nextPage() {
  
  $('.active-img')
    .removeClass('active-img')
    .addClass('flipped')
    .next('.page')
    .addClass('active-img')
    .siblings();  
}
    
  });
 