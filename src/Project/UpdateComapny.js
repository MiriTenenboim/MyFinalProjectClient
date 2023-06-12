import axios from "axios"
import React, { useEffect, useState } from "react"
import './homePage.css';

export default function UpdateCompany(updateCompany) {
    const [company, setCompany] = useState({
        CompanyId: updateCompany.updateCompany.companyId,
        CompanyName: updateCompany.updateCompany.companyName,
        CompanyEmailAddress: updateCompany.updateCompany.companyEmailAddress,
        CompanyPassword: updateCompany.updateCompany.companyPassword,
        CompanyLogo: updateCompany.updateCompany.companyLogo,
    })

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            axios.put("https://localhost:7192/api/CompaniesDetails", company)
                .then((response) => {
                    // setList(response.data);
                    //localStorage.setItem('userId', response.data.userId);
                    alert("OK")
                }).catch((err) => {
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        setIsButtonClicked(true);
    }

    return (
        <>
            <button>פרטי חברה</button>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="Details" type="text" placeholder={company.CompanyName} onChange={(e) => setCompany({ ...company, CompanyName: e.target.value })}></input ><span>:שם חברה</span>
                    <br /><input className="Details" type="email" placeholder={company.CompanyEmailAddress} onChange={(e) => setCompany({ ...company, CompanyEmailAddress: e.target.value })}></input><span>:כתובת מייל</span>
                    <br /><input className="Details" type="password" placeholder={company.CompanyPassword} onChange={(e) => setCompany({ ...company, CompanyPassword: e.target.value })}></input><span>:סיסמא</span>
                    <br />
                    <button id='enterButton' onClick={handleButtonClick}>עדכון</button>
                    <br />
                </form >
            </div>
        </>
    )
}