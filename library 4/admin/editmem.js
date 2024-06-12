function back() {
    var getAdmin = localStorage.getItem("admin");
    if (getAdmin == 1) {
        window.location.href = '/admin/admin.html';
    } else {
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
    const editMemberEmail = document.getElementById('editMemberEmail');

    function editMember(id) {
        fetch('http://localhost:8080/api/borrower/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
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
    }

    function saveMember() {
        var getId = editMemberId.value;
        var getName = editMemberName.value;
        var getmail = editMemberEmail.value;
        var getphone = editMemberPhone.value;

        fetch('http://localhost:8080/api/borrower/' + getId + '?name=' + getName + '&email=' + getmail + '&phoneNumber=' + getphone, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('failed');
            } else {
                alert("修改成功");
            }
            return response.json();
        })
        .then(data => {
            console.log('Update successful', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function deleteMember(id) {
        fetch('http://localhost:8080/api/borrower/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('failed to delete');
            } else {
                alert("刪除成功");
                getMemberAllData(); // Refresh the list after deletion
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    window.editMember = editMember;
    window.saveMember = saveMember;
    window.deleteMember = deleteMember;
});

function getMemberAllData() {
    fetch('http://localhost:8080/api/borrower', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        memberList.innerHTML = '';
        data.forEach(member => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="member-id">${member.borrowerId}</span> - 
                <span class="member-name">${member.name}</span>
                <button class="member-button" onclick="editMember('${member.borrowerId}')">編輯</button>
                <button class="member-button" onclick="deleteMember('${member.borrowerId}')">刪除</button>
            `;
            memberList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error_message').style.display = 'block';
    });
}
