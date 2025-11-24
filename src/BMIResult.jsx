function BMIResult({BMI, Message, Color}){
    return(
        <div className="result">
           <h2>BMI: {BMI}</h2>
            <p style={{ color: Color }}>Which is {Message}</p>
        </div>
    );
}
export default BMIResult;