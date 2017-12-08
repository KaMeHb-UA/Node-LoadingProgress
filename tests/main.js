const LoadingProgress = require('../loading-progress'),
    onePercentLoadingTime = 100;

var loading = new LoadingProgress('Loading...', 'red');
for (let i = 1; i < 100; i++){
    setTimeout(() => {
        loading.update(i);
        if (i > 80) loading.updateTheme('green'); else if (i > 30) loading.updateTheme('yellow');
        loading.updateText('Loading... ' + i + '%');
    }, i * onePercentLoadingTime);
}
setTimeout(() => {
    loading.done('Loading... done');
}, 100 * onePercentLoadingTime);