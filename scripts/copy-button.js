copyButton = document.getElementById('copy-button');
passwordInput = document.getElementById('password-input');

async function copyPassword() {
    try {
        let password = passwordInput.value;
        
        await navigator.clipboard.writeText(password);
        console.log('Password copied to clipboard');
    } catch (error) {
        console.error(`Failed to copy password: ${error.message}`);
    }
}

copyButton.addEventListener('click', copyPassword);