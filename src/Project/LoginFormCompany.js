import { useEffect, useState } from "react";
import './homePage.css';
import axios from "axios";

export default function LoginCompany() {
    const [companyName, setCompanyName] = useState();
    const [companyPassword, setCompanyPassword] = useState();

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            debugger
            axios.get("https://localhost:7192/api/CompaniesDetails/" + companyName + "," + companyPassword)
                .then((response) => {
                    // setList(response.data);
                    debugger
                    if (response.data != '')
                        // מעבר לדף הבא
                        alert("OK");
                    else
                        alert("אינך קיים במערכת");
                }).catch((err) => {
                    alert("Error!");
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        setIsButtonClicked(true);
    }

    return (
        <div>
            <input className="Details" type="text" placeholder="שם חברה" onChange={(e) => setCompanyName(e.target.value)}></input>
            <br />
            <input className="Details" type="password" placeholder="סיסמא" onChange={(e) => setCompanyPassword(e.target.value)}></input>
            <br />
            {/* בלחיצה על הכפתור יבדוק אם הלקוח קיים */}
            <button className="Button" onClick={handleButtonClick}>כניסה</button>
            <br />
            <button id="changeStatus">הרשמה</button>
            <span>? עדיין לא רשומים</span>
        </div>
    )
}