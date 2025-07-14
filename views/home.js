const API_URL = 'http://localhost:3000';

export const homeView = async () => {
    const response = await fetch(`${API_URL}/events`);
    const events = await response.json();

    let eventsList = '<ul>';
    events.forEach(event => {
        eventsList += `<li>${event.name} - ${event.date}</li>`;
    });
    eventsList += '</ul>';

    return `
        <div class="container">
            <h2>Eventos Disponibles</h2>
            ${eventsList}
        </div>
    `;
};
