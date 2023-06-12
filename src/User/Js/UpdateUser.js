import axios from "axios"
import React, { useEffect, useState } from "react"
import '../Css/GeneralCss.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateUser() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(location.state.user);
    },[])

    const [user, setUser] = useState(location.state.user);

    function handleSubmit(event) {
        event.preventDefault();
    }

    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    // useEffect(() => {
    //     if (isButtonClicked) {
    //         console.log('Button clicked!');
    //         axios.put("https://localhost:7192/api/UsersDetails", user)
    //             .then((response) => {
    //                 // setList(response.data);
    //                 localStorage.setItem('userId', response.data.userId);
    //                 alert("OK")
    //             }).catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }, [isButtonClicked]);

    function handleButtonClick() {
        // setIsButtonClicked(true);
        console.log('Button clicked!');
            axios.put("https://localhost:7192/api/UsersDetails", user)
                .then((response) => {
                    // setList(response.data);
                    localStorage.setItem('userId', response.data.userId);
                    alert("OK")
                    navigate('/UserRegistration/UserMenuPage/UpdateDetailsUser');
                }).catch((err) => {
                    console.log(err);
                })
    }

    return (
        <>
            <button>פרטי משתמש</button>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="UpdateDetails" type="text" placeholder={user.userFirstName} onChange={(e) => setUser({ ...user, userFirstName: e.target.value })}></input ><span>:שם</span>
                    <br /><input className="Details" type="text" placeholder={user.userLastName} onChange={(e) => setUser({ ...user, userLastName: e.target.value })}></input><span>:שם משפחה</span>
                    <br /><input className="Details" type="email" placeholder={user.userEmailAddress} onChange={(e) => setUser({ ...user, userEmailAddress: e.target.value })}></input><span>:כתובת מייל</span>
                    <br /><input className="Details" type="number" placeholder={user.userBank} onChange={(e) => setUser({ ...user, userBank: e.target.value })}></input><span>:מספר בנק</span>
                    <br /><input className="Details" type="number" placeholder={user.userBankBranch} onChange={(e) => setUser({ ...user, userBankBranch: e.target.value })}></input><span>:מספר סניף בנק</span>
                    <br /><input className="Details" type="number" placeholder={user.userBankAccount} onChange={(e) => setUser({ ...user, userBankAccount: e.target.value })}></input><span>:מספר חשבון בנק</span>
                    <br /><input className="Details" type="text" placeholder={user.userName} onChange={(e) => setUser({ ...user, userName: e.target.value })}></input><span>:שם משתמש</span>
                    <br /><input className="Details" type="password" placeholder={user.userPassword} onChange={(e) => setUser({ ...user, userPassword: e.target.value })}></input><span>:סיסמא</span>
                    <br />
                    <button id='enterButton' onClick={handleButtonClick}>עדכון</button>
                    <br />
                </form >
            </div>
        </>
    )
}
