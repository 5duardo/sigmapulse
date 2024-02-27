const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const port = 80;

app.use(cors()); // Habilitar CORS para todas las solicitudes

// Ruta para reiniciar el dispositivo
app.post('/reiniciar', (req, res) => {
  // Ejecuta el comando de reinicio
  exec('sudo reboot', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al reiniciar el dispositivo: ${error.message}`);
      res.status(500).send('Error al reiniciar el dispositivo');
      return;
    }
    if (stderr) {
      console.error(`Error al reiniciar el dispositivo: ${stderr}`);
      res.status(500).send('Error al reiniciar el dispositivo');
      return;
    }
    console.log(`El dispositivo se reinició correctamente: ${stdout}`);
    res.status(200).send('El dispositivo se reinició correctamente');
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});












async function handleReset() {
  const deviceId = '078a67ef037a1b7d001e5cfe16e8d459'; // ID del dispositivo Raspberry Pi
  const accessToken = 'lsjmR7JUBWITdosEfIE3GZ9t6Eevwck2'; // Reemplaza con tu token de acceso

  try {
    const response = await fetch(`http://078a67ef037a1b7d001e5cfe16e8d459.balena-devices.com:80/reiniciar`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.ok) {
      alert('El dispositivo se reinició correctamente.');
    } else {
      const errorMessage = await response.text();
      alert(`Error al reiniciar el dispositivo: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Error al reiniciar el dispositivo:', error);
    alert('Error al reiniciar el dispositivo. Consulta la consola para más detalles.');
  }

  document.getElementById('resetButton').addEventListener('click', handleReset);
}


