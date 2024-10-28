function join(event) {
    event.preventDefault();
    const username = document.getElementById('join-username').value;
    const email = document.getElementById('join-email').value;
    const password = document.getElementById('join-password').value;
    
    // You would typically send this data to your server
    console.log(`Joining with Username: ${username}, Email: ${email}`);
    alert('Joined successfully!');
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // You would typically validate this data against your server
    console.log(`Logging in with Email: ${email}`);
    alert('Logged in successfully!');
}

function startChat() {
    const userVideo = document.getElementById('userVideo');
    const partnerVideo = document.getElementById('partnerVideo');

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            userVideo.srcObject = stream;
            // Here, you'd add your logic to connect to another user and get their video stream
            console.log("Chat started!");
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
        });
}
