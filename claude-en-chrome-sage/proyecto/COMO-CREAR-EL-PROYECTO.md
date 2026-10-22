# Cómo crear el proyecto «Claude en Chrome · Reynasa»

## Para cada persona: en la app de Claude
1. Abre Claude (app de escritorio o claude.ai) y entra en **Proyectos › Crear proyecto**. Llámalo **«Claude en Chrome · Reynasa»**.
2. En **Instrucciones** del proyecto, pega el texto de `instrucciones-proyecto.md` (desde «Eres el asistente…» hasta el final).
3. En los **archivos** del proyecto, sube `normas-seguridad-fase-1.md`, `pantallas-sage-permitidas.md` y `ejemplos-de-encargos.md`.
4. Instala la extensión **Claude in Chrome** desde Chrome Web Store, inicia sesión con tu cuenta de Claude de la empresa y fíjala en la barra.
5. En la app: **Ajustes › Conectores › Claude in Chrome › Configurar** y actívalo. Después, en cada conversación del proyecto, activa Claude in Chrome en el desplegable de **Conectores**.
6. Modo de permisos de la extensión: **«Aprobar automáticamente»**. Claude trabaja seguido y solo para si algo no cuadra.
7. Usa Claude en Chrome **siempre desde este proyecto**. Fuera de él, las normas no se cargan.

Los nombres de los menús pueden cambiar un poco según la versión de la app.

## Para IT
- Si la cuenta de Claude de la empresa es **Team o Enterprise**: en **Configuración de la organización › Claude in Chrome**, pon una **lista de webs permitidas** (Sage y las que se aprueben) y decide quién puede usar la extensión.
- **En Sage:** se puede fijar un **máximo de sesiones por usuario** con los parámetros **MAXSES1 y MAXSES2**, y repasar los permisos del rol de cada persona, que son el candado de verdad.
- **Revisión al mes:** repetir la medición de sesiones (Administración › Gestión de sesiones) y decidir si se pasa a la fase 2.

## Paso de fase
Cuando IT apruebe la fase 2, se sustituye `normas-seguridad-fase-1.md` por la versión 2. Se cambia la línea de fase en las instrucciones y se sube el archivo nuevo al proyecto.
