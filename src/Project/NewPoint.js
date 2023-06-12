import axios from "axios";
import { useEffect, useState } from "react";

export default function NewPoint(point) {
    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const [user, setUser] = useState({
        UserId: 2, //localStorage.getItem('userId'),
        CouponAmount: 0,
        DueDate: null
    })

    const [newPoint, setNewPoint] = useState({
        PointX: 32.052890,//point.lat,
        PointY: 34.962675,//point.lng,
        UserPointId: 0,
        UserPoint: null,
        CompanyPointId: 1,
        CompanyPoint: null,
        UserOrCompany: 0,
        IsRealized: false,
        PlacingDate: null,
        DateWon: null,
        WinningUserId: 1,
        WinningUser: null
    })

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            debugger
            axios.post("https://localhost:7192/api/PointsDetails", newPoint)
                .then((response) => {
                    // setList(response.data);
                    //localStorage.setItem('pointId', response.data);
                    alert("OK");
                }).catch((err) => {
                    debugger
                    alert("Error!");
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        setNewPoint({ ...newPoint, UserPoint: user });
        setIsButtonClicked(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="Details" type="number" placeholder="גובה התגמול" onChange={(e) => setUser({ ...user, CouponAmount: e.target.value })}></input >
                <br /><input className="Details" type="datetime-local" placeholder="תאריך יעד" onChange={(e) => setUser({ ...user, DueDate: e.target.value })}></input>
                <br />
                <button id='enterButton' onClick={handleButtonClick}>להוספת הנקודה</button>
            </form >
        </>
    )
}