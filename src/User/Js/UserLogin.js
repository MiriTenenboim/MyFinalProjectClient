import { useEffect, useState } from "react";
import '../Css/GeneralCss.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();

    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    // useEffect(() => {
    //     if (isButtonClicked) {
    //         console.log('Button clicked!');
    //         axios.get("https://localhost:7192/api/UsersDetails/" + userName + "," + userPassword)
    //             .then((response) => {
    //                 // setList(response.data);
    //                 if (response.data != '') {
    //                     // מעבר לדף הבא
    //                     navigate('/UserRegistration/UserMenuPage');
    //                     alert("OK");
    //                 }
    //                 else
    //                     alert("אינך קיים במערכת");
    //             }).catch((err) => {
    //                 alert("Error!");
    //                 console.log(err);
    //             })
    //     }
    // }, [isButtonClicked]);

    function handleButtonClick() {
        // setIsButtonClicked(true);
        console.log('Button clicked!');
        axios.get("https://localhost:7192/api/UsersDetails/" + userName + "," + userPassword)
            .then((response) => {
                // setList(response.data);
                if (response.data != '') {
                    // מעבר לדף הבא
                    navigate('/UserRegistration/UserMenuPage');
                    alert("OK");
                }
                else
                    {
                        alert("אינך קיים במערכת");
                        navigate('/UserRegistration');
                    }
            }).catch((err) => {
                alert("Error!");
                console.log(err);
            })
        navigate('/UserLogin/UserMenuPage');
    }

    return (
        <div>
            <input className="Details" type="text" placeholder="שם משתמש" onChange={(e) => setUserName(e.target.value)}></input>
            <br />
            <input className="Details" type="password" placeholder="סיסמא" onChange={(e) => setUserPassword(e.target.value)}></input>
            <br />
            {/* בלחיצה על הכפתור יבדוק אם הלקוח קיים */}
            <button className="Button" onClick={handleButtonClick}>כניסה</button>
            <br />
            <button onClick={() => navigate('/UserRegistration')} id="changeStatus">הרשמה</button>
            <span>? עדיין לא רשומים</span>
        </div>
    )
}
