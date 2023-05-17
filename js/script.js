const habilidades = [
    "MySQL",
    "Programación",
    "PostgreSQL",
    "CSS3",
    "HTML5",
    "Javascript",
    "JAVA",
    "SQL",
]

habilidades.forEach(elemento => {
    const li = document.createElement("li");
    li.textContent = elemento;
    li.style.color = "#DADAD9";

    document.querySelector(".lista-habilidades").appendChild(li);
})