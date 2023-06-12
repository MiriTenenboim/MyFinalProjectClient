import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function CompanyPointDetails() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const [coupon, setCoupon] = useState({
        CouponId: 0,
        CouponDetail: 0,
        Advertisement: ""
    })

    const [company, setCompany] = useState({
        CompanyId: 2, //localStorage.getItem('userId'),
        CouponId: 0,
        Coupon: coupon
    })

    const [newPoint, setNewPoint] = useState({
        PointX: 0,//32.052890,//point.lat,
        PointY: 0,//34.962675,//point.lng,
        UserPointId: 1,
        UserPoint: null,
        CompanyPointId: 0,
        CompanyPoint: null,
        UserOrCompany: 1,
        IsRealized: false,
        PlacingDate: null,
        DateWon: null,
        WinningUserId: 1,
        WinningUser: null
    })

    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    // useEffect(() => {
    //     if (isButtonClicked) {
    //         console.log('Button clicked!');
    //         debugger
    //         axios.post("https://localhost:7192/api/PointsDetails", newPoint)
    //             .then((response) => {
    //                 if (response.data != '')
    //                 // מעבר לקומפוננטה
    //                    alert("OK");
    //             }).catch((err) => {
    //                 alert("Error!");
    //                 console.log(err);
    //             })
    //     }
    // }, [isButtonClicked]);

    function handleButtonClick() {
        setCompany({ ...company, Coupon: coupon });
        setNewPoint({ ...newPoint, CompanyPoint: company });
        navigate('/CompanyRegistration/CompanyMenuPage/CompanyPointDetails/ChooseLocationCompany', { state: { point: newPoint } })
        // setIsButtonClicked(true);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className="Details" type="number" placeholder="גובה התגמול" onChange={(e) => setCoupon({ ...coupon, CouponDetail: e.target.value })}></input >
                <br /><input className="Details" type="text" placeholder="פרטי תגמול" onChange={(e) => setCoupon({ ...coupon, Advertisement: e.target.value })}></input>
                <br />
                <button id='enterButton' onClick={handleButtonClick}>להוספת מיקום לתגמול</button>
            </form >
        </>
    )
}
