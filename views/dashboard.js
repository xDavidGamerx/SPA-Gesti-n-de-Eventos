const API_URL = 'http://localhost:3000';

export const dashboardView = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user.role === 'administrador') {
        const response = await fetch(`${API_URL}/events`);
        const events = await response.json();

        let eventsTable = `
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;
        events.forEach(event => {
            eventsTable += `
                <tr>
                    <td>${event.name}</td>
                    <td>${event.date}</td>
                    <td>
                        <a href="/dashboard/events/edit?id=${event.id}" data-link>Editar</a>
                        <button class="delete-event" data-id="${event.id}">Eliminar</button>
                    </td>
                </tr>
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
