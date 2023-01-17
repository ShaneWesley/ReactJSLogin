import './login.css';

function Login() {
    return (
        <div className="background">
            <div className="rounded-square">
                <div className="container" >
                    <div className="logo" />
                    <form className="inputs-container">
                        <input className="text-box" type="text" name="name" placeholder="Email" />
                        <input className="text-box" type="text" name="password" placeholder="Password" />
                        <div className="button-container">
                            <label className="checkbox">
                                <input type="checkbox" name="rememberPassword" />
                                Remember Me
                            </label>
                            <button onClick={OnLogin}>Login</button>
                        </div>
                    </form>
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