let leftPart = document.querySelector(`.left-part`);
//получаем индекс альбома
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);

leftPart.innerHTML +=  `
<div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${albums[i].img}" class="img-fluid rounded-start" alt="Узор">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title">${albums[i].title}</h4>
                            <p class="card-text">${albums[i].text}</p>
                            <p class="card-text"><small class="text-muted">${albums[i].year}</small></p>
                        </div>
                    </div>
                </div>
            </div>`

let list = document.querySelector(`.list-group`);

for (let j = 0; j < albums[i].tracks.length; j++) {
    track = albums[i].tracks[j];
    list.innerHTML += `
    <a href="#">
                    <li class="list-group-item d-flex">
                        <div class="d-flex">
                            <img src="assets/play.svg" width="40px">
                            <div>
                                <p>${track.title}</p><small class="text-muted">${track.author}</small>
                            </div>
                        </div>
                        <p>${track.time}</p>
                    </li>
                </a>`
}