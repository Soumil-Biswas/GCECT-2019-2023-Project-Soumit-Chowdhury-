import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Step2Info() {
  const [notify, setNotify] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    formSend(data, "/OfficePortal/FingerInfo", "get", setNotify)
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
                label="Year of Passing"
                name="yearOfPassing"
                type="number"
                placeholder="1999"
                register={register}
                // required={"Year of Passing is required."}
                error={errors.yearOfPassing}
            />
            <CreateInput 
                label="DGPA"
                name="dgpa"
                type="number"
                placeholder="8.0"
                register={register}
                // required={"DGPA is required."}
                error={errors.dgpa}
            />
            <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                <Link to={"/SOCV/Step2"}>
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
