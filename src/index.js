const oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tenToNineteen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const twentyToNinety = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports  = function toReadable (number) {
    const mass = String(number).split('');
    if(mass.length === 1) {return oneToNine[number]}

    if(mass.length === 2) {
        if(number%10 === 0) {return twentyToNinety[mass[0]]}
        else if(number>10 && number<=19) {return tenToNineteen[mass[1]]}
    return `${twentyToNinety[mass[0]]} ${oneToNine[mass[1]]}`
    }

    if(mass.length === 3) {
        if(number%100 === 0) {return `${oneToNine[mass[0]]} hundred`}
        if(number%10 === 0) {return `${oneToNine[mass[0]]} hundred ${twentyToNinety[mass[1]]}`}
        if(mass[1]==="1"){return `${oneToNine[mass[0]]} hundred ${tenToNineteen[mass[2]]}`}
        if(mass[1]==="0" && mass[2] !=="0"){return `${oneToNine[mass[0]]} hundred ${oneToNine[mass[2]]}`}
    return `${oneToNine[mass[0]]} hundred ${twentyToNinety[mass[1]]} ${oneToNine[mass[2]]}`
    }
}

// if (number>=100 && number<1000 && number%100 == 0) {return `${ones[mass[0]]} hundred`}
// if (number === 110 || number === 210|| number=== 310 || number === 410|| number=== 510|| number=== 610||number=== 710||number=== 810||number=== 910) {
//     return `${ones[mass[0]]} hundred ${ones[Number(mass[2])+10]}`
//     }
// if(mass.length === 3 && mass[2] == 0) {
//     if(mass[2] == 0)
//     return `${ones[mass[0]]} hundred ${tens[mass[1]]}`
// }
// if(mass.length === 3 && mass[2] == 0) {
//     return `${ones[mass[0]]} hundred ${tens[mass[1]]}`
// }
// if (number>=110 && number<120 || number>210 && number<220 ||number>310 && number<320||number>410 && number<420||number>510 && number<520||number>610 && number<620||number>710 && number<720||number>810 && number<820||number>910 && number<920) {
//     return `${ones[mass[0]]} hundred ${ones[Number(mass[2])+10]}`
// }
// if (number>100 && number<110 || number>200 && number<211 ||number>300 && number<311||number>400 && number<411||number>500 && number<511||number>600 && number<611||number>700 && number<711||number>800 && number<811||number>900 && number<911) {
//     return `${ones[mass[0]]} hundred ${ones[mass[2]]}`
// }
// else {
//     
//     }
