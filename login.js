// login.js

// Import hive-js library
const hive = require('hive-js');

// Function to handle login
async function login() {
    try {
        const username = document.querySelector('input[type="text"]').value;
        const privateKey = document.querySelector('input[type="password"]').value;

        // Authenticate user using provided username and private key
        const client = await authenticate(username, privateKey);

        // If authentication is successful, redirect user or show success message
        alert('Authentication successful:', client);
        // Redirect or show success message
    } catch (error) {
        alert('Authentication failed:', error);
        // Display error message to the user
    }
}

// Function to authenticate user using hive-js
async function authenticate(username, privateKey) {
    try {
        // Set up client with provided private key
        const client = new hive.Client({
            username,
            posting: privateKey // Use posting key for authentication
        });

        // Fetch user account information to verify authentication
        const account = await client.database.getAccounts([username]);
        if (account.length === 0) {
            throw new Error('Invalid username');
        }

        console.log('Login successful');
        return client;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}
