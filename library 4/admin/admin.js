function logout() {
    window.location.href = '../login/login.html';
 }

 function admineditmem() {
    window.location.href = 'admineditmem.html';
 }

 function admineditbook() {
    window.location.href = 'admineditbook.html';
 }

 function admineditstaff() {
    window.location.href = 'admineditstaff.html';
 }

 function adminviewborrow() {
    window.location.href = 'adminviewborrow.html';
 }

 function admininfo() {
   window.location.href = 'admininfo.html';
}

 function back() {
    window.location.href = 'admin.html';
 }

 function search() {
    const query = document.getElementById('search-input').value;
    if (query.trim() === '') {
        alert('請輸入搜尋關鍵字');
        return;
    }
    // 在這裡處理搜尋邏輯，例如發送請求到伺服器
    console.log(`${query}`);
    document.getElementById('search-results').innerText = `搜尋結果: ${query}`;
  }