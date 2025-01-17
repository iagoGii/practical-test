const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalStudio: true,
    defaultCommandTimeout: 10000,
    video: true, // Habilita gravação de vídeo
    screenshotsFolder: 'cypress/screenshots', // Pasta para capturas de tela
    videosFolder: 'cypress/videos', // Pasta para vídeos
    screenshotOnRunFailure: true, // Captura de tela em falhas
  },
});