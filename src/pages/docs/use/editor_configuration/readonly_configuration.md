---
description: AlloyEditor might be set to work in "read only" mode. In read only mode, changing the content will be not possible and clicking on a link will navigate to its URL instead to open a dialog for editing it.
layout: "guide"
title: Read only mode
weight: 2
---

#### AlloyEditor might be set to work in "read only" mode. In read only mode, changing the content will be not possible and clicking on a link will navigate to its URL instead to open a dialog for editing it.

<span class="code-header">The read only mode can be set by passing the <strong>readOnly</strong> property to the editor with value `true`:</span>
<pre><code class="javascript">var editor = AlloyEditor.editable('editable', {literal}{{/literal}
	readOnly{literal}:{/literal} true
{literal}}{/literal}
{literal}}{/literal});
</code></pre>

<p>The value of the <code>readOnly</code> property might be `true` or `false`. If set to <code>true</code> this means changes to the content won't be possible and clicking on a link will navigate to its URL instead to open a dialog for changing it.

<p>This behavior might be changed any time using the following code: </p>
<pre><code class="javascript">var nativeEditor = editor.get('nativeEditor');
nativeEditor.setReadOnly(false);
</code></pre>
This will make the content editable again.