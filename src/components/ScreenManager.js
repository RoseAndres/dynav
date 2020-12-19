import React from 'react'
import useScreen from "../hooks/useScreen";

const ScreenManager = ({ screenMap, initialScreenKey }) => {
  const [screen, setScreen] = useScreen(initialScreenKey, screenMap);

  return (
    <>
      {React.cloneElement(screen, { goToScreen: setScreen })}
    </>  
  )
}

export default ScreenManager
