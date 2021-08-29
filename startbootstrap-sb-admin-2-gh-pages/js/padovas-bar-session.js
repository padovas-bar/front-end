function isSessionActive(loadData){
    $.ajax({
        url: 'http://localhost:8080/login/valid-session/',
        type: 'get',
        headers: {
            "Accept": "application/json"
        },
        dataType: 'json',
        success: function (data) {
            if(data){
                loadData()
            } else{
                requestAccess(loadData)
            }
        },
        error: function(data){
            console.log(data)
            alert("Erro ao validar senha.")
        }
    });
}

function requestAccess(loadData){
    var title = 'Acesso restrito'
    var body = "Insira a senha para visualizar o relatório: <input type='password' placeholder='senha...' id='password' class='form-control form-control-sm'>"
    var footer = "<button class='btn btn-default btnGrey'  onclick='validatePassword(" + loadData + ")'>Visualizar relatório!</button>"

    addContentOnModal(title, body, footer);
}

function validatePassword(loadData){
    $.ajax({
        url: 'http://localhost:8080/login/validate/' + $('#password').val(),
        type: 'get',
        headers: {
            "Accept": "application/json"
        },
        dataType: 'json',
        success: function (data) {
            if(data){
                loadData()
                closeModal()
            } else{
                console.log("nok")
                alert('Senha inválida.')
            }
        },
        error: function(data){
            console.log(data)
            alert("Erro ao validar senha.")
        }
    });
}