import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"

  const [appClass, setAppClass] = useState("App light")
  const [appColor, setAppColor] = useState("Light Mode")

console.log(appClass);

  function changeAppClass(event){
    if(appClass==="App dark"){
      setAppClass("App light");
      setAppColor("Light Mode");
    }else{
      setAppClass("App dark");
      setAppColor("Dark Mode")
    }
  }; 
  


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeAppClass}>{appColor}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
