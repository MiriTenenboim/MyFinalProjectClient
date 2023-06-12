export default function NavPageCompany() {
    return (
        <>
            <button>עדכון פרטים אישיים</button>
            <button>הוספת נקודת יעד</button>
            <button>צפייה בנקודות יעד קודמות</button>
            <button>צפייה בזכיות קודמות</button>
            {/* אם יש למשתמש יעד שעוד לא מימש ולא עבר זמנו */}
            <button>התחלת פעילות ספורט</button>
            {/* אם המשתמש זכאי תנתן האפשרות הבאה */}
            <button>יצירת מסלול כדאי</button>
        </>
    )
}