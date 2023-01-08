import './Login.css';

function Login() {
    return (
        <div className="container">
            <div className="login-background">
                <div className="login-container" >
                    <div className="button-container">
                        <button className="button" onClick={OnLogin}>Login</button>
                    </div>
                    <div className="link-container">
                        <a className="link" href="/sign-up">Dont have an account?</a>
                        <a className="link" href="/forgot-password">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OnLogin() {
    alert("Attempting to login...");
}

export default Login;