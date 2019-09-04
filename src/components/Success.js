import React, { Component } from 'react'

export default class Success extends Component {
    render() {
        return (
            <div>
                 <div className={this.props.status}>
                    <strong>{this.props.content}</strong>
                </div>
            </div>
        )
    }
}
