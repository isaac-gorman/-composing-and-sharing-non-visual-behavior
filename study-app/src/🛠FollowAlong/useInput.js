import React from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChanges = (updatedValue) => {
    setValue(updatedValue);
  };
  return [value, setValue];
};

// Q: What is going on above in this custom hook?
// - In useInput (the Custom Hook) we built it to take in an initialValue, and to output three new values
// - I use the useState hook to take the initialValue value, which will return an array with my passed value variable and setValue function
