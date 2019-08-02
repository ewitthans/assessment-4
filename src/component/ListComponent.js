import React, { Component } from 'react';

export default class ListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }


    render() {
        return (
            <div className="Container">
                <div>
                    List:
                </div>
            </div>
        )
    }
}