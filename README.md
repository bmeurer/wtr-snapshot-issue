# Repro for the HTML snapshot issue with @web/test-runner

Reproduce it with the following steps:

```console
$ npm install
$ npm test
```

This will print the following output:

```
foo.test.js:

 ❌ foo > renders foo correctly
      at: node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:122:13
      TypeError: Cannot destructure property 'index' of 'context' as it is undefined.
        at Proxy.assertHtmlEqualsSnapshot (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:122:13)
        at Proxy.equalSnapshot (node_modules/@open-wc/semantic-dom-diff/chai-dom-diff.js:173:37)
        at Proxy.methodWrapper (node_modules/chai/chai.js:7824:25)
        at n.<anonymous> (foo.test.js:6:23)
```
