import { searchInput, searchButton } from '../../fixtures/main.json'
import { firstResult } from '../../fixtures/search.json'

describe('When the user is trying to search a football API page', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com')
    cy.get(searchInput).type('The dev-friendly football API')
    cy.get(searchButton).click()
  })

  it('Then the first page is https://www.football-data.org/', () => {
    cy.get(firstResult).click()
    cy.url().should('eq', 'https://www.football-data.org/')
  })
})
