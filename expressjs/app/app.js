var express=require('express');
var app=express();
var datafile=require('./data/images.json');

app.set('port',process.env.PORT || 3000);
app.set('appdata', datafile) ;
app.set('view engine', 'ejs');
app.set('views','app/views');

app.locals.siteTitle='RGP';
app.locals.allAlbums=datafile.albums ;
app.use(require('./routes/index'));
app.use(require('./routes/wedding'));
app.use(require('./routes/admin'));
app.use(require('./routes/api'));
app.use(express.static('app/public'));
 


var server =app.listen(app.get('port'),function()
{
    console.log('listening' + app.get('port'));
    
})