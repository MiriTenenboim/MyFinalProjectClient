import axios from "axios"
import { useEffect, useState } from "react"
import UpdateCompany from "./UpdateComapny";
import { useNavigate } from 'react-router-dom';

export default function UpdateDetailsCompany() {
    const navigate = useNavigate();

    const [company, setCompany] = useState({
        CompanyId: 0,
        CompanyName: "",
        CompanyEmailAddress: "",
        CompanyPassword: "",
        CompanyLogo: "",
    });

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
            <button>פרטי משתמש</button>
            <div>
                <div>{company.companyName} :שם חברה</div>
                <div>{company.companyEmailAddress} :כתובת מייל</div>
                <div>{company.companyPassword} :סיסמא</div>
            </div>
            <button onClick={() => navigate('/CompanyRegistration/CompanyMenuPage/UpdateDetailsCompany/UpdateComapny',{state:{company:company}} )}>עדכון</button>
        </>
    )
}
