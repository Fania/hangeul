console.log('hello world');


// let vowels = document.querySelectorAll(".vowels div");

// vowels.forEach( vs => {
//     console.log(vs,'test');
//     // vs.classList.add("tmp");
// });


// vowels.forEach( vs => {
//     // console.dir(vs);
//     const alt = vs.dataset.alt;
//     console.log(alt);
// });







const vowels = document.querySelectorAll(".vowels div");
const vowelSection = document.querySelector(".vowels");
function changeVowels(ev,lang) {
  // console.dir(vs);
  if(lang=='en') {
    console.log(ev.type,'english');
    vowels.forEach( vs => {
      vs.innerHTML = vs.dataset.en;
    });
    vowelSection.classList = 'english vowels';
  } else {
    console.log(ev.type,'korean');
    vowels.forEach( vs => {
      vs.innerHTML = vs.dataset.ko;
    });
    vowelSection.classList = 'korean vowels';
  }
}
// changeVowels('ko');
// changeVowels('en');


const mc = new Hammer(vowelSection);
mc.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
mc.get('pan').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
mc.on("swipeleft",  (ev) => { changeVowels(ev,"ko"); });
mc.on("panleft",  (ev) => { changeVowels(ev,"ko"); });
mc.on("swiperight", (ev) => { changeVowels(ev,"en"); });
mc.on("panright", (ev) => { changeVowels(ev,"en"); });
