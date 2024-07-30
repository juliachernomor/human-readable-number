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
