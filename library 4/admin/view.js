function back() {
    window.location.href = 'admin.html';
 }

document.addEventListener("DOMContentLoaded", function() {
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

    function renderBorrowingList() {
        borrowings.forEach(borrowing => {
            const listItem = document.createElement('li');
            listItem.classList.add('borrowing-list-item');
            listItem.innerHTML = `
                <span class="borrowing-id">${borrowing.id}</span>
                <span class="member-id">${borrowing.memberId}</span>
                <span class="isbn">${borrowing.isbn}</span>
                <span class="borrow-time">${borrowing.borrowTime}</span>
                <span class="due-time">${borrowing.dueTime}</span>
                <span class="return-time">${borrowing.returnTime ? borrowing.returnTime : '未還書'}</span>
            `;
            borrowingList.appendChild(listItem);
        });
    }

    // Initial render
    renderBorrowingList();
});
