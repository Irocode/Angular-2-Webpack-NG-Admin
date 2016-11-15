# PCS framework Angular 2 and Bootstrap 4

## Install 
$ npm install<br>

####Dev Mode:
$ npm start<br>
http://localhost:3000/<br><br>

####Prod Mode:
npm run prebuild:prod && npm run build:prod && npm run server:prod<br>
http://localhost:8080/<br><br>


## Install additional Kendo UI classes
$ npm login --registry=https://registry.npm.telerik.com/ --scope=@progress<br>
User: irocode<br>
Pass: bono9999<br>
bernd.obendorfer@chello.at<br><br>

For Example:<br>
Add this package http://www.telerik.com/kendo-angular-ui/components/charts/<br>
$ npm install --save @progress/kendo-angular-charts
 
## Structure documentation 
### ASSETS
#### Images 
TradeControl.NET\src\assets\img<br>
####Icons
TradeControl.NET\src\assets\icon<br>
####Fonts:
TradeControl.NET\src\assets\fonts<br><br>
### OTHERS
####Uploads
TradeControl.NET - test\src\uploads<br>
####Mockserver: (json Files)
C:\Users\USER\Desktop\TradeControl.NET - test\src\ mockserver<br><br>
### LAYOUT
####Theme
TradeControl.NET\src\app\theme\sass\conf\conf.scss<br>
TradeControl.NET\src\app\theme\sass\conf\colorSchemes\ _pcs.scss
####Header
TradeControl.NET\src\app\theme\components\baPageTop\baPageTop.html
####Main
TradeControl.NET\src\index.html
####Footer
TradeControl.NET\src\app\pages\pages.component.ts
####Menu Routing
TradeControl.NET\src\app\pages\pages.menu.ts<br>
TradeControl.NET\src\app\pages\pages.routing.ts<br><br>

## SASS 
<b>Guide:</b> http://sass-lang.com/guide<br>
<b>Reinitialization:</b> npm rebuild node-sass ()<br>
<b>Import SCSS file for main theme:</b> TradeControl.NET-master\src\app\theme\theme.scss<br>
<b>Varible SCSS file:</b> TradeControl.NET-master\src\app\theme\sass\conf\varibles.scss<br>
<br>
### SASS Bootstrap 4 variable example in page folder (demo.scss)
<pre>
<div class="container" style='hight:90px;'> 

@import '../../theme/sass/conf/variables';
@media screen and (min-width: 1620px) {
   .test {
      color:red;     
  }
}

@media screen and (max-width: 1620px) {
   .test {
      color:$test-color;
  }
}  
</div>
</pre>

## Ingredients
####Webpack:
https://webpack.github.io/docs/configuration.html<br>
####Boostrap 4
https://hackerthemes.com/bootstrap-cheatsheet/<br>
####Kendo UI Angular 2:
http://www.telerik.com/kendo-angular-ui/components/<br>
####ng2-admin Angular 2:
https://github.com/akveo/ng2-admin<br>
####node-sass
https://github.com/sass/node-sass<br>
#### Icons
http://www.socicon.com/chart.php<br>
http://fontawesome.io/icons/<br>
http://ionicons.com/<br>


## package.json
*	version Must match version exactly
*	>version Must be greater than version
*	>=version etc
*	<version
*	<=version
*	~version "Approximately equivalent to version" See semver
*	^version "Compatible with version" See semver
*	1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
*	http://... See 'URLs as Dependencies' below
*	* Matches any version
*	"" (just an empty string) Same as *
*	version1 - version2 Same as >=version1 <=version2.
*	range1 || range2 Passes if either range1 or range2 are satisfied.
*	git... See 'Git URLs as Dependencies' below
*	user/repo See 'GitHub URLs' below
*	tag A specific version tagged and published as tag See npm-tag
*	path/path/path See Local Paths below

## Features
* TypeScript
* Webpack
* Responsive layout
* High resolution
* Bootstrap 4 CSS Framework
* Sass
* Angular 2
* jQuery
* KendoUI Angular2
