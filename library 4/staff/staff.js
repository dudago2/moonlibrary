 function logout() {
    window.location.href = '../login/login.html';
 }

 function selfinfo() {
   window.location.href = 'staffinfo.html';
 }
 function createBorrower() {
  window.location.href = '../borrow/newborrow.html';
 }

 function editmem() {
  window.location.href = '/admin/admineditmem.html';
 }

 function editbook() {
  window.location.href = '/admin/admineditbook.html';
 }

 function viewborrow() {
  window.location.href = '/admin/adminviewborrow.html';
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

function back() {
  window.location.href = 'staff.html';
}