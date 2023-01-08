import './Login.css';

function Login() {
    return (
        <div className="container">
            <div className="login">
                <div className="button-container">
                    <button className="button" onClick={OnLogin}>Login</button>
                    <button className="button" onClick={OnSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

function OnLogin() {
    alert("Attempting to login...");
}

function OnSignUp() {
    alert("Attempting to sign up...");
}

export default Login;