import Login from "../../pages/login/Login";
import Button from "../button/Button";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

import Remember from "../remember/Remember";

export default function Card(){
    return(
        <>
        <Login/>
        <Remember/>
        <Button/>
            <div>
                <ForgotPassword/>
            </div>
        </>
    )
}