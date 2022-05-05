function carregarplacamae(valor){

    document.getElementById("placamae").style.opacity=1;
    var pintel = ["Selecione a placa mãe","H110", "B560", "Z490"]
    
    var pamd = ["Selecione a placa mãe", "A320", "B450", "X570"]
    
    document.getElementById("placamae").innerHTML="";
    if(valor == "pamd"){
        
        for(var i = 0; i < pamd.length;i++)
        document.getElementById("placamae").innerHTML += `<option value=${pamd[i]}>${pamd[i]}</option>`;
    }
    if(valor == "pintel"){
        for(var i = 0; i < pintel.length;i++)
        document.getElementById("placamae").innerHTML += `<option value=${pintel[i]}>${pintel[i]}</option>`;
    }
}

function carregarprocessador(valor){

    document.getElementById("processador").style.opacity=1;
    var intel = ["Selecione o processador","i3", "i5", "i7", "i9"]

    var amd = ["Selecione o processador","Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9"]

    document.getElementById("processador").innerHTML="";
    if(valor == "amd"){
        
        for(var i = 0; i < amd.length;i++)
        document.getElementById("processador").innerHTML += `<option value=${amd[i]}>${amd[i]}</option>`;
    }
    if(valor == "intel"){
        for(var i = 0; i < intel.length;i++)
        document.getElementById("processador").innerHTML += `<option value=${intel[i]}>${intel[i]}</option>`;
    }
}

function carregarram(valor){

    document.getElementById("mem").style.opacity=1;
    var memoriaram = ["Selecione a memória RAM", "DDR2", "DDR3", "DDR4", "DDR5"]

    if(valor == "memoriaram"){

        document.getElementById("mem").innerHTML="";
        for(var i = 0; i < memoriaram.length;i++)
        document.getElementById("mem").innerHTML += `<option value=${memoriaram[i]}>${memoriaram[i]}</option>`;
    }
}

function carregarvideo(valor){

    document.getElementById("placadevideo").style.opacity=1;
    var placadevideo = ["Selecione a placa de video", "GTX", "RTX", "RX"]
    
    if(valor == "placadevideo"){
        document.getElementById("placadevideo").innerHTML="";
        for(var i = 0; i < placadevideo.length;i++)
        document.getElementById("placadevideo").innerHTML += `<option value=${placadevideo[i]}>${placadevideo[i]}</option>`;
    }
    }

function carregarcooler(valor){

    document.getElementById("cooler").style.opacity=1;
    var cooler = ["Selecione o cooler", "Water cooler 120mm", "Water cooler 240mm", "Water cooler 360mm", "Air cooler"]
    
    if(valor == "cooler"){
        document.getElementById("cooler").innerHTML="";
        for(var i = 0; i < cooler.length;i++)
        document.getElementById("cooler").innerHTML += `<option value=${cooler[i]}>${cooler[i]}</option>`;
    }
}

function carregarfonte(valor){

    document.getElementById("fonte").style.opacity=1;
    var fonte = ["Selecione a fonte", "300w", "400w", "500w", "600w", "700w", "800w", "900w", "1000w"]
    
    if(valor == "fonte"){
        document.getElementById("fonte").innerHTML="";
        for(var i = 0; i < fonte.length;i++)
        document.getElementById("fonte").innerHTML += `<option value=${fonte[i]}>${fonte[i]}</option>`;
    }
}
    
function carregararmazenamento(valor){

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

function carregargabinete(valor){

    document.getElementById("gabinete").style.opacity=1;
    var gabinete = ["Selecione o gabinete", "Mini-tower", "Mid-tower", "Full-tower"]
    
    if(valor == "gabinete"){
        document.getElementById("gabinete").innerHTML="";
        for(var i = 0; i < gabinete.length;i++)
        document.getElementById("gabinete").innerHTML += `<option value=${gabinete[i]}>${gabinete[i]}</option>`;
    }
}