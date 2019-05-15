function peopleRend()
{
    var data = JSON.parse(this.responseText);
    for(var i=0 ; i<4; i++)
        {
            var person = document.createElement("ul");
            person.innerHTML = data.results[i].name;
            peopleResult.appendChild(person);
            
            var height = document.createElement("li");
            height.innerHTML = data.results[i].height;
            peopleResult.appendChild(height);
            
            var mass = document.createElement("li");
            mass.innerHTML = data.results[i].mass;
            peopleResult.appendChild(mass);
            
            var birthYear = document.createElement("li");
            birthYear.innerHTML = data.results[i].birth_year;
            peopleResult.appendChild(birthYear);
            
            var gender = document.createElement("li");
            gender.innerHTML = data.results[i].gender;
            peopleResult.appendChild(gender);
        }
}


var peopleReq = new XMLHttpRequest();
peopleReq.addEventListener("load", peopleRend);
peopleReq.open("GET", "https://swapi.co/api/people");
peopleReq.send();


function planetRend()
{
    var data = JSON.parse(this.responseText);
    
    for(var i = 0; i < 11; i++)
    {
        
        var planets = document.createElement("ul");
        planets.innerHTML = data.results[i].name;
        planetsResult.appendChild(planets);
    }
}

var planetReq = new XMLHttpRequest();
planetReq.addEventListener("load", planetRend);
planetReq.open("GET", "https://swapi.co/api/planets");
planetReq.send();


function filmsRend()
{
    for(var i = 0; i < 11; i++)
    {
        var data = JSON.parse(this.responseText);
        
        var films = document.createElement("ul");
        films.innerHTML = data.results[i].name;
        filmsResult.appendChild(films);
        
        var episode = document.createElement("li");
        episode.innerHTML = data.results[i].episode_id;
        filmsResult.appendChild(episode);
        
        var director = document.createElement("ul");
        director.innerHTML = data.results[i].director;
        filmsResult.appendChild(director);
    }
}

var filmsReq = new XMLHttpRequest();
filmsReq.addEventListener("load", filmsRend);
filmsReq.open("GET", "https://swapi.co/api/films/");
filmsReq.send();
