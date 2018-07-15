$(function(){
    $.getJSON('api',updateAdmin);
    $('.feedback-form').submit(function(e){
        e.preventDefault();//prevent server reload
        $.post('api',{
          id:  $('#feedback-form-id').val(),
          type:$('#feedback-form-type').val(),
          name:$('#feedback-form-name').val(),
          total:$('#feedback-form-total').val(),
        }, updateAdmin);
    });

    $('.feedback-messages').on('click', function(e) {
        if(e.target.className == 'glyphicon glyphicon-remove'){
            $.ajax({
                url:'api/'+ e.target.id,
                type:'DELETE',
                success:updateAdmin
            });//ajax
        }//the target
    
    });


    function updateAdmin(data){
     var output='';
     $.each(data,function(key,item){
        output += '     <div class="feedback-item item-list media-list">';
        output += '       <div class="feedback-item media">';
        output += '         <div class="feedback-info media-body">';
        output += '         <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"> <span id="'+ key +'" class="glyphicon glyphicon-remove"> </span></button></div>';
        output += '           <div class="feedback-head">';
        output += '             <div class="feedback-id">' + item.id + '<small class="feedback-id label label-info"></small></div>';
        output += '           </div>';
        output += '           <div class="feedback-type">' + item.type + '</div>';
        output += '           <div class="feedback-name">' + item.name + '</div>';
        output += '           <div class="feedback-total">' + item.total + '</div>';
        output += '         </div>';
        output += '       </div>';
        output += '     </div>';

     });
$('.feedback-messages').html(output);
    }
})