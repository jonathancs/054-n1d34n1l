/* 

for some reason, all the getting info functions didn't worked

loopedprofile in RESULTS also didn't worked.


*/


// packages
const puppeteer = require('puppeteer')
const fs = require('fs').promises

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

	await login()

	await prepareProfile()

	await searchEnglishOnProfiles()

	await searchSkillWords()

	await writeResults()

	await close()



	/*======   DOCUMENTATION   ======*/




	// effective functions

	async function searchEnglishOnProfiles() {
		for (let i = 0; i < candidates.length; i++) {
			loopedProfile = candidates[i]
			englishDetector = []

			await waitThreeSeconds()
			await waitThreeSeconds()

			if (await currentURL != loopedProfile) { await page.goto(loopedProfile) }
			await console.log(currentURL)


			await waitTenSeconds()

			await autoScrollPage(page)

			await waitThreeSeconds()

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

	}

	async function searchSkillWords() {

		await fs.appendFile('./results/lookedProfiles', 'loopedProfile' + '\n')

		await page.screenshot({ path: `./prints/${numeroDaScreenshot}.png` }, 'section[id="experience-section"]')

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

	async function login() {

		await page.goto('https://br.linkedin.com/in/jonathancasagrande', { waitUntil: 'networkidle0' })

		await checkIfSignUpPage()

		await checkIfStandardSignInPage()

		await checkIfVerificationPage()

		await catchRedirect()

		// url ?  element ?

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

		async function catchRedirect() {

			console.log('entered in catchRedirect')
			/* 
			
			eu efetuo o login, e o site me impede de logar.
			
			esta parte do código era para tentar logar de novo
			dessa 2a landing page que vai aparecer à esquerda <==
			mas parece que bloquearam minha ferramenta de automação (puppeteer).
			
			*/

			try {

				await page.type('#username', credentials.email, { delay: 30 })
				await page.type('#password', credentials.password, { delay: 30 })

				// Click Login Button
				await page.click('#app__container > main > div:nth-child(3) > form > div.login__form_action_container > button', { delay: 1000 })

			} catch (error) { console.log("unable to insert credentials" + '\n\n') }
		}

	}

	async function prepareProfile() {

		await autoScrollPage(page)

		await showMoreBioInfos()
		await showMoreExperienceInfos()
		await showMoreProfileInfos()

		/* *** */

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

	async function writeResults() {

		await writeTitle()

		await writeActualJobTitle()

		await writeEnglishResults()

		await writeSkills()

		await writeIfAlreadyConnection()




		async function writeTitle() { }

		async function writeActualJobTitle() { }

		async function writeEnglishResults() {

			if (checkEnglish1) { fs.appendFile('./results/lookedProfiles', 'advanced english ' + checkEnglish1 + ' ') }
			if (checkEnglish2) { fs.appendFile('./results/lookedProfiles', 'fluent english ' + checkEnglish2 + ' ') }
			if (checkEnglish3) { fs.appendFile('./results/lookedProfiles', 'fluent on english ' + checkEnglish3 + ' ') }
			if (checkEnglish4) { fs.appendFile('./results/lookedProfiles', 'fluent in english ' + checkEnglish4 + ' ') }
			if (checkEnglish5) { fs.appendFile('./results/lookedProfiles', 'fluent with english ' + checkEnglish5 + ' ') }
			if (checkEnglish6) { fs.appendFile('./results/lookedProfiles', 'avançado de ingles ' + checkEnglish6 + ' ') }
			if (checkEnglish7) { fs.appendFile('./results/lookedProfiles', 'avançado de inglês ' + checkEnglish7 + ' ') }
			if (checkEnglish8) { fs.appendFile('./results/lookedProfiles', 'inglês avançado ' + checkEnglish8 + ' ') }
			if (checkEnglish9) { fs.appendFile('./results/lookedProfiles', 'ingles avançado ' + checkEnglish9 + ' ') }
			if (checkEnglish10) { fs.appendFile('./results/lookedProfiles', 'ingles fluente ' + checkEnglish10 + ' ') }
			if (checkEnglish11) { fs.appendFile('./results/lookedProfiles', 'inglês fluente ' + checkEnglish11 + ' ') }
			if (checkEnglish12) { fs.appendFile('./results/lookedProfiles', 'fluente de ingles ' + checkEnglish12 + ' ') }
			if (checkEnglish13) { fs.appendFile('./results/lookedProfiles', 'fluente de inglês ' + checkEnglish13 + ' ') }
			if (checkEnglish14) { fs.appendFile('./results/lookedProfiles', 'fluente com inglês ' + checkEnglish14 + ' ') }
			if (checkEnglish15) { fs.appendFile('./results/lookedProfiles', 'fluente com ingles ' + checkEnglish15 + ' ') }
			if (checkEnglish16) { fs.appendFile('./results/lookedProfiles', 'fluente em inglês ' + checkEnglish16 + ' ') }
			if (checkEnglish17) { fs.appendFile('./results/lookedProfiles', 'fluente em ingles ' + checkEnglish17 + ' ') }
			if (checkEnglish18) { fs.appendFile('./results/lookedProfiles', 'ESL ' + checkEnglish18 + ' ') }
			if (checkEnglish19) { fs.appendFile('./results/lookedProfiles', 'english on daily basis ' + checkEnglish19 + ' ') }
			if (checkEnglish20) { fs.appendFile('./results/lookedProfiles', 'english second language ' + checkEnglish20 + ' ') }
			if (checkEnglish21) { fs.appendFile('./results/lookedProfiles', 'english as second language ' + checkEnglish21 + ' ') }
			if (checkEnglish22) { fs.appendFile('./results/lookedProfiles', 'ingles como segunda lingua ' + checkEnglish22 + ' ') }
			if (checkEnglish23) { fs.appendFile('./results/lookedProfiles', 'inglês como segunda lingua ' + checkEnglish23 + ' ') }
			if (checkEnglish24) { fs.appendFile('./results/lookedProfiles', 'exchange ' + checkEnglish24 + ' ') }
			if (checkEnglish25) { fs.appendFile('./results/lookedProfiles', 'interchang ' + checkEnglish25 + ' ') }
			if (checkEnglish26) { fs.appendFile('./results/lookedProfiles', 'nível avançado ' + checkEnglish26 + ' ') }
			if (checkEnglish27) { fs.appendFile('./results/lookedProfiles', 'nivel avançado ' + checkEnglish27 + ' ') }
			if (checkEnglish28) { fs.appendFile('./results/lookedProfiles', 'inglês: avançado ' + checkEnglish28 + ' ') }
			if (checkEnglish29) { fs.appendFile('./results/lookedProfiles', 'ingles: avançado ' + checkEnglish29 + '\n') }



		}

		async function writeSkills() {

			if (dotnet) { await fs.appendfile('./results/lookedProfiles', '.net ' + dotnet + '\n') }
			if (dotnetCore) { await fs.appendfile('./results/lookedProfiles', '.net core ' + dotnetCore + '\n') }
			if (cSharpCapitalized) { await fs.appendfile('./results/lookedProfiles', 'C# ' + cSharpCapitalized + '\n') }
			if (cSharp) { await fs.appendfile('./results/lookedProfiles', 'c# ' + cSharp + '\n') }
			if (angular) { await fs.appendfile('./results/lookedProfiles', 'angular ' + angular + '\n') }
			if (react) { await fs.appendfile('./results/lookedProfiles', 'react ' + react + '\n') }
			if (automated) { await fs.appendfile('./results/lookedProfiles', 'automated ' + automated + '\n') }
			if (automation) { await fs.appendfile('./results/lookedProfiles', 'automation ' + automation + '\n') }
			if (salesforce) { await fs.appendfile('./results/lookedProfiles', 'salesforce ' + salesforce + '\n') }
			if (salesforceCore) { await fs.appendfile('./results/lookedProfiles', 'salesforceCore ' + salesforceCore + '\n') }
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

				checkEnviarMensagem = await page.evaluate('(document.body.innerText.match(/Enviar mensagem/igm) || []).length')

				if (checkEnviarMensagem) { fs.appendFile('./results/lookedProfiles', 'já é conexão' + '\n') }

			} catch (err) { console.log('its not connection' + '\n') }

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

/*

exclude from time in actual company

write
his title
job title 1
english
quantas vezes cada tecnologia
enviar mensagem



*/