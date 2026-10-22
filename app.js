/* Transformación IA Reynasa · web por pestañas (estilo «Escenas»), en dos pasos.
   Cada pestaña se ve sola (#/seccion/subpestaña). ?imprimir=<seccion>|p1|p2|todo pinta la versión para PDF. */
(function () {
  'use strict';
  var C = window.CONTENIDO, S = C.secciones, M = C.meta, P = C.pasos;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var q = new URLSearchParams(location.search);
  var IMPRIMIR = q.get('imprimir');
  var main = document.getElementById('escenario');

  // ------------------------------------------------------------ iconos (trazo, 24 × 24)
  var I = {
    copiar: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    bajar: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
    enlace: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    ojo: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    buscar: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    usuario: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    usuarios: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6 6 0 0 1 3.5 6"/>',
    candado: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    escudo: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    llave: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m11 12 9-9"/><path d="m17 6 3 3"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/>',
    servidor: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01"/><path d="M7 16.5h.01"/>',
    grafica: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
    sube: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    capas: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    bandera: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
    repetir: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    cursor: '<path d="m4 3 7 17 2.5-7.5L21 10z"/>',
    idea: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
    libro: '<path d="M4 19V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h8"/><path d="M8 11h6"/>',
    play: '<path d="M7 4v16l13-8z"/>',
    stop: '<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    formacion: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
    altavoz: '<path d="M3 10v4h4l7 4V6l-7 4z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
    empresa: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/><path d="M10 21v-3h4v3"/>',
    enchufe: '<path d="M9 2v6"/><path d="M15 2v6"/><path d="M6 8h12v4a6 6 0 0 1-12 0z"/><path d="M12 18v4"/>',
    ventana: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 4v5"/>',
    carrito: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h12l2-8H6"/>',
    caja: '<path d="m3 7 9-4 9 4v10l-9 4-9-4z"/><path d="m3 7 9 4 9-4"/><path d="M12 11v10"/>',
    factura: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/>',
    calculadora: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>',
    euro: '<path d="M17 6.5A7 7 0 1 0 17 17.5"/><path d="M4 10h9"/><path d="M4 14h9"/>',
    telefono: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    carpeta: '<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alerta: '<path d="M12 3 2 20h20z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',
    flecha: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    izq: '<path d="m15 18-6-6 6-6"/>',
    der: '<path d="m9 18 6-6-6-6"/>',
  };
  function ico(n, cls) { return I[n] ? '<svg class="' + (cls || 'ico') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[n] + '</svg>' : ''; }
  function circ(n) { return n ? '<span class="circ">' + ico(n) + '</span>' : ''; }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function dd(i) { return String(i + 1).padStart(2, '0'); }
  function idx(id) { return S.findIndex(function (s) { return s.id === id; }); }
  function pdfDe(id) { return 'descargas/secciones/' + dd(idx(id)) + '-' + id + '.pdf'; }
  function paso(id) { return P.find(function (p) { return p.id === id; }); }
  function delPaso(pid) { return S.filter(function (s) { return s.paso === pid; }); }
  function pestDe(pid) { return delPaso(pid).filter(function (s) { return s.id !== 'inicio'; }); }
  function numEnPaso(s) { return pestDe(s.paso).indexOf(s) + 1; }
  var LOGO = {
    reynasa: '<img class="l-reynasa" src="assets/logos/reynasa.png" alt="Reynasa Recambios" width="900" height="224">',
    claude: '<img class="l-claude" src="assets/logos/claude.png" alt="Claude" width="700" height="153">',
  };
  function alianza() { return '<div class="alianza"><span>Propuesta de</span>' + LOGO.reynasa + '<i aria-hidden="true"></i><span>con</span>' + LOGO.claude + '</div>'; }

  // ------------------------------------------------------------ bloques
  function lis(items, tono) { return items.map(function (i) { return '<li>' + (tono === 'si' ? ico('check', 'ico ico--si') : tono === 'no' ? ico('x', 'ico ico--no') : '') + '<span>' + i + '</span></li>'; }).join(''); }
  function bloque(b, imp) {
    switch (b.t) {
      case 'p': return '<p class="p">' + (imp && b.imp || b.x) + '</p>';
      case 'lead': return '<p class="lead">' + b.x + '</p>';
      case 'h': return '<h3 class="h">' + b.x + '</h3>';
      case 'ul': return '<ul class="lista">' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
      case 'claves': return '<ul class="claves">' + b.items.map(function (k) { return '<li>' + circ(k.ico) + '<div><b>' + k.k + '</b><span>' + k.x + '</span></div></li>'; }).join('') + '</ul>';
      case 'pasos': return '<ol class="pasos">' + b.items.map(function (k) { return '<li><b>' + k.k + '</b><span>' + k.x + '</span></li>'; }).join('') + '</ol>';
      case 'cita': return '<blockquote class="cita"><p>«' + b.x + '»</p><cite>' + b.who + '</cite></blockquote>';
      case 'nota': return '<p class="nota">' + b.x + '</p>';
      case 'aviso': return '<p class="aviso">' + b.x + '</p>';
      case 'frase': return '<div class="frase frase--' + (b.tono || 'azul') + '">' + (b.kicker ? '<p class="kicker">' + b.kicker + '</p>' : '') + '<p class="frase__x">' + b.x + '</p>' + (b.sub ? '<p class="frase__sub">' + b.sub + '</p>' : '') + '</div>';
      case 'tabla': return '<div class="tabla-env"><table class="tabla"><thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td data-l="' + esc(b.head[i] || '') + '">' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'datos': return '<div class="datos">' + b.items.map(function (d) { return '<div><b>' + d.n + '</b><span>' + d.l + '</span></div>'; }).join('') + '</div>';
      case 'ideas': return '<div class="ideas">' + b.items.map(function (i) { return '<article>' + circ(i.ico) + '<h3>' + i.k + '</h3><p>' + i.x + '</p></article>'; }).join('') + '</div>';
      case 'tarjetas': return '<div class="tarjetas' + (b.items.length === 4 ? ' tarjetas--4' : '') + '">' + b.items.map(function (i) { return '<article class="tarjeta">' + circ(i.ico) + '<h3>' + i.k + '</h3><p>' + i.x + '</p></article>'; }).join('') + '</div>';
      case 'linea': return '<ol class="linea">' + b.items.map(function (i, k) { return '<li><span class="linea__n">' + (k + 1) + '</span><small>' + i.n + '</small><b>' + i.t + '</b><span>' + i.x + '</span></li>'; }).join('') + '</ol>';
      case 'antes': return '<div class="antes">' + b.items.map(function (i) { return imp ? '<div class="giro-imp"><div><small>Antes</small><b>' + i.t + '</b><span>' + i.antes + '</span></div><div class="giro-imp__b"><small>Ahora</small><b>' + i.t + '</b><span>' + i.despues + '</span></div></div>' : '<button type="button" class="giro" aria-pressed="false"><span class="giro__in"><span class="giro__cara giro__cara--a"><small>Antes</small><b>' + i.t + '</b><span>' + i.antes + '</span><span class="giro__pista">Pulsa para ver el ahora →</span></span><span class="giro__cara giro__cara--b"><small>Ahora</small><b>' + i.t + '</b><span>' + i.despues + '</span><span class="giro__pista">← Volver</span></span></span></button>'; }).join('') + '</div>';
      case 'columnas': return '<div class="columnas columnas--' + b.items.length + '">' + b.items.map(function (c) { return '<article class="col col--' + c.tono + '"><header><h3>' + (c.tono === 'si' ? ico('check') : c.tono === 'no' ? ico('x') : '') + c.k + '</h3>' + (c.sub ? '<p>' + c.sub + '</p>' : '') + '</header><ul>' + lis(c.items, c.tono) + '</ul></article>'; }).join('') + '</div>';
      case 'enlace': return '<a class="enlace" href="' + b.href + '">' + (b.img ? '<img src="assets/img/' + (imp ? 'imp/' + b.img + '.jpg' : b.img + '-m.webp') + '" alt="" width="800" height="452" loading="lazy">' : '') + '<span class="enlace__t"><small>' + b.kicker + '</small><b>' + b.k + '</b><span>' + b.x + '</span><em class="btn">' + b.btn + '</em></span></a>';
      case 'ciclo': return '<ol class="ciclo">' + b.items.map(function (i, k) { return '<li><span class="ciclo__ico">' + ico(i.ico) + '</span><b><small>' + (k + 1) + '</small> ' + i.k + '</b><span>' + i.x + '</span></li>'; }).join('') + '</ol>';
      case 'escala': return escala();
      case 'barras': return '<div class="barras">' + (b.titulo ? '<p class="barras__t">' + b.titulo + '</p>' : '') + b.items.map(function (r) { return '<div class="barra-f' + (r.marca ? ' barra-f--marca' : '') + '"><span class="barra-f__l">' + r.l + '</span><span class="barra-f__b"><i style="width:' + r.v + '%"></i></span><span class="barra-f__n"><b>' + r.n + '</b>' + (r.d ? '<small>' + r.d + '</small>' : '') + '</span></div>'; }).join('') + '</div>';
      case 'capas': return '<ol class="capas">' + b.items.map(function (c, k) { return '<li><span class="capas__n">' + (k + 1) + '</span><div><b>' + c.k + '</b><span>' + c.x + '</span></div></li>'; }).join('') + '</ol>';
      case 'recorrido': return recorrido(imp);
      case 'deptos': return '<div class="deptos">' + b.items.map(function (d) {
        return '<article class="depto"><header>' + circ(d.ico) + '<h3>' + d.k + '</h3></header>' +
          '<div class="depto__hoy"><small>Hoy</small><p>' + d.hoy + '</p></div>' +
          '<div class="depto__con"><small>' + ico('flecha') + 'Con Claude en Chrome</small><ul>' + lis(d.con, 'si') + '</ul></div>' +
          '<div class="depto__gana"><small>Qué ganamos</small><p>' + d.gana + '</p></div>' +
          (d.nunca ? '<p class="depto__nunca">' + ico('x') + '<span><b>' + (d.nuncaT || 'Nunca') + ':</b> ' + d.nunca + '</span></p>' : '') + '</article>';
      }).join('') + '</div>';
      case 'escalera': return '<ol class="escalera">' + b.items.map(function (n, k) { return '<li style="--i:' + k + '"><span class="escalera__n">' + (k + 1) + '</span><b>' + n.k + '</b><span class="escalera__x">' + n.x + '</span><span class="escalera__ej">' + n.ej + '</span><small class="escalera__cuando">' + ico('calendario') + n.cuando + '</small></li>'; }).join('') + '</ol>';
      case 'archivos': return '<div class="archivos"><h3 class="archivos__t">' + ico('bajar') + b.titulo + '</h3><ul>' + b.items.map(function (a) { return '<li><a href="' + M.proyecto + a.f + '" download><span class="archivos__ico">.md</span><span><b>' + a.k + '</b><small>' + a.x + '</small></span>' + ico('bajar') + '</a></li>'; }).join('') + '</ul>' + (imp ? '<p class="nota">Se descargan desde ' + M.url + M.proyecto + '</p>' : '') + '</div>';
      case 'carrusel': return imp ? '<p class="nota">La presentación completa, en PDF: <b>' + M.url + M.presentacionPdf + '</b></p>' : '<div class="carrusel" data-carrusel><p class="carrusel__vacio">Cargando las diapositivas…</p></div><p class="carrusel__acc"><a class="btn" href="' + M.presentacionPdf + '" download>' + ico('bajar') + 'Descargar la presentación en PDF</a></p>';
      case 'prompts': return '<div class="prompts">' + b.items.map(function (p) { return '<article class="prompt"><div class="prompt__cab"><h3>' + p.t + '</h3><span class="chip chip--claude">' + p.tag + '</span></div><p class="prompt__texto">' + esc(p.p) + '</p>' + (imp ? '' : '<button type="button" class="copiar" data-copiar="' + esc(p.p) + '">' + ico('copiar') + 'Copiar</button>') + '</article>'; }).join('') + '</div>';
      case 'interactivo': return imp ? (H[b.id] && H[b.id].texto ? H[b.id].texto() : '') : '<div class="herramienta" data-herramienta="' + b.id + '">' + (H[b.id] ? H[b.id].html() : '') + '</div>';
      default: return '';
    }
  }
  function escala() {
    var c = '';
    for (var n = 1; n <= 12; n++) c += '<span class="escala__c escala__c--' + (n <= 5 ? 'ok' : n <= 8 ? 'pico' : 'no') + '">' + n + '</span>';
    return '<div class="escala"><div class="escala__fila" aria-hidden="true">' + c + '</div><ul class="escala__ley">' +
      '<li class="ok"><b>Hasta 5</b><span>Lo aconsejable para el día a día.</span></li>' +
      '<li class="pico"><b>6 a 8</b><span>Solo en picos de trabajo.</span></li>' +
      '<li class="no"><b>Más de 8</b><span>No. No va más rápido.</span></li></ul></div>';
  }
  function recorrido(imp) {
    return '<div class="recorrido">' + P.map(function (p) {
      var ss = delPaso(p.id).filter(function (s) { return s.id !== 'inicio'; });
      return '<article class="reco reco--' + p.id + '"><p class="reco__n">Paso ' + p.n + '</p><h3>' + p.t + '</h3><p>' + p.x + '</p><ol>' + ss.map(function (s, k) { return '<li><a href="#/' + s.id + '"><span>' + (k + 1) + '</span>' + s.corto + '</a></li>'; }).join('') + '</ol>' + (imp ? '' : '<a class="btn" href="#/' + ss[0].id + '">Empezar el paso ' + p.n + ' →</a>') + '</article>';
    }).join('<span class="reco__flecha" aria-hidden="true">→</span>') + '</div>';
  }

  // ------------------------------------------------------------ herramientas
  function opciones(nombre, items, marcado) { return '<div class="opciones">' + items.map(function (it, i) { return '<label><input type="radio" name="' + nombre + '" value="' + esc(it.v) + '"' + (marcado === i ? ' checked' : '') + '><span>' + it.t + '</span></label>'; }).join('') + '</div>'; }
  function valor(f, n) { var e = f.elements[n]; if (!e) return ''; if (e.length && !e.tagName) { for (var i = 0; i < e.length; i++) if (e[i].checked) return e[i].value; return ''; } return String(e.value || '').trim(); }
  var TONO = { si: ['Sí, en fase 1', '#004A98'], no: ['No, en fase 1', '#CE0E2D'], nunca: ['Nunca', '#111418'] };

  var H = {
    nivel: {
      html: function () {
        return '<h3 class="herramienta__t">¿En qué nivel empiezas?</h3><div class="dos-col"><form class="form" onsubmit="return false">' +
          '<fieldset class="campo"><legend>¿Usas ya Claude?</legend>' + opciones('usa', [{ v: 'no', t: 'No, o acabo de empezar' }, { v: 'meses', t: 'Sí, hace unos meses' }], 0) + '</fieldset>' +
          '<fieldset class="campo"><legend>¿Has probado Cowork o Claude Code?</legend>' + opciones('cowork', [{ v: 'no', t: 'No' }, { v: 'si', t: 'Sí' }], 0) + '</fieldset>' +
          '<fieldset class="campo"><legend>¿Automatizas tareas o ayudas a otros?</legend>' + opciones('auto', [{ v: 'no', t: 'No' }, { v: 'si', t: 'Sí' }], 0) + '</fieldset>' +
          '</form><div class="resultado" aria-live="polite"></div></div>';
      },
      activa: function (el) {
        var f = el.querySelector('form'), out = el.querySelector('.resultado');
        function pinta() {
          var n = valor(f, 'usa') === 'no' ? 0 : (valor(f, 'cowork') === 'si' && valor(f, 'auto') === 'si') ? 2 : 1;
          var N = C.niveles[n];
          out.innerHTML = '<span class="chip chip--marca">Tu nivel</span><p class="big">' + N.k + '</p><p>' + N.x + '</p>';
        }
        f.addEventListener('change', pinta); pinta();
      },
      texto: function () { return '<h3 class="h">¿En qué nivel empiezas?</h3><ul class="lista">' + C.niveles.map(function (n) { return '<li><b>' + n.k + ':</b> ' + n.x + '</li>'; }).join('') + '</ul>'; },
    },

    pantallas: {
      html: function () {
        return '<h3 class="herramienta__t">Prueba: ¿cuántas pantallas quieres abrir?</h3><div class="dos-col"><div class="form"><label class="campo"><span>Pantallas de Sage a la vez</span><input type="range" min="1" max="12" value="5" name="n" class="rango" aria-describedby="pant-res"></label><div class="rango__marcas" aria-hidden="true"><span>1</span><span>5</span><span>8</span><span>12</span></div></div><div class="resultado" id="pant-res" aria-live="polite"></div></div>';
      },
      activa: function (el) {
        var r = el.querySelector('input'), out = el.querySelector('.resultado');
        var DATO = { 3: 'Es lo más habitual en Reynasa (la mediana).', 5: 'El 87 % de la plantilla (125 de 144) trabaja con 5 o menos.', 6: 'El 90 % trabaja con 6 o menos.', 7: 'Solo en picos de trabajo, y pocas veces.', 8: 'El 96 % (138 de 144) trabaja con 8 o menos.' };
        function pinta() {
          var n = +r.value, t = n <= 5 ? ['Aconsejable', '#004A98'] : n <= 8 ? ['Solo en picos', '#b26f00'] : ['No', '#CE0E2D'];
          var mem = n * 100 >= 1000 ? 'menos de ' + (n / 10).toFixed(1).replace('.', ',') + ' GB' : 'menos de ' + n * 100 + ' MB';
          var dato = DATO[n] || (n > 10 ? 'Solo 4 personas pasan de 10: casi seguro, pantallas sin cerrar.' : n > 8 ? 'Más de 8 no va más rápido: Claude trabaja paso a paso.' : 'Dentro de lo aconsejable.');
          r.style.setProperty('--p', ((n - 1) / 11 * 100) + '%');
          out.style.borderTopColor = t[1];
          out.innerHTML = '<span class="chip" style="background:' + t[1] + ';color:#fff">' + t[0] + '</span><p class="big">' + n + ' pantalla' + (n > 1 ? 's' : '') + '</p><p>' + dato + '</p><p class="resultado__mini">En el servidor: ' + mem + ', como una persona más con ' + n + ' pantalla' + (n > 1 ? 's' : '') + '.</p>';
        }
        r.addEventListener('input', pinta); pinta();
      },
      texto: function () { return '<div class="tabla-env"><table class="tabla"><thead><tr><th>Pantallas a la vez</th><th>¿Se puede?</th></tr></thead><tbody><tr><td>Hasta 5</td><td>Sí: lo aconsejable. El 87 % de la plantilla (125 de 144) ya trabaja con 5 o menos.</td></tr><tr><td>6 a 8</td><td>Solo en picos de trabajo. El 96 % (138 de 144) trabaja con 8 o menos.</td></tr><tr><td>Más de 8</td><td>No. No va más rápido y gasta más cuota.</td></tr></tbody></table></div>'; },
    },

    fase1: {
      html: function () {
        return '<h3 class="herramienta__t">Toca una tarea y te decimos si se puede en fase 1</h3><div class="acciones" role="group" aria-label="Tareas">' + C.acciones.map(function (a, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-i="' + i + '">' + a.t + '</button>'; }).join('') + '</div><div class="resultado" aria-live="polite"></div>';
      },
      activa: function (el) {
        var out = el.querySelector('.resultado');
        function pinta(i) {
          var a = C.acciones[i], t = TONO[a.v];
          el.querySelectorAll('.acciones button').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.i === i)); });
          out.style.borderTopColor = t[1];
          out.innerHTML = '<span class="chip" style="background:' + t[1] + ';color:#fff">' + ico(a.v === 'si' ? 'check' : 'x') + t[0] + '</span><h3>' + a.t + '</h3><p class="resultado__mini">' + (a.v === 'si' ? 'Qué hace Claude' : 'Qué responde Claude') + '</p><p class="resultado__resp">' + a.x + '</p>';
        }
        el.querySelectorAll('.acciones button').forEach(function (b) { b.addEventListener('click', function () { pinta(+b.dataset.i); }); });
        pinta(0);
      },
      texto: function () { return '<div class="tabla-env"><table class="tabla"><thead><tr><th>Tarea</th><th>¿Se puede en fase 1?</th></tr></thead><tbody>' + C.acciones.map(function (a) { return '<tr><td>' + a.t + '</td><td><b>' + TONO[a.v][0] + '.</b> ' + a.x + '</td></tr>'; }).join('') + '</tbody></table></div>'; },
    },

    checklist: {
      html: function () {
        var n = 0;
        return '<div class="check__prog"><span data-cuenta>0 de 0</span><span class="check__barra" aria-hidden="true"><i></i></span></div>' + C.checklist.map(function (g) { return '<div class="check__grupo"><h3>' + g.g + '</h3>' + g.items.map(function (it) { var i = n++; return '<label><input type="checkbox" data-i="' + i + '"><span>' + it + '</span></label>'; }).join('') + '</div>'; }).join('');
      },
      activa: function (el) {
        var cajas = el.querySelectorAll('input[type="checkbox"]'), clave = 'transformacion-ia-checklist', est = [];
        try { est = JSON.parse(localStorage.getItem(clave) || '[]'); } catch (e) {}
        cajas.forEach(function (c) { c.checked = est.indexOf(+c.dataset.i) >= 0; });
        function cuenta() {
          var hechos = Array.prototype.filter.call(cajas, function (c) { return c.checked; });
          el.querySelector('[data-cuenta]').textContent = hechos.length + ' de ' + cajas.length;
          el.querySelector('.check__barra i').style.transform = 'scaleX(' + (hechos.length / cajas.length) + ')';
          try { localStorage.setItem(clave, JSON.stringify(hechos.map(function (c) { return +c.dataset.i; }))); } catch (e) {}
        }
        el.addEventListener('change', cuenta); cuenta();
      },
      texto: function () { return C.checklist.map(function (g) { return '<h3 class="h">' + g.g + '</h3><ul class="lista lista--check">' + g.items.map(function (i) { return '<li>☐ ' + i + '</li>'; }).join('') + '</ul>'; }).join(''); },
    },
  };

  // Carrusel de la presentación: busca diapo01.png, diapo02.png… hasta la primera que no exista
  function carrusel(el) {
    var lista = [], cargadas = 0;
    function ruta(n) { return M.presentacion + 'diapo' + String(n).padStart(2, '0') + '.png'; }
    function prueba(n) {
      if (n > 60) return monta();
      var im = new Image();
      im.onload = function () { lista.push(ruta(n)); prueba(n + 1); };
      im.onerror = function () { monta(); };
      im.src = ruta(n);
    }
    function monta() {
      if (!lista.length) { el.innerHTML = '<p class="carrusel__vacio">Las diapositivas se están preparando. Mientras tanto, puedes descargar la presentación en PDF.</p>'; return; }
      var i = 0;
      el.innerHTML = '<div class="carrusel__marco"><img class="carrusel__img" src="' + lista[0] + '" alt="Diapositiva 1 de ' + lista.length + '" width="1600" height="900"><button type="button" class="carrusel__btn carrusel__btn--izq" aria-label="Diapositiva anterior">' + ico('izq') + '</button><button type="button" class="carrusel__btn carrusel__btn--der" aria-label="Diapositiva siguiente">' + ico('der') + '</button><span class="carrusel__n" aria-live="polite">1 / ' + lista.length + '</span></div>' +
        '<div class="carrusel__minis" role="group" aria-label="Diapositivas">' + lista.map(function (s, k) { return '<button type="button" data-k="' + k + '" aria-label="Diapositiva ' + (k + 1) + '"' + (k === 0 ? ' aria-current="true"' : '') + '><img src="' + s + '" alt="" width="160" height="90" loading="lazy"></button>'; }).join('') + '</div>';
      var img = el.querySelector('.carrusel__img'), n = el.querySelector('.carrusel__n'), minis = el.querySelectorAll('.carrusel__minis button');
      function ve(k) {
        i = (k + lista.length) % lista.length;
        img.src = lista[i]; img.alt = 'Diapositiva ' + (i + 1) + ' de ' + lista.length; n.textContent = (i + 1) + ' / ' + lista.length;
        minis.forEach(function (b, j) { if (j === i) { b.setAttribute('aria-current', 'true'); b.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } else b.removeAttribute('aria-current'); });
      }
      el.querySelector('.carrusel__btn--izq').addEventListener('click', function () { ve(i - 1); });
      el.querySelector('.carrusel__btn--der').addEventListener('click', function () { ve(i + 1); });
      minis.forEach(function (b) { b.addEventListener('click', function () { ve(+b.dataset.k); }); });
      el.tabIndex = 0;
      el.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') ve(i - 1); if (e.key === 'ArrowRight') ve(i + 1); });
      var x0 = null;
      img.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      img.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) ve(i + (dx < 0 ? 1 : -1)); x0 = null; });
    }
    prueba(1);
  }

  // ------------------------------------------------------------ escenas
  function sigDe(i) { return S[i + 1]; }
  function kicker(s) { var p = paso(s.paso); return 'Paso ' + p.n + ' · ' + p.t + ' · ' + numEnPaso(s) + ' de ' + pestDe(s.paso).length; }
  function cabecera(s, i, imp) {
    var medio;
    if (s.sinMedio && !imp) medio = '';
    else if (s.video && !imp) medio = '<figure class="medio medio--video"><video controls preload="metadata" playsinline poster="' + M.poster + '" width="1280" height="720"><source src="' + M.video + '" type="video/mp4"><p>Tu navegador no puede reproducir el vídeo. <a href="' + M.video + '">Descárgalo aquí</a>.</p></video></figure>';
    else medio = '<figure class="medio"><img src="assets/img/' + (imp ? 'imp/' + s.img + '.jpg' : s.img + '.webp') + '" alt="" width="1600" height="905"></figure>';
    var sig = sigDe(i);
    var acc = imp ? '' : '<div class="cabecera__acc">' + (sig ? '<a class="btn" href="#/' + sig.id + '">Siguiente: ' + sig.corto + ' →</a>' : '<a class="btn" href="#/descargas">Descargas →</a>') +
      '<a class="btn btn--claro btn--ico" href="' + pdfDe(s.id) + '" download title="PDF de esta pestaña">' + ico('bajar') + '<span>PDF</span></a><button type="button" class="btn btn--claro btn--ico" data-enlace="' + s.id + '" title="Copiar el enlace de esta pestaña">' + ico('enlace') + '<span>Enlace</span></button></div>';
    var vid = s.video && imp ? '<p class="nota">El vídeo se ve en la web: <b>' + M.url + '#/' + s.id + '</b></p>' : '';
    return '<header class="cabecera' + (medio ? '' : ' cabecera--sola') + '"><div class="cabecera__texto"><p class="kicker">' + kicker(s) + '</p><h1 id="t-' + s.id + '">' + s.t + '</h1><p>' + s.x + '</p>' + acc + vid + '</div>' + medio + '</header>';
  }
  function portada(s, imp) {
    var po = C.portada;
    var texto = '<p class="kicker">' + po.kicker + '</p><h1 id="t-inicio">' + po.h1 + '</h1><p class="portada__sub">' + po.sub + '</p>' + alianza();
    if (imp) return '<div class="portada-imp"><div class="portada-imp__texto">' + texto + '</div><div class="portada-imp__img"><img src="assets/img/imp/portada.jpg" alt="" width="1100" height="622"></div></div>';
    return '<div class="portada" data-capas><img class="portada__fondo" src="assets/img/portada-fondo.webp" alt="" width="1600" height="905">' +
      '<img class="capa capa--sujeto" data-prof="22" src="assets/img/portada-sujeto.webp" alt="" width="1300" height="863">' +
      '<img class="capa capa--hojas" data-prof="40" src="assets/img/portada-hojas.webp" alt="" width="900" height="598">' +
      '<div class="portada__texto">' + texto + '<div class="cabecera__acc"><a class="btn" href="#/mensaje">Empezar →</a><a class="btn btn--claro" href="#/video">' + ico('play') + 'Ir al paso 2: Claude en Chrome</a></div></div></div>';
  }
  function navega(i) {
    var a = S[i - 1], b = S[i + 1];
    function rot(s) { return 'Paso ' + paso(s.paso).n + ' · ' + s.corto; }
    return '<nav class="sigue" aria-label="Anterior y siguiente">' + (a ? '<a href="#/' + a.id + '"><small>← Anterior</small><span>' + rot(a) + '</span></a>' : '<span></span>') + (b ? '<a class="sig" href="#/' + b.id + '"><small>Siguiente →</small><span>' + rot(b) + '</span></a>' : '<a class="sig" href="#/descargas"><small>Para terminar →</small><span>Descargas</span></a>') + '</nav>';
  }
  function escena(i, sub) {
    var s = S[i];
    var sb = s.subs.find(function (x) { return x.id === sub; }) || s.subs[0];
    var cab = s.id === 'inicio' ? portada(s) : cabecera(s, i);
    var subs = s.subs.length > 1 ? '<nav class="subpestanas" aria-label="Partes de «' + esc(s.corto) + '»">' + s.subs.map(function (x, k) { return '<a href="#/' + s.id + '/' + x.id + '"' + (x === sb ? ' aria-current="page"' : '') + '><span class="n">' + (k + 1) + '</span>' + x.t + '</a>'; }).join('') + '</nav>' : '';
    return '<section class="escena" aria-labelledby="t-' + s.id + '">' + cab + subs + '<div class="cuerpo"><div class="panel" id="panel">' + sb.blocks.map(function (b) { return bloque(b, false); }).join('') + '</div>' + navega(i) + '</div></section>';
  }
  function escenaImp(i) {
    var s = S[i];
    var cab = s.id === 'inicio' ? portada(s, true) : cabecera(s, i, true);
    return '<section class="escena" aria-labelledby="t-' + s.id + '">' + cab + '<div class="cuerpo">' + s.subs.map(function (x) { return '<div class="bloque-sub">' + (s.subs.length > 1 ? '<h2>' + x.t + '</h2>' : '') + '<div class="panel">' + x.blocks.map(function (b) { return bloque(b, true); }).join('') + '</div></div>'; }).join('') + '</div></section>';
  }
  function descargas() {
    var tam = window.TAMANOS || {};
    function t(f) { return tam[f] ? ' · ' + tam[f] : ''; }
    return '<section class="escena" aria-labelledby="t-desc"><header class="cabecera"><div class="cabecera__texto"><p class="kicker">Descargas</p><h1 id="t-desc">Llévatelo</h1><p>Todo en PDF y en Word, cada paso por separado, la presentación y cada pestaña en su propio PDF.</p><div class="cabecera__acc"><a class="btn btn--claro" href="#/inicio">← Volver al inicio</a></div></div><figure class="medio"><img src="assets/img/descargas.webp" alt="" width="1600" height="905"></figure></header>' +
      '<div class="cuerpo"><div class="descargas"><div class="descargas__top">' +
      '<a class="descarga" href="descargas/' + M.archivo + '.pdf" download><b>PDF completo</b><span>Los dos pasos' + t(M.archivo + '.pdf') + '</span></a>' +
      '<a class="descarga" href="descargas/' + M.archivo + '.docx" download><b>Word completo</b><span>Para editarlo y reutilizarlo' + t(M.archivo + '.docx') + '</span></a>' +
      '<a class="descarga descarga--claro" href="descargas/' + M.archivo + '-paso-1-propuesta.pdf" download><b>Paso 1 · La propuesta</b><span>PDF' + t(M.archivo + '-paso-1-propuesta.pdf') + '</span></a>' +
      '<a class="descarga descarga--claro" href="descargas/' + M.archivo + '-paso-2-claude-en-chrome-sage.pdf" download><b>Paso 2 · Claude en Chrome en Sage</b><span>PDF' + t(M.archivo + '-paso-2-claude-en-chrome-sage.pdf') + '</span></a>' +
      '<a class="descarga descarga--claro" href="' + M.presentacionPdf + '" download><b>La presentación</b><span>Claude en Chrome dentro de Sage X3, en PDF</span></a></div>' +
      P.map(function (p) { return '<h2 class="h">Paso ' + p.n + ' · ' + p.t + ', pestaña a pestaña</h2><ul class="lista-pdf">' + delPaso(p.id).map(function (s) { var f = pdfDe(s.id); return '<li><a href="' + f + '" download><span>' + (s.id === 'inicio' ? 'Portada' : numEnPaso(s) + ' · ' + s.corto) + '</span><small>PDF' + t(f.replace('descargas/', '')) + '</small></a></li>'; }).join('') + '</ul>'; }).join('') +
      '</div></div></section>';
  }

  // ------------------------------------------------------------ comportamiento
  function copiar(btn, texto) {
    var ok = function () { var h = btn.innerHTML; btn.classList.add('ok'); btn.textContent = 'Copiado'; setTimeout(function () { btn.classList.remove('ok'); btn.innerHTML = h; }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(ok, ok);
    else { var a = document.createElement('textarea'); a.value = texto; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (e) {} a.remove(); ok(); }
  }
  function activar(raiz) {
    raiz.querySelectorAll('[data-herramienta]').forEach(function (el) { var h = H[el.dataset.herramienta]; if (h && h.activa) h.activa(el); });
    raiz.querySelectorAll('[data-carrusel]').forEach(carrusel);
    raiz.querySelectorAll('.giro').forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); }); });
    if (!reduce && matchMedia('(pointer: fine)').matches) raiz.querySelectorAll('[data-capas]').forEach(function (h) {
      var capas = h.querySelectorAll('[data-prof]');
      setTimeout(function () { capas.forEach(function (c) { c.style.animation = 'none'; }); }, 1500);
      h.addEventListener('pointermove', function (e) { var r = h.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; capas.forEach(function (c) { var p = +c.dataset.prof; c.style.transform = 'translate3d(' + (-x * p).toFixed(1) + 'px,' + (-y * p * .6).toFixed(1) + 'px,0)'; }); });
      h.addEventListener('pointerleave', function () { capas.forEach(function (c) { c.style.transform = ''; }); });
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copiar]'); if (b) return copiar(b, b.getAttribute('data-copiar'));
    b = e.target.closest('[data-enlace]'); if (b) return copiar(b, M.url + '#/' + b.getAttribute('data-enlace'));
  });

  // ------------------------------------------------------------ arranque
  if (IMPRIMIR) {
    document.body.classList.add('modo-imp');
    var lista = IMPRIMIR === 'todo' ? S : (IMPRIMIR === 'p1' || IMPRIMIR === 'p2') ? delPaso(IMPRIMIR) : [S[idx(IMPRIMIR)]];
    main.innerHTML = lista.map(function (s) { return escenaImp(S.indexOf(s)); }).join('');
    var imgs = Array.prototype.slice.call(document.images);
    imgs.forEach(function (im) { im.loading = 'eager'; });
    Promise.all(imgs.map(function (im) { return im.decode().catch(function () {}); })).then(function () { window.__listo = true; });
    return;
  }

  var pest = document.querySelector('.pestanas ol');
  pest.innerHTML = P.map(function (p, k) {
    return (k ? '<li class="pestanas__flecha" aria-hidden="true">→</li>' : '') + '<li class="pestanas__paso pestanas__paso--' + p.id + '"><a href="#/' + delPaso(p.id)[0].id + '" data-paso="' + p.id + '" title="Paso ' + p.n + ': ' + p.t + '"><span class="n">Paso ' + p.n + '</span><span class="pestanas__largo">' + p.corto + '</span></a></li>' +
      pestDe(p.id).map(function (s) { return '<li data-de="' + p.id + '"><a href="#/' + s.id + '" data-id="' + s.id + '"><span class="n">' + p.n + '.' + numEnPaso(s) + '</span>' + s.corto + '</a></li>'; }).join('');
  }).join('');

  var actual = null, ultimoPaso = 'p1';
  function pinta() {
    var h = (location.hash || '#/inicio').replace(/^#\/?/, '').split('/');
    var id = h[0] || 'inicio', sub = h[1], i = idx(id);
    var titulo, pid = null;
    if (id === 'descargas') { main.innerHTML = descargas(); titulo = 'Descargas'; i = S.length - 1; }
    else {
      if (i < 0) { i = 0; id = 'inicio'; }
      pid = S[i].paso;
      if (actual === id && sub) {
        var s = S[i], sb = s.subs.find(function (x) { return x.id === sub; }) || s.subs[0];
        main.querySelectorAll('.subpestanas a').forEach(function (a) { if (a.getAttribute('href') === '#/' + id + '/' + sb.id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
        var p = document.getElementById('panel'); p.innerHTML = sb.blocks.map(function (b) { return bloque(b, false); }).join(''); activar(p);
        var sp = main.querySelector('.subpestanas'); if (sp && (sp.getBoundingClientRect().top > window.innerHeight * .5 || sp.getBoundingClientRect().top < 0)) sp.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
        document.title = sb.t + ' · ' + s.corto + ' · ' + M.titulo;
        return;
      }
      main.innerHTML = escena(i, sub); titulo = S[i].corto;
    }
    actual = id; activar(main);
    // Solo se despliegan las pestañas del paso en el que estás; el otro paso queda como una píldora
    if (pid) ultimoPaso = pid; else pid = ultimoPaso;
    pest.querySelectorAll('li[data-de]').forEach(function (li) { li.hidden = li.dataset.de !== pid; });
    pest.querySelectorAll('a[data-paso]').forEach(function (a) { a.classList.toggle('activo', a.dataset.paso === pid); });
    pest.querySelectorAll('a[data-id]').forEach(function (a) { if (a.dataset.id === id) { a.setAttribute('aria-current', 'page'); a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' }); } else a.removeAttribute('aria-current'); });
    document.querySelector('.barra__progreso i').style.transform = 'scaleX(' + Math.min(1, (i + 1) / S.length) + ')';
    document.title = (id === 'inicio' ? '' : titulo + ' · ') + M.titulo;
    window.scrollTo(0, 0); main.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', pinta);
  pinta();
})();
