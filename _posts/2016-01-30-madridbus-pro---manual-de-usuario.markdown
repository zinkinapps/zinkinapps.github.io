---
layout: zing
title: "MadridBus Pro - Manual de usuario"
date: 2016-01-30 22:15

keywords: 
description: 
---

Con una pantalla pequeña y tres botones de los cuales solo uno permite una interacción múltiple la funcionalidad de una aplicación de Pebble puede ser un poco confusa. 

En este artículo vamos a explicar la funcionalidad presente en MadridBus Pro para que, si alguien tiene dudas, puede venir aquí a ver qué se puede y como se puede hacer.

<!--more-->

## Menú de entrada

Al abrir la aplicación accedemos a un menú de tabla. Con las siguientes opciones:

* <i class="fa fa-map-marker"></i> Cercanas
* <i class="fa fa-star"></i> Favoritas
* <i class="fa fa-search"></i> Buscar
* <i class="fa fa-gear"></i> Ajustes

El reloj  Pebble (en cualquiera de sus versiones) tiene tres botones en el lado derecho (subir, seleccionar y bajar) y uno en el izquierdo (retroceder). Con los botones superior e inferior del lado derecho nos moveremos arriba y abajo por este menú y con el botón central seleccionaremos la opción a la que queremos acceder.

## <i class="fa fa-map-marker"></i> Cercanas

Al seleccionar la opción **Cercanas** en el menú principal la aplicación buscará las paradas cercanas a la ubicación del reloj en el radio de búsqueda definido en **Ajustes**. Por defecto esté radio de búsqueda es de 150 metros. La ubicación del reloj en realidad es la ubicación del smartphone al que está vinculado.

Primero mostrará una pantalla con el mensaje *Buscando paradas cercanas*, desde aquí pueden producirse tres situaciones:

* Que haya paradas dentro del radio de búsqueda. En ese caso mostrará un nuevo menú con la lista de paradas cercanas. 
* Que no haya paradas dentro del radio de búsqueda. Se mostrará una nueva pantalla con el mensaje *No hay paradas cerca*
* Que el servicio esté caído o haya algún problema de conexión. Se mostrará una nueva pantalla con el mensaje *Servicio no disponible. Prueba más tarde.*

En cualquiera de las opciones, el botón izquierdo del reloj nos llevará al menú inicial. Si la búsqueda ha finalizado con éxito con los botones superior e inferior del lado izquierdo podremos movernos para seleccionar cualquiera de los resultados.

Cada elemento del menú presenta, en primer lugar, el número de parada y debajo de este la dirección en la que se encuentra la parada. Desde nuestro punto de vista esta es la información más relevante para identificar la parada que devuelve el servicio de la EMT de Madrid. Bueno, la más relevante y la que cabe en estos elementos del reloj.

El botón central del lado derecho del reloj, también llamado botón de selección tiene dos acciones asociadas: una pulsación corta y una pulsación larga.

La pulsación corta nos llevará al menú de **Próximas llegadas**, la pulsación larga nos dará la opción de guardar está parada en favoritos. 

### Próximas llegadas

Al seleccionar una parada se mostrará una pantalla con el mensaje *Obteniendo próximas llegadas*.  En un plazo de tiempo breve debería mostrarse un menú con los tiempos de espera de los autobuses que prestan servicio en esa parada. Igual que en el listado de paradas cercanas pueden presentarse tres situaciones:

* Que haya autobuses con parada prevista. En este caso se mostrará un nuevo menú con la lista de próximas llegadas.
* Que no esté prevista la llegada de ningún autobús a esa parada. Esto sucederá si el último autobús de cada línea ya ha pasado o si hay alguna incidencia o imprevisto. Se mostrará una nueva pantalla con el mensaje *Parada sin servicio.*
* Que el servicio esté caído o haya algún problema de conexión. Se mostrará una nueva pantalla con el mensaje *Servicio no disponible. Prueba más tarde.*

En cualquiera de las opciones, el botón izquierdo del reloj nos llevará al menú inicial. Si la búsqueda ha finalizado con éxito con los botones superior e inferior del lado izquierdo podremos movernos para seleccionar cualquiera de los resultados.

El menú de próximas llegadas tiene dos secciones. Una primera sección con los **Datos de la parada** en el que mostrará un único elemento con el número  de parada y, si está disponible, la dirección en la que se encuentra y una segunda sección con las **Próximas llegadas**. En esta segunda sección cada elemento del menú muestra, en primer lugar, el número de autobús y la cabecera a la que se dirige. Justo debajo se muestra el tiempo que falta para que llegue el autobús y la distancia a la que se encuentra.

> A partir de la versión 1.2 de Pebble, al pulsar el botón de selección sobre los datos de la parada tenemos la opción de guardar esta parada en favoritos.

### Guardar en favoritos

La pantalla para guardar una parada en la lista de favoritos muestra el número de parada a guardar y dos iconos. Un aspa juntó al botón superior (símbolo asociado a la acción de cancelar/rechazar) y un check junto al botón inferior (símbolo asociado a la acción de confirmar/aceptar).

