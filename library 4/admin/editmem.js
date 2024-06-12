function back() {
    var getAdmin = localStorage.getItem("admin");
    if(getAdmin==1){
        window.location.href = '/admin/admin.html';
    }
    else{
        window.location.href = '/staff/staff.html';
    }
 }

document.addEventListener("DOMContentLoaded", function() {
    getMemberAllData()

    const memberList = document.getElementById('memberList');
    if (!memberList) {
        console.error('memberList element not found');
        return;
    }

    const editMemberFormContainer = document.getElementById('editMemberFormContainer');
    const editMemberForm = document.getElementById('editMemberForm');
    const editMemberId = document.getElementById('editMemberId');
    const editMemberName = document.getElementById('editMemberName');
    const editMemberPhone = document.getElementById('editMemberPhone');
    const editMemberPassword = document.getElementById('editMemberPassword');
    const editMemberEmail = document.getElementById('editMemberEmail');
    const editMemberAvailable = document.getElementById('editMemberAvailable');

    function editMember(id) {
        fetch('http://localhost:8080/api/borrower/'+id, {
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
            editMemberId.value = data.borrowerId;
            editMemberName.value = data.name;
            editMemberPhone.value = data.phoneNumber;
            editMemberEmail.value = data.email;
            editMemberFormContainer.style.display = 'block';
        }
      
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('error_message').style.display = 'block';
        });
         // const employee = employees.find(emp => emp.id === id);
      
        // const member = members.find(m => m.id === id);
        // if (member) {
        //     editMemberId.value = member.id;
        //     editMemberName.value = member.name;
        //     editMemberPhone.value = member.phone;
        //     editMemberPassword.value = member.password;
        //     editMemberEmail.value = member.email;
        //     editMemberAvailable.checked = member.available;
        //     editMemberFormContainer.style.display = 'block';
        // }
    }

    function saveMember() {
        var getId = editMemberId.value;
        var getName = editMemberName.value;
        var getmail = editMemberEmail.value;
        var getphone = editMemberPhone.value;
       

        fetch('http://localhost:8080/api/borrower/'+getId+'?name='+getName+'&email='+getmail+'&phoneNumber='+getphone, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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
            // localStorage.setItem("email", editEmail);
            
    
            
            
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
        
        // const id = editMemberId.value;
        // const member = members.find(m => m.id === id);
        // if (member) {
        //     member.name = editMemberName.value;
        //     member.phone = editMemberPhone.value;
        //     member.password = editMemberPassword.value;
        //     member.email = editMemberEmail.value;
        //     member.available = editMemberAvailable.checked;
        //     alert('Member information saved.');
        //     editMemberFormContainer.style.display = 'none';
        //     renderMemberList();
        // }
    }

    // Expose functions to global scope
    window.editMember = editMember;
    window.saveMember = saveMember;

    // Initial render
    
});

function getMemberAllData(){
    fetch('http://localhost:8080/api/borrower', {
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
        memberList.innerHTML = '';
        data.forEach(data => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="member-id">${data.borrowerId}</span> - 
                <span class="member-name">${data.name}</span>
                <button class="member-button" onclick="editMember('${data.borrowerId}')">編輯</button>
            `;
            memberList.appendChild(listItem);
        });
  
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}