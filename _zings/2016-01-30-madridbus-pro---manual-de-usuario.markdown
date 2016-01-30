---
layout: zing
title: "MadridBus Pro - Manual de usuario"
date: 2016-01-30 22:15

keywords: 
description: 
---

Con una pantalla pequeña y tres botones de los cuales solo uno permite una interacción múltiple la funcionalidad de una aplicación de Pebble puede ser un poco confusa. 

En este artículo vamos a explicar la funcionalidad presente en MadridBus Pro para que, si alguien tiene dudas, puede venir aquí a ver qué se puede y como se puede hacer.

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

##<i class="fa fa-star"></i> Favoritas

##<i class="fa fa-search"></i> Buscar

##<i class="fa fa-gear"></i> Ajustes