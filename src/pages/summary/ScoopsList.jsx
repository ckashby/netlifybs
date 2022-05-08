import React from 'react';
import { Card, InputGroup, FormControl, Stack } from 'react-bootstrap';

const ScoopsList = () => {
  return (
    <div>
      <h3>Scoops</h3>
      <p>$2.00 each</p>
      <p>Scoops Total: $6.00</p>
      <Stack direction="horizontal" gap={3}>
        <div>
          <Card style={{ width: '12rem', backgroundColor: 'azure' }}>
            <Card.Img variant="top" src="https://placekitten.com/240/320" />
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Chocolate</InputGroup.Text>
                <FormControl
                  placeholder="0"
                  aria-label="Chocolate"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '12rem', backgroundColor: 'azure' }}>
            <Card.Img variant="top" src="https://placekitten.com/240/320" />
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Vanilla</InputGroup.Text>
                <FormControl
                  placeholder="0"
                  aria-label="Chocolate"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '12rem', backgroundColor: 'azure' }}>
            <Card.Img variant="top" src="https://placekitten.com/240/320" />
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Mint Chip</InputGroup.Text>
                <InputGroup.Number
                  placeholder="10"
                  aria-label="Chocolate"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
            </Card.Body>
          </Card>
        </div>
      </Stack>
    </div>
  );
};

export default ScoopsList;
