import React from 'react'

const ScreenManager = ({ screenMap, defaultScreenKey }) => {
  const [screen, setScreen] = useScreen(defaultScreenKey, screenMap);

  return (
    <>
      {React.cloneElement(screen, { setScreen: setScreen })}
    </>  
  )
}

export default ScreenManager
