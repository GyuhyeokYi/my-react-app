import React from 'react';

const ThemeContext = React.createContext('light');

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function Button(props) {
    return (
        <div>
            <button onClick={props.handleOnClick}>{props.theme}</button>
        </div>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        alert(this.context + ':' + e.type);
        console.log(e);
    }
    
    render() {
        return (
            <Button theme={this.context}
                    handleOnClick={this.handleOnClick}
                />
        )
    }
}

export default App;