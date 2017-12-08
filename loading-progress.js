const colors = require('colors/safe');
let internalText, internalTimer, currentRows, currentColumns, internalPercentage = 0, internalTheme;
class LoadingProgress{
    constructor(text = '', theme = 'green'){
        internalTheme = theme;
        internalText = text;
        internalTimer = setInterval(() => {
            if(process.stdout.rows != currentRows || process.stdout.columns != currentColumns){
                currentRows = process.stdout.rows;
                currentColumns = process.stdout.columns;
                this.update(internalPercentage);
            }
        }, 10);
    }
    update(percentage){
        let i;
        internalPercentage = percentage;
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        for(i = 0; i < Math.round(process.stdout.columns * percentage / 100); i++){
            if (i < internalText.length){
                process.stdout.write(colors[internalTheme]['inverse'](internalText[i]));
            } else {
                process.stdout.write(colors[internalTheme]['inverse'](' '));
            }
        }
        for(; i < internalText.length; i++){
            process.stdout.write(internalText[i]);
        }
    }
    updateText(text){
        internalText = text;
        this.update(internalPercentage);
    }
    updateTheme(color){
        internalTheme = color;
        this.update(internalPercentage);
    }
    done(text = ''){
        internalPercentage = 0;
        clearInterval(internalTimer);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        console.log(text);
    }
}
module.exports = LoadingProgress;