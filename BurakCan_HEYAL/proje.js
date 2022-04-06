$(function(){
    var total = 0, score = 10;
    var gflag = 0, tileflag = 0;
    var mcount;
    var barc = 0;

    var hiscore = localStorage.getItem("hiscore");
    $("#hiscore").text(hiscore);
    while(gflag != 1)
    {
        var rand1 = Math.floor(Math.random() * 16);
        var rand2 = Math.floor(Math.random() * 16);
        if(rand1 == rand2){
            rand2 = Math.floor(Math.random() * 16);
        }
        var rand3 = Math.floor(Math.random() * 16);
        if(rand1 == rand3 && rand2 == rand3 ){
            rand3 = Math.floor(Math.random() * 16);
        }
        if(rand1 != rand2 && rand1 != rand3 && rand2 != rand3){
            gflag = 1;
        }
    }
    
    $("#i"+rand1).css("background", "black");
    $("#i"+rand2).css("background", "black");
    $("#i"+rand3).css("background", "black");
    

    var timer = setInterval(decTime, 1000) ;
    function decTime(){
        var counter = parseInt($("#start").text());

        if(counter != 0){
            counter--;
            $("#start").text(counter);

        }else{
            $("body").css("background", "white");
            $("#start").css("display", "none");
            $("#main").css("display", "inline-block")
            if(tileflag == 1){
                $("#tap").css("display", "unset");
            }else{
                $("#tap").css("display", "none");
            }
            tileflag++
            mcount = parseInt($("#time").text());
            if(mcount != 0){
                mcount--;
                $("#time").text(mcount);
                
            }else{
                $("#again").css("display", "block");


                if(total < hiscore){
                    $("#ti").css("display", "unset");
                }else{
                    $("#newhi").css("display", "unset");
                    var temp = parseInt($("#score").text());
                    localStorage.setItem("hiscore", temp);

                    

                    $.confetti.start();
                    setTimeout(() => {
                    $.confetti.stop();
                    }, 3000)
                }
            }
        }
    };

    $('div.box').click(function(){
        if(mcount > 0){
            var timerr = setInterval(decTimer, 1000) ;
            function decTimer(){
                score -= 1;

                $("#score").text(total);


                if(barc >= 400){
                    barc = 408;
                }else{
                    barc += 80;
                }
                $("#barcont").width(barc).css({background: "black"});
            }
            var id = $(this).attr('id');
           
            if(id == "i" + rand1){
                var flag = rand1;
                var randtemp = rand1;
                if(score <= 0){
                    score = 1;
                }

                $("#i" + randtemp).css("background", "green");
                $("#i" + randtemp).text("+ " + score);

                setTimeout(function(){
                    $("#i"+ randtemp).css('background','#fff');
                    $("#i" + randtemp).text("");
                }, 100);


                total += score;

                while(flag != -1){
                    rand1 = Math.floor(Math.random() * 16);

                    if(rand1 != rand2 && rand1 != rand3 && rand1 != flag){
                        flag = -1;
                    }
                }
                score = 10;
                barc = 0;
                $("#i" + rand1).css("background", "black");



            }else if(id == "i" + rand2){
                var flag = rand2;
                var randtemp = rand2;
                if(score <= 0){
                    score = 1;
                }

                $("#i" + randtemp).css("background", "green");
                $("#i" + randtemp).text("+ "+ score);

                setTimeout(function(){
                    $("#i"+ randtemp).css('background','#fff');
                    $("#i" + randtemp).text("");
                }, 100);

                total += score;

                while(flag != -1){
                    rand2 = Math.floor(Math.random() * 16);

                    if(rand2 != rand1 && rand2 != rand3 && rand2 != flag){
                        flag = -1;
                    }
                }
                score = 10;
                barc = 0;
                $("#i" + rand2).css("background", "black");


            }else if(id == "i" + rand3){
                var flag = rand3;
                var randtemp = rand3;
                if(score <= 0){
                    score = 1;
                }

                $("#i" + randtemp).css("background", "green");
                $("#i" + randtemp).text("+ " + score);

                setTimeout(function(){
                    $("#i"+ randtemp).css('background','#fff');
                    $("#i" + randtemp).text("");
                }, 100);

                total += score;

                while(flag != -1){
                    rand3 = Math.floor(Math.random() * 16);

                    if(rand3 != rand1 && rand3 != rand2 && rand3 != flag){
                        flag = -1;
                    }
                }
                score = 10;
                barc = 0;
                $("#i" + rand3).css("background", "black");
            }
        }
        
    });
    function randomColor() {
        let r = 0 ;
        let g = 128 ;
        let b = 0 ;
        return `rgb(${r}, ${g}, ${b})` ;
    }

});
