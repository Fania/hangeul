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

const consonants = document.querySelectorAll(".consonants div");
const consonantSection = document.querySelector(".consonants");
function changeConsonants(ev,lang) {
  // console.dir(vs);
  if(lang=='en') {
    console.log(ev.type,'english');
    consonants.forEach( vs => {
      vs.innerHTML = vs.dataset.en;
    });
    consonantSection.classList = 'english consonants';
  } else {
    console.log(ev.type,'korean');
    consonants.forEach( vs => {
      vs.innerHTML = vs.dataset.ko;
    });
    consonantSection.classList = 'korean consonants';
  }
}

const syllables = document.querySelectorAll(".syllables div");
const syllableSection = document.querySelector(".syllables");
function changeSyllables(ev,lang) {
  // console.dir(vs);
  if(lang=='en') {
    console.log(ev.type,'english');
    syllables.forEach( vs => {
      vs.innerHTML = vs.dataset.en;
    });
    syllableSection.classList = 'english syllables';
  } else {
    console.log(ev.type,'korean');
    syllables.forEach( vs => {
      vs.innerHTML = vs.dataset.ko;
    });
    syllableSection.classList = 'korean syllables';
  }
}


const mcv = new Hammer(vowelSection);
const mcc = new Hammer(consonantSection);
const mcs = new Hammer(syllableSection);
mcv.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
mcc.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
mcs.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
// mc.get('pan').set({ enable: true, direction: Hammer.DIRECTION_HORIZONTAL });
mcv.on("swipeleft",  (ev) => { changeVowels(ev,"ko"); });
mcc.on("swipeleft",  (ev) => { changeConsonants(ev,"ko"); });
mcs.on("swipeleft",  (ev) => { changeSyllables(ev,"ko"); });
// mc.on("panleft",  (ev) => { changeVowels(ev,"ko"); });
mcv.on("swiperight", (ev) => { changeVowels(ev,"en"); });
mcc.on("swiperight", (ev) => { changeConsonants(ev,"en"); });
mcs.on("swiperight", (ev) => { changeSyllables(ev,"en"); });
// mc.on("panright", (ev) => { changeVowels(ev,"en"); });
