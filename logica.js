function logar(){

    var login = document.getElementById("login").value; 
    var senha = document.getElementById("senha").value;


    if(login == "admin" && senha == "admin"){
        alert("Sucesso");
        location.href = "home.html"; // encaminha para a página informada

        /**
         * Por padrão, a página não vai ser direcionada a home, pois
         * a funnção ela necessita de uma validação no input, para quebrar isso usa o "return false" no input,
         * serve para parar de esperar essa validação
         
         */
    }
    else{
        alert("Usuario e senha incorretos");
    }
}