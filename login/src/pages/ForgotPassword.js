import './ForgotPassword.css';

function ForgotPassword() {
    return (
        <div className="background">
            <div className="rounded-square forgot-password">
                <div className="container">
                    <p>Enter the email address associated with your account and we will send you a link to reset your password</p>
                    <form>
                        <input className="text-box" type="text" name="name" placeholder="Email" />
                        <div className="button-container">
                            <button onClick={OnContinue}>Continue</button>
                        </div>
                    </form>
                    <div className="link-container forgot-password">
                        <a className="link" href="/login">Back to login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OnContinue() {
    alert("Email Sent");
}

export default ForgotPassword;