import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';

const OrderDetailsCtx = createContext();

function useOrderDetailsCtx() {
  const context = useContext(OrderDetailsCtx);

  if (!context) {
    throw new Error(
      'useOrderDetailsCtx must be used within a OrderDetailsProvider'
    );
  }
  return context;
}

function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;

  }


}

function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });
  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  })

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
    const grandTotal = scoopsSubtotal + toppingsSubtotal;
    setTotals({
      scoops: scoopsSubtotal,
      toppings: toppingsSubtotal,
      grandTotal,
    })
  }, [optionCounts])

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);     
    }
    // getter: options count for scoops and toppings
    // setter: update options count
    return [{ ...optionCounts }, updateItemCount];
  }, [optionCounts]);

  return <OrderDetailsCtx.Provider value={value} {...props} />;
}
