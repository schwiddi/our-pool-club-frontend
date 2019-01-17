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

describe('My First Test', function () {
  it('Checks out my Pool Table site', function () {
    cy.visit('http://localhost:3000/')
    cy.contains('hello world')
  })

})