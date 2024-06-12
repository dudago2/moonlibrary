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
    getBorrowedDetailData();
    const borrowings = [
        { id: 'B01', memberId: 'M01', isbn: '978-3-16-148410-0', borrowTime: '2023-01-01 10:00', dueTime: '2023-01-15 10:00', returnTime: '2023-01-14 10:00' },
        { id: 'B02', memberId: 'M02', isbn: '978-1-23-456789-7', borrowTime: '2023-02-01 12:00', dueTime: '2023-02-15 12:00', returnTime: null },
        { id: 'B03', memberId: 'M03', isbn: '978-3-16-148410-0', borrowTime: '2023-03-01 14:00', dueTime: '2023-03-15 14:00', returnTime: '2023-03-10 14:00' },
        { id: 'B04', memberId: 'M04', isbn: '978-1-23-456789-7', borrowTime: '2023-04-01 16:00', dueTime: '2023-04-15 16:00', returnTime: '2023-04-13 16:00' },
        { id: 'B05', memberId: 'M05', isbn: '978-3-16-148410-0', borrowTime: '2023-05-01 18:00', dueTime: '2023-05-15 18:00', returnTime: null },
    ];

    const borrowingList = document.getElementById('borrowingList');
    if (!borrowingList) {
        console.error('borrowingList element not found');
        return;
    }

   

    // Initial render
    renderBorrowingList();
});
function getBorrowedDetailData(){
    fetch('http://localhost:8080/api/borrow', {
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
            listItem.classList.add('borrowing-list-item');
            listItem.innerHTML = `
                <span class="borrowing-id">${data.borrowId}</span>
                <span class="member-id">${data.borrowerId}</span>
                <span class="isbn">${data.isbn}</span>
                <span class="borrow-time">${data.borrowTime}</span>
                <span class="due-time">${data.dueTime}</span>
                <span class="return-time">${data.returnTime ? data.returnTime : '未還書'}</span>
            `;
            borrowingList.appendChild(listItem);
        });
  
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}