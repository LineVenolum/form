import {useState} from "react"; 
import useForm from "../../custom-hooks/useForm";
import validateValues from "../validation/Validation";
import styles from "./Form.module.scss";




export const FormTwo = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);


    function submitForm(){
        setIsSubmitted(true);
    
      }


    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateValues)



    return(
     
            <form className={styles.form} onSubmit={handleSubmit}> 
            <h1> FORM 2</h1>
            <p>This form is created using a custom hook and validation made from scratch. </p>
    
                               {errors.cardholdername ? <span className={styles.error}>{errors.cardholdername}</span> : errors.cardnumber ? <span className={styles.error}>{errors.cardnumber}</span> :errors.ccv ? <span className={styles.error}>{errors.ccv}</span> : errors.expirationmonth ? <span className={styles.error}>{errors.expirationmonth}</span> : errors.expirationyear ? <span className={styles.error}>{errors.expirationyear}</span> : errors.cardtype ? <span className={styles.error}>{errors.cardtype}</span> : <span className={styles.emptyError}/>}
               <div className={styles.fields}>
                   <section className={styles.field}>
                   <label className={styles.label} htmlFor="Cardholder name">Cardholder name: </label>
               <input type="text" name="cardholdername" value={values.cardholdername} onChange={handleChange} />
               </section>

                <section className={styles.field}>
                <label className={styles.label}  htmlFor="Card number">Card number: </label>
               <input type="number"name="cardnumber" value={values.cardnumber} onChange={handleChange} />
               </section>


               <section className={styles.field}>
                <label className={styles.label} htmlFor="ccv">CCV: </label>
               <input className={styles.ccv}type="number" name="ccv" value={values.ccv} onChange={handleChange} />
               </section>


               <section className={styles.field}>
                <label className={styles.label} htmlFor="expirationmonth">Expiration date: </label>
               <input className={styles.date}  type="number" placeholder="MM" name="expirationmonth" value={values.expirationmonth} onChange={handleChange} />
               <label htmlFor="expirationyear"> / </label>
               <input className={styles.date} type="number" placeholder="YYYY" name="expirationyear" value={values.expirationyear} onChange={handleChange} />
               </section>



               <section className={styles.field}>
               <label className={styles.label} htmlFor="cardType">Card type:</label>
               <select  name="cardtype" value={values.cardtype} onChange={handleChange}>        
                   <option value=""></option>
                   <option value="visa">VISA</option>
                   <option value="mastercard">Mastercard</option>
               </select>
               </section>

      
               <input className={styles.button} type="submit" />
               {isSubmitted ? <section className={styles.text}>Thanks for submission</section> : <section className={styles.text} > </section> }
       

               </div> 
            </form>

    );
}