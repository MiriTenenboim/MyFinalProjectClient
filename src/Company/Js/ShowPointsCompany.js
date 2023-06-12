import axios from "axios";
import { useEffect, useState } from "react";
import "./ShowPointsCompany.css";

export default function ShowPointsCompany(){

    const [list,setList] = useState([{}]);
    var companyId = 2;//localStorage.getItem('companyId'))

    useEffect(() => {
            console.log('Button clicked!');
            debugger
            axios.get("https://localhost:7192/api/PointsDetails/1," + companyId)
                .then((response) => {
                    if (response.data != '')
                    {
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

    function UpdatePointDetails(){

    }

    return(
        <>
            {list && list[0] && list[0].companyPointId &&
              <table>
                <tr>
                    <th></th>
                    <th>X מיקום הנקודה</th>
                    <th>Y מיקום הנקודה</th>
                    <th>גובה התגמול</th>
                    <th>מומשה / לא מומשה</th>
                    <th>שם הזוכה</th>
                </tr>
                {list.map((item, index) => (
                <tr key={index}>
                   <td>{index}</td>
                   <td>{item.pointX.toFixed(6)}</td>
                   <td>{item.pointY.toFixed(6)}</td>
                   <td>{item.companyPoint.coupon.couponDetail}</td>
                   <td>{item.isRealized? "מומשה": "לא מומשה"}</td>
                   <td>{item.isRealized? item.winningUser.userName: <button onClick={UpdatePointDetails}>עדכון פרטי נקודה</button>}</td>
                </tr>
             ))}
            </table>
            }
        </>
    )
}
