import './App.css';
import { useState } from "react";

function TextInput() {
  // Define a state variable 'inputValue' with an initial value of an empty string
  const [inputValue, setInputValue] = useState("");

  // Event handler to update 'inputValue' when the input field changes
  const handleChange = (e) => {
    setInputValue(e.target.value); // Update the 'inputValue' state
  };

  return (
    <div style={{ paddingTop: "3rem" }}>
      <h2>Text Input Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}


const NameDetaiils = (prompts) =>{
  return(
    <>
      <h1>Name: {prompts.name}</h1>
      <h2>Last Name: {prompts.lastname}</h2>
      <h2>Age: {prompts.age}</h2>
      <p1>Motto: Trying to be better</p1>
    </>
  )
}

const App=() => {
  const [counter,setCounter] = useState(0);
  return (

    <div className="App">
      <button onClick={()=> setCounter((prevCount)=> prevCount -1)}> -</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount +1)}>+</button>
      <NameDetaiils 
        name='zaid' 
        lastname ='shaikh' 
        age ={25} 
      />

<NameDetaiils 
        name='Regina' 
        lastname ='Philange' 
        age ={24} 
      />
    <TextInput />
    </div>
  );
}

export default App;
