export const createEventView = `
    <div class="container">
        <h2>Crear Evento</h2>
        <form id="create-event-form">
            <div class="form-group">
                <label for="name">Nombre del Evento:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="date">Fecha:</label>
                <input type="date" id="date" name="date" required>
            </div>
            <div class="form-group">
                <label for="description">Descripción:</label>
                <textarea id="description" name="description" required></textarea>
            </div>
            <div class="form-group">
                <label for="capacity">Capacidad:</label>
                <input type="number" id="capacity" name="capacity" required>
            </div>
            <button type="submit">Crear Evento</button>
        </form>
    </div>
`;
