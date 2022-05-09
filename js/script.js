function carregarPlacaMae(valor){

    document.getElementById("placaMae").style.opacity=1;
    var placaMaeIntel = ["Selecione a placa mãe","H110", "B560", "Z490"]
    
    var placaMaeAmd = ["Selecione a placa mãe", "A320", "B450", "X570"]
    
    document.getElementById("placaMae").innerHTML="";
    if(valor == "placaMaeAmd"){
        
        for(var i = 0; i < placaMaeAmd.length;i++)
        document.getElementById("placaMae").innerHTML += `<option value=${placaMaeAmd[i]}>${placaMaeAmd[i]}</option>`;
    }
    if(valor == "placaMaeIntel"){
        for(var i = 0; i < placaMaeIntel.length;i++)
        document.getElementById("placaMae").innerHTML += `<option value=${placaMaeIntel[i]}>${placaMaeIntel[i]}</option>`;
    }
}

function carregarProcessador(valor){

    document.getElementById("processador").style.opacity=1;
    var processadorIntel = ["Selecione o processador","i3", "i5", "i7", "i9"]

    var processadorAmd = ["Selecione o processador","Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9"]

    document.getElementById("processador").innerHTML="";
    if(valor == "processadorAmd"){
        
        for(var i = 0; i < processadorAmd.length;i++)
        document.getElementById("processador").innerHTML += `<option value=${processadorAmd[i]}>${processadorAmd[i]}</option>`;
    }
    if(valor == "processadorIntel"){
        for(var i = 0; i < processadorIntel.length;i++)
        document.getElementById("processador").innerHTML += `<option value=${processadorIntel[i]}>${processadorIntel[i]}</option>`;
    }
}

function carregarRam(valor){

    document.getElementById("memoriaRam").style.opacity=1;
    var memoriaRam = ["Selecione a memória RAM", "DDR2", "DDR3", "DDR4", "DDR5"]

    if(valor == "memoriaRam"){
        
        document.getElementById("memoriaRam").innerHTML="";
        for(var i = 0; i < memoriaRam.length;i++)
        document.getElementById("memoriaRam").innerHTML += `<option value=${memoriaRam[i]}>${memoriaRam[i]}</option>`;

    }
}

function carregarVideo(valor){

    document.getElementById("placaDeVideo").style.opacity=1;
    var placaDeVideo = ["Selecione a placa de video", "GTX", "RTX", "RX"]
    
    if(valor == "placaDeVideo"){
        document.getElementById("placaDeVideo").innerHTML="";
        for(var i = 0; i < placaDeVideo.length;i++)
        document.getElementById("placaDeVideo").innerHTML += `<option value=${placaDeVideo[i]}>${placaDeVideo[i]}</option>`;
    }
    }

function carregarCooler(valor){

    document.getElementById("cooler").style.opacity=1;
    var cooler = ["Selecione o cooler", "Water cooler 120mm", "Water cooler 240mm", "Water cooler 360mm", "Air cooler"]
    
    if(valor == "cooler"){
        document.getElementById("cooler").innerHTML="";
        for(var i = 0; i < cooler.length;i++)
        document.getElementById("cooler").innerHTML += `<option value=${cooler[i]}>${cooler[i]}</option>`;
    }
}

function carregarFonte(valor){

    document.getElementById("fonte").style.opacity=1;
    var fonte = ["Selecione a fonte", "300w", "400w", "500w", "600w", "700w", "800w", "900w", "1000w"]
    
    if(valor == "fonte"){
        document.getElementById("fonte").innerHTML="";
        for(var i = 0; i < fonte.length;i++)
        document.getElementById("fonte").innerHTML += `<option value=${fonte[i]}>${fonte[i]}</option>`;
    }
}
    
function carregarArmazenamento(valor){

    document.getElementById("armazenamento").style.opacity=1;
    var ssd = ["Selecione o tamanho de armazenamento","120gb", "240gb", "480gb", "512gb", "960gb"]
    
    var hd = ["Selecione o tamanho de armazenamento","500gb", "1tb", "2tb"]

    var nvme = ["Selecione o tamanho de armazenamento","120gb", "240gb", "480gb", "512gb", "1tb"]
    
    document.getElementById("armazenamento").innerHTML="";
    if(valor == "ssd"){
        document.getElementById("armazenamento").innerHTML="";
        for(var i = 0; i < ssd.length;i++)
        document.getElementById("armazenamento").innerHTML += `<option value=${ssd[i]}>${ssd[i]}</option>`;
    }
    if(valor == "hd"){
        document.getElementById("armazenamento").innerHTML="";
        for(var i = 0; i < hd.length;i++)
        document.getElementById("armazenamento").innerHTML += `<option value=${hd[i]}>${hd[i]}</option>`;
    }
    if(valor == "nvme"){
        document.getElementById("armazenamento").innerHTML="";
        for(var i = 0; i < nvme.length;i++)
        document.getElementById("armazenamento").innerHTML += `<option value=${nvme[i]}>${nvme[i]}</option>`;
    }
}

function carregarGabinete(valor){

    document.getElementById("gabinete").style.opacity=1;
    var gabinete = ["Selecione o gabinete", "Mini-tower", "Mid-tower", "Full-tower"]
    
    if(valor == "gabinete"){
        document.getElementById("gabinete").innerHTML="";
        for(var i = 0; i < gabinete.length;i++)
        document.getElementById("gabinete").innerHTML += `<option value=${gabinete[i]}>${gabinete[i]}</option>`;
    }
}

function Cadastro(){
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")
    const cpf = document.getElementById("cpf")

    fetch("http://localhost:4002/api/pc/cadastrar", {
        method: "POST", 
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome:nome.value,
            email:email.value,
            senha:senha.value,
            cpf:cpf.value,
        })
    })
    .then((resultado) => resultado.json())
    .then((dados) => {
        alert(`${dados.output}`)
        // limpar o formulario
        nome.value = "";
        email.value = "";
        senha.value = "";
        cpf.value = ""
    })
    .catch((err) => console.error(err));
}
