import axios from "axios"
import { useEffect, useState } from "react"
import UpdateCompany from "./UpdateComapny";

export default function UpdateDetailsCompany() {

    const [company, setCompany] = useState({});

    var companyId = 2;//localStorage.getItem('userId');

    useEffect(() => {
        axios.get("https://localhost:7192/api/CompaniesDetails/" + companyId)
            .then((response) => {
                if (response.data != '')
                    setCompany(response.data);
                else
                    alert("Error!");
            })
    }, [])

    return (
        <>
            {/* <button>פרטי משתמש</button>
            <div>
                <div>{company.companyName} :שם חברה</div>
                <div>{company.companyEmailAddress} :כתובת מייל</div>
                <div>{company.companyPassword} :סיסמא</div>
            </div>
            <button><img src='pencil1.png' alt="Example" /></button> */}
            {company != null && company.companyName != null &&
                <UpdateCompany updateCompany={company} />}
        </>
    )
}