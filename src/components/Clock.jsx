import React from 'react';
import FormattedDate from './FormattedDate';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            ()=>this.tick(),
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, universe!</h1>
                <FormattedDate date={this.state.date}/>
                {/* <h2>It is { this.state.date.toLocaleTimeString() }.</h2> */}
            </div>
        );
    }
}

export default Clock;