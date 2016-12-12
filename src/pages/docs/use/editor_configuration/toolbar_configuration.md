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
<pre>
<code>
var toolbars = {literal}{{/literal}
        add: {literal}{{/literal}
            buttons: ['image', 'camera', 'hline', 'table'],

            tabIndex: 2

        {literal}}{/literal},

        styles: {literal}{{/literal}

            selections: AlloyEditor.Selections,

            tabIndex: 1

        {literal}}{/literal}

{literal}}{/literal};
</code>
</pre>

<span>where <code>AlloyEditor.Selections</code> is</span>
<pre><code>
var Selections = [{literal}{{/literal}
    name: 'link',
    buttons: ['linkEdit'],
    test: AlloyEditor.SelectionTest.link

    {literal}}{/literal}, {literal}{{/literal}

        name: 'image',

        buttons: ['imageLeft', 'imageRight'],

        test: AlloyEditor.SelectionTest.image

    {literal}}{/literal}, {literal}{{/literal}

        name: 'text',

        buttons: ['styles', 'bold', 'italic', 'underline', 'link', 'twitter'],

        test: AlloyEditor.SelectionTest.text

    {literal}}{/literal}, {literal}{{/literal}

        name: 'table',

        buttons: ['tableRow', 'tableColumn', 'tableCell', 'tableRemove'],

        getArrowBoxClasses: AlloyEditor.SelectionGetArrowBoxClasses.table,

        setPosition: AlloyEditor.SelectionSetPosition.table,

        test: AlloyEditor.SelectionTest.table

{literal}}{/literal}];
</code>
</pre>

<p>The configuration above represents two toolbars - for adding content (images, code, etc.) and modify content based on the current selection type. You may remove any of those and the toolbar won't be shown when user makes the corresponding selection.</p>

<span>To remove the toolbar for adding content, just <strong>remove</strong> the property <em>add</em></span>
<pre><code>
var toolbars = {literal}{{/literal}

    styles: {literal}{{/literal}

        selections: AlloyEditor.Selections,

        tabIndex: 1

    {literal}}{/literal}

{literal}}{/literal};
</code>
</pre>

</article>