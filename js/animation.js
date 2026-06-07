```javascript id="86pnfi"
// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.15
});

// =========================
// FADE UP
// =========================

document.querySelectorAll('.fade-up').forEach(el => {
observer.observe(el);
});

// =========================
// ZOOM IN
// =========================

document.querySelectorAll('.zoom-in').forEach(el => {
observer.observe(el);
});

// =========================
// SLIDE LEFT
// =========================

document.querySelectorAll('.slide-left').forEach(el => {
observer.observe(el);
});

// =========================
// SLIDE RIGHT
// =========================

document.querySelectorAll('.slide-right').forEach(el => {
observer.observe(el);
});
```

