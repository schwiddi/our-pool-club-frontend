// describe('My First Test', function () {
//   it('Does not do much!', function () {
//     expect(true).to.equal(true)
//   })
// })

// describe('My Second Test', function () {
//   it('Does not do much!', function () {
//     expect(true).to.equal(false)
//   })
// })

describe('some init test', function () {
  it('checks hellow world h1 is there', function () {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('hello world')
  })
  it('checks that some more p is there', function () {
    cy.get('p').contains('some more')
  })
})