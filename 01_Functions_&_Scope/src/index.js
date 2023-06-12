//Data 
const inventory = [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45.75,
            reviews: [{userID: 15, content:'good way to learn JQuery'}],
            inventory: 2,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36.00,
            reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
            inventory: 8,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25.50,
            reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
            inventory: 0,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            price: 6.00,
            reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        }, 
        {
            id:6,
            title: 'Learn Enough JavaScript to Be Dangerous',
            author: 'Michael Hartl',
            price: 24.00,
            reviews: [{userID: 50, content:'pretty good'}],
            inventory: 5,
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

        },
        {
            id:7,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            price: 49.95,
            reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
            inventory: 20,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]

// ✅ Function ideas:
/*
- helloWorld
- formatPrice(price)
- blurb(book)
*/


function helloWorld() {  // function declarations
    console.log("Hello, World!")
    return "Hello, world!"
}

helloWorld() // function invocation / calling the function

function helloFriend(nameStr) {
    // return "Hello, " + nameStr // string concatenation
    return `Hello, ${nameStr}` // string interpolation
}

// function formatPrice(price){  // 'regular' function expression, rewritten below as function statement with arrow function
//   // return `$${price}`
//   return '$' + Number.parseFloat(price).toFixed(2)
// }


// 💡 Arrow functions vs regular functions

// ✅ create an arrow function version of the formatPrice function
const formatPrice = (price) => '$' + Number.parseFloat(price).toFixed(2)

const formattedPrice = formatPrice(inventory[0].price)
console.log("🚀 ~ file: index.js:88 ~ formattedPrice:", formattedPrice)

// ✅ create a blurb() function that accepts a book as an argument and logs a message in the following format:
// 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'
const sampleBook = {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
}

// console.log(Object.keys(inventory[3])
// console.log(Object.values(inventory[3]))

function blurb(bookObj){
    const title = bookObj.title
    const author = bookObj.author
    const price = formatPrice(bookObj.price)
    return `${title} by ${author} is on sale for ${price}`
}
console.log(blurb(sampleBook))


// 💡 Difference between Block scope, Function scope, and Global scope

// ✅ create a variable `highestPricedBook`

// let highestPricedBook = inventory[0] // could work in global scope

// ✅ create a function `findHighestPricedBook` that finds that book and returns it

function findHighestPricedBook(inventoryArr){
    let highestPricedBook = inventoryArr[0] // function scope also works here
    for (let bookObj of inventoryArr) {
        // let highestPricedBook = bookObj // could not work if declared here because would be stuck in block scope
        if (highestPricedBook.price < bookObj.price) {
            highestPricedBook = bookObj
        }
    }
    return highestPricedBook;
}

// After Break

// ✅ Create a function called `log` that takes a function and its argument as arguments
// and logs a message explaining the name of the function, the argument passed and 
// the return value 

// 💡 Practice using callbacks for iteration

// ✅ Create an array of the prices of all of the books

// ✅ Create an array of simplified book objects (title, author, price)

// ✅ Create an array of strings from the inventory in the following format:
// 'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'

// 💡 When do I use forEach vs map?
// forEach when I just want to call a function on every element in an array
// map is when I want to build a new array based on an existing array
