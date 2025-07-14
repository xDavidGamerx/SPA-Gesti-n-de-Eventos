const API_URL = 'http://localhost:3000';

export const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    fetch(`${API_URL}/users?email=${email}&password=${password}`)
        .then(response => response.json())
        .then(users => {
            if (users.length > 0) {
                localStorage.setItem('user', JSON.stringify(users[0]));
                window.location.pathname = '/dashboard';
            } else {
                alert('Invalid credentials');
            }
        });
};

export const handleRegister = (e) => {
    e.preventDefault();
    const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value
    };

    fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(() => {
        window.location.pathname = '/login';
    });
};
