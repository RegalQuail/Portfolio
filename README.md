# Portfolio

My Portfolio, a class project

## Projekt Beskrivelse

Man skal selv lave en portfolie, hvor man indrager de nye lærte skills om HTML, CSS og JavaScript, og forklarer om de forskellige vi har væreet igennem.

### Webteknologier, making a website

Files ("hjemmeside" folder):

```text
index.html
style.css
index.js
```

We can use the `<link>` and `<script>` tags for the CSS and JS files respectively to connect them
to the HTML file:

```html
<link rel="stylesheet" href="style.css">
<script src="index.js" defer></script>
```

The `defer` keyword makes the JS load after the rest of the page has loaded.

We can also just write CSS and JS code inside the HTML file without the need for any additional  
file by writing inside `<style>` and `<script>` tags respectively, all in the header of the HTML file:

```html
<head>
    <style>Some CSS</style>
    <script>Some JS</script>
</head>
```

We can use the `<a>` tag to insert links:
`<a href="http://google.com">This is a link to google.com</a>`

Or an `<img>` tag to insert images:
`<img src="myImage.png" width="100" alt="This is an image">`

The unordered list tag `<ul>` creates a list with no specific order:

```html
<ul>
    <li>This is a list item</li>
    <li>This is a list item</li>
    <li>This is a list item</li>
</ul>
```

Contrary to the ordered list `<ol>`:

```html
<ol>
    <li>This</li>
    <li>is</li>
    <li>an</li>
    <li>ordered</li>
    <li>list</li>
</ol>
```

CSS stands for Cascading Style Sheet. It can be written inside the HTML file, or in its own file. Here, our CSS file is `style.css`. As said before, the CSS file needs to be linked to the HTML file via the `<link>` tag inside the `<head>` tag, as so:

`<link rel="stylesheet" href="style.css">`

To style a component:  

```css
h1 {
    font-family: sans-serif;
    color: red;
    text-aligned: center;
}
```

Tags can also have specifications/identifications, so you can style them individually:  

```html
<p id="para1"></p>
<p id="para2"></p>
```

Global styling (every `<p>` tag):  

```css
p {
    font-family: sans-serif;
    text-align: center;
}
```

Individual styling using their ID:  

```css
#para1 {
    color: red;
    font-size: 24px;
}

#para2 {
    color: blue;
    font-size: 18px;
}
```

Just like IDs, we can use classes:  

```html
<div class="red"></div>
<div class="blue"></div>
```

Their selector is a ".":  

```css
.red {
    color: red;
}

.blue {
    color: blue;
}
```

### Min Portfolio

Jeg har en hoved HTML, CSS og JS fil, en markdown fil, plus en mappe for mine billeder og hver projekt.

```text
Astro Pi
hjemmeside
img
IT Sikkerhed
Quiz
index.html
index.js
style.css
README.md
```

### HTML

`<!DOCTYPE html>` for at specificere at det er en html-fil til browseren.
`<meta charset="UTF-8">` for at specificere hvad nogle typer karaktere/bogstaver man bruger.  
Så skal mine andrer filer linkes til HTML-filen:

```html
<link rel="stylesheet" href="style.css">
<script src="index.js" defer></script>
```

`defer` betyder at JS-filen loader efter resten af siden har loadet, det er en forsikring så alt fungerer korrekt.  

Hel min HTML er indenfor den `<section class="tab">` element, mens det hele foregår i `<div class="tab-container">` elementet. Tænk på det som en store boks der indeholder alle elementerne.

Først har vi:

