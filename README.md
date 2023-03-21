# My Portfolio Website

An portfolio webiste created using React JS. This project can be used as an template to create your own website and host it.

# Sections

This portfolio wensite contains the following tabs :

- Home
- Education and Certificates
- Experience
- Projects
- Contact and Resume

# How To Use

You can run this webiste locally using following steps :

- Clone this repository (or fork, then clone your fork :) )
- Run ```npm i```
- Check it out using ```npm start```

# How to Deploy

You can use this project as a template to create your own portfoio wensite, just update the content and images and your website wiil be ready and free to host on Github. Follow the below steps to acive this :

- Replace `homepage` in package.json to your domain name or `https://<username>.github.io`, where the username is your github username.
- In `src/portfolio.js` you can add your personal portfolio details.
- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!

## To Deploy your website, you have two options

- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY, the second method.

### Option 1

- First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Run `npm run build` to generate the production build folder.
- Enter the build folder, ```git init``` and push the generated code to the `master` branch of your new repository. That's it. Done.
- You may need to ```git init``` and force push at every new build.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.

### Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages))

- For this its better to create another repository, like this MyPortfolioWebsite.
- After all your edits in this cloned project, Run ```npm run deploy``` to build and create a branch called `gh-pages`. It will push the `build` files to that branch, all this things will happen automatically.
- Push all your changes everytime you update your website.
- The last step in deploying is to ensure that the `Github Pages` in settings of the repository you have created is selected to `gh-pages` branch.
- you have to run ```npm run deploy```, after you update your website to see the chages live, also wait for 5 min after this step.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io/<your-repo-name>`.  

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

# References

Based on <https://github.com/ashutosh1919/masterPortfolio/> and <https://github.com/saadpasta/developerFolio>
Illustrations: <https://undraw.co/>
