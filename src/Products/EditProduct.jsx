import React, { useState } from 'react';

const EditProduct = ({ isOpen, onClose, product, onUpdateProduct }) => {
  const [formData, setFormData] = useState(product);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(formData);
    onClose();
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label>Description:</label>
              <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </div>
            <div>
              <label>Price:</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default EditProduct;
