
// ===== EDIT THESE PRICES (USD) to match your real rates =====
const WA="94763115816",ROOM=[35,80,180],CAR=60,EXTRA=25;
const $=id=>document.getElementById(id);
const menu=$("menu"),mb=$("menuBtn");
mb.onclick=()=>{const o=menu.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
menu.querySelectorAll("a").forEach(a=>a.onclick=()=>menu.classList.remove("open"));
$("year").textContent=new Date().getFullYear();
// Month finder (home page only)
const M=["January","February","March","April","May","June","July","August","September","October","November","December"];
const F=[["South and west coast, hill country","mirissa,galle,ella"],["South and west coast, hill country","mirissa,galle,ella"],["South and west coast, hill country","mirissa,galle,ella"],["Culture triangle and the hills (south coast is getting rainy)","sigiriya,kandy,ella"],["Culture triangle and the east coast","sigiriya,kandy"],["Culture triangle and the east coast","sigiriya,kandy"],["Kandy festival season, culture triangle and the east coast","kandy,sigiriya"],["Kandy festival season, culture triangle and the east coast","kandy,sigiriya"],["Culture triangle and the east coast","sigiriya,kandy"],["Culture triangle and the hills (expect some rain)","sigiriya,kandy,ella"],["Whale season starts on the south coast, with rain inland","mirissa,galle,kandy"],["South and west coast, hill country","mirissa,galle,ella"]];
const N={sigiriya:"Sigiriya",ella:"Ella",mirissa:"Mirissa",galle:"Galle",kandy:"Kandy"};
const sel=$("month");
if(sel){M.forEach((m,i)=>sel.add(new Option(m,i)));sel.value=new Date().getMonth();
const show=()=>{const f=F[sel.value];$("finderOut").innerHTML="Best bet: "+f[0]+".<br>"+f[1].split(",").map(s=>'<a href="'+s+'.html">'+N[s]+'</a>').join("")};
sel.onchange=show;show();}
// Trip cost calculator
const cT=$("cT");
if(cT){const calc=()=>{const t=Math.max(1,+cT.value||1),d=Math.max(1,+$("cD").value||1),h=+$("cH").value,c=$("cC").checked;
const base=Math.ceil(t/2)*ROOM[h]*d+(c?CAR*d:0)+t*EXTRA*d,lo=Math.round(base*.9/10)*10,hi=Math.round(base*1.15/10)*10;
$("cOut").textContent="$"+lo.toLocaleString()+" to $"+hi.toLocaleString();$("cPer").textContent="about $"+Math.round(base/t).toLocaleString()+" per person, "+d+" days";
const msg="Hi, I used the trip estimator: "+t+" travellers, "+d+" days, "+["budget","comfortable","luxury"][h]+" hotels, "+(c?"with":"without")+" private driver. Estimate $"+lo+" to $"+hi+". Can you send a quote?";
$("cWa").href="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);$("cWa").target="_blank"};
["cT","cD","cH","cC"].forEach(i=>$(i).addEventListener("input",calc));calc();}
// Contact form opens WhatsApp with the details (no form service needed)
const f=$("wForm");
if(f)f.onsubmit=e=>{e.preventDefault();const v=new FormData(f);
const msg="Hi Lanka Journeys, my name is "+v.get("name")+". Arrival: "+(v.get("arrival")||"not sure yet")+". Travellers: "+v.get("t")+". I need: "+v.get("need")+". "+v.get("msg");
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(msg),"_blank")};
