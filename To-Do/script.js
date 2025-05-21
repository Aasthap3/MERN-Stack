function addTask() {
  let input = document.getElementById("task");
  if (!input.value.trim()) {
    alert("Task is empty!");
    input.value = "";
    return;
  }

  const tl = document.getElementById("taskList");
  const cl = document.getElementById("completedTask");

  const l = document.createElement("li");
  l.classList.add("py-2", "container");

  const d = document.createElement("div");
  d.classList.add("d-flex");

  const s = document.createElement("span");
  s.innerText = input.value.trim();
  s.classList.add("flex-fill");

  const ci = document.createElement("i");
  ci.classList.add("bi", "bi-check2-circle");

  const cmplt = document.createElement("button");
  cmplt.classList.add("btn", "btn-success", "rounded-circle", "mx-2");

  const di = document.createElement("i");
  di.classList.add("bi", "bi-trash");

  const del = document.createElement("button");
  del.classList.add("btn", "btn-danger", "rounded-circle");

  del.appendChild(di);
  cmplt.appendChild(ci);
  d.appendChild(s);
  d.appendChild(cmplt);
  d.appendChild(del);
  l.appendChild(d);
  tl.appendChild(l);

  del.onclick = () => l.remove();

  cmplt.onclick = () => {
    d.removeChild(cmplt);
    tl.removeChild(l);
    cl.appendChild(l);
  };

  input.value = "";
}
