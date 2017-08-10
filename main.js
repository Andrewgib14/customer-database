let container = document.querySelector(".container");
for (let i = 0; i < customers.results.length; i++) {
    let content =
        `<div class='content'>
        <img class="img" src="${customers.results[i].picture.large}" alt="">
        <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
        <hr>
        <p>${customers.results[i].email}</p>
        <br>
        <p>${customers.results[i].location.street}</p>
        <p>${customers.results[i].location.city},${customers.results[i].location.state} ${customers.results[i].location.zip}</p>
        <p>${customers.results[i].phone}</p>
        <p class= "ss">${customers.results[i].value}</p>
    </div>`;
    container.innerHTML += content;
};
