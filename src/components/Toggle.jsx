import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            counter: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick2() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            counter: prevState.counter + 1,
        }));
    }

    handleClick = (e)=> {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            counter: prevState.counter + 1,
        }));
        console.log(e);
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON': 'OFF'}
                </button>
                <div> {this.state.counter} </div>
            </div>
        )
    }
}

export default Toggle;