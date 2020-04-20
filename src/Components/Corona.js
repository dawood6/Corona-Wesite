import React, { Component, Fragment } from 'react'
import CoronaImg from './images/Corona.png'
import './Corona.css'

export default class Corona extends Component {
    render() {
        return (
            <Fragment>
                <h1>Let's Stay Safe & Fight Together <br /> Against Cor<span className="corona_anime"><img src={CoronaImg} /></span>na Virus</h1>
            </Fragment>
        )
    }
}
