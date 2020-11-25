# Konfiguration
Voraussetzung für die Konfiguration ist eine vorhandene Instanz des miligt-smart-light Adapters. Das Hinzufügen einer
Instanz erfolgt standardmäßig im ioBroker Admin und sollte spätestens jetzt geschehen. Alle Einstellungen
werden über die Reiter [BRIDGE](./#bridge), [ZONEN](./#zonen) und [MSL APP](./#msl-app) vorgenommen.

## BRIDGE
<img :src="$withBase('/images/adapterconfig-bridge.png')" class="my-img">

### Typ
Der Typ legt den Typ der Bridge fest. Mögliche Werte sind Legacy und Version 6. Legacy ist der alte Typ,
der durch die Version 6 abgelöst wurde.

### IP
IP der Bridge. Über den blauen Button wird automatisch nach Bridges im Netzsegment des Adapters gesucht. Das Ergebnis
wird in einer Auswahl angezeigt.

<img :src="$withBase('/images/adapterconfig-ipauswahl.png')" class="my-img">

### Port
Port der Bridge. Für legacy muss Port 8899 und für Version 6 Port 5987 zwingend eingetragen werden! Durch die
Vorauswahl des Typs wird der Port automatisch richtig vorbelegt.

### Befehlswiederholungen
Ein Wert größer 1 kann dann sinnvoll sein, wenn Strip-Controller oder LED-Bulbs nicht wie gewünscht auf State-Änderungen
(rgb, brightness, etc.) der Instanz reagieren. Häufig deutet dies auf eine schlechte WLAN-Verbindung
zwischen Bridge und Accesspoint hin. Wertänderungen sollten immer nur in einser Schritten probiert werden.

### Pause zwischen den Befehlen
Eine Erhöhung des Wertes (ms) ist immer dann sinnvoll, wenn eine Stateänderung nicht zu dem gewünschten Ergebnis führt.
In Kombination mit der Befehlswiederholung läßt sich oftmals ein positiver Effekt erzielen.

::: tip TIPP
Bevor der Wert für Befehlswiederholungen erhöht wird, immer erst eine größere Pause wählen. Hier können oft wenige
Millisekunden (5ms - 10ms) schon etwas bewirken.
:::

### iBox1 / iBox2
Ausprägung der Bridge in Version 6.
|iBox1|<img :src="$withBase('/images/adapterconfig-ibox1-alpha.png')" style="width:85px;">|
|-|-|
|iBox2|<img :src="$withBase('/images/adapterconfig-ibox2-alpha.png')" style="width:100px;">|

### 4 Zonen / 8 Zonen
Festlegung der Zonenanzahl für die gewählte Bridge (iBox1 / iBox2). Die alten MiLight-Controller FUT035, FUT036
, FUT037, FUT038 und FUT039 (!!! ohne Upgrade !!!) können nur die Zonen eins bis vier bedienen. Die neueren
Controller FUT043, FUT044, FUT045 und LS2 können auch die Zonen 5 bis 8 bedienen. Viele Controller unter dem neuen
Brand MiBoxer sind nicht geeignet, da sie das Tuya-Protokoll nutzen. Dies trifft nach meiner Recherche für alle
Controller zu, die direkt unter Nutzung der Futlight-Cloud via amazon alexa und Google Assistant gesteuert werden
können (auch FUT035 - FUT039 mit Upgrade) und nicht mehr mit der alten MiLight 3.0 App angelernt werden können.

## ZONEN
<img :src="$withBase('/images/adapterconfig-zonen-leer.png')" class="my-img">

Alle Pflichtfelder sind rot markiert. Falsche Eingaben werden so weit es geht abgefangen. Erst wenn alle
Eingaben korrekt sind (keine roten Markierungen mehr), ist eine Speicherung möglich. Dies gilt für alle Eingaben
im milight-smart-light Admin!

<img :src="$withBase('/images/adapterconfig-zonen-1.png')" class="my-img">
<br/><br/>
<img :src="$withBase('/images/adapterconfig-zonen-2.png')" class="my-img">
<br/><br/>
<img :src="$withBase('/images/ibr-admin-object-tree-1.png')" class="my-img">

Objektbaum (ohne States) im ioBroker-Admin zur dargestellten Zonenkonfiguration.


### aktiv
Erst wenn eine Zone aktiv gesetzt wird, erscheint sie auch unter Objekte im ioBroker-Admin. Wird umgekehrt eine Zone
deaktiviert, verschwindet sie aus der Objektbaumdarstellung. Die Einstellungen in der Zonenkonfiguration gehen bei der
Deaktivierung nicht verloren!

### Zone
Festlegung der Bridgezone (entspricht der Rolle Channel im Objektbaum). Die maximale Zonenanzahl ist abhängig von
dem gewählten Bridgetyp und ggf. von der Ausprägung (iBox1 / iBox2). 
|Ausprägung o. Typ|Zonen|
|-------|---|
|legacy|4 Zonen|
|iBox1|4(+1) Zonen oder 8(+1) Zonen|
|iBox2|4 Zonen oder 8 Zonen|

::: warning HINWEIS
(+1) entspricht der Zone der iBox1 eigenen Bulb. Bei der 4 Zonen-Auswahl muss dies immer Zone 5 (4 + 1) und bei
der 8 Zonen-Auswahl muss dies immer Zone 9 (8 + 1) sein.
:::

### Gruppe (Zone)
Festlegung des Gruppennamen (entspricht der Rolle Device im Objektbaum) dem die Zone zugeordnet wird. Einer Gruppe
können mehrere Zonen zugeordnet werden.

### Typ(Zone)
Hier wird der Zone der Typ zugeordnet.

|Bridge|mögliche Zonentypen|
|-------|---|
|legacy|Weiß ; RGB(W)|
|iBox1|Weiß ; RGB(W) ; RGB+CCT ;  RGB(8)+CCT ; Bridge (iBox1)|
|iBox2|Weiß ; RGB(W) ; RGB+CCT ;  RGB(8)+CCT|

### Farboffset
::: warning HINWEIS
Der Farboffset ist nur für iBox1 / iBox2 und die Zonentypen RGB+CCT und RGB(8)+CCT verfügbar.
:::
Mit dem Farboffset besteht die Möglichkeit einer Farbkorrektur. Wenn Du feststellst, dass z.B. der Strip bei einem
reinen Rotwert (#ff0000) nicht wirklich rot leuchtet, sondern z.B. leicht lila oder leicht orange, dann kannst Du
hier vorsichtig nachregulieren. <b>Der default Farboffset ist 0x48</b>. Ich habe bei meinen Strips mit der Nachregulierung
sehr gute Erfahrungen gemacht und konnte so die betroffenen Zonen individuell optimieren.

### Name(Zone)
Hier wird der Name der Zone festgelegt. Der Name wird im Objektbaum des ioBroker-Admin dargestellt und auch für die
App genutzt. Der Name findet sich im JSON-Objekt der Zone (entspricht dem Channel) wieder.
``` js
{
    "common": {
        "name": "Terrasse vorne",
        // ...
    }
}
```

### Raum und Gruppe(n)
Her erfolgt die Zuordung zu Raum und Gruppe(n). Jede Zone kann ein Raum und mehrere Gruppen zugeordnet werden.
Das Anlegen von Räumen und Gruppen erfolgt im ioBroker-Admin unter Aufzählungen. Dabei entsprechen die Funktionen
den Gruppe(n).
::: warning HINWEIS
Die Zuordnung muss für den [IoT](/iot/) Adapter erfolgen. Nur dann wird unter ALEXA-GERÄTE ein Gerät automatisch
erstellt, wenn zuvor unter RÄUME UND FUNKKTIONEN Raum und Gruppe(n) der Zone aktiviert worden ist.

Für die App ist eine Raum- und/oder Gruppe(n)-Zuordnung nicht erforderlich.
:::

## MSL APP
<img :src="$withBase('/images/adapterconfig-mslapp.png')" class="my-img">

Viele weitere Infos zur App findust Du [hier](/app/)!

### Aktivieren der milight-smart-light App
Erst nach Aktivierung der App kann diese genutzt werden. Zum Aufrufen der Seite, kann im ioBroker-Admin unter
Instanzen auf das Icon Adapter-Webseite öffnen, einer der angelegten milight-smart-light Instanzen,
geklickt werden.
 
<img :src="$withBase('/images/adapterconfig-appstart.png')" class="my-img">

::: danger WICHTIG
Werden mehrere Instanzen angelegt, muss die App nur einmal aktiviert werden. Eine Mehrfachaktivierung unter
dem selben Server-Port ist nicht möglich, da die Instanz während der Aktivierung überprüft, ob der Server-Port
bereits genutzt wird. Werden unterschiedliche Server-Ports verwendet, wird in der jeweiligen Instanz ein eigener
Webserver gestartet. Dies ist normalerweise nicht erforderlich und sollte vermieden werden. 
:::

### Server Port
Der Port unter dem der Webserver des Adapters erreicht wird. Der Server-Port ist Bestandteil der URL, über die die
App im Browser aufgerufen wird. Nach Anlage der Instanz ist der Server-Port mit 4400 vorbelegt. Jeder andere erlaubte
Port ist aber ebenfalls möglich.

### Socket Port
Die Kommunikation zwischen der App und dem ioBroker läuft bidiretional und in Echtzeit über einen Socket.
Der Socket-Port ist mit 8082 vorbelegt. Dies ist der Standard-Port des Web-Adapters. Soll der Web-Adapter
auch für die Socket-Kommunikation genutzt werden, ist zwingend integriert auszuwählen. Ist der Port des Web-Adapters
nicht 8082, so muss die Vorbelegung des Socket-Ports auf den neuen Port des Web-Adapters angepasst werden.

<img :src="$withBase('/images/webadapter-socket.png')" class="my-img">

::: warning HINWEIS
Soll der Web-Adapter nicht für die Socket-Kommunikation genutzt werden, muss eine Instanz des socket.io-Adapters
installiert werden. Der mit der socket.io-Instanz verwendete Port muss dann auch als Socket-Port für die
App konfiguriert werden.
::: 

### Entprellzeit
Die Entprellzeit gibt die minimale Zeit zwischen zwei Befehlssequenzen an die verwendete Bridge an, wenn einer der
Colorpicker der App verwendet wird. Dies ist erforderlich um ein "Nachlaufen" der Bulbs oder LED-Strips zu vermeiden,
wenn z.B. ein Slider genutzt wird. Ohne Entprellzeit würde alle paar Millisekunden eine Befehlssequenz abgesetzt werden,
die aber nicht sofort von der Bridge verarbeitet werden könnte, da die vorherige Befehlssequenz noch nicht beendet
wurde. Alle Befehlssequenzen während der Entprellzeit werden daher verworfen! Die optimale Entprellzeit ist im
Wesentlichen abhängig von der Geschwindigkeit des WLAN und des eingesetzten ioBroker-Servers (Pi, NAS, NUC, etc.).

### Optimale Entprellzeit finden
Bevor die Entprellzeit optimiert wird, sollte die Bridge-Konfiguration der
[Befehlswiederholungen](/admin/#befehlswiederholungen) und der
[Pause zwischen den Befehlen](/admin/#pause-zwischen-den-befehlen) erfolgt sein, da diese beiden Werte erheblichen
Einfluss auf die Abarbeitungsgeschwindigkeit einer Befehlssequenz haben.

Der Default Wert für die Entprellzeit ist 200ms. Um zu entscheiden, ob 200ms ein optimaler Wert für die
Entprellzeit ist, sind folgende Schritte auszuführen.

::: tip To Do's
1. Instanz in den Debug Modus setzen
2. App starten
3. Zone wählen und Wheel-Picker aktivieren
4. Wheel-Picker durch schnelle Wischbewegungen (4-5 Sekunden sind ausreichend) nutzen
5. Log analysieren
6. Ggf. Schritte 1 - 5 wiederholen
7. Entprellzeit auf den gefundenen optimalen Wert setzen
8. Debug-Modus nicht vergessen wieder zu deaktivieren!
:::
 
Der nachfolgende Screenshot zeigt das Log für eine Entprellzeit von 200ms. Dieser Wert kann für die hier genutzte
Hardwarekonstellation als optimal angesehen werden, da keine Befehlssequenz mehr als 200ms für die Abarbeitung
benötigte (rote Umrandungen). Dies bedeutet, dass sich bei schneller Nutzung eines Color-Pickers (Wheel oder Slider),
die Farbe des Leuchtmittels 5 mal in der Sekunde ändert. Das Auge nimmt dies als kontinuierliche Farbänderung wahr und
nicht als Flackern. 

<img :src="$withBase('/images/adapterconfig-optimale-entprellzeit-1.png')" class="my-img">

Im Gegesatz hierzu zeigt der nächste Screenshot das Log für eine Entprellzeit von 120ms. Hier ist deutlich das
"Nachlaufen" (rote Umrandung) zu erkennen und die Schritte 1 bis 5 sollten wiederholt werden.

<img :src="$withBase('/images/adapterconfig-optimale-entprellzeit-2.png')" class="my-img">

::: warning HINWEIS
Die Nachlaufzeiten im obigen Beispiel sagen nur aus, dass die Entprellzeit zu gering gewählt wurde und sind kein
Vorschlag für eine Neue. Ausgehend von dem Default Wert 200ms ist es sinnvoll, sich in kleineren Schritten
(z.B. 10ms-50ms) noch oben vorzutasten. 
:::
