function netflix() {
    if(document.getElementsByClassName("watch-video--skip-content")[0]) {
        document.getElementsByClassName("watch-video--skip-content-button")[0].click();
    }
}
setInterval(netflix, 3000);