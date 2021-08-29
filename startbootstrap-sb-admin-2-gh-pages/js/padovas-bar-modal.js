    function closeModal(){
        $('#modal-close').click()
    }

    function addContentOnModal(title, body, footer){
        $('#modal-title-order').text(title)
        $('#modal-body').html(body)
        $('#modal-footer').html(footer)
        $('#btnModal').click()
    }