# Einführung
Diese Doku bezieht sich ausschließlich auf die MiLight Produkte, die über die **iBox1**, **iBox2** und die alte **legacy Bridge**
der Firma [Futlight](https://www.futlight.com/), sowie deren zahlreiche OEM-Äquivalente (Rocket LED, Limitless LED Applamp, Easybulb,
s`luce, iLight, iBulb, Kreuzer), gesteuert werden können. Die neuen Produkte von Futlight, die seit kurzem unter dem
Branding MiBoxer erscheinen, werden nicht berücksichtigt.

Hintergrund: die MiBoxer Produkte nutzen das Tuya Protokoll und können nicht wie die älteren MiLight Produkte angesprochen werden.
Zur Zeit gibt es noch keine Open Source API, die zur Einbindung der MiBoxer Produkte genutzt werden kann.

[Warum das so ist kannst Du hier nachlesen  ](https://github.com/bcaro/Miboxer)

## Was man wissen sollte
1. Der milight-smart-light Adapter sorgt immer für konsistente Werte der States hue, saturation, brightness und rgb.
Das bedeutet, dass eine Änderung des rgb State immer auch zu einer Änderung bei mindestens einem der States hue,
saturation und brightness führt. Umgekehrt führt eine Änderung bei hue, saturation oder brightness immer zu einer rgb
State Änderung.

2. rgb=#000000 sorgt für ein Ausschalten des Leuchtmittels. Das bedeutet, dass die States on, off, onoff und
brightness passend gesetzt werden (on=false, off=true, onoff=false, brightness=0).

3. brightness=0 sorgt ebenfalls für ein Ausschalten des Leuchtmittels. Das bedeutet, dass die States on, off, onoff und
rgb passend gesetzt werden (on=false, off=true, onoff=false, rgb=#000000).

4. saturation=0 und brightness!=0 setzt bei den farbigen Leuchtmitteln immer auch whiteMode=true und berüksichtigt
 bei den Typen RGB+CCT und RGB(8)+CCT auch die eingestellte whiteTemperature.