```html
<ul class="tab-nav">
    <li class="active">Home</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>Projekter</li>
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

Jeg bruger en color-pallet der har en lille moderne udsyn, med shades af grå og blå, som passer meget godt med billederne jeg har valgt at bruge.

For min navigation-bar på toppen, den har jeg stylet til at være en store boks med de forskellig `<li>` elementer. Linjen under hver knap har jeg gjort ved at bruge `border-bottom`. Så bruger jeg `li.active` til at style den knap som er active, altså den man har trykket på; de skifter farve og bliver større ved bruge af `transform: scale()`.

Jeg har brugt `@keyframes` for at lave min egen animation. Her er det en animation for når man skifter fra en side til en anden. Siden flytter ind i skærmen fra højre med `position: translateX(-20px)`, som gøre at elementet bevæger sig på x-aksen af 20 pixels; også dukker den op ved brug af `opacity`, hvor den går fra usynlig til synlig.

Så for min knap på første siden, "Home", er det lidt det samme princip som animationen fra side til side. Jeg flytter og gøre usynlig det ene dele af boksen, mens den anden gøres synlig, ved brug af `:hover` selectoren. Det er en speciel CSS selector man kan brug for når man vil et element til at reagere til noget når musen bevæger sig på elementet.

### JavaScript

JavaScript er hvor "the magic happens". Det er koden der gør det muligt til at flyt fra en side til den anden i min Portfolie. Det den gør er, at den checker for hvad for en `<li>`-element holder det `'active'` attribute. Så er der en funktion der lytter for en "click" på `<li>`-elementerne, altså hvornår man klikker på min navigation-bar, og så giver det `'active'` attribute til den der blev klikket på.

## Database Forløb

I min "Quiz" folder, findes der fire filer:

```text
index.html
style.css
script.js
db.csv
```

`index.html`-filen indeholder strukturen til spillet. I `<head>` forbinder man både JS filen og CSS filen, og importerer både PapaParse-biblioteket, for at kunne læse csv-filen, og "fontawesome", som indeholder fede logoer man kan bruge.

Så går man ned til `<body>` delen. `<h1>` indeholder en "data-value", som jeg bruger, for at min program kan huske hvad der står i titlen, nemlig fordi ved at svæve over den, så sker der et "special effect". Så er der et `<div>`, som har et klasse for at kunne style den i CSS, og en id for at have adgang til den i JS-filen. Til sidst har den en "onclick" funktion, som kører funktionen `question()` lig så snart man trykker på den. Funktionen sætter "start" til at være "true", som bruges senere i koden.
```document.getElementById('score').innerHTML = `Your score: ${score}/${data.length}`;```
Den del kigger på elementet i HTML som har "score" som id, og sætter dens værdi til en string: "Your score" + variablen score + "/" + længden af dataen i csv-filen. Den der
`document.getElementById('score').innerHTML` er vigtigt i JS-filen, da det er den man bruger for at kunne få adgang til HTML-elementer, og kunne ændre på dem.
Så er der en "for-loop", som indeholder en "if-statement". Den statement evaluerer, hvis "element" af "ID" i databasen er den samme som variablen "id", som har startværdi 0. Dvs. at ind i databasen, kigger den under primærnøglen "ID", række 0. Hvis værdien der ligger der er den samme som id-variablen, så kører den koden i loopen:

```JS
document.getElementById('question').innerHTML = element["QUESTION"];
document.getElementById('btn1').innerHTML = element["ANSWER1"];
document.getElementById('btn2').innerHTML = element["ANSWER2"];
document.getElementById('btn3').innerHTML = element["ANSWER3"];
```

Først kigger den på HTML-elementet med id "question", som er `<h2>`, og giver en værdi på formen `element["PRIMÆRNØGLE"]`. Hvis `id = 0`, så kigger den ind i databasen, under primærnøglen ved rækken 0, og giver elementerne deres tilsvarende værdier. Til sidst er der en `break` så den statement ikke kører for evigt. Efter loopen, men stadig ind i den statement, så er der det samme som før, men den gang ændres på stylen af elementet.

```JS
document.getElementById('options').style.display = "inline-block";
document.getElementById('questionBtn').style.display = "none";
```

I stedet for at ændre ind i HTML-filen, så ændrer den stylen i CSS-filen. Her bruges det for at skjule start-knappen, og vise svar-knapperne, når der trykkes på start-knappen.

Derefter er der en `<h2>` med id "question", som kommer til at indeholde spørgsmålet, efter man har trykket på start-knappen.

Til sidst er der en `div`-element, som indeholder tre knapper og en paragraf for scoren. Hver knappe har klassen "btn", så de kan styles på samme måde, og hver deres id, så man kan få adgang til dem i JS-filen hver for sig; det samme for scoren. Knapperne har også hver deres funktion, som kører når der trykkes på dem. Funktionerne er næsten det samme for hver. Det er en "if-statement", som evaluerer om `data[id]["ANSID"]` er lig med 1, 2 eller 3, afhængig af knappen, og om start er "true". Hvis den er gyldigt, så tillægges 1 til variablen id, funktionen `countUp()` kaldes, og funktionen `question()` kaldes. Hvis den ikke er gyldigt, så kaldes funktionen `countDown()`. `countUp()` ligger 1 til variablen "score", og opdatere den i HTML-dokumentet med den samme kodelinje som før, mens `countDown()` tager 1 fra variablen "score".
Hvis man kigger på databasen, så er det en csv-fil. Der er 6 primær nøgler, som er unikke, hvor de vigtigste er "ID" og "ANSID", da det er dem man foreholder sig til, for at finde ud af hvad for et spørgsmål man er på, og hvad det rigtig svar på spørgsmålet er. Hver linje har så en ID, et spørgsmål, tre svarmuligheder, og en ANSID (svar ID), som siger hvilken svar er den rigtige.
