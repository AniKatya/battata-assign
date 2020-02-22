
import React, { Component } from 'react';

class ReasonComp extends Component {
    changeReason = (event) => {
        this.props.changeReason(event.target.value)
    }
    render() {
        return (
            <div className="card-container reason-card">
                <div className="card-content">
                    <div className="card-title">reason</div>
                    <input id="reason-input-field" type="text" onChange={this.changeReason}></input>
                </div>
            </div>
        );
    }
}

export default ReasonComp;