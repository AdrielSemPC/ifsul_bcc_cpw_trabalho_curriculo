function mudaCor() {
    var vetor = document.getElementsByName("cores");
    var elemento = document.getElementById("tudo");
    var permanente;

    for(i = 0; i < vetor.length; i++){
        if(vetor[i].checked){
            permanente = vetor[i];
            break;
        }
    }

    var cor = permanente.value;
    elemento.classList.remove("fundoClaro", "fundoEscuro", "fundoDefault");
    elemento.classList.add(cor);

    var corTexto, corCabecalho, caminhoImagem;

    if(cor === "fundoEscuro"){
        corTexto = "white";
        corCabecalho = "goldenrod";
        caminhoImagem = "imagens/escuro/";
    }else if (cor == "fundoClaro"){
        corTexto = "blue";
        corCabecalho = "rgb(44, 44, 44)";
        caminhoImagem = "imagens/claro/";
    }else{
        corTexto = "black";
        corCabecalho = "orange";
        caminhoImagem = "imagens/default/";
    }

    document.getElementById("twitter").style.color = corTexto;
    document.getElementById("insta").style.color = corTexto;
    document.getElementById("linkedin").style.color = corTexto;

    var itens = ["item1","item2","item3","item4","item5","item6","item7","item8"];

    itens.forEach(itens =>{
        let elementoItens = document.getElementById(itens);
        elementoItens.style.color = corCabecalho;
        elementoItens.classList.remove("claro","escuro","default");
        if(cor === "fundoEscuro"){
            elementoItens.classList.add("escuro");
        }else if(cor === "fundoClaro"){
            elementoItens.classList.add("claro");
        }else{
            elementoItens.classList.add("default");
        }
    });

    document.getElementById("linkedinImagem").src = caminhoImagem+"linkedin.png";
    document.getElementById("xImagem").src = caminhoImagem+"x.png";
    document.getElementById("instaImagem").src = caminhoImagem+"insta.png";

    let tab = ["inicio", "pessoais", "formacao", "complementares", "cursos", "experiencia", "contato", "tema"];
    tab.forEach(tab=>{
        let elementoTab = document.getElementById(tab);
        elementoTab.classList.remove("fundoClaroTabs","fundoEscuroTabs","fundoDefaultTabs");
        elementoTab.classList.add(cor+"Tabs");
    });
    }

document.addEventListener('DOMContentLoaded', function (){
    var radio = document.getElementsByName("cores");
    radio.forEach(button=>{
        button.addEventListener('change', mudaCor);
    })
    mudaCor();
});