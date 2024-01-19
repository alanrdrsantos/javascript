let heroList = [];

const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`;

/*const allSuperheroes = () => {
    const body = document.body
    const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`
    fetch(url)
    .then(res => res.json())
    .then((res) =>  {console.log(res)})
        //return body.innerHTML = JSON.stringify(res)
    
}*/

let order = "";
let sortby = "";

const createTable = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "tableHeroes");
  const theader = document.createElement("thead");
  const thid = document.createElement("th");
  const thname = document.createElement("th");
  const thpower = document.createElement("th");
  const thintelligence = document.createElement("th");
  const thwork = document.createElement("th");
  const tbody = document.createElement("tbody");

  const thTableHtml = () => {
    thid.innerHTML = "id";
    thname.innerHTML = "name";
    thpower.innerHTML = "power";
    thintelligence.innerHTML = "intelligence";
    thwork.innerHTML = "work";
  };

  thTableHtml();

  thid.style.cursor = "pointer";
  thname.style.cursor = "pointer";
  thpower.style.cursor = "pointer";
  thintelligence.style.cursor = "pointer";
  thwork.style.cursor = "pointer";

  theader.appendChild(thid);
  theader.appendChild(thname);
  theader.appendChild(thpower);
  theader.appendChild(thintelligence);
  theader.appendChild(thwork);
  table.appendChild(theader);
  table.appendChild(tbody);

  const listHeroesElement = document.querySelector("#list-heroes");
  listHeroesElement.appendChild(table);

  const orderAscDesc = (cases)=> {
    if (sortby == cases) {
        order = order == "asc" ? "desc" : "asc";
      } else {
        sortby = cases;
        order = "asc";
      }
    }

  const arrowAscDesc = (th)=> {
    if(order == "asc") {
        th.innerHTML += "&uarr;"
    } else {
        th.innerHTML += "&darr;"
    }
  }


  thid.addEventListener("click", () => {
    thTableHtml();
    orderAscDesc("id")
    arrowAscDesc(thid)
    orderByTable();

    /*
     * qual coluna está ordenado? é a id??
     *
     * SIM -> Entao troca o order e mantem a sortby
     * NAO -> Entao troca o sortby e a ordem eh a padrao: asc
     *  */

    /*if (sortby == "id" && order == "asc") {
        sortby = "id"
        order = "desc"
    } else {
        sortby = "id";
        order = "asc";
    }*/


    /*sortby = "id"

        if (ordenar) {
            order = "asc"
            thid.innerHTML += "&uarr;"
            ordenar = false
        } else {
            order = "desc"
            thid.innerHTML += "&darr;"
            ordenar = true
        } */
  });

  thname.addEventListener("click", () => {
    thTableHtml();
    orderAscDesc("name")
    arrowAscDesc(thname)
    orderByTable();
    
  });

  thpower.addEventListener("click", () => {
    thTableHtml();
    orderAscDesc("power")
    arrowAscDesc(thpower)
    orderByTable();
  });

  thintelligence.addEventListener("click", () => {
    thTableHtml();
    orderAscDesc("intelligence")
    arrowAscDesc(thintelligence)
    orderByTable();
  });

  thwork.addEventListener("click", () => {
    thTableHtml();
    orderAscDesc("work")
    arrowAscDesc(thwork)
    orderByTable();
  });
};

const populateHeroes = (heroes) => {
  const tableHeroes = document.querySelector("#tableHeroes");
  const tbodyHeroes = tableHeroes.querySelector("tbody");

  tbodyHeroes.innerHTML = "";

  heroes.forEach((hero) => {
    const tr = document.createElement("tr");
    const tdid = document.createElement("td");
    const tdname = document.createElement("td");
    const tdpower = document.createElement("td");
    const tdintelligence = document.createElement("td");
    const tdwork = document.createElement("td");
    tdid.innerHTML = hero.id;
    tdname.innerHTML = hero.name;
    tdpower.innerHTML = hero.powerstats.power;
    tdintelligence.innerHTML = hero.powerstats.intelligence;
    tdwork.innerHTML = hero.work.occupation;

    tr.appendChild(tdid);
    tr.appendChild(tdname);
    tr.appendChild(tdpower);
    tr.appendChild(tdintelligence);
    tr.appendChild(tdwork);
    tbodyHeroes.appendChild(tr);
  });
};

const orderByTable = () => {
  heroList.sort((a, b) => {
    switch (sortby) {
      case "id":
        if (a.id < b.id) {
          return order === "asc" ? -1 : 1;
        }
        if (a.id > b.id) {
          return order == "asc" ? 1 : -1;
        }
        break;
      case "name":
        return order === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      case "power":
        if (a.powerstats.power < b.powerstats.power) {
          return order === "asc" ? -1 : 1;
        }
        if (a.powerstats.power > b.powerstats.power) {
          return order == "asc" ? 1 : -1;
        }
        break;
      case "intelligence":
        if (a.powerstats.intelligence < b.powerstats.intelligence) {
          return order === "asc" ? -1 : 1;
        }
        if (a.powerstats.intelligence > b.powerstats.intelligence) {
          return order == "asc" ? 1 : -1;
        }
        break;
      case "work":
        return order === "asc" ? a.work.occupation.localeCompare(b.work.occupation) : b.work.occupation.localeCompare(a.work.occupation)
        /*if (order === "asc") {
          return a.work.occupation.localeCompare(b.work.occupation);
        }
        if (order === "desc") {
          return b.work.occupation.localeCompare(a.work.occupation);
        }*/
      default:
        break;
    }

    return 0;

    /* return a.powerstats.power == b.powerstats.power ? 0 : a.powerstats.power < b.powerstats.power  ? -1 : 1 */
  });
  console.log(heroList);
  populateHeroes(heroList);
};

async function getAllSuperheroes() {
  const response = await fetch(url);
  heroList = await response.json();

  console.log(heroList);

  createTable();
  populateHeroes(heroList);

  /*const buttonPower = document.querySelectorAll(".btnPower")
    
    for(const btn of buttonPower) {
      btn.style.display = "flex"
  }
  

  const powerSuperherosAsc = document.querySelector("#power-superheroes-asc");
  powerSuperherosAsc.addEventListener("click", () => orderByPower("asc"));

  const powerSuperherosDesc = document.querySelector("#power-superheroes-desc");
  powerSuperherosDesc.addEventListener("click", () => orderByPower("desc"));

  const nameSuperheroes = document.querySelector("#name-superheroes");
  nameSuperheroes.addEventListener("click", ()=> orderByName("asc"))*/
}

//const powerHeroes = heroList.filter((heroes) => heroes.powerstats.power > 90)

//console.log(powerHeroes)

console.log(heroList);

window.addEventListener("load", getAllSuperheroes);
