#A Blog Framework (Still in development)

##Features

#####In Code

1. Use React.js and React-Router for Front-End and Node.js and Express.js for Back-End Data processing.
2. With detailed comments, it's a good example to learn React.js and its component.
3. With a user friendly manage system, users can easily edit everything in **browser** rather than **source code** (*Still in development stage*)

#####UI Interaction

*Recommand Use Google Chrome Browser*

1. Click the side bar, the whole page will change style(There are 4 styles in default).
2. Click the cog icon on the left bottom to sign in(default username is **wmzfsw** and password is **123456**).
3. A Markdown Editor in Management System and Markdown interpreter on front-end.
4. Responsive Design

##Getting Started

1. Install `npm` (skip if already have npm on your device).
2. Clone/Fork this repo.
3. In the project's root directory, run `npm install`
4. Run `NODE_ENV=production npm start`(production), this step will need several to tens of seconds.
5. open [http://localhost:8080/](http://localhost:8080/).

##Structure

#### General Structure

* Root
    * assets
        * data
    * components    -- **the main directory, provide all components**
        * Common
        * SideBar
        * Home
        * Experience
        * Articles
        * Projects
        * Settings
    * public
        * assets              -- **Static resources**
            * image
            * projects
        * css
            * styles.css        -- **In most cases, I use inline css in components. However, for styles like :hover and media query, a stylesheet is necessary**
            * font-awesome.css  -- **font-awesome library**
        * fonts                 -- **font-awesome library**
        * index.html            -- **The main page**
    * index.js              -- **the router files, the entry of this app**
    * App.js                -- **the main framework**
    * server.js             -- **Server used to response json request**
    
    * package.json      -- **npm dependencies**
    * webpack.config.js -- **webpack configuration**
    * README.md

#### Components Relation

##### General

* MainFrame (`App.js`)
    * Navigation (`SideBar/Navigation.js`)
        * TopNav (`SideBar/TopNav.js` only on mobile devices)
            * NavLink (`Common/NavLink.js`)
        * SideBar (`SideBar/SideBar.js`)
            * Information (`SideBar/Information.js`)
            * SideNav (`SideBar/SideNav.js`)
            * Copyright (`SideBar/Copyright.js`)
    * Login System (`Settins/Login and Settings/LoginForm`)
    * Management System (`Settings/`)
        * Profile Setting (`Settings/Profile`)
        * Project Setting (`Settings/ProjectsSetting and ProjectEditor`)
    * Children (`Home/, Experience/, Articles/ and Projects/`)
