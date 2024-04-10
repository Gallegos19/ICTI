import { useState } from 'react';
import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2'


const Convertor = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.dat')) {
      setFile(selectedFile);
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, selecciona un archivo válido. Solo se permiten archivos .dat.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        width:'50em',
        
      })
      // Si deseas, puedes limpiar la selección del archivo
      event.target.value = null;
    }
  };

  const handleConvert = () => {
    if (!file) return; // Handle case where no file is selected

    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      const lines = data.split('\n');
      const dataArray = lines.map(line => line.split('\t')); // Assuming tab-separated data

      const worksheet = XLSX.utils.aoa_to_sheet(dataArray);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

      const arrayBuffer = XLSX.write(workbook, { bookType: 'xls', type: 'array' });
      FileSaver.saveAs(new Blob([arrayBuffer]), 'archivo.xls');
    };
    reader.readAsText(file);
  };

  return (
    <section className="hero">
      <div className="contenido_hero">
        <form>
          <div className="input-group">
            <input 
              type="file" 
              className="form-control" 
              id="file" 
              name="file" 
              aria-describedby="inputGroupFileAddon04" 
              aria-label="Upload" 
              onChange={handleFileChange} 
            />
            <button 
              className="btn btn-outline-secondary" 
              type="button" 
              id="inputGroupFileAddon04" 
              onClick={handleConvert}
            >
              Convertir
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Convertor;
