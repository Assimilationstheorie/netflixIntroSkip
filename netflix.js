function netflix() {
    if(document.getElementsByClassName("skip-credits").length > 0) {
        document.getElementsByClassName("skip-credits")[0].children[0].click();
    }
}
setInterval(netflix, 3000);