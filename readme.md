
<h3 align="center">
  <img src="https://cdn.secure-api.org/images/mobilehero-alloy-plus.jpg" alt="alloy+ logo" />
</h3>

> **CAUTION:  PRE-PRODUCTION BETA**

# alloy-npm

[![](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

<!-- TOC depthFrom:2 depthTo:6 insertAnchor:false orderedList:false updateOnSave:true withLinks:true -->

- [Overview](#overview)
	- [Why should I use this plugin?](#why-should-i-use-this-plugin)
	- [What is Alloy+?](#what-is-alloy)
- [Install](#install)
- [Usage](#usage)
	- [Examples](#examples)
- [Other Alloy+ Plugins](#other-alloy-plugins)
- [Need Help?](#need-help)
- [License](#license)
- [Legal](#legal)

<!-- /TOC -->

## Overview

### Why should I use this plugin?
[alloy-npm][] is an [Alloy+][] Plugin for executing [npm][] during the Appelerator Alloy build process

### What is Alloy+?

[Alloy+][] is an entire framework built around [Appcelerator Mobile](http://www.appcelerator.com/mobile-app-development-products/) and their [Alloy](https://github.com/appcelerator/alloy) product. 
The idea for this framework was built upon the concepts of [MobileHero Adamantium](https://github.com/mobilehero/adamantium) 
and a desire to customize and extend Appcelerator Alloy for developers.  How much faster or stronger all depends on YOU, the developer.  

There will be an assortment of alloy+ plugins (available as npm modules) that you can install in your project to help you take your existing development tools furthur 
than possible today.  You can choose which modules are executed in your `config.json` file (which is part of your Alloy project).  You can also easily create your own plugins by simply creating a npm module that follows a simple convention.  

## Install
[![NPM version](https://badge.fury.io/js/%40mobile%2Falloy-npm.svg)](https://www.npmjs.com/package/@mobile/alloy-npm)

> _Install in the root directory of your Appcelerator mobile project (the directory containing `tiapp.xml`)._

```bash
npm install --save alloy-npm
```

## Usage

To use this installed plugin in your app, merge the following to your app's `config.json` file:

```json
  {
      "global": {
            "tasks": {
                  "preload": [ "alloy-npm" ]
            }
      }
```

By default, the command will run `npm install` in the `lib` directory of your Appcelerator project.

To run a different command, see the examples below. 

You will have some Alloy objects available for use as [templated code](https://lodash.com/docs#template). 

>_Most often, you will probably want to run these in the `preload` stage of the Alloy build process so that 
any changes done by this plugin can get picked up before copying files over to the build folder._

### Examples

**Install packages in lib directory**  
&nbsp;&nbsp;&nbsp;&nbsp;`"preload": [ "alloy-npm" ]`

**Update packages in lib directory**  
```json
"preload": [ 
      {
      "id": "alloy-npm",
      "dirname": "${event.dir.lib}",
      "args": ["install"]
      } 
    ]
```

**Install (and save) `bluebird` package in lib directory**  
```json
"preload": [ 
      {
      "id": "alloy-npm",
      "dirname": "${event.dir.lib}",
      "args": ["install", "@mobile/bluebird", "--save"]
      } 
    ]
```


## Other Alloy+ Plugins 

> ** Coming Soon! :mega: **

- [`underscore`](https://github.com/mobilehero/alloy-underscore): Fix some issues with the usage of underscore in Alloy and allow upgrading to lodash
- [`babel`](https://github.com/mobilehero/alloy-babel): Run babel transformations on your code during the build process
- [`es6`](https://github.com/mobilehero/alloy-es6): Use ES6/ES2015 code in your apps via babel transformations!
- [`nodejs`](https://github.com/mobilehero/alloy-nodejs): Make `require` statements in your app support nodejs packages installed via npm

_You can also search for more plugins developed by the community._

## Need Help?

Please [submit an issue](https://github.com/mobilehero/alloy-npm/issues) on GitHub and provide information about your setup.

## License

[![](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

This project is licensed under the terms of the MIT license. See the [license.md](https://github.com/mobilehero/alloy-npm/blob/master/license.md)  file.
This means you have full access to the source code and can modify it to fit your own needs. 

## Legal

Superhero Studios Incorporated and this project are in no way affiliated with any of the following companies:

  * _Appcelerator, Inc_
  * _Axway Inc_
  * _Apple Inc_
  * _Google Inc_

_Alloy is developed by Appcelerator and the community and is Copyright (c) 2012 by Appcelerator, Inc. All Rights Reserved. 
Alloy is made available under the Apache Public License, version 2. See their [LICENSE](https://github.com/appcelerator/alloy/blob/master/LICENSE) file for more information._

 [alloy+]: https://github.com/mobilehero/alloy-plus       "alloy-plus"
 [alloy-npm]: https://github.com/mobilehero/alloy-npm       "alloy-npm"
 [npm]: https://www.npmjs.com/    "npm"