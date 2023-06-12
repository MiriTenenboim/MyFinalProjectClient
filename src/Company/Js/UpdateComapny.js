import axios from "axios"
import React, { useEffect, useState } from "react"
import '../Css/GeneralCss.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateCompany() {
    const location = useLocation();
    const navigate = useNavigate();

    const [company, setCompany] = useState(location.state.company)

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    function handleButtonClick() {
        console.log('Button clicked!');
            axios.put("https://localhost:7192/api/CompaniesDetails", company)
                .then((response) => {
                    // setList(response.data);
                    //localStorage.setItem('userId', response.data.userId);
                    alert("OK");
                    navigate('/UserRegistration/UserMenuPage');
                }).catch((err) => {
                    console.log(err);
                })
    }

    return (
        <>
            <button>פרטי חברה</button>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="Details" type="text" placeholder={company.companyName} onChange={(e) => setCompany({ ...company, companyName: e.target.value })}></input ><span>:שם חברה</span>
                    <br /><input className="Details" type="email" placeholder={company.companyEmailAddress} onChange={(e) => setCompany({ ...company, companyEmailAddress: e.target.value })}></input><span>:כתובת מייל</span>
                    <br /><input className="Details" type="password" placeholder={company.companyPassword} onChange={(e) => setCompany({ ...company, companyPassword: e.target.value })}></input><span>:סיסמא</span>
                    <br />
                    <button id='enterButton' onClick={handleButtonClick}>עדכון</button>
                    <br />
                </form >
            </div>
        </>
    )
}
