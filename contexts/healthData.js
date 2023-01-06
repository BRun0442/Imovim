import React, { createContext, useState } from "react";

export const HealthData = createContext({});

function HealthDataProvider({children})
{
  const [stepsQuantity, setStepsQuantity] = useState(0);
  const [availability, setAvailability] = useState('');

  return(
    <HealthData.Provider value={{stepsQuantity, setStepsQuantity, availability, setAvailability}}>
      {children}
    </HealthData.Provider>
  )
}

export default HealthDataProvider;