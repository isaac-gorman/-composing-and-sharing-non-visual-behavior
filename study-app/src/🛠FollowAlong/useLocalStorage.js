import React, { useState } from "react";

const useLocalStorage = (key, intitialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : intitialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setStoredValue];
};

// Q: What did I just do?
// - 1) I passed in a key-value (like: "input1", "input2") and an initialValue. These two parameters are then used immidetly iwthin the the useState hook call. Rather than passing in an initial value to the useState hook we I passed in an anonymous function to do a few things. Thus the initial slice of storedValue state is equal to the anonymous function within the useState hook
// - 2) Within the useState hooks anoymouse function 2 things are happening:
// - - 1: I used window.localStorage to check if there is a specific item retrived by the key in it. (running a check for the key)
