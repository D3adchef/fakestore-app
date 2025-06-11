import { useCart } from '../components/CartContext';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';

function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <div>
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row className="align-items-center">
                  <Col md={6}>
                    <strong>{item.title}</strong>
                    <div>${item.price.toFixed(2)} x {item.quantity}</div>
                  </Col>
                  <Col md={6} className="text-end">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="me-2"
                    >
                      −
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => addToCart(item)}
                      className="me-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      Remove All
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card className="mt-4 p-3">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <Button variant="outline-danger" onClick={clearCart} className="mt-2">
              🧹 Clear Cart
            </Button>
          </Card>
        </>
      )}
    </div>
  );
}

export default Cart;
