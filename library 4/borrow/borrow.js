let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.home-images img');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const newTransform = `translateX(-${currentSlide * 100}%)`;
    document.querySelector('.home-images').style.transform = newTransform;
}

function searchbook() {
    var home = document.getElementById("home");
    var bookname = document.getElementById("bookname");
    var author = document.getElementById("author");
    var subject = document.getElementById("subject");

    home.style.display = "none";  
    bookname.style.display = "block";
    author.style.display = "none";  
    subject.style.display = "none";  
}

function searchauthor() {
    var home = document.getElementById("home");
    var bookname = document.getElementById("bookname");
    var author = document.getElementById("author");
    var subject = document.getElementById("subject");

    home.style.display = "none";  
    bookname.style.display = "none";
    author.style.display = "block";  
    subject.style.display = "none";  
}

function searchsubject() {
    var home = document.getElementById("home");
    var bookname = document.getElementById("bookname");
    var author = document.getElementById("author");
    var subject = document.getElementById("subject");

    home.style.display = "none";  
    bookname.style.display = "none";
    author.style.display = "none";  
    subject.style.display = "block";  
}

function logout() {
    window.location.href = '../login/login.html';
}

function home() {
    window.location.href = 'borrow.html'
}

// 查詢
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", subject: "英語", image: "https://i.postimg.cc/yNVb8Mpj/10267-bk11713946761.jpg"},
    { title: "1984", author: "George Orwell", subject: "漫畫"},
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", subject: "小說"},
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", subject: "旅遊"},
    { title: "Moby Dick", author: "Herman Melville", subject: "歷史"}
];

function bookSearch() {
    const query = document.getElementById('searchInput1').value.toLowerCase();
        const resultsContainer = document.getElementById('results1');
        resultsContainer.innerHTML = '';

        if (query) {
            document.getElementById('error_message1').style.display = 'none';
            const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));

            if (filteredBooks.length > 0) {
                filteredBooks.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book';
                    bookElement.innerHTML = `<h1>書名：${book.title}</h3><p>作者：${book.author}</p><p>主題：${book.subject}</p><img src="${book.image}"/>`;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>無此書名，請重新查詢</p>';
            }
        } else {
            document.getElementById('error_message1').style.display = 'block';
        }
}

function authorSearch() {
    const query = document.getElementById('searchInput2').value.toLowerCase();
        const resultsContainer = document.getElementById('results2');
        resultsContainer.innerHTML = '';

        if (query) {
            document.getElementById('error_message2').style.display = 'none';
            const filteredBooks = books.filter(book => book.author.toLowerCase().includes(query));

            if (filteredBooks.length > 0) {
                filteredBooks.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book';
                    bookElement.innerHTML = `<h1>書名：${book.title}</h3><p>作者：${book.author}</p><p>主題：${book.subject}</p><img src="${book.image}"/>`;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>無此作者，請重新查詢</p>';
            }
        } else {
            document.getElementById('error_message2').style.display = 'block';
        }
}

function subjectSearch() {
    const query = document.getElementById('searchInput3').value.toLowerCase();
        const resultsContainer = document.getElementById('results3');
        resultsContainer.innerHTML = '';

        if (query) {
            document.getElementById('error_message3').style.display = 'none';
            const filteredBooks = books.filter(book => book.subject.toLowerCase().includes(query));

            if (filteredBooks.length > 0) {
                filteredBooks.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book';
                    bookElement.innerHTML = `<h1>書名：${book.title}</h3><p>作者：${book.author}</p><p>主題：${book.subject}</p><img src="${book.image}"/>`;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                document.getElementById('error_message3').style.display = 'block';
            }
        }
}

 function member() {
    window.location.href = 'member.html';
 }

  function meminfo() {
    window.location.href = 'meminfo.html'
  }