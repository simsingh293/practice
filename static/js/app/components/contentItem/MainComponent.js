import React, { PropTypes } from 'react'

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Testing this muthafucka</h1>
                {this.props.children}
            </div>
        )
    }
}

export default MainComponent;