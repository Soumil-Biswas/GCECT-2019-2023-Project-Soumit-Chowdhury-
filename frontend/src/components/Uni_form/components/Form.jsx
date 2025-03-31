import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import formSend from "../../../assets/js/formSend";
import { Link } from "react-router-dom";

export default function Form() {
    
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        formSend(data, "/UniversityPortal/submitReportCard", "post", setNotify)
    }

    return(
        <div>
            {/* Form */}
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-start w-full p-5 gap-3" id="basic-form"
            >
                <CreateInput 
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="FirstName LastName"
                    register={register}
                    // required={"Full Name is required."}
                    error={errors.name}
                    // error={1}
                />       
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
                <CreateInput 
                    label="Logo Watermark"
                    name="logo"
                    type="file"
                    placeholder=""
                    register={register}
                    // required={"A valid file is required."}
                    error={errors.logo}
                />       
                <CreateInput 
                    label="Fingerprint"
                    name="fingerprint"
                    type="file"
                    placeholder=""
                    register={register}
                    // required={"A valid file is required."}
                    error={errors.fingerprint}
                />       
                <CreateInput 
                    label="Voice Password"
                    name="audio"
                    type="file"
                    placeholder=""
                    register={register}
                    // required={"A valid file is required."}
                    error={errors.audio}
                />
                <CreateInput 
                    label="Report Card"
                    name="reportCard"
                    type="file"
                    placeholder=""
                    register={register}
                    // required={"A valid file is required."}
                    error={errors.reportCard}
                />
                <div className="mt-10 flex flex-row sm:flex-row w-full justify-between">
                    <button className="form-button" type="submit">Submit</button>
                    <Link className="form-button" to={"/"}>Reutrn Home</Link>
                </div>
            </form>
        </div>
    )
}