Si se pulsa el botón superior la parada no se guarda en la lista de favoritos y volvemos a la pantalla anterior. Si se pulsa el botón inferior se guarda la parada en la lista de favoritos y también volvemos a la pantalla anterior.

## <i class="fa fa-star"></i> Favoritas

Esta opción mostrará la lista de paradas guardadas en el reloj, bueno en realidad guardadas en el teléfono... Si la lista de paradas favoritas estuviera vacía mostraría una pantalla con el mensaje *No hay favoritos guardados*.

Al igual que en la lista de Paradas Cercanas, cada elemento del menú presenta, en primer lugar, el número de parada y debajo de este la dirección en la que se encuentra la parada. 

El botón central del lado derecho del reloj tiene dos acciones asociadas: una pulsación corta y una pulsación larga.

La pulsación corta nos llevará al menú de **Próximas llegadas**, la pulsación larga nos dará la opción de borrar está parada de favoritos. 

### Borrar favoritos

La pantalla para borrar una parada de la lista de favoritos es semejante a la de guardar parada. Muestra el número de parada a guardar y dos iconos (el aspa y el Check). 

Si se pulsa el botón superior la parada no se borra de la lista de favoritos y volvemos a la pantalla anterior. Si se pulsa el botón inferior se borra la parada en la lista de favoritos y también volvemos a la pantalla anterior.

En caso de borrar la última parada de la lista volveremos al menú inicial. 

> Desde la versión 1.2 una pulsación larga en el menú inicial nos permitirá borrar la lista de paradas favoritas de una sola vez. 

## <i class="fa fa-search"></i> Buscar

La operación más difícil de realizar en un *smartwatch* es introducir texto libre. Más que difícil es imposible. La pantalla de búsqueda de paradas tiene un funcionamiento similar al de otras aplicaciones de Pebble como la alarma, por ejemplo, que nos trasladan a la época de los recreativos y a la forma de introducir nuestro *alias* en las pantallas de Récords.

La pantalla, inicialmente muestra cuatro ceros dentro de unos cuadrados. Uno de esos cuadrados, el primero, tiene un color diferente. En el lado derecho hay tres iconos: un símbolo `+`  junto al botón superior, un símbolo `-` junto al botón inferior y un símbolo de Check junto al botón central.

El funcionamiento es el siguiente: si se pulsa el botón superior el número dentro del cuadrado de diferente color aumentará, si se pulsa el botón de la parte inferior el número dentro del cuadrado de diferente color disminuirá de valor. Cuando el número dentro del cuadrado se corresponda con el que tiene la parada que estamos buscando en esa posición (el número de parada actualmente consta, como mucho, de cuatro posiciones numéricas) se deberá pulsar al botón central para pasar al siguiente cuadrado.

En esta pantalla el botón central tiene, como en otras ocasiones, varias funciones. Una pulsación corta irá cambiando de cuadrado. Cuando estemos en el último cuadrado, la pulsación corta nos mostrará una pantalla en la que nos pedirá confirmación de si queremos buscar las próximas llegadas a la parada con el número que hemos introducido. Si confirmamos iremos al menú de *próximas llegadas*. 
Una pulsación larga borrará todo los números que hayamos introducido y nos volverá a situar en el primer cuadrado.

> Si la parada está sin servicio o si la parada no existe se mostrará el mismo mensaje: *Parada sin servicio*. En este punto se podría hacer una llamada al servicio de la EMT para comprobar si la parada existe pero hemos considerado que sería menos eficiente. Este es el motivo por el que en el menú de *próximas llegadas* solo aparece el número de parada y no la dirección de la misma.  En el caso de que esa parada se guarde en la lista de paradas favoritas sí que se consultará la información disponible de la misma, con el objetivo de que la información de las paradas favoritas sea siempre consistente.

## <i class="fa fa-gear"></i> Ajustes

Actualmente, el único ajuste oficial que tiene la aplicación es poder cambiar el radio de búsqueda de paradas. Por defecto es 150 y desde está pantalla se podrá reducir  a 100 o aumentar hasta 500. El funcionamiento es semejante al de la pantalla de búsqueda.

La pantalla muestra el número de metros y unos iconos en el lateral. Los mismos que ya conocemos de la pantalla de búsqueda. El botón superior aumentará de diez en diez el número. El botón inferior lo disminuirá de diez en diez también. El botón central nos llevará a la pantalla de confirmación del cambio. Al igual que en otras paradas de confirmación, el botón superior no guardará los cambios y el botón inferior si que los guardará.

> Desde la versión 1.2 hay un *ajuste oculto*. Si en lugar de realizar una pulsación corta para llegar al menú de Ajustes se realizar una pulsación larga se muestra una lista de colores. Esto cambia el color de fondo negro, que es el color por defecto de algunos elementos de pantalla, por el de la lista. Para que el cambio de color sea efectivo hay que salir de la aplicación y volver a entrar. 