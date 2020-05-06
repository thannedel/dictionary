let word;
function search() {
  word = document.getElementById('message').value;
  console.log(word);
  fetchData();
}

//fetchData();
async function fetchData() {
  const APIkey =
    'dict.1.1.20200423T091725Z.f741f11e7b49bc73.d5497efee7643e9c492604ccc494e40edb685973';
  //const word = 'hello';
  console.log('Logged Output: fetchData -> word', word);
  const res = await fetch(
    `
    https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${APIkey}&lang=en-de&text=${word}`
  );
  const data = await res.json();
  words = data;
  console.log('Logged Output: fetchData -> words', words);

  displayWords();
}

function displayWords() {
  let def = words.def[0];
  document.getElementById('output').innerHTML = def.text;

  // var inputVal = document.getElementById('myInput').value;
}
