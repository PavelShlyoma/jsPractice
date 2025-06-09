// function displayMaxWord(words) {
//     words = words.split(' ');
//     let objWords = {};
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] in objWords) {
//             objWords[words[i]] += 1;
//         } else {
//             objWords[words[i]] = 1;
//         }
//     }
//     let maxKey = '';
//     let max = 0;
//     for ( let key in objWords) {
//         if (objWords[key] > max) {
//             max = objWords[key];
//             maxKey = key;
//         }
//     }
//     return maxKey;
// }

// displayMaxWord('Раз Раз Раз Раз Два Три Три Три Два Раз')

const dateInputElement = document.getElementById('dataTransfer');

const getButtonElement = document.getElementById('getStartedCalculate');

const dateOutput = document.getElementById('dateOutput');

const dateMax = new Date();

let dateMaxMonth = dateMax.getMonth();

let dateMaxDate = dateMax.getDate();

if (dateMaxMonth < 10) {
    dateMaxMonth = `0` + dateMax.getMonth();
}

if (dateMaxDate < 10) {
    dateMaxDate = `0` + dateMax.getDate();
}

dateInputElement.setAttribute('max', `${dateMax.getFullYear()}-${dateMaxMonth}-${dateMaxDate}`)

getButtonElement.addEventListener('click', () => {
    const dateInputValue = dateInputElement.value;
    const now = new Date();

    if (dateInputValue) {
        const dateObj = new Date(dateInputValue);
        let sumDateYear = now.getFullYear() - dateObj.getFullYear();
        let sumDateMonth = now.getMonth() - dateObj.getMonth();
        dateOutput.innerHTML = `You are <b>${sumDateYear} years ${sumDateMonth} months</b> old`
    } else {
        dateOutput.textContent = 'No date selected'
    }
})

// START accordion

const acccordionElement = document.querySelectorAll(".accordion")

const accordionItemElement = document.querySelectorAll(".accordion-item")

for (let i = 0; i < acccordionElement.length; i++) {
    acccordionElement[i].addEventListener("click", function () {
        accordionItemElement[i].classList.toggle(`active`)
    })
}

// scroll view

const getHiddenElement = document.getElementById(`scrollIntoView`);

getHiddenElement.addEventListener(`click`, () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
window.addEventListener('scroll', function () {
    if (window.scrollY > 1500) {
    getHiddenElement.classList.add(`visible`)
} else {
    getHiddenElement.classList.remove(`visible`)
}
});
if (window.scrollY > 1500) {
    getHiddenElement.classList.add(`visible`)
} else {
    getHiddenElement.classList.remove(`visible`)
}

console.log(window.scrollY);