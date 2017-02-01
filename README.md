#A Blog Framework (Still in development)

##Features

#####In Code

1. Only use React.js and React-Router to routing.
2. With detailed comments, it's a good example to learn React.js and its component.
3. With a user friendly manage system, users can easily edit everything in **browser** rather than **source code** (*Still in development stage*)

#####UI Interaction

1. Click the side bar, the whole page will change style(There are 4 styles in default).

##Getting Started

1. Install `npm` (skip if already have npm).
2. In the project's root directory, run `npm install`
3. run `npm start` to start localhost.
4. open [http://localhost:8080/](http://localhost:8080/).

##Structure

#### General Structure

* Root
    * assets        -- **including data and images**
        * image
        * data
    * components    -- **the main directory, provide all components**
        * SideBar
        * Home
        * Experience
        * Articles
        * Projects
    * css
        * styles.css        -- **In most cases, I use inline css in components. However, for styles like :hover and media query, a stylesheet is necessary**
        * font-awesome.css  -- **font-awesome library**
    * fonts             -- **font-awesome library**
    * App.js            -- **the main framework**
    * index.js          -- **the router files, the entry of this app**
    * index.html       
    * package.json      -- **npm dependencies**
    * webpack.config.js -- **webpack configuration**
    * README.md

#### Components Relation

