async function getPassword() {
    try {
        let response = await fetch('https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers');

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        let data = await response.json();
        console.log(`Password: ${data.password}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

getPassword();