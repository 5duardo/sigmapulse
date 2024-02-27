// Initialize Firebase
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
  
  // Check if user is logged in
  auth.onAuthStateChanged(function(user) {
      if (user) {
          // User is signed in.
          displayUserProfile(user);
          document.getElementById('btnLogout').style.display = 'block'; // Mostrar botón de logout
      } else {
          // No user is signed in.
          console.log("No user is signed in.");
          document.getElementById('btnLogout').style.display = 'none'; // Ocultar botón de logout
      }
  });
  
  // Function to display user profile information
  function displayUserProfile(user) {
      var profileInfoDiv = document.getElementById("profileInfo");
      var profileHtml = `
          <img class="profilePhotoContainer" src="${user.photoURL}" alt="   ">    
          <p><b>Usuario:</b> ${user.displayName}</p>
          <p><b>Correo Electronico:</b> ${user.email}</p>
          <p><b>Identificador:</b> ${user.uid}</p>
          <!-- You can add more profile information here -->
          
          <link rel="stylesheet" href="src/assets/css/account.css">

      `;
      profileInfoDiv.innerHTML = profileHtml;
  }



  // Función para manejar la actualización del perfil del usuario
function handleProfileUpdate() {
    var newDisplayName = document.getElementById("newDisplayName").value;
    var newPhotoURL = document.getElementById("newPhotoURL").value;

    // Obtener el usuario actualmente autenticado
    var user = firebase.auth().currentUser;

    // Verificar la longitud de la URL de la foto de perfil
    if (newPhotoURL.length > 1000) {
        alert("IMAGEN MUY LARGA!!");
        return; // Salir de la función si la URL es demasiado larga
    }

    // Actualizar el perfil del usuario
    user.updateProfile({
        displayName: newDisplayName,
        photoURL: newPhotoURL
    }).then(function() {
        // Actualización del perfil exitosa
        console.log("Perfil actualizado correctamente.");
        window.location.href = "account.html";
    }).catch(function(error) {
        // Error al actualizar el perfil
        console.error("Error al actualizar el perfil:", error);
    });
}



// Actualizar el perfil del usuario
user.updateProfile({
    displayName: "Nuevo Nombre", // Nuevo nombre visible del usuario
    photoURL: "URL_de_la_nueva_imagen_de_perfil.jpg" // Nueva URL de la imagen de perfil
}).then(function() {
    // Actualización del perfil exitosa
    console.log("Perfil actualizado correctamente.");
}).catch(function(error) {
    // Error al actualizar el perfil
    console.error("Error al actualizar el perfil:", error);
});














  