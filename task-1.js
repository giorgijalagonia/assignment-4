//დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს
function replaceText(string, valueToReplace, valueToReplaceWith) {
    let result = '';

    for (let i = 0; i < string.length; i++) {

      if (string.slice(i, i + valueToReplace.length) === valueToReplace) {
            result += valueToReplaceWith;
            i += valueToReplace.length - 1;
        } else {
            result += string[i];
        }
    }
    
    console.log(result);
}
