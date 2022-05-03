import React from 'react';
import { Carousel, Container, Nav } from 'react-bootstrap';
import { SummaryForm } from './pages/summary/SummaryForm';

function App() {

  return (
    <Container>
      <Nav
        activeKey="/"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <h5>Please join our mailing list</h5>
      <SummaryForm />
      
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/600/420"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Kitten</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/720/540"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second Kitten</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placekitten.com/640/480"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third Kitten</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default App;
