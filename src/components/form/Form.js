import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.scss";

const regExCardnumber = /^\d{16}$/;
const regExCcv = /^\d{3}$/;
const regExMonth= /^(1[0-2]|[1-9])$/;
const regExYear= /^(?![01]|20[01])\d{4}$/;



const schema = yup.object().shape({
    cardholdername: yup.string().required("Please enter name of cardholder").min(5, "The name must be at least 5 characters"),
    cardnumber: yup.string().required("Please enter card number").matches(regExCardnumber, "The card number must be exactly 16 digits"),
    ccv: yup.string().required("Please enter CCV code").matches(regExCcv, "Invalid ccv"),
    expirationmonth: yup.string().required("PLease fill in month").matches(regExMonth, "Something"),
  expirationyear: yup.string().required("Please enter expiration year").matches( regExYear,"Please enter a valid year, e.g: YY "),
  cards: yup.string().required("Please choose a card type").min(1, "Please choose a card type")

})

export default function Form () {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    });

    function onSubmit(data) {
		console.log(data);
        alert("Thanks for your submission")
    }
    
    console.log(errors);
    return(
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> 
                          <h1> FORM 1</h1>
            <p>This form is created using React Hook Form and YUP for validation. </p>
                 {errors.cardholdername ? <span className={styles.error}>{errors.cardholdername.message}</span> : errors.cardnumber ? <span className={styles.error}>{errors.cardnumber.message}</span>: errors.ccv ? <span className={styles.error}>{errors.ccv.message}</span> : errors.expirationmonth? <span className={styles.error}>{errors.expirationmonth.message}</span> : errors.expirationyear ? <span className={styles.error}>{errors.expirationyear.message}</span>: errors.cards ? <span className={styles.error}>{errors.cards.message}</span>:<span className={styles.emptyError}/>}


                 <div className={styles.fields}>
                   <section className={styles.field}>
                   <label className={styles.label} htmlFor="Cardholder name">Cardholder name: </label>
               <input type="text"  name="cardholdername" {...register("cardholdername")} />
                </section>

                   <section className={styles.field}>
                   <label className={styles.label} htmlFor="Cardholder name">Card number: </label>
               <input type="number" name="cardnumber" {...register("cardnumber")} />
               </section>

               <section className={styles.field}>
                   <label className={styles.label} htmlFor="ccv">CCV: </label>
               <input className={styles.ccv} type="number"  name="ccv" {...register("ccv")} />
               </section>

               <section className={styles.field}>
                <label className={styles.label} htmlFor="expirationmonth">Expiration date: </label>
               <input className={styles.date}  type="number" placeholder="MM" name="expirationmonth" {...register("expirationmonth")} />
               <label htmlFor="expirationyear"> / </label>
               <input className={styles.date} type="number" placeholder="YYYY" name="expirationyear" {...register("expirationyear")} />
               </section>


               <section className={styles.field}>
               <label className={styles.label} htmlFor="cardType">Card type:</label>
               <select {...register("cards")} name="cards">
                   <option value=""></option>
                   <option value="visa">VISA</option>
                   <option value="mastercard">Mastercard</option>
               </select>
               </section>

               



               <input className={styles.button} type="submit" />
            </div>
            </form>

    );
}