document.addEventListener('DOMContentLoaded', () => {
    const newUserBtn = document.getElementById('newUserBtn');
    const hideDisabledUserCheckbox = document.getElementById('hideDisabledUser');
    const userFormContainer = document.getElementById('userFormContainer');
    const userForm = document.getElementById('userForm');
    const userTableBody = document.querySelector('#userTable tbody');

    let users = [
        { id: 1, username: 'AdminUser', email: 'admin@piworks.net', enabled: true },
        { id: 2, username: 'TestUser', email: 'testuser@piworks.net', enabled: true }
    ];

    function renderUserTable() {
        userTableBody.innerHTML = '';
        users.filter(user => hideDisabledUserCheckbox.checked ? user.enabled : true).forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.enabled}</td>
            `;
            userTableBody.appendChild(row);
        });
    }

    newUserBtn.addEventListener('click', () => {
        userFormContainer.style.display = 'block';
        userForm.reset();
    });

    hideDisabledUserCheckbox.addEventListener('change', () => {
        renderUserTable();
    });

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            username: userForm.username.value,
            displayName: userForm.displayName.value,
            phone: userForm.phone.value,
            email: userForm.email.value,
            userRoles: userForm.userRoles.value,
            enabled: userForm.enabled.checked
        };
        users.push(newUser);
        renderUserTable();
        userFormContainer.style.display = 'none';
    });

    renderUserTable();
});