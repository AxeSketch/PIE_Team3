var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shop');

var products = [
    new Product({
    imaginePath:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    titlu: 'Pantof1',
    descriere:'Descrierea pantofului 1',
    pret: 90
}),

new Product({
    imaginePath:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    titlu: 'Pantof2',
    descriere:'Descrierea pantofului 2',
    pret: 90
}),

new Product({
    imaginePath:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    titlu: 'Pantof3',
    descriere:'Descrierea pantofului 3.',
    pret: 90
})

];

var done=0; 

for (var i=0; i<products.length;i++)
{
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

