# Claude en Chrome en cada departamento · qué haría y con qué nivel de acceso

Hecho a partir de las conversaciones del 22/10/2026 con personas de administración, compras, almacén y contabilidad, grabadas con Plaud. La idea que se repite en todos los departamentos: **lo que más se hace en Sage es buscar información, y después descargar y cruzar**. Justo eso es lo que Claude en Chrome hace bien y sin riesgo.

## Niveles de acceso: se sube de nivel cuando IT lo aprueba

| Nivel | Qué puede hacer Claude | Ejemplo | Cuándo |
|---|---|---|---|
| **1 · Consultar** | Buscar y leer en Sage y en otras webs de la empresa (Expert SGA, NextShop…) | «¿Hay stock de esta referencia?» · «Búscame el albarán X» | Desde el primer día |
| **2 · Descargar y comparar** | Descargar albaranes e informes a una **carpeta de trabajo** y compararlos con el documento del proveedor o con un Excel | «Descárgame el albarán X y compáralo con el del proveedor» | Fase 1 (ahora), con OK de IT por persona |
| **3 · Rutinas** | Tareas que se repiten solas cada semana o cada mes: descargar informes de Sage y Expert SGA, cruzarlos y dejar el resumen listo | «Cada lunes, saca el informe de litigios y dime las diferencias» | Cuando los niveles 1 y 2 lleven un tiempo sin incidencias |
| **4 · Cambios controlados** | Cambios concretos en una lista cerrada de pantallas, siempre con confirmación | Por decidir | Dentro de unos meses, solo si todo ha ido bien |

**Nunca, en ningún nivel:** contabilizar, dar el OK a pagos ni registrar facturas de forma automática. Si se sube mal una tanda de facturas, el problema llega hasta Hacienda.

**Barreras de seguridad**
- Claude **descarga en una carpeta de trabajo propia**, nunca dentro de las carpetas oficiales del departamento. La persona revisa el resultado y **lo arrastra ella** a la carpeta oficial.
- **Empezar con pocas personas**, primero de recepción y almacén, y **revisar a los pocos meses**. Solo se amplía si no ha habido incidencias.
- Si algo saliera mal y hubiera que revertirlo a mano, se perdería la confianza y se volvería a trabajar a mano. Por eso se va **poco a poco**.

## Departamento por departamento

### 1 · Compras: tarifas, propuestas y pedidos
- **Hoy:**
  - se suben a Sage las tarifas negociadas con los proveedores, los precios, las referencias y los máximos y mínimos;
  - cada marca tiene su calendario de compra (por ejemplo, una los jueves y otra los lunes);
  - Sage calcula cada día la propuesta de pedido por proveedor, con margen de seguridad;
  - se registran los pedidos (con número interno) y se envían al proveedor por correo o por TECOM.
- **Claude en Chrome:**
  - consulta la propuesta de pedido, el stock y lo pendiente de recibir de un proveedor;
  - descarga la cartera de pedidos pendientes;
  - **compara la tarifa del proveedor (Excel) con los precios de Sage** y marca las diferencias antes de que lleguen al almacén;
  - si una referencia no está en Sage, busca su **equivalencia en NextShop** y en el catálogo de Drive;
  - prepara los datos para negociar con un proveedor, como catálogos de miles de referencias cruzados con las nuestras.
- **De momento no:** subir tarifas, precios ni referencias.
- **Qué se gana:** menos errores de precio y de referencia, que son los que luego paran al almacén, y se acaban los cruces a mano con BUSCARV.

### 2 · Recepción y almacén
- **Hoy:**
  - al llegar la mercancía se lee el pedido (los PEC o PCV de call center);
  - si el precio o la referencia están mal cargados, da error al leerlo;
  - entonces se **busca el albarán en Sage, se descarga y se contrasta con el del proveedor** (por ejemplo, se pidieron 9 y llegan 10);
  - **una vez al mes** se manda a dirección un **informe de litigios**, descargando y cruzando datos de Sage y de Expert SGA.
- **Claude en Chrome:**
  - busca y descarga el albarán, lo compara con el del proveedor y da la lista de diferencias;
  - como **rutina**, descarga los informes de Sage y Expert SGA, los cruza y deja el resumen («hay estas 10 diferencias»).
- **Qué se gana:** se abre el archivo con las diferencias ya encontradas, en vez de cruzarlo a mano.

### 3 · Conformidad de facturas de proveedor
- **Hoy:** se registran las facturas seleccionando sus albaranes en Sage, y se revisan cantidades, precios, devoluciones, cargos y abonos antes de dar la conformidad.
- **Claude en Chrome:** busca los albaranes de cada factura, los descarga y prepara el **contraste factura-albaranes** en dos columnas con solo las diferencias. Va de la mano de la skill de facturas de ATLAS.
- **Nunca:** registrar ni contabilizar facturas. Eso lo hace siempre la persona.
- **Qué se gana:** la revisión empieza por las diferencias, no por cero.

### 4 · Contabilidad y tesorería
- **Hoy:**
  - las facturas conformadas pasan a la contabilidad (debe y haber);
  - se revisan los vencimientos;
  - se da el OK al pago según el método: giro, transferencia, confirming o recibo;
  - **lo que más se hace es buscar información y sacar informes.**
- **Claude en Chrome:**
  - busca información, como la situación de un cliente o los asientos por importe;
  - descarga informes, por ejemplo los clientes con encurso superado;
  - prepara **listados de vencimientos por método de pago** para revisarlos.
- **Nunca:** contabilizar, pagar ni dar el OK a un pago. La validación es manual.
- **Qué se gana:** horas de búsqueda que pasan a ser una pregunta.

### 5 · Cobros y riesgo de clientes
- **Hoy:** se pasa el día mirando la información de los clientes: qué deben, vencidos e impagos.
- **Claude en Chrome:** «resúmeme la situación del cliente X: deuda, vencidos e impagos», en segundos y antes de llamar.
- **Qué se gana:** se llega a cada llamada con el resumen hecho.

### 6 · Comercial y call center
- **Hoy:** se consultan el stock, el estado de los pedidos de clientes y las tarifas, y se sacan los informes comerciales del menú de Ventas (por delegación, TOP-20, comparativas).
- **Claude en Chrome:** responde «¿hay stock?», «¿se ha entregado el pedido de este cliente?» o «¿qué tarifa tiene?», y descarga el informe comercial del mes resumido.
- **Qué se gana:** respuestas al cliente más rápidas.

## Cómo medir que funciona (en el piloto)
- **Tiempo por tarea, antes y después:** buscar un albarán, cruzar un informe, preparar el informe de litigios.
- **Incidencias:** número de errores o vueltas atrás. El objetivo es cero.
- **Uso:** cuántas consultas y descargas hace cada persona a la semana.
