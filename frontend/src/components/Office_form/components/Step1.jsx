import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Step1() {
  const [notify, setNotify] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    formSend(data, "/OfficePortal/Student", "get", setNotify)
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
                label="OTP"
                name="otp"
                type="number"
                placeholder="XXXXXX"
                register={register}
                // required={"OTP is required."}
                error={errors.otp}
                // error={1}
            />
            <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                <Link to={"/SOCV/Step2Info"}>
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
