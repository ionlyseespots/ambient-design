# Ambient

[Ambient] (http://ionlyseespots.github.io/ambient-design) is semantic layout.

Our goal is to deliver a lean, lightweight semantic layout for HTML elements, attributes and values while also maintaining a separation from content that adapts across different devices.

Developers can focus on HTML to convey a consistent layout and designers can focus on extending UI patterns for content.

> Please note that Ambient requires the use of [Flexible Box Layout Module] (http://caniuse.com/#feat=flexbox)

## Demo

To see Ambient in action: http://ionlyseespots.github.io/ambient-design/examples/grid/index.html

## Quick Start

Install with [Bower] (http://bower.io/): bower install ambient

Read the [Getting started page] (http://ionlyseespots.github.io/ambient-design/docs/index.html) for information, templates and examples.

> Please note that source is the most current development (unstable) version of Ambient

## Development

This project is in early development.

Ambient makes use of HTML5 elements & CSS3 properties to convey a consistent layout. UI patterns are about defining namespaces for the HTML to live in. It works by generating styles for elements, attributes & values. And it's the key to unlocking this new approach. 

* Web site: http://ionlyseespots.github.io/ambient-design/index.html
* View layout example: http://ionlyseespots.github.io/ambient-design/examples/grid/index.html
* Docs: http://ionlyseespots.github.io/ambient-design/docs/index.html
* Layout: http://ionlyseespots.github.io/ambient-design/layout/index.html
* UI patterns: http://ionlyseespots.github.io/ambient-design/design-patterns/index.html

## Usage

Once you have your [starter HTML5 template](http://ionlyseespots.github.io/ambient-design/examples/starter-template/index.html) start writing HTML5.

## Background

Sometimes I have a UI that plays well with a traditional (4, 6, 8, and 12 column) grid paradigm but sometimes I need a more complex grid. This means learning grid classes for structure with floats, columns and media queries.

I liked reusing classes for design. Other times I became frustrated reusing classes for structure that were not very clear. I wanted to create a methodology for layout for the unpredictable. The layout should be dynamic, and fit any range of viewports. 

This system evolved out of the need to fully decouple markup (HTML) from presentation (CSS). Ambient avoids CSS classes in the HTML markup itself.

While presentation changes can require changes in structure, content can be changed without any need for structural change beyond the semantic layout.

## Inspiration

* http://css-tricks.com/snippets/css/a-guide-to-flexbox/
* http://www.smashingmagazine.com/2013/05/22/centering-elements-with-flexbox/
* http://philipwalton.github.io/solved-by-flexbox/

* http://oocss.org/

* http://www.google.com/design/spec/material-design/introduction.html

* http://getbootstrap.com/

* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes