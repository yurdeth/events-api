## Rutas:
- *GET* /api/events : obtener todos los elementos.
- *GET* /api/events?q=<texto a buscar> : buscar elemento por nombre, ubicacion, descripcion, fecha.
- *GET* /api/events/<id> : obtener un elemento por id.
- *POST* /api//events : crear un elemento con json (name, location, category, date, details, capacity, userid), respuesta el id del elemento creado.
- *PUT* /api/events/<id> : actualizar un elemento con json (name, location, category, date, details, capacity, userid), respuesta json (success : (true|false)) dependiendo si fue exitoso o no.
- *DELETE* /api/events/<id> : eliminar un elemento, respuesta json (success : (true|false)) dependiendo si fue exitoso o no.
