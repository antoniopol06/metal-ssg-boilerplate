---
description: Adding a new toolbar is also as straightforward as adding a button.

layout: "guide"
title: "Create Toolbars"
weight: 3
---

###### Adding a new toolbar is also as straightforward as adding a button.

<article id="article1">

## Creating a Toolbar

```js
// Use the built-in version of React if your site does not use React
var React = AlloyEditor.React;

var ToolbarVersions = React.createClass({lb}
    mixins: [AlloyEditor.WidgetDropdown, AlloyEditor.WidgetExclusive, AlloyEditor.WidgetFocusManager, AlloyEditor.ToolbarButtons, AlloyEditor.WidgetPosition, AlloyEditor.WidgetArrowBox],

    statics: {lb}
        key: 'versions'
    {rb},

    componentDidMount: function () {lb}
        this._updatePosition();
    {rb},

    componentDidUpdate: function (prevProps, prevState) {lb}
        this._updatePosition();
    {rb},

    getDefaultProps: function() {lb}
        return {lb}
            circular: true,
            descendants: '.ae-button, .ae-toolbar-element',
            keys: {lb}
                next: [38, 39],
                prev: [37, 40]
            {rb}
        {rb};
    {rb},

    /**
     * Returns the class name of the toolbar in case of both exclusive and normal mode.
     */
    _getToolbarClassName: function() {lb}
        var cssClass = 'ae-toolbar-versions';

        if (this.props.renderExclusive) {lb}
            cssClass = 'ae-toolbar ' + this.getArrowBoxClasses();
        {rb}

        return cssClass;
    {rb},

    /**
     * Calculates and sets the position of the toolbar in exclusive or normal mode.
     */
    _updatePosition: function() {lb}
        var region;

        if (this.props.selectionData) {lb}
            region = this.props.selectionData.region;
        {rb}

        if (region) {lb}
            var domNode = React.findDOMNode(this);
            var domElement = new CKEDITOR.dom.element(domNode);

            var startRect = region.startRect || region;
            var right = this.props.editor.get('nativeEditor').editable().getClientRect().right;

            domNode.style.right = right + domNode.offsetWidth + this.props.gutterExclusive.left + 'px';
            domNode.style.top = region.top - domNode.offsetHeight/2 + startRect.height/2 + 'px';
            domNode.style.opacity = 1;

            domElement.removeClass('ae-arrow-box');

            this.cancelAnimation();
        {rb}
    {rb},

    /**
     * Lifecycle. Renders the buttons for managing version changes.
     */
    render: function() {lb}
        var buttons = this.getToolbarButtons(this.props.config.buttons);
        var className = this._getToolbarClassName();

        return (
            <div className={lb}className{rb} data-tabindex={lb}this.props.config.tabIndex {literal}||{/literal} 0{rb} onFocus={lb}this.focus{rb} onKeyDown={lb}this.handleKey{rb} tabIndex="-1">
                <div className="ae-container">
                    {lb}buttons{rb}
                </div>
            </div>
        );
    {rb}
{rb});

AlloyEditor.Toolbars[ToolbarVersions.key] = AlloyEditor.ToolbarVersions = ToolbarVersions;
```

<article id="article2">

## Using a Toolbar

<p>After creating your toolbar, you have to add it to the configuration of the editor where you want to use it.</p>

```js
var toolbars = {lb}
    add: {lb}
        buttons: ['image', 'camera', 'hline', 'table'],
        tabIndex: 2
    {rb},
    versions: {lb}
        buttons: ['annotate', 'comment', 'acceptChanges', 'rejectChanges'],
        tabIndex: 1
    {rb}
{rb}
```

<p>In this example, <em>annotate</em>, <em>comment</em>, <em>acceptChanges</em> and <em>rejectChanges</em> will be the buttons that will be loaded on the toolbar, and that will help us handle document version changes. Read our <a href="/docs/develop/create/create_buttons.html">Create Buttons</a> Guide to know how to do this!</p>

</article>


