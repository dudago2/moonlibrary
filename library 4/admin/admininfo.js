function back() {
    window.location.href = 'admin.html';
 }

 function edit() {
    var read = document.getElementById("read");
    var edit = document.getElementById("edit");

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

    read.style.display = "block";
    edit.style.display = "none";
}