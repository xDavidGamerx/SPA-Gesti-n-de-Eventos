const API_URL = 'http://localhost:3000';

export const handleCreateEvent = (e) => {
    e.preventDefault();
    const event = {
        name: e.target.name.value,
        date: e.target.date.value,
        description: e.target.description.value,
        capacity: e.target.capacity.value,
        registeredUsers: []
    };

    fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    }).then(() => {
        window.location.pathname = '/dashboard';
    });
};

export const handleEditEvent = (e) => {
    e.preventDefault();
    const eventId = e.target.id.value;
    const event = {
        name: e.target.name.value,
        date: e.target.date.value,
        description: e.target.description.value,
        capacity: e.target.capacity.value
    };

    fetch(`${API_URL}/events/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    }).then(() => {
        window.location.pathname = '/dashboard';
    });
};

export const handleDeleteEvent = (e) => {
    const eventId = e.target.dataset.id;
    fetch(`${API_URL}/events/${eventId}`, {
        method: 'DELETE'
    }).then(() => {
        window.location.reload();
    });
};
