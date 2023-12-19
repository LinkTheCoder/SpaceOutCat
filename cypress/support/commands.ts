/// <reference types="cypress" />
// ***********************************************
declare namespace Cypress {
    interface Chainable {
      loginByGoogleApi(): Chainable<any>;
    }
  }
  
Cypress.Commands.add('loginByGoogleApi', () => {
    cy.log('Logging in to Google');
  
    const clientId =  Cypress.env('CYPRESS_GOOGLE_CLIENTID');
    const clientSecret = Cypress.env('CYPRESS_GOOGLE_CLIENT_SECRET');
    const refreshToken = Cypress.env('CYPRESS_GOOGLE_REFRESH_TOKEN');
  
    cy.log('Client ID:', clientId);
    cy.log('Client Secret:', clientSecret);
    cy.log('Refresh Token:', refreshToken);
  
    cy.request({
        method: 'POST',
        url: 'https://www.googleapis.com/oauth2/v4/token',
        body: {
          grant_type: 'refresh_token',
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
        },
        failOnStatusCode: false, // Allows non-2xx responses
      }).then((response) => {
        cy.log('Token Response:', response);
    
        // Log the current state of localStorage
        cy.window().then((win) => {
          console.log('Current localStorage:', win.localStorage);
        });
    
        if (response.status === 200) {
          const { access_token, id_token } = response.body;
    
          cy.request({
            method: 'GET',
            url: 'https://www.googleapis.com/oauth2/v3/userinfo',
            headers: { Authorization: `Bearer ${access_token}` },
          }).then(({ body }) => {
            cy.log('User Info Response:', body);
    
            const userItem = {
              token: id_token,
              user: {
                googleId: body.sub,
                email: body.email,
                givenName: body.given_name,
                familyName: body.family_name,
              },
            };
    
            window.localStorage.setItem('googleCypress', JSON.stringify(userItem));
          });
        } else {
          cy.log('Failed to obtain access token:', response.body);
        }
      });
    });