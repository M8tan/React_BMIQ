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
        
        <form onSubmit={HandleSubmit}>
            <div id="Inputz">
                <label>Weight (KG)</label>
                <input type="number" value={Weight} onChange={(e) => Set_Weight(e.target.value)} placeholder="70"></input>
            </div>
            <div id="Inputz">
                <label>Height (CM)</label>
                <input type="number" value={Height} onChange={(e) => Set_Height(e.target.value)} placeholder="180"></input>
            </div>
            <button type="submit" onClick={HandleSubmit}>Calculate :)</button>
            <button type="button" onClick={HandleReset} className="Reset_Button">Reset</button>

        </form>
        

    )
}
export default Calculator;

// {Calculate_BMI(document.getElementById("Weight"), document.getElementById("Height"))}