/* ==================================
BOOKING WHATSAPP
================================== */

function kirimWA() {

let nama =
document.getElementById("nama").value;

let peserta =
document.getElementById("peserta").value;

let tanggal =
document.getElementById("tanggal").value;

let paket =
document.getElementById("paketpilih").value;

if(
nama === "" ||
peserta === "" ||
tanggal === ""
){

alert(
"Lengkapi data booking terlebih dahulu."
);

return;

}

let pesan =
`Halo Admin Edu Wisata Lontar Sewu.

Nama Sekolah : ${nama}
Jumlah Peserta : ${peserta}
Tanggal Kegiatan : ${tanggal}
Paket : ${paket}

Mohon informasi lebih lanjut.`;

let url =
"https://wa.me/628385903781?text=" +
encodeURIComponent(pesan);

window.open(url,"_blank");

}


/* ==================================
NAVBAR SCROLL EFFECT
================================== */

window.addEventListener(
"scroll",
function(){

const header =
document.querySelector(".header");

if(window.scrollY > 50){

header.style.background =
"rgba(15,23,42,0.98)";

header.style.boxShadow =
"0 10px 25px rgba(0,0,0,.15)";

}
else{

header.style.background =
"rgba(15,23,42,.90)";

header.style.boxShadow =
"none";

}

}
);


/* ==================================
COUNTER ANIMATION
================================== */

const counters =
document.querySelectorAll(
".stat-card h2"
);

const startCounter = () => {

counters.forEach(counter => {

const text =
counter.innerText;

const target =
parseInt(
text.replace(/[^0-9]/g,"")
);

if(!target) return;

let current = 0;

const increment =
Math.ceil(target / 100);

const update = () => {

current += increment;

if(current > target){

counter.innerText = text;

}
else{

if(text.includes("+")){

counter.innerText =
current + "+";

}
else{

counter.innerText =
current;

}

requestAnimationFrame(update);

}

};

update();

});

};

let counterStarted = false;

window.addEventListener(
"scroll",
() => {

const stats =
document.querySelector(".stats");

if(!stats) return;

const top =
stats.getBoundingClientRect().top;

if(
top < window.innerHeight &&
!counterStarted
){

counterStarted = true;
startCounter();

}

}
);


/* ==================================
SCROLL ANIMATION
================================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".fitur,.paket-card,.testi-card,.stat-card"
)
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/* ==================================
TESTIMONI AUTO SLIDE
================================== */

const testiCards =
document.querySelectorAll(
".testi-card"
);

let testiIndex = 0;

function rotateTestimoni(){

if(
testiCards.length < 2
) return;

testiCards.forEach(card=>{

card.style.opacity = "0.4";

});

testiCards[testiIndex]
.style.opacity = "1";

testiIndex++;

if(
testiIndex >= testiCards.length
){

testiIndex = 0;

}

}

setInterval(
rotateTestimoni,
3000
);

rotateTestimoni();


/* ==================================
LIGHTBOX GALERI
================================== */

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML =
"<img>";

document.body.appendChild(
lightbox
);

galleryImages.forEach(img=>{

img.addEventListener(
"click",
()=>{

lightbox.classList.add(
"active"
);

lightbox.querySelector(
"img"
).src = img.src;

}
);

});

lightbox.addEventListener(
"click",
()=>{

lightbox.classList.remove(
"active"
);

}
);


/* ==================================
PRELOADER
================================== */

window.addEventListener(
"load",
()=>{

const loader =
document.getElementById(
"preloader"
);

if(loader){

loader.style.opacity = "0";

setTimeout(()=>{

loader.remove();

},500);

}

}
);


/* ==================================
BACK TO TOP
================================== */

const backTop =
document.createElement("button");

backTop.innerHTML = "↑";

backTop.id = "backTop";

document.body.appendChild(
backTop
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 500){

backTop.style.display =
"block";

}
else{

backTop.style.display =
"none";

}

}
);

backTop.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);
