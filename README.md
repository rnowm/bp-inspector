Breakpoint Inspector
====================


Is your site responsive?

This tool will help you test the breakpoints in your site.

## Installation

```bash
bower install rnowm/bp-inspector
```

## Usage

In `index.html` replace `<iframe id="iframe" src="demo-site.html"></iframe>` with the path to the file you want to test.

Then add the breakpoints you need like so:

```script
<script>
  var breakpoints = { 'SM' : '768',
                      'MD' : '992',
                      'LG' : '1200' }
</script>
```