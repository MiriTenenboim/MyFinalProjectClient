import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './homePage.css';
// import '../CSS/enterForm.css'

function LoginForm() {
    const [list, setList] = useState('');

    const [user, setUser] = useState({
        UserFirstName: "",
        UserLastName: "",
        UserName: "",
        UserEmailAddress: "",
        UserBank: 0,
        UserBankBranch: 0,
        UserBankAccount: 0,
        UserPassword: "",
    })
    const [checkUserPassword, setCheckUserPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            axios.post("https://localhost:7192/api/UsersDetails", user)
                .then((response) => {
                    setList(response.data);
                    localStorage.setItem('userId', response.data.userId);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        setIsButtonClicked(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="Details" type="text" placeholder="שם" onChange={(e) => setUser({ ...user, UserFirstName: e.target.value })}></input >
            <br /><input className="Details" type="text" placeholder="שם משפחה" onChange={(e) => setUser({ ...user, UserLastName: e.target.value })}></input>
            <br /><input className="Details" type="email" placeholder="כתובת מייל" onChange={(e) => setUser({ ...user, UserEmailAddress: e.target.value })}></input>
            <br /><input className="Details" type="number" placeholder="מספר בנק" onChange={(e) => setUser({ ...user, UserBank: e.target.value })}></input>
            <br /><input className="Details" type="number" placeholder="מספר סניף בנק" onChange={(e) => setUser({ ...user, UserBankBranch: e.target.value })}></input>
            <br /><input className="Details" type="number" placeholder="מספר חשבון בנק" onChange={(e) => setUser({ ...user, UserBankAccount: e.target.value })}></input>
            <br /><input className="Details" type="text" placeholder="שם משתמש" onChange={(e) => setUser({ ...user, UserName: e.target.value })}></input>
            <br /><input className="Details" type="password" placeholder="סיסמא" onChange={(e) => setUser({ ...user, UserPassword: e.target.value })}></input>
            <br /><input className="Details" type="password" placeholder="אישור סיסמא" onChange={(e) => setCheckUserPassword(e.target.value)}></input>
            <br />
            <button id='enterButton' onClick={handleButtonClick}>הרשמה</button>
            <br />
            <button id="changeStatus">כניסה</button>
            <span>? רשומים כבר</span>
        </form >
    );
}

export default LoginForm;
