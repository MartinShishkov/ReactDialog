import React from "react";
import { FullscreenDialog } from "../atoms/FullscreenDialog";
import { DialogService } from "../logic/DialogService";
import { ComplexComponent } from "../molecules/ComplexComponent";

class HomePage extends React.Component{
    constructor(props){
        super(props);      

        this.dialogService = new DialogService(() => this.forceUpdate());
    }

    render(){
        const dialog = this.dialogService.topLevelDialog();
        
        if(dialog !== null){
            return dialog;
        }

        return (
            <div>
                <button onClick={() => { 
                    const dialog = (
                        <FullscreenDialog dialogService={this.dialogService}>
                            <h1>some dialog</h1>
                            <ComplexComponent dialogService={this.dialogService}/>
                        </FullscreenDialog>
                    );

                    this.dialogService.pushDialog(dialog);
                }}>
                    {"show dialog"}
                </button>                
            </div>
        );
    }  
}

export { HomePage };