import {useForm} from "react-hook-form";
import CreateInput from "../../form/components/CreateInput";
import FormButton from "../../form/components/FormButton";
import SubmitButton from "../../form/components/SubmitButton";

export default function Form() {
    
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    } = useForm();

    async function sendEntries(options){
        try {
            /*Recieving Response.json from Server*/
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json);            
        } catch (error) {
            console.log (error.message);
        }

    }

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data)); // Attach JSON as a string
        formData.append("logo", data.logo[0]); // Attach the file
        formData.append("reportCard", data.reportCard[0]); // Attach the file
        const options = {
            method: 'POST',
            // headers: {'Content-Type': 'application/json'},
            body: formData,
        };
        sendEntries(options);
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
                    name="roll"
                    type="text"
                    placeholder="RollNumber"
                    register={register}
                    // required={"Roll Number is required."}
                    error={errors.roll}
                />
                <CreateInput 
                    label="University/College/School/Institute Name"
                    name="college"
                    type="text"
                    placeholder=""
                    register={register}
                    // required={"College Name is required."}
                    error={errors.college}
                />
                <CreateInput 
                    label="Year of Passing"
                    name="yop"
                    type="number"
                    placeholder="1999"
                    register={register}
                    // required={"Year of Passing is required."}
                    error={errors.yop}
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
                    <SubmitButton />
                    <FormButton text={"Reutrn Home"} redirect={"/"}/>
                </div>
            </form>
        </div>
    )
}