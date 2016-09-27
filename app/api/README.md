## API implementada

| URL            | HTTP Verb | Action                                      |
| -------------- | --------- | ------------------------------------------- |
| /api/auth      | POST      | Valida y trae el token [username,password ] |
| /api/users     | GET       | Listar todos los usuarios                   |
| /api/users/:id | GET       | Trae un usuario                             |
| /api/users     | POST      | Agregar usuario [username,password,role]    |
| /api/users/:id | PUT	     | Update a puppy [username,password,role]     |
| /api/users/:id | DELETE    | Delete a puppy                              |

## Test auth

```shell
$ curl --data 'username=admin&password=test123' api-oso.herokuapp.com/api/auth
{"success":true,"data":[{"id":1,"username":"admin","password":"test123","role":1}],"token":"eyJhbGciOiJIUzI1NiJ9.YWRtaW4.P9C3VBCIS8BMNQwXjJVdJCmbo_mZvCwTZtffBtFw2IM"}
```
