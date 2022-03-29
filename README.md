# Project Name: Woowbd Shipping websote
# Project Description
This website import products from the US and ship to the customers of Bangladesh.
# Help + Testing
The steps below will show how you can run and test this project.

> Step 1 ---
Install nodejs: (https://nodejs.org/en/download/)

> Step 2 ---
Install git: (https://github.com/git-guides/install-git#:~:text=To%20install%20Git%2C%20run%20the,installation%20by%20typing%3A%20git%20version%20.)

> Step 3 ---
Install VsCode: (https://code.visualstudio.com/docs/setup/windows)

> Step 4 ---
Install Cypress: (https://on.cypress.io/installing-cypress)

> Step 5 --- Fork this repository (https://docs.github.com/en/get-started/quickstart/fork-a-repo) it first.

> Step 6 --- Clone (https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

> Step 7 ---
You can unzip the project and open the project folder in VsCode

> Step 8 ---
Add the project to Cypress (https://on.cypress.io/writing-your-first-test)

> Step 9 ---
Run in Continuous Integration (https://on.cypress.io/continuous-integration)

# Custom Scripts
To run custom scripts, open terminal and write "npm run script name"

    "triggerAllTests-headless": "npx cypress run",
    
    "triggerAllTests-headed": "npx cypress run --headed",
    
    "triggerAllTests-chrome": "npx cypress run --browser chrome",
    
    "triggerAllTests-edge": "npx cypress run --browser edge",
    
    "triggerAllTests-firefox": "npx cypress run --browser firefox",
    
    "cypress-multi-browser": "npx cypress run --browser chrome --headed & npx cypress run --browser firefox --headed & npx cypress run --browser edge --headed",
    
    "triggerAllTests-dashboard": "npx cypress run --record --key 2d259669-8049-46e2-bbb0-746d8ea0124e",
    
    "triggerSpecificTests": "npx cypress run --spec cypress/integration/test_cases/*",
    
    "junit-merge": "npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml",
    
    "delete-junit-report": "rm -rf cypress/results/junit/results.xml",
    
    "delete-results": "rm -rf cypress/results/* || true",
    
    "mochawesome-merge": "npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json",
    
    "delete-mochawesome-separate-results": "rm -rf cypress/results/* || true",
    
    "delete-mochawesome-report": "rm -rf mochawesome-report/* || true",
    
    "cypress-regression-pack": "npm run delete-results && npm run delete-mochawesome-report && npm run triggerAllTests-headless && npm run mochawesome-merge",
    
    "cypress-retry": "CYPRESS_RETRIES=1 npm run triggerAllTests-headless"
