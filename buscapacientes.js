var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");
        var errorAjax = document.querySelector("#error-ajax");
        var tabela = document.querySelector("#tabela-pacientes");
        var table = document.querySelector("#table-paciente");

        if(xhr.status == 200){
        
        erroAjax.classList.add("invisivel");
        errorAjax.classList.add("invisivel");
        tabela.classList.remove("invisivel");
        table.classList.remove("invisivel");
           
        var resposta = xhr.responseText; 

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    }else{
        console.log(xhr.status);
        var erroAjax = document.querySelector("#erro-ajax");
        var errorAjax = document.querySelector("#error-ajax");
        erroAjax.classList.remove("invisivel");
        errorAjax.classList.remove("invisivel");
        tabela.classList.add("invisivel");
        table.classList.add("invisivel");
    }
    });

    xhr.send();

});