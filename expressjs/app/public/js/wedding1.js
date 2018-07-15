var data, domNode;
var request = new XMLHttpRequest();
request.open('GET','Script/images.json');
domNode=document.querySelector('.album');
request.onreadystatechange=function(){
    
    if(request.status === 200 && request.readyState === 4)
        {
            data=JSON.parse(request.responseText);
            for(var item in data.wedding)  
            { var i=0;
                if(data.wedding.hasOwnProperty(item)){
                    var element = data.wedding[item];
                    var album;
                    album = document.createElement('a');
//                   album.addEventListener("click",(function(element){  displayGallery(element.id,element.albumname,element.totalImage);})(element) );
                    album.setAttribute('href','#');
                    album.setAttribute('onclick','displayGallery(' + element.id + ',' + '"' + element.albumname + '"'  +  ',' + element.totalImage + ')' );
                    album.innerHTML=element.albumname;
                    document.querySelector('#mySidebar .dropdown-content').appendChild(album); 
                }
                
            }
           
        };
        // var result=new EJS({url:'Script/templete.ejs'}).render(data);
       
};

function displayGallery(id, name, total) {
    var s2Col = 0;
    alert("Hello World!" + id + '' + 'name' + name + 'total' + total);
    for (var i = 1; i < total; i++) {
        var listItem = document.createElement('li');
        if (i == 1){s2Col = 'double';} 
          else if(i==2){s2Col = 'double-col';}
            else
            {s2Col = " ";}
        listItem.className = "album-item text-center " + s2Col;

            listItem.innerHTML = ' <a href="#"> <figure class="album"><img  onmouseover="labelwrap(this)" onmouseout="normalImg(this)"  src="Images/innercover/wedding/' +
            id + '/' + i + '.jpg"' + ' ' + "onclick='openModal1('wedding',1);currentSlide(1,'" + name + "')' " + 'class="hover-shadow' + " " + 'item' + i + ' "/ > ' +
            ' <img  width=50 height=50 src="Images/logo-thumbnail.jpg"   class="hover-shadow img-thumbnail imgLogo" /> ' +
            '<label class="labelwrap">' + name + '</label>' + ' </figure> </a>' +
            '<p>' + total + '</p>';

            document.querySelector('#wedding').appendChild(listItem); 
        };
    }

request.send();