import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from './AddProduct';
 import EditProduct from './EditProduct';

const ProductTable = ({ products, onDelete, onEdit, openAddModal }) => {

  return (
    <div>
        <button onClick={openAddModal} style={{float: "right", border: '1px solid #ddd', padding: '8px', width: "100px"}}>Add</button>
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>S.No</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Product Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.description}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.price}</td>
            <td>
              <button style={{ border: '1px solid #ddd', padding: '8px', borderCollapse: 'collapse', width: '100%' }} onClick={() => onEdit(product)}>Edit</button>
              <button style={{ border: '1px solid #ddd', padding: '8px', borderCollapse: 'collapse', width: '100%' }} onClick={() => onDelete(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log('Response data:', response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  
  const handleAddProduct = async (product) => {
    try {
      const response = await axios.post('http://localhost:3000/products', product);
      setProducts([...products, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };



   const openAddModal = () => {
     setIsAddModalOpen(true);
   };

   const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  
  // const handleEdit = (product) => {
  //    setSelectedProduct(product);
  //    setIsModalOpen(true);
  // };
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await axios.put(`http://localhost:3000/products/${updatedProduct.id}`, updatedProduct);
      // Assuming your backend returns the updated product after update
      const updatedProducts = products.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };


  return (
    <div>
      <ProductTable products={products} onDelete={handleDelete} onEdit={openEditModal} openAddModal={openAddModal} />
      <AddProduct isOpen={isAddModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
      {selectedProduct && (
      <EditProduct isOpen={isEditModalOpen} onClose={closeModal} product={selectedProduct} onUpdateProduct={handleUpdateProduct} />
    )}
    </div>
  );
};

export default ProductPage;
