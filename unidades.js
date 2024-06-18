function verMais(){
    var maistxt=document.getElementById("lerMais");
    var btnMais=document.getElementById("btnlerMais");

    if(maistxt.style.display === "none") {
        maistxt.style.display="flex";
        btnMais.innerHTML="Leia menos";
    }
    else{
        maistxt.style.display="none";
        btnMais.innerHTML="Leia mais";
    }


}