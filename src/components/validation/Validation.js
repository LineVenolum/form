function validateValues(values){
    let errors ={}




    if(values.cardholdername.length === 0){
        errors.cardholdername="Please enter cardholder name"
    }else if (values.cardholdername.length < 5 ){
        errors.cardholdername="Name must be at least 5 characters"
    }

    if (values.cardnumber.length === 0){
        errors.cardnumber="Please enter a card number"
    } else if (!values.cardnumber.length === 16){
        errors.cardnumber="Card number must be 16 digits"
    }

    if (values.ccv.length === 0){
        errors.ccv="Please enter CCV"
    }else if(values.ccv.length !== 3 ){
        errors.ccv="CCV must be 3 digits"
    }

    if (values.expirationmonth.length === 0){
        errors.expirationmonth="Please enter month"
    }else if(values.expirationmonth > 12 | values.expirationmonth === "0"){
        errors.expirationmonth="Please enter a valid month"
    }

    if (values.expirationyear.length === 0){
        errors.expirationyear="Please enter year"
    }else if(values.expirationyear < 2021 ){
        errors.expirationyear="Please enter a valid year"
    }

    if(values.cardtype.length === 0){
        errors.cardtype="Please choose a card type"
    }

    return errors;

    
};

export default validateValues;