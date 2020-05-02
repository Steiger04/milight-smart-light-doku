# Motivation
Da das Milight-System nicht rückkanalfähig ist, gehen Befehle die direkt über die Milight-Fernbedienungen, oder die
Milight eigene App ausgeführt werden für den ioBroker verloren, d.h. Änderungen werden einfach nicht erkannt und
auch nicht in den grafischen Anzeige- und Steuerungssystemen (VIS, etc.) nachvollzogen.
Ich wollte daher eine App entwickeln, die möglichst eine handlebare Alternative zu den gängigen Milight
eigenen Lösungen darstellt und alle Stateänderungen sofort überall verfügbar macht.

Mit der App besteht die Möglichkeit die Zonen aller im ioBroker angelegten Bridges zu steuern. Das Bedienkonzept ist
dabei vielleicht etwas unkonventionell :smile:, da ich bewusst auf die sonst üblichen Side- und Navbars
verzichtet habe, um eine schnelle Einhandbedienung zu realisieren.

Probiert es halt einfach aus!

Wichtig war mir auch noch ein gutes Antwort-/Zeitverhaltung (möglichst vergleichbar zur Originalfernbedienung) bei Nutzung
der verschiedenen Slider, ohne ein [Nachlaufen](/admin/#entprellzeit) der Bulbs oder LED-Strips.

Die Anzahl der Messages, die zur Steuerung über den Socket gehen sind minimiert,d.h. es gibt keine doppelten
"überflüssigen" Schaltbefehle in beide Richtungen.

::: danger WAS FEHLT
Noch nicht implementiert ist die Nutzung der verschiedenen Modi je Zone und das Anlernen der Bulbs und
Controller. Insbesondere für das Anlernen müssen noch die bekannten Milight-Apps verwendet werden.

Beide Punkte sind auf der ToDo Liste und werden noch implementiert! 
:::

## Installation
Grundsätzlich ist keine spezielle Installation erforderlich, sondern nur der obligatorische
[Aufruf](/admin/#aktivieren-der-milight-smart-light-app) der Seite im Browser.
::: warning HINWEIS
Als Browser bitte unbedingt Google Chrome verwenden!
:::
::: tip EMPFEHLUNG
Die App ist als PWA programmiert ([PWA = Progressive Web App](https://de.wikipedia.org/wiki/Progressive_Web_App)),
d.h. neben optimiertem Caching kann die App unter Android oder iOS wie eine native App genutzt werden.
:::

### Nutzung als native App
Um die App wie eine native App zu nutzen, sind folgende Schritte durchzuführen:
+ Aufruf der App im Chrome.
+ Im Chrome Hauptmenü den Punkt "Zum Startbildschirm hinzufügen" aufrufen.
+ In dem dann erscheinenden Dialogfeld entweder den vorgeschlagenen Namen mslfe belassen, oder durch einen eigenen
Text ersetzen. Danach auf "Hinzufügen" klicken. Dann den Browser schließen und die App direkt über das
Icon starten.

## Bridge
Mit Start der App wird immer die erste Bridge/Instanz des milight-smart-light Adapters angezeigt (im Bild ist es
schon die Dritte). Um von einer Bridge zur Nächsten zu kommen, muss nur über den Screen gewischt werden. Wischen
nach links würde zu milight-smart-light.3 führen und wischen nach rechts zu milight-smart-light.1. Als
Wischfläche würde sich im Beispiel der Bereich (1) oder (5) anbieten. Grundsätzlich kann aber jeder freie
Bereich des Screens genutzt werden. Einfach ausprobieren! 

::: tip INFO
Die Anordnung der Gruppen ist alphabetisch, ebenso die Anordnung der Zonen innerhalb der Gruppen. Die Namen der
Gruppen und Zonen entsprechen den Eingaben der [Admin Konfiguration](/admin/#_4-zonen-8-zonen).
:::

|<img style="width: 250px;" class="my-img" :src="$withBase('/images/app/app-bridge-1.png')">|<img style="width: 250px;" class="my-img" :src="$withBase('/images/app/app-bridge-2.png')">|
|-|-|

### (1) Infobereich
Der Infobereich gibt Auskunft über:
- die aktuelle Bridge / Instanz
- den Bridgetyp
- die IP der Bridge
- die Status CONNECTED und ALIVE

#### Funktionen im Infobereich
1. Klicken auf das Bridge Symbol schaltet in den Fullscreen-Modus und erneutes Klicken wieder zurück.
2. Klicken auf das Kreuzsymbol schaltet den Infobereich aus und der Bereich zur Darstellung der Gruppen vergrößert sich
automatisch. Es erscheint ein Info-Button im Bereich (5). Wird auf den Info-Butten geklickt, wird der Infobereich wieder
dargestellt.

   <img style="width: 100px;" class="my-img" :src="$withBase('/images/app/app-bridge-ohne-info.png')">   

### (2) Gruppen Slider
Mit dem Gruppenslider werden alle Zonen innerhalb der Gruppe an- (beide Lampen grün) oder ausgeschaltet (beide Lampen
rot).

<img style="height: 45px;" :src="$withBase('/images/app/app-bridge-group-all-on.png')">

### (3) Zonen Slider
Mit dem Zonenslider wird die jeweilige Zone an- oder ausgeschaltet.

<img style="height: 45px;" :src="$withBase('/images/app/app-bridge-zone-on.png')">

Ist die Zone angeschaltet, wird die Lampe grün dargestellt und das Farbquadrat zeigt die Farbe der Zone an. Wenn die
Farbe weiss ist, erscheint anstatt des Farbquadrates ein Sonnensymbol.

<img style="height: 45px;" :src="$withBase('/images/app/app-bridge-zone-sonne.png')">

Durch Klicken auf das Farbquadrat oder Sonnensymbol, kann sowohl im an- oder ausgeschalteten Zustand der Night- oder
Day-Modus ausgewählt werden.

<img style="height: 45px;" :src="$withBase('/images/app/app-bridge-zone-nightday.png')">

Day-Modus bedeutet, dass weisses Licht in der Helligkeit der vorherigen Farbe und bei RGB+CCT / RGB(8)+CCT Typen 
zusätzlich mit der aktuellen Farbtemperatur dargestellt wird.

Im Night-Modus werden die Zonen maximal gedimmt und es erscheint ein Mondsymbol. Die Zone beibt dabei ausgeschaltet
 (rote Lampe im Slider).
 
<img style="height: 45px;" :src="$withBase('/images/app/app-bridge-zone-night.png')">
 
### (4) Zonenwahl
Über die Zonenwahl gelangt man zu den Farbauswahlmöglichkeiten der jeweiligen Zone.

### (5) ON/OFF Bridgezonen
Der grüne Button schaltet alle Zonen aller Gruppen nacheinader an, der rote Button schaltet sie aus.

## Zone
Die gewünschte Zone wird über die [Zohnenwahl](/app/#_4-zonenwahl) der aktiven Bridge erreicht. Abhängig von dem Typ der
Zone stehen dann nur die verfügbaren Picker zur Auswahl. Die Picker erreicht man durch Klicken auf das Farbquadraht oder
Sonnensymbol des Zonensliders am unteren Screen Rand.

<img class="my-img" style="width: 250px;" :src="$withBase('/images/app/app-zone-picker-selection.png')">

Durch Klicken auf eines der Symbole wird der Picker ausgewählt.

:::tip INFO
Eine Auswahl ist nur dann möglich, wenn die Zone aktiv ist (grüne Lampe im Zonen Slider)!
:::

### Picker und Slider
<table table-layout="fixed" width="125%">
    <thead>
        <tr>
            <th>(1) WHEEL</th>
            <th>(2) SWATCHES</th>
            <th>(3) SLIDER</th>
            <th>(4) WHITE AND TEMP</th>
            <th>(5) WHITE</th>
            <th>(6) ONLY WHITE</th>
        </tr>
    </thead>  
    <tbody>        
        <tr align="center" valign="top">
        <td><img class="my-img" :src="$withBase('/images/app/app-zone-wheel.png')"></td>
        <td><img class="my-img" :src="$withBase('/images/app/app-zone-swatches.png')"></td>
        <td><img class="my-img" :src="$withBase('/images/app/app-zone-slider.png')"></td>        
        <td><img class="my-img" :src="$withBase('/images/app/app-zone-white-temp.png')"></td>
        <td><img class="my-img" :src="$withBase('/images/app/app-zone-white.png')"></td>
        <td><img class="my-img" :src="$withBase('/images/app/app-zone-white-buttons.png')"></td>
        </tr>
        <tr>            
            <td colspan="6" align="center"><b>Typ(Zone)</b></td>            
        </tr>
        <tr valign="top">
            <td>RGB+CCT, RGB(8)+CCT, RGB(W), Bridge(iBox1)</td>    
            <td>RGB+CCT, RGB(8)+CCT, RGB(W), Bridge(iBox1)</td>
            <td>RGB+CCT, RGB(8)+CCT, RGB(W), Bridge(iBox1)</td>
            <td>RGB+CCT, RGB(8)+CCT</td>
            <td>RGB(W), Bridge(iBox1)</td>
            <td>WEIß</td>
        </tr>        
    </tbody>  
</table>

:::warning HINWEIS
Für alle Picker und Slider gilt, dass im ausgeschalteten Zustand (Lampensymbol im Zonenslider ist rot), auch ohne
 Aktivierung durch den Zonenslider, durch einfache Nutzung des Pickers oder Sliders, das Leuchtmittel aktiviert wird.
 
Ausnahmen: 
1. Beim Slider (3) muss zur Aktivierung des Leuchtmittels aus dem Auszustand eines der Farbrechtecke angeklickt
werden, erst danach reagiert der Farbslider.
2. Bei den Only White Buttons (6) muss der MAX Button zur Aktivierung aus dem Auszustand angeklickt werden, erst
danach reagiern die anderen Buttons.   
:::

#### WHEEL
Der Wheel-Picker ermöglicht die Auswahl aller Farben inklusive schwarz und weiß. Der äußere Kreis ändert den HUE-Wert
der Farbe und über das innere Quadrat wid die Saturation und Brightness der Farbe festgelegt.

Wenn die Farbe Weiß ausgewählt wird, erscheint im Zonenslider das Sonnensymbol und für die Zonentypen RGB+CCT,
RGB(8)+CCT und RGB(W), wird in den White Modus des Leuchtmittels / des Controllers umgeschaltet. Bewegt man sich am
rechten äußeren Rand des Quadrates nach unten, wird das Weiß dunkeler, d.h. das Leuchtmittel wird gedimmt.
Dies wird durch ein immer grauer werdendes Sonnensymbol angezeigt.

Ist die Farbe Schwarz erreicht, schaltet das Leuchtmittel aus und das Lampensymbol im Zonenslider wird auf rot
gesetzt. Sobald eine neue Farbe gesetzt wird, schaltet das Leuchtmittel wieder ein.

#### SWATCHES
Der Swatches-Picker bildet viele Farben aus dem [Material Design Color System](https://material.io/design/color/#)
ab. Ich habe den Picker implementiert, weil sich die Farben auch für Leuchtmittel sehr gut verwenden lassen.
 
Die unterschiedlichen Farbpaletten erreicht man durch eine Wischbewegung nach links oder rechts über die aktuelle
Farbpalette.

Insgesamt stehen 4 Farbpaletten mit jeweils 45 Farben zur Auswahl!

#### SLIDER
Der Slider-Picker ermöglicht die Änderung des HUE-Wertes der Farbe über den Slider und stellt im darunter liegenden
Bereich jeweils 16 Farbtöne mit dem gewählten HUE-Wert und abgestuften Saturation- und Brightness-Werten dar.

#### WHITE AND TEMPERATURE SLIDER / WHITE SLIDER
Die Slider werden im [Day Modus](/app/#_3-zonen-slider) automatisch ausgewählt und stehen dann für die Zone sofort
zur Verfügung. Möchte man aus einer Farbwahl heraus die Slider nutzen, muss zuerst über den Wheel-Picker ein Weißton
ausgewählt werden. Danach kann dann über das Sonnensymbol und klicken auf das Daymodus-Icon der Slider
aktiviert werden.

#### ONLY WHITE BUTTONS
Die Only White-Buttons stehen nur für den Zonentyp Weiß zur Verfügung und dienen der Steuerung von CCT-Leuchtmitteln.
Hält man die Buttons länger gedrückt, wird die jeweilge Befehlsfolge in gleichmäßigen Abständen zur Bridge
geschickt und das Leuchtmittel kontinuierlich in den jeweilgen Bereich geschaltet (kaltes Licht/warmes Licht oder
heller/dunkeler). Dies wird grafisch durch sich nach aussen bewegende Kreise um den jeweils gedrückten Button
verdeutlicht.
