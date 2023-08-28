## Setup for Code Contributions

### Prerequisites

##### MacOS
- XCode Command Line Tools `xcode-select --install`
- If you already have the full Xcode installed, go to menu `Xcode -> Open Developer Tool -> More Developer Tools....`
- Install Node.js >= 16

##### Windows
- Install current version of Python3
- Install Visual Studio Code and add the Microsoft C/C++ extension
- Install Node.js >= 16

##### Linux

- Install Python > 3.7
- Install `make`, `gcc`, and `g++`
- Install Node.js >= 16

#### Repository Setup
- Fork the project and uncheck the box that says "Copy the `main` branch only". This step is vital as you will not be able to checkout the beta branch if you do not deselect this option. If you accidentally left it checked. Delete the fork you just made and start over.
- Open a Terminal and navigate to where you want the project repository to exist
- Clone your forked repository
    ```sh
    git clone https://github.com/<your-github-user>/club_website.git
    ```
- Navigate into the root directory
    ```sh
    cd club_website
    ```
- Set the upstream remote
    ```sh
    git remote add upstream https://github.com/nsccs/club_website.git
    ```
- Switch to beta branch
    ```sh
    git checkout beta
    ```
- Install required packages
    ```sh
    npm install 
    ```
- Start server
    ```sh
    npm run dev
    ```


#### Find Something to Work On
Navigate to the `Issues` tab and use the filters to see open issues. Take note of the `good first issue` and `help wanted` labels. If you decide to start working on an issue, make sure write a comment to let others know!

Also, remember to pull the most recent work from the upstream beta branch before starting your work!

```sh
git pull upstream beta
```

#### Submit a Pull Request

- Create your feature branch. Please use all lowercase letters with dashes instead of spaces.
    ```sh
    git checkout -b <specific-feature>
    ```
- Test your feature. Manually test that your feature has not broken anything else in on the site and works as expected.
    ```sh
    npm run dev
    ```
- Add your work
    ```sh
    git add .
    ```
- Commit your changes
    ```sh
    git commit -m 'Add a clear and specific message about what the commit contains.'
    ```
- Push to the branch 
    ```sh
    git push origin <specific-feature>
    ```


- Go to the project Github page to open a pull request. You will select the `nsccs:beta` branch from `<your-repository>:<your-forked-branch>`. Include all the relevent information requested in the template.

- Request a review from christopher0331, uellenberg, or jaredscarr.

Don't forget to give the project a star! Thanks again!
