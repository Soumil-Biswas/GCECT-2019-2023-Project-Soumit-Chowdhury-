import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Step4() {
  const [notify, setNotify] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    formSend(data, "/OfficePortal/transaction", "post", setNotify)
  }

  return (
    (notify === "") ?
    <div>
        {/* Form */}
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start w-full p-5 gap-3" id="basic-form"
        >
            <CreateInput 
                label="Transaction ID"
                name="tranID"
                type="number"
                placeholder="XXXX-XXXX-XXXX"
                register={register}
                // required={"Transaction ID is required."}
                error={errors.dgpa}
            />
            <CreateInput 
                label="Transaction Amount"
                name="tranAmt"
                type="number"
                placeholder="3000.00"
                register={register}
                // required={"Transaction Amount is required."}
                error={errors.dgpa}
            />                                
            <CreateInput 
                label="Fingerprint of left Thumb"
                name="fingerprint"
                type="file"
                placeholder=""
                register={register}
                // required={"A valid file is required."}
                error={errors.fingerprint}
            /> 
            <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                <button className="form-button" type="submit">Submit</button>
                <Link className="form-button" to={"/"}>Reutrn Home</Link>
            </div>
        </form>
    </div>
    :
    <p className='text-center font-bold text-red-600'>{notify}</p>    
  )
}
