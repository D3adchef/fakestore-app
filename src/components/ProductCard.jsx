import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // import the hook

function ProductCard({ id, title, price, image }) {
  const { addToCart } = useCart(); // access cart context

  const handleAdd = () => {
    const product = { id, title, price, image }; // basic product object
    addToCart(product);
  };

  return (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={image} style={{ height: '300px', objectFit: 'contain' }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button as={Link} to={`/products/${id}`} variant="secondary">
            View Details
          </Button>
          <Button variant="dark" onClick={handleAdd}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
