$( document ).ready(function() {
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            email : $("#email").val(),
            upwd : $("#upwd").val()
        }
        $.ajax({
            type : "POST"
            contentType : "application/json"
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : "json"
            success : function(customer) {
                
            }
        })
    }

});