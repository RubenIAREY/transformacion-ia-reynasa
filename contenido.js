/* Transformación IA Reynasa · contenido único de la web, los PDF y el Word.
   Paso 1: la propuesta (hoja de ruta). Paso 2: Claude en Chrome dentro de Sage X3 (versión limpia para web pública:
   sin direcciones internas, nombres de servidores, cifras de licencias ni nombres de compañeros).
   Bloques: p, lead, h, ul, claves, pasos, cita, nota, aviso, frase, tabla, datos, ideas, tarjetas, linea, antes,
   columnas, enlace, ciclo, escala, barras, capas, recorrido, prompts, carrusel, interactivo. Solo se usa <b> y <a> en línea. */
(function (raiz, f) { if (typeof module === 'object' && module.exports) module.exports = f(); else raiz.CONTENIDO = f(); })(this, function () {
  var SAGE = 'claude-en-chrome-sage/';
  return {
    meta: {
      titulo: 'Transformación IA Reynasa',
      url: 'https://rubeniarey.github.io/transformacion-ia-reynasa/',
      fecha: 'octubre de 2026',
      autor: 'Rubén López',
      archivo: 'Transformacion-IA-Reynasa',
      video: SAGE + 'videos/claude-en-chrome-sage.mp4',
      poster: SAGE + 'videos/claude-en-chrome-sage-portada.jpg',
      proyecto: SAGE + 'proyecto/',
      presentacion: SAGE + 'presentacion/',
      presentacionPdf: SAGE + 'presentacion/Claude-en-Chrome-Sage-X3.pdf',
    },
    pasos: [
      { id: 'p1', n: '1', t: 'La propuesta', corto: 'La propuesta', x: 'La hoja de ruta para llevar Claude a toda Reynasa: el OK de IT, el plan y cómo formar a cada persona.' },
      { id: 'p2', n: '2', t: 'Claude en Chrome en Sage', corto: 'Claude en Chrome', x: 'Cómo funciona Claude en Chrome dentro de Sage X3: un vídeo, la presentación y las reglas de uso.' },
    ],
    portada: {
      kicker: 'Transformación con inteligencia artificial · Octubre de 2026',
      h1: 'Antes de formar a nadie: <em>el OK de IT</em>.',
      sub: 'La hoja de ruta para llevar Claude a toda Reynasa, en dos pasos.',
    },
    secciones: [
      // ============================================================ PASO 1 · LA PROPUESTA
      { id: 'inicio', paso: 'p1', t: 'Inicio', corto: 'Inicio', img: 'portada', x: 'La hoja de ruta para llevar Claude a toda Reynasa, en dos pasos.',
        subs: [{ id: 'recorrido', t: 'El recorrido', blocks: [
          { t: 'recorrido' },
        ] }] },

      { id: 'mensaje', paso: 'p1', t: 'Sin el OK de IT, la formación no sirve', corto: 'El mensaje', img: 'mensaje',
        x: 'Es lo primero que nos preguntará todo el mundo.',
        subs: [{ id: 'mensaje', t: 'El mensaje', blocks: [
          { t: 'cita', x: '¿Lo ha visto IT? ¿Ha dado su OK?', who: 'La primera pregunta de todos cuando vean lo que hace Claude' },
          { t: 'ideas', items: [
            { ico: 'formacion', k: 'Da igual la formación', x: 'Por buena que sea, sin el OK de IT nadie usará Claude Code ni Cowork por miedo al riesgo.' },
            { ico: 'empresa', k: 'El OK de Dirección no basta', x: 'Aunque a todos les parezca bien, la gente esperará a que IT dé el visto bueno.' },
            { ico: 'escudo', k: 'IT da la confianza', x: 'Con su OK, las pruebas y la formación pasan a ser algo oficial y seguro.' },
          ] },
        ] }] },

      { id: 'it', paso: 'p1', t: 'Lo que preocupa a IT: que un agente tire Sage X3', corto: 'Preocupa a IT', img: 'it',
        x: 'El miedo no son los datos. Es que un agente haga algo que no debe y provoque una caída.',
        subs: [{ id: 'it', t: 'Lo que preocupa', blocks: [
          { t: 'frase', x: 'El fallo humano siempre existirá. Lo que hay que acotar es lo que puede hacer un agente por su cuenta.' },
          { t: 'tarjetas', items: [
            { ico: 'cursor', k: 'Control del navegador', x: 'Que Claude maneje Chrome y entre en Sage, NextShop u otras webs sea seguro.' },
            { ico: 'bajar', k: 'Descargas', x: 'Que lo que descarga sea seguro y vaya a una carpeta controlada.' },
            { ico: 'servidor', k: 'Acciones en el sistema', x: 'Que no pueda crear, cambiar ni borrar nada en Sage que provoque una caída.' },
            { ico: 'ojo', k: 'Incertidumbre', x: 'Saber qué hace el agente, con qué permisos y qué deja registrado.' },
          ] },
        ] }] },

      { id: 'sabemos', paso: 'p1', t: 'Claude en Chrome trabaja como un usuario más', corto: 'Ya sabemos', img: 'sabemos',
        x: 'Sin conexión especial, con tu usuario y con tus permisos.',
        subs: [{ id: 'sabemos', t: 'Lo que ya sabemos', blocks: [
          { t: 'tarjetas', items: [
            { ico: 'enchufe', k: 'Sin conexión especial', x: 'No usa ninguna API de Sage. Trabaja sobre la pantalla web, con clics, como una persona.' },
            { ico: 'usuario', k: 'Tu usuario y tus permisos', x: 'Usa tu sesión de Chrome. Para Sage eres tú quien hace clic, y queda registrado con tu usuario.' },
            { ico: 'usuarios', k: 'Un agente ≈ un usuario', x: 'Para el servidor, uno o dos agentes pesan lo mismo que una o dos personas. El riesgo aparece con muchas rutinas a la vez.' },
            { ico: 'stop', k: 'Pide permiso', x: 'Antes de guardar, validar, enviar o borrar, se para y pregunta. Chrome muestra un aviso mientras lo controla.' },
          ] },
          { t: 'enlace', kicker: 'Paso 2', k: 'Claude en Chrome dentro de Sage X3', x: 'Un vídeo de un minuto, la presentación y las reglas de uso.', href: '#/video', btn: 'Ver cómo funciona →', img: 'sage-portada' },
        ] }] },

      { id: 'reglas', paso: 'p1', t: 'Reglas para los agentes: qué sí y qué no', corto: 'Qué sí y qué no', img: 'reglas',
        x: 'Nuestra propuesta para validar con IT.',
        subs: [
          { id: 'si-no', t: 'Qué sí y qué no', blocks: [
            { t: 'columnas', items: [
              { k: 'Sí puede', tono: 'si', items: ['Leer y analizar Excel, PDF y correos', 'Buscar información en internet', 'Descargar archivos a una carpeta controlada', 'Redactar documentos, informes y borradores', 'Consultar Sage para leer y descargar (mejor con un usuario de solo lectura)'] },
              { k: 'No puede', tono: 'no', items: ['Crear, modificar o borrar nada en Sage X3', 'Escribir contraseñas o iniciar sesión por nosotros', 'Instalar programas o conectar herramientas sin permiso', 'Tocar servidores o bases de datos', 'Rutinas pesadas a la vez o en hora punta, y el modo «sin aprobaciones»'] },
            ] },
          ] },
          { id: 'preguntas', t: 'Lo que preguntamos a IT', blocks: [
            { t: 'pasos', items: [
              { k: 'Licencias', x: 'Si las licencias de Sage X3 son por usuario o por sesiones a la vez, y si un agente puede ocupar una más.' },
              { k: 'Tiempo de sesión', x: 'Si hay límites o cierres automáticos que afecten a rutinas de madrugada.' },
              { k: 'Exportaciones', x: 'Qué exportaciones pesan al servidor y en qué horas conviene evitarlas.' },
              { k: 'Alertas', x: 'Si algún registro o alerta de Sage salta con actividad rápida o repetida.' },
              { k: 'Solo lectura', x: 'Si se puede crear un usuario de Sage de solo lectura para las pruebas con agentes.' },
            ] },
          ] },
        ] },

      { id: 'ruta', paso: 'p1', t: 'La hoja de ruta: cuatro pasos, en este orden', corto: 'Cuatro pasos', img: 'ruta',
        x: 'Sin el paso 1 no empieza nada.',
        subs: [{ id: 'ruta', t: 'Cuatro pasos', blocks: [
          { t: 'linea', items: [
            { n: 'Paso 1', t: 'IT', x: 'Le explicamos lo que estamos haciendo. Su OK nos permite seguir con las pruebas.' },
            { n: 'Paso 2', t: 'Pruebas y formación', x: 'Seguimos con el piloto en Compras, lo grabamos y creamos la formación.' },
            { n: 'Paso 3', t: 'Dirección', x: 'Le presentamos un plan de transformación digital con IA para toda la empresa.' },
            { n: 'Paso 4', t: 'Toda la empresa', x: 'Desplegamos el plan con formación y acompañamiento a cada persona.' },
          ] },
          { t: 'frase', tono: 'rojo', x: 'Sin el paso 1 no empieza nada.' },
        ] }] },

      { id: 'plan', paso: 'p1', t: 'Un plan de verdad, no solo formaciones', corto: 'El plan', img: 'plan',
        x: 'Cada persona sale con su trabajo resuelto con Claude, no con teoría.',
        subs: [
          { id: 'plan', t: 'El plan', blocks: [
            { t: 'tarjetas', items: [
              { ico: 'usuario', k: 'Uno a uno', x: 'Rubén se sienta con cada persona y le enseña a usar Claude con su trabajo de verdad.' },
              { ico: 'usuarios', k: 'Mini formaciones de 3 en 3', x: 'Grupos pequeños, con casos de uso de cada departamento.' },
              { ico: 'check', k: 'Casos reales', x: 'Cada persona sale con tareas suyas ya resueltas con Claude.' },
              { ico: 'grafica', k: 'Seguimiento', x: 'Medimos cuánto tiempo se ahorra y dónde se atasca cada uno.' },
            ] },
          ] },
          { id: 'ganamos', t: 'Qué ganamos', blocks: [
            { t: 'tarjetas', items: [
              { ico: 'sube', k: 'Una productividad brutal', x: 'Quien sabe usar Claude como se puede usar multiplica lo que produce en su puesto.' },
              { ico: 'empresa', k: 'Para todos, no para unos pocos', x: 'Si solo lo tienen algunos, no sabremos de qué es capaz cada equipo.' },
              { ico: 'ojo', k: 'Ver quién se adapta', x: 'Quien tiene ganas de aprender va a disparar su productividad. Sabremos a quién acompañar más.' },
              { ico: 'escudo', k: 'Una empresa preparada', x: 'Reynasa trabajando con IA en el día a día, con reglas claras y el respaldo de IT y de Dirección.' },
            ] },
          ] },
        ] },

      { id: 'ok', paso: 'p1', t: 'Si nos dan el OK: una estructura, no formaciones sueltas', corto: 'Si nos dan el OK', img: 'ok',
        x: 'Si Dirección aprueba el plan, la formación llega a todas las personas que trabajan con un ordenador.',
        subs: [
          { id: 'estructura', t: 'La estructura', blocks: [
            { t: 'datos', items: [
              { n: '4', l: 'personas por grupo, para que cada una practique con su propio trabajo' },
              { n: '1 h', l: 'a la semana. La primera sesión, de 1 a 2 horas' },
              { n: '3', l: 'niveles: básico, avanzado y súper avanzado' },
              { n: '1–2', l: 'meses después, cada grupo repite y sube de nivel' },
            ] },
          ] },
          { id: 'niveles', t: 'Tres niveles', blocks: [
            { t: 'columnas', items: [
              { k: 'Básico', sub: 'Quien no tiene Claude o acaba de empezar', tono: 'n1', items: ['Le instalamos Claude', 'La aplicación de escritorio', 'Cómo darle contexto y pedirle bien las cosas', 'Proyectos, skills y conectores', 'Primera sesión de 1 a 2 horas'] },
              { k: 'Avanzado', sub: 'Quien ya lleva unos meses usándolo', tono: 'n2', items: ['Claude Cowork', 'Claude Code', 'Solo con las reglas acordadas con IT', 'Casos de su departamento'] },
              { k: 'Súper avanzado', sub: 'Aún no hay nadie, pero lo habrá', tono: 'n3', items: ['Automatizar tareas repetitivas', 'Rutinas y agentes, siempre dentro de las reglas de IT', 'Ayudar a formar a sus compañeros'] },
            ] },
            { t: 'interactivo', id: 'nivel', fallback: [] },
          ] },
          { id: 'ciclo', t: 'El ciclo de cada grupo', blocks: [
            { t: 'linea', items: [
              { n: 'Semana 1', t: 'Sesión de 1 a 2 horas', x: 'Instalación, lo básico y una tarea suya resuelta con Claude.' },
              { n: 'Las semanas siguientes', t: 'Practican', x: 'Con su trabajo diario. Dudas por correo o en los ratos de seguimiento.' },
              { n: 'Al mes o a los 2 meses', t: 'Segunda sesión', x: 'Con el mismo grupo: repasamos lo que han hecho y damos un paso más.' },
              { n: 'Después', t: 'Siguiente nivel', x: 'Cuando lo dominan, pasan al avanzado, y de ahí al súper avanzado.' },
            ] },
            { t: 'nota', x: 'Y así con todas las personas de la empresa que trabajan con un ordenador.' },
          ] },
        ] },

      { id: 'falta', paso: 'p1', t: 'Para que funcione, necesitamos tres cosas', corto: 'Qué hace falta', img: 'falta',
        x: 'Y el siguiente paso: la reunión con IT.',
        subs: [{ id: 'falta', t: 'Lo que hace falta', blocks: [
          { t: 'tarjetas', items: [
            { ico: 'bandera', k: 'Dirección de acuerdo', x: 'Que el plan sea una prioridad de la empresa y que gran parte del día a día de Rubén sea formar y llevar la transformación.' },
            { ico: 'calendario', k: 'Recursos Humanos', x: 'Organizar los grupos por nivel, los horarios y las convocatorias, y el seguimiento de quién ha pasado por cada nivel.' },
            { ico: 'escudo', k: 'IT con nosotros', x: 'Decidir juntos qué se puede hacer con Cowork y Claude Code, y dar Claude a quien todavía no lo tenga.' },
          ] },
          { t: 'frase', tono: 'oscuro', kicker: 'Siguiente paso', x: 'Reunión con IT antes de la formación del jueves.', sub: 'Primero su OK. Después, las pruebas y la formación. Luego, el plan con Dirección para toda la empresa.' },
          { t: 'enlace', kicker: 'Paso 2', k: 'Claude en Chrome dentro de Sage X3', x: 'Lo que vamos a enseñar a IT: cómo funciona, un vídeo y las reglas.', href: '#/video', btn: 'Ir al paso 2 →', img: 'sage-portada' },
        ] }] },

      // ============================================================ PASO 2 · CLAUDE EN CHROME EN SAGE
      { id: 'video', paso: 'p2', t: 'Claude en Chrome dentro de Sage, en un minuto', corto: 'Vídeo', img: 'sage-portada', video: true,
        x: 'Qué hace, cómo lo hace y qué ganamos.',
        subs: [{ id: 'video', t: 'El vídeo', blocks: [
          { t: 'tarjetas', items: [
            { ico: 'buscar', k: 'Qué hace', x: 'Busca, consulta y descarga en Sage lo que le pides: stock, pedidos, fichas e informes.' },
            { ico: 'cursor', k: 'Cómo lo hace', x: 'Como una persona: mira la pantalla, hace clic y comprueba. Con tu usuario y tus permisos.' },
            { ico: 'sube', k: 'Qué ganamos', x: 'Tiempo en las consultas repetitivas, sin instalar nada en Sage. Tú revisas el resultado.' },
          ] },
          { t: 'ciclo', items: [
            { ico: 'ojo', k: 'Mira', x: 'Lee la pantalla de Sage.' },
            { ico: 'idea', k: 'Piensa', x: 'Decide el siguiente paso.' },
            { ico: 'cursor', k: 'Actúa', x: 'Hace un clic o escribe.' },
            { ico: 'check', k: 'Comprueba', x: 'Mira el resultado y sigue.' },
          ] },
        ] }] },

      // Fuente única: Proyecto-Claude-en-Chrome/departamentos-y-niveles.md (sin nombres de personas)
      { id: 'departamentos', paso: 'p2', t: 'Claude en Chrome en cada departamento', corto: 'En cada departamento', img: 'sabemos',
        x: 'Lo que más se hace en Sage es buscar información. Justo lo que Claude en Chrome hace bien y sin riesgo.',
        subs: [
          { id: 'departamentos', t: 'Seis departamentos', blocks: [
            { t: 'frase', x: 'Lo que más se hace en Sage es buscar información; después, descargar y cruzar.', sub: 'Lo hemos visto en todos los departamentos con los que hemos hablado.' },
            { t: 'deptos', items: [
              { ico: 'carrito', k: 'Compras', hoy: 'Tarifas, propuestas de pedido y pedidos a proveedor, cruzados a mano.',
                con: ['Consulta la propuesta de pedido, el stock y lo pendiente de recibir', 'Compara la tarifa del proveedor con los precios de Sage', 'Busca equivalencias de referencias en NextShop'],
                gana: 'Menos errores de precio y referencia, y adiós a los cruces a mano.', nuncaT: 'De momento no', nunca: 'subir tarifas, precios ni referencias.' },
              { ico: 'caja', k: 'Recepción y almacén', hoy: 'Buscar el albarán, descargarlo y contrastarlo a mano con el del proveedor.',
                con: ['Busca y descarga el albarán', 'Lo compara con el del proveedor y da las diferencias', 'Rutina mensual: cruza Sage y Expert SGA para el informe de litigios'],
                gana: 'Abres el archivo con las diferencias ya encontradas.' },
              { ico: 'factura', k: 'Conformidad de facturas', hoy: 'Revisar cantidades, precios, cargos y abonos de cada factura frente a sus albaranes.',
                con: ['Busca y descarga los albaranes de cada factura', 'Prepara el contraste factura-albaranes con solo las diferencias'],
                gana: 'La revisión empieza por las diferencias, no por cero.', nunca: 'registrar ni contabilizar facturas.' },
              { ico: 'calculadora', k: 'Contabilidad y tesorería', hoy: 'Lo que más se hace es buscar información y sacar informes.',
                con: ['Busca la situación de un cliente o asientos por importe', 'Descarga informes, como clientes con encurso superado', 'Prepara los vencimientos por método de pago'],
                gana: 'Horas de búsqueda que pasan a ser una pregunta.', nunca: 'contabilizar, pagar ni dar el OK a un pago.' },
              { ico: 'euro', k: 'Cobros y riesgo', hoy: 'Todo el día mirando qué debe cada cliente: vencidos e impagos.',
                con: ['«Resúmeme la situación del cliente X»: deuda, vencidos e impagos', 'En segundos, antes de llamar'],
                gana: 'Cada llamada, con el resumen ya hecho.' },
              { ico: 'telefono', k: 'Comercial y call center', hoy: 'Consultar stock, pedidos y tarifas, y sacar los informes de Ventas.',
                con: ['«¿Hay stock?», «¿se ha entregado?», «¿qué tarifa tiene?»', 'Descarga el informe comercial del mes, resumido'],
                gana: 'Respuestas al cliente más rápidas.' },
            ] },
          ] },
          { id: 'niveles', t: 'Niveles de acceso', blocks: [
            { t: 'escalera', items: [
              { k: 'Consultar', x: 'Buscar y leer en Sage y en otras webs de la empresa.', ej: '«¿Hay stock de esta referencia?»', cuando: 'Desde el primer día' },
              { k: 'Descargar y comparar', x: 'A una carpeta de trabajo, contra el documento del proveedor o un Excel.', ej: '«Descarga el albarán y compáralo con el del proveedor»', cuando: 'Fase 1 (ahora), con OK de IT por persona' },
              { k: 'Rutinas', x: 'Tareas que se repiten solas cada semana o cada mes.', ej: '«Cada lunes, saca el informe de litigios y dime las diferencias»', cuando: 'Cuando 1 y 2 lleven un tiempo sin incidencias' },
              { k: 'Cambios controlados', x: 'Cambios concretos en una lista cerrada de pantallas, siempre con confirmación.', ej: 'Por decidir', cuando: 'Dentro de unos meses, solo si todo ha ido bien' },
            ] },
            { t: 'nota', x: 'Se sube de nivel cuando IT lo aprueba.' },
            { t: 'frase', tono: 'rojo', kicker: 'Nunca, en ningún nivel', x: 'Contabilizar, dar el OK a pagos ni registrar facturas.', sub: 'Si se sube mal una tanda de facturas, el problema llega hasta Hacienda.' },
          ] },
          { id: 'seguridad', t: 'Barreras y medida', blocks: [
            { t: 'h', x: 'Barreras de seguridad' },
            { t: 'tarjetas', items: [
              { ico: 'carpeta', k: 'Su propia carpeta de trabajo', x: 'Claude descarga ahí, nunca en las carpetas oficiales. La persona revisa y mueve ella el resultado a la oficial.' },
              { ico: 'usuarios', k: 'Poco a poco', x: 'Primero pocas personas, de recepción y almacén. Revisión a los pocos meses: solo se amplía si no hay incidencias.' },
              { ico: 'stop', k: 'Nunca contabilizar', x: 'Ni registrar facturas ni dar el OK a pagos, en ninguna fase.' },
            ] },
            { t: 'h', x: 'Cómo lo mediremos' },
            { t: 'tarjetas', items: [
              { ico: 'reloj', k: 'Tiempo', x: 'Por tarea, antes y después: buscar un albarán, cruzar un informe, preparar el de litigios.' },
              { ico: 'alerta', k: 'Incidencias', x: 'Errores o vueltas atrás. Objetivo: cero.' },
              { ico: 'grafica', k: 'Uso', x: 'Consultas y descargas por persona y semana.' },
            ] },
          ] },
        ] },

      { id: 'presentacion', paso: 'p2', t: 'La presentación', corto: 'Presentación', img: 'presentacion', sinMedio: true,
        x: 'Cómo funciona Claude en Chrome dentro de Sage X3, diapositiva a diapositiva.',
        subs: [{ id: 'presentacion', t: 'La presentación', blocks: [
          { t: 'carrusel' },
        ] }] },

      { id: 'pantallas', paso: 'p2', t: 'Hasta 5 pantallas a la vez. 8 en picos.', corto: 'Pantallas a la vez', img: 'pantallas',
        x: 'Lo hemos medido en Sage: es lo que ya hace la gran mayoría de la plantilla.',
        subs: [
          { id: 'limite', t: 'El límite', blocks: [
            { t: 'escala' },
            { t: 'interactivo', id: 'pantallas', fallback: [] },
          ] },
          { id: 'datos', t: 'Los datos', blocks: [
            { t: 'datos', items: [
              { n: '144', l: 'personas conectadas a Sage' },
              { n: '548', l: 'pantallas de X3 abiertas' },
              { n: '3,8', l: 'pantallas por persona, de media' },
              { n: '3', l: 'lo más habitual (la mediana)' },
            ] },
            { t: 'barras', titulo: 'Personas que trabajan con…', items: [
              { l: '5 o menos', v: 87, n: '87 %', d: '125 de 144', marca: true },
              { l: '6 o menos', v: 90, n: '90 %' },
              { l: '8 o menos', v: 96, n: '96 %', d: '138 de 144', marca: true },
            ] },
            { t: 'nota', x: 'Medido en Sage el 22/10/2026 dos veces, a las 16:22 y a las 16:28, con el mismo resultado: la foto de un momento. Solo 4 personas pasan de 10 (casi seguro, pantallas sin cerrar). <b>Repetimos la medición al mes.</b>' },
            { t: 'antes', items: [
              { t: 'Cómo decidimos el límite', antes: 'Era una decisión «a ojo».', despues: 'En unos 3 minutos, Claude midió el uso real de Sage de 144 personas sin mostrar nombres, leyó la capacidad en modo consulta y propuso el límite con argumentos. Sin cambiar nada.' },
            ] },
          ] },
          { id: 'servidor', t: 'Y el servidor', blocks: [
            { t: 'frase', x: 'Claude en Chrome no tumba Sage, por cómo funciona.', sub: 'Pesa lo mismo que una persona más trabajando con varias pantallas.' },
            { t: 'tarjetas', items: [
              { ico: 'ventana', k: 'Cada pestaña, poco', x: 'Una pestaña con una pantalla de Sage es una sesión de X3: menos de 100 MB y unos 1/40 de núcleo del servidor.' },
              { ico: 'capas', k: '5 pestañas: menos de 0,5 GB', x: 'Como una persona más trabajando con varias pantallas.' },
              { ico: 'llave', k: 'Sin licencias extra', x: 'Las pestañas del mismo navegador no consumen pases de licencia adicionales.' },
              { ico: 'monitor', k: 'Sin sesiones web nuevas', x: '3 pestañas de Claude = 1 sesión web de la persona + 3 pantallas de X3.' },
            ] },
            { t: 'nota', x: 'Hoy cada proceso del servidor web atiende unas 26 sesiones web, en línea con lo que Sage considera normal (unas 25 por proceso). El umbral configurado es más alto.' },
            { t: 'aviso', x: 'El único escenario real de caída, igual con personas que con Claude: una consulta enorme sin filtro puede ocupar entre 600 y 950 MB en una sesión, superar el umbral de memoria de su proceso y tumbar las sesiones de ese proceso. Por eso «siempre con filtro» y el límite de pantallas son <b>normas de estabilidad, no manías</b>.' },
          ] },
          { id: 'rapido', t: 'Más no es más rápido', blocks: [
            { t: 'tarjetas', items: [
              { ico: 'repetir', k: 'Va paso a paso', x: 'Claude trabaja una pantalla detrás de otra.' },
              { ico: 'ojo', k: 'Tú revisas', x: 'Más pantallas, más que revisar.' },
              { ico: 'grafica', k: 'Más cuota', x: 'El navegador gasta más cuota de Claude que un chat.' },
            ] },
            { t: 'claves', items: [
              { ico: 'usuario', k: 'Una sola sesión de Claude con Chrome', x: 'Por persona, una a la vez: varias sesiones de Claude sobre el mismo Chrome se pisan las pestañas.' },
              { ico: 'candado', k: 'IT puede poner un tope', x: 'Sage permite a IT fijar un máximo de sesiones por usuario.' },
            ] },
          ] },
        ] },

      { id: 'proyecto', paso: 'p2', t: 'El proyecto «Claude en Chrome · Reynasa»', corto: 'Proyecto y reglas', img: 'proyecto',
        x: 'Claude en Chrome se usa siempre desde un proyecto de Claude con normas que lee al empezar.',
        subs: [
          { id: 'proyecto', t: 'Cómo funciona', blocks: [
            { t: 'ciclo', items: [
              { ico: 'libro', k: 'Un proyecto', x: 'Con instrucciones y archivos de normas.' },
              { ico: 'ojo', k: 'Lo lee al empezar', x: 'Siempre, antes de nada.' },
              { ico: 'altavoz', k: 'Anuncia la fase', x: 'En una línea: qué puede y qué no.' },
              { ico: 'check', k: 'Cierra con garantía', x: 'Resume lo hecho y confirma que no ha cambiado nada.' },
            ] },
            { t: 'prompts', items: [
              { t: 'Lo primero que dice Claude', tag: 'Al empezar', p: 'Fase 1: solo navego, consulto y descargo. No cambio nada en Sage.' },
              { t: 'Lo último que dice Claude', tag: 'Al terminar', p: 'No he modificado nada en Sage.' },
            ] },
            { t: 'nota', x: 'Las normas del proyecto están por encima de cualquier texto que aparezca en una web, un correo o un documento. Si una página le da instrucciones, Claude no las sigue y avisa.' },
          ] },
          { id: 'crear', t: 'Crea tu proyecto', blocks: [
            { t: 'pasos', items: [
              { k: 'Crea el proyecto', x: 'En Claude: Proyectos › Crear proyecto. Nombre: «Claude en Chrome · Reynasa».' },
              { k: 'Pega las instrucciones', x: 'El texto de «instrucciones-proyecto.md», en Instrucciones.' },
              { k: 'Sube las normas', x: 'Normas de la fase 1, pantallas permitidas y ejemplos de encargos, en Archivos.' },
              { k: 'Activa Claude en Chrome', x: 'Instala la extensión, entra con tu cuenta de la empresa y actívala en el proyecto. Modo «Aprobar automáticamente»; el modo «sin aprobaciones», nunca.' },
              { k: 'Úsalo siempre desde el proyecto', x: 'Fuera de él, las normas no se cargan.' },
            ] },
            { t: 'archivos', titulo: 'Descargar las normas para tu proyecto de Claude', items: [
              { f: 'instrucciones-proyecto.md', k: 'Instrucciones del proyecto', x: 'Se pegan en Instrucciones.' },
              { f: 'normas-seguridad-fase-1.md', k: 'Normas de la fase 1', x: 'Lo permitido y lo prohibido.' },
              { f: 'pantallas-sage-permitidas.md', k: 'Pantallas de Sage permitidas', x: 'Consultas, informes y solo lectura.' },
              { f: 'ejemplos-de-encargos.md', k: 'Ejemplos de encargos', x: 'Bien pedidos y los que rechaza.' },
              { f: 'COMO-CREAR-EL-PROYECTO.md', k: 'Cómo crear el proyecto', x: 'Paso a paso, y lo que hace IT.' },
              { f: 'departamentos-y-niveles.md', k: 'Departamentos y niveles', x: 'Qué haría en cada departamento y con qué acceso.' },
            ] },
          ] },
          { id: 'capas', t: 'Cuatro capas', blocks: [
            { t: 'capas', items: [
              { k: 'El proyecto con sus reglas', x: 'Lo que Claude lee siempre al empezar.' },
              { k: 'Explicación previa y «Aprobar automáticamente»', x: 'Cada persona sabe antes qué va a hacer Claude, y Claude para si algo no cuadra.' },
              { k: 'La administración de Claude', x: 'Lista de webs permitidas, si la cuenta es Team o Enterprise.' },
              { k: 'Los permisos del rol en Sage', x: 'El candado de verdad: lo que el usuario no puede hacer, Claude tampoco.' },
            ] },
            { t: 'aviso', x: 'Fuera del proyecto, las reglas no se cargan. Por eso hay además una norma interna y formación.' },
          ] },
          { id: 'permisos', t: 'Permisos', blocks: [
            { t: 'frase', tono: 'rojo', x: 'No aprobamos clic a clic: mataría la productividad.', sub: 'Y el modo «sin aprobaciones» no se usa.' },
            { t: 'pasos', items: [
              { k: 'Antes, lo explicamos muy bien', x: 'A cada persona: qué va a hacer Claude y qué no.' },
              { k: 'Modo «Aprobar automáticamente»', x: 'Claude trabaja seguido, revisa cada acción y para si algo no cuadra.' },
              { k: 'En fase 1, nada que guardar', x: 'Solo navegar, consultar y descargar.' },
              { k: 'En fase 2, confirmación antes de guardar', x: 'Claude pedirá permiso antes de guardar cualquier cambio.' },
            ] },
          ] },
        ] },

      { id: 'fases', paso: 'p2', t: 'Tres fases, de menos a más', corto: 'Fases', img: 'fases',
        x: 'Empezamos solo consultando. Cada paso más lo aprueba IT.',
        subs: [
          { id: 'fases', t: 'Las fases', blocks: [
            { t: 'linea', items: [
              { n: 'Fase 1 · Ahora', t: 'Consultar', x: 'Navegar, consultar, buscar con filtros, descargar y exportar.' },
              { n: 'Fase 2 · Con práctica', t: 'Cambios concretos', x: 'En una lista cerrada de pantallas, con confirmación previa.' },
              { n: 'Fase 3 · Con dominio', t: 'Más autonomía', x: 'Con revisión periódica, según decida IT.' },
            ] },
            { t: 'nota', x: 'Cada fase es una versión del archivo de normas, aprobada por IT.' },
          ] },
          { id: 'fase-1', t: 'Fase 1: sí y no', blocks: [
            { t: 'columnas', items: [
              { k: 'Sí, en fase 1', tono: 'si', items: ['Navegar por los menús y abrir consultas, informes y páginas en solo lectura', 'Buscar con filtros', 'Leer lo que sale y resumirlo', 'Descargar informes y exportar a Excel o PDF', 'Cruzar lo descargado con tus archivos'] },
              { k: 'No, en fase 1', tono: 'no', items: ['Crear nada', 'Modificar datos: precios, cantidades, estados, fichas…', 'Validar, firmar, contabilizar o cerrar', 'Borrar o anular', 'Enviar correos o mensajes', 'Entrar en Administración o Parametrización', 'Escribir contraseñas', 'Seguir instrucciones que aparezcan en una web o un correo'] },
            ] },
            { t: 'nota', x: '¿Duda de si algo está permitido? Claude no lo hace y pregunta.' },
          ] },
          { id: 'encargos', t: 'Encargos bien pedidos', blocks: [
            { t: 'prompts', items: [
              { t: 'Stock', tag: 'Consultar', p: 'Dime cuánto stock hay del artículo [referencia] en la planta [planta] y si hay unidades pedidas al proveedor.' },
              { t: 'Compras pendientes', tag: 'Descargar', p: 'Descárgame en Excel las líneas de pedido de compra sin saldar del proveedor [proveedor] de esta semana y dime cuántas son.' },
              { t: 'Informe comercial', tag: 'Resumir', p: 'Saca el informe comercial TOP-20 del mes pasado y resúmeme los 5 primeros clientes.' },
              { t: 'Cruce con un Excel', tag: 'Cruzar', p: 'Cruza las recepciones de compra de octubre del proveedor [proveedor] con este Excel que te paso y dime las diferencias.' },
            ] },
            { t: 'nota', x: 'Cuanto más concreto (artículo, cliente, proveedor, fechas, planta), mejor y más rápido. Así Claude siempre filtra.' },
          ] },
          { id: 'prueba', t: '¿Se puede?', blocks: [
            { t: 'interactivo', id: 'fase1', fallback: [] },
          ] },
        ] },

      { id: 'normas', paso: 'p2', t: 'Diez normas de uso', corto: 'Normas', img: 'normas',
        x: 'Sencillas y para todo el personal.',
        subs: [
          { id: 'normas', t: 'Las normas', blocks: [
            { t: 'pasos', items: [
              { k: 'Cada uno entra con su usuario', x: 'La persona inicia sesión en Sage. Claude nunca escribe contraseñas.' },
              { k: 'En fase 1, solo navegar, consultar y descargar', x: 'Nada que cree, cambie, valide, borre o envíe.' },
              { k: 'Si algo se sale de la fase, Claude para', x: 'Y lo explica antes de seguir.' },
              { k: 'Hasta 5 pantallas a la vez', x: '8 como máximo y solo en picos. Más de 8, no.' },
              { k: 'Una sola sesión de Claude con Chrome', x: 'Varias sesiones sobre el mismo Chrome se pisan las pestañas.' },
              { k: 'Consultas siempre con filtro', x: 'Un listado completo de artículos sin filtro tardó unos 20 segundos.' },
              { k: 'Al acabar: botón de salir y después cerrar', x: 'Sal de la pantalla con el botón de salir de Sage antes de cerrar la pestaña. Con la X, la sesión sigue viva hasta que caduca (2 horas).' },
              { k: 'Descarga solo en tu carpeta de trabajo', x: 'Nunca en las carpetas oficiales. Tú revisas el resultado y lo mueves a la oficial.' },
              { k: 'En otras webs de la empresa, las mismas normas', x: 'Expert SGA, NextShop, Drive…: consultar, descargar y comparar, nunca cambiar.' },
              { k: 'Nunca contabilizar, registrar facturas ni dar el OK a pagos', x: 'En ninguna fase.' },
            ] },
          ] },
          { id: 'antes', t: 'Antes de empezar', blocks: [
            { t: 'interactivo', id: 'checklist', fallback: [] },
          ] },
        ] },

      { id: 'fuentes', paso: 'p2', t: 'Fuentes', corto: 'Fuentes', img: 'fuentes',
        x: 'De dónde sale cada dato.',
        subs: [{ id: 'fuentes', t: 'Fuentes', blocks: [
          { t: 'tabla', head: ['Qué', 'Fuente'], rows: [
            ['Coste de cada sesión de X3 (menos de 100 MB y 1/40 de núcleo)', 'Ayuda oficial de Sage X3: <a href="https://online-help.sagex3.com/erp/12/en-us/Content/V7DEV/prerequisites_windows-sql-server.html">requisitos en Windows y SQL Server</a>'],
            ['Sesiones por proceso del servidor web y consultas enormes (600–950 MB)', 'Ayuda oficial de Sage X3: <a href="https://online-help.sagex3.com/erp/12/en-us/Content/V7DEV/administration-reference_node-js-sizing.html">dimensionado de Node.js</a>'],
            ['Máximo de sesiones por usuario', 'Ayuda oficial de Sage X3 (parámetros de sesiones por usuario)'],
            ['Pestañas y pases de licencia', 'Blog de soporte de Sage'],
            ['Uso real de Sage en Reynasa', 'Medición propia en modo consulta, el 22/10/2026 a las 16:22 y a las 16:28 (mismo resultado), sin cambiar nada y sin nombres'],
            ['Cómo funciona Claude en Chrome, modos de permiso y controles de administración', '<a href="https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome">Empezar con Claude en Chrome</a>, <a href="https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide">guía de permisos</a>, <a href="https://support.claude.com/en/articles/13065128-claude-in-chrome-admin-controls">controles de administración</a> y <a href="https://code.claude.com/docs/en/chrome">Claude Code con Chrome</a>'],
          ] },
          { t: 'nota', x: 'Los datos de Sage son la foto de un momento y se vuelven a medir al mes.' },
        ] }] },
    ],

    // Herramientas: «¿En qué nivel empiezas?», el limitador de pantallas, «¿Se puede en fase 1?» y la checklist
    niveles: [
      { k: 'Básico', x: 'Empiezas por lo básico: instalación, cómo pedirle bien las cosas, proyectos, skills y conectores. Primera sesión de 1 a 2 horas.' },
      { k: 'Avanzado', x: 'Pasas a Cowork y Claude Code, siempre con las reglas acordadas con IT y con casos de tu departamento.' },
      { k: 'Súper avanzado', x: 'Automatizas tareas repetitivas con rutinas y agentes, dentro de las reglas de IT, y ayudas a formar a tus compañeros.' },
    ],
    // Lo que responde Claude: sale de ejemplos-de-encargos.md (proyecto «Claude en Chrome · Reynasa»)
    acciones: [
      { t: 'Consultar el stock de un artículo', v: 'si', x: 'Lo hace: abre la consulta de stock, filtra por artículo y planta y te lo resume.' },
      { t: 'Descargar pedidos sin saldar en Excel', v: 'si', x: 'Lo hace: filtra por proveedor y fechas, exporta a Excel y te dice dónde lo ha guardado.' },
      { t: 'Ver el estado de un pedido de venta', v: 'si', x: 'Lo hace: lo busca por cliente y fecha y te dice si se ha entregado.' },
      { t: 'Sacar el informe comercial TOP-20', v: 'si', x: 'Lo hace: saca el informe del periodo que le digas y te resume los primeros clientes.' },
      { t: 'Cambiar el precio de un artículo', v: 'no', x: '«En la fase 1 no puedo modificar datos en Sage. Te dejo el precio actual y la pantalla donde se cambia, y el cambio lo haces tú.»' },
      { t: 'Validar una factura', v: 'no', x: '«Validar está fuera de la fase 1. Te preparo un resumen de la factura para que la revises y la valides tú.»' },
      { t: 'Crear un pedido', v: 'no', x: '«Crear documentos no está permitido en la fase 1. Te preparo las líneas en un Excel.»' },
      { t: 'Borrar un pedido duplicado', v: 'no', x: '«No puedo borrar nada en Sage. Te digo cuál es el duplicado y lo anulas tú.»' },
      { t: 'Enviar un correo a clientes', v: 'no', x: '«No puedo enviar mensajes. Te preparo la lista y el texto en borrador.»' },
      { t: 'Sacar todos los artículos', v: 'no', x: '«Sin filtro no: puede cargar el servidor. Dime una marca, una familia o una planta y lo saco.»' },
      { t: 'Abrir 15 pestañas a la vez', v: 'no', x: '«Trabajo con un máximo de 5 pantallas a la vez (8 en picos). Lo hago por tandas.»' },
      { t: 'Escribir tu contraseña', v: 'nunca', x: 'Nunca. Si aparece la pantalla de inicio de sesión, para y te pide que entres tú.' },
    ],
    checklist: [
      { g: 'Antes de empezar', items: ['Estoy en el proyecto «Claude en Chrome · Reynasa»', 'He iniciado sesión en Sage yo, con mi usuario', 'Sé en qué fase estoy y qué puede hacer Claude', 'Solo tengo una sesión de Claude manejando Chrome'] },
      { g: 'Mientras trabaja', items: ['La consulta lleva filtro', 'Tengo 5 pantallas o menos (8 solo en picos)', 'Descarga en mi carpeta de trabajo', 'Reviso lo que hace'] },
      { g: 'Al acabar', items: ['Muevo yo el resultado a la carpeta oficial', 'Salgo de cada pantalla con el botón de salir de Sage', 'Después cierro la pestaña'] },
    ],
  };
});
