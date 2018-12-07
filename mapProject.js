

let data
let langFamDict
let countryDict
let count = 0
let langDictLen = 103
let langFamArray = []
let countryArray = []
let countryEntry = {}
let countryDictLen = 70
let languageEntry = {}
let langCol


function preload(){
  data = loadJSON("data.json")

  langFamDict = loadTable('langFamDict.csv', 'csv', 'header');
  countryDict = loadTable('countryList.csv', 'csv', 'header');
  // for (i =)
  colorMode(HSB)

}

function setup(){
  createCanvas(1400,1900)
  textSize(14)
  background(0)

for (i = 0; i < langDictLen; i ++){
  let languageFam = langFamDict.getString(i,'languagefamily')
  languageEntry = {
    Name: languageFam,
    Color: i*2
  }
  fill(languageEntry.Color,50,100)

  langFamArray.push(languageEntry)
}

for (i = 0; i < countryDictLen; i ++){
  let country = countryDict.getString(i,'countryList')
  countryEntry = {
    Name: country,
    Height: (i*24)+120
  }

  countryArray.push(countryEntry)
}


countryArray.forEach(function (entry, index){
  fill(230)
  text(entry.Name, 30 , entry.Height)

})

stroke(230)
strokeWeight(2)
let lineHeight = 80
line(130,lineHeight,width-50,lineHeight)


let startYear = 1450
let counter = 0

  for (i = startYear; i < 2050; i += 50){
    let xAdd = (width/14)*counter
    noStroke()
    text(i,150+xAdd,lineHeight-20)
    counter += 1

  }


for (i = 0; i < Object.entries(data).length; i++){
  let year = Object.entries(data)[i][1].year;
  let country = Object.entries(data)[i][1].country;
  let family = Object.entries(data)[i][1].languageFam;

  let xpos = map(int(year),1470,2016,150,width-50)
console.log(family)

langFamArray.forEach( function (lang){
let fam = findOverlap(lang,family)
if(fam){
console.log(fam)
}else{
    console.log("n/a")
}
//   if(lang.Name == family){
//     fill(lang.Color,50,100)
//     console.log("matched")
// } else {
//   fill(100,0,100)
//   console.log("n/a")
})

  countryArray.forEach( function (word, index){
    if (word.Name == country){
      let ypos = word.Height

      let size = 15
      rect(xpos,ypos,size,size)
    }
  })
// })

}

langFamArray.forEach( function (langFam){
console.log(langFam)
})
}

function findOverlap(a, b) {
  if (b.length === 0) {
    return "";
  }

  if (a.endsWith(b)) {
    return b;
  }

  if (a.indexOf(b) >= 0) {
    return b;
  }

  return findOverlap(a, b.substring(0, b.length - 1));
}
