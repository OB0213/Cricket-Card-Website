let menu=document.getElementById('menu');
let flag=0;
menu.addEventListener("click",function(){
    let sidebar=document.getElementById('sidebar');
    let cssObject=window.getComputedStyle(sidebar,null);
    let display=cssObject.display;
    let left;
   
   if(flag===0)
   {
left=cssObject.left;
   }
    console.log(display);
    console.log(left);
    if(flag===0)
    {
    sidebar.style.left=`0px`;
    let mainpart=document.getElementById('mainpart');
    mainpart.style.display=`absolute`;
    mainpart.style.left=`27vw`;
    mainpart.style.width=`73vw`;
    flag=1;
    }
    else if(flag===1)
    {
        sidebar.style.left=`${-27}vw`;
        let mainpart=document.getElementById('mainpart');
        mainpart.style.display=`absolute`;
        mainpart.style.left=`0`;
        mainpart.style.width=`100vw`;
        flag=0;
    }  
});

let matches=10;
let wonMatches=7;
let lostMatches=3;

document.getElementById('playedMatches').innerHTML=matches;
document.getElementById('matchesWon').innerHTML=wonMatches;
document.getElementById('matchesLost').innerHTML=lostMatches;