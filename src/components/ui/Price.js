import React from 'react';
import { formatBalance } from "@utils/formatter";
import usePreferences from "@lib/usePreferences";

function Price({ amount = 0, hidePrefix = false }) {
  const { preferences: { privateMode } } = usePreferences();

  const number = hidePrefix ? formatBalance(amount) : formatBalance(amount, "currency", "USD");
  return (
    <span className={privateMode ? "blurry-text": ""}>
       {privateMode ? "******" : number}
    </span>
  );
}

export default Price;
