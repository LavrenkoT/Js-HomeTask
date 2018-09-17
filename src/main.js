const roles = [
    "Городничий",
    "Аммос Федорович",
    "Артемий Филиппович",
    "Лука Лукич",
];

const textLines = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`

var splitedLines = textLines.split('\n');
var result = {};

for (i = 0; i < splitedLines.length; i++) {
    var delIndex = splitedLines[i].indexOf(":");
    var key = splitedLines[i].substring(0,delIndex);
    var value = splitedLines[i].substring(delIndex+1);
    result[key] = result[key] || [];
    result[key].push({Index:i+1,Value:value});
  }
  
roles.forEach(function(item) {
   console.log(item+ ':');
   var speech = result[item] || [];
        speech.forEach(function(element) {
            console.log(element.Index + ') '+ element.Value);
        });
        console.log('\n');
});
