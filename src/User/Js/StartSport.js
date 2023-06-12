import axios from "axios";
import { useEffect } from "react";
import "../Css/GeneralCss.css";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function StartSport() {
    const navigate = useNavigate();
    const [wonPoints, setWonPoints] = useState(0);
    const [numWonPoints, setNumWonPoints] = useState(0);

    const [sportActivity, setSportActivity] = useState({
        activityId: 0,
        userId: 2, //localStorage.getItem('userId')),
        user: null,
        startDate: null,
        completionDate: null,
        totalKilometers: 0,
        totalSteps: 0,
    });

    useEffect(() => {
        console.log('Button clicked!');
        debugger
        axios.post("https://localhost:7192/api/SportsActivities", sportActivity)
            .then((response) => {
                localStorage.setItem('sportId', response.data.activityId);
                setSportActivity({ ...sportActivity, activityId: response.data.activityId });
                setSportActivity({ ...sportActivity, startDate: response.data.startDate });
                setSportActivity({ ...sportActivity, completionDate: response.data.completionDate });
                alert("OK");
            }).catch((err) => {
                console.log(err);
                alert("Error");
            })
    }, []);

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (isButtonClicked) {
            console.log('Button clicked!');
            axios.put("https://localhost:7192/api/SportsActivities", sportActivity)
                .then((response) => {
                    navigate('/UserRegistration/UserMenuPage/StartSport/SportActivityDetails', {
                        state:
                        {
                            sportActivity: sportActivity,
                            wonPoints: wonPoints,
                            numWonPoints: numWonPoints
                        }
                    });
                    alert("OK");
                }).catch((err) => {
                    console.log(err);
                })
        }
    }, [isButtonClicked]);

    const [startTime, setStartTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDiff = Math.floor((currentTime - startTime) / 1000);

            const hours = Math.floor(timeDiff / 3600);
            const minutes = Math.floor((timeDiff % 3600) / 60);
            const seconds = Math.floor(timeDiff % 60);

            setElapsedTime({ hours: hours, minutes: minutes, seconds: seconds });
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [startTime]);

    function StopSportActivity() {
        // setSportActivity({ ...sportActivity, totalKilometers:___})
        // setSportActivity({ ...sportActivity, totalSteps:___})
        setIsButtonClicked(true);
    }

    return (
        <>
            <div>
                <span>מספר צעדים:  </span>
            </div>
            <div>
                <span>מספר קילומטרים:  </span>
            </div>
            <div>
                <span>זמן הליכה:  </span>{elapsedTime.hours}:{elapsedTime.minutes}:{elapsedTime.seconds}
            </div>
            <button onClick={StopSportActivity}>לסיום הפעילות</button>
        </>
    )
}