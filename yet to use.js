// english for 
for (let i = 0; i < englishWordsSearch.length; i++) {

    let loopedEnglishWordSearch = englishWordsSearch[i]

    //let regex = new RegExp("#" + loopedEnglishWordSearch + "#", "g")

    let wordCounter = await page.evaluate('(document.body.innerText.match(/metal/g) || []).length')
    console.log(wordCounter)

    if (wordCounter) {

        let formulatedText = loopedEnglishWordSearch + ' ' + wordCounter

        console.log(formulatedText)

        await fs.writeFile('./results/skillCdtsLinks', formulatedText / n)

    } else { console.log('não rolou') }




    var stringToGoIntoTheRegex = "abc";
    var regex = new RegExp("#" + stringToGoIntoTheRegex + "#", "g");
    // at this point, the line above is the same as: var regex = /#abc#/g;

    var input = "Hello this is #abc# some #abc# stuff.";
    var output = input.replace(regex, "!!");
    alert(output); // Hello this is !! some !! stuff.

    let checkEnglish = await page.evaluate('(document.body.innerText.match(/english/g) || []).length')
    let checkIngles = await page.evaluate('(document.body.innerText.match(/ingles/g) || []).length')

    await console.log(checkEnglish)
    await console.log(checkIngles)

}