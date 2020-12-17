import { useState, useEffect } from 'react'

export default useScreen = (initalScreenName, screenMap) => {
  const [screenName, setScreenName] = useState(() => initalScreenName);
  const [screenComponent, setScreenComponent] = useState(() => screenMap[initalScreenName]);

  useEffect(() => {
    setScreenComponent(screenMap[screenName]);
  }, [screenName, screenMap]);

  return [screenComponent, setScreenName]
}
