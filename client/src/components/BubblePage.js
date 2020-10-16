import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

export const fetchColors = (setColors) => {
  axiosWithAuth().get('colors')
  .then(res => {
    console.log(res.data)
    setColors(res.data)
  })
  .catch(err => console.log(err))
}

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    fetchColors(setColorList)
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
