onScreen
========

A jQuery plugin that acts when matched elements are visible in the viewport.

We've started this as a simple and minimal plugin for landing pages.


Version 0.0.1
-------
For now you add a class to selected elements.

Basic usage:
```JavaScript
$("element").onScreen();
```

more options:
```JavaScript
$('elements').onScreen({
    whereToAdd: $this,
	classToAdd: "onScreen",
	threshold: 30,
	removeClass: false
});
```
---
<br/>

Installation
-------
Bower:<br>
`$ bower install jquery-onscreen`


Options
-------
####**whereToAdd**: `element`
Element to receive the class.<br>
_default_: `$this` <br>

####**classToAdd**: `string`
The class to add to the element.<br>
_default_: `onScreen` <br>

####**threshold**: `integer`
value of tolerance before it acts<br>
_default_: `30` <br>

####**removeClass**: `boolean`
If true removes Class once it's not visible<br>
_default_: `false` <br>

we'll be adding the rest of the options in the coming days.
<br/>
<br/>
"this is a joke!"
<br/>
![Version Quote](http://imgs.xkcd.com/comics/exploits_of_a_mom.png)
