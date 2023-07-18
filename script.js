let dt=new Date("July 19, 2023 01:03:00").getTime();

setInterval(function(){
  let now=new Date().getTime();
  let diff=dt-now;
  let day=Math.floor(diff/(24*60*60*1000));
  let hour=Math.floor(diff%(24*60*60*1000)/(60*60*1000));
  let minuts=Math.floor(diff%(60*60*1000)/(60*1000));
  let sec=Math.floor(diff%(60*1000)/(1000));

  document.querySelector("p").innerHTML="Day : "+day+" , Hours : "+hour+" , Minutes : "+minuts+", Sec : "+sec;

},1000)