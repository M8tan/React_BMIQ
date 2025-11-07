import { useState } from "react"
import Calculator from "./Calculator.jsx"
import BMIResult from "./BMIResult.jsx"
import Title from "./Title.jsx"
import "./App.css"


function App() {
  const [BMI, Set_BMI] = useState(null)
  const [Message, Set_Message] = useState("")
  const Calculate_BMI = (Weight, Height) => {
    if (!Weight || !Height){
      Set_BMI(null)
      Set_Message("Enter yout details please :)");
      return;
    }
  const MeterHeight = Height / 100;
  const BMIValue = (Weight / (MeterHeight * MeterHeight)).toFixed(1);
  Set_BMI(BMIValue);
  if (BMIValue < 18.5) Set_Message("Low")
  else if (BMIValue < 25) Set_Message("Fine")
  else if (BMIValue < 30) Set_Message("High")
  else Set_Message("Fatass")
  }

  
  
const Reset_BMI = () => {
  Set_BMI(null)
  Set_Message("")
}
    
  return(
    <>
    <Title></Title>
      <Calculator onCalculate={Calculate_BMI} onReset = {Reset_BMI}/>
      {BMI && <BMIResult BMI={BMI} Message={Message} />}
      
    </>
  )
}

export default App
