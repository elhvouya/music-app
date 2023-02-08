let albumsRow = document.querySelector(`.row`);

for (let i = 0; i < albums.length; i++) {
    let album = albums[i];
    albumsRow.innerHTML += `
    <div class="col">
                <a href="album.html?i=${i}">
                  <div class="card">
                    <img src="${album.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">${album.title}</h4>
                      <p class="card-text">${album.text}</p>
                    </div>
                  </div>
                </a>
              </div>`
}