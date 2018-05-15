# marvel_backend

See JSON data hosted here...
https://marvelcu.herokuapp.com/
(type /api/characters or /api/places after url)

frontend deployed here...
http://marveluniverse.surge.sh/
(see https://github.com/jp-reynolds/marvel_frontend for more details)

CHARACTER ROUTES
get - /api/characters
get - /api/heroes
get - /api/villains
post - /api/characters
put - /api/characters

PLACES ROUTES
get - /api/places/
post- /api/places
put - /api/places

Villains and Heroes are both stored within the Character collection and can be parsed through by finding them by their 'organization' which is either 'villains' or 'avengers'.


This was made using Express and Mongoose/Mongo

Dependencies-
1. "body-parser": "^1.18.2",
2. "cors": "^2.8.4",
3. "dotenv": "^5.0.1",
4. "express": "^4.16.3",
5. "mongoose": "^5.0.17",
6. "morgan": "^1.9.0"