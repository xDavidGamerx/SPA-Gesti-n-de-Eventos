# SPA Gestión de Eventos

Este es un proyecto de Single Page Application (SPA) para la gestión de eventos, construido con JavaScript puro, Vite y `json-server`.

## Instrucciones de Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/xDavidGamerx/SPA-Gesti-n-de-Eventos.git
    cd SPA-Gesti-n-de-Eventos
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia `json-server`:**
    En una terminal, ejecuta el siguiente comando para iniciar el servidor de la API simulada:
    ```bash
    npm run serve
    ```
    Esto iniciará `json-server` en `http://localhost:3000`.

4.  **Inicia el servidor de desarrollo de Vite:**
    En otra terminal, ejecuta:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique).

## Flujo de Usuario

### Roles

*   **Administrador:** Puede crear, leer, actualizar y eliminar eventos.
*   **Visitante:** Puede ver los eventos disponibles y registrarse en ellos.

### Autenticación

1.  **Registro:** Los nuevos usuarios pueden registrarse con un nombre, email, contraseña y rol (administrador o visitante).
2.  **Inicio de Sesión:** Los usuarios registrados pueden iniciar sesión. La sesión se persiste en `localStorage`.
3.  **Rutas Protegidas:** El acceso al dashboard y a las páginas de gestión de eventos está protegido. Los usuarios no autenticados son redirigidos a la página de inicio de sesión.

## Decisiones de Diseño

*   **Sin Frameworks:** La aplicación se construyó utilizando únicamente JavaScript nativo y el DOM para la manipulación de la interfaz, como se requería. Esto demuestra un entendimiento profundo de los fundamentos de la web.
*   **Enrutador Simple:** Se implementó un enrutador del lado del cliente para manejar la navegación en la SPA sin recargas de página.
*   **`json-server`:** Se utiliza para simular una API RESTful, lo que permite un desarrollo rápido y desacoplado del backend.
*   **Modularidad:** El código está organizado en módulos (auth, events, router, views) para mejorar la mantenibilidad y la legibilidad.
*   **Persistencia en `localStorage`:** La sesión del usuario se almacena en `localStorage` para mantener al usuario autenticado entre recargas de la página.
*   **Vite:** Se eligió Vite por su rápido entorno de desarrollo y su configuración sencilla.
