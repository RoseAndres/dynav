import { useState, useEffect } from "react";

const useScreen = (initialScreenKey, screenMap) => {
  const [screenKey, setScreenKey] = useState(
    initialScreenKey ? initialScreenKey : Object.keys(screenMap)[0]
  );

  const [screenComponent, setScreenComponent] = useState(screenMap[screenKey]);

  useEffect(() => {
    setScreenComponent(screenMap[screenKey]);
  }, [screenKey, screenMap]);

  return [screenComponent, setScreenKey];
};

export default useScreen;
