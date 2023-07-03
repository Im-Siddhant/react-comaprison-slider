import React, { useCallback, useState } from "react";
import ReactPlayer from "react-player";
/**
 * @see https://github.com/nerdyman/react-compare-slider
 */

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";

/** With Customised `handle`. */
export const CustomHandle = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );
  const [button_play, setButton_play] = useState(false);

  const handleClick = () => {
    setButton_play(!button_play);
  };

  return (
    <div>
      <button onClick={handleClick}>Empezar/pausar</button>
      <ReactCompareSlider
        {...props}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              color: "#333"
            }}
          />
        }
        itemOne={
          <ReactPlayer
            url="https://filesamples.com/samples/video/mp4/sample_960x540.mp4"
            className="react-player"
            playing={button_play}
            controls={false}
            width="100%"
            height="100%"
          />
        }
        itemTwo={
          <ReactPlayer
            url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            className="react-player"
            playing={button_play}
            controls={false}
            width="100%"
            height="100%"
          />
        }
        onPositionChange={handlePositionChange}
        style={{
          display: "flex",
          width: "100%",
          height: "90vh",
          ...style
        }}
      />
    </div>
  );
};

export const App = () => (
  <div>
    <CustomHandle position={25} />
  </div>
);
