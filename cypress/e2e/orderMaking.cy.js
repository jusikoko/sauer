describe('order making',() => {
    it("create an order", () => {
        cy.viewport(1920,1080)
        cy.visit("https://mingle-portal.eu1.inforcloudsuite.com/v2/EGQXR2U9AN2M32GQ_TRN")
        cy.get('[id="username"]').type('julia.chmelyk@gmail.com')
        cy.get('[id="pass"]').type('Uk78VFtg123!')
        cy.get('[class="ping-button normal allow"]').click()
        cy.get('[id="osp-nav-launcher"]').click()
        cy.contains('Sauer & Sohn LN TRN').click()
        cy.wait(6000)
        // cy.get('[id="sysmesdialog-button-n0-label"]').click()     
        cy.get('[class="SideApplicationNavScroll"]')
        .contains('Service') // Find the element containing the specified text
        .click(); 
    })
})