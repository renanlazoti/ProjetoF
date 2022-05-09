var pcs = {
    "AMD": {
        "processadores":  ["Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9"],
        "placaMae": ["A320", "B450", "X570"],
        "memoria": ["DDR1", "DDR2", "DDR3", "DDR4"],
        "placadevideo": ["GTX", "RTX", "RX"]
    },
    "INTEL": {
        "processadores":  ["i3", "i5", "i7", "i9"],
        "placaMae": ["H110", "B560", "Z490"],
        "memoria": ["DDR1", "DDR2", "DDR3", "DDR4", "DDR5"],
        "placadevideo": ["GTX", "RTX", "RX"]
    }
}

function placaMae(placa){
    let selectPlacaMae = document.querySelector("#placaMae");

    ajustarValoresDoSelect(selectPlacaMae)
    gerenciarDesativarRadio(placa.value);

    let tiposPlacaMae = pcs[placa.value].placaMae;

    tiposPlacaMae.forEach(element => {
        let option = criarOptions(element);
        selectPlacaMae.appendChild(option);
    });
}

function gerenciarDesativarRadio(radioName){
    let processador = document.querySelectorAll(".processador");
    processador.forEach(element =>{

        if(element.getAttribute("disabled") == "true"){
            element.removeAttribute("disabled");
        }

        if(radioName != element.value){
            element.setAttribute("disabled","true");
        }
    });
}

function processador(processador){
    let valorProcessador = processador.value;
    let tiposMemorias = pcs[valorProcessador].memoria;

    let selectMemoria = document.querySelector("#memoriaRam");
    ajustarValoresDoSelect(selectMemoria);

    tiposMemorias.forEach(element => {
        let option = criarOptions(element);
        selectMemoria.appendChild(option);
    })
}

function criarOptions(valorDoOption){
    let option = document.createElement("option");
    option.value = valorDoOption;
    option.innerHTML = valorDoOption;
    return option;
}

function ajustarValoresDoSelect(select){
    let quantidadeOptionsDentroSelect = select.childElementCount;

    for (let index = 0; index <= quantidadeOptionsDentroSelect; index++) {
        select.remove(0)
    }
}