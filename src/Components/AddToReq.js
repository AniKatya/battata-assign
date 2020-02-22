import React, { Component } from 'react';

class AddToReq extends Component {
    state = {
        addBool: this.props.added
    }

    handleImpactChange = (changeEvent) => {
        let newBool = changeEvent.target.value === "yes" ? true : false;
        this.setState({ addBool: newBool }, function () {
            this.props.addedChange(this.state.addBool)
        });
    }
    render() {
        const label = this.state.addBool;
        const chosenBool = label === true ? "Yes" : "No";
        return (
            <div className="card-container schedule-impact">
                <div className="card-content">
                    <div className="card-title">Add to Req</div>
                    {this.props.buttonClicked ? <div className="yes-no-label">{chosenBool}</div> :
                        <div className="yes-no-div">
                            <div className="yes-no-label yes-label">Yes</div>
                            <div className="yes-no-label no-label">No</div>
                            <input className="yes-radio" type="radio" value="yes" checked={this.state.addBool === true} onChange={this.handleImpactChange} />
                            <input className="no-radio" type="radio" value="no" checked={this.state.addBool === false} onChange={this.handleImpactChange} />
                        </div>}
                </div>
            </div>

        );

    }
}
export default AddToReq;


/*{this.props.buttonClicked ? label:

              <table>
                  <thead>
                      <tr className = "yes-no-label">
                          <td>Yes</td>
                          <td>No</td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input type="radio" key="yes" value="true" checked={this.state.addBool===true} onChange={this.handleAddChange} /></td>
                          <td><input type="radio" key="no" value="false" checked={this.state.addBool===false} onChange={this.handleAddChange} /></td>
                      </tr>
                  </tbody>
              </table>}*/