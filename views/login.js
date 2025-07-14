export const loginView = `
    <div class="auth-container">
        <div class="auth-card">
            <div class="auth-header">
                <h2 style="color: var(--primary-color); text-align: center;">Login</h2>
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2em;">Welcome back! Please enter your details.</p>
            </div>
            <form id="login-form">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="auth-button">Log In</button>
            </form>
            <div class="auth-footer">
                <p style="text-align: center; margin-top: 2em;">
                    Don't have an account? <a href="/register" data-link style="color: var(--primary-color);">Register</a>
                </p>
            </div>
        </div>
    </div>
`;
