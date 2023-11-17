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
    [1, "Book 1", "Author 1", 20, 50],
    [2, "Book 2", "Author 2", 25, 30],
    [3, "Book 3", "Author 3", 30, 40]
];

// Function to display all books
function displayBooks() {
    console.log("Book Id | Book Title | Author | Price | Quantity");
    console.log("--------------------------------------------");
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].join(" | "));
    }
}

// Function to add a new book
function addBook(book) {
    books.push(book);
}

// Function to find a book by Book Id, Title, or Author
function findBook(query) {
    for (let i = 0; i < books.length; i++) {
        if (
            books[i][0] === query ||
            books[i][1].toLowerCase() === query.toLowerCase() ||
            books[i][2].toLowerCase() === query.toLowerCase()
        ) {
            return books[i];
        }
    }
    return null; // Book not found
}

// Function to sell books and generate an invoice
function sellBooks(title, quantity, balance) {
    const book = findBook(title);
    if (book && book[4] >= quantity && book[3] * quantity <= balance) {
        book[4] -= quantity; // Reduce stock
        const totalCost = book[3] * quantity;
        console.log(`Invoice:\nBook Title: ${book[1]}\nQuantity: ${quantity}\nTotal Cost: $${totalCost}`);
    } else {
        console.log("Unable to process the sale. Check book availability and balance.");
    }
}

// Example usage
displayBooks();

// Add a new book
addBook([4, "Book 4", "Author 4", 35, 20]);

console.log("\nAfter adding a new book:");
displayBooks();

// Query for a book
const bookQuery = findBook("Book 2");
console.log("\nQuery Result for Book 2:", bookQuery);

// Sell books and generate an invoice
sellBooks("Book 1", 10, 300);

console.log("\nAfter selling 10 copies of Book 1:");
displayBooks();








