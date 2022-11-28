const gespreksOnderwerpenVraag = [
"“Waar zou je nu het liefst willen zijn?”",
"“Wie is jouw grootste fan?”",
"“Bij wie voel jij je veilig?”",
"“Heb je wel eens gespiekt?”",
"“Bij wie kan je echt jezelf zijn?”",
"“Wat maakte jou blij vandaag?”",
"“Wat zou je doen als je wist dat je niet kon falen?”",
"“Doe je wel eens wat aardigs voor een vreemde?”",
"“Voor wie zou je door het vuur gaan?“",
"“Wat vind je het mooiste aan jezelf?”",
"“Van welke muziek word je vrolijk?”",
"“Wat is het laatste dat je gevierd hebt?”",
"“Hoe ben je veranderd in het afgelopen jaar?”",
"“Van wie krijg jij het warm?”",
"“Wat is het gekste dat je in het buitenland hebt meegemaakt?”",
"“Wat is het spannendste dat je hebt meegemaakt?”",
"“Met welk familielid deel je de mooiste jeugdherinne-ringen?”",
"“Welke naam vind jij echt mooi?”",
"“Welke periode uit de geschiedenis vind jij het interessantst?“",
"“Welke goede gewoonte wil je aanleren?”",
"“Wat is voor jou het woord van het jaar?”",
"“Hoe ziet jou ideale zondag eruit?”",
"“Welke zonsondergang is jou bijgebleven?”",
"“Wat is jouw favoriete muziekinstru-ment?”",
"“Welk gerecht kan jij het beste koken?”",
"“Van wie kreeg jij je eerste kus?”",
"“Bij welk liedje kun je niet stil blijven zitten?”",
"“Waar droom je vaak over?”",
"“Wat had je nog graag op school willen leren?”",
"“Welke eigenschap vind jij het belangrijkst bij een vriend(in)?”",
"“Welk boek heeft indruk op jou gemaakt?”",
"“Kun je goed alleen zijn?”",
"“Met wie heb jij de grootste lol?”",
"“Wat is je natuurlijke gave?”",
"“Wat was vroeger jouw favoriete liedje?”",
"“Welke angst heb jij overwonnen?”",
"“Wat was je laatste overwinning?”",
"“Waar wil je het liefst naartoe op reis?”",
"“Wat is je favoriete filmgenre?”",
"“Wat is je lievelingseten?”",
"“Bij wie kan je alles kwijt?”",
"“Wat is jouw favoriete sprookje?”",
"“Wie zou je meenemen naar de maan?”", 
"“Als welk dier zou je willen reïncarneren?”", 
"“Wie inspireert jou om een beter mens te zijn?”", 
"“Liever 1 jaar vooruit of 1 jaar terug?”", 
"“Hoe ziet de wereld er uit over 10 jaar?”", 
"“Van welke docent heb je het meest geleerd?”", 
"“Uit welke kleine dingen haal je geluk?”", 
"“Met welk familielid zou je een dag willen ruilen?”", 
"“Wat zijn drie positieve dingen aan deze dag?”", 
"“Waarom is het fijn om (persoon waar je nu aan denkt) als vriend/vriendin te hebben?”", 
"“Welk liedje roept speciale herinneringen op?”", 
"“Wie fleurt jou op op een sombere dag?”", 
"“Hoe heb jij je eerste liefde leren kennen?”", 
"“Wat is jouw avondritueel?”", 
"“Wat staat er op je verlanglijstje?”", 
"“Wie zou je meer complimentjes moeten geven?”", 
"“Wat is je favoriete feestdag?”", 
"“Liever koken of eten bestellen?”", 
"“Welke tradities heb je binnen jouw familie?”", 
"“Ben je bijgelovig?”", 
"“Welk beroep zou je voor een dag willen uitoefenen?”", 
"“Wat is iets dat weinig mensen over jou weten?”", 
"“Welk dier zou je voor een dag willen zijn?”", 
"“Wat is liefde voor jou?”", 
"“Wat heb jij van je ouders overgenomen?”", 
"“Wat is jouw favoriete spel?”", 
"“Zou je op Mars willen wonen als dat kon?”", 
"“Welk dier geeft jouw persoonlijkheid het beste weer?”", 
"“In welk tijdperk zou je willen leven?”", 
"“Welk advies zou jij je jongere zelf geven?”", 
"“Hoe zet jij een ander in het zonnetje?”", 
"“Wat is het mooiste plekje van Nederland?”", 
"“Wat is de perfecte snack voor bij de thee?”", 
"“Kun je een nieuwe theesmaak bedenken?”", 
"“Met wie vier je het liefst je verjaardag?”", 
"“Wat maakt jou bijzonder?”", 
"“Wie biedt jou altijd een luisterend oor?”", 
"“Bij wie vind je rust?”", 
"“Welk vak ontbreekt er volgens jou op school?”", 
"“Wat was voor jou een levensveranderende ervaring?”"
];
const random = Math.floor(Math.random() * gespreksOnderwerpenVraag.length);
document.write("<p>" + gespreksOnderwerpenVraag[random] + "</p>");
var script = document.getElementById("template");
var target = document.getElementById("target");
target.innerHTML = script.textContent;
