import './homePage.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={()=>navigate('/UserLogin')} className='Button'>משתמש</button>
            <button onClick={()=>navigate('/CompanyLogin')} className='Button'>חברה</button>
        </>
    )
}