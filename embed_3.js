
            (function() {
                const style = document.createElement('style');
                style.innerHTML = `html {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: sans-serif;
}

body {
  margin: 0;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

audio, canvas, progress, video {
  vertical-align: baseline;
  display: inline-block;
}

audio:not([controls]) {
  height: 0;
  display: none;
}

[hidden], template {
  display: none;
}

a {
  background-color: #0000;
}

a:active, a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b, strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

h1 {
  margin: .67em 0;
  font-size: 2em;
}

mark {
  color: #000;
  background: #ff0;
}

small {
  font-size: 80%;
}

sub, sup {
  vertical-align: baseline;
  font-size: 75%;
  line-height: 0;
  position: relative;
}

sup {
  top: -.5em;
}

sub {
  bottom: -.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code, kbd, pre, samp {
  font-family: monospace;
  font-size: 1em;
}

button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button, select {
  text-transform: none;
}

button, html input[type="button"], input[type="reset"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled], html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: none;
}

input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td, th {
  padding: 0;
}

@font-face {
  font-family: webflow-icons;
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
  font-weight: normal;
  font-style: normal;
}

[class^="w-icon-"], [class*=" w-icon-"] {
  speak: none;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  font-family: webflow-icons !important;
}

.w-icon-slider-right:before {
  content: "";
}

.w-icon-slider-left:before {
  content: "";
}

.w-icon-nav-menu:before {
  content: "";
}

.w-icon-arrow-down:before, .w-icon-dropdown-toggle:before {
  content: "";
}

.w-icon-file-upload-remove:before {
  content: "";
}

.w-icon-file-upload-icon:before {
  content: "";
}

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  color: #333;
  background-color: #fff;
  min-height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

html.w-mod-touch * {
  background-attachment: scroll !important;
}

.w-block {
  display: block;
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.w-clearfix:before, .w-clearfix:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-clearfix:after {
  clear: both;
}

.w-hidden {
  display: none;
}

.w-button {
  color: #fff;
  line-height: inherit;
  cursor: pointer;
  background-color: #3898ec;
  border: 0;
  border-radius: 0;
  padding: 9px 15px;
  text-decoration: none;
  display: inline-block;
}

input.w-button {
  -webkit-appearance: button;
}

html[data-w-dynpage] [data-w-cloak] {
  color: #0000 !important;
}

.w-code-block {
  margin: unset;
}

pre.w-code-block code {
  all: inherit;
}

.w-optimization {
  display: contents;
}

.w-webflow-badge, .w-webflow-badge > img {
  box-sizing: unset;
  width: unset;
  height: unset;
  max-height: unset;
  max-width: unset;
  min-height: unset;
  min-width: unset;
  margin: unset;
  padding: unset;
  float: unset;
  clear: unset;
  border: unset;
  border-radius: unset;
  background: unset;
  background-image: unset;
  background-position: unset;
  background-size: unset;
  background-repeat: unset;
  background-origin: unset;
  background-clip: unset;
  background-attachment: unset;
  background-color: unset;
  box-shadow: unset;
  transform: unset;
  direction: unset;
  font-family: unset;
  font-weight: unset;
  color: unset;
  font-size: unset;
  line-height: unset;
  font-style: unset;
  font-variant: unset;
  text-align: unset;
  letter-spacing: unset;
  -webkit-text-decoration: unset;
  text-decoration: unset;
  text-indent: unset;
  text-transform: unset;
  list-style-type: unset;
  text-shadow: unset;
  vertical-align: unset;
  cursor: unset;
  white-space: unset;
  word-break: unset;
  word-spacing: unset;
  word-wrap: unset;
  transition: unset;
}

.w-webflow-badge {
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 0 0 1px #0000001a, 0 1px 3px #0000001a;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 2147483647 !important;
  color: #aaadb0 !important;
  overflow: unset !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 6px !important;
  font-size: 12px !important;
  line-height: 14px !important;
  text-decoration: none !important;
  display: inline-block !important;
  position: fixed !important;
  inset: auto 12px 12px auto !important;
  transform: none !important;
}

.w-webflow-badge > img {
  position: unset;
  visibility: unset !important;
  opacity: 1 !important;
  vertical-align: middle !important;
  display: inline-block !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 10px;
  font-weight: bold;
}

h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

h2 {
  margin-top: 20px;
  font-size: 32px;
  line-height: 36px;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
  line-height: 30px;
}

h4 {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
}

h5 {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

h6 {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  border-left: 5px solid #e2e2e2;
  margin: 0 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 22px;
}

figure {
  margin: 0 0 10px;
}

figcaption {
  text-align: center;
  margin-top: 5px;
}

ul, ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}

.w-embed:before, .w-embed:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-embed:after {
  clear: both;
}

.w-video {
  width: 100%;
  padding: 0;
  position: relative;
}

.w-video iframe, .w-video object, .w-video embed {
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button, [type="button"], [type="reset"] {
  cursor: pointer;
  -webkit-appearance: button;
  border: 0;
}

.w-form {
  margin: 0 0 15px;
}

.w-form-done {
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
}

.w-form-fail {
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
}

.w-input, .w-select {
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  height: 38px;
  margin-bottom: 10px;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.42857;
  display: block;
}

.w-input::placeholder, .w-select::placeholder {
  color: #999;
}

.w-input:focus, .w-select:focus {
  border-color: #3898ec;
  outline: 0;
}

.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {
  cursor: not-allowed;
}

.w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select {
  background-color: #eee;
}

textarea.w-input, textarea.w-select {
  height: auto;
}

.w-select {
  background-color: #f3f3f3;
}

.w-select[multiple] {
  height: auto;
}

.w-form-label {
  cursor: pointer;
  margin-bottom: 0;
  font-weight: normal;
  display: inline-block;
}

.w-radio {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-radio:before, .w-radio:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-radio:after {
  clear: both;
}

.w-radio-input {
  float: left;
  margin: 3px 0 0 -20px;
  line-height: normal;
}

.w-file-upload {
  margin-bottom: 10px;
  display: block;
}

.w-file-upload-input {
  opacity: 0;
  z-index: -100;
  width: .1px;
  height: .1px;
  position: absolute;
  overflow: hidden;
}

.w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success {
  color: #333;
  display: inline-block;
}

.w-file-upload-error {
  margin-top: 10px;
  display: block;
}

.w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden {
  display: none;
}

.w-file-upload-uploading-btn {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: flex;
}

.w-file-upload-file {
  background-color: #fafafa;
  border: 1px solid #ccc;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  display: flex;
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}

.w-file-remove-link {
  cursor: pointer;
  width: auto;
  height: auto;
  margin-top: 3px;
  margin-left: 10px;
  padding: 3px;
  display: block;
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}

.w-file-upload-error-msg {
  color: #ea384c;
  padding: 2px 0;
  display: inline-block;
}

.w-file-upload-info {
  padding: 0 12px;
  line-height: 38px;
  display: inline-block;
}

.w-file-upload-label {
  cursor: pointer;
  background-color: #fafafa;
  border: 1px solid #ccc;
  margin: 0;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
}

.w-icon-file-upload-icon, .w-icon-file-upload-uploading {
  width: 20px;
  margin-right: 8px;
  display: inline-block;
}

.w-icon-file-upload-uploading {
  height: 20px;
}

.w-container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}

.w-container:before, .w-container:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-container:after {
  clear: both;
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}

.w-row:before, .w-row:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-row:after {
  clear: both;
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}

.w-col {
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}

.w-col-1 {
  width: 8.33333%;
}

.w-col-2 {
  width: 16.6667%;
}

.w-col-3 {
  width: 25%;
}

.w-col-4 {
  width: 33.3333%;
}

.w-col-5 {
  width: 41.6667%;
}

.w-col-6 {
  width: 50%;
}

.w-col-7 {
  width: 58.3333%;
}

.w-col-8 {
  width: 66.6667%;
}

.w-col-9 {
  width: 75%;
}

.w-col-10 {
  width: 83.3333%;
}

.w-col-11 {
  width: 91.6667%;
}

.w-col-12 {
  width: 100%;
}

.w-hidden-main {
  display: none !important;
}

@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }

  .w-hidden-main {
    display: inherit !important;
  }

  .w-hidden-medium {
    display: none !important;
  }

  .w-col-medium-1 {
    width: 8.33333%;
  }

  .w-col-medium-2 {
    width: 16.6667%;
  }

  .w-col-medium-3 {
    width: 25%;
  }

  .w-col-medium-4 {
    width: 33.3333%;
  }

  .w-col-medium-5 {
    width: 41.6667%;
  }

  .w-col-medium-6 {
    width: 50%;
  }

  .w-col-medium-7 {
    width: 58.3333%;
  }

  .w-col-medium-8 {
    width: 66.6667%;
  }

  .w-col-medium-9 {
    width: 75%;
  }

  .w-col-medium-10 {
    width: 83.3333%;
  }

  .w-col-medium-11 {
    width: 91.6667%;
  }

  .w-col-medium-12 {
    width: 100%;
  }

  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main, .w-hidden-medium {
    display: inherit !important;
  }

  .w-hidden-small {
    display: none !important;
  }

  .w-row, .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }

  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }

  .w-col-small-1 {
    width: 8.33333%;
  }

  .w-col-small-2 {
    width: 16.6667%;
  }

  .w-col-small-3 {
    width: 25%;
  }

  .w-col-small-4 {
    width: 33.3333%;
  }

  .w-col-small-5 {
    width: 41.6667%;
  }

  .w-col-small-6 {
    width: 50%;
  }

  .w-col-small-7 {
    width: 58.3333%;
  }

  .w-col-small-8 {
    width: 66.6667%;
  }

  .w-col-small-9 {
    width: 75%;
  }

  .w-col-small-10 {
    width: 83.3333%;
  }

  .w-col-small-11 {
    width: 91.6667%;
  }

  .w-col-small-12 {
    width: 100%;
  }
}

@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }

  .w-hidden-main, .w-hidden-medium, .w-hidden-small {
    display: inherit !important;
  }

  .w-hidden-tiny {
    display: none !important;
  }

  .w-col {
    width: 100%;
  }

  .w-col-tiny-1 {
    width: 8.33333%;
  }

  .w-col-tiny-2 {
    width: 16.6667%;
  }

  .w-col-tiny-3 {
    width: 25%;
  }

  .w-col-tiny-4 {
    width: 33.3333%;
  }

  .w-col-tiny-5 {
    width: 41.6667%;
  }

  .w-col-tiny-6 {
    width: 50%;
  }

  .w-col-tiny-7 {
    width: 58.3333%;
  }

  .w-col-tiny-8 {
    width: 66.6667%;
  }

  .w-col-tiny-9 {
    width: 75%;
  }

  .w-col-tiny-10 {
    width: 83.3333%;
  }

  .w-col-tiny-11 {
    width: 91.6667%;
  }

  .w-col-tiny-12 {
    width: 100%;
  }
}

.w-widget {
  position: relative;
}

.w-widget-map {
  width: 100%;
  height: 400px;
}

.w-widget-map label {
  width: auto;
  display: inline;
}

.w-widget-map img {
  max-width: inherit;
}

.w-widget-map .gm-style-iw {
  text-align: center;
}

.w-widget-map .gm-style-iw > button {
  display: none !important;
}

.w-widget-twitter {
  overflow: hidden;
}

.w-widget-twitter-count-shim {
  vertical-align: top;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px;
  width: 28px;
  height: 20px;
  display: inline-block;
  position: relative;
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  text-align: center;
  color: #999;
  font-family: serif;
  font-size: 15px;
  line-height: 12px;
  position: relative;
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  display: block;
  position: relative;
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}

.w-widget-twitter-count-shim:not(.w--vertical):before, .w-widget-twitter-count-shim:not(.w--vertical):after {
  content: " ";
  pointer-events: none;
  border: solid #0000;
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 0;
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-width: 4px;
  border-color: #75869600 #5d6c7b #75869600 #75869600;
  margin-top: -4px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -10px;
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-width: 4px;
  border-color: #fff0 #fff #fff0 #fff0;
  margin-top: -4px;
  margin-left: -8px;
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-top: -5px;
  margin-left: -9px;
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}

.w-widget-twitter-count-shim.w--vertical:before, .w-widget-twitter-count-shim.w--vertical:after {
  content: " ";
  pointer-events: none;
  border: solid #0000;
  width: 0;
  height: 0;
  position: absolute;
  top: 100%;
  left: 50%;
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-width: 5px;
  border-color: #5d6c7b #75869600 #75869600;
  margin-left: -5px;
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-width: 4px;
  border-color: #fff #fff0 #fff0;
  margin-left: -4px;
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}

.w-background-video {
  color: #fff;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.w-background-video > video {
  object-fit: cover;
  z-index: -100;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  inset: -100%;
}

.w-background-video > video::-webkit-media-controls-start-playback-button {
  -webkit-appearance: none;
  display: none !important;
}

.w-background-video--control {
  background-color: #0000;
  padding: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
}

.w-background-video--control > [hidden] {
  display: none !important;
}

.w-slider {
  text-align: center;
  clear: both;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  background: #ddd;
  height: 300px;
  position: relative;
}

.w-slider-mask {
  z-index: 1;
  white-space: nowrap;
  height: 100%;
  display: block;
  position: relative;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-slide {
  vertical-align: top;
  white-space: normal;
  text-align: left;
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}

.w-slider-nav {
  z-index: 2;
  text-align: center;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  height: 40px;
  margin: auto;
  padding-top: 10px;
  position: absolute;
  inset: auto 0 0;
}

.w-slider-nav.w-round > div {
  border-radius: 100%;
}

.w-slider-nav.w-num > div {
  font-size: inherit;
  line-height: inherit;
  width: auto;
  height: auto;
  padding: .2em .5em;
}

.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px #3336;
}

.w-slider-nav-invert {
  color: #fff;
}

.w-slider-nav-invert > div {
  background-color: #2226;
}

.w-slider-nav-invert > div.w-active {
  background-color: #222;
}

.w-slider-dot {
  cursor: pointer;
  background-color: #fff6;
  width: 1em;
  height: 1em;
  margin: 0 3px .5em;
  transition: background-color .1s, color .1s;
  display: inline-block;
  position: relative;
}

.w-slider-dot.w-active {
  background-color: #fff;
}

.w-slider-dot:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff;
}

.w-slider-dot:focus.w-active {
  box-shadow: none;
}

.w-slider-arrow-left, .w-slider-arrow-right {
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  -webkit-user-select: none;
  user-select: none;
  width: 80px;
  margin: auto;
  font-size: 40px;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}

.w-slider-arrow-left:focus, .w-slider-arrow-right:focus {
  outline: 0;
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}

.w-icon-slider-left, .w-icon-slider-right {
  width: 1em;
  height: 1em;
  margin: auto;
  inset: 0;
}

.w-slider-aria-label {
  clip: rect(0 0 0 0);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.w-slider-force-show {
  display: block !important;
}

.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.w-icon-dropdown-toggle {
  width: 1em;
  height: 1em;
  margin: auto 20px auto auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.w-dropdown-list {
  background: #ddd;
  min-width: 100%;
  display: none;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.w-dropdown-link {
  color: #222;
  padding: 10px 20px;
  display: block;
}

.w-dropdown-link.w--current {
  color: #0082f3;
}

.w-dropdown-link:focus {
  outline: 0;
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
    padding-left: 10px;
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: #000000e6;
  outline: 0;
  font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  inset: 0;
  -webkit-transform: translate(0);
}

.w-lightbox-backdrop, .w-lightbox-container {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  overflow: auto;
}

.w-lightbox-content {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-view {
  opacity: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.w-lightbox-view:before {
  content: "";
  height: 100vh;
}

.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}

.w-lightbox-frame, .w-lightbox-view:before {
  vertical-align: middle;
  display: inline-block;
}

.w-lightbox-figure {
  margin: 0;
  position: relative;
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}

.w-lightbox-img {
  width: auto;
  max-width: none;
  height: auto;
}

.w-lightbox-image {
  float: none;
  max-width: 100vw;
  max-height: 100vh;
  display: block;
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}

.w-lightbox-caption {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #0006;
  padding: .5em 1em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-lightbox-embed {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.w-lightbox-control {
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  width: 4em;
  transition: all .3s;
  position: absolute;
  top: 0;
}

.w-lightbox-left {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
  display: none;
  bottom: 0;
  left: 0;
}

.w-lightbox-right {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  display: none;
  bottom: 0;
  right: 0;
}

.w-lightbox-close {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
  height: 2.6em;
  right: 0;
}

.w-lightbox-strip {
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto hidden;
}

.w-lightbox-item {
  box-sizing: content-box;
  cursor: pointer;
  width: 10vh;
  padding: 2vh 1vh;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
}

.w-lightbox-active {
  opacity: .3;
}

.w-lightbox-thumbnail {
  background: #222;
  height: 10vh;
  position: relative;
  overflow: hidden;
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}

.w-lightbox-thumbnail .w-lightbox-tall {
  width: 100%;
  top: 50%;
  transform: translate(0, -50%);
}

.w-lightbox-thumbnail .w-lightbox-wide {
  height: 100%;
  left: 50%;
  transform: translate(-50%);
}

.w-lightbox-spinner {
  box-sizing: border-box;
  border: 5px solid #0006;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  animation: .8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
}

.w-lightbox-spinner:after {
  content: "";
  border: 3px solid #0000;
  border-bottom-color: #fff;
  border-radius: 50%;
  position: absolute;
  inset: -4px;
}

.w-lightbox-hide {
  display: none;
}

.w-lightbox-noscroll {
  overflow: hidden;
}

@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }

  .w-lightbox-view, .w-lightbox-view:before {
    height: 96vh;
  }

  .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }

  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }

  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }

  .w-lightbox-left, .w-lightbox-right {
    opacity: .5;
    display: block;
  }

  .w-lightbox-close {
    opacity: .8;
  }

  .w-lightbox-control:hover {
    opacity: 1;
  }
}

.w-lightbox-inactive, .w-lightbox-inactive:hover {
  opacity: 0;
}

.w-richtext:before, .w-richtext:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-richtext:after {
  clear: both;
}

.w-richtext[contenteditable="true"]:before, .w-richtext[contenteditable="true"]:after {
  white-space: initial;
}

.w-richtext ol, .w-richtext ul {
  overflow: hidden;
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}

.w-richtext figure.w-richtext-figure-type-video > div:after, .w-richtext figure[data-rt-type="video"] > div:after {
  content: "";
  display: none;
  position: absolute;
  inset: 0;
}

.w-richtext figure {
  max-width: 60%;
  position: relative;
}

.w-richtext figure > div:before {
  cursor: default !important;
}

.w-richtext figure img {
  width: 100%;
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: .6;
}

.w-richtext figure div {
  color: #0000;
  font-size: 0;
}

.w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"] {
  display: table;
}

.w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}

.w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption {
  caption-side: bottom;
  display: table-caption;
}

.w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}

.w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}

.w-richtext figure.w-richtext-align-center {
  clear: both;
  margin-left: auto;
  margin-right: auto;
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  text-align: center;
  clear: both;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  background: #c8c8c8;
  min-width: 200px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: #0000;
  tap-highlight-color: #0000;
  -webkit-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before, .w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

:root {
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--dark);
  --_🔠-typography---font-family--body-2: var(--_🔠-typography---font--body);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--light-88);
  --_🔠-typography---size--body-2: 16px;
  --_🔠-typography---line-height--body-2: 24px;
  --_🔠-typography---font-weight--body-2: var(--_🔠-typography---weight--body);
  --_🔠-typography---letter-spacing--body-2: 0px;
  --_🔠-typography---font-family--h1: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h1: 60px;
  --_🔠-typography---line-height--h1: 64px;
  --_🔠-typography---font-weight--h1: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h1: -2.5px;
  --_🔠-typography---font-family--h2: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h2: 48px;
  --_🔠-typography---line-height--h2: 52px;
  --_🔠-typography---font-weight--h2: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h2: -2px;
  --_🔠-typography---font-family--h3: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h3: 40px;
  --_🔠-typography---line-height--h3: 44px;
  --_🔠-typography---font-weight--h3: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h3: -1px;
  --_🔠-typography---font-family--h4: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h4: 32px;
  --_🔠-typography---line-height--h4: 40px;
  --_🔠-typography---font-weight--h4: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h4: -1px;
  --_🔠-typography---font-family--h5: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h5: 28px;
  --_🔠-typography---line-height--h5: 32px;
  --_🔠-typography---font-weight--h5: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h5: -1px;
  --_🔠-typography---font-family--h6: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h6: 20px;
  --_🔠-typography---line-height--h6: 24px;
  --_🔠-typography---font-weight--h6: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h6: -.5px;
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--light-64);
  --_🔠-typography---font--heading-serif: "Instrument Serif", sans-serif;
  --spacing--12: 12px;
  --_🔠-typography---font-family--button-2: var(--_🔠-typography---font--button);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--light-64);
  --_🔠-typography---size--button-2: 14px;
  --_🔠-typography---line-height--button-2: 16px;
  --_🔠-typography---font-weight--button-2: var(--_🔠-typography---weight--button);
  --_🔠-typography---letter-spacing--button-2: 0px;
  --spacing--0: 0px;
  --spacing--16: 16px;
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🔘-radius---ui-elements--input: 8px;
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---ui--input-bg);
  --_🔠-typography---font-family--label-1: var(--_🔠-typography---font--label);
  --_🔠-typography---size--label-1: 12px;
  --_🔠-typography---line-height--label-1: 16px;
  --_🔠-typography---font-weight--label-1: var(--_🔠-typography---weight--label);
  --_🔠-typography---letter-spacing--label-1: 1px;
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--light-16);
  --spacing--24: 24px;
  --container--small: 1080px;
  --grid--page-padding: 48px;
  --_🔠-typography---font-family--body-3: var(--_🔠-typography---font--body);
  --_🔠-typography---size--body-3: 14px;
  --_🔠-typography---line-height--body-3: 16px;
  --_🔠-typography---font-weight--body-3: var(--_🔠-typography---weight--body);
  --_🔠-typography---letter-spacing--body-3: 0px;
  --section-padding--small: 80px;
  --section-padding--large: 160px;
  --spacing--64: 64px;
  --_spacing---radius--24\<deleted\|variable-7ed2b0ff-bd46-a18a-a853-254e7a6feaf7\>: 24px;
  --section-padding--extra-small: 32px;
  --_🔠-typography---font-family--body-1: var(--_🔠-typography---font--body);
  --_🔠-typography---size--body-1: 20px;
  --_🔠-typography---line-height--body-1: 28px;
  --_🔠-typography---font-weight--body-1: var(--_🔠-typography---weight--body);
  --_🔠-typography---letter-spacing--body-1: 0px;
  --_🔠-typography---font-family--label-2: var(--_🔠-typography---font--label);
  --_🔠-typography---size--label-2: 10px;
  --_🔠-typography---line-height--label-2: 12px;
  --_🔠-typography---font-weight--label-2: var(--_🔠-typography---weight--label);
  --_🔠-typography---letter-spacing--label-2: 1px;
  --_🔘-radius---general--default: 12px;
  --_🎨-color--base---ui--error: #c94040;
  --_🎨-color--base---neutral--light-100: #f6f3f0;
  --spacing--48: 48px;
  --_🎨-color--base---neutral--dark-0: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 0%, transparent);
  --_🎨-color--base---neutral--light-0: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 0%, transparent);
  --_🎨-color--base---ui--success: #2ad87f;
  --_🎨-color--base---neutral--dark-100: #0b0c0e;
  --spacing--32: 32px;
  --spacing--8: 8px;
  --_🔘-radius---ui-elements--button-base: 8px;
  --_🔠-typography---font-family--button-1: var(--_🔠-typography---font--button);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🔠-typography---size--button-1: 16px;
  --_🔠-typography---line-height--button-1: 20px;
  --_🔠-typography---font-weight--button-1: var(--_🔠-typography---weight--button);
  --_🔠-typography---letter-spacing--button-1: 0px;
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_❇️-icon---icon-size--small: 12px;
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --spacing--4: 4px;
  --_🔠-typography---font-family--h0: var(--_🔠-typography---font--heading-sans);
  --_🔠-typography---size--h0: 124px;
  --_🔠-typography---line-height--h0: 124px;
  --_🔠-typography---font-weight--h0: var(--_🔠-typography---weight--heading-sans);
  --_🔠-typography---letter-spacing--h0: -4px;
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--light-88);
  --_🔘-radius---ui-elements--button-circle: 24px;
  --_❇️-icon---icon-size--medium: 16px;
  --_🔠-typography---weight--body-bold: var(--_🔠-typography---all-weights--semi-bold);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--light-8);
  --_🔘-radius---general--small: 8px;
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--dark);
  --_❇️-icon---icon-stroke: 1.5px;
  --spacing--20: 20px;
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--light-4);
  --_🎨-color--base---accent--primary-2: #3578ff;
  --_🎨-color--base---accent--primary: #0055fe;
  --max-width--4-columns: 448px;
  --max-width--5-columns: 564px;
  --max-width--2-columns: 216px;
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--base---neutral--dark-16: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 16%, transparent);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--light-32);
  --grid--column-gap: 16px;
  --_🔘-radius---general--full: 100vw;
  --_🎨-color--base---neutral--light-16: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 16%, transparent);
  --_🎨-color--base---accent--primary-3: #032d81;
  --max-width--6-columns: 680px;
  --max-width--3-columns: 332px;
  --spacing--120: 120px;
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--dark);
  --_🎨-color--base---neutral--dark-32: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 32%, transparent);
  --max-width--7-columns: 796px;
  --_❇️-icon---icon-size--large: 20px;
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--base---neutral--light-4: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 4%, transparent);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--light-64);
  --_🔠-typography---font--heading-sans: "DM Sans", sans-serif;
  --_🔠-typography---font--body: "DM Sans", sans-serif;
  --_🔠-typography---font--label: "DM Sans", sans-serif;
  --_🔠-typography---font--button: "DM Sans", sans-serif;
  --_🔠-typography---weight--heading-serif: var(--_🔠-typography---all-weights--medium);
  --_🔠-typography---weight--heading-sans: var(--_🔠-typography---all-weights--medium);
  --_🔠-typography---weight--body: var(--_🔠-typography---all-weights--normal);
  --_🔠-typography---weight--label: var(--_🔠-typography---all-weights--normal);
  --_🔠-typography---weight--button: var(--_🔠-typography---all-weights--medium);
  --_🔘-radius---general--large: 24px;
  --spacing--80: 80px;
  --section-padding--extra-large: 200px;
  --section-padding--medium: 120px;
  --max-width--8-columns: 912px;
  --max-width--9-columns: 1028px;
  --max-width--10-columns: 1144px;
  --max-width--12-columns: 1376px;
  --grid--content-gap: 120px;
  --container--main: 1800px;
  --_🔘-radius---ui-elements--tag: 16px;
  --_🎨-color--base---neutral--dark-88: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 88%, transparent);
  --_🎨-color--base---neutral--dark-64: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 64%, transparent);
  --_🎨-color--base---neutral--dark-48: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 48%, transparent);
  --_🎨-color--base---neutral--dark-8: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 8%, transparent);
  --_🎨-color--base---neutral--dark-4: color-mix(in srgb, var(--_🎨-color--base---neutral--dark-100) 4%, transparent);
  --_🎨-color--base---neutral--light-88: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 88%, transparent);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--base---neutral--light-64: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 64%, transparent);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--dark);
  --_🎨-color--base---neutral--light-48: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 48%, transparent);
  --_🎨-color--base---neutral--light-32: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 32%, transparent);
  --_❇️-icon---icon-size--extra-large: 36px;
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--base---neutral--light-8: color-mix(in srgb, var(--_🎨-color--base---neutral--light-100) 8%, transparent);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--base---background-base--light: #f6f3f0;
  --_🎨-color--base---background-base--dark: #0b0c0e;
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--base---background-lift--light: white;
  --_🎨-color--base---background-lift--dark: #1a1a1a;
  --_🎨-color--base---background-lift-low-opacity--light: #ffffffa3;
  --_🎨-color--base---background-lift-low-opacity--dark: #1a1a1a52;
  --_🎨-color--base---background-depth--light: #f0f0f0;
  --_🎨-color--base---background-depth--dark: #222;
  --_🎨-color--base---ui--warning: #c56a21;
  --_🔠-typography---all-weights--thin: 100;
  --_🔠-typography---all-weights--extra-light: 200;
  --_🔠-typography---all-weights--light: 300;
  --_🔠-typography---all-weights--normal: 400;
  --_🎨-color--base---ui--input-bg: #f8f8f8;
  --_🔠-typography---all-weights--medium: 500;
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--dark-88);
  --_🔠-typography---all-weights--semi-bold: 600;
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🔠-typography---all-weights--bold: 700;
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--dark-64);
  --_🔠-typography---all-weights--extra-bold: 800;
  --_🔠-typography---all-weights--black: 900;
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--dark-0);
}

.w-layout-blockcontainer {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-layout-grid {
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.w-form-formradioinput--inputType-custom {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}

.w-form-formradioinput--inputType-custom.w--redirected-focus {
  box-shadow: 0 0 3px 1px #3898ec;
}

.w-form-formradioinput--inputType-custom.w--redirected-checked {
  border-width: 4px;
  border-color: #3898ec;
}

.w-checkbox {
  margin-bottom: 5px;
  padding-left: 20px;
  display: block;
}

.w-checkbox:before {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-checkbox:after {
  content: " ";
  clear: both;
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-checkbox-input {
  float: left;
  margin: 4px 0 0 -20px;
  line-height: normal;
}

.w-checkbox-input--inputType-custom {
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 12px;
  height: 12px;
}

.w-checkbox-input--inputType-custom.w--redirected-checked {
  background-color: #3898ec;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-color: #3898ec;
}

.w-checkbox-input--inputType-custom.w--redirected-focus {
  box-shadow: 0 0 3px 1px #3898ec;
}

@media screen and (max-width: 991px) {
  .w-layout-blockcontainer {
    max-width: 728px;
  }
}

@media screen and (max-width: 767px) {
  .w-layout-blockcontainer {
    max-width: none;
  }
}

body {
  background-color: var(--_🎨-color--tokens---background--base);
  font-family: var(--_🔠-typography---font-family--body-2);
  color: var(--_🎨-color--tokens---text-body--strong);
  font-size: var(--_🔠-typography---size--body-2);
  line-height: var(--_🔠-typography---line-height--body-2);
  font-weight: var(--_🔠-typography---font-weight--body-2);
  letter-spacing: var(--_🔠-typography---letter-spacing--body-2);
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--dark);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--light-8);
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--dark);
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--light-4);
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--light-32);
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--dark);
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--dark);
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--dark-0);
}

h1 {
  font-family: var(--_🔠-typography---font-family--h1);
  font-size: var(--_🔠-typography---size--h1);
  line-height: var(--_🔠-typography---line-height--h1);
  font-weight: var(--_🔠-typography---font-weight--h1);
  letter-spacing: var(--_🔠-typography---letter-spacing--h1);
  margin-top: 0;
  margin-bottom: 0;
}

h2 {
  font-family: var(--_🔠-typography---font-family--h2);
  font-size: var(--_🔠-typography---size--h2);
  line-height: var(--_🔠-typography---line-height--h2);
  font-weight: var(--_🔠-typography---font-weight--h2);
  letter-spacing: var(--_🔠-typography---letter-spacing--h2);
  margin-top: 20px;
  margin-bottom: 10px;
}

h3 {
  font-family: var(--_🔠-typography---font-family--h3);
  font-size: var(--_🔠-typography---size--h3);
  line-height: var(--_🔠-typography---line-height--h3);
  font-weight: var(--_🔠-typography---font-weight--h3);
  letter-spacing: var(--_🔠-typography---letter-spacing--h3);
  margin-top: 20px;
  margin-bottom: 10px;
}

h4 {
  font-family: var(--_🔠-typography---font-family--h4);
  font-size: var(--_🔠-typography---size--h4);
  line-height: var(--_🔠-typography---line-height--h4);
  font-weight: var(--_🔠-typography---font-weight--h4);
  letter-spacing: var(--_🔠-typography---letter-spacing--h4);
  margin-top: 10px;
  margin-bottom: 10px;
}

h5 {
  font-family: var(--_🔠-typography---font-family--h5);
  font-size: var(--_🔠-typography---size--h5);
  line-height: var(--_🔠-typography---line-height--h5);
  font-weight: var(--_🔠-typography---font-weight--h5);
  letter-spacing: var(--_🔠-typography---letter-spacing--h5);
  margin-top: 10px;
  margin-bottom: 10px;
}

h6 {
  font-family: var(--_🔠-typography---font-family--h6);
  font-size: var(--_🔠-typography---size--h6);
  line-height: var(--_🔠-typography---line-height--h6);
  font-weight: var(--_🔠-typography---font-weight--h6);
  letter-spacing: var(--_🔠-typography---letter-spacing--h6);
  margin-top: 10px;
  margin-bottom: 10px;
}

p {
  font-family: var(--_🔠-typography---font-family--body-2);
  font-size: var(--_🔠-typography---size--body-2);
  line-height: var(--_🔠-typography---line-height--body-2);
  font-weight: var(--_🔠-typography---font-weight--body-2);
  letter-spacing: var(--_🔠-typography---letter-spacing--body-2);
  margin-bottom: 10px;
}

a {
  color: var(--_🎨-color--tokens---text-body--medium);
  text-decoration: none;
}

ul {
  color: var(--_🎨-color--tokens---text-body--medium);
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 20px;
}

img {
  max-width: 100%;
  display: inline-block;
}

blockquote {
  font-family: var(--_🔠-typography---font--heading-serif);
  font-size: var(--_🔠-typography---size--h5);
  line-height: var(--_🔠-typography---line-height--h5);
  font-weight: var(--_🔠-typography---font-weight--h6);
  letter-spacing: var(--_🔠-typography---letter-spacing--h6);
  background-image: url("https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/68fdc89912a8247314ea4c9b_Quotes.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 32px;
  border-left: 0 solid #000;
  margin-bottom: 10px;
  padding: 10px 40px 10px 0;
}

figcaption {
  margin-top: var(--spacing--12);
  font-family: var(--_🔠-typography---font-family--button-2);
  color: var(--_🎨-color--tokens---text-label--medium);
  font-size: var(--_🔠-typography---size--button-2);
  line-height: var(--_🔠-typography---line-height--button-2);
  font-weight: var(--_🔠-typography---font-weight--button-2);
  text-align: center;
  letter-spacing: var(--_🔠-typography---letter-spacing--button-2);
  text-transform: uppercase;
}

.text-field {
  margin-bottom: var(--spacing--0);
  padding: var(--spacing--12) var(--spacing--16);
  border: 1px solid var(--_🎨-color--tokens---input-default--border);
  border-radius: var(--_🔘-radius---ui-elements--input);
  background-color: var(--_🎨-color--tokens---input-default--background);
  font-family: var(--_🔠-typography---font-family--body-2);
  color: var(--_🎨-color--tokens---input-default--text);
  font-size: var(--_🔠-typography---size--body-2);
  line-height: var(--_🔠-typography---line-height--body-2);
  font-weight: var(--_🔠-typography---font-weight--body-2);
  letter-spacing: var(--_🔠-typography---letter-spacing--body-2);
  width: 100%;
  height: auto;
}

.text-field:focus {
  border-color: var(--_🎨-color--tokens---input-active--border);
  background-color: var(--_🎨-color--tokens---input-default--background);
  color: var(--_🎨-color--tokens---input-active--text);
}

.text-field:focus-visible, .text-field[data-wf-focus-visible] {
  border-color: var(--_🎨-color--tokens---input-active--border);
  background-color: var(--_🎨-color--tokens---input-active--background);
  color: var(--_🎨-color--tokens---input-active--text);
}

.text-field::placeholder {
  color: var(--_🎨-color--tokens---input-default--text);
}

.text-field.textarea {
  height: 120px;
}

.text-field.select {
  -webkit-appearance: none;
  appearance: none;
}

.label-large {
  font-family: var(--_🔠-typography---font-family--label-1);
  font-size: var(--_🔠-typography---size--label-1);
  line-height: var(--_🔠-typography---line-height--label-1);
  font-weight: var(--_🔠-typography---font-weight--label-1);
  letter-spacing: var(--_🔠-typography---letter-spacing--label-1);
  text-transform: uppercase;
  justify-content: flex-start;
  align-items: flex-end;
}

.section-divider {
  background-color: var(--_🎨-color--tokens---color-grade--light-16);
  width: 100%;
  height: 1px;
  margin-right: auto;
}

.template-hero-title-wrap {
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}

.main-container {
  z-index: 2;
  max-width: var(--container--small);
  padding-right: var(--grid--page-padding);
  padding-left: var(--grid--page-padding);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.text-h2 {
  font-family: var(--_🔠-typography---font-family--h2);
  font-size: var(--_🔠-typography---size--h2);
  line-height: var(--_🔠-typography---line-height--h2);
  font-weight: var(--_🔠-typography---font-weight--h2);
  letter-spacing: var(--_🔠-typography---letter-spacing--h2);
}

.text-small {
  font-family: var(--_🔠-typography---font-family--body-3);
  font-size: var(--_🔠-typography---size--body-3);
  line-height: var(--_🔠-typography---line-height--body-3);
  font-weight: var(--_🔠-typography---font-weight--body-3);
  letter-spacing: var(--_🔠-typography---letter-spacing--body-3);
  margin-top: 0;
  margin-bottom: 0;
}

.section {
  padding-top: var(--section-padding--small);
  padding-bottom: var(--section-padding--small);
  background-color: var(--_🎨-color--tokens---background--base);
  color: var(--_🎨-color--tokens---text-body--strong);
  position: relative;
}

.section.hero-template {
  padding-top: var(--section-padding--large);
  padding-bottom: var(--spacing--64);
  border-top-left-radius: var(--_spacing---radius--24\<deleted\|variable-7ed2b0ff-bd46-a18a-a853-254e7a6feaf7\>);
  border-top-right-radius: var(--_spacing---radius--24\<deleted\|variable-7ed2b0ff-bd46-a18a-a853-254e7a6feaf7\>);
}

.section.hero-section {
  padding-bottom: var(--spacing--0);
  min-height: 98vh;
  display: flex;
}

.section.cta-section {
  padding-top: var(--section-padding--extra-small);
  padding-bottom: var(--section-padding--extra-small);
}

.text-h4 {
  font-family: var(--_🔠-typography---font-family--h4);
  font-size: var(--_🔠-typography---size--h4);
  line-height: var(--_🔠-typography---line-height--h4);
  font-weight: var(--_🔠-typography---font-weight--h4);
  letter-spacing: var(--_🔠-typography---letter-spacing--h4);
}

.text-h5 {
  font-family: var(--_🔠-typography---font-family--h5);
  font-size: var(--_🔠-typography---size--h5);
  line-height: var(--_🔠-typography---line-height--h5);
  font-weight: var(--_🔠-typography---font-weight--h5);
  letter-spacing: var(--_🔠-typography---letter-spacing--h5);
}

.text-h6 {
  font-family: var(--_🔠-typography---font-family--h6);
  font-size: var(--_🔠-typography---size--h6);
  line-height: var(--_🔠-typography---line-height--h6);
  font-weight: var(--_🔠-typography---font-weight--h6);
  letter-spacing: var(--_🔠-typography---letter-spacing--h6);
}

.text-h3 {
  font-family: var(--_🔠-typography---font-family--h3);
  font-size: var(--_🔠-typography---size--h3);
  line-height: var(--_🔠-typography---line-height--h3);
  font-weight: var(--_🔠-typography---font-weight--h3);
  letter-spacing: var(--_🔠-typography---letter-spacing--h3);
  justify-content: flex-start;
  align-items: center;
}

.no-margins {
  margin-top: 0;
  margin-bottom: 0;
}

.text-large {
  font-family: var(--_🔠-typography---font-family--body-1);
  font-size: var(--_🔠-typography---size--body-1);
  line-height: var(--_🔠-typography---line-height--body-1);
  font-weight: var(--_🔠-typography---font-weight--body-1);
  letter-spacing: var(--_🔠-typography---letter-spacing--body-1);
  margin-top: 0;
  margin-bottom: 0;
}

.text-h1 {
  z-index: 1;
  font-family: var(--_🔠-typography---font-family--h1);
  font-size: var(--_🔠-typography---size--h1);
  line-height: var(--_🔠-typography---line-height--h1);
  font-weight: var(--_🔠-typography---font-weight--h1);
  letter-spacing: var(--_🔠-typography---letter-spacing--h1);
}

.label-small {
  font-family: var(--_🔠-typography---font-family--label-2);
  font-size: var(--_🔠-typography---size--label-2);
  line-height: var(--_🔠-typography---line-height--label-2);
  font-weight: var(--_🔠-typography---font-weight--label-2);
  letter-spacing: var(--_🔠-typography---letter-spacing--label-2);
  text-transform: uppercase;
}

.error-message {
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--base---ui--error);
  color: var(--_🎨-color--base---neutral--light-100);
  text-align: center;
}

.footer {
  padding-top: var(--spacing--48);
  padding-bottom: var(--section-padding--large);
  background-color: var(--_🎨-color--tokens---background--base);
  width: 100%;
  position: relative;
}

.wrap-submit-button {
  padding-right: var(--spacing--16);
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  display: flex;
  position: absolute;
  inset: 0% 0 0% auto;
}

.submit-button {
  z-index: 3;
  background-color: var(--_🎨-color--base---neutral--dark-0);
  color: var(--_🎨-color--base---neutral--light-0);
  width: 100%;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  inset: 0%;
}

.wrap-input-form {
  position: relative;
}

.success-message {
  border: 1px solid var(--_🎨-color--base---ui--success);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--base---ui--success);
  color: var(--_🎨-color--base---neutral--dark-100);
}

.utility-page-wrap {
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  display: flex;
}

.utility-page-wrap._404 {
  background-color: var(--_🎨-color--tokens---background--base);
  position: relative;
  overflow: hidden;
}

.utility-page-wrap.pw {
  background-color: var(--_🎨-color--tokens---background--base);
}

.utility-page-content {
  text-align: center;
  flex-direction: column;
  display: flex;
}

.utility-page-content._404 {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}

.utility-page-content.pw {
  z-index: 2;
  padding-right: var(--grid--page-padding);
  padding-left: var(--grid--page-padding);
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
}

.limit-500 {
  max-width: 500px;
}

._404-content {
  z-index: 1;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  max-width: 676px;
  display: flex;
  position: relative;
}

.heading-404 {
  max-width: 550px;
}

.utility-page-form {
  flex-direction: column;
  align-items: stretch;
  display: flex;
}

.utility-page-form.pw {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 420px;
}

.hidden {
  display: none;
}

.master-navigation {
  z-index: 999;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  position: fixed;
  top: 25px;
  left: 0;
  right: 0;
}

.cta-main {
  z-index: 2;
  padding: var(--spacing--12) var(--spacing--16);
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  border-radius: var(--_🔘-radius---ui-elements--button-base);
  pointer-events: auto;
  font-family: var(--_🔠-typography---font-family--button-1);
  color: var(--_🎨-color--tokens---button-primary-default--text);
  font-size: var(--_🔠-typography---size--button-1);
  line-height: var(--_🔠-typography---line-height--button-1);
  font-weight: var(--_🔠-typography---font-weight--button-1);
  letter-spacing: var(--_🔠-typography---letter-spacing--button-1);
  cursor: pointer;
  flex: none;
  justify-content: center;
  align-items: center;
  transition: color .3s;
  display: flex;
  position: relative;
}

.cta-main:where(.w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f) {
  color: var(--_🎨-color--tokens---button-secondary-default--text);
}

.cta-main:hover {
  color: var(--_🎨-color--tokens---button-primary-hover--text);
}

.cta-main:hover:where(.w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f) {
  color: var(--_🎨-color--tokens---button-secondary-default--text);
}

.button-text-mask {
  z-index: 2;
  height: var(--_🔠-typography---line-height--button-1);
  pointer-events: none;
  flex: none;
  position: relative;
  overflow: hidden;
}

.button-text-mask.button-2 {
  height: var(--_🔠-typography---line-height--button-2);
}

.button-text {
  z-index: 1;
  text-shadow: 0 1.5em 0 var(--_🎨-color--tokens---button-primary-hover--text);
  position: relative;
}

.button-text:where(.w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f), .button-text:where(.w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc) {
  text-shadow: 0 1.5em 0 var(--_🎨-color--tokens---button-secondary-hover--text);
}

.button-icon-wrap {
  width: var(--_❇️-icon---icon-size--small);
  height: var(--_❇️-icon---icon-size--small);
  pointer-events: none;
  flex: none;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  overflow: hidden;
}

.button-icon-wrap.right {
  margin-right: -4px;
}

.button-icon-wrap.left {
  margin-left: -4px;
}

.icon-button {
  z-index: 2;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.button-bg {
  border: 2px solid var(--_🎨-color--tokens---button-primary-default--border);
  border-radius: var(--_🔘-radius---ui-elements--button-base);
  background-color: var(--_🎨-color--tokens---button-primary-default--background);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  pointer-events: none;
  transition: background-color .3s;
  position: absolute;
  inset: 0%;
  box-shadow: 0 5px 30px 5px #0055fe52;
}

.button-bg:where(.w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f) {
  border-color: var(--_🎨-color--tokens---button-secondary-default--border);
  background-color: var(--_🎨-color--tokens---button-secondary-default--background);
  box-shadow: 0 5px 30px 5px #ffffff1a;
}

.button-bg:where(.w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc) {
  border-color: var(--_🎨-color--tokens---button-secondary-default--border);
  background-color: var(--_🎨-color--tokens---button-secondary-default--background);
}

.button-bg:hover {
  border-color: var(--_🎨-color--tokens---button-primary-hover--border);
  background-color: var(--_🎨-color--tokens---button-primary-hover--background);
}

.button-bg:hover:where(.w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f), .button-bg:hover:where(.w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc) {
  border-color: var(--_🎨-color--tokens---button-secondary-hover--border);
  background-color: var(--_🎨-color--tokens---button-secondary-hover--background);
}

.image-cover {
  z-index: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.image-cover.top-aligned {
  object-position: 50% 0%;
}

.sales-cta-master {
  z-index: 990;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  pointer-events: none;
  color: var(--_🎨-color--base---neutral--light-100);
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: fixed;
  inset: auto 0% 8px;
}

.sales-cta {
  z-index: 2;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  pointer-events: auto;
  background-color: #040404;
  border-radius: 8px;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 8px 8px 12px;
  display: flex;
  position: relative;
}

.cta-sales {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  pointer-events: auto;
  color: #fff;
  cursor: pointer;
  background-color: #ffffff14;
  border: 1px solid #ffffff29;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  font-family: Raveo Display;
  font-size: 14px;
  font-weight: 500;
  line-height: 114%;
  text-decoration: none;
  display: flex;
  position: relative;
}

.cta-sales.light {
  color: #161616;
  background-color: #eae8e3;
  border-style: none;
}

.master-sales-ctas {
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  padding-right: 32px;
}

.cta-small {
  padding: var(--spacing--8) var(--spacing--12);
  grid-column-gap: var(--spacing--4);
  grid-row-gap: var(--spacing--4);
  border-radius: var(--_🔘-radius---ui-elements--button-base);
  font-family: var(--_🔠-typography---font-family--button-2);
  color: var(--_🎨-color--tokens---button-primary-default--text);
  font-size: var(--_🔠-typography---size--button-2);
  line-height: var(--_🔠-typography---line-height--button-2);
  font-weight: var(--_🔠-typography---font-weight--button-2);
  letter-spacing: var(--_🔠-typography---letter-spacing--button-2);
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  transition: color .3s;
  display: flex;
  position: relative;
}

.cta-small:where(.w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc) {
  color: var(--_🎨-color--tokens---button-secondary-default--text);
}

.cta-small:hover {
  color: var(--_🎨-color--tokens---button-primary-hover--text);
}

.text-h0 {
  font-family: var(--_🔠-typography---font-family--h0);
  font-size: var(--_🔠-typography---size--h0);
  line-height: var(--_🔠-typography---line-height--h0);
  font-weight: var(--_🔠-typography---font-weight--h0);
  letter-spacing: var(--_🔠-typography---letter-spacing--h0);
}

.heading-strong {
  color: var(--_🎨-color--tokens---text-heading--strong);
}

.heading-medium {
  color: var(--_🎨-color--tokens---text-heading--medium);
}

.body-medium {
  color: var(--_🎨-color--tokens---text-body--medium);
}

.label-strong {
  color: var(--_🎨-color--tokens---text-label--strong);
}

.label-medium {
  color: var(--_🎨-color--tokens---text-label--medium);
}

.button-slider {
  padding: var(--spacing--8);
  border: 1px solid var(--_🎨-color--tokens---button-primary-default--border);
  border-radius: var(--_🔘-radius---ui-elements--button-circle);
  background-color: var(--_🎨-color--tokens---button-primary-default--background);
  color: var(--_🎨-color--tokens---button-primary-default--text);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: border-color .3s, background-color .3s, color .3s;
  display: flex;
}

.button-slider:where(.w-variant-3b1d5b2f-3e5d-c467-6981-e7b261b76e46) {
  border-color: var(--_🎨-color--tokens---button-secondary-default--border);
  background-color: var(--_🎨-color--tokens---button-secondary-default--background);
  color: var(--_🎨-color--tokens---button-secondary-default--text);
}

.button-slider:hover {
  border-color: var(--_🎨-color--tokens---button-primary-hover--border);
  background-color: var(--_🎨-color--tokens---button-primary-hover--background);
  color: var(--_🎨-color--tokens---button-primary-hover--text);
}

.button-slider:hover:where(.w-variant-3b1d5b2f-3e5d-c467-6981-e7b261b76e46) {
  border-color: var(--_🎨-color--tokens---button-secondary-hover--border);
  background-color: var(--_🎨-color--tokens---button-secondary-hover--background);
  color: var(--_🎨-color--tokens---button-secondary-hover--text);
}

.icon-slider-button {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
}

.icon-slider-button:where(.w-variant-b120320a-1721-bd0a-dc5a-134cc6348231) {
  transform: rotate(180deg);
}

.icon-slider-button.small {
  width: var(--_❇️-icon---icon-size--small);
  height: var(--_❇️-icon---icon-size--small);
  display: none;
}

.icon-slider-button.small:where(.w-variant-d26711b8-a3b3-43f2-79d5-5de28e1e347a) {
  display: flex;
}

.icon-slider-button.large {
  width: var(--_❇️-icon---icon-size--medium);
  height: var(--_❇️-icon---icon-size--medium);
}

.icon-slider-button.large:where(.w-variant-d26711b8-a3b3-43f2-79d5-5de28e1e347a) {
  display: none;
}

.wrap-icon-slider {
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.wrap-icon-slider:where(.w-variant-5ba9241a-7079-4c4d-345e-a0127f34962f) {
  transform: rotate(180deg);
}

.text-body-bold {
  font-weight: var(--_🔠-typography---weight--body-bold);
}

.section-divider-2, .section-divider-3 {
  background-color: #19181852;
  width: 100%;
  height: 1px;
  margin-right: auto;
}

.single-sales-pages {
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  flex-flow: column;
  display: flex;
}

.master-bg-grid {
  z-index: 3;
  max-width: var(--container--small);
  padding-right: var(--spacing--24);
  padding-left: var(--spacing--24);
  pointer-events: none;
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  inset: 0%;
}

.bg-grid {
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: space-between;
  place-items: center stretch;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.line-bg {
  background-color: var(--_🎨-color--tokens---color-grade--light-16);
  width: 1px;
  height: 100%;
}

.line-section {
  z-index: 10;
  background-color: var(--_🎨-color--tokens---color-grade--light-16);
  width: 100%;
  height: 1px;
  position: absolute;
  inset: 0% 0% auto;
}

.line-section.bottom {
  inset: auto 0% 0%;
}

.line-inner {
  max-width: var(--container--small);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
}

.circle-line {
  background-color: #cecece;
  width: 5px;
  height: 5px;
  position: relative;
}

.navbar {
  padding: var(--spacing--8);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-8);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--tokens---color-grade--light-8);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  color: var(--_🎨-color--tokens---text-body--strong);
}

.nav-coontainer {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.nav-link {
  padding: var(--spacing--12) var(--spacing--16);
  border-radius: var(--_🔘-radius---general--small);
  font-family: var(--_🔠-typography---font-family--button-2);
  color: var(--_🎨-color--tokens---text-body--strong);
  font-size: var(--_🔠-typography---size--button-2);
  line-height: var(--_🔠-typography---line-height--button-2);
  font-weight: var(--_🔠-typography---font-weight--button-2);
  letter-spacing: var(--_🔠-typography---letter-spacing--button-2);
  text-transform: uppercase;
  position: relative;
}

.nav-link.w--current {
  background-color: var(--_🎨-color--tokens---color-grade--light-8);
}

.nav-menu-inner {
  grid-column-gap: var(--spacing--4);
  grid-row-gap: var(--spacing--4);
  justify-content: center;
  align-items: center;
  display: flex;
}

.brand-nav {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--_🔘-radius---general--default);
  width: 64px;
  height: 48px;
  overflow: hidden;
}

.faq-vertical {
  z-index: 1;
  width: var(--_❇️-icon---icon-stroke);
  background-color: var(--_🎨-color--base---neutral--light-100);
  border-radius: 2px;
  height: 10px;
  position: absolute;
}

.faq-paragraph {
  padding-top: var(--spacing--32);
  color: var(--_🎨-color--tokens---text-heading--medium);
  margin-bottom: 0;
}

.faq-line {
  z-index: 1;
  height: var(--_❇️-icon---icon-stroke);
  background-color: var(--_🎨-color--base---neutral--light-100);
  border-radius: 2px;
  width: 12px;
  position: relative;
}

.faq-line.faq-vertical {
  width: var(--_❇️-icon---icon-stroke);
  height: 12px;
  position: absolute;
}

.expandable-bottom {
  transform-origin: 50% 0;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  overflow: hidden;
}

.tab-menu-faq {
  grid-column-gap: var(--spacing--12);
  grid-row-gap: var(--spacing--12);
  flex-flow: column;
  display: flex;
}

.expandable-top {
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tab-link-faq {
  background-color: var(--_🎨-color--base---neutral--light-0);
  cursor: pointer;
  width: 100%;
  padding: 0;
  display: block;
}

.tab-link-faq.w--current {
  background-color: #0000;
}

.faq-animated-box {
  border-radius: var(--_🔘-radius---general--small);
  flex: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  display: flex;
  position: relative;
}

.expandable-single {
  padding: var(--spacing--20);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-8);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--tokens---color-grade--light-4);
  color: var(--_🎨-color--tokens---text-heading--strong);
  cursor: pointer;
  transition: background-color .3s;
}

.expandable-single:hover {
  background-color: var(--_🎨-color--tokens---color-grade--light-16);
}

.faq-icon-bg {
  border: 1px solid var(--_🎨-color--base---accent--primary-2);
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--base---accent--primary);
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
}

.headline-centered {
  max-width: var(--max-width--4-columns);
  margin-right: auto;
  margin-bottom: var(--spacing--64);
  text-align: center;
  margin-left: auto;
}

.headline-centered.testimonials {
  max-width: var(--max-width--5-columns);
}

.page-wrap {
  overflow: clip;
}

.slider {
  background-color: var(--_🎨-color--base---neutral--light-0);
  height: auto;
}

.slide-nav {
  filter: drop-shadow(0 2px 5px #000000b3);
  font-size: 8px;
  position: static;
}

.slide-work {
  margin-right: var(--spacing--32);
}

.mask-work {
  width: 76%;
  margin-left: auto;
  margin-right: auto;
  overflow: visible;
}

.slider-button {
  background-color: var(--_🎨-color--base---neutral--light-0);
  justify-content: center;
  align-items: center;
  width: auto;
  height: 48px;
  transition: transform .5s;
  display: flex;
  top: 0;
  bottom: 0;
  right: 32px;
  overflow: visible;
}

.slider-button:active {
  transform: scale(.9);
}

.slider-button.previous {
  left: 32px;
  right: auto;
}

.work-card-link {
  border: 2px solid var(--_🎨-color--tokens---color-grade--light-4);
  border-radius: var(--_🔘-radius---general--default);
  color: var(--_🎨-color--tokens---text-body--strong);
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--dark);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--light-8);
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--dark);
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--light-4);
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--light-32);
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--dark);
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--dark);
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--dark-0);
  width: 100%;
  height: 450px;
  display: block;
  position: relative;
  overflow: hidden;
}

.image-wrap-work-card {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
}

.content-work-card {
  z-index: 2;
  padding: var(--spacing--24);
  grid-column-gap: var(--spacing--12);
  grid-row-gap: var(--spacing--12);
  background-image: linear-gradient(0deg, var(--_🎨-color--tokens---color-grade--dark-100), var(--_🎨-color--tokens---color-grade--dark-48) 35%, var(--_🎨-color--base---neutral--dark-0) 51%);
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.project {
  width: 100%;
}

.wrap-work-slider {
  width: 100%;
  position: relative;
  overflow: clip;
}

.wrap-work-slider.with-padding {
  margin-top: -40px;
  margin-bottom: -40px;
  padding-top: 40px;
  padding-bottom: 40px;
}

.shadow-work-slider {
  z-index: 1;
  background-image: linear-gradient(90deg, var(--_🎨-color--tokens---color-grade--dark-100), var(--_🎨-color--base---neutral--dark-0));
  pointer-events: none;
  width: 10%;
  height: 100%;
  position: absolute;
  inset: 0% auto 0% 0%;
}

.shadow-work-slider.right {
  background-image: linear-gradient(90deg, var(--_🎨-color--base---neutral--dark-0), var(--_🎨-color--tokens---color-grade--dark-100));
  inset: 0% 0% 0% auto;
}

.text-wrap-work-card {
  grid-column-gap: var(--spacing--12);
  grid-row-gap: var(--spacing--12);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.tag-wrap-work-card {
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  flex-flow: wrap;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}

.tag-wrap-work-card.absolute {
  position: absolute;
  inset: 24px 24px auto auto;
}

.tag-work {
  padding: var(--spacing--8) var(--spacing--12);
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--base---neutral--dark-16);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  color: var(--_🎨-color--base---neutral--light-100);
  text-align: center;
}

.tabs-pricing {
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.tabs-menu-pricing {
  margin-bottom: var(--spacing--32);
  padding: var(--spacing--4);
  grid-column-gap: var(--spacing--4);
  grid-row-gap: var(--spacing--4);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-32);
  border-radius: var(--_🔘-radius---general--default);
  justify-content: center;
  align-items: center;
  display: flex;
}

.tabs-content-pricing {
  width: 100%;
}

.tab-link-pricing {
  padding: var(--spacing--8) var(--spacing--20);
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--base---neutral--light-0);
  color: var(--_🎨-color--tokens---text-body--medium);
}

.tab-link-pricing.w--current {
  background-color: var(--_🎨-color--base---accent--primary);
  color: var(--_🎨-color--base---neutral--light-100);
}

.plan-top-tile {
  z-index: 2;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

.icon-plan {
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  display: flex;
}

.plan-bottom-tile {
  z-index: 2;
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
}

.pricing-halves {
  grid-column-gap: var(--grid--column-gap);
  grid-row-gap: var(--grid--column-gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  position: relative;
}

.card-plan {
  z-index: 2;
  padding: var(--spacing--32);
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--tokens---background--base);
  color: var(--_🎨-color--tokens---text-body--strong);
  flex-flow: column;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
}

.plan-middle-tile {
  z-index: 2;
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  display: flex;
  position: relative;
}

.plan-price-tile {
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.plan-list-item {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.plan-list {
  grid-column-gap: var(--spacing--12);
  grid-row-gap: var(--spacing--12);
  flex-flow: column;
  margin-bottom: 0;
  display: flex;
}

.tab-pane {
  width: 100%;
}

.plan-gradient {
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--base---accent--primary);
  filter: blur(90px);
  width: 30px;
  height: 600px;
  position: absolute;
  inset: -100px auto auto 57px;
  transform: rotate(-31deg);
}

.plan-gradient.smaller {
  inset: auto -90px -404px auto;
}

.icon-wrap-small {
  padding: var(--spacing--4);
  border: 1px solid var(--_🎨-color--base---neutral--light-16);
  border-radius: var(--_🔘-radius---general--small);
  background-image: linear-gradient(135deg, var(--_🎨-color--base---accent--primary), var(--_🎨-color--base---accent--primary-3));
  color: var(--_🎨-color--base---neutral--light-100);
}

.plans-bg {
  background-color: var(--_🎨-color--base---accent--primary);
  opacity: .35;
  filter: blur(200px);
  width: 250px;
  height: 250px;
  margin: auto;
  position: absolute;
  inset: 0;
}

.video-cta {
  padding: var(--spacing--64) var(--grid--page-padding);
  border: 1px solid var(--_🎨-color--base---neutral--light-16);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--tokens---color-grade--dark-100);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  overflow: hidden;
}

.master-cta-content {
  z-index: 2;
  max-width: var(--max-width--6-columns);
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  text-align: center;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
}

.overlay-cta {
  background-color: var(--_🎨-color--base---accent--primary-3);
  opacity: .58;
  filter: blur(75px);
  width: 500px;
  height: 140px;
  display: flex;
  position: absolute;
  inset: 196px auto auto -309px;
  transform: rotate(37deg);
}

.overlay-cta.second {
  width: 400px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  inset: auto -57px 275px auto;
}

.overlay-cta.third {
  width: 600px;
  top: 16px;
  left: -93px;
}

.headline-cta {
  grid-column-gap: var(--spacing--20);
  grid-row-gap: var(--spacing--20);
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.cta-paragraph {
  max-width: var(--max-width--3-columns);
}

.button-wrap-cta {
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  display: flex;
}

.text-serif {
  font-family: var(--_🔠-typography---font--heading-serif);
  font-style: italic;
}

.tag-plan {
  padding: var(--spacing--8) var(--spacing--12);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--spacing--8);
  background-color: var(--_🎨-color--base---neutral--dark-0);
  box-shadow: 0 0 7.5px 0 var(--_🎨-color--base---accent--primary-3);
  color: var(--_🎨-color--tokens---text-body--medium);
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  inset: 0% 0% auto auto;
  overflow: hidden;
}

.image-wrap-avatar-footer {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--_🔘-radius---general--default);
  width: 64px;
  height: 48px;
  overflow: hidden;
}

.footer-halves {
  grid-column-gap: var(--grid--column-gap);
  grid-row-gap: var(--grid--column-gap);
  grid-template-rows: auto;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.footer-columns {
  grid-column-gap: var(--grid--column-gap);
  grid-row-gap: var(--grid--column-gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.footer-column {
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  display: flex;
}

.footer-link-list {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.footer-link {
  font-family: var(--_🔠-typography---font-family--body-3);
  color: var(--_🎨-color--tokens---text-body--medium);
  font-size: var(--_🔠-typography---size--body-3);
  line-height: var(--_🔠-typography---line-height--body-3);
  font-weight: var(--_🔠-typography---font-weight--body-3);
  letter-spacing: var(--_🔠-typography---letter-spacing--body-3);
  text-shadow: 0 1.25em 0 var(--_🎨-color--tokens---text-body--medium);
  overflow: clip;
}

.footer-main-bg {
  border-top-left-radius: var(--_🔘-radius---general--full);
  border-top-right-radius: var(--_🔘-radius---general--full);
  background-image: linear-gradient(90deg, var(--_🎨-color--base---accent--primary), var(--_🎨-color--base---accent--primary-3));
  opacity: 1;
  filter: blur(75px);
  width: 95%;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  inset: auto 0% -125px;
}

.left-footer {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.socials-footer {
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.link-social {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-32);
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--tokens---color-grade--dark-100);
  flex: none;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: border-color .45s;
  display: flex;
  position: relative;
  overflow: clip;
}

.link-social:hover {
  border-color: var(--_🎨-color--base---accent--primary);
}

.icon-social {
  z-index: 2;
  width: var(--_❇️-icon---icon-size--medium);
  height: var(--_❇️-icon---icon-size--medium);
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.footer-bottom {
  margin-top: var(--spacing--120);
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  flex-flow: column;
  display: flex;
}

.footer-bottom-tile {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.text-underline {
  text-decoration: underline;
}

.footer-left-top-tile {
  max-width: var(--max-width--3-columns);
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.hero-avatar {
  z-index: 3;
  border-radius: var(--_🔘-radius---general--default);
  width: 100%;
  max-width: 300px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  position: absolute;
  overflow: visible;
}

.master-hero {
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.marquee {
  z-index: 2;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.marquee-text {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  color: var(--_🎨-color--tokens---text-body--subtle);
  display: flex;
}

.single-marquee-text {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  flex: none;
  display: flex;
}

.shadow-marquee {
  background-image: linear-gradient(90deg, var(--_🎨-color--tokens---color-grade--dark-100), var(--_🎨-color--base---neutral--dark-0));
  width: 100px;
  height: 100%;
  position: absolute;
  inset: 0% auto 0% 0%;
}

.shadow-marquee.right {
  background-image: linear-gradient(90deg, var(--_🎨-color--base---neutral--dark-0), var(--_🎨-color--tokens---color-grade--dark-100));
  inset: 0% 0% 0% auto;
}

.wrap-progressive-blur {
  z-index: 99;
  pointer-events: none;
  width: 100%;
  height: 100%;
  max-height: 8rem;
  position: fixed;
  inset: auto 0% 100%;
  overflow: clip;
}

.progressive-blur-panel {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  -webkit-mask: linear-gradient(#0000 10%, #000 20% 40%, #0000 50%);
  mask: linear-gradient(#0000 10%, #000 20% 40%, #0000 50%);
}

.progressive-blur-panel.is-3 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 0%, #000 20% 30%, #0000 50%);
  mask: linear-gradient(#0000 0%, #000 20% 30%, #0000 50%);
}

.progressive-blur-panel.is-6 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 30%, #000 50% 60%, #0000 80%);
  mask: linear-gradient(#0000 30%, #000 50% 60%, #0000 80%);
}

.progressive-blur-panel.is-8 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 50%, #000 70% 80%, #0000 100%);
  mask: linear-gradient(#0000 50%, #000 70% 80%, #0000 100%);
}

.progressive-blur-panel.is-10 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 70%, #000 90%, #0000 100%);
  mask: linear-gradient(#0000 70%, #000 90%, #0000 100%);
}

.progressive-blur-panel.is-5 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 20%, #000 40% 50%, #0000 70%);
  mask: linear-gradient(#0000 20%, #000 40% 50%, #0000 70%);
}

.progressive-blur-panel.is-4 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 10%, #000 30% 40%, #0000 60%);
  mask: linear-gradient(#0000 10%, #000 30% 40%, #0000 60%);
}

.progressive-blur-panel.is-2 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / var(--ratio)));
  backdrop-filter: blur(calc(var(--blur) / var(--ratio)));
  -webkit-mask: linear-gradient(#0000 0%, #000 10% 20%, #0000 40%);
  mask: linear-gradient(#0000 0%, #000 10% 20%, #0000 40%);
}

.progressive-blur-panel.is-7 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 40%, #000 60% 70%, #0000 90%);
  mask: linear-gradient(#0000 40%, #000 60% 70%, #0000 90%);
}

.progressive-blur-panel.is-1 {
  -webkit-backdrop-filter: blur(var(--blur));
  backdrop-filter: blur(var(--blur));
  -webkit-mask: linear-gradient(#000 0% 10%, #0000 30%);
  mask: linear-gradient(#000 0% 10%, #0000 30%);
}

.progressive-blur-panel.is-9 {
  -webkit-backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  backdrop-filter: blur(calc(var(--blur) / (var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio) * var(--ratio))));
  -webkit-mask: linear-gradient(#0000 60%, #000 80% 90%, #0000 100%);
  mask: linear-gradient(#0000 60%, #000 80% 90%, #0000 100%);
}

.progressive-blur {
  z-index: 990;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: clip;
  transform: rotate(180deg);
}

.nav-link-bg {
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--tokens---color-grade--light-8);
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
}

.slide-testimonial {
  margin-right: var(--spacing--32);
}

.mask-testimonial {
  max-width: var(--max-width--3-columns);
  border: 1px solid var(--_🎨-color--base---accent--primary-2);
  border-radius: var(--_🔘-radius---general--default);
  margin-left: auto;
  margin-right: auto;
  overflow: visible;
  box-shadow: 0 5px 30px 5px #032d8180;
}

.card-testimonial {
  z-index: 12;
  padding: var(--spacing--24);
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 360px;
  display: flex;
  position: relative;
}

.right-nav {
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  justify-content: center;
  align-items: center;
  display: flex;
}

.mode-button {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--tokens---color-grade--light-4);
  color: var(--_🎨-color--tokens---color-grade--light-88);
  cursor: pointer;
  flex-flow: column;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.icon-wrap-mode {
  flex: none;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  display: flex;
  position: static;
}

.icon-mode {
  width: var(--_❇️-icon---icon-size--medium);
  height: var(--_❇️-icon---icon-size--medium);
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.quotes-testimonial {
  opacity: .55;
  color: var(--_🎨-color--base---accent--primary);
  justify-content: center;
  align-items: center;
  width: 64px;
  display: flex;
  position: absolute;
  inset: auto 24px 24px auto;
}

.testimonial-author {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  display: flex;
}

.avatar-testimonial {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-8);
  border-radius: var(--_🔘-radius---general--default);
  flex: none;
  width: 48px;
  height: 36px;
  overflow: hidden;
}

.text-wrap-author-testimonial {
  grid-column-gap: var(--spacing--4);
  grid-row-gap: var(--spacing--4);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.wrap-card-testimonial {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-8);
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--tokens---color-grade--light-4);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.card-testimonial-bg {
  background-color: var(--_🎨-color--base---accent--primary-2);
  opacity: .52;
  filter: blur(75px);
  width: 60px;
  height: 300px;
  position: absolute;
  inset: -20% 0% auto auto;
  transform: rotate(31deg);
}

.popup-contact {
  z-index: 9999;
  padding: var(--grid--page-padding);
  background-color: var(--_🎨-color--tokens---color-grade--light-4);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;
  position: fixed;
  inset: 0%;
}

.form-block-contact {
  padding: var(--spacing--32);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--tokens---background--lift);
  color: var(--_🎨-color--tokens---text-body--strong);
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--light);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--light-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--dark-8);
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--light);
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--dark-4);
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--light);
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--light);
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--light-0);
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
}

.contact-form-inner {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  flex-flow: column;
  width: 100%;
  display: flex;
}

.input-wrap {
  grid-column-gap: var(--spacing--8);
  grid-row-gap: var(--spacing--8);
  flex-flow: column;
  width: 100%;
  display: flex;
  position: relative;
}

.contact-form-bottom-tile {
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

.input-halves {
  grid-column-gap: var(--grid--column-gap);
  grid-row-gap: var(--grid--column-gap);
  grid-template-rows: auto;
}

.checkbox-text {
  color: var(--_🎨-color--tokens---text-body--strong);
  margin-bottom: 0;
  font-weight: 400;
}

.select-arrow {
  color: #000;
  flex: none;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  display: flex;
}

.checkbox-contact {
  border: 1px solid var(--_🎨-color--tokens---input-default--border);
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--tokens---input-default--background);
  flex: none;
  width: 20px;
  height: 20px;
  margin-top: 0;
}

.checkbox-contact.w--redirected-checked {
  background-color: #f6f3f0;
  background-image: url("https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/68fa6774d971689161f1e23d_Tick.svg");
  background-position: 50%;
  background-size: auto;
  border-color: #0000;
}

.select-field-overlay {
  pointer-events: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  position: absolute;
  inset: 0%;
}

.submit-wrap {
  position: relative;
}

.checkbox {
  grid-column-gap: var(--spacing--12);
  grid-row-gap: var(--spacing--12);
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--light);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--light-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--dark-8);
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--light);
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--dark-4);
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--light);
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--light);
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--light-0);
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;
  padding-left: 10px;
  display: flex;
}

.input-relative {
  width: 100%;
  position: relative;
}

.submit-absolute {
  z-index: 3;
  color: #0000;
  background-color: #0000;
  position: absolute;
  inset: 0%;
}

.form {
  z-index: 2;
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--dark);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--light-8);
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--dark);
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--light-4);
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--light-32);
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--dark);
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--dark);
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--dark-0);
  position: relative;
}

.form-price-wrap {
  grid-column-gap: var(--spacing--12);
  grid-row-gap: var(--spacing--8);
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.radio-button {
  border: 1px solid var(--_🎨-color--base---neutral--dark-32);
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--base---neutral--light-0);
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  position: absolute;
  inset: 0%;
}

.radio-button.w--redirected-checked {
  border-width: 1px;
  border-color: var(--_🎨-color--base---neutral--dark-32);
  background-color: #cfdfff;
}

.radio-button.w--redirected-focus {
  box-shadow: 0 0 #0000;
}

.radio-button-field {
  padding: var(--spacing--8) var(--spacing--16);
  position: relative;
}

.radio-text {
  z-index: 2;
  margin-bottom: 0;
  position: relative;
}

.form-bg {
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--base---accent--primary);
  filter: blur(150px);
  width: 150px;
  height: 500px;
  position: absolute;
  inset: -152px 0% auto auto;
  transform: rotate(42deg);
}

.popup-close-button {
  z-index: 3;
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--base---accent--primary);
  color: var(--_🎨-color--base---neutral--light-100);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  display: flex;
  position: absolute;
  inset: 16px 32px auto auto;
}

.icon-menu {
  width: var(--_❇️-icon---icon-size--small);
  height: var(--_❇️-icon---icon-size--small);
  justify-content: center;
  align-items: center;
  display: flex;
}

.services-list {
  max-width: var(--max-width--7-columns);
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.card-service {
  padding: var(--spacing--32);
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--_🔘-radius---general--default);
  background-color: var(--_🎨-color--tokens---background--base);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 360px;
  display: flex;
  position: sticky;
  top: 140px;
  overflow: hidden;
}

.service-card-top-tile {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.icon-service {
  width: var(--_❇️-icon---icon-size--large);
  height: var(--_❇️-icon---icon-size--large);
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.icon-wrap-service {
  border-radius: var(--_🔘-radius---general--small);
  box-shadow: 0 2px 5px 0 #0055fe59, inset 0 0 0 1px var(--_🎨-color--tokens---color-grade--light-8);
  color: var(--_🎨-color--tokens---icon--medium);
  justify-content: center;
  align-items: center;
  padding: 3px;
  display: flex;
  position: relative;
  overflow: hidden;
}

.service-card-inner {
  z-index: 2;
  grid-column-gap: var(--spacing--64);
  grid-row-gap: var(--spacing--64);
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.service-card-bg {
  background-color: var(--_🎨-color--base---accent--primary);
  opacity: .66;
  filter: blur(100px);
  width: 150px;
  height: 450px;
  position: absolute;
  inset: -173px 82px auto auto;
  transform: rotate(66deg);
}

.service-card-bg.footer-left-top-tile {
  inset: auto auto -240px -63px;
  transform: rotate(53deg);
}

.icon-wrap-with-border {
  z-index: 2;
  padding: var(--spacing--12);
  border-radius: var(--_🔘-radius---general--small);
  background-color: var(--_🎨-color--base---neutral--light-4);
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.border-line {
  z-index: 8;
  background-image: linear-gradient(90deg, var(--_🎨-color--base---neutral--light-0), var(--_🎨-color--base---accent--primary) 49%, var(--_🎨-color--base---neutral--light-0));
  flex: none;
  width: 25px;
  height: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
}

.service-card-bg-text {
  font-family: var(--_🔠-typography---font--heading-serif);
  color: var(--_🎨-color--base---neutral--light-0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--_🎨-color--tokens---color-grade--light-8);
  font-size: 200px;
  line-height: 100%;
  position: absolute;
  inset: 0% 0% auto auto;
}

.wrap-services {
  position: relative;
}

.social-bg {
  border-radius: var(--_🔘-radius---general--full);
  background-color: var(--_🎨-color--base---accent--primary);
  transform-origin: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
}

.nav-link-text {
  z-index: 3;
  text-shadow: 0 1.25em 0 var(--_🎨-color--tokens---text-body--strong);
  position: relative;
  overflow: clip;
}

.image-hero {
  border-radius: var(--_🔘-radius---general--default);
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  inset: 0%;
}

.image-hero.second {
  z-index: 2;
}

.image-hero.third {
  z-index: 3;
}

.master-404 {
  padding: var(--section-padding--small) var(--grid--page-padding);
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  display: flex;
  position: relative;
}

.hero-text-wrap {
  z-index: 4;
  max-width: var(--max-width--3-columns);
  text-align: center;
  mix-blend-mode: difference;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  inset: auto 0% 52px;
}

.marquee-logos {
  grid-column-gap: var(--spacing--64);
  grid-row-gap: var(--spacing--64);
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.single-logo-marquee {
  grid-column-gap: var(--spacing--64);
  grid-row-gap: var(--spacing--64);
  flex: none;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.company-logo {
  color: var(--_🎨-color--tokens---icon--medium);
  flex: none;
  justify-content: center;
  align-items: center;
  max-width: 140px;
  height: 48px;
  display: flex;
}

.case-study-info-block {
  margin-bottom: var(--spacing--48);
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  display: flex;
}

.image-wrap-case-study {
  border-radius: var(--_🔘-radius---general--default);
  width: 100%;
  height: 450px;
  position: relative;
  overflow: hidden;
}

.case-studies {
  width: 100%;
}

.cases-halves {
  grid-column-gap: var(--grid--column-gap);
  grid-row-gap: var(--grid--column-gap);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.headline-more-cases {
  margin-bottom: var(--spacing--48);
}

.master-case-body {
  grid-column-gap: var(--spacing--64);
  grid-row-gap: var(--spacing--64);
  flex-flow: column;
  display: flex;
}

.body-case p {
  color: var(--_🎨-color--tokens---text-body--medium);
}

.body-case img {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  border-radius: var(--_🔘-radius---general--default);
}

.list-template-halves {
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  flex-flow: wrap;
  grid-template-rows: auto;
  justify-content: space-between;
  place-items: center start;
  width: 100%;
  display: flex;
}

.color-grid {
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.color-tile {
  background-color: var(--_🎨-color--base---neutral--light-100);
  width: 100%;
  height: 200px;
}

.color-tile.color-2 {
  background-color: var(--_🎨-color--base---neutral--dark-100);
}

.color-tile.color-3 {
  background-color: var(--_🎨-color--base---accent--primary);
}

.style-heading-wrap {
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  display: flex;
}

.button-grid {
  grid-column-gap: 64px;
  grid-row-gap: 64px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
}

.typeface-right {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1072px;
  display: flex;
}

.list-template-title {
  margin-bottom: var(--spacing--24);
}

.style-button-tile {
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
}

.title-template {
  margin-bottom: 48px;
}

.style-text-info {
  grid-column-gap: var(--spacing--32);
  grid-row-gap: var(--spacing--32);
  flex-flow: wrap;
  display: flex;
}

.template-info-master {
  grid-column-gap: var(--spacing--120);
  grid-row-gap: var(--spacing--120);
  color: var(--_🎨-color--tokens---text-body--strong);
  flex-flow: column;
  display: flex;
}

.divider-template {
  background-color: var(--_🎨-color--tokens---color-grade--light-64);
  width: 100%;
  height: 1px;
  margin-right: auto;
}

.style-value-text {
  font-weight: 400;
}

.color-info {
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  color: var(--_🎨-color--tokens---color-grade--dark-100);
  border-top: 1px solid #000;
  flex-flow: column;
  padding: 32px 24px 24px;
  display: flex;
}

.list-template {
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  flex-flow: column;
  display: flex;
}

.typeface-heading-example {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 150px;
  font-weight: 700;
}

.typeface-left {
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  text-align: center;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  display: flex;
}

.typeface-block {
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  flex-flow: column;
  display: flex;
}

.template-tile {
  padding: var(--spacing--48);
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-64);
}

.style-info-item {
  grid-column-gap: var(--spacing--16);
  grid-row-gap: var(--spacing--16);
  display: flex;
}

.heading-hero {
  grid-column-gap: var(--spacing--20);
  grid-row-gap: 0px;
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.color-card {
  border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
  background-color: var(--_🎨-color--tokens---color-grade--light-100);
  overflow: hidden;
}

.typeface-halves {
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  grid-template-rows: auto;
  grid-template-columns: auto minmax(200px, 1072px);
  justify-content: space-between;
  place-items: center;
  display: flex;
}

.styles-subtitle {
  color: var(--_🎨-color--tokens---color-grade--light-88);
  font-weight: 500;
}

.licenses-list {
  grid-column-gap: var(--spacing--48);
  grid-row-gap: var(--spacing--48);
  flex-flow: column;
  display: flex;
}

.licenses-block {
  padding: var(--spacing--32);
  grid-column-gap: var(--spacing--24);
  grid-row-gap: var(--spacing--24);
  border-style: solid;
  border-width: 1px;
  flex-flow: column;
  display: flex;
}

.card-template-details-2 {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-direction: column;
  display: flex;
}

.card-template-details-2.licenses-card {
  grid-column-gap: 32px;
  grid-row-gap: 32px;
}

.text-body-2 {
  letter-spacing: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.licenses-tile {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-flow: column;
  display: flex;
}

.div-block {
  flex-flow: column;
  display: flex;
}

.light-mode {
  --_🎨-color--tokens---background--base: var(--_🎨-color--base---background-base--light);
  --_🎨-color--tokens---text-body--strong: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---text-body--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---text-label--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---input-default--border: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---input-default--background: var(--_🎨-color--base---ui--input-bg);
  --_🎨-color--tokens---input-default--text: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---input-active--border: var(--_🎨-color--base---neutral--light-32);
  --_🎨-color--tokens---input-active--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-active--background: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---color-grade--light-16: var(--_🎨-color--base---neutral--dark-16);
  --_🎨-color--tokens---button-primary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-default--text: var(--_🎨-color--tokens---color-grade--light-100);
  --_🎨-color--tokens---button-primary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-secondary-hover--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-primary-default--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-default--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-default--border: var(--_🎨-color--tokens---color-grade--light-16);
  --_🎨-color--tokens---button-secondary-default--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---button-primary-hover--border: var(--_🎨-color--base---accent--primary-2);
  --_🎨-color--tokens---button-primary-hover--background: var(--_🎨-color--base---accent--primary);
  --_🎨-color--tokens---button-secondary-hover--border: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---button-secondary-hover--background: var(--_🎨-color--tokens---color-grade--light-8);
  --_🎨-color--tokens---text-heading--strong: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---text-heading--medium: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---text-label--strong: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---color-grade--light-8: var(--_🎨-color--base---neutral--dark-8);
  --_🎨-color--tokens---background--depth: var(--_🎨-color--base---background-depth--light);
  --_🎨-color--tokens---color-grade--light-4: var(--_🎨-color--base---neutral--dark-4);
  --_🎨-color--tokens---color-grade--dark-100: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---color-grade--dark-48: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---color-grade--light-32: var(--_🎨-color--base---neutral--dark-32);
  --_🎨-color--tokens---text-body--subtle: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-88: var(--_🎨-color--base---neutral--dark-88);
  --_🎨-color--tokens---background--lift: var(--_🎨-color--base---background-lift--light);
  --_🎨-color--tokens---icon--medium: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---color-grade--light-48: var(--_🎨-color--base---neutral--dark-48);
  --_🎨-color--tokens---color-grade--light-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---color-grade--light-64: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---color-grade--dark-16: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---background--lift-low-opacity: var(--_🎨-color--base---background-lift-low-opacity--light);
  --_🎨-color--tokens---background-gradient-purposes--gradient-0: var(--_🎨-color--base---neutral--dark-0);
  --_🎨-color--tokens---background-gradient-purposes--gradient-64: var(--_🎨-color--base---neutral--dark-64);
  --_🎨-color--tokens---background-gradient-purposes--gradient-100: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---icon--strong: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---button-tertiary-default--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---button-tertiary-hover--text: var(--_🎨-color--base---neutral--light-88);
  --_🎨-color--tokens---border--medium: var(--_🎨-color--base---neutral--light-48);
  --_🎨-color--tokens---border--subtle: var(--_🎨-color--base---neutral--light-16);
  --_🎨-color--tokens---input--label: var(--_🎨-color--base---neutral--light-64);
  --_🎨-color--tokens---input--icon: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-filled--background: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-filled--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-filled--border: var(--_🎨-color--base---neutral--light-0);
  --_🎨-color--tokens---input-error--background: var(--_🎨-color--base---neutral--dark-100);
  --_🎨-color--tokens---input-error--text: var(--_🎨-color--base---neutral--light-100);
  --_🎨-color--tokens---input-error--border: var(--_🎨-color--base---neutral--light-0);
}

@media screen and (max-width: 991px) {
  body {
    --_🔠-typography---font-family--body-2: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-2: 16px;
    --_🔠-typography---line-height--body-2: 24px;
    --_🔠-typography---font-weight--body-2: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-2: 0px;
    --_🔠-typography---font-family--h1: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h1: 60px;
    --_🔠-typography---line-height--h1: 64px;
    --_🔠-typography---font-weight--h1: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h1: -2.5px;
    --_🔠-typography---font-family--h2: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h2: 48px;
    --_🔠-typography---line-height--h2: 52px;
    --_🔠-typography---font-weight--h2: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h2: -2px;
    --_🔠-typography---font-family--h3: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h3: 40px;
    --_🔠-typography---line-height--h3: 44px;
    --_🔠-typography---font-weight--h3: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h3: -1px;
    --_🔠-typography---font-family--h4: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h4: 32px;
    --_🔠-typography---line-height--h4: 40px;
    --_🔠-typography---font-weight--h4: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h4: -1px;
    --_🔠-typography---font-family--h5: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h5: 28px;
    --_🔠-typography---line-height--h5: 32px;
    --_🔠-typography---font-weight--h5: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h5: -1px;
    --_🔠-typography---font-family--h6: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h6: 20px;
    --_🔠-typography---line-height--h6: 24px;
    --_🔠-typography---font-weight--h6: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h6: -.5px;
    --_🔠-typography---font--heading-serif: "Instrument Serif", sans-serif;
    --_🔠-typography---font-family--button-2: var(--_🔠-typography---font--button);
    --_🔠-typography---size--button-2: 14px;
    --_🔠-typography---line-height--button-2: 16px;
    --_🔠-typography---font-weight--button-2: var(--_🔠-typography---weight--button);
    --_🔠-typography---letter-spacing--button-2: 0px;
    --_🔠-typography---font-family--label-1: var(--_🔠-typography---font--label);
    --_🔠-typography---size--label-1: 12px;
    --_🔠-typography---line-height--label-1: 16px;
    --_🔠-typography---font-weight--label-1: var(--_🔠-typography---weight--label);
    --_🔠-typography---letter-spacing--label-1: 1px;
    --_🔠-typography---font-family--body-3: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-3: 14px;
    --_🔠-typography---line-height--body-3: 16px;
    --_🔠-typography---font-weight--body-3: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-3: 0px;
    --_🔠-typography---font-family--body-1: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-1: 20px;
    --_🔠-typography---line-height--body-1: 28px;
    --_🔠-typography---font-weight--body-1: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-1: 0px;
    --_🔠-typography---font-family--label-2: var(--_🔠-typography---font--label);
    --_🔠-typography---size--label-2: 10px;
    --_🔠-typography---line-height--label-2: 12px;
    --_🔠-typography---font-weight--label-2: var(--_🔠-typography---weight--label);
    --_🔠-typography---letter-spacing--label-2: 1px;
    --_🔠-typography---font-family--button-1: var(--_🔠-typography---font--button);
    --_🔠-typography---size--button-1: 16px;
    --_🔠-typography---line-height--button-1: 20px;
    --_🔠-typography---font-weight--button-1: var(--_🔠-typography---weight--button);
    --_🔠-typography---letter-spacing--button-1: 0px;
    --_🔠-typography---font-family--h0: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h0: 124px;
    --_🔠-typography---line-height--h0: 124px;
    --_🔠-typography---font-weight--h0: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h0: -4px;
    --_🔠-typography---weight--body-bold: var(--_🔠-typography---all-weights--semi-bold);
    --_🔠-typography---font--heading-sans: "DM Sans", sans-serif;
    --_🔠-typography---font--body: "DM Sans", sans-serif;
    --_🔠-typography---font--label: "DM Sans", sans-serif;
    --_🔠-typography---font--button: "DM Sans", sans-serif;
    --_🔠-typography---weight--heading-serif: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---weight--heading-sans: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---weight--body: var(--_🔠-typography---all-weights--normal);
    --_🔠-typography---weight--label: var(--_🔠-typography---all-weights--normal);
    --_🔠-typography---weight--button: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---all-weights--thin: 100;
    --_🔠-typography---all-weights--extra-light: 200;
    --_🔠-typography---all-weights--light: 300;
    --_🔠-typography---all-weights--normal: 400;
    --_🔠-typography---all-weights--medium: 500;
    --_🔠-typography---all-weights--semi-bold: 600;
    --_🔠-typography---all-weights--bold: 700;
    --_🔠-typography---all-weights--extra-bold: 800;
    --_🔠-typography---all-weights--black: 900;
    --spacing--12: 12px;
    --spacing--0: 0px;
    --spacing--16: 16px;
    --spacing--24: 24px;
    --container--small: 1080px;
    --grid--page-padding: 48px;
    --section-padding--small: 80px;
    --section-padding--large: 160px;
    --spacing--64: 64px;
    --section-padding--extra-small: 32px;
    --spacing--48: 48px;
    --spacing--32: 32px;
    --spacing--8: 8px;
    --spacing--4: 4px;
    --spacing--20: 20px;
    --max-width--4-columns: 448px;
    --max-width--5-columns: 564px;
    --max-width--2-columns: 216px;
    --grid--column-gap: 16px;
    --max-width--6-columns: 680px;
    --max-width--3-columns: 332px;
    --spacing--120: 120px;
    --max-width--7-columns: 796px;
    --spacing--80: 80px;
    --section-padding--extra-large: 200px;
    --section-padding--medium: 120px;
    --max-width--8-columns: 912px;
    --max-width--9-columns: 1028px;
    --max-width--10-columns: 1144px;
    --max-width--12-columns: 1376px;
    --grid--content-gap: 120px;
    --container--main: 1800px;
  }

  .master-navigation {
    padding-right: var(--grid--page-padding);
    padding-left: var(--grid--page-padding);
  }

  .navbar {
    width: 100%;
    max-width: 400px;
  }

  .nav-menu-inner {
    padding: var(--spacing--24) var(--spacing--12);
    border: 1px solid var(--_🎨-color--tokens---color-grade--light-16);
    border-radius: var(--_🔘-radius---general--default);
    background-color: var(--_🎨-color--tokens---background--depth);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
  }

  .nav-menu {
    z-index: 99;
    padding-top: var(--spacing--8);
    background-color: var(--_🎨-color--base---neutral--light-0);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .brand-nav {
    border-radius: var(--_🔘-radius---general--small);
  }

  .work-card-link {
    height: 360px;
  }

  .pricing-halves {
    grid-template-columns: 1fr;
  }

  .hero-avatar {
    max-width: 250px;
    height: 320px;
  }

  .icon-menu {
    flex: none;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
    display: flex;
  }

  .menu-button {
    padding: var(--spacing--8);
    border: 1px solid var(--_🎨-color--tokens---color-grade--light-48);
    border-radius: var(--_🔘-radius---general--small);
    background-color: var(--_🎨-color--tokens---color-grade--light-8);
    color: var(--_🎨-color--tokens---color-grade--light-100);
    flex: none;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .menu-button.w--open {
    color: var(--_🎨-color--tokens---color-grade--light-100);
    background-color: #0000000a;
  }

  .menu-button-inner {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .menu-button-inner.close {
    display: none;
  }

  .icon-nav-menu {
    width: var(--_❇️-icon---icon-size--medium);
    height: var(--_❇️-icon---icon-size--medium);
    flex: none;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .left-nav {
    grid-column-gap: var(--spacing--8);
    grid-row-gap: var(--spacing--8);
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }

  .color-grid {
    grid-column-gap: 48px;
    grid-row-gap: 48px;
    grid-template-columns: 1fr 1fr;
  }

  .button-grid {
    grid-template-columns: 1fr 1fr;
  }

  .template-info-master {
    grid-column-gap: 64px;
    grid-row-gap: 64px;
  }

  .typeface-left {
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }

  .typeface-block {
    grid-column-gap: 56px;
    grid-row-gap: 56px;
  }

  .heading-hero {
    max-width: 550px;
  }

  .typeface-halves {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    flex-flow: column;
    grid-template-columns: auto;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .licenses-list {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }
}

@media screen and (max-width: 767px) {
  body {
    --_🔠-typography---font-family--body-2: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-2: 14px;
    --_🔠-typography---line-height--body-2: 20px;
    --_🔠-typography---font-weight--body-2: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-2: 0px;
    --_🔠-typography---font-family--h1: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h1: 48px;
    --_🔠-typography---line-height--h1: 52px;
    --_🔠-typography---font-weight--h1: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h1: -2px;
    --_🔠-typography---font-family--h2: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h2: 36px;
    --_🔠-typography---line-height--h2: 36px;
    --_🔠-typography---font-weight--h2: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h2: -1.5px;
    --_🔠-typography---font-family--h3: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h3: 32px;
    --_🔠-typography---line-height--h3: 36px;
    --_🔠-typography---font-weight--h3: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h3: -.5px;
    --_🔠-typography---font-family--h4: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h4: 28px;
    --_🔠-typography---line-height--h4: 32px;
    --_🔠-typography---font-weight--h4: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h4: -1px;
    --_🔠-typography---font-family--h5: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h5: 24px;
    --_🔠-typography---line-height--h5: 28px;
    --_🔠-typography---font-weight--h5: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h5: -.5px;
    --_🔠-typography---font-family--h6: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h6: 18px;
    --_🔠-typography---line-height--h6: 20px;
    --_🔠-typography---font-weight--h6: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h6: -.25px;
    --_🔠-typography---font--heading-serif: "Instrument Serif", sans-serif;
    --_🔠-typography---font-family--button-2: var(--_🔠-typography---font--button);
    --_🔠-typography---size--button-2: 12px;
    --_🔠-typography---line-height--button-2: 16px;
    --_🔠-typography---font-weight--button-2: var(--_🔠-typography---weight--button);
    --_🔠-typography---letter-spacing--button-2: 0px;
    --_🔠-typography---font-family--label-1: var(--_🔠-typography---font--label);
    --_🔠-typography---size--label-1: 10px;
    --_🔠-typography---line-height--label-1: 12px;
    --_🔠-typography---font-weight--label-1: var(--_🔠-typography---weight--label);
    --_🔠-typography---letter-spacing--label-1: .5px;
    --_🔠-typography---font-family--body-3: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-3: 12px;
    --_🔠-typography---line-height--body-3: 14px;
    --_🔠-typography---font-weight--body-3: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-3: 0px;
    --_🔠-typography---font-family--body-1: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-1: 16px;
    --_🔠-typography---line-height--body-1: 24px;
    --_🔠-typography---font-weight--body-1: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-1: 0px;
    --_🔠-typography---font-family--label-2: var(--_🔠-typography---font--label);
    --_🔠-typography---size--label-2: 8px;
    --_🔠-typography---line-height--label-2: 10px;
    --_🔠-typography---font-weight--label-2: var(--_🔠-typography---weight--label);
    --_🔠-typography---letter-spacing--label-2: .5px;
    --_🔠-typography---font-family--button-1: var(--_🔠-typography---font--button);
    --_🔠-typography---size--button-1: 14px;
    --_🔠-typography---line-height--button-1: 20px;
    --_🔠-typography---font-weight--button-1: var(--_🔠-typography---weight--button);
    --_🔠-typography---letter-spacing--button-1: 0px;
    --_🔠-typography---font-family--h0: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h0: 56px;
    --_🔠-typography---line-height--h0: 56px;
    --_🔠-typography---font-weight--h0: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h0: -3px;
    --_🔠-typography---weight--body-bold: var(--_🔠-typography---all-weights--semi-bold);
    --_🔠-typography---font--heading-sans: "DM Sans", sans-serif;
    --_🔠-typography---font--body: "DM Sans", sans-serif;
    --_🔠-typography---font--label: "DM Sans", sans-serif;
    --_🔠-typography---font--button: "DM Sans", sans-serif;
    --_🔠-typography---weight--heading-serif: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---weight--heading-sans: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---weight--body: var(--_🔠-typography---all-weights--normal);
    --_🔠-typography---weight--label: var(--_🔠-typography---all-weights--normal);
    --_🔠-typography---weight--button: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---all-weights--thin: 100;
    --_🔠-typography---all-weights--extra-light: 200;
    --_🔠-typography---all-weights--light: 300;
    --_🔠-typography---all-weights--normal: 400;
    --_🔠-typography---all-weights--medium: 500;
    --_🔠-typography---all-weights--semi-bold: 600;
    --_🔠-typography---all-weights--bold: 700;
    --_🔠-typography---all-weights--extra-bold: 800;
    --_🔠-typography---all-weights--black: 900;
    --spacing--12: 10px;
    --spacing--0: 0px;
    --spacing--16: 12px;
    --spacing--24: 16px;
    --container--small: 1080px;
    --grid--page-padding: 16px;
    --section-padding--small: 48px;
    --section-padding--large: 80px;
    --spacing--64: 48px;
    --section-padding--extra-small: 24px;
    --spacing--48: 32px;
    --spacing--32: 24px;
    --spacing--8: 8px;
    --spacing--4: 4px;
    --spacing--20: 16px;
    --max-width--4-columns: 448px;
    --max-width--5-columns: 564px;
    --max-width--2-columns: 216px;
    --grid--column-gap: 12px;
    --max-width--6-columns: 680px;
    --max-width--3-columns: 332px;
    --spacing--120: 80px;
    --max-width--7-columns: 796px;
    --spacing--80: 56px;
    --section-padding--extra-large: 120px;
    --section-padding--medium: 64px;
    --max-width--8-columns: 912px;
    --max-width--9-columns: 1028px;
    --max-width--10-columns: 1144px;
    --max-width--12-columns: 1376px;
    --grid--content-gap: 40px;
    --container--main: 1800px;
    --_❇️-icon---icon-size--small: 12px;
    --_❇️-icon---icon-size--medium: 16px;
    --_❇️-icon---icon-stroke: 1.5px;
    --_❇️-icon---icon-size--large: 20px;
    --_❇️-icon---icon-size--extra-large: 36px;
    --_🔘-radius---ui-elements--input: 8px;
    --_🔘-radius---general--default: 12px;
    --_🔘-radius---ui-elements--button-base: 8px;
    --_🔘-radius---ui-elements--button-circle: 24px;
    --_🔘-radius---general--small: 8px;
    --_🔘-radius---general--full: 100vw;
    --_🔘-radius---general--large: 20px;
    --_🔘-radius---ui-elements--tag: 16px;
  }

  ._404-content {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    max-width: 430px;
  }

  .utility-page-form.pw {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .master-navigation {
    top: 16px;
  }

  .button-icon-wrap {
    width: 12px;
    height: 12px;
  }

  .button-icon-wrap.right {
    margin-right: 0;
  }

  .button-icon-wrap.left {
    margin-left: 0;
  }

  .icon-button {
    width: 12px;
  }

  .sales-cta-master {
    display: none;
  }

  .sales-cta {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    flex-flow: wrap;
  }

  .master-bg-grid {
    padding-left: 8px;
    padding-right: 8px;
  }

  .line-inner {
    padding-left: 6px;
    padding-right: 6px;
  }

  .brand-nav {
    width: 56px;
    height: 40px;
    padding-left: 0;
  }

  .faq-animated-box {
    width: 36px;
    height: 36px;
  }

  .slider-button {
    right: 0;
  }

  .slider-button.previous {
    left: 0;
  }

  .footer-halves {
    grid-column-gap: var(--spacing--64);
    grid-row-gap: var(--spacing--64);
    grid-template-columns: 1.5fr;
  }

  .wrap-progressive-blur {
    max-height: 5rem;
  }

  .popup-contact {
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
  }

  .form-price-wrap {
    grid-row-gap: var(--spacing--4);
  }

  .popup-close-button {
    top: 12px;
    right: 24px;
  }

  .service-card-bg {
    width: 100px;
    height: 350px;
  }

  .image-wrap-case-study {
    height: 360px;
  }

  .cases-halves, .color-grid {
    grid-template-columns: 1fr;
  }

  .typeface-heading-example {
    font-size: 100px;
  }

  .heading-hero {
    grid-column-gap: 12px;
  }
}

@media screen and (max-width: 479px) {
  body {
    --_🔠-typography---font-family--body-2: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-2: 14px;
    --_🔠-typography---line-height--body-2: 20px;
    --_🔠-typography---font-weight--body-2: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-2: 0px;
    --_🔠-typography---font-family--h1: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h1: 48px;
    --_🔠-typography---line-height--h1: 52px;
    --_🔠-typography---font-weight--h1: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h1: -2px;
    --_🔠-typography---font-family--h2: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h2: 36px;
    --_🔠-typography---line-height--h2: 36px;
    --_🔠-typography---font-weight--h2: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h2: -1.5px;
    --_🔠-typography---font-family--h3: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h3: 32px;
    --_🔠-typography---line-height--h3: 36px;
    --_🔠-typography---font-weight--h3: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h3: -.5px;
    --_🔠-typography---font-family--h4: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h4: 28px;
    --_🔠-typography---line-height--h4: 32px;
    --_🔠-typography---font-weight--h4: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h4: -1px;
    --_🔠-typography---font-family--h5: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h5: 24px;
    --_🔠-typography---line-height--h5: 28px;
    --_🔠-typography---font-weight--h5: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h5: -.5px;
    --_🔠-typography---font-family--h6: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h6: 18px;
    --_🔠-typography---line-height--h6: 20px;
    --_🔠-typography---font-weight--h6: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h6: -.25px;
    --_🔠-typography---font--heading-serif: "Instrument Serif", sans-serif;
    --_🔠-typography---font-family--button-2: var(--_🔠-typography---font--button);
    --_🔠-typography---size--button-2: 12px;
    --_🔠-typography---line-height--button-2: 16px;
    --_🔠-typography---font-weight--button-2: var(--_🔠-typography---weight--button);
    --_🔠-typography---letter-spacing--button-2: 0px;
    --_🔠-typography---font-family--label-1: var(--_🔠-typography---font--label);
    --_🔠-typography---size--label-1: 10px;
    --_🔠-typography---line-height--label-1: 12px;
    --_🔠-typography---font-weight--label-1: var(--_🔠-typography---weight--label);
    --_🔠-typography---letter-spacing--label-1: .5px;
    --_🔠-typography---font-family--body-3: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-3: 12px;
    --_🔠-typography---line-height--body-3: 14px;
    --_🔠-typography---font-weight--body-3: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-3: 0px;
    --_🔠-typography---font-family--body-1: var(--_🔠-typography---font--body);
    --_🔠-typography---size--body-1: 18px;
    --_🔠-typography---line-height--body-1: 24px;
    --_🔠-typography---font-weight--body-1: var(--_🔠-typography---weight--body);
    --_🔠-typography---letter-spacing--body-1: 0px;
    --_🔠-typography---font-family--label-2: var(--_🔠-typography---font--label);
    --_🔠-typography---size--label-2: 8px;
    --_🔠-typography---line-height--label-2: 10px;
    --_🔠-typography---font-weight--label-2: var(--_🔠-typography---weight--label);
    --_🔠-typography---letter-spacing--label-2: .5px;
    --_🔠-typography---font-family--button-1: var(--_🔠-typography---font--button);
    --_🔠-typography---size--button-1: 14px;
    --_🔠-typography---line-height--button-1: 20px;
    --_🔠-typography---font-weight--button-1: var(--_🔠-typography---weight--button);
    --_🔠-typography---letter-spacing--button-1: 0px;
    --_🔠-typography---font-family--h0: var(--_🔠-typography---font--heading-sans);
    --_🔠-typography---size--h0: 56px;
    --_🔠-typography---line-height--h0: 56px;
    --_🔠-typography---font-weight--h0: var(--_🔠-typography---weight--heading-sans);
    --_🔠-typography---letter-spacing--h0: -3px;
    --_🔠-typography---weight--body-bold: var(--_🔠-typography---all-weights--semi-bold);
    --_🔠-typography---font--heading-sans: "DM Sans", sans-serif;
    --_🔠-typography---font--body: "DM Sans", sans-serif;
    --_🔠-typography---font--label: "DM Sans", sans-serif;
    --_🔠-typography---font--button: "DM Sans", sans-serif;
    --_🔠-typography---weight--heading-serif: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---weight--heading-sans: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---weight--body: var(--_🔠-typography---all-weights--normal);
    --_🔠-typography---weight--label: var(--_🔠-typography---all-weights--normal);
    --_🔠-typography---weight--button: var(--_🔠-typography---all-weights--medium);
    --_🔠-typography---all-weights--thin: 100;
    --_🔠-typography---all-weights--extra-light: 200;
    --_🔠-typography---all-weights--light: 300;
    --_🔠-typography---all-weights--normal: 400;
    --_🔠-typography---all-weights--medium: 500;
    --_🔠-typography---all-weights--semi-bold: 600;
    --_🔠-typography---all-weights--bold: 700;
    --_🔠-typography---all-weights--extra-bold: 800;
    --_🔠-typography---all-weights--black: 900;
    --spacing--12: 10px;
    --spacing--0: 0px;
    --spacing--16: 12px;
    --spacing--24: 16px;
    --container--small: 1080px;
    --grid--page-padding: 16px;
    --section-padding--small: 48px;
    --section-padding--large: 80px;
    --spacing--64: 48px;
    --section-padding--extra-small: 24px;
    --spacing--48: 32px;
    --spacing--32: 24px;
    --spacing--8: 8px;
    --spacing--4: 4px;
    --spacing--20: 16px;
    --max-width--4-columns: 448px;
    --max-width--5-columns: 564px;
    --max-width--2-columns: 216px;
    --grid--column-gap: 12px;
    --max-width--6-columns: 680px;
    --max-width--3-columns: 332px;
    --spacing--120: 80px;
    --max-width--7-columns: 796px;
    --spacing--80: 56px;
    --section-padding--extra-large: 120px;
    --section-padding--medium: 64px;
    --max-width--8-columns: 912px;
    --max-width--9-columns: 1028px;
    --max-width--10-columns: 1144px;
    --max-width--12-columns: 1376px;
    --grid--content-gap: 40px;
    --container--main: 1800px;
  }

  .sales-cta {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .headline-centered.testimonials {
    max-width: var(--max-width--2-columns);
  }

  .slide-work {
    margin-right: var(--spacing--20);
  }

  .mask-work {
    width: 85%;
  }

  .work-card-link {
    height: 300px;
  }

  .footer-bottom-tile {
    flex-flow: wrap;
  }

  .hero-avatar {
    max-width: 150px;
    height: 200px;
  }

  .mask-testimonial {
    width: 90%;
  }

  .card-testimonial {
    height: 320px;
  }

  .quotes-testimonial {
    width: 40px;
  }

  .form-block-contact {
    height: 100%;
  }

  .input-halves {
    grid-template-columns: 1fr;
  }

  .checkbox-contact {
    width: 20px;
    height: 20px;
  }

  .popup-close-button {
    top: 8px;
    right: 12px;
  }

  .card-service {
    height: auto;
  }

  .service-card-bg {
    width: 75px;
    height: 300px;
  }

  .service-card-bg-text {
    font-size: 160px;
  }

  .list-template-halves {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  .color-grid {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .color-tile {
    height: 180px;
  }

  .button-grid {
    grid-column-gap: 48px;
    grid-row-gap: 48px;
    flex-flow: wrap;
    grid-template-columns: 1fr;
  }

  .typeface-right {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .title-template {
    margin-bottom: 24px;
  }

  .style-text-info {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .template-info-master {
    grid-column-gap: 48px;
    grid-row-gap: 48px;
  }

  .typeface-heading-example {
    font-size: 64px;
  }

  .typeface-left {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .typeface-block {
    grid-column-gap: 48px;
    grid-row-gap: 48px;
  }

  .template-tile {
    padding: 32px 24px;
  }

  .licenses-list {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .licenses-block {
    padding: 24px;
  }
}

#w-node-_067b2a7b-63e6-563e-b755-b73bf14e9515-d0446e59 {
  grid-area: span 1 / span 1 / span 1 / span 1;
}

#w-node-_52a09802-eb31-6054-3e28-36eb56d3583d-4e6e686e {
  justify-self: start;
}

#w-node-_52a09802-eb31-6054-3e28-36eb56d35858-4e6e686e, #w-node-_52a09802-eb31-6054-3e28-36eb56d35878-4e6e686e, #w-node-_52a09802-eb31-6054-3e28-36eb56d35898-4e6e686e, #w-node-_52a09802-eb31-6054-3e28-36eb56d358b8-4e6e686e, #w-node-_52a09802-eb31-6054-3e28-36eb56d358d8-4e6e686e, #w-node-_52a09802-eb31-6054-3e28-36eb56d358f8-4e6e686e, #w-node-_52a09802-eb31-6054-3e28-36eb56d35916-4e6e686e {
  justify-self: end;
}

@media screen and (max-width: 991px) {
  #w-node-_52a09802-eb31-6054-3e28-36eb56d3583d-4e6e686e {
    justify-self: center;
  }
}

@media screen and (max-width: 479px) {
  #w-node-d8152ea2-43c9-1948-a2fa-f6dbf789638e-f789637d {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
}
`;
                document.head.appendChild(style);

                const container = document.createElement('div');
                container.innerHTML = `<!DOCTYPE html><!-- Last Published: Mon Dec 22 2025 11:19:52 GMT+0000 (Coordinated Universal Time) --><html data-wf-domain="aluro.webflow.io" data-wf-page="68f743d3521757667cf12d79" data-wf-site="68f617da1d06c09a4e6e6886" lang="en" data-wf-collection="68f743d3521757667cf12d6b" data-wf-item-slug="verse"><head><meta charset="utf-8"><title>Verse</title><meta content="Calm, legible data dashboard UI with readable charts, smart defaults and a layout that scales elegantly from desktop to mobile." name="description"><meta content="Verse" property="og:title"><meta content="Calm, legible data dashboard UI with readable charts, smart defaults and a layout that scales elegantly from desktop to mobile." property="og:description"><meta content="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e68a4/68f7dbf9e5019802742d02e4_MacBook%20Pro%2016%20(2).avif" property="og:image"><meta content="Verse" property="twitter:title"><meta content="Calm, legible data dashboard UI with readable charts, smart defaults and a layout that scales elegantly from desktop to mobile." property="twitter:description"><meta content="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e68a4/68f7dbf9e5019802742d02e4_MacBook%20Pro%2016%20(2).avif" property="twitter:image"><meta property="og:type" content="website"><meta content="summary_large_image" name="twitter:card"><meta content="width=device-width, initial-scale=1" name="viewport"><link href="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/css/aluro.shared.35d272d54.css" rel="stylesheet" type="text/css"><style>html.w-mod-js:not(.w-mod-ix3) :is(.icon-wrap-mode > *, .footer-link, .nav-link [text], [heading-animation] > *) {visibility: hidden !important;}</style><link href="https://fonts.googleapis.com" rel="preconnect"><link href="https://fonts.gstatic.com" rel="preconnect"><script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script><script type="text/javascript">WebFont.load({  google: {    families: ["DM Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic","Instrument Serif:regular,italic"]  }});</script><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script><link href="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/68fbd8d5278165d4feee5578_32.svg" rel="shortcut icon" type="image/x-icon"><link href="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/68fbd8d8a860142599cea9a3_256.svg" rel="apple-touch-icon"><style>
* {
  -webkit-font-smoothing: antialiased;   /* For WebKit (Safari, Chrome) */
  -moz-osx-font-smoothing: grayscale;    /* For macOS Firefox */
  font-smoothing: antialiased;           /* Non-standard, fallback */
  text-rendering: optimizeLegibility;    /* Improves kerning and ligatures */
}
</style>
</head><body><div class="page-wrap"><div class="master-navigation"><div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav"><div class="nav-coontainer"><div class="left-nav"><a href="../index.html" class="brand-nav w-nav-brand"><img src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/68fa1ec116ca06f1e8ca661b_Man%20in%20Blue%20Suit%20(1).avif" loading="lazy" alt="Hero Image" class="image-cover top-aligned"></a></div><nav role="navigation" class="nav-menu w-nav-menu"><div class="nav-menu-inner"><a href="#" class="nav-link w-inline-block"><div class="nav-link-text"><div text="">Services</div></div></a><a href="../index.html" class="nav-link w-inline-block"><div class="nav-link-text"><div text="">Work</div></div></a><a href="../index.html" class="nav-link w-inline-block"><div class="nav-link-text"><div text="">Pricing</div></div></a><a href="../index.html" class="nav-link w-inline-block"><div class="nav-link-text"><div text="">FAQ</div></div></a></div></nav><div class="right-nav"><div class="mode-button"><div class="icon-wrap-mode dark"><div class="icon-mode w-embed"><svg width="100%" height="100%" viewBox="0 0 533 603" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M301.317 602.751C261.03 602.834 221.145 594.755 184.067 579.001C178.218 576.25 173.663 571.341 171.356 565.304C169.048 559.267 169.168 552.572 171.691 546.621C174.213 540.671 178.942 535.929 184.885 533.389C190.828 530.85 197.523 530.711 203.567 533.001C234.48 546.125 267.733 552.844 301.317 552.751C354.137 552.687 405.603 536.028 448.442 505.126C401.075 495.946 356.604 475.533 318.763 445.602C280.922 415.671 250.817 377.095 230.977 333.116C211.137 289.137 202.141 241.038 204.745 192.861C207.349 144.684 221.477 97.8354 245.942 56.2508C190.363 68.9181 140.722 100.055 105.123 144.576C69.524 189.097 50.0714 244.372 49.9415 301.376C49.7777 354.756 66.7811 406.774 98.4415 449.751C102.37 455.105 104.011 461.8 103.003 468.364C101.995 474.928 98.4206 480.822 93.0665 484.751C87.7125 488.679 81.0171 490.32 74.4533 489.312C67.8896 488.304 61.995 484.73 58.0665 479.376C25.3291 434.574 5.59007 381.608 1.02309 326.308C-3.5439 271.009 7.2383 215.521 32.1824 165.956C57.1265 116.391 95.2648 74.671 142.398 45.39C189.531 16.1089 243.83 0.40265 299.317 0.000780536C304.168 -0.0375497 308.926 1.33661 313.01 3.95569C317.094 6.57476 320.328 10.3256 322.317 14.7508C324.322 19.1664 325 24.0699 324.267 28.8639C323.535 33.6579 321.424 38.1354 318.192 41.7508C285.9 77.935 264.764 122.688 257.334 170.613C249.904 218.539 256.496 267.59 276.315 311.854C296.135 356.117 328.335 393.702 369.035 420.077C409.734 446.452 457.193 460.491 505.691 460.501H507.316C512.161 460.497 516.901 461.902 520.962 464.542C525.023 467.183 528.23 470.947 530.192 475.376C532.154 479.787 532.797 484.673 532.043 489.442C531.289 494.211 529.17 498.66 525.942 502.251C497.683 533.869 463.067 559.164 424.359 576.483C385.651 593.801 343.722 602.752 301.317 602.751Z" fill="currentColor"></path>
</svg></div></div><div class="icon-wrap-mode light"><div class="icon-mode w-embed"><svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M400 0C408.841 0 417.319 3.5119 423.57 9.76311C429.821 16.0143 433.333 24.4928 433.333 33.3333V166.667C433.333 175.507 429.821 183.986 423.57 190.237C417.319 196.488 408.841 200 400 200C391.159 200 382.681 196.488 376.43 190.237C370.179 183.986 366.667 175.507 366.667 166.667V33.3333C366.667 24.4928 370.179 16.0143 376.43 9.76311C382.681 3.5119 391.159 0 400 0ZM164.3 117.167C158.013 111.095 149.593 107.735 140.853 107.811C132.113 107.887 123.753 111.392 117.573 117.573C111.392 123.753 107.887 132.113 107.811 140.853C107.735 149.593 111.095 158.013 117.167 164.3L211.433 258.567C217.72 264.639 226.14 267.998 234.88 267.922C243.62 267.847 251.98 264.341 258.161 258.161C264.341 251.98 267.847 243.62 267.922 234.88C267.998 226.14 264.639 217.72 258.567 211.433L164.3 117.167ZM33.3333 366.667C24.4928 366.667 16.0143 370.179 9.76311 376.43C3.5119 382.681 0 391.159 0 400C0 408.841 3.5119 417.319 9.76311 423.57C16.0143 429.821 24.4928 433.333 33.3333 433.333H166.667C175.507 433.333 183.986 429.821 190.237 423.57C196.488 417.319 200 408.841 200 400C200 391.159 196.488 382.681 190.237 376.43C183.986 370.179 175.507 366.667 166.667 366.667H33.3333ZM600 400C600 391.159 603.512 382.681 609.763 376.43C616.014 370.179 624.493 366.667 633.333 366.667H766.667C775.507 366.667 783.986 370.179 790.237 376.43C796.488 382.681 800 391.159 800 400C800 408.841 796.488 417.319 790.237 423.57C783.986 429.821 775.507 433.333 766.667 433.333H633.333C624.493 433.333 616.014 429.821 609.763 423.57C603.512 417.319 600 408.841 600 400ZM588.567 541.433C582.28 535.361 573.86 532.002 565.12 532.078C556.38 532.153 548.02 535.659 541.839 541.839C535.659 548.02 532.153 556.38 532.078 565.12C532.002 573.86 535.361 582.28 541.433 588.567L635.7 682.833C638.775 686.017 642.453 688.556 646.52 690.303C650.587 692.05 654.961 692.97 659.387 693.008C663.813 693.047 668.202 692.203 672.298 690.527C676.395 688.851 680.117 686.376 683.246 683.246C686.376 680.117 688.851 676.395 690.527 672.298C692.203 668.202 693.047 663.813 693.008 659.387C692.97 654.961 692.05 650.587 690.303 646.52C688.556 642.453 686.017 638.775 682.833 635.7L588.567 541.433ZM258.567 588.567C261.75 585.492 264.29 581.814 266.037 577.747C267.784 573.68 268.703 569.306 268.742 564.88C268.78 560.454 267.937 556.065 266.261 551.968C264.585 547.872 262.11 544.15 258.98 541.02C255.85 537.89 252.128 535.415 248.032 533.739C243.935 532.063 239.546 531.22 235.12 531.258C230.694 531.297 226.32 532.216 222.253 533.963C218.186 535.71 214.508 538.25 211.433 541.433L117.167 635.667C113.983 638.742 111.444 642.42 109.697 646.487C107.95 650.553 107.03 654.927 106.992 659.353C106.953 663.779 107.797 668.169 109.473 672.265C111.149 676.362 113.624 680.083 116.753 683.213C119.883 686.343 123.605 688.818 127.702 690.494C131.798 692.17 136.187 693.013 140.613 692.975C145.039 692.937 149.413 692.017 153.48 690.27C157.547 688.523 161.225 685.984 164.3 682.8L258.567 588.567ZM682.833 164.3C688.905 158.013 692.265 149.593 692.189 140.853C692.113 132.113 688.608 123.753 682.427 117.573C676.247 111.392 667.887 107.887 659.147 107.811C650.407 107.735 641.987 111.095 635.7 117.167L541.433 211.433C538.25 214.508 535.71 218.186 533.963 222.253C532.216 226.32 531.297 230.694 531.258 235.12C531.22 239.546 532.063 243.935 533.739 248.032C535.415 252.128 537.89 255.85 541.02 258.98C544.15 262.11 547.872 264.585 551.968 266.261C556.065 267.937 560.454 268.78 564.88 268.742C569.306 268.703 573.68 267.784 577.747 266.037C581.814 264.29 585.492 261.75 588.567 258.567L682.833 164.3ZM433.333 633.333C433.333 624.493 429.821 616.014 423.57 609.763C417.319 603.512 408.841 600 400 600C391.159 600 382.681 603.512 376.43 609.763C370.179 616.014 366.667 624.493 366.667 633.333V766.667C366.667 775.507 370.179 783.986 376.43 790.237C382.681 796.488 391.159 800 400 800C408.841 800 417.319 796.488 423.57 790.237C429.821 783.986 433.333 775.507 433.333 766.667V633.333ZM400 233.333C355.797 233.333 313.405 250.893 282.149 282.149C250.893 313.405 233.333 355.797 233.333 400C233.333 444.203 250.893 486.595 282.149 517.851C313.405 549.107 355.797 566.667 400 566.667C444.203 566.667 486.595 549.107 517.851 517.851C549.107 486.595 566.667 444.203 566.667 400C566.667 355.797 549.107 313.405 517.851 282.149C486.595 250.893 444.203 233.333 400 233.333Z" fill="currentColor"></path>
</svg></div></div></div><div class="button-contact-popup"><a href="#" button="" data-wf--cta-small--variant="primary" class="cta-small w-inline-block"><div class="button-text-mask button-2"><div button-text="" class="button-text">Contact</div></div><div button-bg="" class="button-bg"></div></a></div><div class="menu-button w-nav-button"><div class="menu-button-inner open"><div class="icon-nav-menu w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 12" fill="none">
  <path d="M2 6L10 6M2 9H10M2 3L10 3" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div></div><div class="menu-button-inner close"><div class="icon-nav-menu w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 12" fill="none">
  <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div></div></div></div></div></div></div><section class="section"><div class="w-layout-blockcontainer main-container w-container"></div><div class="line-section bottom"><div class="line-inner"><div class="circle-line"></div><div class="circle-line"></div></div></div></section><section class="section"><div class="w-layout-blockcontainer main-container w-container"><div data-w-id="eca010e8-f513-b193-e284-d8916a755996" style="filter:blur(12px);opacity:0" class="case-study-info-block"><h1>Verse</h1><div class="body-medium">Dashboard concept designed for clarity and calm data storytelling.</div></div><div data-w-id="1a8b3bb3-7cac-e81d-2386-250d6977f4e0" style="filter:blur(12px);opacity:0" class="image-wrap-case-study"><div class="tag-wrap-work-card absolute"><div class="tag-work"><div class="text-small">UI/UX</div></div><div class="tag-work"><div class="text-small">Dashboard</div></div></div><img src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e68a4/68f7dbf9e5019802742d02e4_MacBook%20Pro%2016%20(2).avif" loading="lazy" alt="Verse" class="image-cover"></div></div><div class="line-section bottom"><div class="line-inner"><div class="circle-line"></div><div class="circle-line"></div></div></div></section><section class="section"><div class="w-layout-blockcontainer main-container w-container"><div class="master-case-body"><div class="body-case w-richtext"><h5>Auralis — Product Landing Page</h5><p>Auralis is a sound-design startup that needed a focused one-page site to explain what it does in seconds. The goal was a landing page that feels calm, modern, and confident, while guiding visitors to try the product.</p><p>‍</p><h5>Role and scope</h5><ul role="list"><li>UI/UX design</li><li>Visual direction</li><li>Interaction design</li><li>Hand-off and documentation</li></ul><p>‍</p><h5>Objectives</h5><ul role="list"><li>Communicate value in the first screen</li><li>Show product visuals without clutter</li><li>Create a simple path to sign up or request a demo</li><li>Keep performance, accessibility, and readability strong</li></ul><p>‍</p><h5>Audience</h5><p>Producers and content teams who care about audio quality and time savings. They browse quickly, compare tools, and expect a clean, trustworthy experience.</p><p>‍</p><h5>Approach</h5><p>The page is structured like a short story: a clear hero, three value points, a product preview, social proof, and a direct call to action. Typography carries the voice, imagery carries the feeling, and motion highlights what matters.</p><p>‍</p><h5>Design highlights</h5><ul role="list"><li><strong>Hero:</strong> large headline with a single supporting sentence and one primary action. Secondary link points to feature details.</li><li><strong>Value grid:</strong> three concise points with small icons. Each card expands on hover to reveal one sentence of detail.</li><li><strong>Product preview:</strong> static frames and a short loop that shows the core flow. No autoplay audio.</li><li><strong>Social proof:</strong> selected logos and one featured quote to build trust fast.</li><li><strong>CTA section:</strong> short line, one primary action, one link to pricing or demo.</li></ul><p>‍</p><h5>Visual language</h5><ul role="list"><li><strong>Type:</strong> geometric sans for headlines paired with a neutral grotesk for body. Tight leading, generous spacing.</li><li><strong>Color:</strong> dark base with a restrained green accent for actions and highlights.</li><li><strong>Imagery:</strong> crisp UI crops, soft shadows, and plenty of negative space.</li></ul><p>‍</p><h5>Interactions</h5><ul role="list"><li>Motion is used to explain, not to decorate. Buttons elevate slightly on hover, cards reveal micro-details, and sections fade in gently as they enter the viewport. The page feels alive without demanding attention.</li></ul><p>‍</p><h5>Accessibility and performance</h5><ul role="list"><li>Minimum 16 px body size, strong color contrast, clear focus states, and keyboard-friendly navigation.</li><li>Images are optimized and lazy-loaded. Animations respect reduced-motion preferences.</li></ul></div><div class="body-case w-richtext"><figure style="max-width:2968pxpx" class="w-richtext-align-fullwidth w-richtext-figure-type-image"><div><img loading="lazy" alt="" src="../assets/cdn.prod.website-files.com/68f617da1d06c09a4e6e68a4/68fdca83c96236df1c5642aa_68fdc9b6cc10467c1dbe7046_Screenshot%2525202025-10-25%252520at%25252015.59.32.webp"></div><figcaption>Hero Section</figcaption></figure></div><div class="body-case w-richtext"><h5>Outcome</h5><p>The landing page improved first-screen comprehension and reduced friction in the path to sign up.</p><ul role="list"><li>+28% click-through on the primary CTA in the hero</li><li>+19% time on page for visitors from ads</li><li>−24% bounce on mobile</li></ul><p>‍</p><blockquote><em>“Clean, fast, and exactly the tone we wanted. The new page finally explains Auralis without getting in the way.” </em></blockquote><p>‍</p><h5>Services delivered</h5><p>Website design, UI/UX design, visual direction, interaction design, design system setup, hand-off docs.</p><p>‍</p><h5>Tools</h5><p><em>Figma</em> for design and prototyping, <em>Webflow</em> for build, lightweight motion for micro-interactions.</p></div></div></div><div class="line-section bottom"><div class="line-inner"><div class="circle-line"></div><div class="circle-line"></div></div></div></section><section class="section"><div class="w-layout-blockcontainer main-container w-container"><div heading-animation="" class="headline-more-cases"><h2>More <span class="text-serif">Cases</span></h2></div><div data-w-id="f7cb4cc4-56d0-9f97-b2b1-b79112bdfad7" style="filter:blur(12px);opacity:0" class="case-studies w-dyn-list"><div role="list" class="cases-halves w-dyn-items"><div role="listitem" class="w-dyn-item"><a href="auralis.html" class="work-card-link w-inline-block"><div class="image-wrap-work-card"><img src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e68a4/68fcc6d4d8d21ba32f422488_MacBook%20Pro%2016%20(1)%20(1).avif" loading="lazy" alt="Auralis" class="image-cover"></div><div class="content-work-card"><div class="tag-wrap-work-card"><div class="tag-work"><div class="text-small">Landing Page</div></div><div class="tag-work"><div class="text-small">Brand Experience</div></div></div><div class="text-wrap-work-card"><div class="text-large text-body-bold">Auralis</div><div class="body-medium">Product landing page for a sound design startup blending tech and emotion.</div></div></div><div class="link-hidden-text"><div>Work Project</div></div></a></div><div role="listitem" class="w-dyn-item"><a href="lumina-studio.html" class="work-card-link w-inline-block"><div class="image-wrap-work-card"><img src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e68a4/68f7d9a110ca4da6b10689d7_Studio%20Display.avif" loading="lazy" alt="Lumina Studio" class="image-cover"></div><div class="content-work-card"><div class="tag-wrap-work-card"><div class="tag-work"><div class="text-small">Web Design</div></div><div class="tag-work"><div class="text-small">UI/UX</div></div></div><div class="text-wrap-work-card"><div class="text-large text-body-bold">Lumina Studio</div><div class="body-medium">A creative agency website built around motion and minimalism.</div></div></div><div class="link-hidden-text"><div>Work Project</div></div></a></div></div></div></div><div class="line-section bottom"><div class="line-inner"><div class="circle-line"></div><div class="circle-line"></div></div></div></section><div class="popup-contact"><div class="form-block-contact w-form"><div data-w-id="d8152ea2-43c9-1948-a2fa-f6dbf789637f" class="popup-close-button"><div class="icon-menu w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 12" fill="none">
  <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div></div><div class="form-bg"></div><form id="email-form" name="email-form" data-name="Email Form" method="get" class="form" data-wf-page-id="68f743d3521757667cf12d79" data-wf-element-id="d8152ea2-43c9-1948-a2fa-f6dbf7896382"><div class="contact-form-bottom-tile"><div class="contact-form-inner"><div class="w-layout-grid input-halves"><div class="input-wrap"><div class="label-large">Name</div><input class="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="John Doe" type="text" id="name" required=""></div><div class="input-wrap"><div class="label-large">email</div><input class="text-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email" type="email" id="Email" required=""></div></div><div id="w-node-d8152ea2-43c9-1948-a2fa-f6dbf789638e-f789637d" class="input-wrap"><div class="label-large">subject</div><div class="input-relative"><select id="Subject" name="Subject" data-name="Subject" required="" class="text-field select w-select"><option value="">Type of project</option><option value="First">First choice</option><option value="Second">Second choice</option><option value="Third">Third choice</option></select><div class="select-field-overlay"><div class="select-arrow w-embed"><svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="var(--_❇️-icon---icon-stroke)" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div></div></div></div><div class="input-wrap"><div class="label-large">message</div><textarea id="Message" name="Message" maxlength="5000" data-name="Message" placeholder="Tell us about your project" class="text-field textarea w-input"></textarea></div><div class="form-price-wrap"><label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" name="Price" id="2-000" data-name="Price" style="opacity:0;position:absolute;z-index:-1" value="$2,000"><span class="radio-text w-form-label" for="2-000">$2,000</span></label><label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" name="Price" id="2-000---5-000" data-name="Price" style="opacity:0;position:absolute;z-index:-1" value="$2,000 - $5,000"><span class="radio-text w-form-label" for="2-000---5-000">$2,000 - $5,000</span></label><label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" data-name="Price" id="5-000---10-000" name="Price" style="opacity:0;position:absolute;z-index:-1" value="$5,000 - $10,000"><span class="radio-text w-form-label" for="5-000---10-000">$5,000 - $10,000</span></label><label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" name="Price" id="10-000" data-name="Price" style="opacity:0;position:absolute;z-index:-1" value="$10,000+"><span class="radio-text w-form-label" for="10-000">$10,000+</span></label><label class="radio-button-field w-radio"><div class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div><input type="radio" name="Price" id="Not-Sure" data-name="Price" style="opacity:0;position:absolute;z-index:-1" value="Not Sure"><span class="radio-text w-form-label" for="Not-Sure">Not Sure</span></label></div></div><label class="w-checkbox checkbox"><div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox-contact"></div><input type="checkbox" name="I-agree-to-Privacy-Policy" id="I-agree-to-Privacy-Policy" data-name="I agree to Privacy Policy" required="" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-text w-form-label" for="I-agree-to-Privacy-Policy">By sending this form, I agree to the <a href="../template/style-guide.html" class="text-underline">Terms of Service</a> and <a href="../template/style-guide.html" class="text-underline">Privacy Policy</a>.</span></label><div class="submit-wrap"><input type="submit" data-wait="Please wait..." class="submit-absolute w-button" value="Send message"><a href="#" data-wf--cta-primary--variant="primary" data-w-id="b6cb0c38-8163-7dea-a713-38c4c14f0013" class="cta-main w-inline-block"><div class="button-text-mask"><div button-text="" class="button-text">Send Inquiry</div></div><div button-bg="" class="button-bg"></div></a></div></div></form><div class="success-message w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="error-message w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div></div><div class="master-bg-grid"><div class="w-layout-grid bg-grid"><div class="line-bg"></div><div class="line-bg"></div></div></div><section class="footer"><div class="w-layout-blockcontainer main-container w-container"><div class="master-footer"><div data-w-id="5c416fcd-92ce-9a0e-13b9-9bc625b39756" class="footer-halves"><div class="left-footer"><div class="footer-left-top-tile"><div class="image-wrap-avatar-footer"><img src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/68fa1ec116ca06f1e8ca661b_Man%20in%20Blue%20Suit%20(1).avif" loading="lazy" alt="Hero Image" class="image-cover top-aligned"></div><div class="text-small body-medium">Every project starts with a story. I turn those stories into digital experiences that feel effortless and expressive.</div></div><div class="socials-footer"><a href="https://instagram.com" target="_blank" class="link-social w-inline-block"><div class="icon-social w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_34112_19522)">
<path d="M15.9996 7.78349C11.4625 7.78349 7.78375 11.4629 7.78375 15.9999C7.78375 20.5379 11.4625 24.2157 15.9996 24.2157C20.5375 24.2157 24.2169 20.5379 24.2169 15.9999C24.2169 11.4629 20.5375 7.78349 15.9996 7.78349ZM15.9996 21.3334C13.0546 21.3334 10.6661 18.9457 10.6661 15.9999C10.6661 13.0542 13.0545 10.6665 15.9996 10.6665C18.9452 10.6665 21.3337 13.0542 21.3337 15.9999C21.3337 18.9456 18.9452 21.3334 15.9996 21.3334ZM26.4609 7.4593C26.4609 8.5188 25.6011 9.37862 24.5409 9.37862C23.4807 9.37862 22.6209 8.5188 22.6209 7.4593C22.6209 6.39937 23.4807 5.5393 24.5409 5.5393C25.6011 5.5393 26.4609 6.39937 26.4609 7.4593ZM31.1601 5.51962C30.751 4.46699 30.2039 3.57512 29.315 2.68549C27.5216 0.890804 25.068 0.208554 22.5972 0.0966787C20.8904 0.0178037 20.3455 0.000366211 15.9996 0.000366211C11.6551 0.000366211 11.1102 0.0178037 9.40337 0.0966787C6.92669 0.208804 4.47587 0.895304 2.68581 2.68543C0.88875 4.48249 0.209688 6.92855 0.0960625 9.40374C0.0183125 11.1106 0 11.6549 0 15.9999C0 20.3451 0.0183125 20.8901 0.0960625 22.5977C0.210187 25.0815 0.888063 27.5183 2.68569 29.3146C4.48306 31.1106 6.92837 31.7907 9.40337 31.9041C11.1102 31.9821 11.6551 31.9997 15.9996 31.9997C20.3456 31.9997 20.8904 31.982 22.5973 31.9041C25.0781 31.7904 27.5211 31.1097 29.3149 29.3146C31.1075 27.5207 31.7915 25.0674 31.9037 22.5976C31.9817 20.8901 32 20.345 32 15.9999C32 11.6547 31.9817 11.1106 31.9037 9.40368C31.8264 7.70024 31.5558 6.53762 31.1601 5.51962ZM29.0236 22.4654C28.9446 24.2032 28.5409 26.0108 27.2764 27.2768C25.9953 28.5596 24.2146 28.9444 22.4659 29.0242C20.7782 29.1006 20.2729 29.1174 15.9996 29.1174C11.7278 29.1174 11.2224 29.1006 9.53469 29.0242C7.78156 28.9442 6.00363 28.5529 4.72356 27.277C3.44719 26.0047 3.05437 24.2021 2.97619 22.4653C2.89975 20.7786 2.883 20.2726 2.883 15.9999C2.883 11.7281 2.89981 11.2221 2.97619 9.53437C3.05413 7.80455 3.46569 5.98368 4.72331 4.72393C5.99844 3.44668 7.79488 3.05587 9.53481 2.97649C11.2224 2.89943 11.7278 2.8833 15.9996 2.8833C20.2722 2.8833 20.7782 2.89943 22.4659 2.97649C24.2181 3.05643 25.9989 3.44593 27.2763 4.72368C28.5542 6.00205 28.9444 7.79174 29.0236 9.53449C29.1009 11.2221 29.1178 11.7281 29.1178 15.9999C29.1177 20.2726 29.1009 20.7786 29.0236 22.4654Z" fill="currentColor"></path>
</g>
<defs>
<clipPath id="clip0_34112_19522">
<rect width="100%" height="100%" fill="currentColor"></rect>
</clipPath>
</defs>
</svg></div><div class="social-bg"></div></a><a href="https://dribbble.com" target="_blank" class="link-social w-inline-block"><div class="icon-social w-embed"><svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M788.594 318.125C783.281 292.5 775.469 267.5 765.156 243.125C755.156 219.375 742.656 196.875 728.281 175.625C713.906 154.375 697.656 135 679.844 116.875C661.719 98.75 641.719 82.1875 621.094 68.4375C599.844 54.0625 576.719 41.5625 553.594 31.5625C529.531 21.25 504.531 13.4375 478.594 8.12502C452.344 2.81252 425.469 0 398.281 0C371.094 0 344.219 2.81252 317.969 8.12502C292.344 13.4375 267.344 21.25 243.281 31.5625C219.531 41.5625 197.031 54.0625 175.781 68.4375C154.531 82.8125 134.844 99.0625 117.031 116.875C99.2187 134.687 82.6562 155 68.5937 175.625C54.2187 196.875 41.7188 219.375 31.7188 243.125C21.4063 267.187 13.5938 292.187 8.28127 318.125C2.96877 344.375 0.15625 371.25 0.15625 398.438C0.15625 425.625 2.96877 452.5 8.28127 478.75C13.5938 504.375 21.4063 529.375 31.7188 553.438C41.7188 577.188 54.2187 599.687 68.5937 621.25C82.9687 642.5 99.2187 661.875 117.031 680C135.156 698.125 155.156 714.375 175.781 728.438C197.031 742.813 220.156 755.313 243.281 765.313C267.344 775.625 292.344 783.438 317.969 788.75C344.219 794.063 371.094 796.875 398.281 796.875C425.469 796.875 452.031 794.063 478.594 788.75C504.219 783.438 529.219 775.625 553.594 765.313C577.344 755.313 599.844 742.813 621.094 728.438C642.344 714.063 662.031 697.813 679.844 680C697.969 661.875 714.219 641.875 728.281 621.25C742.656 600 755.156 577.188 765.156 553.438C775.469 529.375 783.281 504.375 788.594 478.75C793.906 452.5 796.719 425.625 796.719 398.438C796.719 371.25 793.906 344.375 788.594 318.125ZM398.281 58.125C484.531 58.125 562.969 90.3125 622.969 143.125C622.031 144.375 573.906 218.125 445.156 266.25C387.031 159.375 322.969 74.375 317.656 67.5C343.594 61.5625 370.469 58.125 398.281 58.125ZM316.094 68.125C316.406 67.8125 316.094 67.8125 316.094 68.125ZM252.969 90.625C257.656 96.5625 320.469 182.187 379.531 286.875C216.094 330 74.2187 328.438 65.4687 328.125C87.0312 222.812 157.969 135.313 252.969 90.625ZM144.844 625.625C90.7813 565.625 57.6562 485.938 57.6562 398.438C57.6562 394.687 57.9688 391.25 57.9688 387.813C63.9062 387.813 232.031 391.875 407.344 339.375C417.031 358.438 426.406 378.125 435.156 397.188C430.781 398.438 426.094 399.687 421.719 401.25C237.969 460.625 144.844 625.625 144.844 625.625ZM398.281 738.75C318.906 738.75 246.719 711.562 188.906 666.562C190.156 664.062 256.094 523.75 456.094 454.062C456.719 453.75 457.656 453.438 458.281 453.438C506.094 577.813 525.781 681.875 530.781 711.875C490.156 729.062 445.156 738.75 398.281 738.75ZM588.281 680.625C584.844 660 566.719 560.312 522.031 437.5C632.031 420 727.344 450 734.219 452.5C719.219 547.187 664.531 629.062 588.281 680.625ZM501.406 383.75C498.906 377.812 496.406 372.188 493.906 366.25C486.719 349.375 479.219 333.125 471.094 316.875C605.469 262.187 660.156 183.125 660.781 182.187C708.281 240.312 737.344 314.375 738.281 395C733.594 394.062 618.281 369.062 501.406 383.75Z" fill="currentColor"></path>
</svg></div><div class="social-bg"></div></a><a href="https://linkedin.com" target="_blank" class="link-social w-inline-block"><div class="icon-social w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.5614 26.562H22.1164V19.6006C22.1164 17.9406 22.0867 15.8037 19.8045 15.8037C17.4893 15.8037 17.1352 17.6123 17.1352 19.4798V26.5615H12.6901V12.2461H16.9574V14.2025H17.0172C17.8873 12.7147 19.5051 11.8261 21.2275 11.89C25.7327 11.89 26.5634 14.8534 26.5634 18.7088L26.5614 26.562ZM7.67454 10.2893C6.24989 10.2896 5.09481 9.13478 5.09453 7.71016C5.09425 6.28547 6.24899 5.13034 7.67357 5.13006C9.09821 5.12979 10.2533 6.28456 10.2536 7.70919C10.2538 9.13388 9.09918 10.2891 7.67454 10.2893ZM9.89705 26.5621H5.44738V12.2461H9.89705V26.5621ZM28.7775 1.00207H3.21371C2.00555 0.988413 1.01476 1.95623 1 3.16443V28.8351C1.01427 30.0439 2.00492 31.0127 3.21371 30.9998H28.7775C29.9887 31.015 30.9832 30.0463 31 28.8351V3.16263C30.9827 1.952 29.9881 0.984256 28.7775 1.00019V1.00207Z" fill="currentColor"></path>
</svg></div><div class="social-bg"></div></a><a href="https://x.com" target="_blank" class="link-social w-inline-block"><div class="icon-social w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_34112_19546)">
<path d="M18.9791 13.5498L30.6356 0H27.8734L17.752 11.7651L9.66809 0H0.344238L12.5687 17.7909L0.344238 32H3.10663L13.7951 19.5756L22.3323 32H31.6562L18.9784 13.5498H18.9791ZM15.1956 17.9477L13.957 16.1761L4.10196 2.07948H8.34482L16.298 13.4559L17.5366 15.2275L27.8747 30.0151H23.6319L15.1956 17.9484V17.9477Z" fill="currentColor"></path>
</g>
<defs>
<clipPath id="clip0_34112_19546">
<rect width="100%" height="100%" fill="currentColor"></rect>
</clipPath>
</defs>
</svg></div><div class="social-bg"></div></a></div></div><div class="footer-columns"><div id="w-node-_067b2a7b-63e6-563e-b755-b73bf14e9515-d0446e59" class="footer-column"><div class="label-large label-strong">Company</div><div class="footer-link-list"><a href="../index.html" class="footer-link">Services</a><a href="../index.html" class="footer-link">Case Studies</a><a href="../index.html" class="footer-link">Testimonials</a><a href="../index.html" class="footer-link">Pricing</a><a href="../index.html" class="footer-link">FAQ</a><a data-w-id="e35366b2-5dd3-3624-7c98-f42032072acc" href="#" class="footer-link">Contact</a></div></div><div class="footer-column"><div class="label-large label-strong">Template</div><div class="footer-link-list"><a href="../template/style-guide.html" class="footer-link">Style Guide</a><a href="../template/licenses.html" class="footer-link">Licenses</a><a href="../template/changelog.html" class="footer-link">Changelog</a><a href="../404.html" class="footer-link">404</a><a href="../401.html" class="footer-link">Password</a></div></div></div></div><div class="footer-bottom"><div class="section-divider"></div><div data-w-id="07673991-ab03-7275-0ea7-4f066bb866d6" class="footer-bottom-tile"><div class="text-small body-medium">Aluro. All rights reserved. © 2025</div><div class="text-small body-medium">Made by <a href="https://www.eclipso.studio/" target="_blank" class="text-underline">Eclipso Studio</a> with <a href="https://webflow.com/" target="_blank" class="text-underline">Webflow</a></div></div></div></div></div><div class="footer-main-bg"></div></section></div><script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68f617da1d06c09a4e6e6886" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/js/aluro.schunk.36b8fb49256177c8.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/js/aluro.schunk.a4beb3be68696f4a.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/68f617da1d06c09a4e6e6886/js/aluro.8f5309e9.701cbc9604d25e9b.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/gsap/3.14.2/Flip.min.js" type="text/javascript"></script><script src="https://cdn.prod.website-files.com/gsap/3.14.2/SplitText.min.js" type="text/javascript"></script><script type="text/javascript">gsap.registerPlugin(ScrollTrigger,Flip,SplitText);</script><script src="https://unpkg.com/lenis@1.2.3/dist/lenis.min.js"></script>
<script>
let lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 0.6,
  gestureOrientation: "vertical",
  normalizeWheel: false,
  smoothTouch: false,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$("[data-lenis-start]").on("click", function () {
  lenis.start();
});
$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});
$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});
</script></body></html>`;
                
                const currentScript = document.currentScript;
                if(currentScript && currentScript.parentNode) {
                    currentScript.parentNode.insertBefore(container, currentScript);
                } else {
                    document.body.appendChild(container);
                }
            })();
        