import { useNavigate } from "react-router"

export default function CompanyMenuPage() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate('/CompanyRegistration/CompanyMenuPage/UpdateDetailsCompany')}>עדכון פרטי חברה</button><br />
            <button onClick={() => navigate('/CompanyRegistration/CompanyMenuPage/CompanyPointDetails')}>הוספת נקודת תגמול</button><br />
            <button onClick={() => navigate('/CompanyRegistration/CompanyMenuPage/ShowPointsCompany')}>צפייה בנקודות תגמול קודמות</button><br />
        </>
    )
}