import React, { Component } from 'react';

class ReasonComp extends Component {
    changeAuthor = (event) => {
        this.props.changeAuthor(event.target.value)
    }
   
    render() {
        return (
            <div className="card-container author-container">
                <div className="card-content">
                    <div className="card-title">change author</div>
                    <input id="author-input-field" type="text" onChange={this.changeAuthor}></input>
                </div>
            </div>
        );
    }
}

export default ReasonComp;