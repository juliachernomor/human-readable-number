const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports  = function toReadable (number) {
    const mass = String(number).split('');
if (number>=0 && number<20) { return ones[number]}
if (number>=20 && number<100 && number%10 == 0) {return tens[number/10]}
if (number>20 && number<100 && number%10 !== 0) {return `${tens[mass[0]]} ${ones[mass[1]]}`}
if (number>=100 && number<1000 && number%100 == 0) {return `${ones[mass[0]]} hundred`}
if (number === 110 || number === 210|| number=== 310 || number === 410|| number=== 510|| number=== 610||number=== 710||number=== 810||number=== 910) {
    return `${ones[mass[0]]} hundred ${ones[Number(mass[2])+10]}`
    }
if(mass.length === 3 && mass[2] == 0) {
    if(mass[2] == 0)
    return `${ones[mass[0]]} hundred ${tens[mass[1]]}`
}
if(mass.length === 3 && mass[2] == 0) {
    return `${ones[mass[0]]} hundred ${tens[mass[1]]}`
}
if (number>=110 && number<120 || number>210 && number<220 ||number>310 && number<320||number>410 && number<420||number>510 && number<520||number>610 && number<620||number>710 && number<720||number>810 && number<820||number>910 && number<920) {
    return `${ones[mass[0]]} hundred ${ones[Number(mass[2])+10]}`
}
if (number>100 && number<110 || number>200 && number<211 ||number>300 && number<311||number>400 && number<411||number>500 && number<511||number>600 && number<611||number>700 && number<711||number>800 && number<811||number>900 && number<911) {
    return `${ones[mass[0]]} hundred ${ones[mass[2]]}`
}
else {
    return `${ones[mass[0]]} hundred ${tens[mass[1]]} ${ones[mass[2]]}`
    }
}
