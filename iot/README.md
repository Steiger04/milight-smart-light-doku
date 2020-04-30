# IoT - Alexa
Hier erläutere ich kurz was zu tun ist, damit die Leuchtmittel einer Zone über Alexa gesteuert werden können.

## Raum und Gruppe(n)
Wie bereits [hier](/admin/#raum-und-gruppe-n) erläutert, muß für eine funktionierende Alexa Steuerung zwingend eine
Raum und Gruppen Zuordnung erfolgen.

## Beispiel Grillplatz Licht
In der [Zonenkonfiguration](/admin/#zonen) wurde die **Zone 6** wie folgt konfiguriert:

<img :src="$withBase('/images/iot-zone-6.png')" class="my-img">

**Raum** ist also **Grillplatz** und **Gruppe** ist **Licht**!

Ein Alexa Befehl könnte also lauten: **Alexa schalte Grillplatz Licht ein.**

Damit dies funktioniert, muß in der **IoT Instanz** unter **INTELLIGENTE  AUFZÄHLUNGEN** folgende **Konfiguration**
vorgenommen werden:

<img :src="$withBase('/images/iot-intelligente-aufzaehlungen.png')" class="my-img">

Der **Raum Grillplatz** und die **Funktion Licht** (entspricht der Gruppe) müssen aktiviert werden.

Dies führt automatisch zu folgendem Eintrag unter **ALEXA GERÄTE**:

<img :src="$withBase('/images/iot-alexa-geraete.png')" class="my-img">

Damit ist die IoT Konfiguration für Alexa auch schon abgeschlossen!

::: warning HINWEISE
1. Die States **hue** und **saturation** fehlen nicht, sondern werden **nicht** benötigt!

2. Ist der Typ der Zone RGB(W) **entfällt** auch **whiteTemperature**.
 
3. Für den Zonentyp Weiß werden nur die States **onoff**, **brightness** und **whiteTemperature** benötigt. Auch hier
erfolgt die Anlage unter **ALEXA GERÄTE** automatisch.
:::

## Alexa Befehle für die Steuerung der Leuchtmittel
<p><b>Licht ein- oder ausschalten:</b><br>"Alexa, &lt;Licht&gt; ein/aus".<br>"Alexa, mach &lt;Licht&gt; an/aus".
<br>"Alexa, schalte &lt;Licht&gt; ein/aus".<br>"Alexa, &lt;Licht&gt; ein-/ausschalten".<br>"Alexa, &lt;Licht&gt;
an-/ausmachen."</p>
<p><b>Helligkeit auf einen bestimmten Prozentsatz festlegen:</b><br>"Alexa setze &lt;Licht&gt; auf 50 Prozent."
<br>"Alexa, lege &lt;Licht&gt; auf 50% fest."<br>"Alexa, &lt;Licht&gt; 50%."<br>"Alexa, stell &lt;Licht&gt;
auf 50% ein."</p>
<p><b>Licht dimmen:</b><br>"Alexa, &lt;Licht&gt; dunkler."<br>"Alexa, dimme &lt;Licht&gt; um 50 %." <br></p>
<p><b>Helligkeit eines Lichts erhöhen:</b><br>"Alexa, mache &lt;Licht&gt; heller."<br>"Alexa, erhelle &lt;Licht&gt;."
<br>"Alexa, erhöhe &lt;Licht&gt;.<br>"Alexa, &lt;Licht&gt; heller."<br></p>
<p><b>Farbe eines Lichts ändern:</b><br>"Alexa, ändere die Farbe von &lt;Licht&gt; zu grün."<br>"Alexa &lt;Licht&gt;
blau."<br>"Alexa, mache &lt;Licht&gt; grün."<br>"Alexa, schalte &lt;Licht&gt; auf grün."</p>
<p><b>Die Farbtemperatur ändern:</b><br>"Alexa &lt;Licht&gt; &lt;Farbton&gt; "<br>"Alexa, schalte &lt;Licht&gt;
auf &lt;Farbton&gt;."<br>"Alexa, mache &lt;Licht&gt; &lt;Farbton&gt;."</p>
<p><i>Der Farbton kann: warm, warmes weiß, weiß, tageslichtweiß oder, weiches Weiß sein.</i></p>

## Verfügbare Farbnamen
+ Blau
+ Rot
+ Gelb
+ Orange
+ Magenta
+ Gold
+ Silber
+ Purpur
+ Lachs
+ Orange
+ Gelb
+ Grün
+ Türkis
+ Himmelblau
+ Blau
+ Lila
+ Pink
+ Rosa
+ Lavendel

::: tip INFO
Für die Farben Rot, Blau, Grün und Gelb funktionieren zusätzlich Abstufungen, die man z.B. durch den Befehl „Alexa,
mache das Licht blauer“ aktiviert.
:::

