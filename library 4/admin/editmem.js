function back() {
    window.location.href = 'admin.html';
 }

document.addEventListener("DOMContentLoaded", function() {
    const members = [
        { id: 'B88888', name: '劉帥哥', phone: '0909-551-223', password: 'password1', email: 'abcd7777@gmail.com', available: true },
        { id: 'B948794287', name: '陳邵旻', phone: '0909-561-331', password: 'password2', email: 'tty9985@gmail.com', available: false },
        { id: 'B354971623', name: 'Hamilton', phone: '0922-445-111', password: 'password3', email: 'ffff888@gmail.com', available: true },
    ];

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

    function renderMemberList() {
        memberList.innerHTML = '';
        members.forEach(member => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="member-id">${member.id}</span> - 
                <span class="member-name">${member.name}</span>
                <button class="member-button" onclick="editMember('${member.id}')">編輯</button>
            `;
            memberList.appendChild(listItem);
        });
    }

    function editMember(id) {
        const member = members.find(m => m.id === id);
        if (member) {
            editMemberId.value = member.id;
            editMemberName.value = member.name;
            editMemberPhone.value = member.phone;
            editMemberPassword.value = member.password;
            editMemberEmail.value = member.email;
            editMemberAvailable.checked = member.available;
            editMemberFormContainer.style.display = 'block';
        }
    }

    function saveMember() {
        const id = editMemberId.value;
        const member = members.find(m => m.id === id);
        if (member) {
            member.name = editMemberName.value;
            member.phone = editMemberPhone.value;
            member.password = editMemberPassword.value;
            member.email = editMemberEmail.value;
            member.available = editMemberAvailable.checked;
            alert('Member information saved.');
            editMemberFormContainer.style.display = 'none';
            renderMemberList();
        }
    }

    // Expose functions to global scope
    window.editMember = editMember;
    window.saveMember = saveMember;

    // Initial render
    renderMemberList();
});