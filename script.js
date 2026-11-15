const passwordButton = document.getElementById('generate-button');
const passwordInput = document.getElementById('password-input');

passwordButton.addEventListener('click', async () => {
    const password = await getPassword();

    if (password) {
        passwordInput.value = password;
    }
});

async function getPassword() {
    try {
        let response = await fetch('https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers');

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        let data = await response.json();
        console.log(`Password: ${data.password}`);

        return data.password;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return error.message;
    }
}