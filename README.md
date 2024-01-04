# Natoure

Este proyecto es una landing page con funcionalidades limitadas que he construido como práctica del curso de CSS y SASS Avanzado de Jonas Schmedtmann.

No contiene React en absoluto y me base en [7/1 PATTERN de SASS](https://sass-guidelin.es/es/) para crear las carpetas con los archivos SASS.

Es el enfoque que se le dio en el curso para escribir SASS sano, sostenible y escalable

## Instalar dependencias

Abrir una nueva terminal en la carpeta del proyecto y correr el comando `npm i`.

## Servidor de desarrollo

Este proyecto hace uso de la extensión de VS Code llamada [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) la cual podemos descargar desde el apartado de extensiones de VS Code o con el siguiente comando de manera global desde `CMD`:
En windows:
`npm install live-server -g`
En MAC:
`sudo npm install live-server -g`

Una vez instalado de manera global live-server, ya podemos ejecutar el comando `npm start` el cual nos abrirá automáticamente una nueva ventana en el navegador por defecto que tengamos y aparte estará escuchando por cambios en cualquiera de los archivos SASS que tengamos vinculados en nuestro `main.sass`.

## Build

No hace falta realizar ningún build, pero para optimizar el código CSS resultante de compilar SASS podemos utilizar el comando `npm run build:css` que agregará prefijos de manera automática y optimizara el archivo CSS final vinculado al proyecto.
