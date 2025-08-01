import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div style={styles.container}>
            <h1>🎉 خوش آمدید به داشبورد!</h1>
            <p>توکن شما:</p>
            <textarea value={token} readOnly style={styles.textarea} />
            <button onClick={handleLogout} style={styles.button}>خروج</button>
        </div>
    );
};

const styles = {
    container: {
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#f0f4f8",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "50px auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    },
    textarea: {
        width: "100%",
        height: "100px",
        marginTop: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        resize: "none"
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#e63946",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
};

export default Dashboard;
