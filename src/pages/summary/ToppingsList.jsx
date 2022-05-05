import React from 'react';
import { Card, FormControl, InputGroup, Stack } from 'react-bootstrap';

const ToppingsList = () => {
  return (
    <div>
      <h3>Toppings</h3>
      <p>$1.50 each</p>
      <p>Toppings Total: $4.50</p>
      <Stack direction="horizontal" gap={3}>
        <Card style={{ width: '12rem', backgroundColor: 'grey' }}>
          <Card.Img variant="top" src="https://placekitten.com/220/300" />
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text>M&Ms</InputGroup.Text>
              <FormControl
                placeholder="0"
                aria-label="M&Ms"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem', backgroundColor: 'grey' }}>
          <Card.Img variant="top" src="https://placekitten.com/220/300" />
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text>Cherries</InputGroup.Text>
              <FormControl
                placeholder="0"
                aria-label="Cherries"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem', backgroundColor: 'grey' }}>
          <Card.Img variant="top" src="https://placekitten.com/220/300" />
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text>Hot Fudge</InputGroup.Text>
              <FormControl
                placeholder="0"
                aria-label="Hot Fudge"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
};

export default ToppingsList;