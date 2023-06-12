import { useEffect, useState } from "react";
import '../Css/GeneralCss.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CompanyLogin() {
    const navigate = useNavigate();

    const [companyName, setCompanyName] = useState();
    const [companyPassword, setCompanyPassword] = useState();

    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    // useEffect(() => {
    //     if (isButtonClicked) {
    //         console.log('Button clicked!');
    //         axios.get("https://localhost:7192/api/CompaniesDetails/" + companyName + "," + companyPassword)
    //             .then((response) => {
    //                 // setList(response.data);
    //                 if (response.data != '') {
    //                     // מעבר לדף הבא
    //                     navigate('/CompanyRegistration/CompanyMenuPage');
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
            axios.get("https://localhost:7192/api/CompaniesDetails/" + companyName + "," + companyPassword)
                .then((response) => {
                    // setList(response.data);
                    if (response.data != '') {
                        // מעבר לדף הבא
                        navigate('/CompanyRegistration/CompanyMenuPage');
                        alert("OK");
                    }
                    else
                        alert("אינך קיים במערכת");
                }).catch((err) => {
                    alert("Error!");
                    console.log(err);
                })
        navigate('/CompanyRegistration/CompanyMenuPage');
    }

    return (
        <div>
            <input className="Details" type="text" placeholder="שם חברה" onChange={(e) => setCompanyName(e.target.value)}></input>
            <br />
            <input className="Details" type="password" placeholder="סיסמא" onChange={(e) => setCompanyPassword(e.target.value)}></input>
            <br />
            {/* בלחיצה על הכפתור יבדוק אם החברה קיים */}
            <button className="Button" onClick={handleButtonClick}>כניסה</button>
            <br />
            <button onClick={() => navigate('/CompanyRegistration')} id="changeStatus">הרשמה</button>
            <span>? עדיין לא רשומים</span>
        </div>
    )
}
