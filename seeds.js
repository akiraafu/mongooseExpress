const mongoose = require ('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("mongo connection open!")
    })
    .catch(err => {
        console.log('oh no mongo error!!')
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p=>{
//     console.log(p)
// })
// .catch(e =>{
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Fairy_Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic_Goddess_Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic_Mini_Seedless_Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic_Celery',
        price: 1.5,
        category: 'vegetable'
    },
    {
        name: 'Choclate_Whole_Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})