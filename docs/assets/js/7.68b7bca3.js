(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{329:function(e,t,n){"use strict";n.r(t);var i=n(35),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"motivation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),n("p",[e._v("Da das Milight-System nicht rückkanalfähig ist, gehen Befehle die direkt über die Milight-Fernbedienungen, oder die\nMilight eigene App ausgeführt werden für den ioBroker verloren, d.h. Änderungen werden einfach nicht erkannt und\nauch nicht in den grafischen Anzeige- und Steuerungssystemen (VIS, etc.) nachvollzogen.\nIch wollte daher eine App entwickeln, die möglichst eine handlebare Alternative zu den gängigen Milight\neigenen Lösungen darstellt und alle Stateänderungen sofort überall verfügbar macht.")]),e._v(" "),n("p",[e._v("Mit der App besteht die Möglichkeit die Zonen aller im ioBroker angelegten Bridges zu steuern. Das Bedienkonzept ist\ndabei vielleicht etwas unkonventionell 😄, da ich bewusst auf die sonst üblichen Side- und Navbars\nverzichtet habe, um eine schnelle Einhandbedienung zu realisieren.")]),e._v(" "),n("p",[e._v("Probiert es halt einfach aus!")]),e._v(" "),n("p",[e._v("Wichtig war mir auch noch ein gutes Antwort-/Zeitverhaltung (möglichst vergleichbar zur Originalfernbedienung) bei Nutzung\nder verschiedenen Slider, ohne ein "),n("RouterLink",{attrs:{to:"/admin/#entprellzeit"}},[e._v("Nachlaufen")]),e._v(" der Bulbs oder LED-Strips.")],1),e._v(" "),n("p",[e._v('Die Anzahl der Messages, die zur Steuerung über den Socket gehen sind minimiert,d.h. es gibt keine doppelten\n"überflüssigen" Schaltbefehle in beide Richtungen.')]),e._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[e._v("WAS FEHLT")]),e._v(" "),n("p",[e._v("Noch nicht implementiert ist die Nutzung der verschiedenen Modi je Zone und das Anlernen der Bulbs und\nController. Insbesondere für das Anlernen müssen noch die bekannten Milight-Apps verwendet werden.")]),e._v(" "),n("p",[e._v("Beide Punkte sind auf der ToDo Liste und werden noch implementiert!")])]),e._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),n("p",[e._v("Grundsätzlich ist keine spezielle Installation erforderlich, sondern nur der obligatorische\n"),n("RouterLink",{attrs:{to:"/admin/#aktivieren-der-milight-smart-light-app"}},[e._v("Aufruf")]),e._v(" der Seite im Browser.")],1),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),n("p",[e._v("Als Browser bitte unbedingt Google Chrome verwenden!")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("EMPFEHLUNG")]),e._v(" "),n("p",[e._v("Die App ist als PWA programmiert ("),n("a",{attrs:{href:"https://de.wikipedia.org/wiki/Progressive_Web_App",target:"_blank",rel:"noopener noreferrer"}},[e._v("PWA = Progressive Web App"),n("OutboundLink")],1),e._v("),\nd.h. neben optimiertem Caching kann die App unter Android oder iOS wie eine native App genutzt werden.")])]),e._v(" "),n("h3",{attrs:{id:"nutzung-als-native-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nutzung-als-native-app"}},[e._v("#")]),e._v(" Nutzung als native App")]),e._v(" "),n("p",[e._v("Um die App wie eine native App zu nutzen, sind folgende Schritte durchzuführen:")]),e._v(" "),n("ul",[n("li",[e._v("Aufruf der App im Chrome.")]),e._v(" "),n("li",[e._v('Im Chrome Hauptmenü den Punkt "Zum Startbildschirm hinzufügen" aufrufen.')]),e._v(" "),n("li",[e._v('In dem dann erscheinenden Dialogfeld entweder den vorgeschlagenen Namen mslfe belassen, oder durch einen eigenen\nText ersetzen. Danach auf "Hinzufügen" klicken. Dann den Browser schließen und die App direkt über das\nIcon starten.')])]),e._v(" "),n("h2",{attrs:{id:"bridge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bridge"}},[e._v("#")]),e._v(" Bridge")]),e._v(" "),n("p",[e._v("Mit Start der App wird immer die erste Bridge/Instanz des milight-smart-light Adapters angezeigt (im Bild ist es\nschon die Dritte). Um von einer Bridge zur Nächsten zu kommen, muss nur über den Screen gewischt werden. Wischen\nnach links würde zu milight-smart-light.3 führen und wischen nach rechts zu milight-smart-light.1. Als\nWischfläche würde sich im Beispiel der Bereich (1) oder (5) anbieten. Grundsätzlich kann aber jeder freie\nBereich des Screens genutzt werden. Einfach ausprobieren!")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),n("p",[e._v("Die Anordnung der Gruppen ist alphabetisch, ebenso die Anordnung der Zonen innerhalb der Gruppen. Die Namen der\nGruppen und Zonen entsprechen den Eingaben der "),n("RouterLink",{attrs:{to:"/admin/#_4-zonen-8-zonen"}},[e._v("Admin Konfiguration")]),e._v(".")],1)]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("img",{staticClass:"my-img",staticStyle:{width:"250px"},attrs:{src:e.$withBase("/images/app/app-bridge-1.png")}})]),e._v(" "),n("th",[n("img",{staticClass:"my-img",staticStyle:{width:"250px"},attrs:{src:e.$withBase("/images/app/app-bridge-2.png")}})])])]),e._v(" "),n("tbody")]),e._v(" "),n("h3",{attrs:{id:"_1-infobereich"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-infobereich"}},[e._v("#")]),e._v(" (1) Infobereich")]),e._v(" "),n("p",[e._v("Der Infobereich gibt Auskunft über:")]),e._v(" "),n("ul",[n("li",[e._v("die aktuelle Bridge / Instanz")]),e._v(" "),n("li",[e._v("den Bridgetyp")]),e._v(" "),n("li",[e._v("die IP der Bridge")]),e._v(" "),n("li",[e._v("die Status CONNECTED und ALIVE")])]),e._v(" "),n("h4",{attrs:{id:"funktionen-im-infobereich"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#funktionen-im-infobereich"}},[e._v("#")]),e._v(" Funktionen im Infobereich")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Klicken auf das Bridge Symbol schaltet in den Fullscreen-Modus und erneutes Klicken wieder zurück.")])]),e._v(" "),n("li",[n("p",[e._v("Klicken auf das Kreuzsymbol schaltet den Infobereich aus und der Bereich zur Darstellung der Gruppen vergrößert sich\nautomatisch. Es erscheint ein Info-Button im Bereich (5). Wird auf den Info-Butten geklickt, wird der Infobereich wieder\ndargestellt.")]),e._v(" "),n("img",{staticClass:"my-img",staticStyle:{width:"100px"},attrs:{src:e.$withBase("/images/app/app-bridge-ohne-info.png")}})])]),e._v(" "),n("h3",{attrs:{id:"_2-gruppen-slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-gruppen-slider"}},[e._v("#")]),e._v(" (2) Gruppen Slider")]),e._v(" "),n("p",[e._v("Mit dem Gruppenslider werden alle Zonen innerhalb der Gruppe an- (beide Lampen grün) oder ausgeschaltet (beide Lampen\nrot).")]),e._v(" "),n("img",{staticStyle:{height:"45px"},attrs:{src:e.$withBase("/images/app/app-bridge-group-all-on.png")}}),e._v(" "),n("h3",{attrs:{id:"_3-zonen-slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-zonen-slider"}},[e._v("#")]),e._v(" (3) Zonen Slider")]),e._v(" "),n("p",[e._v("Mit dem Zonenslider wird die jeweilige Zone an- oder ausgeschaltet.")]),e._v(" "),n("img",{staticStyle:{height:"45px"},attrs:{src:e.$withBase("/images/app/app-bridge-zone-on.png")}}),e._v(" "),n("p",[e._v("Ist die Zone angeschaltet, wird die Lampe grün dargestellt und das Farbquadrat zeigt die Farbe der Zone an. Wenn die\nFarbe weiss ist, erscheint anstatt des Farbquadrates ein Sonnensymbol.")]),e._v(" "),n("img",{staticStyle:{height:"45px"},attrs:{src:e.$withBase("/images/app/app-bridge-zone-sonne.png")}}),e._v(" "),n("p",[e._v("Durch Klicken auf das Farbquadrat oder Sonnensymbol, kann sowohl im an- oder ausgeschalteten Zustand der Night- oder\nDay-Modus ausgewählt werden.")]),e._v(" "),n("img",{staticStyle:{height:"45px"},attrs:{src:e.$withBase("/images/app/app-bridge-zone-nightday.png")}}),e._v(" "),n("p",[e._v("Day-Modus bedeutet, dass weisses Licht in der Helligkeit der vorherigen Farbe und bei RGB+CCT / RGB(8)+CCT Typen\nzusätzlich mit der aktuellen Farbtemperatur dargestellt wird.")]),e._v(" "),n("p",[e._v("Im Night-Modus werden die Zonen maximal gedimmt und es erscheint ein Mondsymbol. Die Zone beibt dabei ausgeschaltet\n(rote Lampe im Slider).")]),e._v(" "),n("img",{staticStyle:{height:"45px"},attrs:{src:e.$withBase("/images/app/app-bridge-zone-night.png")}}),e._v(" "),n("h3",{attrs:{id:"_4-zonenwahl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-zonenwahl"}},[e._v("#")]),e._v(" (4) Zonenwahl")]),e._v(" "),n("p",[e._v("Über die Zonenwahl gelangt man zu den Farbauswahlmöglichkeiten der jeweiligen Zone.")]),e._v(" "),n("h3",{attrs:{id:"_5-on-off-bridgezonen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-on-off-bridgezonen"}},[e._v("#")]),e._v(" (5) ON/OFF Bridgezonen")]),e._v(" "),n("p",[e._v("Der grüne Button schaltet alle Zonen aller Gruppen nacheinader an, der rote Button schaltet sie aus.")]),e._v(" "),n("h2",{attrs:{id:"zone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zone"}},[e._v("#")]),e._v(" Zone")]),e._v(" "),n("p",[e._v("Die gewünschte Zone wird über die "),n("RouterLink",{attrs:{to:"/app/#_4-zonenwahl"}},[e._v("Zohnenwahl")]),e._v(" der aktiven Bridge erreicht. Abhängig von dem Typ der\nZone stehen dann nur die verfügbaren Picker zur Auswahl. Die Picker erreicht man durch Klicken auf das Farbquadraht oder\nSonnensymbol des Zonensliders am unteren Screen Rand.")],1),e._v(" "),n("img",{staticClass:"my-img",staticStyle:{width:"250px"},attrs:{src:e.$withBase("/images/app/app-zone-picker-selection.png")}}),e._v(" "),n("p",[e._v("Durch Klicken auf eines der Symbole wird der Picker ausgewählt.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),n("p",[e._v("Eine Auswahl ist nur dann möglich, wenn die Zone aktiv ist (grüne Lampe im Zonen Slider)!")])]),e._v(" "),n("h3",{attrs:{id:"picker-und-slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#picker-und-slider"}},[e._v("#")]),e._v(" Picker und Slider")]),e._v(" "),n("table",{attrs:{"table-layout":"fixed",width:"125%"}},[n("thead",[n("tr",[n("th",[e._v("(1) WHEEL")]),e._v(" "),n("th",[e._v("(2) SWATCHES")]),e._v(" "),n("th",[e._v("(3) SLIDER")]),e._v(" "),n("th",[e._v("(4) WHITE AND TEMP")]),e._v(" "),n("th",[e._v("(5) WHITE")]),e._v(" "),n("th",[e._v("(6) ONLY WHITE")])])]),e._v(" "),n("tbody",[n("tr",{attrs:{align:"center",valign:"top"}},[n("td",[n("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/app/app-zone-wheel.png")}})]),e._v(" "),n("td",[n("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/app/app-zone-swatches.png")}})]),e._v(" "),n("td",[n("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/app/app-zone-slider.png")}})]),e._v(" "),n("td",[n("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/app/app-zone-white-temp.png")}})]),e._v(" "),n("td",[n("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/app/app-zone-white.png")}})]),e._v(" "),n("td",[n("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/app/app-zone-white-buttons.png")}})])]),e._v(" "),n("tr",[n("td",{attrs:{colspan:"6",align:"center"}},[n("b",[e._v("Typ(Zone)")])])]),e._v(" "),n("tr",{attrs:{valign:"top"}},[n("td",[e._v("RGB+CCT, RGB(8)+CCT, RGB(W), Bridge(iBox1)")]),e._v(" "),n("td",[e._v("RGB+CCT, RGB(8)+CCT, RGB(W), Bridge(iBox1)")]),e._v(" "),n("td",[e._v("RGB+CCT, RGB(8)+CCT, RGB(W), Bridge(iBox1)")]),e._v(" "),n("td",[e._v("RGB+CCT, RGB(8)+CCT")]),e._v(" "),n("td",[e._v("RGB(W), Bridge(iBox1)")]),e._v(" "),n("td",[e._v("WEIß")])])])]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),n("p",[e._v("Für alle Picker und Slider gilt, dass im ausgeschalteten Zustand (Lampensymbol im Zonenslider ist rot), auch ohne\nAktivierung durch den Zonenslider, durch einfache Nutzung des Pickers oder Sliders, das Leuchtmittel aktiviert wird.")]),e._v(" "),n("p",[e._v("Ausnahmen:")]),e._v(" "),n("ol",[n("li",[e._v("Beim Slider (3) muss zur Aktivierung des Leuchtmittels aus dem Auszustand eines der Farbrechtecke angeklickt\nwerden, erst danach reagiert der Farbslider.")]),e._v(" "),n("li",[e._v("Bei den Only White Buttons (6) muss der MAX Button zur Aktivierung aus dem Auszustand angeklickt werden, erst\ndanach reagiern die anderen Buttons.")])])]),e._v(" "),n("h4",{attrs:{id:"wheel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wheel"}},[e._v("#")]),e._v(" WHEEL")]),e._v(" "),n("p",[e._v("Der Wheel-Picker ermöglicht die Auswahl aller Farben inklusive schwarz und weiß. Der äußere Kreis ändert den HUE-Wert\nder Farbe und über das innere Quadrat wid die Saturation und Brightness der Farbe festgelegt.")]),e._v(" "),n("p",[e._v("Wenn die Farbe Weiß ausgewählt wird, erscheint im Zonenslider das Sonnensymbol und für die Zonentypen RGB+CCT,\nRGB(8)+CCT und RGB(W), wird in den White Modus des Leuchtmittels / des Controllers umgeschaltet. Bewegt man sich am\nrechten äußeren Rand des Quadrates nach unten, wird das Weiß dunkeler, d.h. das Leuchtmittel wird gedimmt.\nDies wird durch ein immer grauer werdendes Sonnensymbol angezeigt.")]),e._v(" "),n("p",[e._v("Ist die Farbe Schwarz erreicht, schaltet das Leuchtmittel aus und das Lampensymbol im Zonenslider wird auf rot\ngesetzt. Sobald eine neue Farbe gesetzt wird, schaltet das Leuchtmittel wieder ein.")]),e._v(" "),n("h4",{attrs:{id:"swatches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swatches"}},[e._v("#")]),e._v(" SWATCHES")]),e._v(" "),n("p",[e._v("Der Swatches-Picker bildet viele Farben aus dem "),n("a",{attrs:{href:"https://material.io/design/color/#",target:"_blank",rel:"noopener noreferrer"}},[e._v("Material Design Color System"),n("OutboundLink")],1),e._v("\nab. Ich habe den Picker implementiert, weil sich die Farben auch für Leuchtmittel sehr gut verwenden lassen.")]),e._v(" "),n("p",[e._v("Die unterschiedlichen Farbpaletten erreicht man durch eine Wischbewegung nach links oder rechts über die aktuelle\nFarbpalette.")]),e._v(" "),n("p",[e._v("Insgesamt stehen 4 Farbpaletten mit jeweils 45 Farben zur Auswahl!")]),e._v(" "),n("h4",{attrs:{id:"slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slider"}},[e._v("#")]),e._v(" SLIDER")]),e._v(" "),n("p",[e._v("Der Slider-Picker ermöglicht die Änderung des HUE-Wertes der Farbe über den Slider und stellt im darunter liegenden\nBereich jeweils 16 Farbtöne mit dem gewählten HUE-Wert und abgestuften Saturation- und Brightness-Werten dar.")]),e._v(" "),n("h4",{attrs:{id:"white-and-temperature-slider-white-slider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#white-and-temperature-slider-white-slider"}},[e._v("#")]),e._v(" WHITE AND TEMPERATURE SLIDER / WHITE SLIDER")]),e._v(" "),n("p",[e._v("Die Slider werden im "),n("RouterLink",{attrs:{to:"/app/#_3-zonen-slider"}},[e._v("Day Modus")]),e._v(" automatisch ausgewählt und stehen dann für die Zone sofort\nzur Verfügung. Möchte man aus einer Farbwahl heraus die Slider nutzen, muss zuerst über den Wheel-Picker ein Weißton\nausgewählt werden. Danach kann dann über das Sonnensymbol und klicken auf das Daymodus-Icon der Slider\naktiviert werden.")],1),e._v(" "),n("h4",{attrs:{id:"only-white-buttons"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#only-white-buttons"}},[e._v("#")]),e._v(" ONLY WHITE BUTTONS")]),e._v(" "),n("p",[e._v("Die Only White-Buttons stehen nur für den Zonentyp Weiß zur Verfügung und dienen der Steuerung von CCT-Leuchtmitteln.\nHält man die Buttons länger gedrückt, wird die jeweilge Befehlsfolge in gleichmäßigen Abständen zur Bridge\ngeschickt und das Leuchtmittel kontinuierlich in den jeweilgen Bereich geschaltet (kaltes Licht/warmes Licht oder\nheller/dunkeler). Dies wird grafisch durch sich nach aussen bewegende Kreise um den jeweils gedrückten Button\nverdeutlicht.")])])}),[],!1,null,null,null);t.default=r.exports}}]);