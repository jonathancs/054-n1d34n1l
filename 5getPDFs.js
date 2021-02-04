// packages
const puppeteer = require('puppeteer');
const fs = require('fs').promises;


// files and variables
const cookies = require('./generalConfigs/cookies.json')
const credentials = require('./generalConfigs/credentials.json')
let candidates = require('./5backBone/candidates.js')



async function readProfiles() {

    const startWholeApplicationTimeMarker = Date.now()
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] })
    let page = await browser.newPage()
    await standardConfiguration()

    // await greaterMonitorView()
    await mediumMonitorView()
    // await notebookSizeView()


    /*==========   calls to be done   ===========*/

    await standardConfiguration()

    await login()

    await visitAndGetPDFs()

    await close()

    /*======   DOCUMENTATION   ======*/





    // effective functions

    async function login() {

        if (Object.keys(cookies).length) { loginWithCookies() } else { loginWithoutCookies() }

        // 🔽 below the documentation 🔽

        async function loginWithCookies() {

            if (Object.keys(cookies).length) { loginWithCookies() } else { loginWithoutCookies() }

            async function loginWithCookies() {

                const cookiesString = await fs.readFile('./generalConfigs/cookies.json')
                const cookies = JSON.parse(cookiesString)
                await page.setCookie(...cookies)

                try {
                    
                    await page.goto('https://br.linkedin.com/in/jonathancasagrande', { waitUntil: 'networkidle0' })

                } catch (error) { 1 + 1 }

            }

        }

        async function loginWithoutCookies() {

            await page.goto('https://br.linkedin.com/in/jonathancasagrande', { waitUntil: 'networkidle0' })

            for (let i = 0; i < 1; i++) {

                await checkIfSignUpPage()

                await checkIfTwoStepAutentication()

                // await checkIfStandardSignInPage()

                // await checkIfVerificationPage()

                // i++

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

    }

    async function visitAndGetPDFs() {

        for (let i = 0; i < candidates.length; i++) {
            const startLoopTimeMarker = Date.now()
            loopedProfile = candidates[i]

            await waitTenSeconds()
            await waitTenSeconds()

            if (await currentURL != loopedProfile) { await page.goto(loopedProfile) }

            await waitTenSeconds()

            await downloadPDF()

            await timeLoopEnd()

            // the functions 🔽

            async function downloadPDF() {

                await page.evaluate(`document.querySelectorAll('span[class="display-flex t-normal pv-s-profile-actions__label"]')[1].click()`)

                await waitThreeSeconds()
                await waitThreeSeconds()
                await waitThreeSeconds()

                try {
                    
                    await page.waitForSelector('li[class="artdeco-toast-item artdeco-toast-item--visible ember-view"]', {timeout: 5000})

                    await waitTenSeconds()

                } catch (error) { await waitOneMinute(); await page.evaluate(`document.querySelectorAll('span[class="display-flex t-normal pv-s-profile-actions__label"]')[1].click()`) }

            }

            async function timeLoopEnd() {
                
                const endingLoopTimeMarker = Date.now()
                await console.log(`Loop ${i} executed in`, Math.ceil(((endingLoopTimeMarker - startLoopTimeMarker) / 1000) / 60) + ' minutes');

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
        const endingWholeApplicationTimeMarker = Date.now()
        await console.log('whole application executed in', Math.ceil(((endingWholeApplicationTimeMarker - startWholeApplicationTimeMarker) / 1000) / 60) + ' minutes');

        await browser.close()
    }

}
readProfiles()