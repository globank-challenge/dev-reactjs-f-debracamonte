describe("<Home />", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
  });
  it("should displays the first four pokemon", () => {
    cy.get(".card__text").eq(0).should("have.text", "Bulbasaur");
    cy.get(".card__text").eq(1).should("have.text", "Ivysaur");
    cy.get(".card__text").eq(2).should("have.text", "Venusaur");
    cy.get(".card__text").eq(3).should("have.text", "Charmander");
  });
  it("should displays a pokemon Card when enters a correct pokemon name", () => {
    cy.get("input").should("be.visible").type("pikachu{enter}");
    cy.get(".detailCard").should("be.visible");
    cy.get(".detailCard__name").should("have.text", "Pikachu");
  });
  it("should displays an error message when enters an incorrect pokemon name", () => {
    cy.get("input").should("be.visible").type("gatochu{enter}");
    cy.wait(1000);
    cy.get(".searchbar__error").should("be.visible");
  });
  it("should displays a pokemon Card when clicks a pokemon", () => {
    cy.get(".card").first().should("be.visible").click();
    cy.get(".detailCard").should("be.visible");
    cy.get(".detailCard__name").should("have.text", "Bulbasaur");
  });
  it("previus buttom should be disabled on the first page", () => {
    cy.get(".button").first().should("be.disabled");
  });
  it("should render different pokemons when change the page", () => {
    cy.get(".card__text").eq(0).should("have.text", "Bulbasaur");
    cy.get(".card__text").eq(1).should("have.text", "Ivysaur");
    cy.get(".card__text").eq(2).should("have.text", "Venusaur");
    cy.get(".card__text").eq(3).should("have.text", "Charmander");
    cy.get(".button").eq(1).should("be.visible").click();
    cy.get(".loading").should("be.visible");
    cy.wait(1000);
    cy.get(".card__text").eq(0).should("have.text", "Charmeleon");
    cy.get(".card__text").eq(1).should("have.text", "Charizard");
    cy.get(".card__text").eq(2).should("have.text", "Squirtle");
    cy.get(".card__text").eq(3).should("have.text", "Wartortle");
  });
  it("previus button should be active if we are not in the first page", () => {
    cy.get(".button").eq(1).should("be.visible").click();
    cy.get(".loading").should("be.visible");
    cy.wait(1000);
    cy.get(".button").first().should("not.be.disabled").click();
    cy.wait(1000);
    cy.get(".card__text").eq(0).should("have.text", "Bulbasaur");
    cy.get(".card__text").eq(1).should("have.text", "Ivysaur");
    cy.get(".card__text").eq(2).should("have.text", "Venusaur");
    cy.get(".card__text").eq(3).should("have.text", "Charmander");
  });
});
