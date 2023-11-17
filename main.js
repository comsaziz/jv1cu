/*let age = 22;
const yearofbrith = 2001;

console.log(yearofbrith);
age = 26;
console.log(age); */

/*let name = 'Aziz'
console.log(typeof name);

let result = 2 > 3
console.log(result); */


/*let lang = 'Welcome'
let name = `${lang} to javascript` 
console.log(name); 


let n1 = 'Welcome to JS1';
console.log(n1.length) ; */


/*let colors = ['red','green','blue'];
colors.unshift('white');
colors.pop();
console.log(colors);
console.log(Array.isArray(colors)); */


/*const values = [[1,2,3],true,'JS1'];
console.log(values[2]); */


/*for(let i = 1; i <=5; i++){

    console.log(i);

} */

/*function aziz(){
    console.log(1);
    console.log(2);
    console.log(3);

}

aziz();
aziz();
aziz();
*/
let books = [
    { id: 1, title: "Book 1", author: "Aziz 1", price: 20, quantity: 50 },
    { id: 2, title: "Book 2", author: "Aziz 2", price: 25, quantity: 30 },
    { id: 3, title: "Book 3", author: "Aziz 3", price: 30, quantity: 40 }
];


function displayBooks() {
    console.log("Book Id | Book Title | Author | Price | Quantity");
    console.log("--------------------------------------------");
    books.forEach(book => {
        console.log(`${book.id} | ${book.title} | ${book.author} | $${book.price} | ${book.quantity}`);
    });
}


function addBook(id, title, author, price, quantity) {
    books.push({ id, title, author, price, quantity });
}


function findBook(query) {
    return books.find(book => 
        book.id === query ||
        book.title.toLowerCase() === query.toLowerCase() ||
        book.author.toLowerCase() === query.toLowerCase()
    );
}

function sellBooks(title, quantity, balance) {
    const book = findBook(title);
    if (book && book.quantity >= quantity && book.price * quantity <= balance) {
        book.quantity -= quantity; // Reduce stock
        const totalCost = book.price * quantity;
        console.log(`Invoice:\nBook Title: ${book.title}\nQuantity: ${quantity}\nTotal Cost: $${totalCost}`);
    } else {
        console.log("Unable to process the sale. Check book availability and balance.");
    }
}


displayBooks();


addBook(4, "Book 4", "Author 4", 35, 20);

console.log("\nAfter adding a new book:");
displayBooks();

const bookQuery = findBook("Book 2");
console.log("\nQuery Result for Book 2:", bookQuery);


sellBooks("Book 1", 10, 300);

console.log("\nAfter selling 10 copies of Book 1:");
displayBooks()







