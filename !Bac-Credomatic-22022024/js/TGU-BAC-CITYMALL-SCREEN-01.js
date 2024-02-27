const express = require('express');
const app = express();
const { exec } = require('child_process');

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

const port = 80; // Puerto en el que escucha el servidor

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});









/*lsjmR7JUBWITdosEfIE3GZ9t6Eevwck2 --Token API*/




// Obteniendo las métricas del dispositivo desde la API de Balena
fetch('https://api.balena-cloud.com/v5/device', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAyODY0LCJhY3RvciI6MTY4MTUyMzMsImp3dF9zZWNyZXQiOiJKVU5NTVFVWEpOTFFMRDY0S1lKSkpZVlRQMkRLTENLTyIsInVzZXJuYW1lIjoic2lnbWFwdWxzZXRlY2giLCJlbWFpbCI6InNpZ21hcHVsc2V0ZWNoQGdtYWlsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIzLTEyLTE5VDE4OjIwOjA0LjIxNFoiLCJmaXJzdF9uYW1lIjoiTmlja29sYXMiLCJsYXN0X25hbWUiOiJDYXNhbSIsImFjY291bnRfdHlwZSI6InByb2Zlc3Npb25hbCIsImhhc19kaXNhYmxlZF9uZXdzbGV0dGVyIjp0cnVlLCJzb2NpYWxfc2VydmljZV9hY2NvdW50IjpbXSwiY29tcGFueSI6IlNpZ21hUHVsc2UiLCJoYXNQYXNzd29yZFNldCI6dHJ1ZSwicHVibGljX2tleSI6dHJ1ZSwiZmVhdHVyZXMiOltdLCJpbnRlcmNvbVVzZXJOYW1lIjoic2lnbWFwdWxzZXRlY2giLCJpbnRlcmNvbVVzZXJIYXNoIjoiMTZjY2NhZDhjOGUzYTYzNzY3ZTZjNjg0ZTIzOTk3N2M3NGYzNTFiZGE0MmYyOGZmOWVjZTM2OGQwZmIzYjNjYiIsInBlcm1pc3Npb25zIjpbXSwiYXV0aFRpbWUiOjE3MDg0ODU1ODM2MTEsImlzX3ZlcmlmaWVkIjp0cnVlLCJtdXN0X2JlX3ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MDg2Njg4NDksImV4cCI6MTcwOTI3MzY0OX0.Ct1e_yebUFN8qeHoWtFfW4bDdk3SaEafntNEbzMQCygeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAyODY0LCJhY3RvciI6MTY4MTUyMzMsImp3dF9zZWNyZXQiOiJKVU5NTVFVWEpOTFFMRDY0S1lKSkpZVlRQMkRLTENLTyIsInVzZXJuYW1lIjoic2lnbWFwdWxzZXRlY2giLCJlbWFpbCI6InNpZ21hcHVsc2V0ZWNoQGdtYWlsLmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIzLTEyLTE5VDE4OjIwOjA0LjIxNFoiLCJmaXJzdF9uYW1lIjoiTmlja29sYXMiLCJsYXN0X25hbWUiOiJDYXNhbSIsImFjY291bnRfdHlwZSI6InByb2Zlc3Npb25hbCIsImhhc19kaXNhYmxlZF9uZXdzbGV0dGVyIjp0cnVlLCJzb2NpYWxfc2VydmljZV9hY2NvdW50IjpbXSwiY29tcGFueSI6IlNpZ21hUHVsc2UiLCJoYXNQYXNzd29yZFNldCI6dHJ1ZSwicHVibGljX2tleSI6dHJ1ZSwiZmVhdHVyZXMiOltdLCJpbnRlcmNvbVVzZXJOYW1lIjoic2lnbWFwdWxzZXRlY2giLCJpbnRlcmNvbVVzZXJIYXNoIjoiMTZjY2NhZDhjOGUzYTYzNzY3ZTZjNjg0ZTIzOTk3N2M3NGYzNTFiZGE0MmYyOGZmOWVjZTM2OGQwZmIzYjNjYiIsInBlcm1pc3Npb25zIjpbXSwiYXV0aFRpbWUiOjE3MDg0ODU1ODM2MTEsImlzX3ZlcmlmaWVkIjp0cnVlLCJtdXN0X2JlX3ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MDg2Njg4NDksImV4cCI6MTcwOTI3MzY0OX0.Ct1e_yebUFN8qeHoWtFfW4bDdk3SaEafntNEbzMQCyg' // Reemplaza YOUR_API_KEY con tu clave API de Balena
    }
})
.then(response => response.json())
.then(data => {
    // Procesar la respuesta y mostrar las métricas en la página
    const metricsDiv = document.getElementById('metrics');
    metricsDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
})
.catch(error => {
    console.error('Error al obtener métricas del dispositivo:', error);
    const metricsDiv = document.getElementById('metrics');
    metricsDiv.innerHTML = '<p>Error al obtener métricas del dispositivo. Por favor, inténtalo de nuevo más tarde.</p>';
});

