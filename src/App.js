import React from 'react';
import {
  Button,
  Container,
  Nav,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { OrderSummary } from './pages/summary/OrderSummary';
import { SummaryForm } from './pages/summary/SummaryForm';

function App() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

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

      <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
        <Button variant="success">Hover to see Popover</Button>
      </OverlayTrigger>

    <OrderSummary />
      
    </Container>
  );
}

export default App;
