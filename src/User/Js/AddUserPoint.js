import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../Css/GeneralCss.css';

export default function AddUserPoint() {
    const location = useLocation();
    debugger
    const navigate = useNavigate();

    const point = location.state.point;

    function handleSubmit(event) {
        event.preventDefault();
    }

    const [user, setUser] = useState({
        UserId: 2, //localStorage.getItem('userId'),
        CouponAmount: 0,
        DueDate: null
    })

    const [newPoint, setNewPoint] = useState({
        PointX: point.lat,  //,32.052890
        PointY: point.lng,  //,34.962675
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
    debugger

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            axios.post("https://localhost:7192/api/PointsDetails", newPoint)
                .then((response) => {
                    // setList(response.data);
                    //localStorage.setItem('pointId', response.data);
                    if (response.data != '')
                       alert("OK");
                       navigate('/AddUserPoint/UserMenuPage');
                }).catch((err) => {
                    alert("Error!");
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        setNewPoint({ ...newPoint, UserPoint: user });
        setIsButtonClicked(true);
        // console.log('Button clicked!');
        // axios.post("https://localhost:7192/api/PointsDetails", newPoint)
        //     .then((response) => {
        //         // setList(response.data);
        //         //localStorage.setItem('pointId', response.data);
        //         if (response.data != '')
        //             alert("OK");
        //     }).catch((err) => {
        //         alert("Error!");
        //         console.log(err);
        //     })
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
