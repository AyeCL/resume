import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import logo from './logo.svg';
import { Alert } from 'bootstrap';
import { Container, Button, Col, Navbar } from 'react-bootstrap';
import NavigationMenu from './NavigationMenu';

function App() {
  return (
    <div>
      <NavigationMenu />
    </div>
  );
}

export default App;
