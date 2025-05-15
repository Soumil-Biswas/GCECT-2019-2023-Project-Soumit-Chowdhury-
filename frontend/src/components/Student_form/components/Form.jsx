import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Form() {
    const [notify, setNotify] = useState("");
    
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        formSend(data, "/StudentPortal/transaction", "get", setNotify)
    }

    return(
        <div>
          {(notify === "") ?
            //  Form
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-start w-full p-5 gap-3" id="basic-form"
            >
                <CreateInput 
                    label="Transaction ID"
                    name="transactionID"
                    type="number"
                    placeholder="XXXX-XXXX-XXXX"
                    register={register}
                    // required={"Transaction ID is required."}
                    error={errors.dgpa}
                />
                <CreateInput 
                    label="Transaction Amount"
                    name="transactionAmount"
                    type="number"
                    placeholder="3000.00"
                    register={register}
                    // required={"Transaction Amount is required."}
                    error={errors.dgpa}
                />  
                <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                    <Link to={"/SSSVP/success"}>
                        <button className="form-button" type="submit">Submit</button>
                    </Link>
                    <Link className="form-button" to={"/"}>Reutrn Home</Link>
                </div>
            </form>
            :
            <p className='text-center font-bold text-red-600'>{notify}</p>
          }          
        </div>
    )
}