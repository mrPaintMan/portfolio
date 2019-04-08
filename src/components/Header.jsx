import React from "react";
import ReactDOM from "react-dom";
import "./css/Header.css";
import BackgroundPic from "../assets/background.png"
import mePic from "../assets/me.png"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover: false};
    }

    


    render() {
        return (
            <div className="header">
                
                <div className="menu">
                    <div className="menu_item">Filip</div>
                    <img src={mePic} className="mePic" alt=""/>
                    <div className="menu_item">Palmqvist</div>
                </div>

                <img src={BackgroundPic} className="backPic" alt=""/>
            </div>
        );
    }
}

export default Header;