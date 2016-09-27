## API implementada

| URL            | HTTP Verb | Action                                      |
| -------------- | --------- | ------------------------------------------- |
| /api/auth      | POST      | Valida y trae el token [username,password ] |
| /api/users     | GET       | Listar todos los usuarios                   |
| /api/users/:id | GET       | Trae un usuario                             |
| /api/users     | POST      | Agregar usuario [username,password,role]    |
| /api/users/:id | PUT	     | Update a puppy [username,password,role]     |
| /api/users/:id | DELETE    | Delete a puppy                              |
