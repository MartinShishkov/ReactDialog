import React from "react";
import { FullscreenDialog } from "../atoms/FullscreenDialog";

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            parentDialogOpened: true,
            childDialogOpened: false
        };

        this.handleShowDialog = this.handleShowDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    render(){
        return (
            <div>
                <button onClick={() => { this.handleShowDialog("parentDialog"); }}>
                    {"show dialog"}
                </button>

                <FullscreenDialog
                    title={"parent dialog"}
                    isOpened={this.state.parentDialogOpened}
                    onClose={() => { this.handleCloseDialog("parentDialog"); }}>
                    <p>{"this is the dialog"}</p>
                    <button onClick={() => { this.handleShowDialog("childDialog"); }}>
                        {"Whoop! Open the other dialog, nigga!"}
                    </button>

                    <FullscreenDialog
                        title={"child dialog"}
                        isOpened={this.state.childDialogOpened}
                        onClose={() => { this.handleCloseDialog("childDialog"); }}>
                        <h2>{"Hell yeah, baby!"}</h2>
                    </FullscreenDialog>
                </FullscreenDialog>
            </div>
        );
    }

    handleShowDialog(dialog){
        this.setState({
            [`${dialog}Opened`]: true
        });
    }

    handleCloseDialog(dialog){
        this.setState({
            [`${dialog}Opened`]: false
        });
    }
}

export { HomePage };