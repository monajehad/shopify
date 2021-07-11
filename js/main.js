$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function openNav() {
    document.getElementById("mySidebar").style.width = "380px";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

}