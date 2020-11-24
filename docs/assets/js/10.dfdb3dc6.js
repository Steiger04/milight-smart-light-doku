(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(e,t,n){"use strict";n.r(t);var a=n(35),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"versionen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#versionen"}},[e._v("#")]),e._v(" Versionen")]),e._v(" "),n("p",[e._v("Hier gibt es Kurzhinweise zu den neunen Versionen.")]),e._v(" "),n("h2",{attrs:{id:"v1-0-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-1"}},[e._v("#")]),e._v(" v1.0.1")]),e._v(" "),n("h3",{attrs:{id:"was-ist-neu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#was-ist-neu"}},[e._v("#")]),e._v(" Was ist neu")]),e._v(" "),n("p",[e._v("Das Admin-UI wurde komplett auf Vue und Quasar umgestellt. Funktional hat sich nichts geändert.")]),e._v(" "),n("h3",{attrs:{id:"update-auf-v1-0-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-auf-v1-0-1"}},[e._v("#")]),e._v(" Update auf v1.0.1")]),e._v(" "),n("ul",[n("li",[e._v("Konfiguration der Instanz speichern")]),e._v(" "),n("li",[e._v("Instanz deaktivieren")]),e._v(" "),n("li",[e._v("Instanz löschen")]),e._v(" "),n("li",[e._v("Adapter löschen")]),e._v(" "),n("li",[e._v("Adapter v1.0.1 installieren")]),e._v(" "),n("li",[e._v("Instanz neu anlegen")]),e._v(" "),n("li",[e._v("Konfiguration importieren und speichern -> Instanz startet neu -> alle states sind wieder vorhanden")])]),e._v(" "),n("h2",{attrs:{id:"v0-6-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-0"}},[e._v("#")]),e._v(" v0.6.0")]),e._v(" "),n("h3",{attrs:{id:"was-ist-neu-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#was-ist-neu-2"}},[e._v("#")]),e._v(" Was ist neu")]),e._v(" "),n("p",[e._v("Ich habe mir das Thema Effekte einmal angeschaut und das Ganze etwas erweitert.\nEs gibt jetzt für iBox1 / iBox2 (Zonentyp: bridge, rgbw, fullColor, fullColor8Zone) für das Thema Effekte drei neue\nund einen umbenannten State.")]),e._v(" "),n("ul",[n("li",[e._v("neu: effectOn, effectOff, effectOnOff")]),e._v(" "),n("li",[e._v("umbenannt: onlyBrightness nach effectBrightness")])]),e._v(" "),n("h4",{attrs:{id:"funktionsweise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#funktionsweise"}},[e._v("#")]),e._v(" Funktionsweise")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("effectOn=true: schaltet den aktuellen Effekt mit der aktuellen effectBrightness ein, d.h.")]),e._v(" "),n("ul",[n("li",[e._v("effectOn=true, effectOff=false, effectOnOff=true, on=false, off=true, onoff=false, brightness=0, rgb=#000000")])])]),e._v(" "),n("li",[n("p",[e._v("effectOff=true: schaltet den aktuellen Effekt mit der aktuellen effectBrightness aus, d.h.")]),e._v(" "),n("ul",[n("li",[e._v("effectOn=false, effectOff=true, effectOnOff=false, on=false, off=true, onoff=false, brightness=0, rgb=#000000")])])]),e._v(" "),n("li",[n("p",[e._v("effectMode=1..9: Schaltet den gewählten effectMode mit der aktuellen effectBrightness ein, d.h.")]),e._v(" "),n("ul",[n("li",[e._v("effectOn=true, effectOff=false, effectOnOff=true, on=false, off=true, onoff=false, brightness=0, rgb=#000000")])])])]),e._v(" "),n("p",[e._v("Der Effektmodus kann jetzt völlig unabhängig von der eigentlichen Farbwahl ausgewählt werden, d.h. wenn ein\nEffektmodus aktiv ist, kann durch wahl von on=true direkt die alte Farbe wieder aktiviert werden und umgekehrt\n(alle States die irgendwie gesetzt werden müssen, also effectOn, effectOff, effectOnOff, on, off, onoff, brightness,\nsaturation, hue, rgb behalten immer ihre richtigen Abhängigkeiten). Diese Zusammenhänge lassen sich bei geöffnetem\nObjektbaum gut nachvollziehen.")]),e._v(" "),n("h3",{attrs:{id:"update-auf-v0-6-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-auf-v0-6-0"}},[e._v("#")]),e._v(" Update auf v0.6.0")]),e._v(" "),n("p",[e._v("Folgende Vorgehensweise beachten:")]),e._v(" "),n("ol",[n("li",[e._v("Adapter v0.6.0 installieren. Die alten Instanzen müssen nicht gelöscht werden, die zuvor angelegten Zonen bleiben\nalso erhalten.")]),e._v(" "),n("li",[e._v("Dann im Adapter-Admin unter  dem Reiter "),n("RouterLink",{attrs:{to:"/admin/#zonen"}},[e._v("ZONEN")]),e._v(" "),n("ul",[n("li",[e._v("alle Zonen einmal deaktivieren, dann")]),e._v(" "),n("li",[e._v("speichern, dann")]),e._v(" "),n("li",[e._v("alle Zonen wieder aktivieren, dann")]),e._v(" "),n("li",[e._v("noch einmal speichern")])])],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);