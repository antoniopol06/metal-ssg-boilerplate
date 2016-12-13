---
description: AlloyEditor allows you to configure the Toolbars in the way you prefer. You will be able to remove some of the existing Toolbars, to add your own or to reorder the buttons in each Toolbar
layout: "guide"
title: Toolbar configuration
weight: 3
---

#### AlloyEditor allows you to configure the Toolbars in the way you prefer. You will be able to remove some of the existing Toolbars, to add your own or to reorder the buttons in each Toolbar.

<article id="article1">

## Default configuration

<span>This is the default editor toolbars configuration</span>

```js
var toolbars = {lb}
        add: {lb}
            buttons: ['image', 'camera', 'hline', 'table'],

            tabIndex: 2

        {rb},

        styles: {lb}

            selections: AlloyEditor.Selections,

            tabIndex: 1

        {rb}

{rb};
```

<span>where <code>AlloyEditor.Selections</code> is</span>

```js
var Selections = [{lb}
    name: 'link',
    buttons: ['linkEdit'],
    test: AlloyEditor.SelectionTest.link

    {rb}, {lb}

        name: 'image',

        buttons: ['imageLeft', 'imageRight'],

        test: AlloyEditor.SelectionTest.image

    {rb}, {lb}

        name: 'text',

        buttons: ['styles', 'bold', 'italic', 'underline', 'link', 'twitter'],

        test: AlloyEditor.SelectionTest.text

    {rb}, {lb}

        name: 'table',

        buttons: ['tableRow', 'tableColumn', 'tableCell', 'tableRemove'],

        getArrowBoxClasses: AlloyEditor.SelectionGetArrowBoxClasses.table,

        setPosition: AlloyEditor.SelectionSetPosition.table,

        test: AlloyEditor.SelectionTest.table

{rb}];
```
<p>The configuration above represents two toolbars - for adding content (images, code, etc.) and modify content based on the current selection type. You may remove any of those and the toolbar won't be shown when user makes the corresponding selection.</p>

<span>To remove the toolbar for adding content, just <strong>remove</strong> the property <em>add</em></span>

```js
var toolbars = {lb}

    styles: {lb}

        selections: AlloyEditor.Selections,

        tabIndex: 1

    {rb}

{rb};
```
</article>