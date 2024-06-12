// scripts.js
document.getElementById('borrowerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const borrowerId = document.getElementById('borrowerId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    const borrower = {
        borrowerId: borrowerId,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    };

    fetch('http://localhost:8080/api/borrower', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrower)
    })
    .then(response => {
        if (response.status === 201) {
            document.getElementById('message').textContent = 'Borrower created successfully!';
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').textContent = 'Failed to create borrower.';
            document.getElementById('message').style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred.';
        document.getElementById('message').style.color = 'red';
    });
});
