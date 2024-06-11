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
    window.location.href = 'admineditbook.html';
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

//   員工列表
const employees = [
   { id: 'B01', name: 'Daniel', phone: '0909-551-223', address: '雲林縣虎尾鎮', email: 'abcd7777@gmail.com', salary: 2000 },
   { id: 'B02', name: 'Errol', phone: '0909-561-331', address: '台北市信義區', email: 'tty9985@gmail.com', salary: 2000 },
   { id: 'B03', name: 'Martin', phone: '0922-445-111', address: '台北市萬華區', email: 'ffff888@gmail.com', salary: 2000 },
   { id: 'B04', name: 'Candida', phone: '0988-774-441', address: '台中市大甲鎮', email: 'ddd2211@gmail.com', salary: 2000 },
   { id: 'B05', name: 'Cora', phone: '0964-225-663', address: '台中市清水鎮', email: 'gwg444@gmail.com', salary: 2000 },
];

const employeeList = document.getElementById('employeeList');
const editFormContainer = document.getElementById('editFormContainer');
const editForm = document.getElementById('editForm');
const editId = document.getElementById('editId');
const editName = document.getElementById('editName');
const editPhone = document.getElementById('editPhone');
const editAddress = document.getElementById('editAddress');
const editEmail = document.getElementById('editEmail');
const editSalary = document.getElementById('editSalary');

employees.forEach(employee => {
   const listItem = document.createElement('li');
   listItem.innerHTML = `
       <span class="employee-id">${employee.id}</span> - 
       <span class="employee-name">${employee.name}</span>
       <button class="employee-button" onclick="editEmployee('${employee.id}')">Edit</button>
   `;
   employeeList.appendChild(listItem);
});

function editEmployee(id) {
   const employee = employees.find(emp => emp.id === id);
   if (employee) {
       editId.value = employee.id;
       editName.value = employee.name;
       editPhone.value = employee.phone;
       editAddress.value = employee.address;
       editEmail.value = employee.email;
       editSalary.value = employee.salary;
       editFormContainer.style.display = 'block';
   }
}

function saveEmployee() {
   const id = editId.value;
   const employee = employees.find(emp => emp.id === id);
   if (employee) {
       employee.name = editName.value;
       employee.phone = editPhone.value;
       employee.address = editAddress.value;
       employee.email = editEmail.value;
       employee.salary = editSalary.value;
       alert('Employee information saved.');
       editFormContainer.style.display = 'none';
       renderEmployeeList();
   }
}

function renderEmployeeList() {
   employeeList.innerHTML = '';
   employees.forEach(employee => {
       const listItem = document.createElement('li');
       listItem.innerHTML = `
           <span class="employee-id">${employee.id}</span> - 
           <span class="employee-name">${employee.name}</span>
           <button class="employee-button" onclick="editEmployee('${employee.id}')">Edit</button>
       `;
       employeeList.appendChild(listItem);
   });
}