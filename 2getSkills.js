
	await searchSkillsOnProfiles()

    async function searchSkillsOnProfiles() {

	}

	async function searchWordsOnProfiles() {
		for (let i = 0; i < candidates.length; i++) {
			let candidateLink = candidates[i]

			await page.goto(candidateLink)

			await waitTenSeconds()

			await autoScroll(page)

			await waitThreeSeconds()



		}
	}
