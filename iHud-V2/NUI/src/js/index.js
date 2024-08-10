// showHud
const huds = document.querySelectorAll(".hud");
const showHud = (boolean) => {
    for (let i = 0; i < huds.length; i++) {
        let el = huds[i];
        (boolean === true) ? el.classList.add("show") : el.classList.remove("show");
    }
}

// toogleMicro && changeMicroProx
const voices = document.querySelector(".voices");
const toogleMicro = (boolean) => (boolean === true) ? voices.classList.add("show") : voices.classList.remove("show");
const changeMicroProx = (type, cls) => (type === "add") ? voices.classList.add(cls) : voices.classList.remove(cls);

// updateStatus
const calcHeight = (pourcentage) => pourcentage * Config.sizeIcon / 100;

const changeHeightInput = document.getElementById("changeHeightInput");
const breadHeight = document.getElementById("breadHeight");
const waterHeight = document.getElementById("waterHeight");

const hungerText = document.getElementById("hungerText");
const thirstText = document.getElementById("thirstText");

const updateStatus = (status) => {
    const HUNGER = status[0].percent;
    let THIRST = status[1].percent;
    let HEIGHT_HUNGER = calcHeight(HUNGER);
    let HEIGHT_THIRST = calcHeight(THIRST);
    
    // HEIGHT PROGRESS BAR IN "PX"
    breadHeight.style.height = `${HEIGHT_HUNGER}px`;
    waterHeight.style.height = `${HEIGHT_THIRST}px`;
    // TEXT IN "%"
    hungerText.innerText = `${HUNGER}%`;
    thirstText.innerText = `${THIRST}%`;
}

// updateJob
const firstJob = document.getElementById("firstJob");
const doubleJob = document.getElementById("doubleJob");

const updateJob = (jobs) => {
    const job = jobs[0];
    const job2 = jobs[1];

    firstJob.innerHTML = `${job.label}<span class="grade">${job.grade_label}</span>`;
    doubleJob.innerHTML = `${job2.label}<span class="grade">${job2.grade_label}</span>`;
}

// updateMoney
const moneyLiquid = document.getElementById("moneyLiquid");
const moneyDirty = document.getElementById("moneyDirty");

const updateMoney = (moneys) => {
    const liquid = moneys[0];
    const dirty = moneys[1];

    moneyLiquid.innerHTML = `${liquid.label}<span class="grade">${liquid.value.toLocaleString()}$</span>`;
    moneyDirty.innerHTML = `${dirty.label}<span class="grade">${dirty.value.toLocaleString()}$</span>`;
}

const job_conteneur = document.getElementById("job_conteneur");
const job2_conteneur = document.getElementById("job2_conteneur");
const money_rect = document.getElementById("money_rect");
const black_money_rect = document.getElementById("black_money_rect");
const micro_rect = document.getElementById("micro_rect");

const initHud = (config = {
    JOB: boolean,
    JOB2: boolean,
    MONEY: boolean,
    BLACK_MONEY: boolean,
    MICRO: boolean,
}) => {
    if (!config.JOB) job_conteneur.style.display = "none";
    if (!config.JOB2) job2_conteneur.style.display = "none";
    if (!config.MONEY) money_rect.style.display = "none";
    if (!config.BLACK_MONEY) black_money_rect.style.display = "none";
    if (!config.MICRO) micro_rect.style.display = "none";
}