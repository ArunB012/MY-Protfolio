// json
// Address

let getBranch = "";
fetch('.//json/address.json')
 .then(response => response.json())
 .then(json =>{
    json.forEach(function(items){
        // console.log(items)
        getBranch += `<div class="col-sm-4">
                        <div class="cv_skills skill-box">
                            <img src="images/${items.Logo}.png" alt="" width="100%">
                            <h3>${items.Name}</h3>                            
                        </div>
                      </div>`;
    })
    if(document.querySelector('.cv-skill')){
        document.querySelector('.cv-skill').innerHTML = getBranch;
    }
 })
 
  const text = "React.JS FrontEnd Dev";
  const el = document.querySelector(".scramble-text");
  el.classList.remove("scramble-text"); // optional
  el.classList.add("flip-text");

  el.innerHTML = [...text].map((char, i) => 
    `<span style="--i:${i}">${char === " " ? "&nbsp;" : char}</span>`
  ).join("");
  