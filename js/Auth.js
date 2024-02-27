(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDaJiAp0HZoUhtKK1u7Ta6ONEV9AVMpXTo",
    authDomain: "test-c3df0.firebaseapp.com",
    projectId: "test-c3df0",
    storageBucket: "test-c3df0.appspot.com",
    messagingSenderId: "1006542096860",
    appId: "1:1006542096860:web:8846dc71615dd0a3e76719"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Reference to the Firebase authentication service
var auth = firebase.auth();

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    // Function to determine the redirect page based on user
function determineRedirectPage(user) {
    // Here you can implement your logic to determine which page to redirect the user to
    // For example, based on user roles or any other criteria
    // Return the URL of the page you want to redirect the user to

    // Example logic: if user's email is admin, redirect to admin page, else redirect to regular user page
    if (user.email === "a@gmail.com") {
        return "account.html";
    } 
    if (user.email === "b@gmail.com") {
        return "account.html";
    } 
    if (user.email === "eduardobarahonc@gmail.com") {
        return "account.html";
    } else {
        return "not_permx.html";
    }
}







// Add Login Event
btnLogin.addEventListener('click', e => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del botón (enviar formulario)
    
    const email = txtEmail.value;
    const password = txtPassword.value;

    const auth = firebase.auth();

    // Sign in with Firebase Auth
    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            Toastify({
                text: "¡Inicio de sesión exitoso!",
                duration: 3000,
                position: 'center',
                gravity: "bottom",
                backgroundColor: "linear-gradient(to right, #FFFFFF, #E0E0E0)",
                stopOnFocus: true,
                className: 'toastify-msg-success', // Agregamos una clase personalizada para estilizar la notificación de éxito
                close: true,
                style: {
                    color: 'black', // Cambiamos el color del texto a negro
                    fontSize: '20px', // Aumentamos el tamaño de fuente
                },
            }).showToast();

            setTimeout(() => {
                var user = firebase.auth().currentUser;
                if (user) {
                    // User is signed in, redirect to the appropriate page
                    window.location.href = determineRedirectPage(user); // Call a function to determine the redirect page
                } else {
                    // User is not signed in.
                    console.log("User not signed in.");
                }
            }, 3000); // Redireccionar después de 3 segundos
        })
        .catch(err => {
            Toastify({
                text: "Error: " + err.message,
                duration: 3000,
                position: 'center',
                gravity: "bottom",
                backgroundColor: "linear-gradient(to right, #FFFFFF, #E0E0E0)",
                stopOnFocus: true,
                className: 'toastify-msg-error', // Agregamos una clase personalizada para estilizar la notificación de error
                close: true,
                style: {
                    color: 'black', // Cambiamos el color del texto a negro
                    fontSize: '20px', // Aumentamos el tamaño de fuente
                },
            }).showToast();
        });
});
















    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message); 
        });

    });


}());
