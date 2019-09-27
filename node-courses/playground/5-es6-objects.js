//object property shorthand

const name = 'Ramon'
const userAge = 28

const user = {
    name,
    age: userAge,
    location: 'Monterrey'
}

console.log(user)

//Object destructing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 34,
    salePrice: undefined,
    rating: 4.5
}

//const label = product.label
//const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)