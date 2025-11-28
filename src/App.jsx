import { useState } from "react"
import Calculator from "./Calculator.jsx"
import BMIResult from "./BMIResult.jsx"
import Title from "./Title.jsx"
import "./App.css"

//צריך להוסיף הערות - מה לעשות עם כל ציון וכו
function App() {
  const [BMI, Set_BMI] = useState(null)
  const [Message, Set_Message] = useState("")
  const [Color, Set_Color] = useState("")
  const [Gender, Set_Gender] = useState(null)
  const Calculate_BMI = (Weight, Height) => {
    if (!Weight || !Height){
      Set_BMI(null)
      Set_Message("Enter yout details please :)");
      return;
    }
  const MeterHeight = Height / 100;
  const BMIValue = (Weight / (MeterHeight * MeterHeight)).toFixed(2);
  Set_BMI(BMIValue);
  if (!Gender){
    if (BMIValue < 18.5) {Set_Message("Low"); Set_Color("Blue");}
    else if (BMIValue < 25) {Set_Message("Fine"); Set_Color("Green");}
    else if (BMIValue < 30) {Set_Message("High"); Set_Color("Orange");}
    else {Set_Message("Fatass"); Set_Color("Red");}
  }
  if (Gender === "male"){
    if (BMIValue < 18.5) {Set_Message("LowM"); Set_Color("Blue");}
    else if (BMIValue < 25) {Set_Message("FineM"); Set_Color("Green");}
    else if (BMIValue < 30) {Set_Message("HighM"); Set_Color("Orange");}
    else {Set_Message("FatassM"); Set_Color("Red");}
  }
  if (Gender === "female"){
    if (BMIValue < 18) {Set_Message("LowF"); Set_Color("Blue");}
    else if (BMIValue < 25) {Set_Message("FineF"); Set_Color("Green");}
    else if (BMIValue < 30) {Set_Message("HighF"); Set_Color("Orange");}
    else {Set_Message("FatassF"); Set_Color("Red");}
  }
  }

const Reset_BMI = () => {
  Set_BMI(null);
  Set_Message("");
  Set_Color("");
  Set_Gender(null);
}
    
  return(
    <>
    <Title></Title>
    <Calculator onCalculate={Calculate_BMI} onReset = {Reset_BMI} onGenderSelect={Set_Gender} gender={Gender}/>
    {!BMI && Message && (
      <p style={{color:"salmon", width:"fit-content",margin:"auto",fontSize:"26px",fontWeight:"bold"}}>{Message}</p>
    )}
    {BMI && (
      <BMIResult BMI={BMI} Message={Message} Color={Color}/>
    )}
    </>
  )
}


export default App;
