import './SignUp.css';

function SignUp() {
    return (
        <div className="background">
            <div className="rounded-square sign-in">
                <div className="container">
                    <form>
                        <h2>Sign Up</h2>
                        <input className="text-box" type="text" name="name" placeholder="First Name" />
                        <input className="text-box" type="text" name="name" placeholder="Last Name" />
                        <input className="text-box" type="text" name="name" placeholder="Email" />
                        <input className="text-box" type="text" name="name" placeholder="Password" />
                        <input className="text-box" type="text" name="name" placeholder="Contact Number" />
                        <div className="button-container">
                            <button onClick={OnSignUp}>Sign Up</button>
                        </div>
                    </form>
                    <div className="link-container sign-in">
                        <a className="link" href="/login">Already have an account?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OnSignUp() {
    alert("Signed Up.");
}

export default SignUp;