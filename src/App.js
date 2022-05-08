import React, { useState } from 'react';
import { OrderDetailsProvider } from './store/OrderDetails';
import { Button, Container, OverlayTrigger, Popover, InputGroup, FormControl, FormLabel, Form } from 'react-bootstrap';
import OrderEntry from './pages/entry/OrderEntry';
import Options from './pages/entry/Options';
import { OrderSummary } from './pages/summary/OrderSummary';
import { SummaryForm } from './pages/summary/SummaryForm';
import ScoopOption from './pages/entry/ScoopOption';
import ToppingOption from './pages/entry/ToppingOption';


function App() {

  return (
    <OrderDetailsProvider>
    <Container>
      <h1>Design your own Sundae</h1>
      <OrderEntry>
        <Options>
          <ScoopOption />
        </Options>
        <Options>
          <ToppingOption />
        </Options>
      </OrderEntry>
    </Container>
    </OrderDetailsProvider>
  );
}

export default App;
