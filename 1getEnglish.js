const puppeteer = require('puppeteer')
const credentials = require('./configs/credentials.json')
const cookies = require('./configs/cookies.json')
const fs = require('fs').promises
const candidates = require('./configs/candidates')
const englishWordsSearch = require('./configs/englishWordsToBeSearched')
const skillWordsSearch = require('./configs/skillWordsToBeSearched')


async function getEnglish() {

	/*==========   calls to be done   ===========*/

	const startTimeMarker = Date.now()
	let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] })
	let page = await browser.newPage()


	await standardConfiguration()

	await login()

	await searchEnglishOnProfiles()

	await runTimerCount()

	// await end()


	/*==========   End of Calls   ===========*/
	/*===   bellow is the documentation   ===*/



	async function standardConfiguration() {



		let currentURL = page.url

		await page.setDefaultNavigationTimeout(0)

		await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1, }) // greater monitor
		// await page.setViewport({ width: 1270, height: 768, deviceScaleFactor: 1, }); // medium monitor

		let context = browser.defaultBrowserContext()
		context.overridePermissions("https://linkedin.com", ["geolocation", "notifications"]) // An array of permissions

	}

	async function login() {

		await page.goto('https://br.linkedin.com/in/jonathancasagrande', { waitUntil: 'networkidle0' })

		await checkIfSignUpPage()

		await checkIfVerificationPage()

	}

	async function checkIfSignUpPage() {

		try {

			await page.waitForSelector('body > main > div > div > form.join-form > section > p > a', { timeout: 10000 })

			await page.waitForSelector("body > main > div > div > form.join-form > section > p > a")
			await page.click("body > main > div > div > form.join-form > section > p > a")

			await waitOneSecond()

			await insertFirstDetourCredentials()

			await page.waitForSelector('#ember24', { timeout: 0 })
			
		} catch (error) { console.log('\n' + error + '\n' + " it wasn't the sign up page.") }


	}

	async function checkIfVerificationPage () {

		try {
			await page.waitForSelector('#app__container > header > div > div > nav > a.nav__button__muted--signin', {timeout: 7000})

			await page.click('#app__container > header > div > div > nav > a.nav__button__muted--signin')

			await waitOneSecond()

			await insertSecondDetourCredentials()

		} catch (error) {console.log('\n' + error + '\n' + " it wasn't the verification page") }

	}

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

	async function runTimerCount() {
		const endingTimeMarker = Date.now()

		await console.log('executed in', Math.ceil(((endingTimeMarker - startTimeMarker) / 1000) / 60) + ' minutes');
	}

	async function end() {
		await browser.close()
	}

	async function searchEnglish() {
		let checkEnglish1 = await page.evaluate('(document.body.innerText.match(/advanced english/igm) || []).length')
		let checkEnglish2 = await page.evaluate('(document.body.innerText.match(/fluent english/igm) || []).length')
		let checkEnglish3 = await page.evaluate('(document.body.innerText.match(/fluent on english/igm) || []).length')
		let checkEnglish4 = await page.evaluate('(document.body.innerText.match(/fluent in english/igm) || []).length')
		let checkEnglish5 = await page.evaluate('(document.body.innerText.match(/fluent with english/igm) || []).length')
		let checkEnglish6 = await page.evaluate('(document.body.innerText.match(/avançado de ingles/igm) || []).length')
		let checkEnglish7 = await page.evaluate('(document.body.innerText.match(/avançado de inglês/igm) || []).length')
		let checkEnglish8 = await page.evaluate('(document.body.innerText.match(/inglês avançado/igm) || []).length')
		let checkEnglish9 = await page.evaluate('(document.body.innerText.match(/ingles avançado/igm) || []).length')
		let checkEnglish10 = await page.evaluate('(document.body.innerText.match(/ingles fluente/igm) || []).length')
		let checkEnglish11 = await page.evaluate('(document.body.innerText.match(/inglês fluente/igm) || []).length')
		let checkEnglish12 = await page.evaluate('(document.body.innerText.match(/fluente de ingles/igm) || []).length')
		let checkEnglish13 = await page.evaluate('(document.body.innerText.match(/fluente de inglês/igm) || []).length')
		let checkEnglish14 = await page.evaluate('(document.body.innerText.match(/fluente com inglês/igm) || []).length')
		let checkEnglish15 = await page.evaluate('(document.body.innerText.match(/fluente com ingles/igm) || []).length')
		let checkEnglish16 = await page.evaluate('(document.body.innerText.match(/fluente em inglês/igm) || []).length')
		let checkEnglish17 = await page.evaluate('(document.body.innerText.match(/fluente em ingles/igm) || []).length')
		let checkEnglish18 = await page.evaluate('(document.body.innerText.match(/ESL/igm) || []).length')
		let checkEnglish19 = await page.evaluate('(document.body.innerText.match(/english on daily basis/igm) || []).length')
		let checkEnglish20 = await page.evaluate('(document.body.innerText.match(/english second language/igm) || []).length')
		let checkEnglish21 = await page.evaluate('(document.body.innerText.match(/english as second language/igm) || []).length')
		let checkEnglish22 = await page.evaluate('(document.body.innerText.match(/ingles como segunda lingua/igm) || []).length')
		let checkEnglish23 = await page.evaluate('(document.body.innerText.match(/inglês como segunda lingua/igm) || []).length')
		let checkEnglish24 = await page.evaluate('(document.body.innerText.match(/exchange/igm) || []).length')
		let checkEnglish25 = await page.evaluate('(document.body.innerText.match(/interchang/igm) || []).length')
		let checkEnglish26 = await page.evaluate('(document.body.innerText.match(/nível avançado/igm) || []).length')
		let checkEnglish27 = await page.evaluate('(document.body.innerText.match(/nivel avançado/igm) || []).length')


		if (checkEnglish1) { fs.appendFile('./results/cdtsLinks', 'advanced english' + ' ' + checkEnglish1 + '\n') }
		if (checkEnglish2) { fs.appendFile('./results/cdtsLinks', 'fluent english' + ' ' + checkEnglish2 + '\n') }
		if (checkEnglish3) { fs.appendFile('./results/cdtsLinks', 'fluent on english' + ' ' + checkEnglish3 + '\n') }
		if (checkEnglish4) { fs.appendFile('./results/cdtsLinks', 'fluent in english' + ' ' + checkEnglish4 + '\n') }
		if (checkEnglish5) { fs.appendFile('./results/cdtsLinks', 'fluent with english' + ' ' + checkEnglish5 + '\n') }
		if (checkEnglish6) { fs.appendFile('./results/cdtsLinks', 'avançado de ingles' + ' ' + checkEnglish6 + '\n') }
		if (checkEnglish7) { fs.appendFile('./results/cdtsLinks', 'avançado de inglês' + ' ' + checkEnglish7 + '\n') }
		if (checkEnglish8) { fs.appendFile('./results/cdtsLinks', 'inglês avançado' + ' ' + checkEnglish8 + '\n') }
		if (checkEnglish9) { fs.appendFile('./results/cdtsLinks', 'ingles avançado' + ' ' + checkEnglish9 + '\n') }
		if (checkEnglish10) { fs.appendFile('./results/cdtsLinks', 'ingles fluente' + ' ' + checkEnglish10 + '\n') }
		if (checkEnglish11) { fs.appendFile('./results/cdtsLinks', 'inglês fluente' + ' ' + checkEnglish11 + '\n') }
		if (checkEnglish12) { fs.appendFile('./results/cdtsLinks', 'fluente de ingles' + ' ' + checkEnglish12 + '\n') }
		if (checkEnglish13) { fs.appendFile('./results/cdtsLinks', 'fluente de inglês' + ' ' + checkEnglish13 + '\n') }
		if (checkEnglish14) { fs.appendFile('./results/cdtsLinks', 'fluente com inglês' + ' ' + checkEnglish14 + '\n') }
		if (checkEnglish15) { fs.appendFile('./results/cdtsLinks', 'fluente com ingles' + ' ' + checkEnglish15 + '\n') }
		if (checkEnglish16) { fs.appendFile('./results/cdtsLinks', 'fluente em inglês' + ' ' + checkEnglish16 + '\n') }
		if (checkEnglish17) { fs.appendFile('./results/cdtsLinks', 'fluente em ingles' + ' ' + checkEnglish17 + '\n') }
		if (checkEnglish18) { fs.appendFile('./results/cdtsLinks', 'ESL' + ' ' + checkEnglish18 + '\n') }
		if (checkEnglish19) { fs.appendFile('./results/cdtsLinks', 'english on daily basis' + ' ' + checkEnglish19 + '\n') }
		if (checkEnglish20) { fs.appendFile('./results/cdtsLinks', 'english second language' + ' ' + checkEnglish20 + '\n') }
		if (checkEnglish21) { fs.appendFile('./results/cdtsLinks', 'english as second language' + ' ' + checkEnglish21 + '\n') }
		if (checkEnglish22) { fs.appendFile('./results/cdtsLinks', 'ingles como segunda lingua' + ' ' + checkEnglish22 + '\n') }
		if (checkEnglish23) { fs.appendFile('./results/cdtsLinks', 'inglês como segunda lingua' + ' ' + checkEnglish23 + '\n') }
		if (checkEnglish24) { fs.appendFile('./results/cdtsLinks', 'exchange' + ' ' + checkEnglish24 + '\n') }
		if (checkEnglish25) { fs.appendFile('./results/cdtsLinks', 'interchang' + ' ' + checkEnglish25 + '\n') }
		if (checkEnglish26) { fs.appendFile('./results/cdtsLinks', 'nível avançado' + ' ' + checkEnglish26 + '\n') }
		if (checkEnglish27) { fs.appendFile('./results/cdtsLinks', 'nivel avançado' + ' ' + checkEnglish27 + '\n') }
	}

	async function searchEnglishOnProfiles() {
		for (let i = 0; i < candidates.length; i++) {
			let candidateLink = candidates[i]

			await waitThreeSeconds()
			await waitThreeSeconds()

			await page.goto(candidateLink)

			await waitTenSeconds()

			await autoScrollPage(page)

			await waitThreeSeconds()

			await showMoreBioInfos()

			await showMoreFirstExperienceInfos()

			await showMoreExperiences() 

			await fs.appendFile('./results/cdtsLinks/', '\n' + candidateLink + '\n')

			await searchEnglish()

			await fs.appendFile('./results/cdtsLinks/', '\n')

		}



	}

	async function showMoreBioInfos() {

		try { // show more infos on BIO

			await page.click('#line-clamp-show-more-button')

		} catch (error) { console.log('\n' + error + '\n' + " button not find: see more Bio infos") }
	}

	async function showMoreFirstExperienceInfos() {

		try { // show more infos on EXPERIENCES

			await page.evaluate(() => {
				
				let allExperienceSeeMoreInfosButton = document.querySelectorAll('.pv-profile-section__see-more-inline')

				allExperienceSeeMoreInfosButton.forEach(btn => btn.click())

				// it just got the 1st element of the class, 
				
				// the solution is to [0].click()  [1].click()   [2].click()   .....   
			})

			await page.click('.inline-show-more-text__button')

		} catch (error) { console.log('\n' + error + '\n' + " button not find: see all experience infos") }

	}

	async function showMoreExperiences() {

		
		try { // show more experiences button
			await page.click("('.profile-detail').children[1].children[0].children[0].children[0].children[0].children[0].children[2].children[0]")

		} catch (error) { console.log('\n' + error + '\n' + " button not find: see more experiences") }

	}

}

getEnglish()