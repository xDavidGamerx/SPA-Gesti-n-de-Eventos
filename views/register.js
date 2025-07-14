export const registerView = `
    <div class="container">
        <h2>Registro</h2>
        <form id="register-form">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <label for="role">Rol:</label>
                <select id="role" name="role">
                    <option value="visitante">Visitante</option>
                    <option value="administrador">Administrador</option>
                </select>
            </div>
            <button type="submit">Registrarse</button>
        </form>
        <p>Ya tienes una cuenta? <a href="/login" data-link>Inicia Sesión</a></p>
    </div>
`;
