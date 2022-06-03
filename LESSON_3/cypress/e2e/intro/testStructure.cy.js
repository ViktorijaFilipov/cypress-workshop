/// <reference types="Cypress" />

describe('My First Test', () => {
  before(() => {
    // runs once before all tests in the block
  });

  beforeEach(() => {
    // runs before each test in the block
  });

  it('Does not do much!', () => {
    cy.visit('/automation-practice-form');
    expect(true).to.equal(true);
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  afterEach(() => {
    // runs after each test in the block
  });

  after(() => {
    // runs once after all tests in the block
  });
});
