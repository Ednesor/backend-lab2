# Backend Recetas

Este proyecto es una API para gestionar recetas de cocina. Permite obtener la lista de recetas existentes y agregar nuevas recetas mediante peticiones HTTP.

## Endpoints

### 1. Obtener todas las recetas

**GET** `/recetas`

#### Ejemplo de petición

```http
GET /recetas HTTP/1.1
Host: localhost:3000
```

### Ejemplo de respuesta

```json
[
  {
    "id": 1,
    "nombre": "Tortilla de patatas",
    "ingredientes": ["patatas", "huevos", "cebolla", "aceite de oliva", "sal"],
    "instrucciones": "Pelar y cortar las patatas..."
  }
]
```

## Documentación

### Crear usuario
```http
POST /users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer TU_TOKEN_AQUI
```
#### Entrada
```json
{
  "email": "email@mail.com",
  "password": "1234567890",
  "age": 23,
  "name": "Nombre Apellido"
}
```

### Obtener datos del usuario
```http
GET /users HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer TU_TOKEN_AQUI
```
#### Entrada
```json
{
  "email": "email@mail.com",
  "password": "1234567890",
}
```
### Obtener todas las recetas
```http
GET /recipes HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer TU_TOKEN_AQUI
```
#### Entrada
```json
{
  "email": "email@mail.com",
  "password": "1234567890",
}
```
### Ejemplo de petición

```http
POST /recetas HTTP/1.1
Host: localhost:3000
Content-Type: application/json
```

```json
{
  "nombre": "Ensalada César",
  "ingredientes": [
    "lechuga",
    "pollo",
    "queso parmesano",
    "crutones",
    "salsa césar"
  ],
  "instrucciones": "Mezclar todos los ingredientes en un bol..."
}
```
