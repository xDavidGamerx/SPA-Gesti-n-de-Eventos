import { loginView } from '../views/login.js';
import { registerView } from '../views/register.js';
import { homeView } from '../views/home.js';
import { dashboardView } from '../views/dashboard.js';
import { createEventView } from '../views/create-event.js';
import { editEventView } from '../views/edit-event.js';

const routes = {
    '/': homeView,
    '/login': loginView,
    '/register': registerView,
    '/dashboard': dashboardView,
    '/dashboard/events/create': createEventView,
    '/dashboard/events/edit': editEventView,
    '/404': '<h1>Not Found</h1>'
};

import { handleLogin, handleRegister } from '../auth/index.js';

import { handleLogin, handleRegister } from '../auth/index.js';
import { handleCreateEvent, handleEditEvent, handleDeleteEvent } from '../events/index.js';

const router = async () => {
    const path = window.location.pathname;
    const user = JSON.parse(localStorage.getItem('user'));
    const protectedRoutes = ['/dashboard', '/dashboard/events/create', '/dashboard/events/edit'];

    if (protectedRoutes.includes(path) && !user) {
        window.location.pathname = '/login';
        return;
    }

    if ((path === '/login' || path === '/register') && user) {
        window.location.pathname = '/dashboard';
        return;
    }

    const view = routes[path] || routes['/404'];
    const app = document.getElementById('app');
    app.innerHTML = typeof view === 'function' ? await view() : view;

    if (path === '/login') {
        app.querySelector('#login-form').addEventListener('submit', handleLogin);
    } else if (path === '/register') {
        app.querySelector('#register-form').addEventListener('submit', handleRegister);
    } else if (path === '/dashboard/events/create') {
        app.querySelector('#create-event-form').addEventListener('submit', handleCreateEvent);
    } else if (path.startsWith('/dashboard/events/edit')) {
        app.querySelector('#edit-event-form').addEventListener('submit', handleEditEvent);
    } else if (path === '/dashboard') {
        const deleteButtons = app.querySelectorAll('.delete-event');
        deleteButtons.forEach(button => {
            button.addEventListener('click', handleDeleteEvent);
        });
    }
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});
