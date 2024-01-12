import { GoogleLogin } from 'react-google-login'

const clientId = '314682349715-vvl2mgqregs4hokcnsmkhu8s796ru1da.apps.googleusercontent.com';

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current User: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res)
    }


    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;