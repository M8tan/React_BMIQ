function Calculator(){
    return(
        <>
            <div id="Calculator">
                <h3>Age:</h3>
                <input></input>
                <h3>Weight:</h3>
                <input id="Weight"></input>
                <h3>Height:</h3>
                <input id="Height"></input>
                <button id="Calculate">Calculate :)</button>
            </div>
            <h2>BMI: </h2>
        </>

    )
}
export default Calculator;

// {Calculate_BMI(document.getElementById("Weight"), document.getElementById("Height"))}