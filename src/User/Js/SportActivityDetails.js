import { useLocation } from "react-router";

export default function SportActivityDetails() {
    const location = useLocation();
    var sportActivity = location.state.sportActivity;
    var wonPoints = location.state.wonPoints;
    var numWonPoints = location.state.numWonPoints;
    return (
        <>
            <div>פרטי פעילות ספורט</div>
            <div>
                <div>{sportActivity.startDate.split('T')[0]} {sportActivity.startDate.split('T')[1].split('.')[0]} <span className="Label">:תאריך ושעת התחלה</span></div>
                <div>{sportActivity.completionDate.split('T')[0]} {sportActivity.completionDate.split('T')[1].split('.')[0]} <span className="Label">:תאריך ושעת סיום</span></div>
                <div>{sportActivity.totalKilometers} <span className="Label">:סך הכל קילומטרים</span></div>
                <div>{sportActivity.totalSteps} <span className="Label">:סך הכל מספר צעדים</span></div>
                <div>{wonPoints} <span className="Label">:סך הכל סכום הזכיה</span></div>
                <div>{numWonPoints} <span className="Label">:סך הכל מספר הנקודות בהם זכה</span></div>
            </div>
        </>
    )
}