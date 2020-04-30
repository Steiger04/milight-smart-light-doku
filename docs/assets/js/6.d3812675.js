(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{332:function(e,n,t){"use strict";t.r(n);var r=t(35),i=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"konfiguration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#konfiguration"}},[e._v("#")]),e._v(" Konfiguration")]),e._v(" "),t("p",[e._v("Voraussetzung für die Konfiguration ist eine vorhandene Instanz des miligt-smart-light Adapters. Die Erstellung einer\nInstanz erfolgt standardmäßig im ioBroker Admin und sollte spätestens jetzt durchgeführt werden. Alle Einstellungen\nwerden über die Reiter "),t("RouterLink",{attrs:{to:"/admin/#bridge"}},[t("strong",[e._v("BRIDGE")])]),e._v(", "),t("RouterLink",{attrs:{to:"/admin/#zonen"}},[t("strong",[e._v("ZONEN")])]),e._v(" und "),t("RouterLink",{attrs:{to:"/admin/#msl-app"}},[t("strong",[e._v("MSL APP")])]),e._v(" vorgenommen.")],1),e._v(" "),t("h2",{attrs:{id:"bridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bridge"}},[e._v("#")]),e._v(" BRIDGE")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-bridge.png")}}),e._v(" "),t("h3",{attrs:{id:"typ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typ"}},[e._v("#")]),e._v(" Typ")]),e._v(" "),t("p",[e._v("Der Typ legt den Typ der Bridge fest. Mögliche Werte sind Legacy und Version 6. Legacy ist der alte Typ, der durch\ndie Version 6 abgelöst wurde.")]),e._v(" "),t("h3",{attrs:{id:"ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[e._v("#")]),e._v(" IP")]),e._v(" "),t("p",[e._v("IP der Bridge. Über den blauen Button wird automatisch nach Bridges im Netzsegment des Adapters gesucht. Das Ergebnis\nwird in einer Auswahl angezeigt. "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-ipauswahl.png")}})]),e._v(" "),t("h3",{attrs:{id:"port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[e._v("#")]),e._v(" Port")]),e._v(" "),t("p",[e._v("Port der Bridge. Für legacy muss "),t("strong",[e._v("Port 8899")]),e._v(" und für Version 6 "),t("strong",[e._v("Port 5987")]),e._v(" zwingend eingetragen werden! Durch die\nVorauswahl des Typs wird der Port automatisch richtig vorbelegt.")]),e._v(" "),t("h3",{attrs:{id:"befehlswiederholungen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#befehlswiederholungen"}},[e._v("#")]),e._v(" Befehlswiederholungen")]),e._v(" "),t("p",[e._v("Ein Wert größer 1 kann dann sinnvoll sein, wenn Strip Controller oder LED Bulbs nicht wie gewünscht auf State\nÄnderungen (RGB, Brightness, etc.) der Instanz reagieren. Häufig deutet dies auf eine schlechte WLAN Verbindung\nzwischen Bridge und Accesspoint hin. Wertänderungen sollten immer nur in einser Schritten vollzogen werden.")]),e._v(" "),t("h3",{attrs:{id:"pause-zwischen-den-befehlen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pause-zwischen-den-befehlen"}},[e._v("#")]),e._v(" Pause zwischen den Befehlen")]),e._v(" "),t("p",[e._v("Eine Erhöhung des Wertes (ms) ist immer dann sinnvoll, wenn eine State Änderung nicht zu dem gewünschten Ergebnis führt.\nIn Kombination mit der Befehlswiederholung läßt sich oftmals ein positiver Effekt erzielen.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIPP")]),e._v(" "),t("p",[e._v("Bevor der Wert für Befehlswiederholungen erhöht wird, immer erst eine größere Pause wählen. Hier können oft wenige\nMillisekunden (5-10) schon etwas bewirken.")])]),e._v(" "),t("h3",{attrs:{id:"ibox1-ibox2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibox1-ibox2"}},[e._v("#")]),e._v(" iBox1 / iBox2")]),e._v(" "),t("p",[e._v("Ausprägung der Bridge in Version 6.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("iBox1")])]),e._v(" "),t("th",[t("img",{staticStyle:{width:"85px"},attrs:{src:e.$withBase("/images/adapterconfig-ibox1-alpha.png")}})])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("iBox2")])]),e._v(" "),t("td",[t("img",{staticStyle:{width:"100px"},attrs:{src:e.$withBase("/images/adapterconfig-ibox2-alpha.png")}})])])])]),e._v(" "),t("h3",{attrs:{id:"_4-zonen-8-zonen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-zonen-8-zonen"}},[e._v("#")]),e._v(" 4 Zonen / 8 Zonen")]),e._v(" "),t("p",[e._v("Festlegung der Zonenanzahl für die gewählte Bridge (iBox1 / iBox2). Die alten MiLight Controller FUT035, FUT036\n, FUT037, FUT038 und FUT039 "),t("strong",[e._v("(!!! ohne Upgrade !!!)")]),e._v(" können nur die Zonen eins bis vier bedienen.Die neueren\nController FUT043, FUT044, FUT045 und LS2 können auch die Zonen 5 bis 8 bedienen. Viele Controller unter dem neuen\nBrand MiBoxer sind nicht geeignet, da sie das Tuya Protokoll nutzen. Dies trifft nach meiner Recherche für alle\nController zu, die direkt unter Nutzung der Futlight Cloud via amazon alexa und Google Assistant gesteuert werden\nkönnen (auch FUT035 - FUT039 mit Upgrade) und nicht mehr mit der alten Mi-Light 3.0 App angelernt werden können.")]),e._v(" "),t("h2",{attrs:{id:"zonen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zonen"}},[e._v("#")]),e._v(" ZONEN")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-zonen-leer.png")}}),e._v(" "),t("p",[e._v("Alle Pflichtfelder sind rot markiert. Falsche Eingaben werden soweit möglich abgefangen. Erst wenn alle Eingaben korrekt\nerfolgt sind (keine roten Markierungen mehr), ist eine Speicherung möglich. Dies gilt für alle Eingaben im\nmilight-smart-light Admin.")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-zonen.png")}}),e._v(" "),t("br"),t("br"),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/ibr-admin-object-tree-1.png")}}),e._v(" "),t("p",[e._v("Objektbaum (ohne States) im ioBroker Admin zur dargestellten Zonenkonfiguration.")]),e._v(" "),t("h3",{attrs:{id:"aktiv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aktiv"}},[e._v("#")]),e._v(" aktiv")]),e._v(" "),t("p",[e._v("Erst wenn eine Zone aktiv gesetzt wird erscheint sie auch unter Objekte im ioBroker Admin. Wird umgekehrt eine Zone\ndeaktiviert verschwindet sie aus der Objektbaumdarstellung. Die Einstellungen in der Zonenkonfiguration gehen bei der\nDeaktivierung nicht verloren.")]),e._v(" "),t("h3",{attrs:{id:"zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zone"}},[e._v("#")]),e._v(" Zone")]),e._v(" "),t("p",[e._v("Festlegung der Bridgezone (entspricht der "),t("strong",[e._v("Rolle Channel")]),e._v(" im Objektbaum). Die maximale Zonenanzahl ist abhängig von\ndem gewählten Bridgetyp und ggf. von der Ausprägung (iBox1 / iBox2).")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Ausprägung o. Typ")]),e._v(" "),t("th",[e._v("Zonen")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("legacy")])]),e._v(" "),t("td",[t("strong",[e._v("4 Zonen")])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("iBox1")])]),e._v(" "),t("td",[t("strong",[e._v("4(+1) Zonen o. 8(+1) Zonen")])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("iBox2")])]),e._v(" "),t("td",[t("strong",[e._v("4 Zonen o. 8Zonen")])])])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),t("p",[e._v("(+1) entspricht der Zone der iBox1 eigenen Bulb. Bei der 4 Zonen Auswahl muss dies immer Zone 5 (4 + 1) und bei der 8\nZonen Auswahl muss dies immer Zone 9 (8 + 1) sein.")])]),e._v(" "),t("h3",{attrs:{id:"gruppe-zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gruppe-zone"}},[e._v("#")]),e._v(" Gruppe (Zone)")]),e._v(" "),t("p",[e._v("Festlegung des Gruppennamen (entspricht der "),t("strong",[e._v("Rolle Device")]),e._v(" im Objektbaum) dem die Zone zugeordnet wird. Einer Gruppe\nkönnen mehrere Zonen zugeordnet werden.")]),e._v(" "),t("h3",{attrs:{id:"typ-zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typ-zone"}},[e._v("#")]),e._v(" Typ(Zone)")]),e._v(" "),t("p",[e._v("Hier wird der Zone der Typ zugeordnet.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Bridge")]),e._v(" "),t("th",[e._v("mögliche Zonentypen")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("legacy")])]),e._v(" "),t("td",[t("strong",[e._v("Weiß ; RGB(W)")])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("iBox1")])]),e._v(" "),t("td",[t("strong",[e._v("Weiß ; RGB(W) ; RGB+CCT ;  RGB(8)+CCT ; Bridge (iBox1)")])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("iBox2")])]),e._v(" "),t("td",[t("strong",[e._v("Weiß ; RGB(W) ; RGB+CCT ;  RGB(8)+CCT")])])])])]),e._v(" "),t("h3",{attrs:{id:"farboffset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#farboffset"}},[e._v("#")]),e._v(" Farboffset")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),t("p",[e._v("Der "),t("strong",[e._v("Farboffset")]),e._v(" ist nur für "),t("strong",[e._v("iBox1 / iBox2")]),e._v(" und die Zonentypen "),t("strong",[e._v("RGB+CCT")]),e._v(" und "),t("strong",[e._v("RGB(8)+CCT")]),e._v(" verfügbar.")])]),e._v(" "),t("p",[e._v("Mit dem Farboffset besteht die Möglichkeit einer "),t("strong",[e._v("Farbkorrektur")]),e._v(". Wenn Du feststellst, dass z.B. der Strip bei einem\nreinen Rotwert von #ff0000 nicht wirklich rot leuchtet, sondern z.B. leicht lila oder leicht orange, dann kannst Du\nhier vorsichtig nachregulieren. "),t("b",[e._v("Der default Farboffset ist 0x48")]),e._v(". Ich habe bei meinen Strips damit sehr\ngute Erfahrungen gemacht und konnte so die betroffenen Zonen individuell nachregulieren.")]),e._v(" "),t("h3",{attrs:{id:"name-zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name-zone"}},[e._v("#")]),e._v(" Name(Zone)")]),e._v(" "),t("p",[e._v("Hier wird der Name der Zone festgelegt. Der Name wird im Objektbaum des ioBroker Admin dargestellt und auch für die\nApp genutzt. Der Name findet sich im JSON Objekt der Zone (entspricht dem Channel) wieder.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"common"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Terrasse vorne"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h3",{attrs:{id:"raum-und-gruppe-n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raum-und-gruppe-n"}},[e._v("#")]),e._v(" Raum und Gruppe(n)")]),e._v(" "),t("p",[e._v("Her erfolgt die Zuordung zu Raum und Gruppe(n). Jede Zone kann einem Raum und mehreren Gruppe(n) zugeordnet werden.\nDas Anlegen von Räumen und Gruppen erfolgt im ioBroker Admin unter Aufzählungen. Dabei entsprechen die Funktionen\nden Gruppe(n).")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),t("p",[e._v("Die Zuordnung muß für den "),t("RouterLink",{attrs:{to:"/iot/"}},[e._v("IoT")]),e._v(" Adapter erfolgen. Nur dann wird unter "),t("strong",[e._v("ALEXA-GERÄTE")]),e._v(" ein Gerät automatisch\nerstellt\n, wenn zuvor unter "),t("strong",[e._v("RÄUME UND FUNKKTIONEN")]),e._v(" Raum und Gruppe(n) der Zone aktiviert worden ist.")],1),e._v(" "),t("p",[e._v("Für die App ist eine Raum und/oder Gruppe(n) Zuordnung "),t("strong",[e._v("nicht")]),e._v(" erforderlich.")])]),e._v(" "),t("h2",{attrs:{id:"msl-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msl-app"}},[e._v("#")]),e._v(" MSL APP")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-mslapp.png")}}),e._v(" "),t("p",[e._v("Viele weitere Infos zur App findust Du "),t("RouterLink",{attrs:{to:"/app/"}},[e._v("hier")]),e._v("!")],1),e._v(" "),t("h3",{attrs:{id:"aktivieren-der-milight-smart-light-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aktivieren-der-milight-smart-light-app"}},[e._v("#")]),e._v(" Aktivieren der milight-smart-light App")]),e._v(" "),t("p",[e._v("Erst nach Aktivierung der App kann diese genutzt werden. Hierzu kann im ioBroker Admin unter Instanzen auf das\nIcon "),t("strong",[e._v("Adapter-Webseite öffnen")]),e._v(" einer der angelegten milight-smart-light Instanzen geklickt werden.")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-appstart.png")}}),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WICHTIG")]),e._v(" "),t("p",[e._v("Werden mehrere Instanzen angelegt, muß die App nur einmal aktiviert werden. Eine Mehrfachaktivierung unter dem selben\n"),t("strong",[e._v("Server Port")]),e._v(" ist nicht möglich, da die Instanz während der Aktivierung überprüft, ob der "),t("strong",[e._v("Server Port")]),e._v("\nbereits genutzt wird. Werden unterschiedliche "),t("strong",[e._v("Server Ports")]),e._v(" verwendet, wird in der jeweiligen Instanz ein eigener\nWebserver gestartet. Dies ist normalerweise "),t("strong",[e._v("nicht erforderlich")]),e._v(" und sollte "),t("strong",[e._v("vermieden")]),e._v(" werden.")])]),e._v(" "),t("h3",{attrs:{id:"server-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-port"}},[e._v("#")]),e._v(" Server Port")]),e._v(" "),t("p",[e._v("Der Port unter dem der Webserver des Adapters erreicht wird. Der Server Port ist Bestandteil der URL zum Aufrufen\nder App im Browser. Nach Anlage der Instanz ist der Server Port mit 4400 vorbelegt. Jeder andere erlaubte Port ist\naber ebenfalls möglich.")]),e._v(" "),t("h3",{attrs:{id:"socket-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#socket-port"}},[e._v("#")]),e._v(" Socket Port")]),e._v(" "),t("p",[e._v("Die Kommunikation zwischen der App und dem ioBroker läuft bidiretional und in Echtzeit über einen Socket. Der "),t("strong",[e._v("Socket\nPort")]),e._v(" ist mit "),t("strong",[e._v("8082")]),e._v(" vorbelegt. Dies ist der Standard Port des Web Adapters. Soll der Web Adapter auch für die Socket\nKommunikation genutzt werden, ist zwingend "),t("strong",[e._v("integriert")]),e._v(" auszuwählen. Ist der Port des Web Adapters nicht 8082, so muß\nauch die Vorbelegung des Socket Ports auf den neuen Port des Web Adapters "),t("strong",[e._v("angepasst")]),e._v(" werden.")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/webadapter-socket.png")}}),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),t("p",[e._v("Soll der Web Adapter nicht für die Socket Kommunikation genutzt werden, muss eine Instanz des socket.io Adapters\ninstalliert werden. Der mit der socket.io Instanz verwendete Port muss dann auch als Socket Port für die\nApp konfiguriert werden.")])]),e._v(" "),t("h3",{attrs:{id:"entprellzeit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entprellzeit"}},[e._v("#")]),e._v(" Entprellzeit")]),e._v(" "),t("p",[e._v("Die Entprellzeit gibt die "),t("strong",[e._v("minimale Zeit")]),e._v(" zwischen zwei Befehlssequenzen an die verwendete Bridge an, wenn einer der\nColorpicker der App verwendet wird. Dies ist erforderlich um ein "),t("strong",[e._v('"Nachlaufen"')]),e._v(" der Bulbs oder LED Strips zu vermeiden,\nwenn z.B. ein Slider genutzt wird. Ohne Entprellzeit würde alle paar Millisekunden eine Befehlssequenz abgesetzt werden,\ndie aber nicht sofort von der Bridge verarbeitet werden könnte, da die vorherige Befehlssequenz noch nicht beendet\nwurde. Alle Befehlssequenzen während der Entprellzeit werden daher verworfen. Die "),t("strong",[e._v("optimale Entprellzeit")]),e._v(" ist im\nWesentlichen abhängig von der Geschwindigkeit des WLAN's und des eingesetzten ioBroker Servers (Pi, NAS, NUC, etc.).")]),e._v(" "),t("h3",{attrs:{id:"optimale-entprellzeit-finden"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimale-entprellzeit-finden"}},[e._v("#")]),e._v(" Optimale Entprellzeit finden")]),e._v(" "),t("p",[e._v("Bevor die Entprellzeit optimiert wird, sollte die Bridge Konfiguration der\n"),t("RouterLink",{attrs:{to:"/admin/#befehlswiederholungen"}},[e._v("Befehlswiederholungen")]),e._v(" und der\n"),t("RouterLink",{attrs:{to:"/admin/#pause-zwischen-den-befehlen"}},[e._v("Pause zwischen den Befehlen")]),e._v(" erfolgt sein, da diese beiden Werte erheblichen\nEinfluss auf die Abarbeitungsgeschwindigkeit einer Befehlssequenz haben.")],1),e._v(" "),t("p",[e._v("Der Default Wert für die Entprellzeit ist 200 ms. Um zu entscheiden, ob 200 ms ein optimaler Wert für die\nEntprellzeit ist, sind folgende Schritte  auszuführen.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("To Do's")]),e._v(" "),t("ol",[t("li",[e._v("Instanz in den Debug Modus setzen")]),e._v(" "),t("li",[e._v("App starten")]),e._v(" "),t("li",[e._v("Zone wählen und Wheel Picker aktivieren")]),e._v(" "),t("li",[e._v("Wheel Picker durch schnelle Wischbewegungen (4-5 Sekunden sind ausreichend) nutzen")]),e._v(" "),t("li",[e._v("Log analysieren")]),e._v(" "),t("li",[e._v("Ggf. Schritte 1 - 5 wiederholen")]),e._v(" "),t("li",[e._v("Entprellzeit auf den gefundenen optimalen Wert setzen")]),e._v(" "),t("li",[e._v("Debug Modus nicht vergessen wieder zu deaktivieren!")])])]),e._v(" "),t("p",[e._v("Der nachfolgende Screenshot zeigt das Log für eine Entprellzeit von 200 ms. Dieser Wert kann für die hier genutzte\nHardwarekonstellation als optimal angesehen werden, da keine Befehlssequenz mehr als 200 ms für die Abarbeitung\nbenötigt (rote Umrandungen). Dies bedeutet, dass sich bei schneller Nutzung eines Color Pickers (Wheel oder Slider), die\nFarbe des Leuchtmittels 5 mal in der Sekunde ändert. Das Auge nimmt dies als kontinuierliche Farbänderung wahr und\nnicht als Flackern.")]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-optimale-entprellzeit-1.png")}}),e._v(" "),t("p",[e._v('Im Gegesatz hierzu zeigt der nächste Screenshot das Log für eine Entprellzeit von 120 ms. Hier ist deutlich das\n"Nachlaufen" (rote Umrandung) zu erkennen und die Schritte 1 bis 5 sollten wiederholt werden.')]),e._v(" "),t("img",{staticClass:"my-img",attrs:{src:e.$withBase("/images/adapterconfig-optimale-entprellzeit-2.png")}}),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("HINWEIS")]),e._v(" "),t("p",[e._v("Die "),t("strong",[e._v("Nachlaufzeiten")]),e._v(" im obigen Beispiel sagen nur aus, dass die Entprellzeit zu gering gewählt wurde und sind kein\nVorschlag für eine Neue. Ausgehend von dem Default Wert 200ms ist es sinnvoll sich in kleineren Schritten (z.B. 50\nms) noch oben zu bewegen.")])])])}),[],!1,null,null,null);n.default=i.exports}}]);