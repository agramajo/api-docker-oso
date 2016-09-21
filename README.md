# api-oso

Un ejemplo entero de docker que utiliza nginx, nodejs y mongo

## Requisitos

- docker
- docker compose 
- docker machine

## API

En app/api esta el servicio de nodejs para la api.

## WWW

En app/www esta el contenido estatico para la web spa.

## Instrucciones
 
- Clonamos el repo `git clone git@github.com:agramajo/api-oso`
- Creamos una maquina `docker-machine create -d virtualbox dev`
- Ponemos las variables `eval $(docker-machine env dev)`
- Crear la imagen `docker-compose build`
- Arrancamos los servicios `docker-compose up -d`

### Comandos utiles

- Conectarse a un contenedora ej. nginx `docker-compose run nginx bash`
- Ver la ip `docker-machine ip dev`

## Todo

- agregar base
