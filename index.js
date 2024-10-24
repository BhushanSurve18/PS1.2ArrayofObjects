const express = require('express');
const { resolve } = require('path');

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
      if(i != projects.length){
          project = project +  "'" + projects[i].name + "'" + ", " 
      }else{
        project = project +  "'" + projects[i].name + "'"
      }

    }
  }
  return project;
}

app.get("/project", (req,res)={
  const result = getProjectDetail(projects);
  console.log([result]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
