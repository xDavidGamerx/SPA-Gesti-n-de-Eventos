const API_URL = 'http://localhost:3000';

export const dashboardView = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user.role === 'administrador') {
        const response = await fetch(`${API_URL}/events`);
        const events = await response.json();

        let eventsGrid = '';
        events.forEach(event => {
            eventsGrid += `
                <div class="event-card">
                    <div class="event-info">
                        <h3>${event.name}</h3>
                        <p>Date: ${event.date}</p>
                        <p>Location: ${event.location}</p>
                        <p>Capacity: ${event.capacity}</p>
                        <p>Attendees: ${event.attendees}</p>
                    </div>
                    <div class="event-actions">
                        <a href="/dashboard/events/edit?id=${event.id}" data-link>Editar</a>
                        <button class="delete-event" data-id="${event.id}">Eliminar</button>
                    </div>
                </div>
            `;
        });
        eventsTable += '</tbody></table>';

        return `
            <div class="container">
                <h2>Dashboard del Administrador</h2>
                <a href="/dashboard/events/create" data-link>Crear Evento</a>
                ${eventsTable}
            </div>
        `;
    } else {
        // Lógica para la vista del visitante
        return `
            <div class="container">
                <h2>Dashboard del Visitante</h2>
                <p>Mis Eventos Registrados:</p>
                <ul>
                    <li>No tienes eventos registrados.</li>
                </ul>
            </div>
        `;
    }
};
