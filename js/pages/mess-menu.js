/* ================= MESS MENU DATA ================= */

const messMenu = {

    monday:{
    breakfast:"CM, Kala Chana, Poha with Sev, Fruits, Aloo Bread Pakoda, Dips, Sweet Seviyan",
    lunch:"Dal Urad Chana, Paneer Bhurji / Egg Bhurji, Boondi Raita, Roti, Rice, Nimbu Pani",
    evening:{item:"Tea + Extra Snacks: Omelette / Bhelpuri",price:"₹18 / ₹25"},
    dinner:"Poori, Pumpkin Kala Chana, Bhandara Aloo Sabzi, Veg Pulao, Achari Mirch, Dry Fruit Kheer"
    },
    
    tuesday:{
    breakfast:"CM, Sambhar, Plain Idli / Fried Idli / Vada, Coconut Chutney, Sweet Corn",
    lunch:"Dal Tadka, Mix Veg, Plain Chaach, Roti, Zeera Rice",
    evening:{item:"Coffee + Omelette / Bread Pakoda",price:"₹18 / ₹15"},
    dinner:"Mix Paratha (and Roti), Aloo Tamatar Sabzi, Rice, Dal Arhar, Onion Tomato Chutney (+Dahi), Tilla Kulfi"
    },
    
    wednesday:{
    breakfast:"CM, Coleslaw Sandwich, Sattu Parantha, Aaloo Sabzi, Omelette, Fruits",
    lunch:"Dal Mix Sabut, Dum Aloo, Gud, Roti, Cucumber Raita, Rice, Dahi Golgappe",
    evening:{item:"Tea + Mix Pakoda",price:"₹20"},
    dinner:"Chef's Special Paneer, Chicken Curry, Dal Moong Malka, Matar Pulao, Roti, Laccha Paratha, Protein Salad, Inhouse Sweet"
    },
    
    thursday:{
    breakfast:"Chocos, Boiled Eggs, Mix Paratha, Sabudana Khichdi (Dry), Mint Chutney, Fruits",
    lunch:"Rajma (Mint Chutney, Lachha Onion, Papad), Aloo Capsicum, Rasam, Dahi, Roti, Rice, Mix Juice",
    evening:{item:"Squash + Extra Snacks: Omelette / Paneer Pakoda",price:"₹18 / ₹22"},
    dinner:"Chilli Paneer, Chinese Fried Rice + Chowmein / Pav Bhaji, Soya Rice + Cheese Sauce Pasta, Aloo Matar Soyabean, Roti, Fruit Custard"
    },
    
    friday:{
    breakfast:"Muesli, Vada Pav (with spicy garlic chutney), Boiled Eggs, Sweet Daliya, Kala Chana, Fruits",
    lunch:"Kadhi with White Rice, Papad, Roti, Seasonal Veg, Achari Mirch (No Dahi when Kadhi is served), Crispy Corn Chaat, RoohAfza",
    evening:{item:"Tea + French Fries",price:"₹15"},
    dinner:"Matar Kulcha, Zeera Rice, Dal Makhani, Roti, Badam Thandai"
    },
    
    saturday:{
    breakfast:"Chocos, Namkeen Sevaiyan / Upma, Paneer Chilla, Fruits, Dips, Dhokla, Boiled Eggs",
    lunch:"Chana Dal Tadka, Kadhai Paneer, Roti, Papad, Peanut Rice, Dahi Bhalle",
    evening:{item:"Coffee + Bread Roll",price:"₹22"},
    dinner:"Chicken Biryani, Veg Shahi Pulao, Dal Moong Malka, Aloo Sabzi, Mirch ka Salan, Roti, Mix Veg Raita, Rawa Kesari"
    },
    
    sunday:{
    breakfast:"CM, Dosa Sambhar, Coconut Chutney, Macaroni / Veg Maggi, Fruits",
    lunch:"Chole Bhature, Aloo Zeera, Lachha Onion, Mint Chutney, Achari Mirch, Pineapple Anar Raita, Roti, Rice",
    evening:{item:"Tea + Omelette / Pakoda",price:"₹18"},
    dinner:"Paneer Kali Mirch / Egg Curry, Rumali Roti with Plain Roti, Yellow Fried Rice, Black Masoor Dal, Dry Kala Chana, Jalebi"
    }
    
    };
