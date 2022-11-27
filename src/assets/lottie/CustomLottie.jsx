import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from './loader.json'
import coding from './coding.json'
import coding2 from './coding2.json'

function CustomLottie() {
  const [page_height, setHeight] = useState({ height: 0,width:0 })
  const { innerWidth: width, innerHeight: height } = window;

  useEffect(()=>{
    setHeight({
      height,
      width
    })
  },[height])

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility:[0, 1.5],
        type: "seek",
        frames: [0, 126],
      },
    ]
  };
  const interactivityCoding2 = {
    mode: "scroll",
    actions: [
      {
        visibility:[0, 1.0],
        type: "seek",
        frames: [0, 480],
      },
    ]
  };
  const style = {
    height: page_height?.height,
    width: 600
  };

  return (
    <>
      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>

      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>

      <p>The configuration can include a container field as shown in the next example. If a container is not provided the parent div will be taken as a container.</p>

      <h2>File Sharing</h2>

      <h1 style={{textAlign: 'center'}}>Sync Lottie with scroll</h1>
      <p style={{textAlign: 'center'}}>
        This section shows an example of a Lottie that is synced with the scroll bar. The scrolling effect is activated as soon as the animation enters the viewport. You may position the Lottie anywhere on your website and the Lottie will seek frame by frame as you scroll down the website.
      </p>

      <div style={{display:'flex', justifyContent: 'center'}}>
        <Lottie animationData={coding}
                // interactivity={interactivity}
                style={style} />
      </div>

      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>
      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>
      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>

      <div style={{display:'flex', justifyContent: 'center'}}>
        <Lottie animationData={coding}
                interactivity={interactivity}
                style={style} />
      </div>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>
      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>
      <p>The name of the player ie: 'firstLottie' in this example is the ID set to the lottie web component on the html page. Configuration will contain an actions object. This object takes an array named actions which consists of an array of objects. Multiple objects can be added into this array and therefore multiple actions such as "seek","play", "stop" and "loop", can be set.</p>

      <p>Each object has a start and end which is essentially a percentage for the height of the lottie container and is a value between 0 and 1. The visibility arrays first value is the start and the second value is the end. This refers to the percentage of the viewport.</p>

      <p>Ensure that the ending frame is the frame you want the interactivity to end at. This could be the last frame or a frame of your choosing. In this case it is set to 100.</p>

      <p>Configuration modes include "scroll" where the animation will be synced to the scrolling of the window and "cursor" where the scrolling of the animation will be synced to the cursor position within the container.</p>

      <div style={{display:'flex', justifyContent: 'center'}}>
        <Lottie animationData={coding2}
          // interactivity={interactivityCoding2}
                style={style} />
      </div>

    </>
  );
}

export default CustomLottie;