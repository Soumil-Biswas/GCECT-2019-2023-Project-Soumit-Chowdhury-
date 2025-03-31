import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";

import UniForm from "./components/Uni_form/UniForm";

import StudentForm from "./components/Student_form/StudentForm";

import OfficeForm from "./components/Office_form/OfficeForm";
import Form from "./components/Office_form/components/Form";
import Step1OTP from "./components/Office_form/components/Step1OTP";
import Step1 from "./components/Office_form/components/Step1";
import Step2Info from "./components/Office_form/components/Step2Info";
import Step2 from "./components/Office_form/components/Step2";
import Step3 from "./components/Office_form/components/Step3";
import Step4 from "./components/Office_form/components/Step4";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="USCDE" element={<UniForm />} />
            <Route path="SOCV" element={<OfficeForm />}>
                <Route index element={<Step1OTP/>}/>
                <Route path="Step1" element={<Step1/>}/>
                <Route path="Step2Info" element={<Step2Info/>}/>
                <Route path="Step2" element={<Step2/>}/>
                <Route path="Step3" element={<Step3/>}/>
                <Route path="Step4" element={<Step4/>}/>
            </Route>
            <Route path="SSSVP" element={<StudentForm />} />

            <Route
                path="*"
                loader={() => {
                throw { status: 404, message: "Page Not Found" };
                }}
            />
        </Route>
    )
)