/* ================= MEAL TIMES ================= */

const mealTimes=[
{name:"breakfast",start:420,end:570},   // 7:00-9:30
{name:"lunch",start:720,end:840},       // 12:00-14:00
{name:"evening",start:990,end:1050},    // 16:30-17:30
{name:"dinner",start:1140,end:1260}     // 19:00-21:00
];

const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];


/* ================= CARD ================= */

function mealCard(day,meal){

let data=messMenu[day];

let html=`<div class="day-card">
<h3>${day.toUpperCase()} ${meal.toUpperCase()}</h3>`;

if(meal==="breakfast") html+=`<p>${data.breakfast}</p>`;
if(meal==="lunch") html+=`<p>${data.lunch}</p>`;
if(meal==="evening") html+=`<p>${data.evening.item}<br><small>${data.evening.price}</small></p>`;
if(meal==="dinner") html+=`<p>${data.dinner}</p>`;

html+=`</div>`;

return html;

}


/* ================= GET STATUS ================= */

function getMealStatus(){

    const now = new Date();
    const secondsNow = Math.floor(now.getTime()/1000);
    const minutes = now.getHours()*60 + now.getMinutes();
    
    const today = days[now.getDay()];
    const tomorrow = days[(now.getDay()+1)%7];
    
    for(let i=0;i<mealTimes.length;i++){
    
    let m = mealTimes[i];
    
    if(minutes >= m.start && minutes < m.end){
    
    let next = (i < mealTimes.length-1) ? mealTimes[i+1].name : "breakfast";
    
    return {
    mode:"live",
    day:today,
    meal:m.name,
    nextDay: next==="breakfast"?tomorrow:today,
    nextMeal:next
    };
    
    }
    
    if(minutes < m.start){
    
    let target = new Date();
    
    target.setHours(Math.floor(m.start/60));
    target.setMinutes(m.start%60);
    target.setSeconds(0);
    target.setMilliseconds(0);
    
    let diff = Math.floor((target.getTime() - now.getTime())/1000);
    
    if(diff < 0) diff = 0;
    
    let h = Math.floor(diff/3600);
    let min = Math.floor((diff%3600)/60);
    let sec = diff%60;
    
    let nextNext = (i < mealTimes.length-1) ? mealTimes[i+1].name : "breakfast";
    
    return{
    mode:"upcoming",
    day:today,
    meal:m.name,
    countdown:`${h}h ${min}m ${sec}s`,
    nextDay: nextNext==="breakfast"?tomorrow:today,
    nextMeal:nextNext
    };
    
    }
    
    }
    
    /* after dinner */
    
    let target = new Date();
    
    target.setDate(now.getDate()+1);
    target.setHours(7);
    target.setMinutes(0);
    target.setSeconds(0);
    target.setMilliseconds(0);
    
    let diff = Math.floor((target.getTime() - now.getTime())/1000);
    
    if(diff < 0) diff = 0;
    
    let h = Math.floor(diff/3600);
    let min = Math.floor((diff%3600)/60);
    let sec = diff%60;
    
    return{
    mode:"upcoming",
    day:tomorrow,
    meal:"breakfast",
    countdown:`${h}h ${min}m ${sec}s`,
    nextDay:tomorrow,
    nextMeal:"lunch"
    };
    
    }

/* ================= RENDER ================= */

