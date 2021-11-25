function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(pros) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    } else {
        return <GuestGreeting/>;
    }
}

export default Greeting;