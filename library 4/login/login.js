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
    
    // 假設用戶名和密碼檢驗在後端進行
    if (username == "user" && password == "1234"){
        window.location.href = '../borrow/borrow.html';
    } else {
        document.getElementById('error_message').style.display = 'block';
    }
});

document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('admin_username').value;
    var password = document.getElementById('admin_password').value;
    
    // 假設用戶名和密碼檢驗在後端進行
    if (username == "staff" && password == "1234"){
        window.location.href = '../staff/staff.html';
    } else if (username == "admin" && password == "1234") {
        window.location.href = '../admin/admin.html';
    } else {
        document.getElementById('admin_error_message').style.display = 'block';
    }
});