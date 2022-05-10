const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the signup form
    const username = document.querySelector('#signupUsername').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
  
    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);