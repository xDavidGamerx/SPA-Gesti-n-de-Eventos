const API_URL = 'http://localhost:3000';

export const homeView = async () => {
    const response = await fetch(`${API_URL}/events`);
    const events = await response.json();

    let eventsGrid = '';
    events.forEach(event => {
        eventsGrid += `
            <div class="featured-event">
                <h3>${event.name}</h3>
                <p><span class="event-date">${event.date}</span></p>
                <p class="event-location">${event.location}</p>
            </div>
        `;
    });

    return `
        <div class="home-container">
            <div class="hero-section">
                <div class="hero-content">
                    <h1>Organiza tus eventos<br>de manera inteligente</h1>
                    <p class="hero-subtitle">Una plataforma moderna para gestionar eventos<br>de manera eficiente y profesional</p>
                    <div class="auth-options">
                        <button class="auth-button" onclick="window.location.pathname = '/login'">Iniciar Sesión</button>
                        <button class="auth-button secondary" onclick="window.location.pathname = '/register'">Crear Cuenta</button>
                    </div>
                </div>
            </div>

            <div class="features-section">
                <div class="feature">
                    <div class="feature-icon" style="background: var(--primary-color);">
                        <span>📅</span>
                    </div>
                    <h3>Planificación Inteligente</h3>
                    <p>Organiza y gestiona tus eventos con facilidad</p>
                </div>
                <div class="feature">
                    <div class="feature-icon" style="background: var(--primary-color);">
                        <span>👥</span>
                    </div>
                    <h3>Gestión de Asistentes</h3>
                    <p>Controla y gestiona tus invitados</p>
                </div>
                <div class="feature">
                    <div class="feature-icon" style="background: var(--primary-color);">
                        <span>📊</span>
                    </div>
                    <h3>Estadísticas en Tiempo Real</h3>
                    <p>Monitorea el rendimiento de tus eventos</p>
                </div>
            </div>

            <div class="events-section">
                <h2>Eventos Destacados</h2>
                <div class="events-grid">
                    ${eventsGrid}
                </div>
            </div>

            <div class="cta-section">
                <div class="cta-content">
                    <h2>Comienza a gestionar tus eventos hoy</h2>
                    <p>Únete a miles de organizadores que confían en nuestra plataforma</p>
                    <button class="auth-button" onclick="window.location.pathname = '/register'">Comenzar Ahora</button>
                </div>
            </div>
        </div>
    `;
};
