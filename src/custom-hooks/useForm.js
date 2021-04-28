import {useState, useEffect} from "react";



const useForm =(submitForm, validateValues) => {

    const [values, setValues] = useState({
        cardholdername: '',
        cardnumber: '',
        ccv: '',
        expirationmonth:'',
        expirationyear: '',
        cardtype: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
        [name]: value
        });


    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateValues(values));
        setIsSubmitting(true);



    };

    useEffect(
        () => {
        if(Object.keys(errors).length === 0 && 
        isSubmitting) {
            submitForm();
            console.log(values);
            
           

        }
    }, [errors]
    );

 
    return{handleChange, handleSubmit, values, errors};
};




export default useForm;