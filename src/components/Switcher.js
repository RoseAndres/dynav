import React from "react";
import useScreen from "../hooks/useScreen";
import PropTypes from "prop-types";

const Switcher = ({ screenMap, initialScreenKey }) => {
  const [screen, setScreen] = useScreen(initialScreenKey, screenMap);
  const switcher = {
    switchTo: setScreen,
  };

  return <>{React.cloneElement(screen, { switcher: switcher })}</>;
};

Switcher.propTypes = {
  screenMap: PropTypes.objectOf(PropTypes.element),
  initialScreenKey: PropTypes.oneOf(PropTypes.string, PropTypes.number),
};

export default Switcher;
