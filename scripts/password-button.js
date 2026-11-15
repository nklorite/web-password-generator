import { getPassword } from './get-password.js';

const passwordButton = document.getElementById('generate-button');
const passwordInput = document.getElementById('password-input');

passwordButton.addEventListener('click', async () => {
    const password = await getPassword();

    if (password) {
        passwordInput.value = password;
    }
});