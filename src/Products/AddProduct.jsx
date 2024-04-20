import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onAddProduct, onClose }) => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    let newData = { ...formData, [e.target.name]: e.target.value };
    console.log("new form data ==>", newData)
    setFormData(newData);
  };

  const handleSubmit = async (e) => {
    console.log("inside handle submit1..")
    e.preventDefault();
    console.log("inside handle submit2..")
    try {
      const response = await axios.post('http://localhost:3000/products', formData);
      onAddProduct(response.data);
      setFormData({ name: '', description: '', price: '' });
      console.log("Form submitted successfully")
      onClose();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };



  return (
    // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    // <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
    //     <button onClick={onClose} style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '20px', cursor: 'pointer', color: 'red', border: 'none', background: 'none', padding: '0' }}>X</button>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block' }}>
                    Name:
                    <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block' }}>
                    Description:
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block' }}>
                    Price:
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </label>
            </div>
            <div>
                <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
            </div>
        </form>
    // </div>
    // </div>
  );
};

const AddProduct = ({ isOpen, onClose, onAddProduct }) => {
    const handleModalClose = () => {
      onClose();
    };
  
    return (
      <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
          <button onClick={handleModalClose} style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '20px', cursor: 'pointer', background: "red", color: "white" }}>X</button>
          <ProductForm onAddProduct={onAddProduct} />
          {/* <AddProduct isOpen={isOpen} onClose={onClose} onAddProduct={AddProduct} /> */}
        </div>
      </div>
    );
  };
  
  export default AddProduct;

// export default ProductForm;

