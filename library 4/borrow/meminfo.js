 function back() {
    window.location.href = 'borrow.html';
 }

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