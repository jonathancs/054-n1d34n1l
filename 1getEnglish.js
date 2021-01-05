// packages
const puppeteer = require('puppeteer')
const fs = require('fs').promises

// files
const credentials = require('./configs/credentials.json')
let candidates = require('./configs/candidates.js')


async function initiate() {


	const startTimeMarker = Date.now()
	let browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] })
	let page = await browser.newPage()
	await standardConfiguration()

	// await greaterMonitorView()
	await mediumMonitorView()
	// await notebookSizeView()


	/*==========   calls to be done   ===========*/

	await login()

	await catchRedirect()

	await prepareProfile()

	await searchEnglishOnProfiles()

	await close()



	/*======   DOCUMENTATION   ======*/




	// effective functions

	async function searchEnglishOnProfiles() {
		for (let i = 0; i < candidates.length; i++) {
			let loopedProfile = candidates[i]

			await waitThreeSeconds()
			await waitThreeSeconds()

			if (await currentURL != loopedProfile) { await page.goto(loopedProfile) }
			await console.log(currentURL)


			await waitTenSeconds()

			await autoScrollPage(page)

			await waitThreeSeconds()

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
			let checkEnglish28 = await page.evaluate('(document.body.innerText.match(/inglês: avançado/igm) || []).length')
			let checkEnglish29 = await page.evaluate('(document.body.innerText.match(/ingles: avançado/igm) || []).length')

			let englishDetector = []

			if (checkEnglish1) { englishDetector.push(checkEnglish1) }
			if (checkEnglish2) { englishDetector.push(checkEnglish2) }
			if (checkEnglish3) { englishDetector.push(checkEnglish3) }
			if (checkEnglish4) { englishDetector.push(checkEnglish4) }
			if (checkEnglish5) { englishDetector.push(checkEnglish5) }
			if (checkEnglish6) { englishDetector.push(checkEnglish6) }
			if (checkEnglish7) { englishDetector.push(checkEnglish7) }
			if (checkEnglish8) { englishDetector.push(checkEnglish8) }
			if (checkEnglish9) { englishDetector.push(checkEnglish9) }
			if (checkEnglish10) { englishDetector.push(checkEnglish10) }
			if (checkEnglish11) { englishDetector.push(checkEnglish11) }
			if (checkEnglish12) { englishDetector.push(checkEnglish12) }
			if (checkEnglish13) { englishDetector.push(checkEnglish13) }
			if (checkEnglish14) { englishDetector.push(checkEnglish14) }
			if (checkEnglish15) { englishDetector.push(checkEnglish15) }
			if (checkEnglish16) { englishDetector.push(checkEnglish16) }
			if (checkEnglish17) { englishDetector.push(checkEnglish17) }
			if (checkEnglish18) { englishDetector.push(checkEnglish18) }
			if (checkEnglish19) { englishDetector.push(checkEnglish19) }
			if (checkEnglish20) { englishDetector.push(checkEnglish20) }
			if (checkEnglish21) { englishDetector.push(checkEnglish21) }
			if (checkEnglish22) { englishDetector.push(checkEnglish22) }
			if (checkEnglish23) { englishDetector.push(checkEnglish23) }
			if (checkEnglish24) { englishDetector.push(checkEnglish24) }
			if (checkEnglish25) { englishDetector.push(checkEnglish25) }
			if (checkEnglish26) { englishDetector.push(checkEnglish26) }
			if (checkEnglish27) { englishDetector.push(checkEnglish27) }
			if (checkEnglish28) { englishDetector.push(checkEnglish28) }
			if (checkEnglish29) { englishDetector.push(checkEnglish29) }

			try {

				let checkEnviarMensagem = await page.evaluate('(document.body.innerText.match(/Enviar mensagem/igm) || []).length')

			} catch (err) { console.log(err.stack + '\n\n') }

			try {

				getActualJobPeriod1 = await page.evaluate('document.querySelector("#experience-section > ul").children[0].children[0].children[0].children[0].children[0].children[1].children[1].children[1].innerText')

			} catch (err) { console.log("couldn't find getActualJobPeriod1"+ '\n\n') }

			try {

				getActualJobPeriod2 = await page.evaluate('document.querySelector("#experience-section > ul").children[0].children[0].children[0].children[0].children[0].children[1].children[3].children[1].children[1].innerText')

			} catch (err) { console.log("couldn't find getActualJobPeriod2"+ '\n\n') }



			if (englishDetector.length != 0) {

				await fs.appendFile('./results/withEnglish', loopedProfile + '\n')

				if (getActualJobPeriod1) { fs.appendfile('./results/withEnglish', getActualJobPeriod1 + '\n') }

				if (getActualJobPeriod2) { fs.appendfile('./results/withEnglish', getActualJobPeriod2 + '\n') }

				if (checkEnviarMensagem) { fs.appendfile('./results/withEnglish', checkEnviarMensagem + '\n') }

			} else {

				await fs.appendFile('./results/noEnglish', loopedProfile + '\n')

				if (getActualJobPeriod1) { fs.appendfile('./results/noEnglish', getActualJobPeriod1 + '\n') }

				if (getActualJobPeriod2) { fs.appendfile('./results/noEnglish', getActualJobPeriod2 + '\n') }

				if (checkEnviarMensagem) { fs.appendfile('./results/noEnglish', checkEnviarMensagem + '\n') }

			}

		}

	}

	async function login() {

		await page.goto('https://br.linkedin.com/in/jonathancasagrande', { waitUntil: 'networkidle0' })

		await checkIfSignUpPage()

		await checkIfStandardSignInPage()

		await checkIfVerificationPage()

		async function checkIfSignUpPage() {

			try {

				await page.waitForSelector('body > main > div > div > form.join-form > section > p > a', { timeout: 10000 })
				await page.click("body > main > div > div > form.join-form > section > p > a")

				await waitOneSecond()

				await insertFirstDetourCredentials()

				await page.waitForSelector('#ember24', { timeout: 10000 })

			} catch (error) { console.log("10 seconds have past. Wasn't the register page. Or couldn't load to the feeds page." + '\n\n') }


		}

		async function checkIfVerificationPage() {

			try {
				await page.waitForSelector('#app__container > header > div > div > nav > a.nav__button__muted--signin', { timeout: 10000 })

				await page.click('#app__container > header > div > div > nav > a.nav__button__muted--signin')

				await waitOneSecond()

				await insertSecondDetourCredentials()

			} catch (error) { console.log("10 seconds have past. Wasn't the verification page" + '\n\n') }

		}

		async function checkIfStandardSignInPage() {

			try {
				await page.waitForSelector('username', { timeout: 10000 })

				await insertSecondDetourCredentials()

			} catch (error) { console.log("10 seconds have past. Wasn't the SIGN IN page" + '\n\n') }




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

	}

	async function catchRedirect() {

		await checkIfStandardSignInPage()

		async function checkIfStandardSignInPage() {

			console.log('entered in checkIfStandardSignInPage')

			try {
				await page.waitForSelector('#username', { timeout: 5000 })

				await insertSecondDetourCredentials()

			} catch (error) { console.log("5 seconds have past. Wasn't the SIGN IN page" + '\n\n') }
		}


	}

	async function prepareProfile() {

		await showMoreBioInfos()
		await showMoreFirstExperienceInfos()
		await showMoreExperiences()

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

			} catch (error) { console.log('\n' + error + '\n\n') }

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

initiate()