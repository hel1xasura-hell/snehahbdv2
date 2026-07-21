// ==========================
// Birthday Website Script
// ==========================

const openBtn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");
const wishBtn = document.getElementById("wishBtn");
const message = document.getElementById("message");

// ==========================
// Open Surprise
// ==========================

openBtn.addEventListener("click", () => {

    surprise.style.display = "block";

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    if (music) {

        music.play().catch(() => {
            console.log("Autoplay blocked.");
        });

    }

    createConfetti(120);

    createFireworks(15);

});

// ==========================
// Blow Out Candle
// ==========================

wishBtn.addEventListener("click", () => {

    alert("🎉 Yay! Make a wish! Happy Birthday Sneha! 🎂🌸");

    createConfetti(200);

    createFireworks(25);

});

// ==========================
// Floating Hearts
// ==========================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (6+Math.random()*5)+"s";

    heart.style.fontSize=
    (18+Math.random()*18)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,700);

// ==========================
// Flower Petals
// ==========================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    (8+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

}

setInterval(createPetal,800);

// ==========================
// Sparkles
// ==========================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createSparkle,300);

// ==========================
// Floating Balloons
// ==========================

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    const balloons=["🎈","🎈","🎈","🎀"];

    balloon.innerHTML=
    balloons[Math.floor(Math.random()*balloons.length)];

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.animationDuration=
    (8+Math.random()*6)+"s";

    document.body.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },15000);

}

setInterval(createBalloon,2500);

// ==========================
// Butterflies
// ==========================

function createButterfly(){

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML="🦋";

    butterfly.style.top=
    Math.random()*70+"vh";

    butterfly.style.animationDuration=
    (10+Math.random()*6)+"s";

    document.body.appendChild(butterfly);

    setTimeout(()=>{

        butterfly.remove();

    },18000);

}

setInterval(createButterfly,5000);

// ==========================
// Floating Lights
// ==========================

function createLight(){

    const light=document.createElement("div");

    light.className="light";

    light.style.left=Math.random()*100+"vw";

    light.style.animationDuration=
    (8+Math.random()*6)+"s";

    document.body.appendChild(light);

    setTimeout(()=>{

        light.remove();

    },14000);

}

setInterval(createLight,600);

// ==========================
// Confetti
// ==========================

function createConfetti(amount){

    const colors=[
        "#ff69b4",
        "#ffd700",
        "#87cefa",
        "#98fb98",
        "#ffb6c1",
        "#ffffff"
    ];

    for(let i=0;i<amount;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=
        Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDuration=
        (2+Math.random()*3)+"s";

        confetti.style.transform=
        "rotate("+Math.random()*360+"deg)";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

// ==========================
// Fireworks
// ==========================

function createFireworks(total){

    for(let i=0;i<total;i++){

        const fire=document.createElement("div");

        fire.className="firework";

        fire.style.left=
        Math.random()*100+"vw";

        fire.style.top=
        Math.random()*80+"vh";

        document.body.appendChild(fire);

        setTimeout(()=>{

            fire.remove();

        },1300);

    }

      }

// ==========================
// Typewriter Effect
// ==========================

const birthdayMessage = `Dear Sneha,

Happy 17th Birthday!

Today is all about celebrating you and wishing you a year filled with happiness, laughter, success and beautiful memories.

It's hard to believe it's already been a whole year since we first met. Thank you for being such a wonderful friend, and here's to many more amazing years of friendship.

May you always keep smiling, keep believing in yourself, and never stop chasing your dreams.

I hope this birthday brings countless reasons to smile and many unforgettable moments with your family and friends.

Enjoy your special day and have an amazing year ahead.

Happy Birthday once again! 🎂🌸`;

let i = 0;

function typeWriter(){

    if(i < birthdayMessage.length){

        message.innerHTML += birthdayMessage.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

// ==========================
// Start Typing
// ==========================

openBtn.addEventListener("click",()=>{

    message.innerHTML="";

    i=0;

    setTimeout(typeWriter,1200);

});

// ==========================
// Welcome Animation
// ==========================

window.onload=()=>{

setTimeout(()=>{

document.getElementById("loading-screen").style.display="none";

},3000);

}

// ==========================
// Random Wishes
// ==========================

const wishes=[

"🌸 Have a wonderful birthday!",

"🎉 Keep smiling always!",

"💖 Wishing you lots of happiness!",

"🌈 Enjoy every moment!",

"🎂 Have an unforgettable birthday!"

];

setInterval(()=>{

console.log(

wishes[Math.floor(Math.random()*wishes.length)]

);

},5000);

// ==========================
// End
// ==========================

console.log("Happy Birthday Sneha!");
