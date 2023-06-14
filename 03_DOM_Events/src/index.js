//////////////////////////////////////
// Select elements (that will be referenced frequently)
//////////////////////////////////////
const toggleFormButton = document.querySelector('#toggleForm')
const bookForm = document.querySelector("#book-form")

//////////////////////////////////////
// Helper functions
//////////////////////////////////////
function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

function fillIn(form, data){
    form.title.value = data.title
    form.author.value = data.author
    form.price.value = data.price
    form.imageUrl.value = data.imageUrl
    form.inventory.value = data.inventory
}

fillIn(bookForm, {
  title: 'Designing Data-intensive Applications',
  author: "Martin Kleppmann",
  price: 22,
  inventory: 1,
  imageUrl: 'https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX379_BO1,204,203,200_.jpg'
})

//////////////////////////////////////
// render functions  (Data => Display)
//////////////////////////////////////

// create a function renderHeader() that takes the store name from bookStore and adds to the DOM
function renderHeader(bookStore) {
  document.querySelector('#store-name').textContent = bookStore.name;
}

function renderFooter(bookStore) {
  document.querySelector('#store').textContent = bookStore.location;
  document.querySelector('#number').textContent = bookStore.number;
  document.querySelector('#address').textContent = bookStore.address;
}

// function: renderBook(book)
// --------------------------
// accepts a book object as an argument and creates
// an li something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
// </li>
// appends the li to the ul#book-list in the DOM
function renderBook(book) {
    
  const li = document.createElement('li');
  li.className = 'list-li';
  
  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  li.append(h3);

  const pAuthor = document.createElement('p');
  pAuthor.textContent = book.author;
  li.append(pAuthor);
  
  const pPrice = document.createElement('p');
  pPrice.textContent = formatPrice(book.price);
  li.append(pPrice);
  
  const img = document.createElement('img');
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;
  img.title = `${book.title} cover`;
  li.append(img);

  const btn = document.createElement('button');
  btn.textContent = 'Delete';
  btn.addEventListener('click', () => li.remove())
  li.append(btn);

  document.querySelector('#book-list').append(li);
}
////////////////////////////////////////////
// Event listeners & handlers (Behavior -> (Data) -> Display)
////////////////////////////////////////////

function toggleBookForm() {
  const isHidden = bookForm.classList.toggle('collapsed')
  if (isHidden) {
    toggleFormButton.textContent = "New Book"
  } else {
    toggleFormButton.textContent = "Hide Book Form"
  }
}

toggleFormButton.addEventListener('click', toggleBookForm)

function handleSubmit(event){
  event.preventDefault();
  console.dir(event.target)
  console.log(event.target.title)
  console.log(event.target.title.value)
  const newBook = {
    title: bookForm.title.value,
    author: event.target.author.value,
    price: event.target.price.value,
    reviews: [],
    inventory: event.target.inventory.value,
    imageUrl: event.target.imageUrl.value
  }
  renderBook(newBook)
}

// sample book object
// {
//   id:1,
//   title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//   author: 'Marjin Haverbeke',
//   price: 10.00,
//   reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
//   inventory: 10,
//   imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
// }

bookForm.addEventListener('submit', handleSubmit)

////////////////////////////////////////////
// call render functions to populate the DOM
////////////////////////////////////////////

renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(renderBook);

