import axios from "axios"
import { useEffect, useState } from "react"
import UpdateUser from "./UpdateClient";

export default function UpdateDetailsUser() {

    const [user, setUser] = useState({});

    var userId = 2;//localStorage.getItem('userId');

    // יופעל בעת טעינת הדף
    useEffect(() => {
        axios.get("https://localhost:7192/api/UsersDetails/" + userId)
            .then((response) => {
                debugger
                if (response.data != '')
                    setUser(response.data);
                else
                    alert("Error!");
            })
    }, [])

    return (
        <>
            {/* <button>פרטי משתמש</button>
            <div>
                <div>{user.userFirstName} :שם</div>
                <div>{user.userLastName} :שם משפחה</div>
                <div>{user.userEmailAddress} :כתובת מייל</div>
                <div>{user.userBank} :מספר בנק</div>
                <div>{user.userBankBranch} :מספר סניף בנק</div>
                <div>{user.userBankAccount} :מספר חשבון בנק</div>
                <div>{user.userName} :שם משתמש</div>
                <div>{user.userPassword} :סיסמא</div>
            </div>
            <button><img src='pencil1.png' alt="Example" /></button> */}
            {user != null && user.userFirstName != null &&
                <UpdateUser updateUser={user} />}
        </>
    )
}