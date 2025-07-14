const API_URL = 'http://localhost:3000';

export const editEventView = async () => {
    const eventId = new URLSearchParams(window.location.search).get('id');
    const response = await fetch(`${API_URL}/events/${eventId}`);
    const event = await response.json();

    return `
        <div class="container">
            <h2>Editar Evento</h2>
            <form id="edit-event-form">
                <input type="hidden" id="id" name="id" value="${event.id}">
                <div class="form-group">
                    <label for="name">Nombre del Evento:</label>
                    <input type="text" id="name" name="name" value="${event.name}" required>
                </div>
                <div class="form-group">
                    <label for="date">Fecha:</label>
                    <input type="date" id="date" name="date" value="${event.date}" required>
                </div>
                <div class="form-group">
                    <label for="description">Descripción:</label>
                    <textarea id="description" name="description" required>${event.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="capacity">Capacidad:</label>
                    <input type="number" id="capacity" name="capacity" value="${event.capacity}" required>
                </div>
                <button type="submit">Actualizar Evento</button>
            </form>
        </div>
    `;
};
