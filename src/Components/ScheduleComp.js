import React, { Component } from 'react';

class ScheduleComp extends Component {
    state = {
        scheduleBool: this.props.impact
    }

    handleImpactChange = (changeEvent) => {
        let newBool = changeEvent.target.value === "yes" ? true : false;
        this.setState({ scheduleBool: newBool }, function () {
            this.props.impactChange(this.state.scheduleBool)
        });
    }
    render() {
        const label = this.state.scheduleBool;
        const chosenBool = label === true ? "Yes" : "No";
        return (
            <div className="card-container schedule-impact">
                <div className="card-content">
                    <div className="card-title">schedule impact</div>
                    {this.props.buttonClicked ? <div className="yes-no-label">{chosenBool}</div> :
                        <div className="yes-no-div">
                            <div className="yes-no-label yes-label">Yes</div>
                            <div className="yes-no-label no-label">No</div>
                            <input className="yes-radio" type="radio" value="yes" checked={this.state.scheduleBool === true} onChange={this.handleImpactChange} />
                            <input className="no-radio" type="radio" value="no" checked={this.state.scheduleBool === false} onChange={this.handleImpactChange} />
                        </div>}
                </div>
            </div>

        );


    }
}
export default ScheduleComp;