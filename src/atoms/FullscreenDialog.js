import React from "react";

class FullscreenDialog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.isOpened){
            return null;
        }
        
        return (
            <div style={this._css().container}>
                <div style={this._css().bar}>
                    <button onClick={this.props.onClose} style={this._css().closeBtn}>{"X"}</button>
                    <span style={this._css().barTitle}>{this.props.title}</span>
                </div>
                {this.props.children}
            </div>
        );
    }

    _css(){
        return {
            container: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                paddingTop: "60px",
                backgroundColor: "green"
            },
            bar: {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "60px",
                backgroundColor: "yellow"
            },
            closeBtn: {
                width: "60px",
                height: "60px",
                fontSize: "22pt",
                borderStyle: "none",
                backgroundColor: "transparent"
            },
            barTitle: {
                position: "absolute",
                lineHeight: "60px",
                fontSize: "16pt"
            }
        }
    }
}

export { FullscreenDialog };