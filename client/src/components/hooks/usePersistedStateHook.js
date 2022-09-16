import { useState, useEffect } from "react";

const usePersistedState = (key, value) => {
  const [persistentState, setPersistentState] = useState(() => {
    const persistedValue = JSON.parse(localStorage.getItem(key, value));
    const initialValue = value;

    if (persistedValue === null) {
      return initialValue;
    } else {
      return persistedValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, persistentState]);

  return [persistentState, setPersistentState];
};

export default usePersistedState;
