const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const dashboard = document.getElementById('dashboard');
const groupsBtn = document.getElementById('groups-btn');
const agentBtn = document.getElementById('agent-btn');
const secretaryBtn = document.getElementById('secretary-btn');
const operationsBtn = document.getElementById('operations-btn');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    if (password === 'your_password') {
        dashboard.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        alert('الباسوورد خطأ');
    }
});

groupsBtn.addEventListener('click', () => {
    // todo: implement groups page
});

agentBtn.addEventListener('click', () => {
    // todo: implement agent page
});

secretaryBtn.addEventListener('click', () => {
    // todo: implement secretary page
});

operationsBtn.addEventListener('click', () => {
    // todo: implement operations page
});