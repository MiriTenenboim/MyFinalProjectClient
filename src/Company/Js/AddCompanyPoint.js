import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export default function AddCompanyPoint() {
    const navigate = useNavigate();
    const location = useLocation()

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
        //console.log(`Username: ${username}, Password: ${password}`);
    }

    const point = location.state.point;

    const [newPoint, setNewPoint] = useState(location.state.newPoint);

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [points, setPoints] = useState([{}]);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            debugger
            axios.post("https://localhost:7192/api/PointsDetails", newPoint)
                .then((response) => {
                    if (response.data != '') {
                        // setPoints(...point, { lat: response.data.pointX, lng: response.data.pointY })
                        setPoints(prevPoints => [
                            ...prevPoints,
                            { lat: response.data.pointX, lng: response.data.pointY }
                        ]);
                        alert("OK");
                    }
                }).catch((err) => {
                    alert("Error!");
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    function handleButtonClick() {
        setIsButtonClicked(true);
    }

    debugger
    return (
        <>
            <table>
                <tr>
                    <th></th>
                    <th>X מיקום הנקודה</th>
                    <th>Y מיקום הנקודה</th>
                </tr>
                {points.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item.pointX}</td>
                        <td>{item.pointY}</td>
                    </tr>
                ))}
            </table>
            <button id='enterButton' onClick={handleButtonClick}>להוספת הנקודה</button>
            <button id='enterButton' onClick={() => navigate('/CompanyRegistration/CompanyMenuPage/CompanyPointDetails/ChooseLocationCompany', { state: { point: location.state.newPoint } })}>להוספת מיקום נוסף לתגמול</button>
        </>
    )
}
