var data, result;
var request = new XMLHttpRequest();
request.open('GET','Script/images.json');
 
request.onreadystatechange=function(){
    
    if(request.status === 200 && request.readyState === 4)
        {
            data=JSON.parse(request.responseText);
            result= new EJS({url:'Script/templete.ejs'}).render(data.wedding);
            document.querySelector('.wedding').innerHTML=result;
        }
};

request.send();