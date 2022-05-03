function carregarprocessador(valor){

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

var memoriaram = ["Selecione a memória", "DDR2", "DDR3", "DDR4", "DDR5"]

if(valor == "ram"){
    
    for(var i = 0; i < ram.length;i++)
    document.getElementById("ram").innerHTML += `<option value=${ram[i]}>${ram[i]}</option>`;
}
}
