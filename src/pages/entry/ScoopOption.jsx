import { Col, Form } from 'react-bootstrap';

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <hr />
      <Form.Label htmlFor='countId'>{name}</Form.Label>
      <Form.Control type='number' id='countId' placeholder='0' max />

    </Col>
  );
}
