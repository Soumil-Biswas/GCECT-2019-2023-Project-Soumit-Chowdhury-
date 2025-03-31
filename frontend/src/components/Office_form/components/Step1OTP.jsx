import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Step1OTP() {
  const [notify, setNotify] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    formSend(data, "/OfficePortal/StudentOTP", "get", setNotify)
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
                label="Roll Number"
                name="rollNo"
                type="text"
                placeholder="RollNumber"
                register={register}
                // required={"Roll Number is required."}
                error={errors.rollNo}
            />
            <CreateInput 
                label="University/College/School/Institute Name"
                name="institute"
                type="text"
                placeholder=""
                register={register}
                // required={"Institute Name is required."}
                error={errors.institute}
            />                
            <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                <Link to={"/SOCV/Step1"}>
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
