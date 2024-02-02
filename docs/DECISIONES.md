# Decisiones tomadas

Luego de revisar los requisitos de la prueba, decidí abordarla separando la misma en varias entregas incrementales de la siguiente forma:

## Entorno y estructura
Dado que es complicado sacar una funcionalidad sin tener el entorno preparado para ello empecé por instalar una base de librerías imprescindibles para empezar a desarrollar:
- **Axios**: Aunque usando el método `fetch` sería suficiente para un servicio http que permita realizar consultas, Axios permite una configuración inicial muy simple que a la larga permite escalar mejor las configuraciones. Antiguamente he trabajado con servicios basados en `fetch` y se quedan cortos de funcionalidad muy rápido y aumentan la complejidad a la hora de gestionar distintas casuísticas.
- **Dotenv**: Imprescindible en proyectos que pretenden gestionar distintas configuraciones por entornos.
- **Testing Library**: Para poder ir testeando las funcionalidades individualmente y asegurarme de que salen bien antes de publicar.
- **React Query**: Puede ser un poco sobreingeniería para un solo hook pero he trabajado con custom hooks de fetch y nada se compara con el `useQuery` y demás características que proporciona la librería, a la larga ahorra mucho desarrollo y dolores de cabeza.
- **Design System**: Decidí no utilizar ninguna librería de componentes para demostrar un desarrollo desde cero que puede ir escalando poco a poco hacia una librería.

Luego escogí una estructura de carpetas CLEAN para poder gestionar un backend en hexagonal que permita escalar poco a poco y sin crear demasiadas carpetas dentro de carpetas que entorpezcan la navegación. Apuesto siempre por empezar simple e ir incrementando la organización según vaya siendo necesario.

## [PR #1](https://github.com/whitebrand/stay-destinations/pull/1) Listado de destinos
En esta primera entrega lo primordial era tener un listado de destinos disponibles por lo que dejé de lado la navegación para abordarla más adelante cuando fuera necesario.

1. Empecé por añadir un wrapper **HttpInstance** a **Axios** por si en un futuro hay es necesario cambiar a otra librería solo se modifica en este sitio. Incluí algunos comentarios en el fichero ya que la configuración escogida fue para los requisitos de la práctica y no tienen en cuenta la existencia de otros endpoints, dominios u autenticaciones.

2. Agregué un gateway `getDestinations` que se conecte al endpoint de la prueba.

3. Agregué un hook `useDestinationsList` para gestionar las consultas a dicho endpoint.

4. Agregué un mapper `mapDestination` para tener controlado el tipado del backend y poder adaptarlo a las necesidades del frontend o futuras modificaciones necesarias.

5. Agregué la funcion `getTranslatableName` para simular una elección de idioma por parte del usuario. Con un contexto de traducción i18n este método se podría aplicar automáticamente en plantilla o al obtener la estructura de traducción devuelta por el backend además de los propios literales de la aplicación.

6. Agregué una screen `DestinationsScreen` y un listado simple para mostrar todos los destinos de primer nivel. No existía aún la navegación a los hijos. En este punto, para un caso real, sería conveniente añadir una feature flag, ya que el listado sin navegación queda obsoleto, por lo que el usuario que lo use no le vería valor al mismo (o sí, dependiendo del objetivo del negocio).

## [PR #2](https://github.com/whitebrand/stay-destinations/pull/2) Navegación de los destino en árbol
En esta segunda parte me enfoqué especialmente en los destinos hijos y en la navegación hacia los mismos:

1. Añadí un componente `TreeList` de navegación en árbol para los items, trasladando la lógica que había programado previamente de forma legacy y que sea reutilizable en el futuro.

2. Implementé el nuevo componente en el listado de destinos.

## [PR #3](https://github.com/whitebrand/stay-destinations/pull/3) Indicador de destino destacado
En esta tercera parte añadí lógica adicional al componente `TreeList` para dar soporte al label de destacado. La forma de implementarlo puede no ser del todo sostenible a la larga ya que a lo mejor en el futuro surgen necesidades como modificar el label o añadir otros personalizados. Para este caso sugeriría que desde el equipo de diseño se decidan previamente los usos que se le van a dar al componente antes de añadir características adhoc.

## [PR #4](https://github.com/whitebrand/stay-destinations/pull/4) Navegación al destino
En la última entrega tuve dudas de si implementar o no todo un sistema de navegación para solo mostrar un título de lo que se ha escogido, pero decidí hacerlo para mostraros cómo lo implementaría en un caso real y con más pantallas.

1. Agregué la librería **React Navigation** y creé el router para gestionar futuras pantallas.

2. Como no había endpoint para recuperar destinos específicos por ID, añadí un nuevo gateway `getDestination` que utiliza `getDestinations` para simular un fetch. En este punto hay varias soluciones, yo opté por la sobreingeniería en este caso para la simulación, pero habría bastado también con pasarlo por url (poco sostenible a larga), crear un contexto de estado (no veo consistente crear un contexto solo para guardar información que pueda reutlizar). A mi personalmente en casos reales me gusta trabajar con un endpoint específico para obtener un recurso como dictan las [API Guidelines de Microsoft](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)


3. Añadí la pantalla `DestinationDetailsScreen` donde muestro el título y un dump de la información del recurso solicitado.

## ¿Qué más añadiría?
Como es inviable en una sola prueba tener toda la arquitectura ideal voy a detallar un poco qué más pondría para un caso real:

- **Gestión de errores automática**: Uno de los grandes dolores de cabeza es tener controlados todos los posibles errores, ya sean de petición, servidor o conexión. Es por esto que crearía un interceptor en axios que con la ayuda de una capa de notificación y el router se encarguen de poner al tanto al usuario de lo que ocurre ya sea con mensajes por toast, pantallas o indicadores de falta de conexión y acciones para volver a intentar.
- **Gestión de feature flags**: Para ser ágiles y tener entregas continuas que no entorpezcan a otros compañeros o incluso el usuario final, es conveniente tener un gestor de claves de funcionaliades activas, de forma que solo sean visibles en desarrollo pero no en producción y puedan activarse remotamente cuando sean necesarias.
- **Gestión de traducciones**: Otro de los dolores de cabeza es llevar un correcto versionado con las traducciones ya que colisionan desarrollos en progreso, versiones anticuadas de la app y los propios traductores que revisan que todo esté correcto. Un servicio que integraría sería Lokalise el cual simplifica todo esto.
- **Gestión de eventos de analítica**: Crearía una capa para poder hacer dispatch de los eventos de forma cómoda y sin que ensucien el código.