import React, { createContext, useContext, useState } from "react";

// Create context
const DealsContext = createContext();

// Custom hook (cleaner usage)
export const useDeals = () => useContext(DealsContext);

// Provider component
export const DealsProvider = ({ children }) => {
  const [deals, setDeals] = useState([
    {
      image: "https://m.media-amazon.com/images/I/41Rql2Ck6EL.jpg",
      title: "Bluetooth speaker",
      description: "This is a limited-time deal.",
      highlights: ["Free Shipping", "24/7 Support"],
      price: "631",
      link: "https://amzn.to/40tGDnD",
    },
  ]);

  return (
    <DealsContext.Provider value={{ deals, setDeals }}>
      {children}
    </DealsContext.Provider>
  );
};