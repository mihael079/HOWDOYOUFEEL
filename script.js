// Import necessary Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmyfAnx3yz2IqGS1HEJRjL8FQgMX1kQ4Q",
    authDomain: "how-do-you-feel-dd9e0.firebaseapp.com",
    databaseURL: "https://how-do-you-feel-dd9e0-default-rtdb.firebaseio.com",
    projectId: "how-do-you-feel-dd9e0",
    storageBucket: "how-do-you-feel-dd9e0.appspot.com",
    messagingSenderId: "978911765301",
    appId: "1:978911765301:web:6b2729b5190b2eecbaa27c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to handle form submission
async function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const username = document.getElementById('username').value;
    const date = document.getElementById('date').value;
    const thoughts = document.getElementById('thoughts').value;
    const emotion = document.getElementById('emotion').value;

    // Reference to Firestore collection
    const submissionsCollection = collection(db, 'submissions');

    // Create a new document in the 'submissions' collection
    try {
        await addDoc(submissionsCollection, {
            username,
            date,
            thoughts,
            emotion
        });
        alert('Form submitted successfully!');
    } catch (error) {
        alert('Error submitting form: ' + error.message);
    }
}

// Function to handle emoji selection
function selectEmoji(emotion) {
    // Update the emotion input field with the selected emoji
    document.getElementById('emotion').value = emotion;
}
