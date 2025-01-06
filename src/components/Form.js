import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";

function Producto() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    id: "",
    nombre: "",
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    image7: null,


  });
  const [isEditing, setIsEditing] = useState(false);
  

  const [globalFilter, setGlobalFilter] = useState(null);
  //const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/data",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("firebaseToken")}`,
        },
      }
    );
    setUsers(response.data);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({ ...form, [name]: files[0] }); // Asignar la imagen seleccionada al campo correspondiente
  };
  

  const saveUser = async () => {
    const formData = new FormData();

  // Agregar campos básicos
    formData.append("id", form.id);
    formData.append("name", form.name);
    // Agregar imágenes dinámicamente
    for (const key of Object.keys(form)) {
      if (key.startsWith("image") && form[key]) {
        formData.append(key, form[key]);
      }
    }
    
    try {
    if (isEditing) {
      await axios.put(
        `http://localhost:3000/api/data/${form.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("firebaseToken")}`,
          },
        } 
      );
    } else {
      await axios.post("http://localhost:3000/api/data", formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("firebaseToken")}`,
          },
        });
    }

    fetchUsers();
    setVisible(false);
    resetForm();
    setIsEditing(false);
 }
 catch (error) {
    console.error("Error al guardar el producto:", error);
  }
};

// Método para limpiar el formulario
const resetForm = () => {
    setForm({
      id: "",
      name: "",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      image7: null,
    });
  };

  const editUser = (user) => {
    setForm({
      id: user.id,
      name: user.name,
      image1: user.image1,
      image2: user.image2,
      image3: user.image3,
      image4: user.image4,
      image5: user.image5,
      image6: user.image6,
      image7: user.image7,
      
    });
    setVisible(true);
    setIsEditing(true);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/api/data/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("firebaseToken")}`,
        },
      });
    fetchUsers();
  };
  
  ////
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Data</h4>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </IconField>
    </div>
  );

  

  return (
    <div className="container App">
      <h1 className='text-center'>Data Form</h1>
      <Button
        label="Add Data"
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
      />

      <Dialog
        header="Form"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <div className="field">
          <label htmlFor="name" className="label font-bold">
            Name
          </label>
          <InputText
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
            autoFocus
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image1">Image1</label>
          <InputText
            type="file"
            id="image1"
            name="image1"
            onChange={handleFileChange}
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image2">Image2</label>
          <InputText
            type="file"
            id="image2"
            name="image2"
            onChange={handleFileChange}
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image3">Image3</label>
          <InputText
            type="file"
            id="image3"
            name="image3"
            onChange={handleFileChange}
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image4">Image4</label>
          <InputText
            type="file"
            id="image4"
            name="image4"
            onChange={handleFileChange}
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image5">Image5</label>
          <InputText
            type="file"
            id="image5"
            name="image5"
            onChange={handleFileChange}
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image6">Image</label>
          <InputText
            type="file"
            id="image6"
            name="image6"
            onChange={handleFileChange}
          />
        </div>
        <div className="p-field">
          <label className="label" htmlFor="image7">Image7</label>
          <InputText
            type="file"
            id="image7"
            name="image7"
            onChange={handleFileChange}
          />
        </div>
        <Button label="Save" icon="pi pi-check" onClick={saveUser} />
      </Dialog>

      <DataTable value={users} selectionMode="single" globalFilter={globalFilter}
          header={header} >
        <Column field="id" header="Id" />
        <Column field="name" header="Name" />
        <Column
          field="image1"
          header="Image1"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image1}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        <Column
          field="image2"
          header="Image2"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image2}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        <Column
          field="image3"
          header="Image3"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image3}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        <Column
          field="image4"
          header="Image4"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image4}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        <Column
          field="image5"
          header="Image5"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image5}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        <Column
          field="image6"
          header="Image6"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image6}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        <Column
          field="image7"
          header="Image7"
          body={(data) => (
            <img
              src={`http://localhost:3000/uploads/${data.image7}`}
              //src={fetchImage(data.imagen)}
              alt={data.name}
              width="50"
            />
          )}
        />
        
        <Column
        header="Actions"
          body={(rowData) => (
            <React.Fragment>
              <Button
                icon="pi pi-pencil"
                className="p-button-rounded p-button-success mr-2"
                onClick={() => editUser(rowData)}
              />
              <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-danger"
                onClick={() => deleteUser(rowData.id)}
              />
            </React.Fragment>
          )}
        />
      </DataTable>
    </div>
  );
}

export default Producto;