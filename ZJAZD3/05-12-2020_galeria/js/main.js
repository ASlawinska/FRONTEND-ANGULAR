// document.getElementById("sklep_smyk").addEventListener("click", moveUp);
// const sklep_smyk_cube = [document.querySelector("#gora"), document.querySelector("#przod"), document.querySelector("#bok")];
// // const sklep_smyk_cube = [gora,przod,bok];

// function moveUp() {

//     sklep_smyk_cube.forEach(function(item){
//         item.style = "";
//     })

    

//     if (document.getElementById("sklep_smyk").classList.contains("moveUp")) {
//         document.getElementById("sklep_smyk").classList = "";
//         document.getElementById("sklep_smyk").classList.add("moveDown");
//     } else {
//         document.getElementById("sklep_smyk").classList = "";
//         document.getElementById("sklep_smyk").classList.add("moveUp");
//     }
// }
const disappear = [TXM, MartesSport, NeoNet, PepCo, CCC];
const disappearInfo = [TXMInfo, MartesSportInfo, NeoNetInfo, PepCoInfo, CCCInfo];

disappearInfo.forEach(item => {
    item.classList.add("disappear");
})
///////////////////// CCC /////////////////////
document.getElementById("CCC").addEventListener("click", CCCFunction);

function CCCFunction() {
    
    const CCCCube = [CCCGora, CCCPrzod, CCCBok];

    CCCCube.forEach(function(item){
        item.style = "";
    })

    if (document.getElementById("CCC").classList.contains("moveUp")) {
        document.getElementById("CCC").classList.remove("moveUp");
        document.getElementById("CCC").classList.add("moveDown");
        document.getElementById("CCCInfo").classList.add("disappear");
    } else {
        document.getElementById("CCC").classList.add("moveUp");
        document.getElementById("CCC").classList.remove("moveDown");
        document.getElementById("CCCInfo").classList.remove("disappear");


        const currentCubeInfo = document.getElementById("CCCInfo");
        const itemsWithoutCurrentCubeInfo = disappearInfo.filter(x => x !== currentCubeInfo)
        
        itemsWithoutCurrentCubeInfo.forEach(item => {
            item.classList = "";
            item.classList.add("disappear");
        })

        const currentCube = document.getElementById("CCC");
        const itemsWithoutCurrentCube = disappear.filter(x => x !== currentCube)
        
        itemsWithoutCurrentCube.forEach(item => {
            item.classList = "";
            item.classList.add("moveDown");
        })

    }
fu
///////////////////// PEP CO /////////////////////
document.getElementById("PepCo").addEventListener("click", PepCoFunction);

function PepCoFunction() {
    
    const PepCoCube = [PepCoGora, PepCoPrzod, PepCoBok];

    PepCoCube.forEach(function(item){
        item.style = "";
    })

    if (document.getElementById("PepCo").classList.contains("moveUp")) {
        document.getElementById("PepCo").classList.remove("moveUp");
        document.getElementById("PepCo").classList.add("moveDown");
        document.getElementById("PepCoInfo").classList.add("disappear");
    } else {
        document.getElementById("PepCo").classList.add("moveUp");
        document.getElementById("PepCo").classList.remove("moveDown");
        document.getElementById("PepCoInfo").classList.remove("disappear");

        const currentCubeInfo = document.getElementById("PepCo");
        const itemsWithoutCurrentCubeInfo = disappearInfo.filter(x => x !== currentCubeInfo)
        
        itemsWithoutCurrentCubeInfo.forEach(item => {
            item.classList = "";
            item.classList.add("disappear");
        })

        const currentCube = document.getElementById("PepCo");
        const itemsWithoutCurrentCube = disappear.filter(x => x !== currentCube)
        
        itemsWithoutCurrentCube.forEach(item => {
            item.classList = "";
            item.classList.add("moveDown");
        })

    }
}

///////////////////// NeoNet /////////////////////
document.getElementById("NeoNet").addEventListener("click", NeoNetFunction);

function NeoNetFunction() {
    
    const NeoNetCube = [NeoNetGora, NeoNetPrzod, NeoNetBok];

    NeoNetCube.forEach(function(item){
        item.style = "";
    })

    if (document.getElementById("NeoNet").classList.contains("moveUp")) {
        document.getElementById("NeoNet").classList.remove("moveUp");
        document.getElementById("NeoNet").classList.add("moveDown");
        document.getElementById("NeoNetInfo").classList.add("disappear");
    } else {
        document.getElementById("NeoNet").classList.add("moveUp");
        document.getElementById("NeoNet").classList.remove("moveDown");
        document.getElementById("NeoNetInfo").classList.remove("disappear");

        const currentCubeInfo = document.getElementById("NeoNetInfo");
        const itemsWithoutCurrentCubeInfo = disappearInfo.filter(x => x !== currentCubeInfo)
        
        itemsWithoutCurrentCubeInfo.forEach(item => {
            item.classList = "";
            item.classList.add("disappear");
        })

        const currentCube = document.getElementById("NeoNet");
        const itemsWithoutCurrentCube = disappear.filter(x => x !== currentCube)
        
        itemsWithoutCurrentCube.forEach(item => {
            item.classList = "";
            item.classList.add("moveDown");
        })

    }
}
