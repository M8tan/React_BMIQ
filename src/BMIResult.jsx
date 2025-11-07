function BMIResult({BMI, Message}){
    return(
        <div className="result">
            <h2>BMI: {BMI}</h2>
            <p>{Message}</p>
        </div>
    );
}
export default BMIResult;