function renderLiveMenu(){

const box=document.getElementById("liveMenu");
if(!box) return;

const data=getMealStatus();

let html="";

if(data.mode==="live"){

html+=`<h3>Now Serving</h3>`;

html+=`<div class="menu-container">`;
html+=mealCard(data.day,data.meal);
html+=`</div>`;

html+=`<h3>Next Meal</h3>`;

html+=`<div class="menu-container">`;
html+=mealCard(data.nextDay,data.nextMeal);
html+=`</div>`;

}

if(data.mode==="upcoming"){

html+=`<h3>Upcoming Meal (in ${data.countdown})</h3>`;

html+=`<div class="menu-container">`;
html+=mealCard(data.day,data.meal);
html+=`</div>`;

html+=`<h3>Next Meal</h3>`;

html+=`<div class="menu-container">`;
html+=mealCard(data.nextDay,data.nextMeal);
html+=`</div>`;

}

box.innerHTML=html;

}


/* ================= LOAD ================= */

window.addEventListener("load",()=>{

renderLiveMenu();

setInterval(renderLiveMenu,1000);

});
/* ================= BROWSE WEEKLY MENU ================= */

function loadMenu(){

const day = document.getElementById("daySelect").value;
const meal = document.getElementById("mealSelect").value;

const container = document.getElementById("menuContainer");

let html = "";

if(day === "week"){

for(let d in messMenu){

if(meal === "all" || meal === ""){
    
html += mealCard(d,"breakfast");
html += mealCard(d,"lunch");
html += mealCard(d,"evening");
html += mealCard(d,"dinner");

}else{

html += mealCard(d,meal);

}

}

}

else{

if(meal === "all" || meal === ""){

html += mealCard(day,"breakfast");
html += mealCard(day,"lunch");
html += mealCard(day,"evening");
html += mealCard(day,"dinner");

}else{

html += mealCard(day,meal);

}

}

container.innerHTML = html;

}
setInterval(renderLiveMenu,30000);
/* ================= NOTIFICATION SYSTEM ================= */

function sendNotification(title,message){

if(window.OneSignal){

OneSignal.sendSelfNotification(
title,
message,
"https://iitdelhinilgiri.netlify.app/pages/mess-menu.html",
"",
"",
"",
{
notificationIcon:"/assets/mess-icon.png"
}
);

}

}


/* ================= CHECK MEAL NOTIFICATIONS ================= */

function checkMealNotifications(){

const now = new Date();
const minutesNow = now.getHours()*60 + now.getMinutes();

const today = days[now.getDay()];

mealTimes.forEach(meal=>{

// 10 minutes before meal
if(minutesNow === meal.start - 10){

let food = messMenu[today][meal.name];

if(meal.name==="evening"){
food = messMenu[today].evening.item;
}

sendNotification(
"🍽 "+meal.name.toUpperCase()+" in 10 minutes",
food
);

}

// meal start
if(minutesNow === meal.start){

let food = messMenu[today][meal.name];

if(meal.name==="evening"){
food = messMenu[today].evening.item;
}

sendNotification(
"🍽 "+meal.name.toUpperCase()+" started",
food
);

}

});

}


/* ================= START SYSTEM ================= */

window.addEventListener("load",()=>{

renderLiveMenu();

/* update live menu every second */
setInterval(renderLiveMenu,1000);

/* check notification every minute */
setInterval(checkMealNotifications,60000);

});
/* ================= STATUS BAR ================= */

function updateStatusBar(){

const statusBar = document.getElementById("messStatusBar");
if(!statusBar) return;

const data = getMealStatus();

let text="";

if(data.mode==="live"){

text = "🟢 Now Serving: "+data.meal.toUpperCase();

if(data.nextMeal){
text += " | ⏳ Next Meal: "+data.nextMeal.toUpperCase();
}

}

else if(data.mode==="upcoming"){

text = "⏳ Next Meal: "+data.meal.toUpperCase()+" in "+data.countdown;

}

statusBar.innerText = text;

}


/* ================= START SYSTEM ================= */

window.addEventListener("load",()=>{

// render live mess cards
renderLiveMenu();

// update status bar
updateStatusBar();

// refresh live menu every 30 seconds
setInterval(renderLiveMenu,30000);

// refresh status bar every second
setInterval(updateStatusBar,1000);

// check meal notifications every minute
setInterval(checkMealNotifications,60000);

});