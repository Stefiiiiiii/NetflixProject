import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const myUser = 'stefania@gmail.com';
    const myPass = '123456';
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    const [isError, setIsError] = useState(false);

    function loginFunc(e) {
        e.preventDefault();
        if (emailUser === myUser && myPass === passwordUser) {
            navigate('/home');
        } else {
            setIsError(true);
        }
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <Link to="/">
                        <img
                            className="logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
                            alt=""
                        ></img>
                    </Link>
                </div>
            </div>
            <div className="container">
                <form onSubmit={loginFunc}>
                    <h1>Sign In</h1>
                    <div className="error" style={{ display: isError ? 'flex' : 'none' }}>
                        <div>
                            <ErrorOutlineOutlinedIcon className="errorIcon" />
                        </div>
                        <div>
                            <span>
                                Sorry, we can't find this account. Please try again or create a new
                                account
                            </span>
                        </div>
                    </div>
                    <input
                        required
                        type="email"
                        placeholder="Email or phone number"
                        onChange={(e) => {
                            // console.log(e);
                            setEmailUser(e.target.value);
                        }}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPasswordUser(e.target.value);
                        }}
                    />
                    <button type="submit" className="loginButton">
                        Sign In
                    </button>
                    <span className="signUp">
                        New to Netflix?{' '}
                        <Link to="/">
                            <b>Sign up now</b>
                        </Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                        <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
}
