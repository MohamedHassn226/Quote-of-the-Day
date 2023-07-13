var Quote = [
    `“A room without books is like a body without a soul.”`,
    `“So many books, so little time.”`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”'`,
    `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`

];
var author =[`― Marcus Tullius Cicero ` ,`― Frank Zappa` , `― Bernard M. Baruch` , `― William W. Purkey` ]


function AnyNumber() {
    return Math.floor(Math.random() * Quote.length);
}

var current = -1;
var random;


function addQuote() {
    random = AnyNumber();

    while (current == random) {
        random = AnyNumber();

    }
    console.log(random);


    var resultQuote= `
<div class="text-center">
<p class="fw-bold">
${Quote[random]}
</p>
</div>
`;
var resultauthor= `
<div class="text-center">
<p class="fw-bold">
${author[random]}
</p>
</div>
`;
    document.getElementById("Quote").innerHTML = (resultQuote);

    document.getElementById("author").innerHTML = (resultauthor);
current=random;
};