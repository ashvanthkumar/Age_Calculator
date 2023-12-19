document.querySelector("#submit").addEventListener("click",function(){

    if(document.querySelector("#dob").value==null || document.querySelector("#dob").value=="")
    {
        document.querySelector("#pp").innerHTML="Choose the date";
        return false;
    }
    else{
        document.querySelector("#pp").innerHTML="";
    }
    const update = function(){
        
        let dob=document.querySelector("#dob").value, 
        day=new Date(dob),
        time=day.getTime(),
        today=new Date(),
        timeNow=today.getTime(),
        value=timeNow-time,
        sec=Math.floor(value/1000),
        min=Math.floor(value/(1000*60)),
        hr=Math.floor(value/(1000*60*60)),
        days=Math.floor(value/(1000*60*60*24)),
        week=Math.floor(value/(1000*60*60*24*7)),
        month=Math.floor(value/(1000*60*60*24*30.4375)),
        year=Math.floor(value/(1000*60*60*24*365.25))

        var dobda=day.getDate();
        var nowda=today.getDate();
        if (nowda >= dobda)
            var dayss=nowda-dobda;
        else
            var dayss=31+nowda-dobda;

            console.log(dobda+" "+nowda+" "+dayss)
        let insert = function(x,y){
            document.querySelector(x).innerHTML = y;
        }
        insert(".pyear",year+" years");
        insert(".pmonth",(month%12)+" months");
        insert(".pday",dayss+" days");
        insert(".year",year+" years");
        insert(".month",month+" months");
        insert(".week",week+" weeks");
        insert(".day",days+" days");
        insert(".hour",hr+" hours");
        insert(".min",min+" mins");
        insert(".sec",sec+" secs");
    }
        setInterval(update,1000);
    
});