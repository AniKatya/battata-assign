import React, { Component } from 'react';

class StatusComp extends Component {
    state = {
        changeDate: false,
        date: this.props.date
    }
    changeDate = () => {
        this.setState({
            changeDate: !this.state.changeDate
        })
    }

    setNewDate = () => {
        const date = this.inputNode.value;
        const day = date.substr(8,2);
        const month = date.substr(5,2);
        const year = date.substr(0,4);
        const formattedDate = day+"/"+month+"/"+year;
        this.setState({
            date: formattedDate
        }, function () {
            this.props.setStatusDate(this.inputNode.value)
            this.setState({ changeDate: !this.state.changeDate })
        })
    }

    render() {
        return (
            <div className="card-container statusChangeDate">
                <div className="card-content">
                    <div className="card-title">status change</div>
                    {this.state.changeDate ? <input type="date" ref={node => (this.inputNode = node)} onChange={this.setNewDate} /> :
                        <div id="change-date" onClick={this.changeDate}>{this.state.date}</div>}
                </div>
            </div>
        );
    }
}

export default StatusComp;