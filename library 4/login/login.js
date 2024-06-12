function show_login() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var adminlogin = document.getElementById("container3");

    login.style.display = "block";  
    signup.style.display = "none";  
    adminlogin.style.display = "none";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error_message").style.display = "none";
}
function getLocalS(){
    var getUserEmail= document.getElementById("username").value;
    localStorage.setItem("email", getUserEmail);
    // console.log(getUserName);

}

function show_signup() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var adminlogin = document.getElementById("container3");

    login.style.display = "none";   
    signup.style.display = "block"; 
    adminlogin.style.display = "none";

    document.getElementById("fullname").value = "";
    document.getElementById("username2").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("comfirm_password").value = "";
}

function show_admin_login() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var adminlogin = document.getElementById("container3");

    login.style.display = "none";   
    signup.style.display = "none";  
    adminlogin.style.display = "block";

    document.getElementById("admin_username").value = "";
    document.getElementById("admin_password").value = "";
    document.getElementById("admin_error_message").style.display = "none";
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('http://localhost:8080/api/borrower/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: username, password: password })
    })
    .then(response => {
        if (response.ok) {
            getLocalS();
            localStorage.setItem("admin", 1)
            window.location.href = '/borrow/borrow.html';
        } else {
            document.getElementById('error_message').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
});

document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('admin_username').value;
    var password = document.getElementById('admin_password').value;

    fetch('http://localhost:8080/api/staff/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid login');
            
        }
        return response.json();
    })
    .then(data => {
        if (data.admin) {
            localStorage.setItem("email", username);
            localStorage.setItem("admin", 1)
            window.location.href = '/admin/admin.html';
        } else {
            localStorage.setItem("email", username);
            localStorage.setItem("admin", 2)
            window.location.href = '/staff/staff.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('admin_error_message').style.display = 'block';
    });
});
