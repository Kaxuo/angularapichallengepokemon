describe("Demo", () => {
  context("Carousel", () => {
    beforeEach(() => {
      cy.visit("https://grafikart.fr/demo/JS/Carousel/index.html");
    });

    it("slide to the next item", () => {
      cy.get("#carousel0 > .carousel > .carousel__next").as("next");
      cy.get(
        "#carousel0 > .carousel > .carousel__container > :nth-child(1) > .item > .item__body"
      ).as("slide1");
      cy.get(
        "#carousel0 > .carousel > .carousel__container > :nth-child(5) > .item > .item__body"
      ).as("slide5");
      cy.get("@slide1").should((slide) => {
        console.log(slide);
        expect(slide[0].getBoundingClientRect().left).to.be.greaterThan(0);
        expect(slide[0].getBoundingClientRect().left).to.be.lessThan(1280);
      });
      cy.get("@slide5").should((slide) => {
        expect(slide[0].getBoundingClientRect().left).to.be.greaterThan(1000);
      });
      cy.get("#carousel0 > .carousel > .carousel__next").as("next").click();
      cy.get("@slide1").should((slide) => {
        expect(slide[0].getBoundingClientRect().left).to.be.lessThan(0);
      });
      cy.get("@slide5").should((slide) => {
        expect(slide[0].getBoundingClientRect().left).to.be.greaterThan(0);
        expect(slide[0].getBoundingClientRect().left).to.be.lessThan(1280);
      });
    });
  });
});
