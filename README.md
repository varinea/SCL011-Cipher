# Clave Segura

Fue creado con la intención de facilitar al cliente el poder crear una clave correcta para distintas funciones tanto como para sus cuentas privadas de banco o para algo tan sencillo como una aplicación en su celular, de este modo, facilitamos la tarea de crear una cuenta poco segura para sus aplicaciones.

Cualquier persona que necesite de una clave, ya sea para Facebook, cuentas de banco o para alguna aplicación en particular puede usar nuestro producto.

El código fue creado a partir de la fórmula [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), donde utilizamos mayormente el alfabeto y la numeración para crear un código difícil de entender para quien no conoce la formula.

## Diseño de la página web

Quería que fuera un diseño limpio, de fácil lectura para el usuario, sin ruido al momento de entrar en la página, que el cliente solo se enfoque en crear su clave, es por eso que se llegó a la conclusión de que un ambiente minimalista sería el más adecuado. 

Para llegar al diseño final me base en varias entrevistas con diferentes usuarios de los cuales tome varios consejos para poder llegar a un diseño más entendible y de fácil uso.

El primer proyecto no dejaba al usuario tener un fácil acceso dado que poseía muchas páginas innecesarias haciendo que varios entrevistados se fastidiaran, es por eso que se eliminaron tres páginas para finalmente dejar solo dos, donde una solo es una introducción a la aplicación y la otra tiene todo el proceso del código.


## Ejemplos del primer proyecto:   

![boceto1](https://66.media.tumblr.com/a9ce85753839eb294b0dbe339b610e4c/tumblr_pwtrbsNIvP1yu9kbco1_1280.jpg)
![boceto2](https://66.media.tumblr.com/edbe5d0bcdcca0f61548315a55bacd56/tumblr_pwtrbsNIvP1yu9kbco2_1280.jpg)
![boceto3](https://66.media.tumblr.com/125b094af52ae2a89d51e918bd3753c2/tumblr_pwtrbsNIvP1yu9kbco3_1280.jpg)

## Diseño final.
 

![boceto4](https://66.media.tumblr.com/1eee481b61e2c53a248772430563c4b3/tumblr_pwtspwnOM11yu9kbco1_1280.png)
 
![boceto5](https://66.media.tumblr.com/a36dbd219f27687b060820585bc21be5/tumblr_pwtspwnOM11yu9kbco2_1280.png)



## Producción 
### Index.Html
Se comenzó con un index.html donde se creó la primera estructura, aunque esta no mantiene ninguna funcionalidad especial con JavaScript para poder interactuar en la página,sirve como introducción.

### Index.Html2

Este es el segundo HTML y el que mantiene toda la conexión con la interacción de la página, donde el usuario podrá cifrar y descifrar su clave mediante JavaScript.

### Index.js

Se crea un index js con la intención de darle funciones e interacciones a los botones para que el cifrado y el descifrado puedan funcionar.
Aquí se hace el llamado por medio de ID para las cajas de texto y botones.

### Cipher.Js

Aquí es donde se encuentra la lógica de la página, donde hacemos trabajar ENCODE y DECODE, para que funciones el cifrado Cesar.

## Instrucciones para el buen uso de la aplicación.

- Siempre lea y analice atentamente las instrucciones
- Acceda a la página por medio del botón “Crea tu nueva clave”
- Llene los casilleros con lo que le es solicitado.
- Un número.
- Una palabra.
- Si desea crear una clave apriete el botón “Crear clave”
- Leer el casillero “Resultados” y descubrirá su nueva clave.
- Para decifrar su clave secreta, ingrese el mismo número (Casillero “Danos un número”) y copie el texto que es su nueva clave (Casillero “Escriba una palabra”)
- Leer el casillero “Resultados” y descubrirá la palabra secreta que había puesto anteriormente.
- Use el botón “Limpiar” para poder hacer una nueva clave si lo desea.

## Librería
https://www.youtube.com/watch?v=zd8eVrXhs7Y
https://www.youtube.com/watch?v=M15LVmGe8-w
https://www.youtube.com/channel/UC4CEqh4d3-6RcyyJxhFCMGg
https://cotevd.github.io/TrabajoCifradoCesar/
https://www.hazloconceramicos.com/blog/5-caracteristicas-del-diseno-minimalista-moderno/
https://grecia2727.github.io/lim-2018-05-bc-core-am-cipher/
https://developer.mozilla.org/es/
