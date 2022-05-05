import React from 'react';
import { ScoopsList } from './ScoopsList';
import { ToppingsList } from './ToppingsList';

export const OrderSummary = () => {
  return (
    <>
      <h2>Design Your Sundae!</h2>
      <ScoopsList />
      <hr />
      <ToppingsList />
    </>
  );
};
