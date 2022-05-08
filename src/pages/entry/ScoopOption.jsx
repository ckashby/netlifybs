import { Col, Form } from 'react-bootstrap';

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <h3>{name}</h3>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Label htmlFor='countId'>Number of Scoops</Form.Label>
      <Form.Control type='number' id='countId' placeholder='0' />

    </Col>
  );
}
