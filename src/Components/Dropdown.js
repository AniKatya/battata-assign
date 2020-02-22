import React, { Component } from 'react';

class Dropdown extends Component {
    dropdownChange = (event) => {
        this.props.dropdownChange(this.props.title, event.target.value.toString())
    }
    render() {
        return (
            <div className="card-container">
                <div className="card-content">
                    <div className="card-title">{this.props.title}</div>
                    <div className="dropdown">
                    <select className="option"id={this.props.title} onChange={this.dropdownChange}>
                        {this.props.options.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                    </div>
                </div>
            </div>
        )


    }
}
export default Dropdown;