import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">Welcome to My Store</h1>
      <p className="mb-4">Discover our curated collection of fashion must haves.</p>
      <Button as={Link} to="/products" variant="dark" size="lg">
        Browse Catalog
      </Button>
    </Container>
  );
}

export default Home;
