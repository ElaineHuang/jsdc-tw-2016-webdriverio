# Webdriver.IO Example

**init project**

```
cd webdriverio_example
npm install
```

**install Chimp**

```
npm install chimp -g
chimp --mocha --watch --path=test --browser=<chrome/firefox>
```

**install selenium-standalone (If you can't use service)**

```
npm install selenium-standalone -g
selenium-standalone install
selenium-standalone start
```


**execute**

```
npm test
npm run demo
npm run github
npm run chimp
```

**allure report**

After testing, you can execute two commands to generate and open the allure results.

```
npm run allure
npm run report
```