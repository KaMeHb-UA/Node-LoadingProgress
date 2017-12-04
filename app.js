// █ 1.0%
// ▌ 0.5% - протестировать в консолях. На некоторых не совпадает по высоте
const colors = require('colors/safe');
console.log(colors.stripColors(colors.bgGreen(' ')));
colors.getTheme()
/*
let internalFiller, internalText, internalTimer, currentRows, currentColumns, internalPercentage = 0;
class LoadingProgress{
    constructor(text = '', filler = colors.bgGreen(' ')){
        internalFiller = filler;
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
        internalPercentage = percentage;
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        for(var i = 0; i < Math.round(process.stdout.columns * percentage / 100); i++){
            process.stdout.write(internalFiller);
        }
        process.stdout.cursorTo(0);
        process.stdout.write(internalText);
    }
    done(text = ''){
        internalPercentage = 0;
        clearInterval(internalTimer);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        console.log(text);
    }
}
var loading = new LoadingProgress('Loading... This is a sample text used for testing');
setTimeout(() => {
    loading.update(20);
}, 1000);
setTimeout(() => {
    loading.update(40);
}, 2000);
setTimeout(() => {
    loading.update(60);
}, 3000);
setTimeout(() => {
    loading.update(80);
}, 4000);
setTimeout(() => {
    loading.update(100);
}, 5000);
setTimeout(() => {
    loading.done();
}, 6000);
//*/