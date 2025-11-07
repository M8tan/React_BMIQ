import React, { useState } from "react";

function Calculator( {onCalculate, onReset}){
    const [Weight, Set_Weight] = useState("")
    const [Height, Set_Height] = useState("")
    
    const HandleSubmit = (e) => {
        e.preventDefault()
        onCalculate(Number(Weight), Number(Height))
    }
    const HandleReset = () => {
        Set_Weight("")
        Set_Height("")
        onReset()
    }

    return(
        
        <form id="Calculator_Form" className="bmi-card" onSubmit={HandleSubmit}>
            <div className="Inputz">
                <div className="Genderz">
                <label>I am a:
                <label><input type="radio" name="gender" value="male"></input>Male</label>
                <label><input type="radio" name="gender" value="male"></input>Female</label>
                <label><input type="radio" name="gender" value="male"></input>Else</label>
                </label>
                </div>
                
                <div className="input-group">
                    <label>Weight (KG)</label>
                    <input type="number" value={Weight} onChange={(e) => Set_Weight(e.target.value)} placeholder="70"></input>
                </div>
                <div className="input-group">
                    <label>Height (CM)</label>
                    <input type="number" value={Height} onChange={(e) => Set_Height(e.target.value)} placeholder="180"></input>
                </div>
            </div>
            <div className="buttons">
                <button type="submit" onClick={HandleSubmit} className="ButtonZ">Calculate :)</button>
                <button type="button" onClick={HandleReset} className="ButtonZ reset">Reset</button>
            </div>
        </form>
        

    )
}
export default Calculator;

// {Calculate_BMI(document.getElementById("Weight"), document.getElementById("Height"))}