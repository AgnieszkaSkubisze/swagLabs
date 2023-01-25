import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    watchForFileChanges: true,
    chromeWebSecurity: false,
    env: {
      standardUserName: 'standard_user',
      locked_out_user: 'locked_out_user',
      problem_user: 'problem_user',
      performance_glitch_user:'performance_glitch_user',
      password: 'secret_sauce'
    },
  },
  defaultCommandTimeout: 15000
});
