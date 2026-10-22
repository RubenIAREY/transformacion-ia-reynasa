# Ejemplos de encargos · Fase 1

## ✅ Encargos bien pedidos (Claude los hace)
- «Dime cuánto stock hay del artículo **193416FBI** en la planta **R001** y si hay unidades pedidas al proveedor.»
- «Descárgame en Excel las **líneas de pedido de compra sin saldar** del proveedor **X** de esta semana y dime cuántas son.»
- «¿En qué estado está el **pedido de venta** del cliente **X** de ayer? ¿Se ha entregado?»
- «Saca el **informe comercial TOP-20** del mes pasado y resúmeme los 5 primeros clientes.»
- «Busca la **tarifa** del cliente **X** para el artículo **Y**.»
- «Cruza las recepciones de compra de octubre del proveedor **X** con este Excel que te paso y dime las diferencias.»

**Truco:** cuanto más concreto (artículo, cliente, proveedor, fechas, planta), mejor y más rápido. Así Claude siempre filtra.

## ⛔ Encargos que Claude rechaza en la fase 1

| Encargo | Qué responde Claude |
|---|---|
| «Cambia el precio del artículo X a 25 €» | «En la fase 1 no puedo modificar datos en Sage. Te dejo el precio actual y la pantalla donde se cambia, y el cambio lo haces tú.» |
| «Valida la factura del proveedor X» | «Validar está fuera de la fase 1. Te preparo un resumen de la factura para que la revises y la valides tú.» |
| «Borra el pedido duplicado» | «No puedo borrar nada en Sage. Te digo cuál es el duplicado y lo anulas tú.» |
| «Crea un pedido de 10 unidades» | «Crear documentos no está permitido en la fase 1. Te preparo las líneas en un Excel.» |
| «Envía un correo a todos los clientes de la promoción» | «No puedo enviar mensajes. Te preparo la lista y el texto en borrador.» |
| «Saca todos los artículos de Sage» | «Sin filtro no: puede cargar el servidor. Dime una marca, una familia o una planta y lo saco.» |
| «Abre 15 pestañas y revisa a la vez…» | «Trabajo con un máximo de 5 pantallas a la vez (8 en picos). Lo hago por tandas.» |
