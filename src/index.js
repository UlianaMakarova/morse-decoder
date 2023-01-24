const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const sep = (str, len) => str.length ? [str.slice(0, len),...sep(str.slice(len),len)]: [];
function decode(expr) {
    // write your solution here
    const tableNumberToDots = {
        '10': '.',
        '11': '-',
        '00': ''
    };
    
    result_decode = [];
    result_morse =[];
    sep(expr, 10).forEach(element => {

        if (element === '**********'){
            result_decode.push(' ');}
        else{
            sep(element,2).forEach(
                number => {
                    result_morse.push(tableNumberToDots[number]);
                });
            result_decode.push(MORSE_TABLE[result_morse.join('')]);
            result_morse = [];
            }
        });
   
    return result_decode.join('');
    
}

module.exports = {
    decode
}