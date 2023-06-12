import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './homePage.css';
// import '../CSS/enterForm.css'

function LoginFormCompany() {
    const [list, setList] = useState('');

    const [company, setCompany] = useState({
        CompanyName: "",
        CompanyEmailAddress: "",
        CompanyPassword: "",
        CompanyLogo: "",
    })
    const [checkCompanyPassword, setCheckCompanyPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            debugger
            axios.post("https://localhost:7192/api/CompaniesDetails", company)
                .then((response) => {
                    setList(response.data);
                    localStorage.setItem('companyId', response.data.companyId);
                    alert("OK");
                }).catch((err) => {
                    alert("Error!");
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        if (checkCompanyPassword == company.CompanyPassword)
            setCheckCompanyPassword(checkCompanyPassword);
        else
            alert("הסיסמא לא מתאימה");
        setIsButtonClicked(true);
    }

    function checkPassword(value) {
        if (value == company.CompanyPassword)
            setCheckCompanyPassword(value);
        else
            alert("הסיסמא לא מתאימה");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="Details" type="text" placeholder="שם חברה" onChange={(e) => setCompany({ ...company, CompanyName: e.target.value })}></input >
            <br /><input className="Details" type="email" placeholder="כתובת מייל" onChange={(e) => setCompany({ ...company, CompanyEmailAddress: e.target.value })}></input>
            <br /><input className="Details" type="password" placeholder="סיסמא" onChange={(e) => setCompany({ ...company, CompanyPassword: e.target.value })}></input>
            <br /><input className="Details" type="password" placeholder="אישור סיסמא" onChange={(e) => setCheckCompanyPassword(e.target.value)}></input>
            <br />
            <button id='enterButton' onClick={handleButtonClick}>הרשמה</button>
            <br />
            <button id="changeStatus">כניסה</button>
            <span>? רשומים כבר</span>
        </form >
    );
}

export default LoginFormCompany;
