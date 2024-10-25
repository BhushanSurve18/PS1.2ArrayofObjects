const { count } = require('console');
const express = require('express');
const res = require('express/lib/response');
const { resolve } = require('path');
const { exit } = require('process');

const app = express();
const port = 3000;

app.use(express.json());

//Exercise 1

const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' }
];

function  getProjectDetail(projects){
  let project =""
  for(i=0; i < projects.length; i++){
    if(projects[i].status === "ongoing"){
       project = project +  "'" + projects[i].name + "'"  + ", "
       }
  }
  return project;
}

app.get("/project", (req,res)=>{
  const result = getProjectDetail(projects);
  console.log([result]);
})


// Exercise 2

const cities = [
  { name: 'New York', population: 8000000, country: 'USA' },
  { name: 'Toronto', population: 2800000, country: 'Canada' },
  { name: 'Los Angeles', population: 4000000, country: 'USA' },
  { name: 'London', population: 9000000, country: 'UK' }
];

function filterBycountry(city,country){
  return city.country === country
}

app.get("/city/country/:country", (req,res)=>{
  let country= req.params.country
  let result = cities.filter(city=>filterBycountry(city,country))
  console.log(result)
})

//Exercise 3 

const songs = [
  { title: 'Song A', artist: 'Artist 1', duration: 4.5 },
  { title: 'Song B', artist: 'Artist 2', duration: 5.2 },
  { title: 'Song C', artist: 'Artist 3', duration: 3.8 },
  { title: 'Song D', artist: 'Artist 4', duration: 6.0 }
];

function getSongByDuration(songs){
  for(i=0; i < songs.length ; i++){
    if(songs[i].duration > 5){
      console.log("Title: " + songs[i].title)
      console.log("Artist: " + songs[i].artist)
      console.log("Duration: " + songs[i].duration)
      break;
    }
  }
}

app.get("/song", (req,res)=>{
  let result = getSongByDuration(songs);
  console.log(result);
})

//Exercise 4

const animals = [
  { species: 'Tiger', habitat: 'Forest', population: 3000 },
  { species: 'Elephant', habitat: 'Savannah', population: 5000 },
  { species: 'Panda', habitat: 'Bamboo Forest', population: 2000 },
  { species: 'Kangaroo', habitat: 'Grassland', population: 10000 }
];

function updateAnimalPopulation(species, population){
  return "The updated population for " + species + " is " + population
}

app.get("/animal", (req,res)=>{
  let species = req.query.species
  let population = parseInt(req.query.population)
  let result = updateAnimalPopulation(species, population)
  console.log(result)
})

//Exercise 5

const players = [
  { name: 'Player A', team: 'Team 1', goals_scored: 22 },
  { name: 'Player B', team: 'Team 2', goals_scored: 18 },
  { name: 'Player C', team: 'Team 1', goals_scored: 25 },
  { name: 'Player D', team: 'Team 3', goals_scored: 15 }
];

function getPlayeer(players){
  let playerName =""
  for(i=0; i < players.length; i++){
    if(players[i].goals_scored > 20){
      playerName = playerName +  "'" + players[i].name + "'" + ", "
    }
  }
  return playerName
}

app.get("/player", (req,res)=>{
  let result = getPlayeer(players)
  console.log([result])
})

//Exercise 6

const companies = [
  { name: 'Company A', industry: 'Tech', employees: 500 },
  { name: 'Company B', industry: 'Finance', employees: 300 },
  { name: 'Company C', industry: 'Tech', employees: 700 },
  { name: 'Company D', industry: 'Healthcare', employees: 400 }
];

function filterByIndustry(company, industry){
  return company.industry == industry;
}

app.get("/companies/industry/:industry", (req,res)=>{
 let industry = req.params.industry
 let result = companies.filter(company=>filterByIndustry(company, industry))
 console.log(result);
})

//Exercise 7

const books = [
  { title: 'Book A', author: 'Author 1', pages: 150 },
  { title: 'Book B', author: 'Author 2', pages: 320 },
  { title: 'Book C', author: 'Author 3', pages: 290 },
  { title: 'Book D', author: 'Author 4', pages: 400 }
];

function sortBookByPagesDecending(book1, book2){
return book2.pages - book1.pages
}

app.get("/books/sort-by-pages-descending", (req,res)=>{
 const bookCopy = books.slice();
 bookCopy.sort(sortBookByPagesDecending)
 console.log(bookCopy)
})

// Exercise 8

const people = [
  { name: 'Person A', country: 'India', age: 35 },
  { name: 'Person B', country: 'USA', age: 28 },
  { name: 'Person C', country: 'India', age: 32 },
  { name: 'Person D', country: 'India', age: 24 }
];

function getPeopleByAge(people){
  let peopleName =""
  for(i=0; i < people.length; i++){
    if(people[i].age > 30 && people[i].country ==="India" ){
      peopleName = peopleName +  "'" + people[i].name + "'" + ", "
    }
  }
  return peopleName
}

  app.get("/people", (req,res)=>{
    let result = getPeopleByAge(people)
    console.log([result])
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
