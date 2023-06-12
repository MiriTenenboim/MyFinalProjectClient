import { Table } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function CreateARoute() {
    const navigate = useNavigate();
    const [route, setRoute] = useState([{}]);
    useEffect(() => {
        console.log('Button clicked!');
        axios.get("https://localhost:7192/api/BestRoute")
            .then((response) => {
                if (response.data != '') {
                    setRoute(response.data);
                }
                else
                    alert("לא הצלחנו ליצור מסלול");
            }).catch((err) => {
                alert("Error!");
                console.log(err);
            })
    }, []);

    return (
        <>
            {/* שרטוט המסלול שהתקבל על המפה */}
            {/* <table>
                {route.length && route.map((item, index) => (
                    <tr>
                        <td>nodeId: {item.nodeId}</td>
                        <td>destinationNode: {item.destinationNode}</td>
                    </tr>
                ))}
            </table> */}
            {
                route.length &&
                navigate('/UserRegistration/UserMenuPage/CreateARoute/ShowRoute', { state: { points: route } })
            }
        </>
    )
}