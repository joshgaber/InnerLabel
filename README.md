# jQuery InnerLabel

*jQuery InnerLabel* is a module that creates "placeholder" text within textareas and text input tags. It extends the [jQuery](http://jquery.com) library.

### How to Use

* Add `jquery.innerlabel.min.js` to your HTML file.
* Use the following code to bind InnerLabel to an element:

	<pre><code>$( "textarea, input[type='text']" ).innerlabel( options );</code></pre>

### Features

* Very lighweight; only 2KB to load.
* No cost; Fully licensed for commercial and non-commercial use.

## Options

The parameter `options` is a JSON array that may use the following values:

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>text</strong></td>
			<td>string / function</td>
			<td><code>$(this).attr("title")</code></td>
			<td>The default placeholder text that you wish the field show when it is empty. If a function is passed, it will be executed every time this variable is recalled.</td>
		</tr>
		<tr>
			<td><strong>css</strong></td>
			<td>array</td>
			<td><code>{}</code></td>
			<td>Any CSS styles that you wish to apply to the field while the placeholder is present. They will be removed when the field receives focus again.</td>
		</tr>
		<tr>
			<td><strong>onFocusIn</strong></td>
			<td>function</td>
			<td><code>function() {}</code></td>
			<td>This function will be executed when the field receives focus, and the placeholder is present. <strong>Note:</strong> This function will execute before the placeholder is removed.</td>
		</tr>
		<tr>
			<td><strong>onFocusOut</strong></td>
			<td>function</td>
			<td><code>function() {}</code></td>
			<td>This function will be executed when the field loses focus, and contains no text. <strong>Note:</strong> This function will execute before the placeholder is replaced.</td>
		</tr>
	</tbody>
</table>

## Website

* [Home Page](http://joshgaber.ca/code-projects/jquery-innerlabel/)
* [GitHub](https://github.com/joshgaber/InnerLabel)

## Author

* [Josh Gaber](http://joshgaber.ca) ([GitHub](https://github.com/joshgaber))
