import React, { useEffect, useState } from 'react';
const { io } = require("socket.io-client");

function useRealTimeCryptoPrices(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_WBSOCKET_URL);

    socket.on('message', (data) => {
      const message = JSON.parse(data);
      setData(message);
    });

    socket.on('connect', () => console.log("ws opened"));

    socket.on('close', () => console.log("ws closed"));

    return () => {
      socket.close();
    };
  }, []);

  return {
    prices: data || {}
  };
}

export default useRealTimeCryptoPrices;
