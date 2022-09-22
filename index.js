const web = "https://jsonplaceholder.typicode.com/posts?_limit=3";

function link() {
  fetch(web)
    .then((item) => item.json())
    .then((item2) => {
      let infoApi = "";
      item2.forEach((post) => {
        infoApi += ` 
        <article class="tarjeta">
          <div>
          <img src="./Información de Proyecto/projects-section/${post.id}.jpg" 
          alt="section ${post.id}">
          </div>

          <div class="text-tarjeta">
            ${post.title.slice(0, 30)}
          </div> 

          <div class="text-tarjeta2">
            <h3>${post.body.slice(0, 20)}</h3>
          </div>
           
          <div><a class="link-project" href="#">Learn More</a></div>
        </article>
              `;
      });
      console.log(infoApi);
      document.querySelector("#project").innerHTML = infoApi;
    })
    .catch((error) => console.log(error));
}
link();
