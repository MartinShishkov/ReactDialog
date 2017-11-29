import React from "react";
import { FullscreenDialog } from "../atoms/FullscreenDialog";

class ComplexComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>             
                <button onClick={() => {
                    const dialog = (
                        <FullscreenDialog
                            dialogService={this.props.dialogService}
                            title={"Inner Dialog"}>
                            <h1>{"This is the inner dialog!"}</h1>
                            <a href={"https://www.google.bg"}>
                                <h3>{"go to google"}</h3>
                            </a>
                        </FullscreenDialog>
                    );

                    this.props.dialogService.pushDialog(dialog); 
                }}>
                    {"Open the inner dialog!"}
                </button>
            </div>
        );
    }
}

export { ComplexComponent };