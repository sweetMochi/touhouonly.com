# Touhouonly


<!-- TABLE OF CONTENTS -->
<details open="open">
	<summary>Table of Contents</summary>
	<ol>
		<li>
			<a href="#about-touhouonly">About Touhouonly</a>
			<ul>
				<li><a href="#built-with">Built With</a></li>
				<li><a href="#angular-plugins">Angular Plugins</a></li>
				<li><a href="#dev-tools">Dev Tools</a></li>
			</ul>
		</li>
		<li><a href="#getting-started">Getting Started</a></li>
		<li><a href="#tree-view">Tree View</a></li>
		<li><a href="#license">License</a></li>
		<li><a href="#contact">Contact</a></li>
		<li><a href="#acknowledgements">Acknowledgements</a></li>
	</ol>
</details>

<!-- ABOUT Touhouonly -->
## About Touhouonly

This is a Touhou Comic Market website in Taiwan
![Product Name Screen Shot](docs/about.png)

> This project code is for study guideline purposes only.

_Web Site Link: [touhouonly.com](https://touhouonly.com)_

_Touhou Project on wiki: [Touhou Project](https://en.wikipedia.org/wiki/Touhou_Project)_


### Built With

![typescript](https://img.shields.io/badge/typescript-5.7.2-blue?logo=typescript&style=for-the-badge)
![rxjs](https://img.shields.io/badge/rxjs-7.8.0-blue?logo=reactivex&style=for-the-badge)
![fontawesome-free](https://img.shields.io/badge/fontawesome--free-6.7.2-blue?logo=font-awesome&style=for-the-badge)

### Angular Plugins

![angular](https://img.shields.io/badge/angular-19.2.0-red?logo=angular&style=for-the-badge)
![@ngx-translate/core](https://img.shields.io/badge/@ngx--translate/core-16.0.4-orange?logo=angular&style=for-the-badge)
![@ngx-translate/http-loader](https://img.shields.io/badge/@ngx--translate/http--loader-16.0.1-orange?logo=angular&style=for-the-badge)
![@angular/google-maps](https://img.shields.io/badge/@angular/google--maps-19.2.6-orange?logo=angular&style=for-the-badge)

### Dev Tools

![prettier](https://img.shields.io/badge/prettier-3.9.9-blue?logo=prettier&style=for-the-badge)
![karma](https://img.shields.io/badge/karma-6.4.0-green?logo=karma&style=for-the-badge)
![jasmine](https://img.shields.io/badge/jasmine-5.6.0-green?logo=jasmine&style=for-the-badge)


<!-- GETTING STARTED -->
## Getting Started

```sh
npm install
```

| Script | Command | Description |
| --- | --- | --- |
| `npm start` | `ng serve --open` | Start dev server and open browser |
| `npm run build` | `ng build` | Production build to `dist/touhouonly.com` |
| `npm test` | `ng test` | Run unit tests with Karma (Out of date) |


<!-- Tree View -->
## Tree View

```sh
🏠 touhouonly
│
│   [README.md]
│   [.htaccess] For server routing
│   [.prettierrc.json] Prettier formatting rules
│   [angular.json] Angular CLI workspace config
│   [package.json] Dependencies and npm scripts
│   [tsconfig.app.json] App compiler options
│   [tsconfig.spec.json] Unit test compiler options
│
└─── 📁 docs
│       [about.png] For markdown
│
└─── 📁 public
│   │   [favicon.ico]
│   │
│   └─── 📁 assets
│       │
│       └─── 📁 images
│       │   [2018 ~ 2025] Stage images by year
│       │   [event] Banner, club and venue images
│       │
│       └─── 📁 lang
│           [zh-tw.json] Default language
│           [ja-jp.json]
│           [en-us.json]
│
└─── 📁 src
    │   [index.html] Google Maps API and Google Fonts
    │   [main.ts] App bootstrap
    │   [styles.less] Define fontawesome path
    │
    └─── 📁 app
    │   │   [app.module.ts] Root module
    │   │   [app-routing.module.ts] Routes by year
    │   │
    │   └─── 📁 @set
    │   │   [event.const.ts] Annual event data
    │   │   [site.const.ts] Year list, social link and language list
    │   │   [type.ts] Type definitions
    │   │
    │   └─── 📁 @sup
    │   │   [base.component] Base component for getting event data by year
    │   │   [date-week.pipe] Show date week (Not in use)
    │   │   [event.service] Find event data by year
    │   │
    │   └─── 📁 @view
    │   │   [footer] Copyright info
    │   │   [header] Header for each page
    │   │   [logo] Touhouonly LOGO
    │   │   [nav] User menu with mobile style
    │   │
    │   └─── 📁 index
    │   │   [link] Social link
    │   │   [main] Event info and regulations
    │   │   [year] Past event page list
    │   │
    │   └─── 📁 page
    │   │   [about] About touhouonly and schedule
    │   │   [club] Club registration
    │   │   [coming] 404 page
    │   │   [cosplay] Cosplay regulations
    │   │   [location] Transportation info
    │   │   [location/ntnu] NTNU venue map
    │   │   [visitor] Visitor regulations
    │   │
    │   └─── 📁 stage
    │       [2018] With special logo
    │       [2020] With special logo
    │       [2023]
    │       [2024]
    │       [2025] Event of this year
    │
    └─── 📁 less
        │   [reset] Custom reset
        │
        └─── 📁 base
        │   [color] Variable setting
        │   [global] Native tag
        │   [LessXD] Less library
        │
        └─── 📁 tool
        │   [btn] Buttons
        │   [dot] Flower or ice crystals
        │   [headline] Headline in pages
        │   [title] Title style
        │
        └─── 📁 page
            [main] Page style

```


<!-- LICENSE -->
## License

This project code is for study guideline purposes only.


<!-- CONTACT -->
## Contact

[![twitter](https://img.shields.io/badge/twitter-tw-blue?logo=twitter&style=for-the-badge)](https://twitter.com/touhouonly_tw)
[![facebook](https://img.shields.io/badge/facebook-tw-blue?logo=facebook&style=for-the-badge)](https://facebook.com/TouhouOnly)

<service@touhouonly.com>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [Emoji All](https://emojiall.com)
* [Markdown Guide](https://www.markdownguide.org)
* [Choose an Open Source License](https://choosealicense.com)
* [Touhou Project on wiki](https://en.wikipedia.org/wiki/Touhou_Project)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Font Awesome](https://fontawesome.com)

