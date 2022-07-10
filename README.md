# Intento de rest API.

## Como funciona?

Este proyecto funciona utilizando express, también utiliza el modo/tipo **ESModules/ESM/EcmaScript Modules** por lo cual, en la carpeta `./src/util` encontrarán un archivo llamado `jsonImport.js`, el cual, como se podrán imaginar, es para importar archivos JSON dentro de ESM.

Para usarlo es tan sencillo como esto:

```js
import jsonImport from "./src/jsonImport.js";

// Se debe usar en una función asíncrona.
async function getJson() {
  /* la ruta especificada debe ser absoluta.
❌ ../../folder/file.json
✅  /older/file.json
La Raiz de tu proyecto conciderada como './' y se agrega automáticamente a la ruta especificada.
*/

  let json = await jsonImport("data/users.json");
  console.log(json);
}

getJson();
// Output:
/*
{
id: "1",
name: "Some name"
}
*/
```

lo demás ya es lógica simple, pueden navegarla y comprenderla.
