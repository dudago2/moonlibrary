function back() {
    var getAdmin = localStorage.getItem("admin");
    if(getAdmin==1){
        window.location.href = '/admin/admin.html';
    }
    else{
        window.location.href = '/staff/staff.html';
    }
 }

 document.addEventListener("DOMContentLoaded", function() {
    getAllBookDetailData();
 });


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



function editBook(isbn) {
    fetch('http://localhost:8080/api/books/'+isbn, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        if (data) {
            editBookIsbn.value = data.isbn;
            editBookTitle.value = data.title;
            editBookCategory.value = data.subject;
            editBookAuthor.value = data.author;
            editBookPublisher.value = data.publisher;
            editBookPubDate.value = data.publicationDate;
            editBookCallNumber.value = data.callNumber;
            editBookImage.value = data.url;
            editBookFormContainer.style.display = 'block';
        }
  
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
    
}

function saveBook() {
    var getId = editBookIsbn.value;

    fetch('http://localhost:8080/api/books/'+getId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },body: JSON.stringify({
            "title": editBookTitle.value,
            "subject": editBookCategory.value,
            "author": editBookAuthor.value,
            "publisher":editBookPublisher.value,
            "callNumber":editBookCallNumber.value,
            "url":editBookImage.value,
            "publicationDate":editBookPubDate.value 
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('failed');
        }else{
            alert("修改成功")
        }
        return response.json();
        
    })
    .then(data => {
        // Handle the response data if needed
        console.log('Update successful', data);
        // localStorage.setItem("email", editEmail);
        

        
        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
    // const isbn = editBookIsbn.value;
    // const book = books.find(b => b.isbn === isbn);
    // if (book) {
    //     book.title = editBookTitle.value;
    //     book.category = editBookCategory.value;
    //     book.author = editBookAuthor.value;
    //     book.publisher = editBookPublisher.value;
    //     book.pubDate = editBookPubDate.value;
    //     book.callNumber = editBookCallNumber.value;
    //     book.image = editBookImage.value;
    //     alert('Book information saved.');
    //     editBookFormContainer.style.display = 'none';
    //     renderBookList();
    // }
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
function getAllBookDetailData(){
    fetch('http://localhost:8080/api/books', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        data.forEach(data => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="book-isbn">${data.isbn}</span> - 
                <span class="book-title">${data.title}</span>
                <button class="book-button" onclick="editBook('${data.isbn}')">編輯</button>
            `;
            bookList.appendChild(listItem);
        });
  
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}