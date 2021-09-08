function netflix() {
    if(document.getElementsByClassName("ltr-1vr1ods").length > 0) {
        document.getElementsByClassName("ltr-1vr1ods")[0].click()
    }
}
setInterval(netflix, 3000);