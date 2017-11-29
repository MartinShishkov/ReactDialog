class DialogService{
    constructor(onStackChanged){
        this.dialogStack = [];
        this.onStackChanged = onStackChanged;

        window.addEventListener("popstate", () => {
            this.dialogStack.pop();
            this.onStackChanged();
        }, false);
    }

    pushDialog(dialog){
        this.dialogStack.push(dialog);
        window.history.pushState(`dialog${this.dialogStack.length}`, null, null);

        this.onStackChanged();
    }

    popDialog(){
        window.history.back(1);

        this.onStackChanged();
    }

    topLevelDialog(){
        if(this.dialogStack.length !== 0){
            return this.dialogStack[this.dialogStack.length - 1];
        }

        return null;
    }
}

export { DialogService };