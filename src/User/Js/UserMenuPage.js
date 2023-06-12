import { useNavigate } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const NUM_OF_SPORTS = 3;

export default function UserMenuPage() {
    var navigate = useNavigate();
    const [isEligible, setIsEligible] = useState(false);
    const [list, setList] = useState([{}]);
    const [numOfSports, setNumOfSports] = useState(0);
    const userId = 2;//localStorage.getItem('userId'))

    useEffect(() => {
        console.log('Button clicked!');
        axios.get("https://localhost:7192/api/UserPoints/" + userId)
            .then((response) => {
                if (response.data != '') {
                    console.log("Result");
                    setList(response.data);
                    // מעבר לקומפוננטה
                    //alert("OK");
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].dueDate.split('T')[0] == new Date().toISOString().split('T')[0])
                            setIsEligible(true)
                    }
                    // for (const point in response.data) {
                    //     if (point.dueDate.split('T')[0] == new Date().toISOString().split('T')[0])
                    //         setIsEligible(true)
                    // }
                    setNumOfSports(response.data.length);
                }
            }).catch((err) => {
                alert("Error!");
                console.log(err);
            })
    }, []);

    return (
        <>
            <button onClick={() => navigate('/UserRegistration/UserMenuPage/UpdateDetailsUser')}>עדכון פרטים אישיים</button><br />
            <button onClick={() => navigate('/UserRegistration/UserMenuPage/ChooseLocationUser')}>הוספת נקודת יעד</button><br />
            <button onClick={() => navigate('/UserRegistration/UserMenuPage/ShowPointsUser')}>צפייה בנקודות יעד קודמות</button><br />
            <button onClick={() => navigate('/UserRegistration/UserMenuPage/ShowRealizedPointsUser')}>צפייה בזכיות קודמות</button><br />
            {isEligible &&
                (
                    <>
                        <button onClick={() => navigate('/UserRegistration/UserMenuPage/StartSport')}>התחלת פעילות ספורט</button>
                        <br />
                    </>
                )
            }
            {numOfSports > NUM_OF_SPORTS &&
                (
                    <>
                        <button onClick={() => navigate('/UserRegistration/UserMenuPage/CreateARoute')}>יצירת מסלול</button>
                        <br />
                    </>
                )
            }
        </>
    )
}
