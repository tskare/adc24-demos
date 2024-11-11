# ADC24 Demo: Frontend Strategies for WebUI

## Resources

ADC Slides, [PowerPoint online format](https://1drv.ms/p/c/ffeeb2b92a4e4e0d/EQ1OTiq5su4ggP_fAwAAAAABSBagOyWL5gv-H01NfP34Yg?e=9G96ok)

## Code in this repository

- `web/plugin-webui`: modern-web.dev scaffolding for a rotary control element supporting tests, accessibility audits, Storybook, etc.; see the available `npm` build rules. Note this is not production-ready and is intended to be a minimal `<canvas>` element.

## Welcoming suggestions from ADC24 and beyond

Will include pointers others suggest here: in-person, via Discord, or email.

## References

### HTML/CSS/JS+TS learning
- Books: physical or electronic: O'Reilly, No Starch, Apress, ...; from the last decade+ generally applicable, some further back.
- Check your local libraries too
- Interactive tutorials: e.g. [Flexbox Froggy](https://flexboxfroggy.com) - several variants
- https://web.dev/
- https://modern-web.dev/


### JUCE-Specific WebUI resources
- JUCE 8 Feature page for general tips, pros/cons, engines per platform​: [link](https://juce.com/blog/juce-8-feature-overview-webview-uis/)
- Tutorial Series on YouTube: [link](https://www.youtube.com/playlist?list=PLrJPU5Myec8Z-8gEj3kJdMfuuuWFbpy7D)

### Many Frameworks

- React, Svelte, Angular, Lit
- Testing: Karma, Jasmine, ...
- Note: many of these may not be relevant for, or ideal for, purely client-side UI. Look for "single page app" for some overlap, potentially
- Likely some overlap with Electron apps, examples: (with moderate confidence): Slack, 1Password, Github, Figma, Zoom, VSCode

### Web Components
- https://developer.mozilla.org/en-US/docs/Web/API/Web_components
- https://www.webcomponents.org/
- https://open-wc.org/
- Intro to Web Components in 2024: https://kinsta.com/blog/web-components/

###Testability
- Karma https://karma-runner.github.io 
- Jasmine https://jasmine.github.io/
- Web Test Runner: https://modern-web.dev/docs/test-runner/overview/ or https://open-wc.org/blog/testing-web-components-with-web-test-runner/

### Storybook
https://storybook.js.org/

### Dev Tools

- Right-click > "inspect element" in your browser
- Keyboard shortcuts: F11 in Edge, Cmd-Shift-J in Safari/Chrome Mac...
- https://developer.chrome.com/docs/devtools/​
- https://devtoolstips.org/​

### Lighthouse for Audits (accessibility, performance, best practices...)

- https://developer.chrome.com/docs/lighthouse/overview

### JS Console 

- [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/API/Console_API)
- [Apple docs](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

### "console beyond console.log()​" slide

- `.group()` - indent messages​
- `.count("thing happened")`
- `.time(label)​`
- `.timeStamp("something else happened")​`
- `.profile()` and `.profileEnd()`

### "4 characters or fewer" slide

- `$0` - last selected element.
- `$1`, `$2` - stack of previously-selected elements
- `$_` - previous console output​
- `$(selector)` aliases document.querySelector() ​- `$$(selector)` aliases querySelectorAll(); Uses: $('#myElement'), $$("div.panel > indicator-led[blinking='1']") ​
- `dir(object)` lists an object's properties​
- `copy(foo)` -- places value of foo on clipboard.​ Useful as `copy($_)`





## Contact info:

- Email either: travisskare at gmail (dot) com; travissk at ccrma (dot) stanford (dot) edu


