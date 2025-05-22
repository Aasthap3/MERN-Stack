async function getJoke() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  const data = await response.json();

  console.log(data);

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;

  document.getElementById("joke").classList.add("border", "rounded", "mx-auto", "my-5", "p-4", "w-50")
}
