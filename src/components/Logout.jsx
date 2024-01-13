import { GoogleLogout } from 'react-google-login'

const clientId = '314682349715-vvl2mgqregs4hokcnsmkhu8s796ru1da.apps.googleusercontent.com';

function Logout() {
    
    const onSuccess = () => {
        console.log("Log out successfull!")
    }

    return (
        <div id="signOutButton">
                <GoogleLogout
                    clientId={clientId}
                    buttonText='Login'
                    onLogoutSuccess={onSuccess}
                />
            </div>
    )
}

export default Logout;