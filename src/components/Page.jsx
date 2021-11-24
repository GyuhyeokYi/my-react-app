import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWaring: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWaring: !state.showWaring,
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWaring}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWaring ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default Page;