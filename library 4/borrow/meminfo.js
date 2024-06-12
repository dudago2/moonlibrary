 function back() {
    window.location.href = 'borrow.html';
 }
 var getId
 document.addEventListener("DOMContentLoaded", function() {
   getUserId();
 });

 function record() {
   var record = document.getElementById("record");
   var collect = document.getElementById("collect");

   record.style.display = "block";  
   collect.style.display = "none";
}

function collect() {
   var record = document.getElementById("record");
   var collect = document.getElementById("collect");

   record.style.display = "none";  
   collect.style.display = "block";
}
function getAllUserBookBorrowDetail(getid){
   fetch('http://localhost:8080/api/borrow/unreturned/'+getId, {
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
      renderToTD(data);

  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('error_message').style.display = 'block';
  });
}

function getUserId(){
   var getmail=localStorage.getItem("email")
   fetch('http://localhost:8080/api/borrower/email/'+getmail, {
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
      getId = data.borrowerId;
      getAllUserBookBorrowDetail(getId)
      showNameAndId(data);

  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('error_message').style.display = 'block';
  });  
}

function renderToTD(data) {
   const bookList = document.getElementById('borrowRecord');
   data.forEach(book => {
      const tr = document.createElement('tr');
      tr.classList.add('book-item'); // Adding class to the row
      tr.innerHTML = `
            <td class="book-details">
                <p>ISBN: ${book.isbn}</p>
                <p>借閱日：${book.borrowTime}；歸還期限：${book.dueTime}</p>
            </td>`;
      bookList.appendChild(tr);
  });
}
function showNameAndId(data){
   console.log(data);
   document.getElementById("id").value = data.borrowerId;
   document.getElementById("username").value = data.name;

}