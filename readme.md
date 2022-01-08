[//]: # (header-start)

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h1 align="center">
	🪦 RIP Axway Amplify Titanium (2010 - 2022)
	</h1>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</p>
</a>
<p>&nbsp;</p>
<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<h2 align="center">
		🛑 This project is no longer being maintained 🛑
	</h2>
</a>
<p>&nbsp;</p>
<hr>
<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)

# alloy+ plugin: `npm`


<h3 align="center">
	<img src="https://cdn.secure-api.org/images/aplus-npm.svg" alt="aplus-npm logo" />
</h3>

> ⚠️ **CAUTION:  PRE-PRODUCTION BETA** ⚠️   
>_(breaking changes may be introduced before 1.0.0 release)_




[![](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

<!-- TOC depthFrom:2 depthTo:6 insertAnchor:false orderedList:false updateOnSave:true withLinks:true -->

* [Overview](#overview)
	* [Why should I use this plugin?](#why-should-i-use-this-plugin)
	* [What is Alloy+?](#what-is-alloy)
* [Dependencies](#dependencies)
	* [Install Alloy+ Core only](#install-alloy-core-only)
	* [Install Alloy+ Bundle 📦](#install-alloy-bundle-)
* [Installing this plugin](#installing-this-plugin)
* [Usage](#usage)
	* [Examples](#examples)
* [Other Alloy+ Plugins](#other-alloy-plugins)
* [Need Help?](#need-help)
* [License](#license)
* [Legal](#legal)

<!-- /TOC -->

## Overview

### Why should I use this plugin?

[Alloy+][] plugin [`underscore`][] is a plugin for executing [npm][] during the
Appelerator Alloy build process. You can use this plugin to install or update
npm packages necessary for your Appcelerator Alloy mobile project.

### What is Alloy+?

[Alloy+][] is an entire framework built around [Appcelerator Mobile](http://www.appcelerator.com/mobile-app-development-products/) and their [Alloy](https://github.com/appcelerator/alloy) product. 
The idea for this framework was built upon the concepts of [MobileHero Adamantium](https://github.com/mobilehero/adamantium) 
and a desire to customize and extend Appcelerator Alloy for developers.  How much faster or stronger all depends on YOU, the developer.  

There will be an assortment of alloy+ plugins (available as npm modules) that you can install in your project to help you take your existing development tools furthur 
than possible today.  You can choose which modules are executed in your `config.json` file (which is part of your Alloy project).  You can also easily create your own plugins by simply creating a npm module that follows a simple convention.  

## Dependencies

> _All modules should be installed in the root directory of your Appcelerator mobile project (the directory containing `tiapp.xml`)._

Alloy+ plugins are executed by `Alloy+ Core`.  You can install that by itself or bundled with several Alloy+ plugins.

### Install Alloy+ Core only

[![npm version](https://badge.fury.io/js/%40aplus%2Fcore.svg)](https://badge.fury.io/js/%40aplus%2Fcore)

```bash
npm install --save @aplus/core
```

### Install Alloy+ Bundle 📦

[![npm version](https://badge.fury.io/js/%40aplus%2Fbundle.svg)](https://badge.fury.io/js/%40aplus%2Fbundle)

```bash
npm install --save @aplus/bundle
```

## Installing this plugin

> _All modules should be installed in the root directory of your Appcelerator mobile project (the directory containing `tiapp.xml`)._


[![npm version](https://badge.fury.io/js/%40aplus%2Fnpm.svg)](https://badge.fury.io/js/%40aplus%2Fnpm)

```bash
npm install --save @aplus/npm
```

## Usage

To use this installed plugin in your app, merge the following to your app's `config.json` file:

```json
	{
		"tasks": [ "@aplus/npm" ]
	}
```

By default, the command will run `npm install` in the `lib` directory of your Appcelerator project.

To run a different command, see the examples below. 

You will have some Alloy objects available for use as [templated code](https://lodash.com/docs#template). 

>_Most often, you will probably want to run these in the `preload` stage of the Alloy build process so that 
any changes done by this plugin can get picked up before copying files over to the build folder._

### Examples

**Install packages in lib directory**  
&nbsp;&nbsp;&nbsp;&nbsp;`"tasks": [ "@aplus/npm" ]`

**Update packages in lib directory**

```json
"tasks": [
			{
			"module": "@aplus/npm",
			"dirname": "${event.dir.lib}",
			"args": ["install"]
			}
		]
```

**Install (and save) `bluebird` package in lib directory**

```json
"tasks": [
			{
			"module": "@aplus/npm",
			"dirname": "${event.dir.lib}",
			"args": ["install", "@mobile/bluebird", "--save"]
			}
		]
```


## Other Alloy+ Plugins

> **Coming Soon! :mega:**

- [`babel`][]: Run babel transformations on your code during the build process
- [`es6`][]: Use ES6/ES2015 code in your apps via babel transformations!
- [`node`][]: Make `require` statements in your app support nodejs packages installed via npm
- [`npm`][]: Execute npm during the Alloy build process
- [`underscore`][]: Fix some issues with the usage of underscore in Alloy and allow upgrading to lodash

_You can also search for more plugins developed by the community._

## Need Help?

Please [submit an issue](https://github.com/mobilehero/aplus-npm/issues) on GitHub and provide information about your setup.

## License

[![](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

This project is licensed under the terms of the MIT license. This means you have full access to the source code and can modify it to fit your own needs. 
See the [license.md](https://github.com/mobilehero/aplus-core/blob/master/license.md) file.

## Legal

Superhero Studios Incorporated and this project are in no way affiliated with any of the following companies:

- _Appcelerator, Inc_
- _Axway Inc_
- _Apple Inc_
- _Google Inc_

_Alloy is developed by Appcelerator and the community and is Copyright (c) 2012 by Appcelerator, Inc. All Rights Reserved. 
Alloy is made available under the Apache Public License, version 2. See their [license](https://github.com/appcelerator/alloy/blob/master/LICENSE) file for more information._

[alloy]: https://github.com/appcelerator/alloy  "alloy"
[npm]: https://www.npmjs.com/    "npm"
[alloy+]: https://github.com/mobilehero/aplus-core  "Alloy+"
[`node`]: https://github.com/mobilehero/aplus-node  "node"
[`babel`]: https://github.com/mobilehero/aplus-babel  "babel"
[`es6`]: https://github.com/mobilehero/aplus-es6  "es6"
[`underscore`]: https://github.com/mobilehero/aplus-underscore  "underscore"
[`npm`]: https://github.com/mobilehero/aplus-npm  "npm"
