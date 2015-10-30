/**
 * Created by Administrator on 2015/10/30.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "#F1F2F3";
    context.fillRect(0,0,400,400);
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        //Ìî³ä»æÖÆ
        context.fillStyle = "rgba(255,0,0,0.15)";
        context.fill();
        //Ãè±ß
        context.strokeStyle = "red";
        context.stroke();
    }

}