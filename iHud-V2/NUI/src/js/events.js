const manageData = (event) => {
    let e = event.data;

    switch (e.type) {
        case "init":
            initHud(e.config);
            break;
        case "showHud":
            showHud(e.show);
            break;
        case "toogleMicro":
            toogleMicro(e.show);
            break;
        case "changeMicro":
            changeMicroProx(e.add, e.classes); /* micro proximity */
            break;
        case "updateStatus":
            updateStatus(e.status);
            break;
        case "updateJob":
            updateJob(e.jobs);
            break;
        case "updateMoney":
            updateMoney(e.moneys);
            break;
        default: 
            break;
    }
}

window.addEventListener("message", manageData);