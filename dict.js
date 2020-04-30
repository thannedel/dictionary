async function fetchData() {
  const res = await fetch(
    'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20200423T091725Z.f741f11e7b49bc73.d5497efee7643e9c492604ccc494e40edb685973&lang=en-ru&text=time'
  );
  const data = await res.json();
  console.log('Logged Output: testData -> data', data);
}
fetchData();
