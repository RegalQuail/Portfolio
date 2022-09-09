# Portfolio

My Portfolio, a class project

## Projekt Beskrivelse

Man skal selv lave en portfolie, hvor man indrager de nye lærte skills om HTML
og CSS.

### Mine filer

Jeg har en HTML, CSS og JS fil, en markdown fil, plus en folder for mine billeder.

```text
img
index.html
index.js
style.css
```

### HTML

`<!DOCTYPE html>` for at specificere at det er en html-fil til browseren.
`<meta charset="UTF-8">` for at specificere hvad nogle typer karaktere/bogstaver man bruger.  
Så skal mine andrer filer linkes til HTML-filen:

```html
<link rel="stylesheet" href="style.css">
<script src="index.js" defer></script>
```

`defer` betyder at JS-filen loader efter resten af siden har loadet, det er en forsikring så alt
fungerer korrekt.  

Hel min HTML er indenfor den `<section class="tab">` element, mens det hele foregår i `<div class="tab-container">` elementet. Tænk på det som en store boks der indeholder alle elementerne.

Først har vi:

```html
<ul class="tab-nav">
    <li class="active">Home</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Jeg bruger en "unordered list" element med class-navn "tab-nav", for at kunde nemt genskue den. Det er den liste der repræsentere min "navigation bar" på toppen af mit hjemmeside. Så har jeg sættet en `class="active"`
til den første list element for at kunne bestemme hvad for en man lander på når man først kommer på siden. Det handler jeg med min JS, som kommer længere ned.

Derefter kan man se at koden er indelt i 4 `div class="tab-body"`, 1 for hver list-element fra før. Den første har "active" ud over, for samme grund som nævnt før.

Hver `div class="tab-body"` er så delt i 2, med `<div class="tab-col-left">` og `<div class="tab-col-right">`.
### CSS


### JavaScript

