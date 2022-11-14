const main = document.getElementById("main");
const loader = document.getElementById("loader");
const breedSelect = document.getElementById("breed");

async function init() {
  // get breed list
  const result = await fetch("https://dog.ceo/api/breeds/list/all");
  const resultJson = await result.json();

  let breedOptions = "<option></option>";

  let breedList = Object.keys(resultJson.message);

  for (let i = 0; i < breedList.length; i++) {
    breedOptions += `<option value=${breedList[i]}>${breedList[i]}</option>`;
  }

  breedSelect.innerHTML = breedOptions;

  // get first image
  const randomresult = await fetch("https://dog.ceo/api/breeds/image/random");
  const randomresultJson = await randomresult.json();

  main.src = randomresultJson.message;

  // add event listeners
  breedSelect.addEventListener("change", handleBreedChange);

  main.addEventListener("load", function() {
    main.classList.add("show");
    loader.classList.remove("show");
  });
}

async function handleBreedChange(event) {
  const breed = event.target.value;

  main.classList.remove("show");
  loader.classList.add("show");

  const result = await fetch(` https://dog.ceo/api/breed/${breed}/images/random`);
  const resultJson = await result.json();

  main.src = resultJson.message;
}

init();