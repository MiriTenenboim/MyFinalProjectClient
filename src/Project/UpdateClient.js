import axios from "axios"
import React, { useEffect, useState } from "react"
import './homePage.css';

export default function UpdateUser(updateUser) {
    debugger
    const [user, setUser] = useState({
        UserId: updateUser.updateUser.userId,
        UserFirstName: updateUser.updateUser.userFirstName,
        UserLastName: updateUser.updateUser.userLastName,
        UserName: updateUser.updateUser.userName,
        UserEmailAddress: updateUser.updateUser.userEmailAddress,
        UserBank: updateUser.updateUser.userBank,
        UserBankBranch: updateUser.updateUser.userBankBranch,
        UserBankAccount: updateUser.updateUser.userBankAccount,
        UserPassword: updateUser.updateUser.userPassword,
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
            axios.put("https://localhost:7192/api/UsersDetails", user)
                .then((response) => {
                    // setList(response.data);
                    localStorage.setItem('userId', response.data.userId);
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
            <button>פרטי משתמש</button>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="Details" type="text" placeholder={user.UserFirstName} onChange={(e) => setUser({ ...user, UserFirstName: e.target.value })}></input ><span>:שם</span>
                    <br /><input className="Details" type="text" placeholder={user.UserLastName} onChange={(e) => setUser({ ...user, UserLastName: e.target.value })}></input><span>:שם משפחה</span>
                    <br /><input className="Details" type="email" placeholder={user.UserEmailAddress} onChange={(e) => setUser({ ...user, UserEmailAddress: e.target.value })}></input><span>:כתובת מייל</span>
                    <br /><input className="Details" type="number" placeholder={user.UserBank} onChange={(e) => setUser({ ...user, UserBank: e.target.value })}></input><span>:מספר בנק</span>
                    <br /><input className="Details" type="number" placeholder={user.UserBankBranch} onChange={(e) => setUser({ ...user, UserBankBranch: e.target.value })}></input><span>:מספר סניף בנק</span>
                    <br /><input className="Details" type="number" placeholder={user.UserBankAccount} onChange={(e) => setUser({ ...user, UserBankAccount: e.target.value })}></input><span>:מספר חשבון בנק</span>
                    <br /><input className="Details" type="text" placeholder={user.UserName} onChange={(e) => setUser({ ...user, UserName: e.target.value })}></input><span>:שם משתמש</span>
                    <br /><input className="Details" type="password" placeholder={user.UserPassword} onChange={(e) => setUser({ ...user, UserPassword: e.target.value })}></input><span>:סיסמא</span>
                    <br />
                    <button id='enterButton' onClick={handleButtonClick}>עדכון</button>
                    <br />
                </form >
            </div>
            <button><img src='pencil1.png' alt="Example" /></button>
        </>
    )
}