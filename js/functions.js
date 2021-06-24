function yearCount() {
    var idaas = document.getElementById("year-count");
    var endDate = (new Date().getFullYear()) - 2020;
    idaas.appendChild(endDate);
    console.log(endDate)
}

yearCount();