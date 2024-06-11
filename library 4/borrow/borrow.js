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
    { title: "1984", author: "George Orwell", subject: "漫畫", image: "https://i.postimg.cc/yNVb8Mpj/10267-bk11713946761.jpg"},
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", subject: "小說", image: "https://i.postimg.cc/yNVb8Mpj/10267-bk11713946761.jpg"},
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", subject: "旅遊", image: "https://i.postimg.cc/yNVb8Mpj/10267-bk11713946761.jpg"},
    { title: "Moby Dick", author: "Herman Melville", subject: "歷史", image: "https://i.postimg.cc/yNVb8Mpj/10267-bk11713946761.jpg"}
];

function bookSearch() {
    const query = document.getElementById('searchInput1').value.toLowerCase();
    console.log(query);
    //var getBookDetail;
    const resultsContainer = document.getElementById('results1');
    resultsContainer.innerHTML = '';
    fetch('http://localhost:8080/api/books/search?title='+query, {
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
        if (query) {
            document.getElementById('error_message1').style.display = 'none';
            //const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
            if (data.length > 0) {
                data.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book';
                    bookElement.innerHTML = `<h1>書名：${book.title}</h1>
                                            <p>作者：${book.author}</p>
                                            <p>主題：${book.subject}</p>
                                            <img src="${book.url}"/>`;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>無此書名，請重新查詢</p>';
            }
        } else {
            document.getElementById('error_message1').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
       
}

function authorSearch() {

    const query = document.getElementById('searchInput2').value.toLowerCase();
    console.log(query);
    //var getBookDetail;
    const resultsContainer = document.getElementById('results2');
    resultsContainer.innerHTML = '';
    fetch('http://localhost:8080/api/books/search/author?author='+query, {
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
        if (query) {
            document.getElementById('error_message2').style.display = 'none';
            //const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
            if (data.length > 0) {
                data.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book';
                    bookElement.innerHTML = `<h1>書名：${book.title}</h1>
                                            <p>作者：${book.author}</p>
                                            <p>主題：${book.subject}</p>
                                            <img src="${book.url}"/>`;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>無此書名，請重新查詢</p>';
            }
        } else {
            document.getElementById('error_message2').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}

function subjectSearch() {
   
    const query = document.getElementById('searchInput3').value.toLowerCase();
    console.log(query);
    //var getBookDetail;
    const resultsContainer = document.getElementById('results3');
    resultsContainer.innerHTML = '';
    fetch('http://localhost:8080/api/books/search/subject?subject='+query, {
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
        if (query) {
            document.getElementById('error_message3').style.display = 'none';
            //const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
            if (data.length > 0) {
                data.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book';
                    bookElement.innerHTML = `<h1>書名：${book.title}</h1>
                                            <p>作者：${book.author}</p>
                                            <p>主題：${book.subject}</p>
                                            <img src="${book.url}"/>`;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.innerHTML = '<p>無此書名，請重新查詢</p>';
            }
        } else {
            document.getElementById('error_message3').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}

 function member() {
    window.location.href = 'member.html';
 }

  function meminfo() {
    window.location.href = 'meminfo.html'
  }

  i=1;
function fnsubmit()
{
var odiv=document.getElementById("box");
var oem=odiv.getElementsByTagName("em")[0];
var otext=document.getElementById("text");
var oli=odiv.getElementsByTagName("li");
var add_li=document.createElement("li");
var o_span=document.createElement("span");
if(otext.value=="")
{
alert("請填寫留言内容！");
return;
}
oem.style.display="none";
o_span.style.position="absolute";
o_span.style.top="-20px";
o_span.style.right="20px";
o_span.style.background="#cccccc";
add_li.style.position="relative";
add_li.index=i;
add_li.style.background="#cccccc";
add_li.style.marginBottom="20px";
var str=document.createTextNode(i+"、"+otext.value);
var strspan=document.createTextNode("確定刪除"+i+"、"+otext.value+"内容？");
add_li.appendChild(o_span);
o_span.style.display="none";
o_span.appendChild(strspan);
add_li.appendChild(str);
odiv.appendChild(add_li);
i++;
for(j=0;j<oli.length;j++)
{
var m=j;
oli[j].onmouseover=function()
{
this.style.background="#ffff00";
(this.childNodes(o_span)).style.display="block";
};
oli[j].onmouseout=function()
{
this.style.background="#cccccc";
(this.childNodes(o_span)).style.display="none";
};
oli[j].onclick=function()
{
m--;
odiv.removeChild(this); 
if(m<0)
{
oem.style.display="block";
};
};
};
}