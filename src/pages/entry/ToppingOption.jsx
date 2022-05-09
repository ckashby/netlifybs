import { Col, Form } from 'react-bootstrap';

export default function ToppingOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <h3>{name}</h3>
      <img
        style={{ width: '50%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Check id='toppingId' type="checkbox" label="Add Topping?" />
      <Form.Control type='number' rows='3' id='countId' placeholder='0' />
    </Col>
  );
}
