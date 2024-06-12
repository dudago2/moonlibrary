document.addEventListener('DOMContentLoaded', (event) => {
    getStaffId();
});

function back() {
    window.location.href = 'admin.html';
 }

 var getStaffEmail = localStorage.getItem("email");
 var getStaffId;
 console.log(getStaffEmail);

 function getStaffId(){
    fetch('http://localhost:8080/api/staff/email/'+getStaffEmail, {
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
        getStaffId = data.staffId;
        console.log(getStaffId);
        // document.getElementById("surname").value = data.name;
        // document.getElementById("phone").value = data.phoneNumber;
        // document.getElementById("email").value = data.email;
        // document.getElementById("password").value = data.password;
        view();

        
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
      
}
function view() {
    fetch('http://localhost:8080/api/staff/'+getStaffId, {
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
        getMemberId = data.borrowerId;
        console.log(getMemberId);
        document.getElementById("surname").value = data.name;
        document.getElementById("phone").value = data.phoneNumber;
        document.getElementById("email").value = data.email;
        document.getElementById("password").value = data.password;

        
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}


 function edit() {
    var read = document.getElementById("read");
    var edit = document.getElementById("edit");
    fetch('http://localhost:8080/api/staff/email/'+getStaffEmail, {
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
        document.getElementById("editSurname").value = data.name;
        document.getElementById("editPhone").value = data.phoneNumber;
        document.getElementById("editEmail").value = data.email;
        document.getElementById("editPassword").value = data.password;
        
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });

    read.style.display = "none";
    edit.style.display = "block";
    }

function cancel() {
    var read = document.getElementById("read");
    var edit = document.getElementById("edit");

    read.style.display = "block";
    edit.style.display = "none";
}

function commit() {
    var read = document.getElementById("read");
    var edit = document.getElementById("edit");
    var editName = document.getElementById("editSurname").value;
    var editPhone = document.getElementById("editPhone").value;
    var editEmail = document.getElementById("editEmail").value;
    var editPassword = document.getElementById("editPassword").value;

    fetch('http://localhost:8080/api/staff/s/' + getStaffId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: editName,
            phoneNumber: editPhone,
            email: editEmail,
            password: editPassword
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('failed');
        }
        return response.json();

    })
    .then(data => {
        // Handle the response data if needed
        console.log('Update successful', data);
        localStorage.setItem("email", editEmail);
        view();
        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });


    read.style.display = "block";
    edit.style.display = "none";
}