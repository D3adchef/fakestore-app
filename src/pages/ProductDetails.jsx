import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../components/CartContext';
import { Button, Card, Spinner, Alert } from 'react-bootstrap';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch product details.');
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        alert('Product deleted successfully (mock).');
        navigate('/products');
      })
      .catch(err => {
        console.error(err);
        alert('Failed to delete product.');
      });
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return null;

  return (
    <Card>
      <Card.Img variant="top" src={product.image} style={{ maxWidth: '400px', margin: 'auto', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="dark" onClick={() => addToCart(product)}>Add to Cart</Button>
          <Button variant="warning" onClick={() => navigate(`/edit-product/${id}`)}>Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
          <Button variant="secondary" onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;

