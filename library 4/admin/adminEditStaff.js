document.addEventListener('DOMContentLoaded', (event) => {
    getStaffNum();
});
var getId;
function getStaffNum(){
    fetch('http://localhost:8080/api/staff', {
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
       var getlen = data.length;
       console.log(getlen);
       data.forEach(data => {
        const listItem = document.createElement('li');
        getId = data.staffId;
        listItem.innerHTML = `
            <span class="employee-id">${data.staffId}</span> - 
            <span class="employee-name">${data.name}</span>
            <button class="employee-button" onclick="editEmployee('${data.staffId}')">編輯</button>
        `;
        employeeList.appendChild(listItem);
     });
 
   })
   .catch(error => {
       console.error('Error:', error);
       document.getElementById('error_message').style.display = 'block';
   });
 }
 
 const employeeList = document.getElementById('employeeList');
 const editFormContainer = document.getElementById('editFormContainer');
 const editForm = document.getElementById('editForm');
 const editId = document.getElementById('editId');
 const editName = document.getElementById('editName');
 const editPhone = document.getElementById('editPhone');
 const editAddress = document.getElementById('editAddress');
 const editEmail = document.getElementById('editEmail');
 const editSalary = document.getElementById('editSalary');
 
 
 
 function editEmployee(id) {
    fetch('http://localhost:8080/api/staff/'+id, {
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
       if (data) {
          editId.value = data.staffId;
          editName.value = data.name;
          editPhone.value = data.phoneNumber;
         //  editAddress.value = employee.address;
          editEmail.value = data.email;
          editSalary.value = data.salary;
          editFormContainer.style.display = 'block';
      }
 
   })
   .catch(error => {
       console.error('Error:', error);
       document.getElementById('error_message').style.display = 'block';
   });
    // const employee = employees.find(emp => emp.id === id);
    
 }
 
 function saveEmployee() {
    var getEditId = document.getElementById("editId").value;
    // const id = editId.value;
    var editName = document.getElementById("editName").value;
    var editPhone = document.getElementById("editPhone").value;
    var editEmail = document.getElementById("editEmail").value;
    var editSalary = document.getElementById("editSalary").value;
    // var editPassword = document.getElementById("editPassword").value;
    var data = { "name": editName,
        "phoneNumber": editPhone,
        "email": editEmail,
        "salary":editSalary     }
    console.log(data);
    

    fetch('http://localhost:8080/api/staff/' + getEditId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": editName,
            "phoneNumber": editPhone,
            "email": editEmail,
            "salary":editSalary 
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('failed');
        }else{
            alert("修改成功")
        }
        return response.json();
        
    })
    .then(data => {
        // Handle the response data if needed
        console.log('Update successful', data);
        localStorage.setItem("email", editEmail);
        editEmployee(getEditId);
        var getEditId = document.getElementById("editId").value;
        // const id = editId.value;
        // document.getElementById("editName").disabled = true;
        // document.getElementById("editPhone").disabled = true;
        // document.getElementById("editEmail").disabled = true;
        // document.getElementById("editSalary").disabled = true;

        
        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // if (employee) {
    //     employee.name = editName.value;
    //     employee.phone = editPhone.value;
    //     employee.address = editAddress.value;
    //     employee.email = editEmail.value;
    //     employee.salary = editSalary.value;
    //     alert('Employee information saved.');
    //     editFormContainer.style.display = 'none';
    //     renderEmployeeList();
    // }
 }
 
 function renderEmployeeList() {
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="employee-id">${employee.id}</span> - 
            <span class="employee-name">${employee.name}</span>
            <button class="employee-button" onclick="editEmployee('${employee.id}')">編輯</button>
        `;
        employeeList.appendChild(listItem);
    });
 
   
 }

 function putEditData(){
    
 }