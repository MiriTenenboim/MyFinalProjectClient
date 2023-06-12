import { Outlet } from "react-router";

export default function Nav() {
    return (
        <>
            <header>
                <button onClick={() => navigate('/UserLogin')} className='Button'>משתמש</button>
                <button onClick={() => navigate('/CompanyLogin')} className='Button'>חברה</button>
            </header>
            <Outlet></Outlet>
        </>
    )
}