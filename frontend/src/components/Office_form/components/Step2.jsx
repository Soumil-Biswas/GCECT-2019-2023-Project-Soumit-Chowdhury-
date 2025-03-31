import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Step2() {
  const [notify, setNotify] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    formSend(data, "/OfficePortal/Finger", "get", setNotify)
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
                label="Fingerprint"
                name="fingerprint"
                type="file"
                placeholder=""
                register={register}
                // required={"A valid file is required."}
                error={errors.fingerprint}
            />   
            <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                <Link to={"/SOCV/Step3"}>
                  <button className="form-button" type="submit">Submit</button>
                </Link>
                <Link className="form-button" to={"/"}>Reutrn Home</Link>
            </div>
        </form>
    </div>
    :
    <p className='text-center font-bold text-red-600'>{notify}</p>    
  )
}
