import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import "../index.css";
import Header from "../components/Header.jsx";

class Container extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<Container />,document.getElementById("root"));