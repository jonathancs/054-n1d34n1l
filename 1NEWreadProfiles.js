// packages
const puppeteer = require('puppeteer');
const fs = require('fs').promises;

// files and variables
const credentials = require('./configs/credentials.json')
let candidates = require('./configs/candidates.js')
let numeroDaScreenshot = 1


async function readProfiles() {

    const startTimeMarker = Date.now()
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] })
    let page = await browser.newPage()
    await standardConfiguration()

    // await greaterMonitorView()
    await mediumMonitorView()
    // await notebookSizeView()


    /*==========   calls to be done   ===========*/

    await standardConfiguration()

    await login()

    await visitProfiles()

    /*======   DOCUMENTATION   ======*/


    // effective functions

    async function login() {

        await page.goto('https://br.linkedin.com/in/jonathancasagrande', { waitUntil: 'networkidle0' })

        for (let i = 0; i < 1; i++) {

            await checkIfSignUpPage()

            await checkIfTwoStepAutentication()

            await checkIfStandardSignInPage()

            await checkIfVerificationPage()

            i++

        }

        await console.log("login completed")


        // the functions 🔽

        async function checkIfSignUpPage() {

            try {

                await page.waitForSelector('body > main > div > div > form.join-form > section > p > a', { timeout: 10000 })
                await page.click("body > main > div > div > form.join-form > section > p > a")

                await waitOneSecond()

                await insertFirstDetourCredentials()

                await waitThreeSeconds()
                await waitThreeSeconds()

            } catch (error) { console.log("10 seconds have past. Wasn't the register page. Or couldn't load to the feeds page." + '\n\n') }


        }

        async function checkIfTwoStepAutentication() {

            try {

                let twoStepAutenticationSuccesfulLanding = await page.waitForSelector('h1[class="content__header"]', { timeout: 10000 })

                if (twoStepAutenticationSuccesfulLanding) { await console.log('detectou two step page') }

                await page.waitForSelector('button[class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--2 artdeco-button--primary mr2"]', { timeout: 0 })

                return

            } catch (error) { await console.log(`wasn't the two step verification page`) }
        }

        // async function checkIfVerificationPage() {

        //     try {
        //         await page.waitForSelector('#app__container > header > div > div > nav > a.nav__button__muted--signin', { timeout: 10000 })

        //         await page.click('#app__container > header > div > div > nav > a.nav__button__muted--signin')

        //         await waitOneSecond()

        //         await insertSecondDetourCredentials()

        //         return

        //     } catch (error) { console.log("10 seconds have past. Wasn't the verification page" + '\n\n') }

        // }

        // async function checkIfStandardSignInPage() {

        //     try {
        //         await page.waitForSelector('username', { timeout: 10000 })

        //         await insertSecondDetourCredentials()

        //         return

        //     } catch (error) { console.log("10 seconds have past. Wasn't the SIGN IN page" + '\n\n') }

        // }

        async function insertFirstDetourCredentials() {

            // insert login infos
            await page.type('#login-email', credentials.email, { delay: 30 })
            await page.type('#login-password', credentials.password, { delay: 30 })

            // Click Login Button
            await page.click('#login-submit', { delay: 1000 })

        }

        async function insertSecondDetourCredentials() {

            // insert login infos
            await page.type('#username', credentials.email, { delay: 30 })
            await page.type('#password', credentials.password, { delay: 30 })

            // Click Login Button
            await page.click('#app__container > main > div:nth-child(2) > form > div.login__form_action_container > button', { delay: 1000 })

        }

    }

    async function visitProfiles() {

        for (let i = 0; i < candidates.length; i++) {
            loopedProfile = candidates[i]

            await waitThreeSeconds()

            if (await currentURL != loopedProfile) { await page.goto(loopedProfile) }
            await console.log(currentURL)

            await waitTenSeconds()

            await prepareProfile()

            await searchEnglish()

            await searchSkillWords()

            await writeResults()

            // the functions 🔽

            async function searchEnglish() {

                englishDetector.length = []

                checkEnglish1 = await page.evaluate('(document.body.innerText.match(/advanced english/igm) || []).length')
                checkEnglish2 = await page.evaluate('(document.body.innerText.match(/fluent english/igm) || []).length')
                checkEnglish3 = await page.evaluate('(document.body.innerText.match(/fluent on english/igm) || []).length')
                checkEnglish4 = await page.evaluate('(document.body.innerText.match(/fluent in english/igm) || []).length')
                checkEnglish5 = await page.evaluate('(document.body.innerText.match(/fluent with english/igm) || []).length')
                checkEnglish6 = await page.evaluate('(document.body.innerText.match(/avançado de ingles/igm) || []).length')
                checkEnglish7 = await page.evaluate('(document.body.innerText.match(/avançado de inglês/igm) || []).length')
                checkEnglish8 = await page.evaluate('(document.body.innerText.match(/inglês avançado/igm) || []).length')
                checkEnglish9 = await page.evaluate('(document.body.innerText.match(/ingles avançado/igm) || []).length')
                checkEnglish10 = await page.evaluate('(document.body.innerText.match(/ingles fluente/igm) || []).length')
                checkEnglish11 = await page.evaluate('(document.body.innerText.match(/inglês fluente/igm) || []).length')
                checkEnglish12 = await page.evaluate('(document.body.innerText.match(/fluente de ingles/igm) || []).length')
                checkEnglish13 = await page.evaluate('(document.body.innerText.match(/fluente de inglês/igm) || []).length')
                checkEnglish14 = await page.evaluate('(document.body.innerText.match(/fluente com inglês/igm) || []).length')
                checkEnglish15 = await page.evaluate('(document.body.innerText.match(/fluente com ingles/igm) || []).length')
                checkEnglish16 = await page.evaluate('(document.body.innerText.match(/fluente em inglês/igm) || []).length')
                checkEnglish17 = await page.evaluate('(document.body.innerText.match(/fluente em ingles/igm) || []).length')
                checkEnglish18 = await page.evaluate('(document.body.innerText.match(/ESL/igm) || []).length')
                checkEnglish19 = await page.evaluate('(document.body.innerText.match(/english on daily basis/igm) || []).length')
                checkEnglish20 = await page.evaluate('(document.body.innerText.match(/english second language/igm) || []).length')
                checkEnglish21 = await page.evaluate('(document.body.innerText.match(/english as second language/igm) || []).length')
                checkEnglish22 = await page.evaluate('(document.body.innerText.match(/ingles como segunda lingua/igm) || []).length')
                checkEnglish23 = await page.evaluate('(document.body.innerText.match(/inglês como segunda lingua/igm) || []).length')
                checkEnglish24 = await page.evaluate('(document.body.innerText.match(/exchange/igm) || []).length')
                checkEnglish25 = await page.evaluate('(document.body.innerText.match(/interchang/igm) || []).length')
                checkEnglish26 = await page.evaluate('(document.body.innerText.match(/nível avançado/igm) || []).length')
                checkEnglish27 = await page.evaluate('(document.body.innerText.match(/nivel avançado/igm) || []).length')
                checkEnglish28 = await page.evaluate('(document.body.innerText.match(/inglês: avançado/igm) || []).length')
                checkEnglish29 = await page.evaluate('(document.body.innerText.match(/ingles: avançado/igm) || []).length')

            }

            async function prepareProfile() {

                await autoScrollPage(page)

                await page.screenshot({ path: `./prints/${numeroDaScreenshot}.png` }, 'section[id="experience-section"]')

                await showMoreBioInfos()
                await showMoreExperienceInfos()
                await showMoreProfileInfos()

                await console.log("prepareProfile() completed")

                // the functions 🔽

                async function showMoreBioInfos() {

                    try { // show more infos on BIO

                        await page.click('#line-clamp-show-more-button')

                    } catch (error) { console.log("Bio button not found") }
                }

                async function showMoreExperienceInfos() {

                    try { // show more infos on EXPERIENCES

                        await page.evaluate(`document.querySelectorAll('button[class="inline-show-more-text__button  link"]')[0].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="inline-show-more-text__button  link"]')[1].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="inline-show-more-text__button  link"]')[2].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="inline-show-more-text__button  link"]')[3].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="inline-show-more-text__button  link"]')[4].click()`)

                    } catch (error) { console.log("See more button not found" + (error) + '\n') }

                }

                async function showMoreProfileInfos() {


                    try { // show more experiences button

                        await page.evaluate(`document.querySelectorAll('button[class="pv-profile-section__see-more-inline pv-profile-section__text-truncate-toggle artdeco-button artdeco-button--tertiary artdeco-button--muted"]')[0].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="pv-profile-section__see-more-inline pv-profile-section__text-truncate-toggle artdeco-button artdeco-button--tertiary artdeco-button--muted"]')[1].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="pv-profile-section__see-more-inline pv-profile-section__text-truncate-toggle artdeco-button artdeco-button--tertiary artdeco-button--muted"]')[2].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="pv-profile-section__see-more-inline pv-profile-section__text-truncate-toggle artdeco-button artdeco-button--tertiary artdeco-button--muted"]')[3].click()`)
                        await page.evaluate(`document.querySelectorAll('button[class="pv-profile-section__see-more-inline pv-profile-section__text-truncate-toggle artdeco-button artdeco-button--tertiary artdeco-button--muted"]')[4].click()`)

                    } catch (error) { console.log("Show more button not found" + (error) + '\n') }

                }

            }

            async function searchSkillWords() {

                dotnet = await page.evaluate('(document.body.innerText.match(/.net/igm) || []).length')
                dotnetCore = await page.evaluate('(document.body.innerText.match(/.net core/igm) || []).length')
                cSharp = await page.evaluate('(document.body.innerText.match(/c#/igm) || []).length')
                cSharpCapitalized = await page.evaluate('(document.body.innerText.match(/C#/igm) || []).length')
                angular = await page.evaluate('(document.body.innerText.match(/angular/igm) || []).length')
                react = await page.evaluate('(document.body.innerText.match(/react/igm) || []).length')
                automated = await page.evaluate('(document.body.innerText.match(/automated/igm) || []).length')
                automation = await page.evaluate('(document.body.innerText.match(/automation/igm) || []).length')
                salesforce = await page.evaluate('(document.body.innerText.match(/salesforce/igm) || []).length')
                salesforceCore = await page.evaluate('(document.body.innerText.match(/salesforce core/igm) || []).length')
                // a3 = await page.evaluate('(document.body.innerText.match(/a3/igm) || []).length')
                // a4 = await page.evaluate('(document.body.innerText.match(/a4/igm) || []).length')
                // a5 = await page.evaluate('(document.body.innerText.match(/a5/igm) || []).length')
                // a6 = await page.evaluate('(document.body.innerText.match(/a6/igm) || []).length')
                // a7 = await page.evaluate('(document.body.innerText.match(/a7/igm) || []).length')
                // a8 = await page.evaluate('(document.body.innerText.match(/a8/igm) || []).length')
                // a9 = await page.evaluate('(document.body.innerText.match(/a9/igm) || []).length')

            }

            async function writeResults() {

                if (englishDetector.length > 0) {
        
                    await writeURL()
        
                    await writeLocation()
        
                    await writeProfileTitle()
        
                    await writeActualJobTitle()

                    await writeCurrentJobTime()
        
                    await writeEnglishResults()
        
                    await writeSkills()
        
                    await writeIfAlreadyConnection()

                    await fs.appendfile('./results/withEnglish/', '\n')
        
                    // the functions 🔽
        
                    async function writeURL() {
        
                        await fs.appendFile('./results/withEnglish', loopedProfile + '\n')
        
                    }
        
                    async function writeLocation() {
        
                        try {
        
                            let getLocation = await page.evaluate(`document.querySelector('li[class="t-16 t-black t-normal inline-block"]').innerText`)
        
                            await fs.appendFile('./results/withEnglish', getLocation + '\n')
        
                        } catch (error) { "unable to register location" }
        
                    }
        
                    async function writeProfileTitle() {
        
                        try {
        
                            let getLinkedinTitle = await page.evaluate(`document.querySelector('h2[class="mt1 t-18 t-black t-normal break-words"]').innerText`)
        
                            await fs.appendFile('./results/withEnglish', getLinkedinTitle + '\n')
        
                        } catch (error) { "unable to register Linkedin Title" }
        
                    }
        
                    async function writeActualJobTitle() {
        
                        try {
        
                            let getJobTitle = await page.evaluate(`document.querySelectorAll('h3[class="t-16 t-black t-bold"]')[0].innerText`)
        
                            await fs.appendFile('./results/withEnglish', getJobTitle + '\n')
        
                        } catch (error) { "unable to register job Title" }
        
        
        
        
                    }

                    async function writeCurrentJobTime() {

                        try {
        
                            let getCurrentJobtime = await page.evaluate(`document.querySelectorAll('span[class="pv-entity__bullet-item-v2"]')[0]`)
        
                            await fs.appendFile('./results/withEnglish', getCurrentJobtime + '\n')
        
                        } catch (error) { "unable to register job Title" }

                        

                    }
        
                    async function writeEnglishResults() {
        
                        if (checkEnglish1) {
                            fs.appendFile('./results/withEnglish', 'advanced english ' + checkEnglish1 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish2) {
                            fs.appendFile('./results/withEnglish', 'fluent english ' + checkEnglish2 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish3) {
                            fs.appendFile('./results/withEnglish', 'fluent on english ' + checkEnglish3 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish4) {
                            fs.appendFile('./results/withEnglish', 'fluent in english ' + checkEnglish4 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish5) {
                            fs.appendFile('./results/withEnglish', 'fluent with english ' + checkEnglish5 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish6) {
                            fs.appendFile('./results/withEnglish', 'avançado de ingles ' + checkEnglish6 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish7) {
                            fs.appendFile('./results/withEnglish', 'avançado de inglês ' + checkEnglish7 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish8) {
                            fs.appendFile('./results/withEnglish', 'inglês avançado ' + checkEnglish8 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish9) {
                            fs.appendFile('./results/withEnglish', 'ingles avançado ' + checkEnglish9 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish10) {
                            fs.appendFile('./results/withEnglish', 'ingles fluente ' + checkEnglish10 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish11) {
                            fs.appendFile('./results/withEnglish', 'inglês fluente ' + checkEnglish11 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish12) {
                            fs.appendFile('./results/withEnglish', 'fluente de ingles ' + checkEnglish12 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish13) {
                            fs.appendFile('./results/withEnglish', 'fluente de inglês ' + checkEnglish13 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish14) {
                            fs.appendFile('./results/withEnglish', 'fluente com inglês ' + checkEnglish14 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish15) {
                            fs.appendFile('./results/withEnglish', 'fluente com ingles ' + checkEnglish15 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish16) {
                            fs.appendFile('./results/withEnglish', 'fluente em inglês ' + checkEnglish16 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish17) {
                            fs.appendFile('./results/withEnglish', 'fluente em ingles ' + checkEnglish17 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish18) {
                            fs.appendFile('./results/withEnglish', 'ESL ' + checkEnglish18 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish19) {
                            fs.appendFile('./results/withEnglish', 'english on daily basis ' + checkEnglish19 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish20) {
                            fs.appendFile('./results/withEnglish', 'english second language ' + checkEnglish20 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish21) {
                            fs.appendFile('./results/withEnglish', 'english as second language ' + checkEnglish21 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish22) {
                            fs.appendFile('./results/withEnglish', 'ingles como segunda lingua ' + checkEnglish22 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish23) {
                            fs.appendFile('./results/withEnglish', 'inglês como segunda lingua ' + checkEnglish23 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish24) {
                            fs.appendFile('./results/withEnglish', 'exchange ' + checkEnglish24 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish25) {
                            fs.appendFile('./results/withEnglish', 'interchang ' + checkEnglish25 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish26) {
                            fs.appendFile('./results/withEnglish', 'nível avançado ' + checkEnglish26 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish27) {
                            fs.appendFile('./results/withEnglish', 'nivel avançado ' + checkEnglish27 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish28) {
                            fs.appendFile('./results/withEnglish', 'inglês: avançado ' + checkEnglish28 + ' ') 
                            englishDetector.push('1')
                        }
                        
                        
                        if (checkEnglish29) {
                            fs.appendFile('./results/withEnglish', 'ingles: avançado ' + checkEnglish29 + '\n') 
                            englishDetector.push('1')
                        }
        
                    }
        
                    async function writeSkills() {
        
                        skillDetector = 0
        
                        if (dotnet) { await fs.appendfile('./results/withEnglish', '.net ' + dotnet + ' '); await skillDetector++ }
                        if (dotnetCore) { await fs.appendfile('./results/withEnglish', '.net core ' + dotnetCore + ' '); await skillDetector++ }
                        if (cSharpCapitalized) { await fs.appendfile('./results/withEnglish', 'C# ' + cSharpCapitalized + ' '); await skillDetector++ }
                        if (cSharp) { await fs.appendfile('./results/withEnglish', 'c# ' + cSharp + ' '); await skillDetector++ }
                        if (angular) { await fs.appendfile('./results/withEnglish', 'angular ' + angular + ' '); await skillDetector++ }
                        if (react) { await fs.appendfile('./results/withEnglish', 'react ' + react + ' '); await skillDetector++ }
                        if (automated) { await fs.appendfile('./results/withEnglish', 'automated ' + automated + ' '); await skillDetector++ }
                        if (automation) { await fs.appendfile('./results/withEnglish', 'automation ' + automation + ' '); await skillDetector++ }
                        if (salesforce) { await fs.appendfile('./results/withEnglish', 'salesforce ' + salesforce + ' '); await skillDetector++ }
                        if (salesforceCore) { await fs.appendfile('./results/withEnglish', 'salesforceCore ' + salesforceCore + '\n'); await skillDetector++ }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
        
                    }
        
                    async function writeIfAlreadyConnection() {
        
                        try {
        
                            let checkEnviarMensagem = await page.evaluate(`document.querySelector('a[class="message-anywhere-button pv-s-profile-actions pv-s-profile-actions--message ml2 artdeco-button artdeco-button--2 artdeco-button--muted artdeco-button--primary"]')`)
        
                            if (checkEnviarMensagem) { fs.appendFile('./results/withEnglish', 'já é conexão' + '\n\n') }
        
                        } catch (err) { console.log('its not connection' + '\n') }
        
                    }
        
        
                } else {
        
                    await writeURL()
        
                    await writeLocation()
        
                    await writeProfileTitle()
        
                    await writeActualJobTitle()

                    await writeCurrentJobTime()
        
                    await writeEnglishResults()
        
                    await writeSkills()
        
                    await writeIfAlreadyConnection()

                    await fs.appendfile('./results/noEnglish/', '\n')
        
                    // the functions 🔽
        
                    async function writeURL() {
        
                        await fs.appendFile('./results/noEnglish', loopedProfile + '\n')
        
                    }
        
                    async function writeLocation() {
        
                        try {
        
                            let getLocation = await page.evaluate(`document.querySelector('li[class="t-16 t-black t-normal inline-block"]').innerText`)
        
                            await fs.appendFile('./results/noEnglish', getLocation + '\n')
        
                        } catch (error) { "unable to register location" }
        
                    }
        
                    async function writeProfileTitle() {
        
                        try {
        
                            let getLinkedinTitle = await page.evaluate(`document.querySelector('h2[class="mt1 t-18 t-black t-normal break-words"]').innerText`)
        
                            await fs.appendFile('./results/noEnglish', getLinkedinTitle + '\n')
        
                        } catch (error) { "unable to register Linkedin Title" }
        
                    }
        
                    async function writeActualJobTitle() {
        
                        try {
        
                            let getJobTitle = await page.evaluate(`document.querySelectorAll('h3[class="t-16 t-black t-bold"]')[0].innerText`)
        
                            await fs.appendFile('./results/noEnglish', getJobTitle + '\n')
        
                        } catch (error) { "unable to register job Title" }
        
        
        
        
                    }

                    async function writeCurrentJobTime() {

                        try {
        
                            let getCurrentJobtime = await page.evaluate(`document.querySelectorAll('span[class="pv-entity__bullet-item-v2"]')[0]`)
        
                            await fs.appendFile('./results/withEnglish', getCurrentJobtime + '\n')
        
                        } catch (error) { "unable to register job Title" }

                        

                    }
        
                    async function writeEnglishResults() {
        
                        if (checkEnglish1) {
                            fs.appendFile('./results/noEnglish', 'advanced english ' + checkEnglish1 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish2) {
                            fs.appendFile('./results/noEnglish', 'fluent english ' + checkEnglish2 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish3) {
                            fs.appendFile('./results/noEnglish', 'fluent on english ' + checkEnglish3 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish4) {
                            fs.appendFile('./results/noEnglish', 'fluent in english ' + checkEnglish4 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish5) {
                            fs.appendFile('./results/noEnglish', 'fluent with english ' + checkEnglish5 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish6) {
                            fs.appendFile('./results/noEnglish', 'avançado de ingles ' + checkEnglish6 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish7) {
                            fs.appendFile('./results/noEnglish', 'avançado de inglês ' + checkEnglish7 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish8) {
                            fs.appendFile('./results/noEnglish', 'inglês avançado ' + checkEnglish8 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish9) {
                            fs.appendFile('./results/noEnglish', 'ingles avançado ' + checkEnglish9 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish10) {
                            fs.appendFile('./results/noEnglish', 'ingles fluente ' + checkEnglish10 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish11) {
                            fs.appendFile('./results/noEnglish', 'inglês fluente ' + checkEnglish11 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish12) {
                            fs.appendFile('./results/noEnglish', 'fluente de ingles ' + checkEnglish12 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish13) {
                            fs.appendFile('./results/noEnglish', 'fluente de inglês ' + checkEnglish13 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish14) {
                            fs.appendFile('./results/noEnglish', 'fluente com inglês ' + checkEnglish14 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish15) {
                            fs.appendFile('./results/noEnglish', 'fluente com ingles ' + checkEnglish15 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish16) {
                            fs.appendFile('./results/noEnglish', 'fluente em inglês ' + checkEnglish16 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish17) {
                            fs.appendFile('./results/noEnglish', 'fluente em ingles ' + checkEnglish17 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish18) {
                            fs.appendFile('./results/noEnglish', 'ESL ' + checkEnglish18 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish19) {
                            fs.appendFile('./results/noEnglish', 'english on daily basis ' + checkEnglish19 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish20) {
                            fs.appendFile('./results/noEnglish', 'english second language ' + checkEnglish20 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish21) {
                            fs.appendFile('./results/noEnglish', 'english as second language ' + checkEnglish21 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish22) {
                            fs.appendFile('./results/noEnglish', 'ingles como segunda lingua ' + checkEnglish22 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish23) {
                            fs.appendFile('./results/noEnglish', 'inglês como segunda lingua ' + checkEnglish23 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish24) {
                            fs.appendFile('./results/noEnglish', 'exchange ' + checkEnglish24 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish25) {
                            fs.appendFile('./results/noEnglish', 'interchang ' + checkEnglish25 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish26) {
                            fs.appendFile('./results/noEnglish', 'nível avançado ' + checkEnglish26 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish27) {
                            fs.appendFile('./results/noEnglish', 'nivel avançado ' + checkEnglish27 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish28) {
                            fs.appendFile('./results/noEnglish', 'inglês: avançado ' + checkEnglish28 + ' ') 
                            englishDetector.push('1')
                        }


                        if (checkEnglish29) {
                            fs.appendFile('./results/noEnglish', 'ingles: avançado ' + checkEnglish29 + '\n') 
                            englishDetector.push('1')
                        }


        
                    }
        
                    async function writeSkills() {
        
                        skillDetector = 0
        
                        if (dotnet) {
                            await fs.appendfile('./results/noEnglish', '.net ' + dotnet + ' ')
                            await skillDetector++
                        }
        
                        
                        if (dotnetCore) {
                            await fs.appendfile('./results/noEnglish', '.net core ' + dotnetCore + ' ')
                            await skillDetector++
                        }
        
                        
                        if (cSharpCapitalized) {
                            await fs.appendfile('./results/noEnglish', 'C# ' + cSharpCapitalized + ' ')
                            await skillDetector++
                        }
        
                        
                        if (cSharp) {
                            await fs.appendfile('./results/noEnglish', 'c# ' + cSharp + ' ')
                            await skillDetector++
                        }
        
                        
                        if (angular) {
                            await fs.appendfile('./results/noEnglish', 'angular ' + angular + ' ')
                            await skillDetector++
                        }
        
                        
                        if (react) {
                            await fs.appendfile('./results/noEnglish', 'react ' + react + ' ')
                            await skillDetector++
                        }
        
                        
                        if (automated) {
                            await fs.appendfile('./results/noEnglish', 'automated ' + automated + ' ')
                            await skillDetector++
                        }
        
                        
                        if (automation) {
                            await fs.appendfile('./results/noEnglish', 'automation ' + automation + ' ')
                            await skillDetector++
                        }
        
                        
                        if (salesforce) {
                            await fs.appendfile('./results/noEnglish', 'salesforce ' + salesforce + ' ')
                            await skillDetector++
                        }
        
                        
                        if (salesforceCore) {
                            await fs.appendfile('./results/noEnglish', 'salesforceCore ' + salesforceCore + '\n')
                            await skillDetector++
                        }
        
                        
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
                        // if (a1) { await fs.appendfile('./results/withEnglish', 'a1' + a1 + '\n') }
        
                    }
        
                    async function writeIfAlreadyConnection() {
        
                        try {
        
                            let checkEnviarMensagem = await page.evaluate(`document.querySelector('a[class="message-anywhere-button pv-s-profile-actions pv-s-profile-actions--message ml2 artdeco-button artdeco-button--2 artdeco-button--muted artdeco-button--primary"]')`)
        
                            if (checkEnviarMensagem) { fs.appendFile('./results/noEnglish', 'já é conexão' + '\n') }
        
                        } catch (err) { console.log('its not connection' + '\n') }
        
                    }
        
                }
        
            }

        }
        
    }


    // standard utility functions

    async function standardConfiguration() {

        currentURL = await page.url()

        await page.setDefaultNavigationTimeout(0)

        let context = browser.defaultBrowserContext()
        context.overridePermissions("https://linkedin.com", ["geolocation", "notifications"]) // An array of permissions

    }

    async function waitOneSecond() {

        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
        const element = async () => {
            await sleep(1000)

        }

        await element()

    }

    async function waitThreeSeconds() {
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
    }

    async function waitTenSeconds() {
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
        await waitOneSecond()
    }

    async function autoScrollPage(page) {
        // this block was copy-pasted from stackOverflow; the only literal copy so far.
        await page.evaluate(async () => {
            await new Promise((resolve, reject) => {
                var totalHeight = 0;
                var distance = 100;
                var timer = setInterval(() => {
                    var scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 50);
            });
        });
    }

    async function greaterMonitorView() {
        await page.setViewport({ width: 1880, height: 920, deviceScaleFactor: 1, })

    }

    async function mediumMonitorView() {
        await page.setViewport({ width: 1300, height: 650, deviceScaleFactor: 1, })

    }

    async function notebookSizeView() {
        await page.setViewport({ width: 1240, height: 650, deviceScaleFactor: 1, })

    }

    async function close() {
        const endingTimeMarker = Date.now()
        await console.log('executed in', Math.ceil(((endingTimeMarker - startTimeMarker) / 1000) / 60) + ' minutes');

        await browser.close()
    }

}
readProfiles()