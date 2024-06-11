function back() {
    window.location.href = 'admin.html';
 }

const books = [
    { isbn: '9786263350700', title: '沒有你,我無法成為小說家', category: '小說', author: '臺北市 :時報文化', publisher: '臺北市 :時報文化', pubDate: '2022.04', callNumber: '861.57 8642-16', image: 'https://i.postimg.cc/x19Lncvw/20220419041508361038.jpg' },
    { isbn: '9786267238639', title: '職場英文精準表達', category: '英語', author: 'Grant Sundbye, LookLook English著 ; 韓蔚笙譯', publisher: '臺北市 :EZ叢書館', pubDate: '2023.05', callNumber: '805.188 8757/3', image: 'https://i.postimg.cc/NFYjmrjY/image.jpg' }
];

const bookList = document.getElementById('bookList');
const editBookFormContainer = document.getElementById('editBookFormContainer');
const editBookForm = document.getElementById('editBookForm');
const editBookIsbn = document.getElementById('editBookIsbn');
const editBookTitle = document.getElementById('editBookTitle');
const editBookCategory = document.getElementById('editBookCategory');
const editBookAuthor = document.getElementById('editBookAuthor');
const editBookPublisher = document.getElementById('editBookPublisher');
const editBookPubDate = document.getElementById('editBookPubDate');
const editBookCallNumber = document.getElementById('editBookCallNumber');
const editBookImage = document.getElementById('editBookImage');

books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="book-isbn">${book.isbn}</span> - 
        <span class="book-title">${book.title}</span>
        <button class="book-button" onclick="editBook('${book.isbn}')">編輯</button>
    `;
    bookList.appendChild(listItem);
});

function editBook(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book) {
        editBookIsbn.value = book.isbn;
        editBookTitle.value = book.title;
        editBookCategory.value = book.category;
        editBookAuthor.value = book.author;
        editBookPublisher.value = book.publisher;
        editBookPubDate.value = book.pubDate;
        editBookCallNumber.value = book.callNumber;
        editBookImage.value = book.image;
        editBookFormContainer.style.display = 'block';
    }
}

function saveBook() {
    const isbn = editBookIsbn.value;
    const book = books.find(b => b.isbn === isbn);
    if (book) {
        book.title = editBookTitle.value;
        book.category = editBookCategory.value;
        book.author = editBookAuthor.value;
        book.publisher = editBookPublisher.value;
        book.pubDate = editBookPubDate.value;
        book.callNumber = editBookCallNumber.value;
        book.image = editBookImage.value;
        alert('Book information saved.');
        editBookFormContainer.style.display = 'none';
        renderBookList();
    }
}

function renderBookList() {
    bookList.innerHTML = '';
    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="book-isbn">${book.isbn}</span> - 
            <span class="book-title">${book.title}</span>
            <button class="book-button" onclick="editBook('${book.isbn}')">編輯</button>
        `;
        bookList.appendChild(listItem);
    });
}