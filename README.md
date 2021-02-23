# Challengues para el grupo js_study_group de FrontEndCafe

## Tabla de contenidos

### ToDo List

Para probar la version en linea del TodoList, ingrese a https://alejandro088.github.io/fec_js_study_group/todolist/

Si desea ejecutar el TodoList en una aplicación existente, asegurese de tener un div para contener la lista.
Ejemplo: 

```html
<div id="todo"></div>
```

#### Instalación

Agregue el archivo js en su html principal.
Inicialize la TodoList de la siguiente manera:

```js
const todo = new TodoList('todo');
```

#### Metodos

```js
// Añade una nueva tarea con titulo "title"
todo.addTask('title') 

// Lista todas las tareas.
todo.filterFull();

// Lista las tareas activas o pendientes.
todo.filterActives();

// Lista las tareas completadas.
todo.filterCompleted();

// Elimina todas las tareas
todo.removeAllTask();

```
