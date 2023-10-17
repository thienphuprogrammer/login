const Background = () => {
    return (
        <div className="background">
            <section className="home">
                <div className="content">
                    <a href="" className="logo">
                        <i className="fa-solid fa-paper-plane"></i>
                        Codehal
                    </a>
                    <h2 className="">Welcome</h2>
                    <h3>To Our New Website</h3>
                    <pre>Lorem ipsum, dolor sit amen consenter adipisicing elit. Beatae,asperiores</pre>
                    <div className="content__icon">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
                <div className="login">
                    <h2>Login </h2>
                    <div className="input">
                        <input type="text" placeholder="Email" className="input1" required/>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="input">
                        <input type="password" placeholder="Password" className="input1" required/>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="check">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className="button">
                        <button className="btn">Sign in</button>
                    </div>
                    <div className="sign-up">
                        <p>Don't have an account?</p>
                        <a href="#">Sign up</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Background;
