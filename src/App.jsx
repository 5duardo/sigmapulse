import {uploadFile} from './firebase/config'
import {useState} from 'react';

function App() {
  const [file, setFile] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await uploadFile(file);
    console.log(result)
  };


  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="file" 
      name="" 
      id="" 
      onChange={(e) => setFile(e.target.files[0])}
      ></input>
      <button>Subir</button>
      
    </form>
  );
}

export default App
