## Learn backend

### Day-1:
- Started learning from roadmap.sh.
- Topics covered:
  - Introduction.
  - Whats node.js?
  - Why use node.js?
  - History of node.js. -> Node.js was written initially by Ryan Dahl in 2009. Now it is maintained by the Node.js Foundation.
  - node.js vs browser. -> node.js is a runtime environment for executing JavaScript code on the server-side. e.g. Printed Welcome to node world!! on browser.
  - Running node.js code. -> created index.ts file & used http module to create a server.
  - Modules. -> created log.ts file & used it in index.ts.
  - Creating & importing -> imported log.ts file in index.ts used logInfo function to log messages.
  - \[global\] keyword. -> In browsers we have window object but in node.js we have only top-level scope in same module.

- #### Exercises:
  - Created a simple server using index.js & log.ts where I used http module to create a server & logInfo function to log messages. Also, I used chalk module to log messages in different colors.

---

### Day-2:
- Topics covered:
    - npx -> npx is a tool that allows you to run a package without installing it first.
    - Installation Packages:
      - Global installation -> You can install a package globally using the -g flag.
      - Local installation -> You can install a package locally using the --save flag.
    - Updating packages -> You can update a package using the -g flag, npm update <package-name>.
    - Running scripts -> You can run a script using the run flag, npm run <script-name> in package.json.
    - npm workspaces -> npm workspaces is a feature that allows you to manage multiple packages in a single repository.
    - Creating packages - need to cover this more
    - Introduction to npm -> npm is a package manager for Node.js.
    - Semantic Versioning - need to learn detailed
    - Writing Async code
      - Promises -> Promise is an object that may produce a single value some time in the future.
- #### Exercises:
  - Created Fake user GET /api/users API. used fakerjs to generate fake users. -> [day-2.0.js](/day-2.0.js)
  - Created a day-2.1 server with expressjs + postgresql + dotenvx + pg + cors, and created a POST & GET API for users -> [day-2.1.js](/day-2.1.js).