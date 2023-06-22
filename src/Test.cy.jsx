import React from 'react'
import Test from './Test.jsx'

describe('<Test />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Test />)
  })
})