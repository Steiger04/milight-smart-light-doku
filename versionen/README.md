# Versionen
Hier gibt es Kurzhinweise zu den neunen Versionen.

## v1.0.5

### Was ist neu
+ Es wir nicht automatisch ein smartName für effectBrightness im iot-Adapter erstellt.

### Update auf v1.0.5
+ Konfiguration der Instanzen speichern (zur Sicherheit)
+ Adapter v1.0.5 installieren. Alle Instanzen bleiben erhalten.

## v1.0.1

### Was ist neu
Das Admin-UI wurde komplett auf Vue und Quasar umgestellt. Funktional hat sich nichts geändert.

### Update auf v1.0.1
+ Konfiguration der Instanzen speichern
+ Instanz deaktivieren
+ Instanz löschen
+ Adapter löschen
+ Adapter v1.0.1 installieren
+ Instanz neu anlegen
+ Konfiguration importieren und speichern -> Instanz startet neu -> alle states sind wieder vorhanden

## v0.6.0

### Was ist neu
Ich habe mir das Thema Effekte einmal angeschaut und das Ganze etwas erweitert.
Es gibt jetzt für iBox1 / iBox2 (Zonentyp: bridge, rgbw, fullColor, fullColor8Zone) für das Thema Effekte drei neue
und einen umbenannten State.

+ neu: effectOn, effectOff, effectOnOff
+ umbenannt: onlyBrightness nach effectBrightness

#### Funktionsweise

+ effectOn=true: schaltet den aktuellen Effekt mit der aktuellen effectBrightness ein, d.h.
    + effectOn=true, effectOff=false, effectOnOff=true, on=false, off=true, onoff=false, brightness=0, rgb=#000000

+ effectOff=true: schaltet den aktuellen Effekt mit der aktuellen effectBrightness aus, d.h.
    + effectOn=false, effectOff=true, effectOnOff=false, on=false, off=true, onoff=false, brightness=0, rgb=#000000

+ effectMode=1..9: Schaltet den gewählten effectMode mit der aktuellen effectBrightness ein, d.h.
    + effectOn=true, effectOff=false, effectOnOff=true, on=false, off=true, onoff=false, brightness=0, rgb=#000000

Der Effektmodus kann jetzt völlig unabhängig von der eigentlichen Farbwahl ausgewählt werden, d.h. wenn ein
Effektmodus aktiv ist, kann durch wahl von on=true direkt die alte Farbe wieder aktiviert werden und umgekehrt
(alle States die irgendwie gesetzt werden müssen, also effectOn, effectOff, effectOnOff, on, off, onoff, brightness,
saturation, hue, rgb behalten immer ihre richtigen Abhängigkeiten). Diese Zusammenhänge lassen sich bei geöffnetem
Objektbaum gut nachvollziehen.

### Update auf v0.6.0
Folgende Vorgehensweise beachten:

1) Adapter v0.6.0 installieren. Die alten Instanzen müssen nicht gelöscht werden, die zuvor angelegten Zonen bleiben
also erhalten.
2) Dann im Adapter-Admin unter  dem Reiter [ZONEN](../admin/#zonen) 
    + alle Zonen einmal deaktivieren, dann
    + speichern, dann
    + alle Zonen wieder aktivieren, dann
    + noch einmal speichern 
