import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function UpdateDetailsUser() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        UserId: 0,
        UserFirstName: "",
        UserLastName: "",
        UserName: "",
        UserEmailAddress: "",
        UserBank: 0,
        UserBankBranch: 0,
        UserBankAccount: 0,
        UserPassword: "",
    });

    var userId = 2;//localStorage.getItem('userId');

    // יופעל בעת טעינת הדף
    useEffect(() => {
        axios.get("https://localhost:7192/api/UsersDetails/" + userId)
            .then((response) => {
                if (response.data != '')
                    setUser(response.data);
                else
                    alert("Error!");
            })
    }, [])

    return (
        <>
            <button>פרטי משתמש</button>
            <div>
                <div>{user.userFirstName} <span className="Label">:שם</span></div>
                <div>{user.userLastName} <span className="Label">:שם משפחה</span></div>
                <div>{user.userEmailAddress} <span className="Label">:כתובת מייל</span></div>
                <div>{user.userBank} <span className="Label">:מספר בנק</span></div>
                <div>{user.userBankBranch} <span className="Label">:מספר סניף בנק</span></div>
                <div>{user.userBankAccount} <span className="Label">:מספר חשבון בנק</span></div>
                <div>{user.userName} <span className="Label">:שם משתמש</span></div>
                <div>{user.userPassword} <span className="Label">:סיסמא</span></div>
            </div>
            <button onClick={() => navigate('/UserRegistration/UserMenuPage/UpdateDetailsUser/UpdateUser',{state:{user:user}} )}>עדכון</button>
        </>
    )
}
