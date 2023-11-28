$("#cardNum").keyup(function(){
    var cardNum = $("#cardNum").val();
    $("#acc_no").html(cardNum);
    $("#acc_no").css("border-color","white")
});

$("#month").change(function(){
    var mm = $("#month :selected").val();
    $("#mm").html(mm)
})

$("#year").change(function(){
    var yy = $("#year :selected").val();
    $("#yy").html(yy)
})

$("#cvv_input").focus(function(){
    $(".card").css("transform","rotateY(180deg)");
    $("#cvv_input").keyup(function(){
        var cvv = $("#cvv_input").val();
        $("#cvv").html(cvv)
    })
    
})
$("#cvv_input").blur(function(){
    $(".card").css("transform","rotateY(0deg)");
})

