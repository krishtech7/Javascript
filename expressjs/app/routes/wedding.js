var express = require('express');
var router = express.Router();

router.get('/wedding', function(req, res) {
  var info = '';
   
  var dataFile = req.app.get('appdata');

  dataFile.albums.forEach(function(item) {
    for (var i = 1; i < item.total;  i++) {
    info += `
    <li>
    <img src="/Images/innercover/${item.type}/${item.id}/${i}.jpg" 
    alt="background" style="height:300px">
      <h2>${item.name}</h2>
      <p>${item.type}</p>
    </li>
    `;
    }
  });
  res.send(`
  <link rel='stylesheet' type='text/css' href='/css/style.css'>
      <h1>Roux Academy Meetups</h1>
      ${info}
  `);
});

// router.get('/wedding/:type', function(req, res) {
//   var dataFile = req.app.get('appdata');
//   var album = dataFile.albums[req.params.type];
//   res.send(` 
//   <img src="/Images/innercover/${album.type}/${album.id}/1.jpg" 
//     alt="background" style="height:300px">
//       <h1>${album.type}</h1>
//       <h2>with ${album.name}</h2>
//       <p>${album.total}</p>
//   `);
// });

router.get('/wedding/:type', function(req, res) {
  var dataFile = req.app.get('appdata');
  var albumByType=[];
  var photosbyType=[];
  var photos1=[];
  var info='';
  var j=0;
  var temp;
  dataFile.albums.forEach(function(item){
    temp=item.type+item.id;
    if(temp === req.params.type){
      albumByType.push(item); 
    } 
});
for (var i = 0; i < albumByType.length;  i++) {
  for (var k = 0; k < albumByType[i].total;  k++) {
    photosbyType.push(albumByType[i]);
}
j=0;
};
 
 
res.render('index',{ 
     pageTitle:'Wedding Profile',
     pageID:'Wedding',
    photos:photosbyType 
  });



});

// router.get('/wedding/:type', function(req, res) {
//   var dataFile = req.app.get('appdata');
//   var albumByType=[];
//   var photosbyType=[];
//   var photos1=[];
//   var info='';
//   var j=0;
//   var albumid="";
//   dataFile.albums.forEach(function(item){
//     albumid=item.type ;
//     if(item.type === req.params.type){
//       albumByType.push(item); 
//     } 
// });
// // for (var i = 0; i < albumByType.length;  i++) {
//   for (var k = 1; k < 8;  k++) {
//   info += `<img src="/Images/innercover/${albumByType[k].type}/${albumByType[k].id}/${k}.jpg" 
//   alt="background" style="height:300px">
//     <h1>${albumByType[k].type}</h1>
//     <h2>with ${albumByType[k].name}</h2>
//     <p>${albumByType[k].total}</p>
//     <p>${k}</p>
//     `;
//     // photosbyType.push(`<img src="/Images/innercover/${albumByType[k].type}/${albumByType[k].id}/${k}.jpg" 
//     // alt="background" style="height:300px">`);
//     // photos1.push(albumByType[k]);
// }
// j=0;
// };
// res.send(` 
// ${info}
// `); 
// res.render('index',{ 
//      pageTitle:'Wedding Profile',
//      pageID:'Wedding',
//     photos:photos1 
//   });



// });



module.exports = router;
