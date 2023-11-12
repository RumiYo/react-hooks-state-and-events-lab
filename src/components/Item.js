import React, { useState } from "react";

function Item({ name, category }) {

  const [className, setClassName] = useState("");
  const [buttonText, setButtonText] = useState("Add to Cart");

  function changeCartStatus(){
    console.log('clicked')
    if(className===""){
      setClassName("in-cart")
      setButtonText("Remove From Cart")
    }else{
      setClassName("")
      setButtonText("Add to Cart")
    }
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCartStatus}>{buttonText}</button>
    </li>
  );
}

export default Item;
