import React from 'react';
import './Info.css';
import logo from './img/logo.png'

function Info() {
    return (
        <div className="info">
            <div>
                <h1 className="info__header">My historia</h1>
                <p className="info__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <img src={logo} alt="logo" className="info__img"/>
        </div>
    )
}

export default Info
