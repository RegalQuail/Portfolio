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

Hver `div class="tab-body"` er så delt i 2, med `<div class="tab-col-left">` og `<div class="tab-col-right">`,
("col" står for "column") som jeg bruger til at dele siden i 2 lodret i midten. Her er koden for venstre siden:

```html
<div class="tab-col-left">
    <img src="./img/millenium-falcon.gif" alt="my pfp" width="400">
</div>
```

Jeg har valgt at bruge venstre siden for et billede. For at indsætte et billede bruger man et `<img>` tag.
Prikket i starten af linket til mit billede henviser til den folder man befinder sig nu; hvis det var to
prikker, vil det henvise til det parent-folder af projektet. Så her siger jeg at den skal søge på billedet som
befinder sig i den folder vi er lige nu, så gå ind i "img" folder, og så find billedet med navn
"millenium-falcon.gif". `alt` bruges for at vise noget tekst i stedet for billedet hvis den ikke kan findes af
browseren. `width` er en style-element for at vælge størrelsen af billedet i pixels. Det gør jeg for hver billede jeg indsætter.

Så har vi højre siden, som følger denne mønster:

```html
<div class="tab-col-right">
    <h2></h2>
    <p></p>
    <a href="link" target="_blank" class="btn"></a>
</div>
```

Højre siden har så en header med `<h2>`, en afsnit med `<p>` og et link med `<a>` som jeg styler til at være en
knap. `target="_blank"` gør at det åbner en ny fane i browseren når man trykker på linket.
Nogle elementer der bliver brugt i `<p></p>`:
`<strong></strong>`, som gør teksten fed;
`&lt;`, som laver tegnet "<";
`&gt;`, som laver tegnet ">".

Knappen er lidt anderledes for den første side, da jeg havde en idé for en knap, som jeg vil gå mere i detalje med senere.

Den process bliver gentaget flere gange, som gør op hele hjemmesiden.

### CSS

### JavaScript
