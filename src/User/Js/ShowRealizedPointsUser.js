import axios from "axios";
import { useEffect, useState } from "react";
import "../Css/ShowPointsUser.css";

export default function ShowPointsUser() {

    const [list, setList] = useState([{}]);
    var userId = 2;//localStorage.getItem('userId'))

    useEffect(() => {
        console.log('Button clicked!');
        debugger
        axios.get("https://localhost:7192/api/PointsDetails/" + userId)
            .then((response) => {
                if (response.data != '') {
                    setList(response.data);
                    debugger
                    // מעבר לקומפוננטה
                    //alert("OK");
                }
            }).catch((err) => {
                alert("Error!");
                console.log(err);
            })
    }
        , []);

    function UpdatePointDetails() {

    }

    return (
        <>
            {list && list[0] && list[0].userPointId &&
                <table>
                    <tr>
                        <th></th>
                        <th>X מיקום הנקודה</th>
                        <th>Y מיקום הנקודה</th>
                        <th>גובה התגמול</th>
                        <th>תאריך ושעת זכיה</th>
                    </tr>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.pointX.toFixed(6)}</td>
                            <td>{item.pointY.toFixed(6)}</td>
                            <td>{item.userPoint ? item.userPoint.couponAmount : item.companyPoint.coupon.couponDetail}</td>
                            <td>{item.placingDate.split('T')[0]} , {item.placingDate.split('T')[1].split('.')[0]}</td>
                        </tr>
                    ))}
                </table>
            }
        </>
    )
}
