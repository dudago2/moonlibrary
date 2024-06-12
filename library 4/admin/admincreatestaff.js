const form = document.getElementById('staffForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        staffId: document.getElementById('staffId').value,
        name: document.getElementById('name').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        email: document.getElementById('email').value,
        salary: document.getElementById('salary').value,
        available: document.getElementById('available').checked,
        admin: document.getElementById('admin').checked,
        password: document.getElementById('password').value
    };

    fetch('http://localhost:8080/api/staff', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Staff created successfully!');
            form.reset();
        } else {
            alert('Failed to create staff.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while creating staff.');
    });
});