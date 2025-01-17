/// <reference types="Cypress" />

context('Swaps', () => {
  beforeEach(() => {
    window.localStorage.setItem('show_demo_modal', 'false')
    window.localStorage.setItem('wallet_address', Cypress.env('WALLET_ADDRESS'))
    window.localStorage.setItem('private_key', Cypress.env('PRIVATE_KEY'))
    cy.visit(Cypress.env('HOST'))
  })
  it('Can add buy swap successfully', () => {
    cy.window().then(win => {
      cy.spy(win.nocustManager, 'sendSwap').as('sendSwap')
      cy.wait(10000)
      cy.get('input[id="limit_price"]')
        .eq(0)
        .type('0.001')
      cy.get('input[id="order_amount"]')
        .eq(0)
        .type('0.001')
      cy.get('button[id="order_button"]')
        .eq(0)
        .click()
      cy.get('@sendSwap', { timeout: 5000 }).should('be.called')
      cy.get('@sendSwap', { timeout: 5000 })
        .then({ timeout: 40000 }, arr => arr.getCall(0).returnValue)
        .should('not.be.false')
      cy.wait(5000)
    })
  })
  it('Can add sell swap successfully', () => {
    cy.window().then(win => {
      cy.spy(win.nocustManager, 'sendSwap').as('sendSwap')
      cy.get('button[id="sell_order-tab"]').click()
      cy.get('input[id="limit_price"]')
        .eq(1)
        .type('0.001')
      cy.get('input[id="order_amount"]')
        .eq(1)
        .type('0.001')
      cy.get('button[id="order_button"]')
        .eq(1)
        .click()
      cy.get('@sendSwap', { timeout: 5000 }).should('be.called')
      cy.get('@sendSwap', { timeout: 5000 })
        .then({ timeout: 40000 }, arr => arr.getCall(0).returnValue)
        .should('not.be.false')
      cy.wait(5000)
    })
  })

  it('Should show errors if empty values', () => {
    cy.get('input[id="limit_price"]')
      .eq(0)
      .focus()
    cy.get('input[id="order_amount"]')
      .eq(0)
      .focus()
    cy.get('button[id="order_button"]')
      .eq(0)
      .click()
    cy.wait(5000)
  })

  it('Should show errors if value is greater than balance', () => {
    cy.get('input[id="limit_price"]')
      .eq(0)
      .type('1000000')
    cy.get('input[id="order_amount"]')
      .eq(0)
      .type('200000')
    cy.get('button[id="order_button"]')
      .eq(0)
      .click()
    cy.wait(5000)
  })

  it('Should show errors if value is negative', () => {
    cy.get('input[id="limit_price"]')
      .eq(0)
      .type('-0.1')
    cy.get('input[id="order_amount"]')
      .eq(0)
      .type('-0.1')
    cy.get('button[id="order_button"]')
      .eq(0)
      .click()
    cy.wait(5000)
  })
})
