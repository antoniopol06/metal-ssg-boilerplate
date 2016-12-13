---
description: If you run the editor with the default UI, which is written in React, then adding a button will be straightforward. Buttons are standard React classes. For your convenience, there is also a number of mixins, which you can use that provide basic functionality out of the box. Then, use CKEditor's API to do style the content and that is it!

layout: "guide"
title: "Create Buttons"
weight: 1
---

###### If you run the editor with the default UI, which is written in React, then adding a button will be straightforward. Buttons are standard React classes. For your convenience, there is also a number of mixins, which you can use that provide basic functionality out of the box. Then, use CKEditor's API to do style the content and that is it!

<article id="article1">

## Creating a Button

<span class="code-header">Example of a new button that converts the current selection into a marquee</span>

```js
// Use the built-in version of React if your site does not use React
var React = AlloyEditor.React;

var ButtonMarquee = React.createClass({lb}
    mixins: [AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle],

    propTypes: {lb}
        editor: React.PropTypes.object.isRequired
    {rb},

    getDefaultProps: function() {lb}
        return {lb}
            style: {lb}
                element: 'marquee'
            {rb}
        {rb};
    {rb},

    statics: {lb}
        key: 'marquee'
    {rb},

    render: function() {lb}
        var cssClass = 'ae-button ' + this.getStateClasses();

        return (
            <button className={lb}cssClass{rb} data-type="button-marquee" onClick={lb}this.applyStyle{rb} tabIndex={lb}this.props.tabIndex{rb}>
                <span className="ae-icon-separator"></span>
            </button>
        );
    {rb}
{rb});

AlloyEditor.Buttons[ButtonMarquee.key] = AlloyEditor.ButtonMarquee = ButtonMarquee;
```

</article>

<article id="article2">

## Using a Button

<p>After creating your button, you have to add it to the configuration of the Toolbar where you want to use it.</p>

<span class="code-header">Buttons, which handle styles are usually used within the Styles Toolbar, inside a text-like selection</span>

```js
var toolbars = [
    styles: {lb}
        selections: [{lb}
            name: 'text',
            buttons: ['styles', 'bold', 'italic', 'underline', 'link', 'twitter', 'marquee'],
            test: AlloyEditor.SelectionTest.text
        {rb}],
        tabIndex: 1
    {rb}
];
```

In this case the <em>Marquee</em> button will appear after <em>Twitter</em> one, last on the toolbar.

</article>