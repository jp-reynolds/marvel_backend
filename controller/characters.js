var db = require('../models');
var Character = db.character;

function characterIndex(req, res) {
  db.Character.find({}, function(err, characters) {
    if (err) res.send(err);
    else res.json(characters);
  });
}

function characterHeroIndex(req, res) {
  db.Character.find({organization: 'avengers'}, function(err, avengers) {
    if (err) res.send(err);
    else res.json(avengers);
  });
}

function characterVillainIndex(req, res) {
  db.Character.find({organization: 'villain'}, function(err, villains) {
    if (err) res.send(err);
    else res.json(villains);
  });
}

function characterHeroCreate(req, res) {
  console.log(req.body)
  let newHero = {
    supername: req.body.supername,
    name: req.body.name,
    abilities: req.body.abilities,
    summary: req.body.summary,
    allies: req.body.allies,
    foes: req.body.foes,
    quote: req.body.quote,
    image: req.body.image,
    organization: req.body.organization
  }
  db.Character.create(newHero, function (err, newHero) {
    if(err) res.send(err);
    res.json(newHero);
  });
}


function characterUpdate(req, res) {
  console.log(req.body);
  let id = req.body.id;

  db.Character.findOneAndUpdate(
    {_id: id},
    {$set: {
      supername: req.body.supername,
      name: req.body.name,
      origin: req.body.origin,
      abilities: req.body.abilities,
      summary: req.body.summary,
      allies: req.body.allies,
      foes: req.body.foes,
      quote: req.body.quote,
      }
    },
    {new: true},
    function (err, doc) {
      if (err) {
        console.log("error with update");
      } else {
        res.json(doc);
      }
    });
}


// update todo list item
// app.put('/api/todo/:id', function(req,res){
//   let task = req.body.task;
//   let description = req.body.description;

//   db.Todo.findOneAndUpdate(
//     {_id: req.params.id}, 
//     {$set:{task: task, description: description}}, 
//     {new: true}, //<--probably not necessary
//     function (err, doc) {
//         if (err) {
//           console.log("Something wrong when updating data!");
//       } else {
//         //doc is the json object that is being sent (refer to 'json' callback in JS functions)
//         res.json(doc);
//     }
//   })
// });


function characterDestroy(req, res) {

}

module.exports.characterIndex = characterIndex;
module.exports.characterHeroIndex = characterHeroIndex;
module.exports.characterVillainIndex = characterVillainIndex;

module.exports.characterHeroCreate = characterHeroCreate;
module.exports.characterUpdate = characterUpdate;

module.exports.characterDestroy = characterDestroy;