import React, { createContext, useContext, useState, useMemo } from 'react'

const OrderDetailsCtx = createContext();

function useOrderDetailsCtx() {
  const context = useContext(OrderDetailsCtx);

  if (!context) {
    throw new Error('useOrderDetailsCtx must be used within a OrderDetailsProvider');
  }

  return context;
}

function OrderDetailsProvider(props) {


  const value = useMemo(() => {
    // getter
    // setter
    return [];
    }, []);

  return <OrderDetailsCtx.Provider value={value}  {...props} />;
}