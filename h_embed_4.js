
(function() {
  const style = document.createElement('style');
  style.textContent = `html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:sans-serif}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{vertical-align:baseline;display:inline-block}audio:not([controls]){height:0;display:none}[hidden],template{display:none}a{background-color:#0000}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:none}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{font-family:webflow-icons;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)format("truetype");font-weight:400;font-style:normal}[class^=w-icon-],[class*=\\ w-icon-]{speak:none;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-weight:400;line-height:1;font-family:webflow-icons!important}.w-icon-slider-right:before{content:""}.w-icon-slider-left:before{content:""}.w-icon-nav-menu:before{content:""}.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before{content:""}.w-icon-file-upload-remove:before{content:""}.w-icon-file-upload-icon:before{content:""}*{box-sizing:border-box}html{height:100%}body{color:#333;background-color:#fff;min-height:100%;margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:20px}img{vertical-align:middle;max-width:100%;display:inline-block}html.w-mod-touch *{background-attachment:scroll!important}.w-block{display:block}.w-inline-block{max-width:100%;display:inline-block}.w-clearfix:before,.w-clearfix:after{content:" ";grid-area:1/1/2/2;display:table}.w-clearfix:after{clear:both}.w-hidden{display:none}.w-button{color:#fff;line-height:inherit;cursor:pointer;background-color:#3898ec;border:0;border-radius:0;padding:9px 15px;text-decoration:none;display:inline-block}input.w-button{-webkit-appearance:button}html[data-w-dynpage] [data-w-cloak]{color:#0000!important}.w-code-block{margin:unset}pre.w-code-block code{all:inherit}pre.w-code-block code>span{display:block!important}.w-optimization{display:contents}.w-webflow-badge,.w-webflow-badge>img{box-sizing:unset;width:unset;height:unset;max-height:unset;max-width:unset;min-height:unset;min-width:unset;margin:unset;padding:unset;float:unset;clear:unset;border:unset;border-radius:unset;background:unset;background-image:unset;background-position:unset;background-size:unset;background-repeat:unset;background-origin:unset;background-clip:unset;background-attachment:unset;background-color:unset;box-shadow:unset;transform:unset;direction:unset;font-family:unset;font-weight:unset;color:unset;font-size:unset;line-height:unset;font-style:unset;font-variant:unset;text-align:unset;letter-spacing:unset;-webkit-text-decoration:unset;text-decoration:unset;text-indent:unset;text-transform:unset;list-style-type:unset;text-shadow:unset;vertical-align:unset;cursor:unset;white-space:unset;word-break:unset;word-spacing:unset;word-wrap:unset;transition:unset}.w-webflow-badge{white-space:nowrap;cursor:pointer;box-shadow:0 0 0 1px #0000001a,0 1px 3px #0000001a;visibility:visible!important;opacity:1!important;z-index:2147483647!important;color:#aaadb0!important;width:auto!important;height:auto!important;overflow:unset!important;background-color:#fff!important;border-radius:3px!important;margin:0!important;padding:6px!important;font-size:12px!important;line-height:14px!important;text-decoration:none!important;display:inline-block!important;position:fixed!important;inset:auto 12px 12px auto!important;transform:none!important}.w-webflow-badge>img{position:unset;visibility:unset!important;opacity:1!important;vertical-align:middle!important;display:inline-block!important}h1,h2,h3,h4,h5,h6{margin-bottom:10px;font-weight:700}h1{margin-top:20px;font-size:38px;line-height:44px}h2{margin-top:20px;font-size:32px;line-height:36px}h3{margin-top:20px;font-size:24px;line-height:30px}h4{margin-top:10px;font-size:18px;line-height:24px}h5{margin-top:10px;font-size:14px;line-height:20px}h6{margin-top:10px;font-size:12px;line-height:18px}p{margin-top:0;margin-bottom:10px}blockquote{border-left:5px solid #e2e2e2;margin:0 0 10px;padding:10px 20px;font-size:18px;line-height:22px}figure{margin:0 0 10px}figcaption{text-align:center;margin-top:5px}ul,ol{margin-top:0;margin-bottom:10px;padding-left:40px}.w-list-unstyled{padding-left:0;list-style:none}.w-embed:before,.w-embed:after{content:" ";grid-area:1/1/2/2;display:table}.w-embed:after{clear:both}.w-video{width:100%;padding:0;position:relative}.w-video iframe,.w-video object,.w-video embed{border:none;width:100%;height:100%;position:absolute;top:0;left:0}fieldset{border:0;margin:0;padding:0}button,[type=button],[type=reset]{cursor:pointer;-webkit-appearance:button;border:0}.w-form{margin:0 0 15px}.w-form-done{text-align:center;background-color:#ddd;padding:20px;display:none}.w-form-fail{background-color:#ffdede;margin-top:10px;padding:10px;display:none}label{margin-bottom:5px;font-weight:700;display:block}.w-input,.w-select{color:#333;vertical-align:middle;background-color:#fff;border:1px solid #ccc;width:100%;height:38px;margin-bottom:10px;padding:8px 12px;font-size:14px;line-height:1.42857;display:block}.w-input::placeholder,.w-select::placeholder{color:#999}.w-input:focus,.w-select:focus{border-color:#3898ec;outline:0}.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed}.w-input[disabled]:not(.w-input-disabled),.w-select[disabled]:not(.w-input-disabled),.w-input[readonly],.w-select[readonly],fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select{background-color:#eee}textarea.w-input,textarea.w-select{height:auto}.w-select{background-color:#f3f3f3}.w-select[multiple]{height:auto}.w-form-label{cursor:pointer;margin-bottom:0;font-weight:400;display:inline-block}.w-radio{margin-bottom:5px;padding-left:20px;display:block}.w-radio:before,.w-radio:after{content:" ";grid-area:1/1/2/2;display:table}.w-radio:after{clear:both}.w-radio-input{float:left;margin:3px 0 0 -20px;line-height:normal}.w-file-upload{margin-bottom:10px;display:block}.w-file-upload-input{opacity:0;z-index:-100;width:.1px;height:.1px;position:absolute;overflow:hidden}.w-file-upload-default,.w-file-upload-uploading,.w-file-upload-success{color:#333;display:inline-block}.w-file-upload-error{margin-top:10px;display:block}.w-file-upload-default.w-hidden,.w-file-upload-uploading.w-hidden,.w-file-upload-error.w-hidden,.w-file-upload-success.w-hidden{display:none}.w-file-upload-uploading-btn{cursor:pointer;background-color:#fafafa;border:1px solid #ccc;margin:0;padding:8px 12px;font-size:14px;font-weight:400;display:flex}.w-file-upload-file{background-color:#fafafa;border:1px solid #ccc;flex-grow:1;justify-content:space-between;margin:0;padding:8px 9px 8px 11px;display:flex}.w-file-upload-file-name{font-size:14px;font-weight:400;display:block}.w-file-remove-link{cursor:pointer;width:auto;height:auto;margin-top:3px;margin-left:10px;padding:3px;display:block}.w-icon-file-upload-remove{margin:auto;font-size:10px}.w-file-upload-error-msg{color:#ea384c;padding:2px 0;display:inline-block}.w-file-upload-info{padding:0 12px;line-height:38px;display:inline-block}.w-file-upload-label{cursor:pointer;background-color:#fafafa;border:1px solid #ccc;margin:0;padding:8px 12px;font-size:14px;font-weight:400;display:inline-block}.w-icon-file-upload-icon,.w-icon-file-upload-uploading{width:20px;margin-right:8px;display:inline-block}.w-icon-file-upload-uploading{height:20px}.w-container{max-width:940px;margin-left:auto;margin-right:auto}.w-container:before,.w-container:after{content:" ";grid-area:1/1/2/2;display:table}.w-container:after{clear:both}.w-container .w-row{margin-left:-10px;margin-right:-10px}.w-row:before,.w-row:after{content:" ";grid-area:1/1/2/2;display:table}.w-row:after{clear:both}.w-row .w-row{margin-left:0;margin-right:0}.w-col{float:left;width:100%;min-height:1px;padding-left:10px;padding-right:10px;position:relative}.w-col .w-col{padding-left:0;padding-right:0}.w-col-1{width:8.33333%}.w-col-2{width:16.6667%}.w-col-3{width:25%}.w-col-4{width:33.3333%}.w-col-5{width:41.6667%}.w-col-6{width:50%}.w-col-7{width:58.3333%}.w-col-8{width:66.6667%}.w-col-9{width:75%}.w-col-10{width:83.3333%}.w-col-11{width:91.6667%}.w-col-12{width:100%}.w-hidden-main{display:none!important}@media screen and (max-width:991px){.w-container{max-width:728px}.w-hidden-main{display:inherit!important}.w-hidden-medium{display:none!important}.w-col-medium-1{width:8.33333%}.w-col-medium-2{width:16.6667%}.w-col-medium-3{width:25%}.w-col-medium-4{width:33.3333%}.w-col-medium-5{width:41.6667%}.w-col-medium-6{width:50%}.w-col-medium-7{width:58.3333%}.w-col-medium-8{width:66.6667%}.w-col-medium-9{width:75%}.w-col-medium-10{width:83.3333%}.w-col-medium-11{width:91.6667%}.w-col-medium-12{width:100%}.w-col-stack{width:100%;left:auto;right:auto}}@media screen and (max-width:767px){.w-hidden-main,.w-hidden-medium{display:inherit!important}.w-hidden-small{display:none!important}.w-row,.w-container .w-row{margin-left:0;margin-right:0}.w-col{width:100%;left:auto;right:auto}.w-col-small-1{width:8.33333%}.w-col-small-2{width:16.6667%}.w-col-small-3{width:25%}.w-col-small-4{width:33.3333%}.w-col-small-5{width:41.6667%}.w-col-small-6{width:50%}.w-col-small-7{width:58.3333%}.w-col-small-8{width:66.6667%}.w-col-small-9{width:75%}.w-col-small-10{width:83.3333%}.w-col-small-11{width:91.6667%}.w-col-small-12{width:100%}}@media screen and (max-width:479px){.w-container{max-width:none}.w-hidden-main,.w-hidden-medium,.w-hidden-small{display:inherit!important}.w-hidden-tiny{display:none!important}.w-col{width:100%}.w-col-tiny-1{width:8.33333%}.w-col-tiny-2{width:16.6667%}.w-col-tiny-3{width:25%}.w-col-tiny-4{width:33.3333%}.w-col-tiny-5{width:41.6667%}.w-col-tiny-6{width:50%}.w-col-tiny-7{width:58.3333%}.w-col-tiny-8{width:66.6667%}.w-col-tiny-9{width:75%}.w-col-tiny-10{width:83.3333%}.w-col-tiny-11{width:91.6667%}.w-col-tiny-12{width:100%}}.w-widget{position:relative}.w-widget-map{width:100%;height:400px}.w-widget-map label{width:auto;display:inline}.w-widget-map img{max-width:inherit}.w-widget-map .gm-style-iw{text-align:center}.w-widget-map .gm-style-iw>button{display:none!important}.w-widget-twitter{overflow:hidden}.w-widget-twitter-count-shim{vertical-align:top;text-align:center;background:#fff;border:1px solid #758696;border-radius:3px;width:28px;height:20px;display:inline-block;position:relative}.w-widget-twitter-count-shim *{pointer-events:none;-webkit-user-select:none;user-select:none}.w-widget-twitter-count-shim .w-widget-twitter-count-inner{text-align:center;color:#999;font-family:serif;font-size:15px;line-height:12px;position:relative}.w-widget-twitter-count-shim .w-widget-twitter-count-clear{display:block;position:relative}.w-widget-twitter-count-shim.w--large{width:36px;height:28px}.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner{font-size:18px;line-height:18px}.w-widget-twitter-count-shim:not(.w--vertical){margin-left:5px;margin-right:8px}.w-widget-twitter-count-shim:not(.w--vertical).w--large{margin-left:6px}.w-widget-twitter-count-shim:not(.w--vertical):before,.w-widget-twitter-count-shim:not(.w--vertical):after{content:" ";pointer-events:none;border:solid #0000;width:0;height:0;position:absolute;top:50%;left:0}.w-widget-twitter-count-shim:not(.w--vertical):before{border-width:4px;border-color:#75869600 #5d6c7b #75869600 #75869600;margin-top:-4px;margin-left:-9px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:before{border-width:5px;margin-top:-5px;margin-left:-10px}.w-widget-twitter-count-shim:not(.w--vertical):after{border-width:4px;border-color:#fff0 #fff #fff0 #fff0;margin-top:-4px;margin-left:-8px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:after{border-width:5px;margin-top:-5px;margin-left:-9px}.w-widget-twitter-count-shim.w--vertical{width:61px;height:33px;margin-bottom:8px}.w-widget-twitter-count-shim.w--vertical:before,.w-widget-twitter-count-shim.w--vertical:after{content:" ";pointer-events:none;border:solid #0000;width:0;height:0;position:absolute;top:100%;left:50%}.w-widget-twitter-count-shim.w--vertical:before{border-width:5px;border-color:#5d6c7b #75869600 #75869600;margin-left:-5px}.w-widget-twitter-count-shim.w--vertical:after{border-width:4px;border-color:#fff #fff0 #fff0;margin-left:-4px}.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner{font-size:18px;line-height:22px}.w-widget-twitter-count-shim.w--vertical.w--large{width:76px}.w-background-video{color:#fff;height:500px;position:relative;overflow:hidden}.w-background-video>video{object-fit:cover;z-index:-100;background-position:50%;background-size:cover;width:100%;height:100%;margin:auto;position:absolute;inset:-100%}.w-background-video>video::-webkit-media-controls-start-playback-button{-webkit-appearance:none;display:none!important}.w-background-video--control{background-color:#0000;padding:0;position:absolute;bottom:1em;right:1em}.w-background-video--control>[hidden]{display:none!important}.w-slider{text-align:center;clear:both;-webkit-tap-highlight-color:#0000;tap-highlight-color:#0000;background:#ddd;height:300px;position:relative}.w-slider-mask{z-index:1;white-space:nowrap;height:100%;display:block;position:relative;left:0;right:0;overflow:hidden}.w-slide{vertical-align:top;white-space:normal;text-align:left;width:100%;height:100%;display:inline-block;position:relative}.w-slider-nav{z-index:2;text-align:center;-webkit-tap-highlight-color:#0000;tap-highlight-color:#0000;height:40px;margin:auto;padding-top:10px;position:absolute;inset:auto 0 0}.w-slider-nav.w-round>div{border-radius:100%}.w-slider-nav.w-num>div{width:auto;height:auto;font-size:inherit;line-height:inherit;padding:.2em .5em}.w-slider-nav.w-shadow>div{box-shadow:0 0 3px #3336}.w-slider-nav-invert{color:#fff}.w-slider-nav-invert>div{background-color:#2226}.w-slider-nav-invert>div.w-active{background-color:#222}.w-slider-dot{cursor:pointer;background-color:#fff6;width:1em;height:1em;margin:0 3px .5em;transition:background-color .1s,color .1s;display:inline-block;position:relative}.w-slider-dot.w-active{background-color:#fff}.w-slider-dot:focus{outline:none;box-shadow:0 0 0 2px #fff}.w-slider-dot:focus.w-active{box-shadow:none}.w-slider-arrow-left,.w-slider-arrow-right{cursor:pointer;color:#fff;-webkit-tap-highlight-color:#0000;tap-highlight-color:#0000;-webkit-user-select:none;user-select:none;width:80px;margin:auto;font-size:40px;position:absolute;inset:0;overflow:hidden}.w-slider-arrow-left [class^=w-icon-],.w-slider-arrow-right [class^=w-icon-],.w-slider-arrow-left [class*=\\ w-icon-],.w-slider-arrow-right [class*=\\ w-icon-]{position:absolute}.w-slider-arrow-left:focus,.w-slider-arrow-right:focus{outline:0}.w-slider-arrow-left{z-index:3;right:auto}.w-slider-arrow-right{z-index:4;left:auto}.w-icon-slider-left,.w-icon-slider-right{width:1em;height:1em;margin:auto;inset:0}.w-slider-aria-label{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.w-slider-force-show{display:block!important}.w-dropdown{text-align:left;z-index:900;margin-left:auto;margin-right:auto;display:inline-block;position:relative}.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link{vertical-align:top;color:#222;text-align:left;white-space:nowrap;margin-left:auto;margin-right:auto;padding:20px;text-decoration:none;position:relative}.w-dropdown-toggle{-webkit-user-select:none;user-select:none;cursor:pointer;padding-right:40px;display:inline-block}.w-dropdown-toggle:focus{outline:0}.w-icon-dropdown-toggle{width:1em;height:1em;margin:auto 20px auto auto;position:absolute;top:0;bottom:0;right:0}.w-dropdown-list{background:#ddd;min-width:100%;display:none;position:absolute}.w-dropdown-list.w--open{display:block}.w-dropdown-link{color:#222;padding:10px 20px;display:block}.w-dropdown-link.w--current{color:#0082f3}.w-dropdown-link:focus{outline:0}@media screen and (max-width:767px){.w-nav-brand{padding-left:10px}}.w-lightbox-backdrop{cursor:auto;letter-spacing:normal;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;color:#fff;text-align:center;z-index:2000;opacity:0;-webkit-user-select:none;-moz-user-select:none;-webkit-tap-highlight-color:transparent;background:#000000e6;outline:0;font-family:Helvetica Neue,Helvetica,Ubuntu,Segoe UI,Verdana,sans-serif;font-size:17px;font-style:normal;font-weight:300;line-height:1.2;list-style:disc;position:fixed;inset:0;-webkit-transform:translate(0)}.w-lightbox-backdrop,.w-lightbox-container{-webkit-overflow-scrolling:touch;height:100%;overflow:auto}.w-lightbox-content{height:100vh;position:relative;overflow:hidden}.w-lightbox-view{opacity:0;width:100vw;height:100vh;position:absolute}.w-lightbox-view:before{content:"";height:100vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:86vh}.w-lightbox-frame,.w-lightbox-view:before{vertical-align:middle;display:inline-block}.w-lightbox-figure{margin:0;position:relative}.w-lightbox-group .w-lightbox-figure{cursor:pointer}.w-lightbox-img{width:auto;max-width:none;height:auto}.w-lightbox-image{float:none;max-width:100vw;max-height:100vh;display:block}.w-lightbox-group .w-lightbox-image{max-height:86vh}.w-lightbox-caption{text-align:left;text-overflow:ellipsis;white-space:nowrap;background:#0006;padding:.5em 1em;position:absolute;bottom:0;left:0;right:0;overflow:hidden}.w-lightbox-embed{width:100%;height:100%;position:absolute;inset:0}.w-lightbox-control{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:24px;width:4em;transition:all .3s;position:absolute;top:0}.w-lightbox-left{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==);display:none;bottom:0;left:0}.w-lightbox-right{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+);display:none;bottom:0;right:0}.w-lightbox-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=);background-size:18px;height:2.6em;right:0}.w-lightbox-strip{white-space:nowrap;padding:0 1vh;line-height:0;position:absolute;bottom:0;left:0;right:0;overflow:auto hidden}.w-lightbox-item{box-sizing:content-box;cursor:pointer;width:10vh;padding:2vh 1vh;display:inline-block;-webkit-transform:translate(0,0)}.w-lightbox-active{opacity:.3}.w-lightbox-thumbnail{background:#222;height:10vh;position:relative;overflow:hidden}.w-lightbox-thumbnail-image{position:absolute;top:0;left:0}.w-lightbox-thumbnail .w-lightbox-tall{width:100%;top:50%;transform:translateY(-50%)}.w-lightbox-thumbnail .w-lightbox-wide{height:100%;left:50%;transform:translate(-50%)}.w-lightbox-spinner{box-sizing:border-box;border:5px solid #0006;border-radius:50%;width:40px;height:40px;margin-top:-20px;margin-left:-20px;animation:.8s linear infinite spin;position:absolute;top:50%;left:50%}.w-lightbox-spinner:after{content:"";border:3px solid #0000;border-bottom-color:#fff;border-radius:50%;position:absolute;inset:-4px}.w-lightbox-hide{display:none}.w-lightbox-noscroll{overflow:hidden}@media (min-width:768px){.w-lightbox-content{height:96vh;margin-top:2vh}.w-lightbox-view,.w-lightbox-view:before{height:96vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:84vh}.w-lightbox-image{max-width:96vw;max-height:96vh}.w-lightbox-group .w-lightbox-image{max-width:82.3vw;max-height:84vh}.w-lightbox-left,.w-lightbox-right{opacity:.5;display:block}.w-lightbox-close{opacity:.8}.w-lightbox-control:hover{opacity:1}}.w-lightbox-inactive,.w-lightbox-inactive:hover{opacity:0}.w-richtext:before,.w-richtext:after{content:" ";grid-area:1/1/2/2;display:table}.w-richtext:after{clear:both}.w-richtext[contenteditable=true]:before,.w-richtext[contenteditable=true]:after{white-space:initial}.w-richtext ol,.w-richtext ul{overflow:hidden}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type=video] div:after,.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type=image] div{outline:2px solid #2895f7}.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type=video]>div:after{content:"";display:none;position:absolute;inset:0}.w-richtext figure{max-width:60%;position:relative}.w-richtext figure>div:before{cursor:default!important}.w-richtext figure img{width:100%}.w-richtext figure figcaption.w-richtext-figcaption-placeholder{opacity:.6}.w-richtext figure div{color:#0000;font-size:0}.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type=image]{display:table}.w-richtext figure.w-richtext-figure-type-image>div,.w-richtext figure[data-rt-type=image]>div{display:inline-block}.w-richtext figure.w-richtext-figure-type-image>figcaption,.w-richtext figure[data-rt-type=image]>figcaption{caption-side:bottom;display:table-caption}.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type=video]{width:60%;height:0}.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type=video] iframe{width:100%;height:100%;position:absolute;top:0;left:0}.w-richtext figure.w-richtext-figure-type-video>div,.w-richtext figure[data-rt-type=video]>div{width:100%}.w-richtext figure.w-richtext-align-center{clear:both;margin-left:auto;margin-right:auto}.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,.w-richtext figure.w-richtext-align-center[data-rt-type=image]>div{max-width:100%}.w-richtext figure.w-richtext-align-normal{clear:both}.w-richtext figure.w-richtext-align-fullwidth{text-align:center;clear:both;width:100%;max-width:100%;margin-left:auto;margin-right:auto;display:block}.w-richtext figure.w-richtext-align-fullwidth>div{padding-bottom:inherit;display:inline-block}.w-richtext figure.w-richtext-align-fullwidth>figcaption{display:block}.w-richtext figure.w-richtext-align-floatleft{float:left;clear:none;margin-right:15px}.w-richtext figure.w-richtext-align-floatright{float:right;clear:none;margin-left:15px}.w-nav{z-index:1000;background:#ddd;position:relative}.w-nav:before,.w-nav:after{content:" ";grid-area:1/1/2/2;display:table}.w-nav:after{clear:both}.w-nav-brand{float:left;color:#333;text-decoration:none;position:relative}.w-nav-link{vertical-align:top;color:#222;text-align:left;margin-left:auto;margin-right:auto;padding:20px;text-decoration:none;display:inline-block;position:relative}.w-nav-link.w--current{color:#0082f3}.w-nav-menu{float:right;position:relative}[data-nav-menu-open]{text-align:center;background:#c8c8c8;min-width:200px;position:absolute;top:100%;left:0;right:0;overflow:visible;display:block!important}.w--nav-link-open{display:block;position:relative}.w-nav-overlay{width:100%;display:none;position:absolute;top:100%;left:0;right:0;overflow:hidden}.w-nav-overlay [data-nav-menu-open]{top:0}.w-nav[data-animation=over-left] .w-nav-overlay{width:auto}.w-nav[data-animation=over-left] .w-nav-overlay,.w-nav[data-animation=over-left] [data-nav-menu-open]{z-index:1;top:0;right:auto}.w-nav[data-animation=over-right] .w-nav-overlay{width:auto}.w-nav[data-animation=over-right] .w-nav-overlay,.w-nav[data-animation=over-right] [data-nav-menu-open]{z-index:1;top:0;left:auto}.w-nav-button{float:right;cursor:pointer;-webkit-tap-highlight-color:#0000;tap-highlight-color:#0000;-webkit-user-select:none;user-select:none;padding:18px;font-size:24px;display:none;position:relative}.w-nav-button:focus{outline:0}.w-nav-button.w--open{color:#fff;background-color:#c8c8c8}.w-nav[data-collapse=all] .w-nav-menu{display:none}.w-nav[data-collapse=all] .w-nav-button,.w--nav-dropdown-open,.w--nav-dropdown-toggle-open{display:block}.w--nav-dropdown-list-open{position:static}@media screen and (max-width:991px){.w-nav[data-collapse=medium] .w-nav-menu{display:none}.w-nav[data-collapse=medium] .w-nav-button{display:block}}@media screen and (max-width:767px){.w-nav[data-collapse=small] .w-nav-menu{display:none}.w-nav[data-collapse=small] .w-nav-button{display:block}.w-nav-brand{padding-left:10px}}@media screen and (max-width:479px){.w-nav[data-collapse=tiny] .w-nav-menu{display:none}.w-nav[data-collapse=tiny] .w-nav-button{display:block}}.w-tabs{position:relative}.w-tabs:before,.w-tabs:after{content:" ";grid-area:1/1/2/2;display:table}.w-tabs:after{clear:both}.w-tab-menu{position:relative}.w-tab-link{vertical-align:top;text-align:left;cursor:pointer;color:#222;background-color:#ddd;padding:9px 30px;text-decoration:none;display:inline-block;position:relative}.w-tab-link.w--current{background-color:#c8c8c8}.w-tab-link:focus{outline:0}.w-tab-content{display:block;position:relative;overflow:hidden}.w-tab-pane{display:none;position:relative}.w--tab-active{display:block}@media screen and (max-width:479px){.w-tab-link{display:block}}.w-ix-emptyfix:after{content:""}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.w-dyn-empty{background-color:#ddd;padding:10px}.w-dyn-hide,.w-dyn-bind-empty,.w-condition-invisible{display:none!important}.wf-layout-layout{display:grid}:root{--swatches--white:#f7f7f7;--global--font-family:Poppins,sans-serif;--swatches--black:#282829;--global--font-size:1rem;--global--letter-spacing:0em;--empty-space--desktop-24px:1.5rem;--paragraph-large--font-size\\<deleted\\|variable-3c6a4d82-c86e-362d-5cff-dab94f2c7210\\>:var(--size--1-25rem\\<deleted\\|variable-1ae11985-a3f4-f5f2-941a-6909487afed3\\>);--paragraph-large--line-height\\<deleted\\|variable-809db6be-cc52-77bb-aef4-68d9bf58d943\\>:var(--line-height--1-3em\\<deleted\\|variable-b0a7272b-202e-22ba-19f8-dc2d702663ee\\>);--horizontal-container-padding--desktop:2rem;--padding--96px:6rem;--padding--16px:1rem;--padding--56px:3.5rem;--utility-swatches--black-100\\<deleted\\|variable-ffc6158f-f395-e3bc-94c6-22ac49028046\\>:#000;--utility-swatches--black-90\\<deleted\\|variable-5a9ad8e5-49aa-b73a-4c6a-8d17e055689f\\>:#000000e6;--utility-swatches--white-95\\<deleted\\|variable-399aa7e5-3411-de86-4133-ed458bd3ca9b\\>:#fffffff2;--padding--24px:1.5rem;--utility-swatches--white-100\\<deleted\\|variable-81df7ecc-ef80-9b9b-26c4-8f7eca97a0c0\\>:white;--swatches--a-grey:#b6b6b6;--swatches--grey:#989796;--themes--light:var(--swatches--white);--swatches--red:#e61e26;--swatches--yellow:#fcb415;--swatches--light-grey:#eee;--swatches--bright-gray:#ebebeb;--swatches--light-silver:#d9d9d9;--global--font-weight:0px;--global--line-height:1rem;--border-width--desktop-1-5px:1.5px;--empty-space--desktop-12px:.75rem;--empty-space--desktop-48px:3rem;--empty-space--desktop-64px:4rem;--horizontal-container-padding--tablet:1.5rem;--horizontal-container-padding--mobile:1.25rem;--padding--8px:.5rem;--padding--32px:2rem;--themes--dark:var(--swatches--black);--size--1-25rem\\<deleted\\|variable-1ae11985-a3f4-f5f2-941a-6909487afed3\\>:1.25rem;--line-height--1-3em\\<deleted\\|variable-b0a7272b-202e-22ba-19f8-dc2d702663ee\\>:1.3em}.w-checkbox{margin-bottom:5px;padding-left:20px;display:block}.w-checkbox:before{content:" ";grid-area:1/1/2/2;display:table}.w-checkbox:after{content:" ";clear:both;grid-area:1/1/2/2;display:table}.w-checkbox-input{float:left;margin:4px 0 0 -20px;line-height:normal}.w-checkbox-input--inputType-custom{border:1px solid #ccc;border-radius:2px;width:12px;height:12px}.w-checkbox-input--inputType-custom.w--redirected-checked{background-color:#3898ec;background-image:url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);background-position:50%;background-repeat:no-repeat;background-size:cover;border-color:#3898ec}.w-checkbox-input--inputType-custom.w--redirected-focus{box-shadow:0 0 3px 1px #3898ec}.w-form-formradioinput--inputType-custom{border:1px solid #ccc;border-radius:50%;width:12px;height:12px}.w-form-formradioinput--inputType-custom.w--redirected-focus{box-shadow:0 0 3px 1px #3898ec}.w-form-formradioinput--inputType-custom.w--redirected-checked{border-width:4px;border-color:#3898ec}.w-pagination-wrapper{flex-wrap:wrap;justify-content:center;display:flex}.w-pagination-previous,.w-pagination-next{color:#333;background-color:#fafafa;border:1px solid #ccc;border-radius:2px;margin-left:10px;margin-right:10px;padding:9px 20px;font-size:14px;display:block}body{background-color:var(--swatches--white);font-family:var(--global--font-family);color:var(--swatches--black);font-size:var(--global--font-size);letter-spacing:var(--global--letter-spacing);text-transform:none;line-height:1}h1{letter-spacing:-2.24px;margin-top:0;margin-bottom:0;font-size:3.5rem;font-weight:400;line-height:1.04}h2{letter-spacing:-1.6px;margin-top:0;margin-bottom:0;font-size:2.5rem;font-weight:400;line-height:1.1}h3{letter-spacing:0;margin-top:0;margin-bottom:0;font-size:8rem;font-weight:400;line-height:.9}h4{letter-spacing:-.96px;margin-top:0;margin-bottom:0;font-size:2rem;font-weight:400;line-height:1.1}h5{letter-spacing:-3.6px;margin-top:0;margin-bottom:0;font-size:4.5rem;font-weight:400;line-height:.94}h6{letter-spacing:-.48px;margin-top:0;margin-bottom:0;font-size:1.5rem;font-weight:400;line-height:1.24}p{letter-spacing:-.16px;margin-bottom:0;font-size:1rem;line-height:1.36}a{text-decoration:none}ul{margin:0;padding:0 0 0 1em}ol{margin:0;padding:0 0 0 1.2em}li{margin:0;padding:0}img{object-fit:cover;width:100%;max-width:100%}label{margin-bottom:0;font-weight:400}blockquote{padding:0em var(--empty-space--desktop-24px);font-size:var(--paragraph-large--font-size\\<deleted\\|variable-3c6a4d82-c86e-362d-5cff-dab94f2c7210\\>);line-height:var(--paragraph-large--line-height\\<deleted\\|variable-809db6be-cc52-77bb-aef4-68d9bf58d943\\>);margin-bottom:0}.container{padding-right:var(--horizontal-container-padding--desktop);padding-left:var(--horizontal-container-padding--desktop)}.global-styles{opacity:0;pointer-events:none;width:0;height:0;display:block;position:fixed;inset:0% auto auto 0%;overflow:hidden}.stylesheet-wrapper{width:100%;max-width:1440px;padding:var(--padding--96px)var(--padding--16px)var(--padding--56px)}.ss-t1{color:var(--utility-swatches--black-100\\<deleted\\|variable-ffc6158f-f395-e3bc-94c6-22ac49028046\\>);font-weight:400;line-height:5rem}.font-style-wrapper{grid-column-gap:1rem;grid-row-gap:1rem;border-bottom:1px solid #00000040;grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;width:100%;padding-top:1.75rem;padding-bottom:1.75rem;display:grid}.font-stylesheet{width:100%;margin-top:2rem}.style-guide-class-list{grid-column-gap:1rem;grid-row-gap:1rem;align-items:center;display:flex}.style-guide-class-name{background-color:var(--utility-swatches--black-90\\<deleted\\|variable-5a9ad8e5-49aa-b73a-4c6a-8d17e055689f\\>);color:var(--utility-swatches--white-95\\<deleted\\|variable-399aa7e5-3411-de86-4133-ed458bd3ca9b\\>);border-radius:.625rem;padding:.5rem .75rem;display:inline-block}.title1-1{letter-spacing:-2.24px;font-size:3.5rem;font-weight:400;line-height:1.04}.title2-1{letter-spacing:-1.6px;font-size:2.5rem;font-weight:400;line-height:1.1}.title3-1{letter-spacing:-7.68px;font-size:8rem;font-weight:400;line-height:.9}.title4-1{letter-spacing:-.96px;font-size:2rem;font-weight:400;line-height:1.1}.title5-1{letter-spacing:-3.6px;font-size:4.5rem;font-weight:400;line-height:.94}.title6-1{letter-spacing:-.48px;font-size:1.5rem;font-weight:400;line-height:1.24}.stylesheet{flex-flow:row;justify-content:center;align-items:center;display:flex}.body1-1{letter-spacing:-.16px;font-size:1rem;line-height:1.36}.body2-1{font-size:.875rem;line-height:1.36rem}.cta1{padding:var(--padding--16px)var(--padding--24px);background-color:var(--utility-swatches--black-100\\<deleted\\|variable-ffc6158f-f395-e3bc-94c6-22ac49028046\\>);border-radius:.625rem}.color-swatch{aspect-ratio:1;width:8rem;color:var(--utility-swatches--black-100\\<deleted\\|variable-ffc6158f-f395-e3bc-94c6-22ac49028046\\>);border:1px solid #00000040;border-radius:.625rem}.color-swatch.brand1{background-color:var(--utility-swatches--black-100\\<deleted\\|variable-ffc6158f-f395-e3bc-94c6-22ac49028046\\>)}.color-swatch.brand2{background-color:var(--utility-swatches--white-100\\<deleted\\|variable-81df7ecc-ef80-9b9b-26c4-8f7eca97a0c0\\>)}.class-tag-list-wrapper{grid-column-gap:.5rem;grid-row-gap:.5rem;flex-direction:column;display:flex}.class-tag-list{grid-column-gap:.5rem;grid-row-gap:.5rem;display:flex}.class-tag-list.child-1{border-left:1px dashed #00000080;padding-left:.75rem}.space-120{height:7.5rem}.figma-styles{opacity:0;pointer-events:none;width:0;height:0;position:fixed;inset:0% auto auto 0%;overflow:hidden}.global-embeds{width:0;height:0;overflow:hidden}.default-code-embed{opacity:0;width:0;height:0;margin-bottom:0;position:fixed;inset:auto 0% 0%;overflow:hidden}.mobile-landscape{opacity:0;pointer-events:none;width:0;height:0;margin-bottom:0;position:fixed;inset:0% auto auto 0%;overflow:hidden}.marker-io{opacity:0;pointer-events:none;width:0;height:0;position:fixed;inset:0% auto auto 0%;overflow:hidden}.experimental-stylesheet{width:100%}.hh-down-arrow-holder{z-index:1;position:absolute;inset:auto 0% 0% auto}.hh-slider-navigation-col{flex-direction:column;justify-content:space-between;align-items:stretch;display:flex}.slide-bg{width:100%;height:100%;transition:opacity .3s;position:absolute;inset:0%}.hh-slider-col{width:100%;height:100%;min-height:21.87rem;margin-left:-2.3rem;padding-left:2.375rem;position:relative;overflow:hidden}.div-block{display:flex}.sec-home-industries{padding-top:12.5rem;padding-bottom:9rem;overflow:hidden}.swiper-slide.hh-swiper-slide{flex:none;width:100%}.swiper-slide.industry-swiper-slide{flex:none;width:40%;height:auto}.swiper-slide.campus-swiper-slide{flex:none;width:55%}.swiper-slide.st-feature-swiper-slide{flex:none;width:25%;height:auto}.swiper-slide.bg-swiper-slide{height:auto}.swiper-wrapper{grid-template-rows:auto auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr}.swiper-wrapper.hh-swiper-wrapper{flex-flow:row;justify-content:flex-start;display:flex}.swiper-wrapper.industry-swiper-wrapper,.swiper-wrapper.campus-swiper-wrapper{display:flex}.swiper-wrapper.st-feature-swiper-wrapper{flex-flow:row;height:100%;display:flex}.swiper-wrapper.st-feature-swiper-wrapper.show{flex-flow:column}.swiper-wrapper.bg-swiper-wrappr{height:100%;display:flex}.home-hero-slider-row{grid-column-gap:16px;grid-row-gap:16px;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;height:100%;display:grid;position:relative}.swiper.industry-swiper{cursor:grabbing;margin-top:1.875rem;overflow:visible}.swiper.project-swiper{cursor:grabbing;margin-top:2.75rem;overflow:visible}.swiper.testimonial-swiper{cursor:grabbing;margin-top:4rem;overflow:visible}.swiper.company-swiper{cursor:grabbing;margin-top:2.75rem;overflow:visible}.swiper.st-feature-swiper{cursor:grabbing;width:100%;height:100%;position:relative;overflow:hidden}.swiper.bg-swiper{height:100%}.slide_progress-bar{height:100%;inset:0% auto auto 0%}.hh-slide-card{grid-row-gap:2rem;flex-direction:column;align-items:flex-start;max-width:45.125rem;display:flex}.hh-swiper-arrow{color:#fefefe;cursor:pointer;border:.6px solid #fefefe;border-radius:100%;justify-content:center;align-items:center;width:2.625rem;height:2.625rem;display:flex}.hh-slider-link{line-height:1.25;text-decoration:underline;transition:all .3s}.hh-slider-link:hover{opacity:.5}.hh-slider-navigation-no{color:#fefefe;letter-spacing:.06rem;text-transform:uppercase;height:100%;font-size:.75rem;line-height:1.33}.bg-slide-wrap{z-index:-1;width:100%;height:100%;position:absolute;inset:0%}.hh-down-arrow{z-index:1}.arrow-embed{justify-content:center;align-items:center;display:flex}.arrow-embed.prev-arrow{transform:rotate(180deg)}.text-color-a-gray{color:var(--swatches--a-grey)}.heading-style-h2{letter-spacing:-.02rem;font-size:2.375rem;font-weight:400;line-height:1.2}.sectioin-home-hero{width:100%;min-height:100svh;color:var(--swatches--white);align-items:flex-end;padding-top:12rem;padding-bottom:10.87rem;display:flex;position:sticky;top:0}.swiper-progress-bar{z-index:1;background-color:#fefefe66;align-self:stretch;width:1px;height:100%;display:flex;position:absolute;inset:0% auto 0% 0%}.hh-slider-arrow{grid-column-gap:.875rem;align-items:center;display:flex}.homne-hero-slider-wrap{z-index:1;border-top:1px solid #fefefe66;width:100%;padding-top:1.8rem;position:relative}.homepage-css{display:none}.hero-img{height:100%}.h_ind-content{margin-top:5.5rem}.h-ind-arrow{justify-content:flex-end;align-items:flex-start;margin-bottom:1.5rem;display:flex}.swiper-arrow{border:1px solid var(--swatches--a-grey);width:2.625rem;height:2.625rem;color:var(--swatches--a-grey);cursor:pointer;background-color:#0000000d;border-radius:100%;flex:none;justify-content:center;align-items:center;transition:all .3s;display:flex}.swiper-arrow:hover{background-color:var(--swatches--grey);color:var(--themes--light)}.swiper-icon{justify-content:center;align-items:center;width:1rem;display:flex}.swiper-arrow-wrap{grid-column-gap:.875rem;grid-row-gap:.875rem;display:flex}.sec_title{text-transform:uppercase;border-top:1px solid #b6b6b666;padding-top:.75rem}.sec_title.project-header{margin-bottom:2.75rem}.sec_title.testimonial-title{margin-bottom:4rem}.sec_title.industry{margin-top:1.5rem;margin-bottom:1.875rem}.title7-1{letter-spacing:.72px;font-size:.75rem;line-height:1.4}.title7-1.uppercase{text-transform:uppercase}.title7-1.uppercase.weight-400{font-weight:400}.h_ind-card{aspect-ratio:563/370;border-radius:.625rem;height:100%;display:flex;position:relative;overflow:hidden}.global-img{height:100%}.h_ind-img-wrap{border-radius:.625rem;width:100%;position:absolute;inset:0%;overflow:hidden}.h_ind-details{z-index:2;grid-column-gap:1rem;grid-row-gap:1rem;width:100%;height:100%;color:var(--swatches--white);background-color:#0000001a;justify-content:space-between;align-items:flex-end;padding:1.5rem 1.75rem;display:flex;position:relative}.h_ind-icon{flex:none;width:1.375rem;display:flex}.custom-css{display:none}.sec_home-company{background-color:var(--swatches--black);color:var(--swatches--white);padding-top:9rem;padding-bottom:6.875rem}.h-company-wrapper{flex-flow:column;display:flex}.h_company-grid{grid-column-gap:1.375rem;grid-row-gap:9rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;margin-top:4rem;display:grid}.button{grid-column-gap:1rem;grid-row-gap:1rem;border-bottom:1px solid #fefefe66;justify-content:space-between;padding-bottom:.625rem;transition:all .3s;display:flex;overflow:hidden}.button:where(.w-variant-edba5954-e907-942e-8384-f6185f57747c){border-bottom-color:#28282966}.button:where(.w-variant-a265ec15-6099-9474-cdb6-4bced896f6f6){border:1px solid var(--swatches--white);background-color:var(--swatches--white);height:2.5rem;color:var(--swatches--black);border-radius:3rem;justify-content:space-between;align-items:center;padding-top:.625rem;padding-left:2rem;padding-right:2rem}.button:where(.w-variant-ef1f1254-cfe9-d3f7-7cac-699b393e6d3d){border:1px solid var(--swatches--red);background-color:var(--swatches--red);color:var(--swatches--white);border-radius:1.5rem;padding:.5rem 2rem}.button:hover{opacity:.6}.button:hover:where(.w-variant-a265ec15-6099-9474-cdb6-4bced896f6f6){opacity:1;color:var(--swatches--white);background-color:#28282926}.button:hover:where(.w-variant-ef1f1254-cfe9-d3f7-7cac-699b393e6d3d){opacity:1;color:var(--swatches--red);background-color:#e61e2600}.btn-arrow-icon{flex:none;justify-content:center;align-items:center;width:1rem;transition:all .3s;display:flex}.h-compnay-card{grid-column-gap:1rem;grid-row-gap:1rem;aspect-ratio:326/408;background-color:#363637;flex-flow:column;justify-content:flex-end;align-items:flex-start;padding:2rem;display:flex;position:relative}.company-stats-holder{display:flex}.service-tabs-menu{grid-column-gap:.25rem;grid-row-gap:.25rem;background-color:var(--swatches--black);display:flex}.service_tab-link{background-color:var(--swatches--yellow);cursor:pointer;border-top-left-radius:.375rem;border-top-right-radius:.375rem;justify-content:flex-start;align-items:center;width:100%;padding:.625rem 1.25rem;transition:all .3s;overflow:hidden}.service_tab-link:hover,.service_tab-link.w--current,.service_tab-link.active{background-color:var(--swatches--white)}.service_tab-pane.active{display:block}.service_content{padding-top:9rem;padding-bottom:9rem}.service-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.service-list{border-bottom:1px solid #3c3b3d33}.service-item{border-top:1px solid #3c3b3d33;width:100%}.service-head{grid-column-gap:6.5rem;grid-row-gap:6.5rem;cursor:pointer;justify-content:space-between;align-items:flex-start;padding-top:1.25rem;padding-bottom:1.25rem;display:flex}.service-icon{flex:none;width:1rem;transition:all .3s;display:flex}.service-body-content{grid-column-gap:2.5rem;grid-row-gap:2.5rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;padding-top:1.25rem;padding-bottom:4rem;display:flex}.service-body{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid;overflow:hidden}.service-btn-wrap{min-width:50%;padding-bottom:.5rem}.sec_home-project{background-color:var(--swatches--light-grey);padding-top:6.5rem;padding-bottom:9rem;overflow:hidden}.h_project-card{grid-column-gap:2.5rem;grid-row-gap:2.5rem;width:100%;height:100%;display:flex;position:relative;overflow:hidden}.h-project-content{width:100%}.h_project-divider{background-color:var(--swatches--a-grey);opacity:.4;flex:none;width:1px}.h_project-details{grid-column-gap:.25rem;grid-row-gap:.25rem;flex-flow:column;margin-top:1.5rem;display:flex}.h_project-img-wrap{aspect-ratio:1;border-radius:.625rem;width:100%;overflow:hidden}.opacity-50{opacity:.5}.sec_home-testimonial{background-color:var(--swatches--black);color:var(--swatches--white);padding-top:6.5rem;padding-bottom:9rem;overflow:hidden}.testimonial-card{grid-column-gap:7.75rem;grid-row-gap:7.75rem;background-color:#363637cc;flex-flow:column;justify-content:space-between;height:100%;padding:2.5rem;display:flex;position:relative}.sec-faq{background-color:var(--swatches--yellow);padding-top:9rem;padding-bottom:9rem}.h_faq-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.h-faq-list{grid-column-gap:1.25rem;grid-row-gap:1.25rem;flex-flow:column;display:flex}.faq-head{cursor:pointer;border-top:1px solid #0000001a;justify-content:space-between;align-items:center;padding-top:.75rem;padding-bottom:.75rem;display:flex}.faq-icon-wrap{justify-content:center;align-items:center;width:.75rem;height:.75rem;display:flex}.faq-icon{width:100%;max-width:100%;transition:all .3s}.faq-body{overflow:hidden}.faq-body-content{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;padding-top:2.25rem;padding-bottom:.75rem;display:grid}.sec_cta{padding-top:9rem;padding-bottom:9rem}.sec_cta.industries-cta{padding-top:1rem}.cta-container{aspect-ratio:1380/448;border-radius:.625rem;flex-flow:row;margin-top:2.25rem;display:flex;position:relative;overflow:hidden}.cta-bg{z-index:1;object-fit:cover;width:100%;height:100%;position:absolute;inset:0%}.cta-layer{z-index:2;grid-column-gap:1rem;grid-row-gap:1rem;width:100%;color:var(--swatches--white);background-color:#0003;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;justify-content:flex-end;align-items:center;padding:1rem;display:grid;position:relative}.cta-content{grid-column-gap:2rem;grid-row-gap:2rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;display:flex}.cta-content.about-content{padding-right:2rem}.btn-arrow-wrap{width:1rem;display:flex;overflow:hidden}.testimonial-names{flex-flow:column;display:flex}.navbar{z-index:999;color:var(--swatches--white);background-color:#ddd0;padding-top:.625rem;padding-bottom:.625rem;position:fixed;inset:0% 0% auto}.navbar:where(.w-variant-c6e7f6d6-27dd-1d5f-e0eb-f02d1ad63252){background-color:var(--swatches--white);color:var(--swatches--black)}.nav-logo-svg{display:flex}.nav-logo{flex:none;width:7.1875rem}.nav-row{display:flex}.nav-mob-row{grid-column-gap:1rem;grid-row-gap:1rem;justify-content:space-between;align-items:center;display:none}.nav-mob-row.is-web{display:flex}.nav-navigation{width:100%}.nav-wrapper{grid-column-gap:3rem;grid-row-gap:3rem;justify-content:space-between;align-items:center;display:flex}.nav-menu-holder{grid-column-gap:1.5rem;grid-row-gap:1.5rem;justify-content:space-between;align-items:center;width:100%;max-width:66%;font-size:.875rem;line-height:1.36;display:flex}.nav-link{transition:color .3s}.nav-link:hover,.nav-link.w--current{color:var(--swatches--red)}.nav-btn{border:1px solid var(--swatches--red);background-color:var(--swatches--red);border-radius:1.5rem;justify-content:center;align-items:center;height:2.25rem;padding:.5rem 2rem;font-size:.875rem;line-height:1.36;transition:all .3s;display:flex}.nav-btn:hover{color:var(--swatches--red);background-color:#e61e2600}.nav-dd-toggle{grid-column-gap:.75rem;grid-row-gap:.75rem;width:100%;padding:0;display:flex}.nav-dd-icon{flex:none;justify-content:center;align-items:center;width:.35rem;transition:color .2s;display:flex;transform:rotate(90deg)}.nav-dd-navigation{pointer-events:none;background-color:#ddd0;justify-content:flex-start;align-items:flex-start;width:10rem;display:none;overflow:hidden}.nav-dd-navigation.w--open{background-color:#ddd0}.nav-dd-navigation.show{justify-content:flex-start;align-items:flex-start;display:flex}.nav-dd-list{grid-column-gap:.75rem;grid-row-gap:.75rem;pointer-events:auto;flex-flow:column;flex:none;justify-content:flex-start;align-items:flex-start;width:100%;padding-top:2.5rem;padding-bottom:1.25rem;display:flex}.nav-dd-bg{z-index:-1;background-color:var(--swatches--light-grey);height:0;position:fixed;inset:0% 0% auto}.divider{z-index:9;background-color:#fefefe66;height:1px;position:absolute;inset:auto 0% 0%}.divider:where(.w-variant-c6e7f6d6-27dd-1d5f-e0eb-f02d1ad63252){background-color:#0006}.footer{background-color:var(--swatches--light-grey);padding-top:4.5rem;padding-bottom:1.5rem;position:relative}.footer-grid{grid-column-gap:1rem;grid-row-gap:17.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid;position:relative}.footer-logo{width:7.25rem;display:flex}.foter-icon{width:100%;display:flex}.footer-desc-wrap{margin-top:2.5rem;margin-bottom:1.5rem}.subscribe-form-block{margin-bottom:3.25rem}.subscribe-form{grid-column-gap:.5rem;grid-row-gap:.5rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;display:flex}.subscribe-input-field{background-color:var(--swatches--white);height:2.5rem;color:var(--swatches--black);border:1px solid #e0e0e0;border-radius:.5rem;margin-bottom:0;padding:.5rem 1rem .5rem 1.25rem}.subscribe-input-field:focus,.subscribe-input-field:focus-visible,.subscribe-input-field[data-wf-focus-visible]{border-color:#e0e0e0}.subscribe-input-field::placeholder{color:#989796}.button-red{border:1px solid var(--swatches--red);background-color:var(--swatches--red);border-radius:2.5rem;padding:.65rem 2rem;font-size:.875rem;line-height:1.36;transition:all .3s}.button-red:hover{color:var(--swatches--red);background-color:#e61e2600}.subscribe-field-wrap{grid-column-gap:.5rem;grid-row-gap:.5rem;flex-flow:column;width:100%;display:flex;position:relative}.success-message{text-align:left;background-color:#ddd0;padding:0}.footer-menu{grid-column-gap:5rem;grid-row-gap:5rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;height:100%;display:flex}.footer-menu-holder{grid-column-gap:1.5rem;grid-row-gap:1.5rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;width:100%;display:flex}.footer-menu-holder.is-mob{display:none}.footer-menu-label{letter-spacing:.72px;text-transform:uppercase;font-size:.75rem;line-height:1.36}.footer-menu-label.link{transition:all .3s}.footer-menu-label.link:hover{opacity:.5}.footer-menu-links{grid-column-gap:.75rem;grid-row-gap:.75rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;display:flex}.footer-link{color:var(--swatches--grey);font-size:.875rem;line-height:1.36;transition:all .3s}.footer-link:hover{color:var(--swatches--black)}.footer-line{background-color:#0000001a;width:1px;height:100%;position:absolute;left:-1rem}.footer-social-wrap{grid-column-gap:.75rem;grid-row-gap:.75rem;display:flex}.social-icon{justify-content:center;align-items:center;width:100%;height:100%;display:flex}.f_social-link{width:1.5rem;color:var(--swatches--grey);transition:all .3s}.f_social-link:hover{color:var(--swatches--black)}.footer-logo-wrap{aspect-ratio:444/356;max-width:31%;position:absolute;inset:auto auto 0% 0%;overflow:hidden}.footer-text{color:var(--swatches--grey);font-size:.875rem;line-height:1.36}.menu-label-wraper{display:none}.nav-dd-close{letter-spacing:.72px;font-size:.75rem;line-height:1.4}.nav-dd-close.uppercase{text-transform:uppercase}.link-icon{flex:none;justify-content:center;align-items:center;width:.35rem;display:none}.na-link{color:var(--swatches--grey);font-size:.875rem;line-height:1.36;transition:all .3s}.na-link:hover{color:var(--swatches--black)}.aboutpage-css{display:none}.sec_hero{min-height:75vh;color:var(--swatches--white);flex-flow:column;justify-content:flex-end;align-items:stretch;padding-top:5rem;padding-bottom:5rem;display:flex;position:sticky;top:0}.bg-wrapper{pointer-events:none;position:absolute;inset:0%}.section-content{z-index:1;position:relative}.section-content.about-hero{justify-content:flex-start;align-items:flex-end;width:100%;height:100%;display:flex}.global-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;display:grid;position:relative}.sec_about{padding-top:12rem;padding-bottom:4.5rem}.sec_about-weare{padding-top:4.5rem;padding-bottom:6.25rem}.about-weare-header{grid-column-gap:1rem;grid-row-gap:1rem;border-top:1px solid #b6b6b666;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;padding-top:.75rem;display:grid}.sec_about-team{padding-top:2.75rem;padding-bottom:2.75rem;overflow:hidden}.sec_about-team.is-pm{padding-bottom:8.75rem}.team-cms-wrapper{margin-top:2rem}.team-cms-list{grid-column-gap:4rem;grid-row-gap:4.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr;grid-auto-columns:1fr;display:grid}.team-cms-item{position:relative}.team-card{cursor:pointer}.team-img-wrap{aspect-ratio:1;filter:grayscale();border-radius:.625rem;transition:filter .3s;overflow:hidden}.team-img-wrap:hover{filter:none}.team-details{grid-column-gap:.25rem;grid-row-gap:.25rem;flex-flow:column;margin-top:1.5rem;display:flex}.card-border{background-color:#b6b6b666;width:1px;position:absolute;inset:0% -2rem 0% auto}.sec_about-company{background-color:var(--swatches--light-grey);padding-top:6.5rem;padding-bottom:10.5rem;overflow:hidden}.timeline-card{grid-column-gap:2.5rem;grid-row-gap:2.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;display:grid}.timeline-img-wrap{aspect-ratio:1;border-radius:.5rem;width:100%;overflow:hidden}.timeline-content{grid-column-gap:2.5rem;grid-row-gap:2.5rem;border-right:1px solid #b6b6b666;flex-flow:column;width:100%;height:100%;padding-right:2.5rem;display:flex}.sec-about-feature{background-color:var(--swatches--yellow);padding-top:9rem;padding-bottom:9rem}.about-feature-list{grid-column-gap:4rem;grid-row-gap:4rem;flex-flow:column;display:flex}.about-feature-item{grid-column-gap:1rem;grid-row-gap:1rem;border-top:1px solid #28282966;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;padding-top:1rem;display:grid}.timeline-swiper-wrapper{justify-content:flex-end;align-items:flex-end;margin-bottom:1.5rem;display:flex}.sec_about-sustainability{padding-top:9rem;padding-bottom:4.5rem}.about-sustainability-header{margin-bottom:2rem}.asustainability-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.sustainability-video-wrap{aspect-ratio:793/440;border-radius:.625rem;overflow:hidden}.sustainability-video{z-index:1;object-fit:cover;width:100%;height:100%;position:relative}.sec_about-marquee{width:100%;padding-top:4.5rem;padding-bottom:10rem;overflow:hidden}.marquee-wrapper{width:100vw;margin-top:5rem;overflow:hidden}.marquee-slider,.marquee-list{display:flex}.marquee-logo-wrap{justify-content:center;align-items:center;width:7.18rem;margin-right:4rem;display:flex}.marquee-logo{filter:grayscale();mix-blend-mode:darken}.sec_about-work{background-color:var(--swatches--light-grey);padding-top:9rem;padding-bottom:9rem}.popup{z-index:9999;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);background-color:#28282999;flex-flow:column;justify-content:center;align-items:center;width:100vw;display:none;position:fixed;inset:0%;overflow:hidden}.popup.show{display:block}.popup-base{z-index:1;pointer-events:none;height:100%;padding-left:2rem;padding-right:2rem;position:relative}.popup-base.job-base{justify-content:center;align-items:center;display:flex}.popup-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;height:100%;display:grid}.popup-content{background-color:var(--swatches--white);flex-flow:column;width:100%;padding:1.5rem 2rem 5rem;display:flex;position:relative}.popup-close-wrapper{grid-column-gap:.375rem;grid-row-gap:.375rem;cursor:pointer;justify-content:flex-start;align-items:center;margin-left:auto;transition:all .3s;display:flex}.popup-close-wrapper:hover{opacity:.5}.popup-close-wrapper.job-close{position:absolute;inset:2.5rem 2.5rem auto auto}.close-icon{width:.75rem;display:flex}.p-team-img-wrap{aspect-ratio:1;border-radius:.625rem;margin-top:1.5rem;margin-bottom:1.5rem;overflow:hidden}.p_team-content{flex-flow:column;justify-content:flex-end;align-items:flex-start;display:flex}.p_team-details{grid-column-gap:.3rem;grid-row-gap:.3rem;flex-flow:column;display:flex}.p_team-desc{margin-top:4rem}.linkedin-link{opacity:.5;margin-top:2.5rem;text-decoration:underline;transition:all .3s}.linkedin-link:hover{opacity:1}.popup-scroll{background-color:var(--swatches--white);pointer-events:auto;width:calc(100% + 3.5rem);height:100vh;position:relative;overflow:auto;transform:translate(-1.5rem)}.bg-color-white{z-index:1;background-color:var(--swatches--white);position:relative}.sec_service{padding-top:2.75rem;padding-bottom:2.75rem}.sec_service.is-electrical{padding-top:4.5rem}.sec_service.is-bottom{padding-bottom:9rem}.service_cms-wrapper{margin-top:2rem}.service_cms-list{grid-column-gap:4rem;grid-row-gap:4rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid;overflow:hidden}.service_card{grid-column-gap:1.5rem;grid-row-gap:1.5rem;flex-flow:column;height:100%;display:flex;position:relative}.service_img-wrap{aspect-ratio:1;border-radius:.625rem;overflow:hidden}.servicepage-css{display:none}.sec_template-service{padding-top:12rem;padding-bottom:2.5rem;overflow:hidden}.sec_st-wedo{padding-top:2.5rem;padding-bottom:3.875rem}.st-wedo-grid{grid-column-gap:1rem;grid-row-gap:1rem;border-top:1px solid #b6b6b666;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.t-wedo-header{grid-column-gap:2.5rem;grid-row-gap:2.5rem;flex-flow:column;padding-top:.75rem;display:flex}.wedo-item{border-bottom:1px solid #b6b6b666;padding-top:.75rem;padding-bottom:.75rem}.wedo-item.is-first{padding-top:0}.wedo-btn-wrap{margin-top:2.5rem;display:flex}.sec_template-thumbnail{padding-top:3.875rem;padding-bottom:9rem}.template-thumbnail{aspect-ratio:1376/680;border-radius:.625rem;overflow:hidden}.sec_template-feature{background-color:#ebebeb;padding-top:9rem;padding-bottom:9rem}.st-feature-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;background-color:var(--swatches--bright-gray);grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;height:100%;display:grid}.st-feature-content{grid-column-gap:2.5rem;grid-row-gap:2.5rem;flex-flow:column;justify-content:space-between;width:100%;height:100%;padding-bottom:4.5rem;display:flex}.st-feature-img-wrap{aspect-ratio:792/520;border-radius:.625rem;overflow:hidden}.st-feature-img-wrap.is-title{display:none}.st-feature-card{grid-column-gap:2.5rem;grid-row-gap:2.5rem;background-color:var(--swatches--bright-gray);flex-flow:column;justify-content:space-between;height:100%;display:flex}.sec-template-related{padding-top:9rem;padding-bottom:9rem}.st-service-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr;grid-auto-columns:1fr;padding-top:.75rem;display:grid}.st-service-header{border-top:1px solid #b6b6b666;padding-top:.75rem}.sec_project{padding-top:7.5rem;padding-bottom:7.5rem}.project-header{grid-column-gap:1rem;grid-row-gap:1rem;border-top:1px solid #b6b6b666;grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;padding-top:.75rem;display:grid}.project-cms-wrapper{margin-top:2rem}.project-cms-list{grid-column-gap:4rem;grid-row-gap:5.875rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr;grid-auto-columns:1fr;display:grid;overflow:hidden}.project-card{height:100%;position:relative}.project-img-wrap{aspect-ratio:1;background-color:var(--swatches--bright-gray);border-radius:.625rem;overflow:hidden}.project-card-details{grid-column-gap:.25rem;grid-row-gap:.25rem;flex-flow:column;margin-top:1.5rem;display:flex}.project-pagination{grid-column-gap:1rem;grid-row-gap:1rem;justify-content:space-between;align-items:center;margin-top:6.5625rem}.projectpage-css{display:none}.pagination-button{grid-column-gap:.5rem;grid-row-gap:.5rem;border-color:var(--swatches--a-grey);color:var(--swatches--black);background-color:#fafafa00;border-radius:1.5rem;justify-content:center;align-items:center;margin-left:0;margin-right:0;padding:.5rem 2rem;transition:all .3s;display:flex}.pagination-button:hover{background-color:var(--swatches--black);color:var(--swatches--white)}.pagination-button-icon{flex:none;width:.75rem;display:flex}.pagination-button-icon.rotate{transform:rotate(180deg)}.page-count{border-radius:.25rem;flex:none;justify-content:center;align-items:center;width:2.25rem;height:2.25rem;display:flex;overflow:hidden}.page-count-holder{display:flex}.project-filer-block{margin-bottom:0}.project-filter-form{grid-column-gap:.75rem;grid-row-gap:.75rem;background-color:#ededed00;justify-content:flex-end;align-items:center;display:flex}.filter-dd{min-width:15.6rem;margin-left:0;margin-right:0}.filter-dd.is-blog{min-width:17.5rem}.filter-dd-toggle{grid-column-gap:1rem;grid-row-gap:1rem;border:1px solid var(--swatches--a-grey);border-radius:1.5rem;justify-content:space-between;align-items:center;padding:.5rem 1.5rem .45rem;transition:border-radius .3s;display:flex}.filter-dd-icon{flex:none;width:.75rem;display:flex}.filter-dd-navigation{background-color:#ddd0;top:2rem}.filter-dd-navigation.show{display:block}.ff-dd-list{border-style:none solid solid;border-width:1px;border-color:var(--swatches--a-grey);background-color:var(--swatches--white);border-bottom-right-radius:1.5rem;border-bottom-left-radius:1.5rem;flex-flow:column;padding:.5rem 1.5rem 1.5rem;display:flex}.filter-cms-list{grid-column-gap:.5rem;grid-row-gap:.5rem;flex-flow:column;display:flex}.filter-radio-field{cursor:pointer;justify-content:flex-start;align-items:center;margin-bottom:0;padding-left:0;padding-right:1rem;display:flex;position:relative}.filter-radio-button{z-index:1;border:1px #000;border-radius:0;width:100%;height:100%;margin-top:0;margin-left:0;position:absolute;inset:0%}.filter-radio-button.w--redirected-checked{box-shadow:none;background-color:#3898ec00;background-image:none;background-size:auto;border-style:none}.filter-radio-button.w--redirected-focus{box-shadow:none;border-style:none}.filter-radio-button.w--redirected-focus-visible{box-shadow:none}.filter-active-indicator{background-color:var(--swatches--black);opacity:0;border-radius:100%;flex:none;width:.75rem;height:.75rem;position:absolute;inset:.3rem 0% 0% auto}.no-found{grid-column-gap:1.5rem;grid-row-gap:1.5rem;aspect-ratio:16/8;text-align:center;border-radius:.75rem;flex-flow:column;justify-content:center;align-items:center;max-width:40rem;margin-left:auto;margin-right:auto;padding:2rem;display:flex}.search-icon{width:3rem}.sec_project-marquee{background-color:#eee;padding-top:7.5rem;padding-bottom:12.1rem}.project-filter{display:none}.project-overlayer{background-color:#0006;position:absolute;inset:0%}.sec-tp-details{padding-top:4.5rem;padding-bottom:9rem}.sec_template-project{min-height:75vh;color:var(--swatches--white);flex-flow:column;justify-content:flex-end;align-items:stretch;padding-top:5rem;padding-bottom:5rem;display:flex;position:sticky;top:0}.tp-details-grid{grid-column-gap:1rem;grid-row-gap:1rem;border-top:1px solid #b6b6b666;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;padding-top:.75rem;display:grid}.project-richtext h1,.project-richtext h2{margin-bottom:1rem}.project-richtext h3{margin-bottom:1rem;font-size:2.25rem}.project-richtext h5{letter-spacing:-1.2px;margin-bottom:1rem;font-size:1.75rem}.project-richtext h4,.project-richtext h6,.project-richtext p{margin-bottom:1rem}.tp-details-item{grid-column-gap:1rem;grid-row-gap:1rem;text-align:right;border-bottom:1px solid #b6b6b666;justify-content:space-between;align-items:center;padding-top:.625rem;padding-bottom:.625rem;display:flex}.tp-details-item.is-first{padding-top:0}.sec-tp-related{padding-top:9rem;padding-bottom:9rem}.project-link{z-index:1;position:absolute;inset:0%}.st-slider-arrow{z-index:9;position:absolute;inset:auto auto 0% 0%}.feature-service-titles{flex-flow:column;justify-content:flex-start;align-items:flex-start;display:flex}.feature-service-titles.is-mob{display:none}.feature-service-desc.is_people{grid-column-gap:1rem;grid-row-gap:1rem;flex-flow:column;display:flex}.st-slider{margin-top:2.5rem;position:relative}.feature-pagination{z-index:1;opacity:0;flex-flow:column;height:100%;display:flex;position:absolute;inset:0%}.swiper-pagination-bullet{width:100%!important;height:100%!important}.service-sticky{max-width:26.5rem}.wedo-richtext li{border-bottom:1px solid #b6b6b666;padding-top:.75rem;padding-bottom:.75rem;line-height:1.2;list-style-type:none}.wedo-richtext ol,.wedo-richtext ul{padding-left:0}.corner-svg{color:var(--swatches--black);display:flex;position:absolute;inset:-.01rem -.01rem auto auto}.hero-bg-overlay{z-index:2;background-color:#00000080;position:absolute;inset:0%}.sec_industry{padding-top:5.62rem;padding-bottom:9rem}.industry-cms-wrapper{margin-top:2rem}.industry-cms-list{grid-column-gap:1.5rem;grid-row-gap:4.5rem;grid-template-rows:auto auto;grid-template-columns:1fr 1fr 1fr;grid-auto-columns:1fr;display:grid}.industry-card{grid-column-gap:.75rem;grid-row-gap:.75rem;flex-flow:column;display:flex}.industry-img-wrap{aspect-ratio:442/275;border-radius:.625rem;overflow:hidden}.sec_template-industry{padding-top:12rem;padding-bottom:2.5rem;overflow:hidden}.sec_it-wedo{padding-top:2.5rem;padding-bottom:3.875rem}.sec_feature-post{padding-top:12.5rem;padding-bottom:4.125rem}.sec-blog{padding-top:4.125rem;padding-bottom:9rem}.fp-cms-wrapper{margin-top:2.5rem}.fp-cms-item{grid-template-rows:auto auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;position:relative}.fp-card{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid;position:relative}.fp-img-wrap{aspect-ratio:909/568;border-radius:.625rem;overflow:hidden}.fp-content{grid-column-gap:3rem;grid-row-gap:3rem;flex-flow:column;justify-content:space-between;height:100%;display:flex}.fp-header{grid-column-gap:.75rem;grid-row-gap:.75rem;flex-flow:column;display:flex}.fp-details{grid-column-gap:4rem;grid-row-gap:4rem;flex-flow:column;max-width:75%;display:flex}.blog-cms-wrapper{margin-top:2rem}.blog-cms-wrapper.is-mob{display:none}.blog-cms-list{grid-column-gap:1.5rem;grid-row-gap:4.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr;grid-auto-columns:1fr;display:grid;overflow:hidden}.blog-card{grid-column-gap:1.5rem;grid-row-gap:1.5rem;flex-flow:column;display:flex}.blog-img-wrapper{aspect-ratio:442/275;border-radius:.625rem;overflow:hidden}.blog-card-details{grid-column-gap:.25rem;grid-row-gap:.25rem;flex-flow:column;display:flex}.overlay-50{z-index:2;pointer-events:none;background-color:#00000080;position:absolute;inset:0%}.sec_blog-body{padding-top:12rem;padding-bottom:5.62rem}.bbody-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.blog-richtext h1,.blog-richtext h2{margin-top:2.5rem;margin-bottom:2.5rem}.blog-richtext h3{margin-top:2.5rem;margin-bottom:2.5rem;font-size:2.25rem}.blog-richtext h4{margin-top:2.5rem;margin-bottom:2.5rem}.blog-richtext h5{letter-spacing:-1.2px;margin-top:2.5rem;margin-bottom:2.5rem;font-size:1.75rem}.blog-richtext h6{margin-top:2.5rem;margin-bottom:2.5rem}.blog-richtext p,.blog-richtext blockquote{margin-top:1rem;margin-bottom:1rem}.blog-richtext li{margin-bottom:.4rem}.blog-richtext ul{padding-left:1.5em}.blog-richtext a{text-decoration:underline}.sec-relaeted-blog{padding-top:5.62rem;padding-bottom:9rem}.sec_management-system{padding-top:4.5rem;padding-bottom:4.5rem}.management-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;margin-top:2rem;display:grid}.sec_video{padding-top:4.5rem;padding-bottom:9rem}.video-wrapper{border-radius:.625rem;height:100%;margin-top:2rem;position:relative;overflow:hidden}.button-wrap-video{z-index:99;margin-top:2.5rem;position:relative}.play-btn-wrap{color:#fafafa;cursor:pointer;flex:none;justify-content:center;align-items:center;width:6rem;height:6rem;margin-bottom:2.5rem;display:flex}.video-thumbnail-img{height:100%}.play-icon{justify-content:center;align-items:center;height:2.375rem;display:flex}.title4-2{line-height:1.2}.title4-2.text-weight-bold.vodeo-title{pointer-events:none}.video-desc-wrap{pointer-events:none;width:100%;max-width:29.87rem;margin-top:2rem}.video-holder{width:100%;height:100%}.video{z-index:1;width:100%;height:100%;position:relative}.video-thumbnail-wrap{z-index:1;cursor:pointer;background-color:#0003;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;inset:0%}.video-content{z-index:1;height:100%;clip-path:inset(var(--videoinset)round 12px);margin-left:auto;margin-right:auto;position:relative}.video-details{z-index:3;color:#f6f3ee;text-align:center;flex-flow:column;justify-content:center;align-items:center;display:none;position:absolute;inset:0%}.global-button{color:#e5e0d9;text-align:center;background-color:#000;border:1px solid #141414;border-radius:2rem;padding:1rem 2.5rem;font-size:1rem;transition:all .3s}.global-button:hover{color:#141414;background-color:#0000}.global-button.white-outline-button{color:#fff;background-color:#14141400;border-color:#fff}.global-button.white-outline-button:hover{color:#141414;background-color:#fff}.play-button{-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);background-color:#f7f7f733;border-radius:100%;flex:none;justify-content:center;align-items:center;width:6.125rem;height:6.125rem;padding-left:.5rem;display:flex}.text-color-agrey{color:var(--swatches--a-grey)}.sec_development{background-color:var(--swatches--black);color:var(--swatches--white);padding-top:9rem;padding-bottom:9rem}.development-title{margin-bottom:2rem}.development-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.development-img-wrap{aspect-ratio:793/404;border-radius:.625rem;overflow:hidden}.sec_people-feature{background-color:var(--swatches--light-grey);padding-top:9rem;padding-bottom:9rem}.people-feature-grid{grid-column-gap:1rem;grid-row-gap:1rem;background-color:var(--swatches--light-grey);grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;height:100%;display:grid}.sec_people-job{padding-top:9rem;padding-bottom:9rem}.job-title{margin-top:9rem;margin-bottom:2rem}.job-cms-wrapper.is-mob{display:none}.job-cms-list{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.job_card{grid-column-gap:5.5rem;grid-row-gap:5.5rem;background-color:#eee;flex-flow:column;height:100%;min-height:30rem;padding:2.75rem 2.5rem;display:flex;position:relative}.job-icon{width:4rem;color:var(--swatches--white);display:flex;position:absolute;inset:0% 0% auto auto}.job-header{grid-column-gap:.25rem;grid-row-gap:.25rem;flex-flow:column;display:flex}.job-details{grid-column-gap:2.5rem;grid-row-gap:2.5rem;flex-flow:column;justify-content:space-between;align-items:flex-start;height:100%;display:flex}.job-pagination{justify-content:space-between;align-items:center;margin-top:5.5rem}.ourpeople-css{display:none}.people-feature-title{flex-flow:column;display:flex}.people-feature-title.is-mob{display:none}.sec_contact{background-color:var(--swatches--light-grey);padding-top:11.875rem;padding-bottom:8.75rem}.contact-title{margin-top:9rem;margin-bottom:2rem}.contact-grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.contact-details{grid-column-gap:.75rem;grid-row-gap:.75rem;flex-flow:column;display:flex;position:sticky;top:5rem}.contact-details-item{grid-column-gap:1rem;grid-row-gap:1rem;justify-content:space-between;align-items:center;display:flex}.contact-link{opacity:.5;text-decoration:underline;transition:opacity .3s}.contact-link:hover{opacity:1}.contact-form-block{margin-bottom:0}.contact-field-list{grid-column-gap:1.5rem;grid-row-gap:2rem;flex-flow:column;margin-bottom:3rem;display:flex}.contact-input-field{grid-column-gap:.45rem;grid-row-gap:.45rem;flex-flow:column;width:100%;display:flex;position:relative}.contact-field-item{grid-column-gap:.875rem;grid-row-gap:.875rem;display:flex}.contact-text-field{background-color:var(--swatches--white);height:2.875rem;color:var(--swatches--black);border:1px #000;border-radius:.5rem;margin-bottom:0;padding:.5rem 1.25rem;font-size:.9375rem;line-height:1}.contact-text-field::placeholder{color:var(--swatches--grey)}.contact-text-field.message{height:auto;min-height:7.5rem}.select-icon{width:.75rem;display:flex;position:absolute;inset:auto 1.25rem .9rem auto}.job-form-success{background-color:var(--swatches--yellow);border-radius:.625rem;padding:2rem}.sec_contact-team{padding-top:9rem;padding-bottom:9rem}.ct-cms-wrapper{margin-top:2rem}.ct-cms-list{grid-column-gap:4rem;grid-row-gap:5rem;grid-template-rows:auto auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid;overflow:hidden}.c_team-card{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid;position:relative}.c_team-img-wrap{aspect-ratio:1;filter:grayscale();background-color:#f0f0f0;border-radius:.625rem;transition:all .3s;overflow:hidden}.c_team-details{grid-column-gap:2.5rem;grid-row-gap:2.5rem;flex-flow:column;justify-content:space-between;display:flex}.c_team-header{grid-column-gap:.25rem;grid-row-gap:.25rem;flex-flow:column;display:flex}.c_team-contact{grid-column-gap:.125rem;grid-row-gap:.125rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;display:flex}.c_team-border{border-right:1px solid #b6b6b666;position:absolute;inset:0% -2rem 0% auto}.c_team-border-2{background-color:#b6b6b666;width:100vw;height:1px;position:absolute;inset:auto auto -2.5rem 0%}.sec_contact-branch{background-color:var(--swatches--black);color:var(--swatches--white);padding-top:9rem;padding-bottom:9rem}.branch-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;margin-top:2rem;display:grid}.map-img-wrap{aspect-ratio:909/565;border-radius:.625rem;overflow:hidden}.branch-list{grid-column-gap:2rem;grid-row-gap:2rem;flex-flow:column;display:flex;position:sticky;top:5rem}.branch-item{grid-column-gap:.5rem;grid-row-gap:.5rem;flex-flow:column;display:flex}.brach-address{transition:opacity .3s}.brach-address:hover{opacity:.5}.brach-contact{opacity:.5;transition:opacity .3s}.brach-contact:hover{opacity:1}.popup-close{cursor:pointer;position:absolute;inset:0%}.feature-title-space{flex-flow:column;display:flex}.feature-title-space.is-mob{display:none}.feature-titles-holder{z-index:3;grid-column-gap:1rem;grid-row-gap:1rem;pointer-events:none;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;height:100%;display:grid;position:absolute;inset:0% 0% auto}.servicetemplate-css{display:none}.nav-cms-industry{grid-column-gap:.75rem;grid-row-gap:.75rem;pointer-events:auto;flex-flow:column;flex:none;justify-content:flex-start;align-items:flex-start;width:100%;display:flex}.footer-link-wrap{display:flex}.cms-link{z-index:1;position:absolute;inset:0%}.blog-content{grid-column-gap:2.5rem;grid-row-gap:2.5rem;flex-flow:column;display:flex}.industrycss{display:none}.footer-cms-wrapper.is_top{margin-top:.75rem}.sec-feature-css{display:none}.richtext-cms h1,.richtext-cms h2,.richtext-cms h3,.richtext-cms h4,.richtext-cms h5,.richtext-cms h6{margin-top:1.5rem;margin-bottom:1.5rem}.richtext-cms p{margin-top:1rem;margin-bottom:1rem}.richtext-cms li{margin-bottom:.3rem}.richtext-cms blockquote{margin-top:1rem;margin-bottom:1rem}.location-wrapper{grid-column-gap:.1rem;grid-row-gap:.1rem;display:flex}.location-cms-list{grid-column-gap:.2rem;grid-row-gap:.2rem;flex-flow:wrap;display:flex}.ps-cms-list{grid-column-gap:.3rem;grid-row-gap:.3rem;flex-flow:wrap;justify-content:flex-end;align-items:center;display:flex}.ps-cms-item{grid-column-gap:.1rem;grid-row-gap:.1rem;display:flex}.popup-job{background-color:var(--swatches--light-grey);pointer-events:auto;border-radius:.625rem;width:auto;max-width:100%;max-height:90vh}.job-scroll{max-height:90vh;position:relative;overflow:auto}.job-content{grid-column-gap:4rem;grid-row-gap:4rem;flex-flow:column;width:56.875rem;max-width:65dvw;padding:2.5rem;display:flex;overflow:visible}.job-popup-css{display:none}.upload-field{grid-column-gap:1rem;grid-row-gap:1rem;background-color:var(--swatches--white);width:100%;height:2.5rem;color:var(--swatches--black);cursor:pointer;border:1px #000;border-radius:.5rem;justify-content:space-between;align-items:center;margin-bottom:0;padding:.5rem 1.25rem;font-size:1rem;line-height:1.36;display:flex;position:relative}.upload-field::placeholder{color:var(--swatches--grey)}.upload-field.message{height:auto;min-height:7.5rem}.upload-input{opacity:0;pointer-events:none;position:absolute;inset:0%}.upload-icon{justify-content:center;align-items:center;width:1rem;height:1.25rem;display:flex}.sec_terms-hero{padding-top:15rem;padding-bottom:10rem}.terms_grid{grid-column-gap:1rem;grid-row-gap:1rem;grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr;width:100%;display:grid}.terms-header{position:sticky;top:6rem}.global-richtext h1{margin-bottom:2rem}.global-richtext h2{margin-top:2rem;margin-bottom:2rem}.global-richtext h3{margin-top:2rem;margin-bottom:2rem;font-size:2.25rem}.global-richtext h4{margin-top:2rem;margin-bottom:2rem}.global-richtext h5{letter-spacing:-.5px;margin-top:2rem;margin-bottom:2rem;font-size:1.75rem}.global-richtext h6{margin-top:2rem;margin-bottom:2rem}.global-richtext p,.global-richtext blockquote{margin-top:1rem;margin-bottom:1rem}.global-richtext li{margin-top:.5rem;margin-bottom:.5rem}.service-accordian{border-bottom:1px solid #b6b6b666}.service-acc-head{grid-column-gap:1rem;grid-row-gap:1rem;cursor:pointer;justify-content:space-between;padding-top:.75rem;padding-bottom:.75rem;display:flex}.service_acc-body{overflow:hidden}.service_body-content{padding-bottom:1.25rem}.service-acc-icon{width:1rem;transition:all .3s;display:flex}.no-found-flex{grid-column-gap:1.5rem;grid-row-gap:1.5rem;flex-flow:column;justify-content:center;align-items:center;display:flex}.code-embed{width:100%;height:100%}.bg-img-wrap{height:100%}.bg-swiper-holder{z-index:-1;position:absolute;inset:0%}.our-people-video{width:100%;height:100%}.industry-richtext h1{margin-bottom:1.5rem}.industry-richtext h2{letter-spacing:0;margin-bottom:1rem;font-size:1rem;line-height:1.36}.industry-richtext h3{margin-bottom:1rem;font-size:1rem;line-height:1.36}.industry-richtext h4,.industry-richtext h5{letter-spacing:0;margin-bottom:1rem;font-size:1rem;line-height:1.36}.industry-richtext h6{margin-bottom:1rem;font-size:1rem;line-height:1.36}.industry-richtext p,.industry-richtext blockquote{margin-bottom:1rem}.industry-richtext li{margin-bottom:.5rem}.industry-richtext ul,.industry-richtext ol{margin-bottom:1rem;padding-left:1.5em}.stats-no{letter-spacing:-7.68px;font-size:7rem;font-weight:400;line-height:.9}.hero-video{z-index:1;height:100%;position:relative}.people-img{object-position:50% 50%;height:100%}.people-img.is_5{object-position:50% 10%}.people-img.is_1{object-position:50% 60%}.fs-numbercount_hero{background-image:none;background-position:50%;background-size:auto;justify-content:center;align-items:center;width:100%;height:100%;padding:2rem;display:flex;position:relative;overflow:clip}.fs-numbercount_content{grid-column-gap:1rem;grid-row-gap:1rem;color:#fff;flex-flow:column;grid-template-rows:auto;grid-template-columns:1fr;grid-auto-columns:1fr;justify-content:center;place-items:center start;max-width:30rem;display:flex}.fs-numbercount_heading{flex:none;font-size:2rem;font-weight:600;line-height:1.2}.fs-numbercount_row{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-auto-columns:1fr;justify-content:flex-start;align-items:center;display:flex}.fs-numbercount_character,.fs-numbercount_instance{font-size:6rem;font-weight:500;line-height:1}.file-upload-button{grid-column-gap:.675rem;grid-row-gap:.675rem;background-color:var(--swatches--white);width:100%;min-height:10rem;color:var(--swatches--grey);text-align:center;cursor:pointer;border:0 solid #000;border-radius:.5rem;flex-flow:column;justify-content:center;align-items:center;padding:2rem;display:flex}.body2-1-2{letter-spacing:.02rem;font-size:1rem;line-height:1.125rem}.max-size-text{margin-top:-.5rem;padding:0;line-height:100%}.form-error{background-color:var(--swatches--light-silver);color:var(--swatches--black);text-align:center;border-radius:.625rem;margin-top:2rem;padding:1rem}.file-upload{margin-bottom:0}.file-upload-inner-wrapper{width:100%}.file-upload-success{grid-column-gap:.675rem;grid-row-gap:.675rem;background-color:var(--swatches--white);width:100%;min-height:auto;color:var(--swatches--grey);text-align:center;cursor:pointer;border:0 solid #000;border-radius:.5rem;flex-flow:row;justify-content:space-between;align-items:center;padding:1.25rem;display:flex}.form-error-text{color:var(--swatches--black);font-size:.875rem;line-height:1.36rem}.file-upload-error{background-color:var(--swatches--light-silver);color:var(--swatches--black);text-align:center;border-radius:.625rem;margin-top:1rem;padding:1rem}.form-success-text{color:var(--swatches--black);margin-top:1rem;font-size:.875rem;line-height:1.36rem}.location-dd{min-width:14.375rem}.location-dd-toggle{width:100%;color:var(--swatches--grey);letter-spacing:-.15px;background-color:#f7f7f7;border-radius:.5rem;justify-content:space-between;align-items:center;padding:.625rem 1.25rem;font-size:.9375rem;line-height:1.36;display:flex}.location-icon{width:1rem;height:1rem;color:var(--swatches--grey);justify-content:center;align-items:center;display:flex}.location-dd-navigation{background-color:#ddd0;padding-top:.5rem}.location-dd-navigation.w--open{background-color:#ddd0}.location-dd-list{grid-column-gap:.75rem;grid-row-gap:.75rem;background-color:var(--swatches--white);border-radius:.5rem;flex-flow:column;justify-content:flex-start;align-items:flex-start;padding:.625rem 1.25rem 1rem;display:flex}.location-form-block{margin-bottom:0}.location-select{margin-bottom:0;display:none}.locations{transition:all .3s}.locations:hover{opacity:.5}.color-gray{color:var(--swatches--grey)}.section-not-found{color:var(--themes--light);background-image:linear-gradient(#000000b3,#000000b3),url(https://cdn.prod.website-files.com/686294a0804e317b92ff7687/6892f6caf3efc6469f3d32dd_hero-image.avif);background-position:0 0,50%;background-repeat:repeat,no-repeat;background-size:auto,cover}.not-found-wrapper{grid-column-gap:2rem;grid-row-gap:2rem;text-align:center;flex-flow:column;justify-content:center;align-items:center;max-width:40rem;height:100dvh;margin-left:auto;margin-right:auto;padding-top:4rem;padding-bottom:4rem;display:flex}.underline{text-decoration:underline}@media screen and (max-width:991px){blockquote{font-size:1.4rem}.hh-slider-col{margin-left:0}.sectioin-home-hero{position:relative}.h_ind-card{aspect-ratio:auto;min-height:23.1rem}.h-company-wrapper{padding-bottom:6.5rem}.h_company-grid{grid-row-gap:1rem;grid-template-columns:1fr 1fr}.grid_item{order:-1}.service_tab-link{width:auto}.service-grid{grid-column-gap:3rem;grid-row-gap:3rem;grid-template-columns:1fr}.service-head{grid-column-gap:1.25rem;grid-row-gap:1.25rem}.testimonial-card{aspect-ratio:auto}.h_faq-grid{grid-column-gap:3rem;grid-row-gap:3rem;grid-template-columns:1fr}.faq-body-content{grid-template-columns:1fr}.cta-container{aspect-ratio:1380/800}.cta-layer{grid-template-columns:1fr}.nav-mob-row{width:100%;display:flex}.nav-mob-row.is-web{z-index:999;padding:.625rem var(--horizontal-container-padding--desktop);background-color:var(--swatches--white);border-bottom:1px solid #28282966;position:fixed;inset:0% 0% auto}.nav-navigation{z-index:999;background-color:var(--swatches--light-grey);width:100vw;height:100dvh;color:var(--swatches--black);position:fixed;inset:0%}.nav-wrapper{width:100%;height:100%;padding:10rem var(--horizontal-container-padding--desktop)3.5rem;grid-column-gap:0rem;grid-row-gap:0rem;flex-flow:column;justify-content:space-between;align-items:flex-start;overflow:auto}.nav-menu-holder{flex-flow:column;justify-content:flex-start;align-items:stretch;max-width:100%;height:100%}.nav-link{justify-content:space-between;align-items:center;font-size:1.5rem;display:flex}.nav-dd-menu{flex-flow:column;width:100%;display:flex}.nav-dd{width:100%;margin-left:0;margin-right:0}.nav-dd-toggle{justify-content:space-between;align-items:center;font-size:1.5rem}.nav-dd-icon{width:1rem;height:1rem;transform:none}.nav-dd-navigation{background-color:var(--swatches--light-grey);height:100dvh;display:none;position:fixed;inset:0%}.nav-dd-navigation.w--open{z-index:9;background-color:var(--swatches--light-grey);display:flex}.nav-dd-list{height:100%;padding:10rem var(--horizontal-container-padding--desktop)3.5rem;align-items:stretch;overflow:auto}.nav-dd-bg{display:none}.footer{padding-bottom:2.5rem}.footer-grid{grid-row-gap:1.75rem;grid-template-columns:1fr 1fr}.footer-wrapper{padding-bottom:2.5rem}.footer-menu{grid-column-gap:1.75rem;grid-row-gap:1.75rem;align-items:stretch}.footer-menu-holder{border-top:1px solid #0000001a;padding-top:1rem}.footer-menu-holder.is-web{display:none}.footer-menu-holder.is-mob{padding-bottom:2.5rem}.footer-menu-links{column-count:2;column-rule-style:none;column-gap:2rem;width:100%;display:block}.footer-menu-links.is-legal{grid-column-gap:0rem;grid-row-gap:0rem;flex-flow:column;display:flex}.footer-link{justify-content:space-between;margin-bottom:.75rem;display:flex}.footer-line,.footer-logo-wrap{display:none}.humburger-menu{padding:0;font-size:.875rem;line-height:1.36}.humburger-menu.w--open{color:var(--swatches--black);background-color:#c8c8c800}.menu-label-wraper{grid-column-gap:.5rem;grid-row-gap:.5rem;border-top:1px solid #b6b6b666;width:100%;padding-top:.75rem;padding-bottom:3.75rem;display:flex}.nav-btn-wrap{margin-top:auto;padding-top:2rem}.nav-dd-close{opacity:.5;text-transform:uppercase;cursor:pointer}.link-icon{width:1rem;height:1rem;display:flex}.na-link{justify-content:space-between;display:flex}.sec_hero{position:relative}.global-grid{grid-template-columns:1fr}.team-cms-list{grid-column-gap:2rem;grid-template-columns:1fr 1fr 1fr}.card-border{right:-1rem}.popup-scroll{height:100dvh}.service_cms-list{grid-column-gap:2rem;grid-row-gap:2rem;grid-template-columns:1fr 1fr 1fr}.st-wedo-grid{grid-column-gap:5.5rem;grid-row-gap:5.5rem;grid-template-columns:1fr}.wedo-list{border-top:1px solid #b6b6b666}.st-feature-grid{flex-flow:column;grid-template-columns:1fr;display:flex}.st-feature-content{grid-column-gap:5.5rem;grid-row-gap:5.5rem;height:auto;padding-bottom:0}.project-cms-list{grid-column-gap:2rem;grid-row-gap:4rem;grid-template-columns:1fr 1fr 1fr}.project-cms-list.is-template{grid-template-columns:1fr 1fr}.project-filter{display:none}.sec_template-project{position:relative}.tp-details-grid{grid-column-gap:5.5rem;grid-row-gap:5.5rem;grid-template-columns:1fr}.st-slider-arrow{margin-top:2.5rem;position:static}.feature-service-titles{max-width:100%;inset:auto auto 25% 0%}.feature-service-titles.is-mob{display:block;position:static}.service-sticky{max-width:none;position:static}.industry-cms-list{grid-template-columns:1fr 1fr}.fp-card{grid-template-columns:1fr}.fp-details{max-width:100%}.blog-cms-list,.blog-cms-list.is-template{grid-template-columns:1fr 1fr}.blog-button-wrap{max-width:50%}.bbody-grid{grid-column-gap:2.5rem;grid-row-gap:2.5rem;grid-template-columns:1fr}.video-content{object-fit:cover;width:100%}.development-grid{grid-column-gap:2.5rem;grid-row-gap:2.5rem;grid-template-columns:1fr}.people-feature-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;flex-flow:column;grid-template-columns:1fr;display:flex}.job-cms-list{grid-template-columns:1fr 1fr}.job_card{min-height:auto}.people-feature-title{max-width:100%;inset:auto auto 25% 0%}.people-feature-title.is-mob{display:block;position:static}.contact-grid{grid-column-gap:8.75rem;grid-row-gap:8.75rem;grid-template-columns:1fr}.ct-cms-list{grid-column-gap:2rem}.c_team-card{grid-column-gap:.75rem;grid-row-gap:.75rem;height:100%;display:flex}.c_team-img-wrap{flex:none;width:36%}.c_team-details{width:60%}.c_team-border{right:-1rem}.c_team-border-2{width:50vw}.branch-grid{grid-template-columns:1fr}.feature-title-space{max-width:100%;inset:auto auto 25% 0%}.feature-title-space.is-mob{display:block;position:static}.feature-titles-holder{flex-flow:column;grid-template-columns:1fr;display:flex}.footer-cms-wrapper{width:100%}.popup-job,.job-scroll{max-height:90dvh}.job-content{width:50rem;max-width:95dvw}.terms_grid{grid-column-gap:5rem;grid-row-gap:5rem;grid-template-columns:1fr}.stats-no{font-size:5rem}.footer-links-holder,.location-dd,.location-form-block{width:100%}}@media screen and (max-width:767px){.title1-1{letter-spacing:-1.2px;font-size:2.5rem}.title2-1{letter-spacing:-.96px;font-size:2rem}.title3-1{letter-spacing:-6.72px;font-size:7rem}.title4-1{letter-spacing:-.48px;font-size:1.5rem}.title5-1{letter-spacing:-2.24px;font-size:3.5rem}.title6-1{font-size:1.25rem}.hh-down-arrow-holder{display:none}.hh-slider-navigation-col{flex-direction:row;order:1;justify-content:space-between;align-items:center;width:100%;min-height:auto}.hh-slider-col{width:calc(100vw - 2.5rem);min-height:auto;padding-top:3rem;padding-bottom:6.5rem;padding-left:0;position:static}.sec-home-industries{padding-top:5.5rem;padding-bottom:5.5rem}.home-hero-slider-row{flex-direction:column;grid-template-columns:1fr;padding-top:1.75rem}.swiper.industry-swiper{margin-top:2rem}.hh-down-arrow{display:none}.heading-style-h2.mh-3{font-size:1.625rem}.sectioin-home-hero{padding-top:9rem;padding-bottom:5rem}.swiper-progress-bar{width:100%;height:1px;display:flex}.swiper-progress-bar.active{inset:0% 0% auto}.homne-hero-slider-wrap{border-top-style:none;border-top-color:#fefefe99}.h_ind-content{margin-top:4rem}.h_ind-card{aspect-ratio:321/370;min-height:auto}.h_ind-details{flex-flow:column;justify-content:space-between;align-items:flex-start}.h_ind-icon{order:-1}.sec_home-company{padding-top:5.5rem}.h_company-grid{grid-template-columns:1fr}.h-compnay-card{aspect-ratio:auto;min-height:18.75rem}.sec_home-service{overflow:hidden}.service-tabs-menu{overflow:auto}.service_tab-link{flex:none}.service_content{padding-top:5.5rem;padding-bottom:5.5rem}.service-body{grid-template-columns:1fr}.sec_home-project{padding-top:5.5rem;padding-bottom:5.5rem}.h_project-card{grid-column-gap:1rem;grid-row-gap:1rem}.sec_home-testimonial{padding-top:5.5rem;padding-bottom:5.5rem}.testimonial-card{grid-column-gap:7rem;grid-row-gap:7rem;padding:1.5rem}.sec-faq,.sec_cta{padding-top:5.5rem;padding-bottom:5.5rem}.cta-container{aspect-ratio:360/580}.cta-bg.people-img{object-position:20% 50%}.cta-layer.is-pople{place-items:end stretch}.testimonial-names{padding-right:1rem}.sec_hero{padding-top:25rem;padding-bottom:2.5rem}.sec_about{padding-top:5.5rem;padding-bottom:2.75rem}.sec_about-weare{padding-top:2.75rem;padding-bottom:11.75rem}.about-weare-header{grid-column-gap:3rem;grid-row-gap:3rem;grid-template-columns:1fr}.sec_about-team.is-pm{padding-bottom:5.5rem}.team-cms-wrapper{overflow:hidden}.team-cms-list{grid-template-columns:1fr 1fr}.sec_about-company{padding-top:4.5rem;padding-bottom:5.5rem}.timeline-card{grid-column-gap:1.5rem;grid-row-gap:1.5rem;border-right:1px solid #b6b6b666;grid-template-columns:1fr;padding-right:1rem}.timeline-content{border-right-style:none}.sec-about-feature{padding-top:5.5rem;padding-bottom:5.5rem}.about-feature-item{grid-column-gap:2.5rem;grid-row-gap:2.5rem;grid-template-columns:1fr;padding-top:.75rem}.sec_about-sustainability{padding-top:5.5rem;padding-bottom:2.75rem}.asustainability-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-columns:1fr}.sustainability-video-wrap{aspect-ratio:360/440}.sec_about-marquee{padding-top:2.75rem;padding-bottom:7.75rem}.sec_about-work{padding-top:5.5rem;padding-bottom:5.5rem}.popup-base{padding-left:0;padding-right:0}.popup-base.job-base{padding-left:1rem;padding-right:1rem}.popup-grid{grid-template-columns:1fr}.popup-scroll{width:100%;transform:none}.sec_service{padding-top:2.75rem;padding-bottom:2.75rem}.sec_service.is-electrical{padding-top:2.75rem}.sec_service.is-bottom{padding-bottom:5.5rem}.service_cms-list{grid-template-columns:1fr 1fr}.sec_template-service{padding-bottom:2.75rem}.sec_st-wedo{padding-top:2.75rem;padding-bottom:2.75rem}.st-wedo-grid{grid-template-columns:1fr}.wedo-item.is-first{border-top:1px solid #b6b6b666;border-bottom-color:#b6b6b666;padding-top:.75rem}.sec_template-thumbnail{padding-top:2.75rem;padding-bottom:5.5rem}.template-thumbnail{aspect-ratio:362/560}.sec_template-feature{padding-top:5.5rem;padding-bottom:5.5rem}.st-feature-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-columns:1fr}.st-feature-img-wrap{aspect-ratio:1}.st-feature-card{grid-column-gap:5.5rem;grid-row-gap:5.5rem}.sec-template-related{padding-top:5.5rem;padding-bottom:5.5rem}.sec_project{padding-top:2.75rem;padding-bottom:5.5rem}.project-header{grid-column-gap:.75rem;grid-row-gap:.75rem;grid-template-columns:1fr}.project-cms-list{grid-row-gap:2rem;grid-template-columns:1fr 1fr}.project-pagination{flex-flow:row;margin-top:4rem}.pagination-button{padding-left:1rem;padding-right:1rem}.project-filter-form{flex-flow:column;align-items:stretch}.search-icon{width:1.5rem}.sec_project-marquee{padding-top:5.5rem;padding-bottom:7.5rem}.sec-tp-details{padding-top:2.75rem;padding-bottom:5.5rem}.sec_template-project{padding-top:25rem;padding-bottom:2.5rem}.sec-tp-related{padding-top:5.5rem;padding-bottom:5.5rem}.sec_industry{padding-top:2.75rem;padding-bottom:5.5rem}.industry-cms-list{grid-row-gap:1.5rem;grid-template-columns:1fr}.sec_template-industry{padding-bottom:2.75rem}.sec_it-wedo{padding-top:2.75rem;padding-bottom:2.75rem}.sec_feature-post{padding-top:5.5rem;padding-bottom:5rem}.sec-blog{padding-top:5rem;padding-bottom:5.5rem}.fp-card,.fp-content{grid-column-gap:1.5rem;grid-row-gap:1.5rem}.blog-cms-wrapper.is-web{display:none}.blog-cms-wrapper.is-mob{display:block}.blog-cms-list{grid-row-gap:1.5rem;grid-template-columns:1fr}.blog-card{grid-column-gap:.75rem;grid-row-gap:.75rem}.blog-img-wrapper{aspect-ratio:360/224}.blog-button-wrap{max-width:100%}.blog-date{display:none}.sec_blog-body{padding-top:5.5rem;padding-bottom:2.75rem}.sec-relaeted-blog{padding-top:2.75rem;padding-bottom:5.5rem}.sec_management-system{padding-top:2.75rem;padding-bottom:2.75rem}.management-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-columns:1fr}.sec_video{padding-top:2.75rem;padding-bottom:7.5rem}.button-wrap-video{margin-top:1rem}.play-btn-wrap{width:4rem;height:4rem;margin-bottom:1rem}.title4-2{font-size:2.6rem}.title4-2.text-weight-bold.vodeo-title{font-size:2rem}.video-desc-wrap{margin-top:1rem}.sec_development{padding-top:5.5rem;padding-bottom:5.5rem}.development-img-wrap{aspect-ratio:360/200}.sec_people-feature{padding-top:5.5rem;padding-bottom:5.5rem}.people-feature-grid{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-columns:1fr}.sec_people-job{padding-top:5.5rem;padding-bottom:5.5rem}.job-title{margin-top:5.5rem}.job-cms-wrapper.is-web{display:none}.job-cms-wrapper.is-mob{display:block}.job-cms-list{grid-template-columns:1fr}.job_card{grid-column-gap:3.5rem;grid-row-gap:3.5rem;padding:2rem}.job-header{padding-right:1rem}.job-details{grid-column-gap:2rem;grid-row-gap:2rem}.job-pagination{margin-top:4rem}.sec_contact{padding-top:5.5rem;padding-bottom:5.5rem}.contact-title{margin-top:5.5rem}.contact-field-item{grid-column-gap:1.5rem;grid-row-gap:1.5rem;flex-flow:column}.sec_contact-team{padding-top:5.5rem}.ct-cms-list{grid-column-gap:3rem;grid-row-gap:3rem;grid-template-columns:1fr}.c_team-card{grid-column-gap:1rem;grid-row-gap:1rem}.c_team-img-wrap{width:8.5rem}.c_team-details{grid-column-gap:2rem;grid-row-gap:2rem;width:auto}.c_team-border-2{width:100%;bottom:-1.5rem}.sec_contact-branch{padding-top:5.5rem;padding-bottom:5.5rem}.map-img-wrap{aspect-ratio:1}.feature-titles-holder{grid-column-gap:1.5rem;grid-row-gap:1.5rem;grid-template-columns:1fr}.popup-job{border-radius:1rem}.job-content{padding-bottom:3rem;padding-left:1.25rem;padding-right:1.25rem}.nav-cms-item,.collection-list-wrapper{width:100%}.stats-no{letter-spacing:-6.72px}.fs-numbercount_character,.fs-numbercount_instance{font-size:3rem}}@media screen and (max-width:479px){.page-wrapper{display:block}.font-style-wrapper{grid-template-columns:1fr}.body1-1{font-size:.9375rem}.space-120{height:6rem}.popup-close-wrapper.job-close{top:1.5rem;right:1.5rem}.close-icon{width:.6875rem}.title4-2{font-size:1rem}.contact-field-list{grid-column-gap:1.25rem;grid-row-gap:1.25rem;margin-bottom:2.5rem}.contact-field-item{grid-column-gap:1.25rem;grid-row-gap:1.25rem}.contact-text-field{height:3rem;font-size:1rem}.job-content{grid-column-gap:2.75rem;grid-row-gap:2.75rem;width:100%;max-width:100%;padding-top:4.75rem;padding-bottom:1.75rem}.file-upload-button{min-height:7.5rem;padding:1.5rem}.max-size-text{font-size:.875rem}.file-upload{flex-flow:column;display:flex}.file-upload-success{min-height:auto;padding:1rem 1.5rem}}#w-node-_2bfa57bc-49b7-1038-5a47-72be80d5dcf0-92ff7679{grid-area:span 1/span 2/span 1/span 2}#w-node-_39c28c84-2f2d-8302-f04d-b907a72ac8aa-92ff7679{grid-area:span 2/span 10/span 2/span 10}#w-node-_71b5a07b-3222-2558-7b81-797eded2df59-92ff7679{grid-area:span 1/span 2/span 1/span 2;align-self:end}#w-node-_430bcb96-483e-8203-a385-c4e5b276cec6-92ff7679{grid-area:1/9/2/13}#w-node-_615311c0-85bf-a66f-0b27-bbf5a4c5cbc5-92ff7679{grid-area:2/1/3/4}#w-node-baffd7e0-9528-87eb-fec4-a3f1a93a5159-92ff7679{grid-area:2/4/3/7}#w-node-_77d2d239-04ed-3bd3-79c5-727daa2488a6-92ff7679{grid-area:2/7/3/10}#w-node-afa749fa-80ee-4bb6-fdf8-e4a923f2b4f7-92ff7679{grid-area:2/10/3/13}#w-node-c08fd07c-2ff4-d7ac-c3c4-ac100d692672-92ff7679{grid-area:span 1/span 5/span 1/span 5}#w-node-f38b52e9-27e4-23b5-d9d0-86c3173c8d64-92ff7679{grid-area:span 1/span 7/span 1/span 7}#w-node-a6615125-14ba-3da7-5b83-9fb0b84597ab-92ff7679{grid-area:span 1/span 5/span 1/span 5}#w-node-a6615125-14ba-3da7-5b83-9fb0b84597ae-92ff7679{grid-area:span 1/span 7/span 1/span 7}#w-node-_176c5120-2404-792a-712a-0509e1959bf5-92ff7679{grid-area:span 1/span 5/span 1/span 5}#w-node-_176c5120-2404-792a-712a-0509e1959bf8-92ff7679{grid-area:span 1/span 7/span 1/span 7}#w-node-a96b834b-5f20-55fd-8104-c0b6cedb2959-92ff7679{grid-area:span 1/span 5/span 1/span 5}#w-node-a96b834b-5f20-55fd-8104-c0b6cedb295c-92ff7679{grid-area:span 1/span 7/span 1/span 7}#w-node-_79dd1ec2-3e48-dcbb-f991-26ac993a3abb-92ff7679{grid-area:span 1/span 5/span 1/span 5}#w-node-_79dd1ec2-3e48-dcbb-f991-26ac993a3abe-92ff7679{grid-area:span 1/span 7/span 1/span 7}#w-node-febf3698-d141-19be-c3cc-45d173b3e456-92ff7679{grid-area:span 1/span 3/span 1/span 3}#w-node-febf3698-d141-19be-c3cc-45d173b3e459-92ff7679{grid-area:span 1/span 9/span 1/span 9}#w-node-c4e778f2-bfd4-688d-0242-14e74ea18713-4ea1870e{grid-area:span 1/span 3/span 1/span 3}#w-node-c4e778f2-bfd4-688d-0242-14e74ea1872a-4ea1870e{grid-area:1/8/3/10}#w-node-c4e778f2-bfd4-688d-0242-14e74ea1872b-4ea1870e{grid-area:1/11/3/12}#w-node-c4e778f2-bfd4-688d-0242-14e74ea1872c-4ea1870e{grid-area:1/8/2/11}#w-node-c4e778f2-bfd4-688d-0242-14e74ea1874a-4ea1870e{grid-area:1/11/2/13}#w-node-c4e778f2-bfd4-688d-0242-14e74ea18770-4ea1870e{grid-area:2/8/3/11}#w-node-c4e778f2-bfd4-688d-0242-14e74ea18774-4ea1870e{grid-area:2/11/3/13}#w-node-f75ae75c-ff66-c244-4e95-dfa40c1af76f-0c1af76a{grid-area:1/7/2/12}#w-node-_5c4dff72-50ef-a768-eb4a-37169018d567-b509a27e,#w-node-b6993cbd-bc8c-14db-aa95-c6052cff274f-2cff2749{grid-area:span 1/span 6/span 1/span 6}#w-node-_4717f5e4-d05b-408a-bc59-a46c7464d082-7464d07f{grid-area:span 1/span 5/span 1/span 5}#w-node-_4717f5e4-d05b-408a-bc59-a46c7464d085-7464d07f{grid-area:span 1/span 7/span 1/span 7}#w-node-_289965be-5d45-c902-bef1-ca151848df31-ec512397{grid-area:span 1/span 10/span 1/span 10}#w-node-afa62986-d158-48bc-94bc-d9e2fcf75d6b-ec512397{grid-area:1/1/2/5}#w-node-_2916a6eb-6d4b-4740-bf93-e38bd3bd4487-ec512397{grid-area:1/7/2/12}#w-node-_23b4fe64-b094-89ed-61d8-cb9fad99c296-ec512397{grid-area:1/1/2/5}#w-node-_4613b9ae-6a80-5477-52bb-4bd595aaeb35-ec512397,#w-node-ee4b771a-6144-ca51-204c-bc16cb2c38e8-ec512397{grid-area:span 1/span 4/span 1/span 4}#w-node-_23b4fe64-b094-89ed-61d8-cb9fad99c2a2-ec512397{grid-area:1/6/2/13}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a306-ec512397{grid-area:1/1/2/5}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a312-ec512397{grid-area:1/6/2/13}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a319-ec512397{grid-area:1/1/2/5}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a325-ec512397{grid-area:1/6/2/13}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a32a-ec512397{grid-area:1/1/2/5}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a337-ec512397{grid-area:1/6/2/13}#w-node-ea86571e-bb26-12e0-aac4-8cdd22678336-ec512397{grid-area:span 1/span 3/span 1/span 3}#w-node-ea86571e-bb26-12e0-aac4-8cdd22678339-ec512397{grid-area:span 1/span 9/span 1/span 9}#w-node-_0897b915-c7dd-7f3e-96ac-8290a7d5cbbe-53002453{grid-area:1/1/2/5}#w-node-_06761381-09fb-949c-0453-05c402e31a9e-53002453{grid-area:1/7/2/12}#w-node-a68c9e4f-42c7-583b-052b-d64a83f732b6-53002453{grid-area:1/1/2/5}#w-node-a68c9e4f-42c7-583b-052b-d64a83f732c8-53002453{grid-area:1/6/2/13}#w-node-df16777c-a759-e79b-1cca-dfa1b99f1147-53002453{grid-area:span 1/span 3/span 1/span 3}#w-node-df16777c-a759-e79b-1cca-dfa1b99f114a-53002453{grid-area:span 1/span 9/span 1/span 9}#w-node-e8ed7617-5341-20b7-4cd1-8738935309f8-ea141d29{grid-area:span 1/span 6/span 1/span 6}#w-node-_0379a8ab-a278-90f1-4ff8-9b82764a7902-ea141d29{grid-area:1/1/2/5}#w-node-_9eae49e5-4213-9b9b-b524-83795dbc548f-ea141d29{grid-area:1/7/2/12}#w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbbd-ea141d29{grid-area:1/1/2/5}#w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbcf-ea141d29{grid-area:1/6/2/13}#w-node-_3d1e12bf-1f03-79d2-9d67-b048794aff09-ea141d29{grid-area:span 1/span 3/span 1/span 3}#w-node-_3d1e12bf-1f03-79d2-9d67-b048794aff0c-ea141d29{grid-area:span 1/span 9/span 1/span 9}#w-node-a44f4653-b6df-3891-3614-58354126dcb0-96897cac{grid-area:span 1/span 6/span 1/span 6}#w-node-_9ebc14b6-0413-b027-a6f2-b607be3312e9-96897cac,#w-node-_708e019f-7d2d-07c0-8b73-1d34a0d13388-96897cac{grid-area:span 1/span 5/span 1/span 5}#w-node-_5aa12363-96f7-1b4d-77e8-c55514f08f13-96897cac{grid-area:span 1/span 7/span 1/span 7}#w-node-_891ef26e-bcf7-dee1-d4ed-cc66474483db-96897cac{grid-area:span 1/span 5/span 1/span 5}#w-node-_891ef26e-bcf7-dee1-d4ed-cc66474483de-96897cac{grid-area:span 1/span 7/span 1/span 7}#w-node-_3333a5f4-70ca-fb6f-fa03-65f06dd8d69a-96897cac{grid-area:span 1/span 5/span 1/span 5}#w-node-_3333a5f4-70ca-fb6f-fa03-65f06dd8d69d-96897cac,#w-node-b47ac67d-b3d5-1ee7-142b-659b11abb676-96897cac{grid-area:span 1/span 7/span 1/span 7}#w-node-dc258f87-e3c7-0d48-6602-d307e5ab179c-96897cac{grid-area:1/9/2/13}#w-node-_8ce10987-7754-87fc-3729-bf8bb6ef04a7-96897cac{grid-area:1/7/2/13}#w-node-_0424ffe9-64e5-1aa6-40be-6fd9826d8625-96897cac{grid-area:span 1/span 3/span 1/span 3}#w-node-_0424ffe9-64e5-1aa6-40be-6fd9826d8628-96897cac{grid-area:span 1/span 9/span 1/span 9}#w-node-d778c931-45a0-dd0d-3e9e-717be4bbc6d1-96897cac,#w-node-d1c72793-28f4-73fa-da34-f3c2d807f2c0-96897cac{grid-area:1/10/2/13}#w-node-e75160b4-234e-32f1-c02e-37e78d4d26bd-8d4d26b8{grid-area:span 1/span 6/span 1/span 6}#w-node-_7a5ec56a-88fa-2563-07c3-5fbdb57aace6-4a3afcf6{grid-area:span 1/span 3/span 1/span 3}#w-node-_7a5ec56a-88fa-2563-07c3-5fbdb57aace9-4a3afcf6{grid-area:span 1/span 9/span 1/span 9}#w-node-_1036c2de-47e9-a9e5-80a8-023ddfa2ce21-f203fbb4{grid-area:span 1/span 3/span 1/span 3}#w-node-_1036c2de-47e9-a9e5-80a8-023ddfa2ce24-f203fbb4{grid-area:span 1/span 9/span 1/span 9}#w-node-_48fdf057-38a4-8aea-74f9-3ee691ba1601-f0e9094a{grid-area:span 1/span 3/span 1/span 3}#w-node-_48fdf057-38a4-8aea-74f9-3ee691ba1604-f0e9094a{grid-area:span 1/span 9/span 1/span 9}#w-node-_45d6c0d2-17c8-1271-3560-1a5b35279447-035f1a62{grid-area:span 1/span 4/span 1/span 4}#w-node-_06d25d20-9e01-2a2c-51a1-142a63b9db62-035f1a62{grid-area:span 1/span 6/span 1/span 6}#w-node-_0c298be7-115c-c22c-8058-78034b5d1dbe-035f1a62{grid-area:span 1/span 3/span 1/span 3}#w-node-_0c298be7-115c-c22c-8058-78034b5d1dc1-035f1a62{grid-area:span 1/span 9/span 1/span 9}#w-node-_5c0578db-632c-e5be-c540-500d3e4310d5-3d8eeebd{grid-area:span 1/span 4/span 1/span 4}#w-node-_1e266256-2c04-dfb6-6873-732c82ef495c-3d8eeebd{grid-area:span 1/span 8/span 1/span 8}#w-node-db09c415-3bbd-2d79-3253-bc33642276fd-3d8eeebd{grid-area:span 1/span 3/span 1/span 3}#w-node-db09c415-3bbd-2d79-3253-bc3364227700-3d8eeebd{grid-area:span 1/span 9/span 1/span 9}#w-node-_238bc9fc-00f5-051c-b27a-987742b4ff59-63c4f703{grid-area:span 1/span 6/span 1/span 6}#w-node-e226d0e8-99f9-865b-d766-eea1d93d45ca-63c4f703{grid-area:span 1/span 7/span 1/span 7}#w-node-e226d0e8-99f9-865b-d766-eea1d93d45cd-63c4f703{grid-area:1/9/2/13}#w-node-ce8a4f5c-779b-c9a0-0245-e047de5eb7c9-63c4f703{grid-area:1/1/2/8}#w-node-_7aa6a68f-1a9f-e15f-8334-0718d6240a08-63c4f703{grid-area:1/9/2/13}#w-node-_9cb15710-2b3d-e094-8113-af0a02484a8e-63c4f703{grid-area:1/1/2/5}#w-node-_9cb15710-2b3d-e094-8113-af0a02484a9a-63c4f703{grid-area:1/6/2/13}#w-node-f2e05e2c-b196-428a-0c77-bf0da8769110-63c4f703{grid-area:span 1/span 3/span 1/span 3}#w-node-f2e05e2c-b196-428a-0c77-bf0da8769113-63c4f703{grid-area:span 1/span 9/span 1/span 9}#w-node-_6b40caee-369c-01fc-22dc-3c24aecd514a-96bdf56f{grid-area:1/1/2/4}#w-node-a6808493-bd0e-b252-e9f8-9b658a44687a-96bdf56f{grid-area:1/6/2/13}#w-node-d366b0a8-1744-7381-7002-d9b98b13882b-96bdf56f{grid-area:1/1/2/9}#w-node-_3bfedd23-ded5-ad8e-73fd-ddf833718cbc-96bdf56f{grid-area:1/10/2/13}#w-node-_5ec32fba-4440-6cab-d46d-a5e3b249dbc0-96bdf56f{grid-area:span 1/span 3/span 1/span 3}#w-node-_5ec32fba-4440-6cab-d46d-a5e3b249dbc3-96bdf56f{grid-area:span 1/span 9/span 1/span 9}#w-node-e60e98db-1982-2a42-9ff8-2bf271db8b6b-dc59c6b9{grid-area:span 1/span 5/span 1/span 5}#w-node-c24ba60e-ada5-6191-9d84-a0f335f19f90-dc59c6b9{grid-area:span 1/span 6/span 1/span 6}#w-node-e60e98db-1982-2a42-9ff8-2bf271db8b6b-2977a29e{grid-area:span 1/span 5/span 1/span 5}#w-node-c24ba60e-ada5-6191-9d84-a0f335f19f90-2977a29e{grid-area:span 1/span 6/span 1/span 6}@media screen and (max-width:991px){#w-node-_430bcb96-483e-8203-a385-c4e5b276cec6-92ff7679{grid-column:2/3}#w-node-_615311c0-85bf-a66f-0b27-bbf5a4c5cbc5-92ff7679{grid-column-end:2}#w-node-baffd7e0-9528-87eb-fec4-a3f1a93a5159-92ff7679{grid-column:2/3}#w-node-_77d2d239-04ed-3bd3-79c5-727daa2488a6-92ff7679{grid-area:3/1/4/2}#w-node-afa749fa-80ee-4bb6-fdf8-e4a923f2b4f7-92ff7679{grid-area:3/2/4/3}#w-node-c08fd07c-2ff4-d7ac-c3c4-ac100d692672-92ff7679,#w-node-f38b52e9-27e4-23b5-d9d0-86c3173c8d64-92ff7679,#w-node-febf3698-d141-19be-c3cc-45d173b3e456-92ff7679,#w-node-febf3698-d141-19be-c3cc-45d173b3e459-92ff7679{grid-column:span 1/span 1}#w-node-c4e778f2-bfd4-688d-0242-14e74ea18713-4ea1870e{grid-column:span 2/span 2}#w-node-c4e778f2-bfd4-688d-0242-14e74ea1872b-4ea1870e{grid-area:span 2/span 1/span 2/span 1}#w-node-c4e778f2-bfd4-688d-0242-14e74ea1872c-4ea1870e,#w-node-c4e778f2-bfd4-688d-0242-14e74ea1874a-4ea1870e{grid-area:span 1/span 2/span 1/span 2}#w-node-c4e778f2-bfd4-688d-0242-14e74ea18770-4ea1870e,#w-node-c4e778f2-bfd4-688d-0242-14e74ea18774-4ea1870e,#w-node-f75ae75c-ff66-c244-4e95-dfa40c1af76f-0c1af76a{grid-area:span 1/span 1/span 1/span 1}#w-node-_5c4dff72-50ef-a768-eb4a-37169018d567-b509a27e,#w-node-_4717f5e4-d05b-408a-bc59-a46c7464d082-7464d07f,#w-node-_4717f5e4-d05b-408a-bc59-a46c7464d085-7464d07f,#w-node-_289965be-5d45-c902-bef1-ca151848df31-ec512397{grid-column:span 1/span 1}#w-node-afa62986-d158-48bc-94bc-d9e2fcf75d6b-ec512397,#w-node-_2916a6eb-6d4b-4740-bf93-e38bd3bd4487-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-_23b4fe64-b094-89ed-61d8-cb9fad99c296-ec512397{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-_23b4fe64-b094-89ed-61d8-cb9fad99c2a2-ec512397{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a306-ec512397{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a312-ec512397{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a319-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a325-ec512397{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a32a-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a337-ec512397{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-ea86571e-bb26-12e0-aac4-8cdd22678336-ec512397,#w-node-ea86571e-bb26-12e0-aac4-8cdd22678339-ec512397{grid-column:span 1/span 1}#w-node-_0897b915-c7dd-7f3e-96ac-8290a7d5cbbe-53002453,#w-node-_06761381-09fb-949c-0453-05c402e31a9e-53002453{grid-area:span 1/span 1/span 1/span 1}#w-node-a68c9e4f-42c7-583b-052b-d64a83f732b6-53002453{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-a68c9e4f-42c7-583b-052b-d64a83f732c8-53002453{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-df16777c-a759-e79b-1cca-dfa1b99f1147-53002453,#w-node-df16777c-a759-e79b-1cca-dfa1b99f114a-53002453,#w-node-e8ed7617-5341-20b7-4cd1-8738935309f8-ea141d29{grid-column:span 1/span 1}#w-node-_0379a8ab-a278-90f1-4ff8-9b82764a7902-ea141d29,#w-node-_9eae49e5-4213-9b9b-b524-83795dbc548f-ea141d29{grid-area:span 1/span 1/span 1/span 1}#w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbbd-ea141d29{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbcf-ea141d29{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-_3d1e12bf-1f03-79d2-9d67-b048794aff09-ea141d29,#w-node-_3d1e12bf-1f03-79d2-9d67-b048794aff0c-ea141d29{grid-column:span 1/span 1}#w-node-_9ebc14b6-0413-b027-a6f2-b607be3312e9-96897cac{grid-column:span 6/span 6}#w-node-_8ce10987-7754-87fc-3729-bf8bb6ef04a7-96897cac{grid-area:span 1/span 1/span 1/span 1}#w-node-_0424ffe9-64e5-1aa6-40be-6fd9826d8625-96897cac,#w-node-_0424ffe9-64e5-1aa6-40be-6fd9826d8628-96897cac{grid-column:span 1/span 1}#w-node-d1c72793-28f4-73fa-da34-f3c2d807f2c0-96897cac{grid-column-start:6}#w-node-e75160b4-234e-32f1-c02e-37e78d4d26bd-8d4d26b8,#w-node-_7a5ec56a-88fa-2563-07c3-5fbdb57aace6-4a3afcf6,#w-node-_7a5ec56a-88fa-2563-07c3-5fbdb57aace9-4a3afcf6,#w-node-_1036c2de-47e9-a9e5-80a8-023ddfa2ce21-f203fbb4,#w-node-_1036c2de-47e9-a9e5-80a8-023ddfa2ce24-f203fbb4,#w-node-_48fdf057-38a4-8aea-74f9-3ee691ba1601-f0e9094a,#w-node-_48fdf057-38a4-8aea-74f9-3ee691ba1604-f0e9094a,#w-node-_45d6c0d2-17c8-1271-3560-1a5b35279447-035f1a62,#w-node-_06d25d20-9e01-2a2c-51a1-142a63b9db62-035f1a62,#w-node-_0c298be7-115c-c22c-8058-78034b5d1dbe-035f1a62,#w-node-_0c298be7-115c-c22c-8058-78034b5d1dc1-035f1a62{grid-column:span 1/span 1}#w-node-_5c0578db-632c-e5be-c540-500d3e4310d5-3d8eeebd{order:9999;grid-column:span 1/span 1}#w-node-_1e266256-2c04-dfb6-6873-732c82ef495c-3d8eeebd,#w-node-db09c415-3bbd-2d79-3253-bc33642276fd-3d8eeebd,#w-node-db09c415-3bbd-2d79-3253-bc3364227700-3d8eeebd,#w-node-_238bc9fc-00f5-051c-b27a-987742b4ff59-63c4f703{grid-column:span 1/span 1}#w-node-ce8a4f5c-779b-c9a0-0245-e047de5eb7c9-63c4f703,#w-node-_7aa6a68f-1a9f-e15f-8334-0718d6240a08-63c4f703{grid-area:span 1/span 1/span 1/span 1}#w-node-_9cb15710-2b3d-e094-8113-af0a02484a8e-63c4f703{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-_9cb15710-2b3d-e094-8113-af0a02484a9a-63c4f703{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-f2e05e2c-b196-428a-0c77-bf0da8769110-63c4f703,#w-node-f2e05e2c-b196-428a-0c77-bf0da8769113-63c4f703{grid-column:span 1/span 1}#w-node-_6b40caee-369c-01fc-22dc-3c24aecd514a-96bdf56f,#w-node-a6808493-bd0e-b252-e9f8-9b658a44687a-96bdf56f,#w-node-d366b0a8-1744-7381-7002-d9b98b13882b-96bdf56f,#w-node-_3bfedd23-ded5-ad8e-73fd-ddf833718cbc-96bdf56f{grid-area:span 1/span 1/span 1/span 1}#w-node-_5ec32fba-4440-6cab-d46d-a5e3b249dbc0-96bdf56f,#w-node-_5ec32fba-4440-6cab-d46d-a5e3b249dbc3-96bdf56f,#w-node-e60e98db-1982-2a42-9ff8-2bf271db8b6b-dc59c6b9,#w-node-c24ba60e-ada5-6191-9d84-a0f335f19f90-dc59c6b9,#w-node-e60e98db-1982-2a42-9ff8-2bf271db8b6b-2977a29e,#w-node-c24ba60e-ada5-6191-9d84-a0f335f19f90-2977a29e{grid-column:span 1/span 1}}@media screen and (max-width:767px){#w-node-_2bfa57bc-49b7-1038-5a47-72be80d5dcf0-92ff7679{grid-column:span 1/span 1}#w-node-_39c28c84-2f2d-8302-f04d-b907a72ac8aa-92ff7679{grid-area:span 1/span 1/span 1/span 1}#w-node-_71b5a07b-3222-2558-7b81-797eded2df59-92ff7679{grid-column:span 1/span 1}#w-node-_430bcb96-483e-8203-a385-c4e5b276cec6-92ff7679,#w-node-_615311c0-85bf-a66f-0b27-bbf5a4c5cbc5-92ff7679,#w-node-baffd7e0-9528-87eb-fec4-a3f1a93a5159-92ff7679,#w-node-_77d2d239-04ed-3bd3-79c5-727daa2488a6-92ff7679,#w-node-afa749fa-80ee-4bb6-fdf8-e4a923f2b4f7-92ff7679{grid-area:span 1/span 1/span 1/span 1}#w-node-b6993cbd-bc8c-14db-aa95-c6052cff274f-2cff2749{grid-column:span 1/span 1}#w-node-afa62986-d158-48bc-94bc-d9e2fcf75d6b-ec512397,#w-node-_2916a6eb-6d4b-4740-bf93-e38bd3bd4487-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-_23b4fe64-b094-89ed-61d8-cb9fad99c296-ec512397{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-_23b4fe64-b094-89ed-61d8-cb9fad99c2a2-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a306-ec512397{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a312-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a319-ec512397{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a325-ec512397{grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a32a-ec512397{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-c129304e-a7f9-ecba-7e8d-712c91c4a337-ec512397,#w-node-_0897b915-c7dd-7f3e-96ac-8290a7d5cbbe-53002453,#w-node-_06761381-09fb-949c-0453-05c402e31a9e-53002453{grid-area:span 1/span 1/span 1/span 1}#w-node-a68c9e4f-42c7-583b-052b-d64a83f732b6-53002453{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-a68c9e4f-42c7-583b-052b-d64a83f732c8-53002453,#w-node-_0379a8ab-a278-90f1-4ff8-9b82764a7902-ea141d29,#w-node-_9eae49e5-4213-9b9b-b524-83795dbc548f-ea141d29{grid-area:span 1/span 1/span 1/span 1}#w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbbd-ea141d29{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbcf-ea141d29{grid-area:span 1/span 1/span 1/span 1}#w-node-a44f4653-b6df-3891-3614-58354126dcb0-96897cac,#w-node-_9ebc14b6-0413-b027-a6f2-b607be3312e9-96897cac,#w-node-_708e019f-7d2d-07c0-8b73-1d34a0d13388-96897cac,#w-node-_5aa12363-96f7-1b4d-77e8-c55514f08f13-96897cac,#w-node-_891ef26e-bcf7-dee1-d4ed-cc66474483db-96897cac,#w-node-_891ef26e-bcf7-dee1-d4ed-cc66474483de-96897cac,#w-node-_3333a5f4-70ca-fb6f-fa03-65f06dd8d69a-96897cac,#w-node-_3333a5f4-70ca-fb6f-fa03-65f06dd8d69d-96897cac,#w-node-b47ac67d-b3d5-1ee7-142b-659b11abb676-96897cac{grid-column:span 1/span 1}#w-node-dc258f87-e3c7-0d48-6602-d307e5ab179c-96897cac{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-d1c72793-28f4-73fa-da34-f3c2d807f2c0-96897cac{grid-area:span 1/span 1/span 1/span 1}#w-node-e226d0e8-99f9-865b-d766-eea1d93d45ca-63c4f703{grid-column:span 1/span 1}#w-node-e226d0e8-99f9-865b-d766-eea1d93d45cd-63c4f703{order:-9999;grid-area:span 1/span 1/span 1/span 1}#w-node-_9cb15710-2b3d-e094-8113-af0a02484a8e-63c4f703{order:9999;grid-area:span 1/span 1/span 1/span 1}#w-node-_9cb15710-2b3d-e094-8113-af0a02484a9a-63c4f703{grid-area:span 1/span 1/span 1/span 1}}/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */

@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}`;
  document.head.appendChild(style);

  function injectHTML() {
    const container = document.createElement('div');
    container.innerHTML = `<!DOCTYPE html><!-- Last Published: Tue Apr 14 2026 09:51:25 GMT+0000 (Coordinated Universal Time) --><html data-wf-domain="na13-jle.webflow.io" data-wf-page="688092181b0b702eea141d29" data-wf-site="686294a0804e317b92ff7687" lang="en" data-wf-collection="688092181b0b702eea141cf3" data-wf-item-slug="waverley-water-treatment-plant-upgrade"><head><meta charset="utf-8"><title>Waverley Water Treatment Plant Upgrade| Project | JLE</title><link rel="alternate" hreflang="x-default" href="https://d4rkh0rse.github.io/demo-test/waverley-water-treatment-plant-upgrade"><link rel="alternate" hreflang="en" href="https://na13-jle.webflow.io/projects/waverley-water-treatment-plant-upgrade"><link rel="alternate" hreflang="en-AU" href="https://d4rkh0rse.github.io/demo-test/en-au/projects/waverley-water-treatment-plant-upgrade"><link rel="alternate" hreflang="en-PG" href="https://d4rkh0rse.github.io/demo-test/en-pg/projects/waverley-water-treatment-plant-upgrade"><link rel="alternate" hreflang="en-NZ" href="https://d4rkh0rse.github.io/demo-test/en-nz/projects/waverley-water-treatment-plant-upgrade"><meta content="JLE was engaged for the Automation, Electrical and instrumentation required to install a new Water Treatment Plant at Waverley in Taranaki." name="description"><meta content="Waverley Water Treatment Plant Upgrade| Project | JLE" property="og:title"><meta content="JLE was engaged for the Automation, Electrical and instrumentation required to install a new Water Treatment Plant at Waverley in Taranaki." property="og:description"><meta content="https://cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f347045f35ec945f7a4_68a319257fc9a0ca0751c0b7_688092ebbae18400076f6feb_6127043c3ec09994e1b393a1_Wave6.jpeg" property="og:image"><meta content="Waverley Water Treatment Plant Upgrade| Project | JLE" property="twitter:title"><meta content="JLE was engaged for the Automation, Electrical and instrumentation required to install a new Water Treatment Plant at Waverley in Taranaki." property="twitter:description"><meta content="https://cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f347045f35ec945f7a4_68a319257fc9a0ca0751c0b7_688092ebbae18400076f6feb_6127043c3ec09994e1b393a1_Wave6.jpeg" property="twitter:image"><meta property="og:type" content="website"><meta content="summary_large_image" name="twitter:card"><meta content="width=device-width, initial-scale=1" name="viewport"><meta content="XmsrI8eCv_HDD-FWTPycJW60yfQvmmBfH4DnNFwst5A" name="google-site-verification"><link href="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687/css/na13-jle.shared.34cdb386e.min.css" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com" rel="preconnect"><link href="https://fonts.gstatic.com" rel="preconnect"><script src="https://d4rkh0rse.github.io/demo-test/assets/ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script><script type="text/javascript">WebFont.load({  google: {    families: ["Poppins:300,400,500,600,700"]  }});</script><script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script><link href="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687/68918061c9c569e38a777961_JLE_32px.png" rel="shortcut icon" type="image/x-icon"><link href="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687/6891806660eabf10a7d38451_256px.png" rel="apple-touch-icon"><style>main{display:none}noscript div{background-color:#fff3cd;color:#856404;border:1px solid #ffeeba;padding:16px;font-family:Arial,sans-serif;text-align:center;width:calc(100dvw - 64px);margin:32px;border-radius:4px}.js main{display:block}.js noscript{display:none}</style>
<script>document.documentElement.classList.add("js")</script>

<!--
<script>
(async()=>{var m={NZ:"/en-nz",AU:"/en-au",PG:"/en-pg"},d="/",k="jleSessionGeo",p=(location.pathname.replace(/\\/$/,"")||"/");function target(cc){return m[cc]||d}function red(cc){var t=target(cc);if(p!==t){location.replace(t);return 1}return 0}function tf(u,ms){var c=new AbortController(),t=setTimeout(function(){c.abort()},ms);return fetch(u,{signal:c.signal}).finally(function(){clearTimeout(t)})}var s=sessionStorage.getItem(k);if(s){if(red(s))return}else{var cc=null;try{var r=await tf("https://pro.ip-api.com/json/?key=YdPUgD1J96Hukk2",1500);if(r&&r.ok){var j=await r.json();cc=j&&j.countryCode||null}}catch(e){}sessionStorage.setItem(k,cc||"");if(cc){if(red(cc))return}}})();
</script>
-->


<style>
.navbar:has(.nav-dd-navigation.w--open),
.navbar:has(.nav-dd-bg.open){
 color:var(--swatches--black)!important;
}
.page-scrolled .w-nav{
 color:var(--swatches--black)!important;
}

.page-scrolled .w-nav{
 background-color:var(--swatches--white)!important;
}

.page-scrolled [nav-divider]{
 background-color:rgba(0, 0, 0, 0.40)!important;
}

.footer label.error {
    font-size: 0.75rem;
    color: var(--swatches--red);

    font-weight: 400;
    margin-left:auto;
    }
    
.footer input:-webkit-autofill,.footer select:-webkit-autofill,.footer input:-webkit-autofill:hover,.footer select:-webkit-autofill:hover,.footer input:-webkit-autofill:focus,.footer select:-webkit-autofill:focus,.footer input:-webkit-autofill:active,.footer select:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px var(--swatches--white) inset;
    -webkit-text-fill-color: var(--swatches--black);
    background-clip: padding-box !important;    }
    
    @media screen and (max-width: 767px) {
    input[type='text'], input[type='number'], input[type='tel'], input[type='email'], textarea {
        font-size: 16px !important;
    }
}
</style>

<meta name="facebook-domain-verification" content="9y6vd79mnr8yuq5v7oy9wbrsmz138a">

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ6N5GQ5');</script>
<!-- End Google Tag Manager -->



<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2226143,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>




<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '5749317588493823');
  fbq('track', 'PageView');
</script>

<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '759553742430094');
  fbq('track', 'PageView');
</script>

<!-- Google tag (gtag.js) -->

<script async="" src="https://d4rkh0rse.github.io/demo-test/assets/www.googletagmanager.com/gtag/js"></script>

<script>

 window.dataLayer = window.dataLayer || [];

 function gtag(){dataLayer.push(arguments);}

 gtag('js', new Date());

 gtag('config', 'GTM-PJ6N5GQ5');
 
</script>



<!-- noconsolejs -->
<!--
<script src="https://cdn.jsdelivr.net/gh/Druhin13/noconsolejs@master/index.js"></script>
-->
<script async="" type="module" src="https://d4rkh0rse.github.io/demo-test/assets/cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js" fs-selectcustom=""></script>

<link rel="stylesheet" href="https://d4rkh0rse.github.io/demo-test/assets/unpkg.com/swiper@8/swiper-bundle.min.css">
<script src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687%252F6544eda5f000985a163a8687%252F68d0eee8615194d9adb94408%252Ffinsweetcomponentsconfig-1.0.0.js" type="module" async="" siteid="686294a0804e317b92ff7687" finsweet="components"></script></head><body><main class="page-wrapper"><div data-animation="default" class="navbar w-nav" data-wf--navbar--variant="light-theme" data-easing2="ease" data-easing="ease" navbar="" data-collapse="medium" role="banner" data-duration="400"><div class="container"><div class="nav-row"><div class="nav-mob-row"><a href="https://na13-jle.webflow.io/" class="nav-logo w-inline-block"><div class="nav-logo-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 115 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_432_12013)">
<path d="M47.2521 29.0756C40.5715 29.0756 35.1328 27.8112 35.1328 21.1663V19.6114H44.3995V20.3971C44.3995 22.9676 44.7115 23.5369 46.7381 23.5561C48.8995 23.5561 49.1415 22.8008 49.1415 21.0128V8.64648H58.4082V21.3722C58.4082 25.4619 56.5001 29.0756 47.2555 29.0756" fill="currentcolor"></path>
<path d="M86.754 28.5101H63.4453V8.64435H72.712V22.6841H86.7513L86.754 28.5101Z" fill="currentcolor"></path>
<path d="M114.999 28.5101H90.3379V8.64435H114.999V13.86H99.6032V16.0359H114.031V21.1993H99.6032V23.2964H114.999L114.999 28.5101Z" fill="currentcolor"></path>
<path d="M13.123 28.5339C12.1935 28.5351 11.2934 28.2106 10.581 27.6177H6.40234C7.09963 29.1362 8.29881 30.3722 9.80091 31.1208C11.303 31.8694 13.0177 32.0856 14.6606 31.7334C16.3034 31.3812 17.7755 30.4818 18.8328 29.1845C19.89 27.8872 20.4688 26.27 20.473 24.6011V16.9064C20.2149 16.6819 19.9142 16.5107 19.5887 16.4029C19.2631 16.2952 18.9192 16.253 18.577 16.2788H17.0837V24.6011C17.0837 25.6442 16.6664 26.6445 15.9236 27.382C15.1809 28.1196 14.1734 28.5339 13.123 28.5339Z" fill="currentcolor"></path>
<path d="M13.123 28.5339C12.1935 28.5351 11.2934 28.2106 10.581 27.6177H6.40234C7.09963 29.1362 8.29881 30.3722 9.80091 31.1208C11.303 31.8694 13.0177 32.0856 14.6606 31.7334C16.3034 31.3812 17.7755 30.4818 18.8328 29.1845C19.89 27.8872 20.4688 26.27 20.473 24.6011V16.9064C20.2149 16.6819 19.9142 16.5107 19.5887 16.4029C19.2631 16.2952 18.9192 16.253 18.577 16.2788H17.0837V24.6011C17.0837 25.6442 16.6664 26.6445 15.9236 27.382C15.1809 28.1196 14.1734 28.5339 13.123 28.5339Z" stroke="currentcolor" stroke-width="0.761111" stroke-miterlimit="10"></path>
<path d="M13.1078 9.48977C14.0374 9.48838 14.9376 9.81283 15.6498 10.4059H19.8298C19.1325 8.88735 17.9332 7.65114 16.431 6.90245C14.9288 6.15375 13.2139 5.93756 11.5709 6.28977C9.92796 6.64197 8.45564 7.54139 7.39828 8.83879C6.34092 10.1362 5.76208 11.7536 5.75781 13.4225V21.1173C6.01577 21.3417 6.31619 21.5128 6.64151 21.6205C6.96683 21.7283 7.31052 21.7705 7.65248 21.7448H9.14915V13.4225C9.14915 12.3797 9.56625 11.3796 10.3087 10.6421C11.0512 9.90462 12.0576 9.49012 13.1078 9.48977Z" fill="currentcolor"></path>
<path d="M13.1078 9.48977C14.0374 9.48838 14.9376 9.81283 15.6498 10.4059H19.8298C19.1325 8.88735 17.9332 7.65114 16.431 6.90245C14.9288 6.15375 13.2139 5.93756 11.5709 6.28977C9.92796 6.64197 8.45564 7.54139 7.39828 8.83879C6.34092 10.1362 5.76208 11.7536 5.75781 13.4225V21.1173C6.01577 21.3417 6.31619 21.5128 6.64151 21.6205C6.96683 21.7283 7.31052 21.7705 7.65248 21.7448H9.14915V13.4225C9.14915 12.3797 9.56625 11.3796 10.3087 10.6421C11.0512 9.90462 12.0576 9.49012 13.1078 9.48977Z" stroke="currentcolor" stroke-width="0.761111" stroke-miterlimit="10"></path>
<path d="M22.7049 19.004C22.7063 19.927 22.3795 20.8208 21.7822 21.528V25.6786C23.3108 24.9858 24.555 23.7949 25.3084 22.3036C26.0618 20.8122 26.2793 19.11 25.9246 17.4791C25.57 15.8482 24.6646 14.3866 23.3586 13.3368C22.0527 12.287 20.4245 11.7119 18.7442 11.707H10.9949C10.7688 11.9631 10.5965 12.2614 10.4879 12.5845C10.3794 12.9075 10.3369 13.2488 10.3629 13.5884V15.0732H18.7442C19.7946 15.0732 20.8021 15.4875 21.5448 16.225C22.2876 16.9626 22.7049 17.9629 22.7049 19.0059" fill="currentcolor"></path>
<path d="M3.52535 19.0184C3.52413 18.0954 3.85086 17.2016 4.44802 16.4943V12.3438C2.91866 13.0362 1.67368 14.227 0.919674 15.7186C0.165667 17.2103 -0.0520479 18.913 0.302655 20.5445C0.657357 22.1759 1.56316 23.6378 2.86975 24.6877C4.17635 25.7377 5.80519 26.3124 7.48602 26.3166H15.236C15.4621 26.0605 15.6345 25.7621 15.743 25.4389C15.8516 25.1157 15.894 24.7743 15.868 24.4347V22.9512H7.48602C6.43559 22.9512 5.42817 22.5368 4.6854 21.7993C3.94263 21.0618 3.52535 20.0615 3.52535 19.0184Z" fill="currentcolor"></path>
</g>
<defs>
<clipPath id="clip0_432_12013">
<rect width="115" height="36" fill="white" transform="translate(0 0.5)"></rect>
</clipPath>
</defs>
</svg></div></a><div nav-menu-btn="" class="humburger-menu w-nav-button"><div>Menu</div></div></div><nav role="navigation" class="nav-navigation w-nav-menu"><div class="nav-wrapper"><div class="nav-mob-row is-web"><a href="https://na13-jle.webflow.io/" class="nav-logo w-inline-block"><div class="nav-logo-svg w-embed"><svg width="100%" height="100%" viewBox="0 0 115 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_432_12013)">
<path d="M47.2521 29.0756C40.5715 29.0756 35.1328 27.8112 35.1328 21.1663V19.6114H44.3995V20.3971C44.3995 22.9676 44.7115 23.5369 46.7381 23.5561C48.8995 23.5561 49.1415 22.8008 49.1415 21.0128V8.64648H58.4082V21.3722C58.4082 25.4619 56.5001 29.0756 47.2555 29.0756" fill="currentcolor"></path>
<path d="M86.754 28.5101H63.4453V8.64435H72.712V22.6841H86.7513L86.754 28.5101Z" fill="currentcolor"></path>
<path d="M114.999 28.5101H90.3379V8.64435H114.999V13.86H99.6032V16.0359H114.031V21.1993H99.6032V23.2964H114.999L114.999 28.5101Z" fill="currentcolor"></path>
<path d="M13.123 28.5339C12.1935 28.5351 11.2934 28.2106 10.581 27.6177H6.40234C7.09963 29.1362 8.29881 30.3722 9.80091 31.1208C11.303 31.8694 13.0177 32.0856 14.6606 31.7334C16.3034 31.3812 17.7755 30.4818 18.8328 29.1845C19.89 27.8872 20.4688 26.27 20.473 24.6011V16.9064C20.2149 16.6819 19.9142 16.5107 19.5887 16.4029C19.2631 16.2952 18.9192 16.253 18.577 16.2788H17.0837V24.6011C17.0837 25.6442 16.6664 26.6445 15.9236 27.382C15.1809 28.1196 14.1734 28.5339 13.123 28.5339Z" fill="currentcolor"></path>
<path d="M13.123 28.5339C12.1935 28.5351 11.2934 28.2106 10.581 27.6177H6.40234C7.09963 29.1362 8.29881 30.3722 9.80091 31.1208C11.303 31.8694 13.0177 32.0856 14.6606 31.7334C16.3034 31.3812 17.7755 30.4818 18.8328 29.1845C19.89 27.8872 20.4688 26.27 20.473 24.6011V16.9064C20.2149 16.6819 19.9142 16.5107 19.5887 16.4029C19.2631 16.2952 18.9192 16.253 18.577 16.2788H17.0837V24.6011C17.0837 25.6442 16.6664 26.6445 15.9236 27.382C15.1809 28.1196 14.1734 28.5339 13.123 28.5339Z" stroke="currentcolor" stroke-width="0.761111" stroke-miterlimit="10"></path>
<path d="M13.1078 9.48977C14.0374 9.48838 14.9376 9.81283 15.6498 10.4059H19.8298C19.1325 8.88735 17.9332 7.65114 16.431 6.90245C14.9288 6.15375 13.2139 5.93756 11.5709 6.28977C9.92796 6.64197 8.45564 7.54139 7.39828 8.83879C6.34092 10.1362 5.76208 11.7536 5.75781 13.4225V21.1173C6.01577 21.3417 6.31619 21.5128 6.64151 21.6205C6.96683 21.7283 7.31052 21.7705 7.65248 21.7448H9.14915V13.4225C9.14915 12.3797 9.56625 11.3796 10.3087 10.6421C11.0512 9.90462 12.0576 9.49012 13.1078 9.48977Z" fill="currentcolor"></path>
<path d="M13.1078 9.48977C14.0374 9.48838 14.9376 9.81283 15.6498 10.4059H19.8298C19.1325 8.88735 17.9332 7.65114 16.431 6.90245C14.9288 6.15375 13.2139 5.93756 11.5709 6.28977C9.92796 6.64197 8.45564 7.54139 7.39828 8.83879C6.34092 10.1362 5.76208 11.7536 5.75781 13.4225V21.1173C6.01577 21.3417 6.31619 21.5128 6.64151 21.6205C6.96683 21.7283 7.31052 21.7705 7.65248 21.7448H9.14915V13.4225C9.14915 12.3797 9.56625 11.3796 10.3087 10.6421C11.0512 9.90462 12.0576 9.49012 13.1078 9.48977Z" stroke="currentcolor" stroke-width="0.761111" stroke-miterlimit="10"></path>
<path d="M22.7049 19.004C22.7063 19.927 22.3795 20.8208 21.7822 21.528V25.6786C23.3108 24.9858 24.555 23.7949 25.3084 22.3036C26.0618 20.8122 26.2793 19.11 25.9246 17.4791C25.57 15.8482 24.6646 14.3866 23.3586 13.3368C22.0527 12.287 20.4245 11.7119 18.7442 11.707H10.9949C10.7688 11.9631 10.5965 12.2614 10.4879 12.5845C10.3794 12.9075 10.3369 13.2488 10.3629 13.5884V15.0732H18.7442C19.7946 15.0732 20.8021 15.4875 21.5448 16.225C22.2876 16.9626 22.7049 17.9629 22.7049 19.0059" fill="currentcolor"></path>
<path d="M3.52535 19.0184C3.52413 18.0954 3.85086 17.2016 4.44802 16.4943V12.3438C2.91866 13.0362 1.67368 14.227 0.919674 15.7186C0.165667 17.2103 -0.0520479 18.913 0.302655 20.5445C0.657357 22.1759 1.56316 23.6378 2.86975 24.6877C4.17635 25.7377 5.80519 26.3124 7.48602 26.3166H15.236C15.4621 26.0605 15.6345 25.7621 15.743 25.4389C15.8516 25.1157 15.894 24.7743 15.868 24.4347V22.9512H7.48602C6.43559 22.9512 5.42817 22.5368 4.6854 21.7993C3.94263 21.0618 3.52535 20.0615 3.52535 19.0184Z" fill="currentcolor"></path>
</g>
<defs>
<clipPath id="clip0_432_12013">
<rect width="115" height="36" fill="white" transform="translate(0 0.5)"></rect>
</clipPath>
</defs>
</svg></div></a><div class="humburger-menu w-nav-button"><div>Close</div></div></div><div class="menu-label-wraper"><div>Menu</div></div><div class="nav-menu-holder"><div class="nav-dd-menu"><div data-hover="true" data-delay="0" dropdown="menu" class="nav-dd w-dropdown"><div dropdown="toggle" class="nav-dd-toggle w-dropdown-toggle"><div class="nav-link">Services</div><div class="nav-dd-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></div><nav class="nav-dd-navigation w-dropdown-list"><div class="nav-dd-list"><div class="menu-label-wraper"><div dropdown="backbtn" class="nav-dd-close">Menu</div><div class="opacity-50">/</div><div class="title7-1 uppercase">Services</div></div><a href="https://na13-jle.webflow.io/services" class="nav-link w-inline-block"><div>All services</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/services#Electrical-Services" class="nav-link w-inline-block"><div>Electrical</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/services#Mechanical-Services" class="nav-link w-inline-block"><div>Mechanical</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/services#Instrumentation-Services" class="nav-link w-inline-block"><div>Instrumentation &amp; Tubing</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/services#Steel-Fabrication-Services" class="nav-link w-inline-block"><div>Fabrication</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div></nav></div><div class="nav-dd-bg"></div></div><div class="nav-dd-menu"><div class="nav-dd-bg"></div><div data-hover="true" data-delay="0" dropdown="menu" class="nav-dd w-dropdown"><div dropdown="toggle" class="nav-dd-toggle w-dropdown-toggle"><div class="nav-link">Industries</div><div class="nav-dd-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></div><nav class="nav-dd-navigation w-dropdown-list"><div class="nav-dd-list"><div class="menu-label-wraper"><div dropdown="backbtn" class="nav-dd-close">Menu</div><div class="opacity-50">/</div><div class="title7-1 uppercase">industries</div></div><a href="https://na13-jle.webflow.io/industries" class="nav-link w-inline-block"><div>All industries</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><div class="collection-list-wrapper w-dyn-list"><div role="list" class="nav-cms-industry w-dyn-items"><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/infrastructure" class="nav-link w-inline-block"><div>Infrastructure</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/power-generation" class="nav-link w-inline-block"><div>Power Generation</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/industrial-processing" class="nav-link w-inline-block"><div>Industrial Processing</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/water-and-waste-facilities" class="nav-link w-inline-block"><div>Water and Waste facilities</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/food-and-beverage" class="nav-link w-inline-block"><div>Food and Beverage</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/dairy" class="nav-link w-inline-block"><div>Dairy</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div><div role="listitem" class="nav-cms-item w-dyn-item"><a href="https://na13-jle.webflow.io/industries/petrochemical" class="nav-link w-inline-block"><div>Petrochemical</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div></div></div></div></nav></div></div><a href="https://na13-jle.webflow.io/projects" class="nav-link w-inline-block"><div>Projects</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><div class="nav-dd-menu"><div class="nav-dd-bg"></div><div data-hover="true" data-delay="0" dropdown="menu" class="nav-dd w-dropdown"><div dropdown="toggle" class="nav-dd-toggle w-dropdown-toggle"><div class="nav-link">About Us</div><div class="nav-dd-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></div><nav class="nav-dd-navigation w-dropdown-list"><div class="nav-dd-list"><div class="menu-label-wraper"><div dropdown="backbtn" class="nav-dd-close">Menu</div><div class="opacity-50">/</div><div class="title7-1 uppercase">About Us</div></div><a href="https://na13-jle.webflow.io/about-us" class="nav-link w-inline-block"><div>Who is JLE</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/our-people" class="nav-link w-inline-block"><div>Our People</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/blog" class="nav-link w-inline-block"><div>Blog</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/contact" class="nav-link w-inline-block"><div>Contact</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a><a href="https://na13-jle.webflow.io/our-people#vacancies" class="nav-link w-inline-block"><div>Vacancies</div><div class="link-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.00411L1.39486 0.5L7 6.48568L1.42056 12.5L0.0197716 11.0044L3.19799 7.57823L4.20386 6.5175L3.23259 5.45677L0 2.00411Z" fill="currentcolor"></path>
</svg></div></a></div></nav></div></div><div class="nav-btn-wrap"><a href="https://na13-jle.webflow.io/contact" class="nav-btn w-button">Contact Us</a></div></div></div></nav></div></div><div nav-divider="" class="divider"></div></div><div class="projectpage-css w-embed"><style>
.project-cms-item:last-child .card-border{
  display:none;
}

.tp-details-item:first-child{
 padding-top:0;
}
.ps-cms-item:last-child .body1-1:last-child{
 display:none;
}
@media (max-width:1366px) and (min-width:992px){
 .tp-details-grid .grid_item:first-child{
      grid-area: 1 / 1 / 2 / 6!important;
 }
}

</style></div><div class="sec-feature-css w-embed"><style>
[feature-template] [feature-title]{
    opacity:0.5 ;
    transition: all 0.3s;
}
[feature-template] .title4-1 {
cursor:pointer;
}
[feature-template].is-active-01 [feature-title]:first-child,
[feature-template].is-active-02 [feature-title]:nth-child(2),
[feature-template].is-active-03 [feature-title]:nth-child(3),
[feature-template].is-active-04 [feature-title]:nth-child(4),
[feature-template].is-active-05 [feature-title]:nth-child(5){
    opacity:1;
}
[feature-desc]{
 display:none;
}

[feature-template].is-active-01 [feature-desc]:first-child,
[feature-template].is-active-02 [feature-desc]:nth-child(2),
[feature-template].is-active-03 [feature-desc]:nth-child(3),
[feature-template].is-active-04 [feature-desc]:nth-child(4),
[feature-template].is-active-05 [feature-desc]:nth-child(5){
    display:block;
}

@media (max-width:1366px) and (min-width:992px){
 .st-feature-grid .grid_item:first-child{
      grid-area: 1 / 1 / 2 / 6!important;
 } 
}
</style></div><div class="global-embeds"><div class="global-embed-files"><div class="figma-styles w-embed"><style>
/* Generate CSS from -  https://druh.in/Design-Token-CSS-Generator */

</style></div><div class="global-styles w-embed"><style>
/* Make text look crisper and more legible in all browsers */
body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
	overflow-x: hidden;
}

/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
input[type="file"]:focus-visible {
	outline: 0.125rem solid #4d65ff;
	outline-offset: 0.125rem;
}

/* Get rid of top margin on first element in any rich text element */
.w-richtext> :not(div):first-child,
.w-richtext>div:first-child> :first-child {
	margin-top: 0 !important;
}

/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child,
.w-richtext ol li:last-child,
.w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}

/* Prevent all click and hover interaction with an element */
[pointer-event="none"],
.pointer-events-off {
	pointer-events: none;
}

/* Enables all click and hover interaction with an element */
.pointer-events-on {
	pointer-events: auto;
}

/* Create a class of .div-square which maintains a 1:1 dimension of a div */
.div-square::after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

/* Make sure containers never lose their center alignment */
.container-medium,
.container-small,
.container-large {
	margin-right: auto !important;
	margin-left: auto !important;
}

a {
	text-decoration: none;
	color: inherit;
}

/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

/* Apply "..." after 4 lines of text */
.text-style-4lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
}

/* Apply "..." after 5 lines of text */
.text-style-5lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
}

/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.text-style-lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}

/* Adds inline flex display */
.display-inlineflex {
	display: inline-flex;
}

/* These classes are never overwritten */
.hide {
	display: none !important;
}

@media screen and (max-width: 991px) {

	.hide,
	.hide-tablet {
		display: none !important;
	}
}

@media screen and (max-width: 767px) {
	.hide-mobile-landscape {
		display: none !important;
	}
}

@media screen and (max-width: 479px) {
	.hide-mobile {
		display: none !important;
	}
}

.margin-0 {
	margin: 0rem !important;
}

.padding-0 {
	padding: 0rem !important;
}

.spacing-clean {
	padding: 0rem !important;
	margin: 0rem !important;
}

.margin-top {
	margin-right: 0rem !important;
	margin-bottom: 0rem !important;
	margin-left: 0rem !important;
}

.padding-top {
	padding-right: 0rem !important;
	padding-bottom: 0rem !important;
	padding-left: 0rem !important;
}

.margin-right {
	margin-top: 0rem !important;
	margin-bottom: 0rem !important;
	margin-left: 0rem !important;
}

.padding-right {
	padding-top: 0rem !important;
	padding-bottom: 0rem !important;
	padding-left: 0rem !important;
}

.margin-bottom {
	margin-top: 0rem !important;
	margin-right: 0rem !important;
	margin-left: 0rem !important;
}

.padding-bottom {
	padding-top: 0rem !important;
	padding-right: 0rem !important;
	padding-left: 0rem !important;
}

.margin-left {
	margin-top: 0rem !important;
	margin-right: 0rem !important;
	margin-bottom: 0rem !important;
}

.padding-left {
	padding-top: 0rem !important;
	padding-right: 0rem !important;
	padding-bottom: 0rem !important;
}

.margin-horizontal {
	margin-top: 0rem !important;
	margin-bottom: 0rem !important;
}

.padding-horizontal {
	padding-top: 0rem !important;
	padding-bottom: 0rem !important;
}

.margin-vertical {
	margin-right: 0rem !important;
	margin-left: 0rem !important;
}

.padding-vertical {
	padding-right: 0rem !important;
	padding-left: 0rem !important;
}

</style><style>

/* Make text look crisper and more legible in all browsers */
body {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-smoothing: antialiased;
	text-rendering: optimizeLegibility;
}

/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
input[type="file"]:focus-visible {
	outline: 0.125rem solid #4d65ff;
	outline-offset: 0.125rem;
}

/* Get rid of top margin on first element in any rich text element */
.w-richtext> :not(div):first-child,
.w-richtext>div:first-child> :first-child {
	margin-top: 0 !important;
}

/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child,
.w-richtext ol li:last-child,
.w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}

/* Prevent all click and hover interaction with an element */
.pointer-events-off {
	pointer-events: none;
}

/* Enables all click and hover interaction with an element */
.pointer-events-on {
	pointer-events: auto;
}

/* Create a class of .div-square which maintains a 1:1 dimension of a div */
.div-square::after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

/* Make sure containers never lose their center alignment */
.container-medium,
.container-small,
.container-large {
	margin-right: auto !important;
	margin-left: auto !important;
}

/* 
      Make the following elements inherit typography styles from the parent and not have hardcoded values. 
      Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
      Uncomment this CSS to use it in the project. Leave this message for future hand-off.
      */
/*
      a,
      .w-input,
      .w-select,
      .w-tab-link,
      .w-nav-link,
      .w-dropdown-btn,
      .w-dropdown-toggle,
      .w-dropdown-link {
      color: inherit;
      text-decoration: inherit;
      font-size: inherit;
      }
      */
.w-dropdown-btn,
      .w-dropdown-toggle,
      .w-dropdown-link {
      color: inherit;
      text-decoration: inherit;
      }

/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

/* Adds inline flex display */
.display-inlineflex {
	display: inline-flex;
}

/* These classes are never overwritten */
.hide {
	display: none !important;
}

@media screen and (max-width: 991px) {

	.hide,
	.hide-tablet {
		display: none !important;
	}
}

@media screen and (max-width: 767px) {
	.hide-mobile-landscape {
		display: none !important;
	}
}

@media screen and (max-width: 479px) {
	.hide-mobile {
		display: none !important;
	}
}

.margin-0 {
	margin: 0rem !important;
}

.padding-0 {
	padding: 0rem !important;
}

.spacing-clean {
	padding: 0rem !important;
	margin: 0rem !important;
}

.margin-top {
	margin-right: 0rem !important;
	margin-bottom: 0rem !important;
	margin-left: 0rem !important;
}

.padding-top {
	padding-right: 0rem !important;
	padding-bottom: 0rem !important;
	padding-left: 0rem !important;
}

.margin-right {
	margin-top: 0rem !important;
	margin-bottom: 0rem !important;
	margin-left: 0rem !important;
}

.padding-right {
	padding-top: 0rem !important;
	padding-bottom: 0rem !important;
	padding-left: 0rem !important;
}

.margin-bottom {
	margin-top: 0rem !important;
	margin-right: 0rem !important;
	margin-left: 0rem !important;
}

.padding-bottom {
	padding-top: 0rem !important;
	padding-right: 0rem !important;
	padding-left: 0rem !important;
}

.margin-left {
	margin-top: 0rem !important;
	margin-right: 0rem !important;
	margin-bottom: 0rem !important;
}

.padding-left {
	padding-top: 0rem !important;
	padding-right: 0rem !important;
	padding-bottom: 0rem !important;
}

.margin-horizontal {
	margin-top: 0rem !important;
	margin-bottom: 0rem !important;
}

.padding-horizontal {
	padding-top: 0rem !important;
	padding-bottom: 0rem !important;
}

.margin-vertical {
	margin-right: 0rem !important;
	margin-left: 0rem !important;
}

.padding-vertical {
	padding-right: 0rem !important;
	padding-left: 0rem !important;
}

[font-color="blueviolet"] {
	color: var(--color--blue-violet);
}

.submenu-link-wrap:hover .link-arrow,
.submenu-item:hover .submenu-link-arrow {
	right: -32px;
}

.submenu-item:hover .submenu-menu-title,
.submenu-item:hover .singal-link-title {
	color: #7b22ff;
}

.dropdown-toggle.w--open .menu-underline {
	transform: scaleX(1) !important;
}

@media screen and (max-width: 991px) {

	.submenu-link-wrap:hover .link-arrow,
	.submenu-item:hover .submenu-link-arrow {
		right: 0;
	}
}

.aspect {
	position: relative;
	width: 100%;
	height: 0;
	overflow: hidden;
	padding-top: 100%;
}

.aspect-16x9 {
	padding-top: 56.25%;
}

.aspect-inner {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}



@media screen and (max-width: 991px) {
	.nav-menu-mobile {
		height: calc(100vh - 64px);
	}
}

.cta .cta-arrow {
	transition: all .4s;
}

.cta:hover .cta-arrow {
	transform: translate3d(10px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
	transform-style: preserve-3d;
}

.nt-richtext blockquote::before,
.owt-richtext blockquote::before {
	content: '"';
}

.nt-richtext blockquote::before,
.owt-richtext blockquote::after {
	content: '"';
}

[data-alpha-list] {
	list-style-type: lower-alpha
}

a {
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

a:focus {
	outline: 0 !important
}

.no-scroll {
	overflow: hidden;
	height: 100vh;
	touch-action: none
}
</style>

<noscript>
    <div>
        <strong>JavaScript is required to run the JLE website smoothly.</strong>
        <br>
        <br> Please enable JavaScript in your browser settings and refresh the page.
    </div>
</noscript>

<style>
.w-select {
    -webkit-appearance: none;
    -moz-appearance: none;
}

* {
  -webkit-tap-highlight-color: transparent;
}
</style></div><div class="mobile-landscape w-embed"></div><div class="marker-io w-embed w-script"><script>

/* ==============================
      CONFIGURATION SECTION
================================= */

const markerProjectID="6704d77e6b6f0acc7dfb88e7"; // Replace with your Marker project ID








/* ==============================
    DON'T MAKE ANY CHANGES HERE
================================= */


function loadMarker(){if(!markerProjectID){console.error("Marker Project ID is not defined. Please set markerProjectID in the configuration section.");return}window.markerConfig||(window.markerConfig={project:markerProjectID,source:"snippet"}),window.__Marker||function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],o={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","clearReporter","setCustomData","on","off"].forEach(function(e){o[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=o;var n=r.createElement("script");n.async=1,n.src="https://edge.marker.io/latest/shim.js";var s=r.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s)}}(window,document)}function unloadMarker(){window.Marker&&window.Marker.unload&&window.Marker.unload();let e=document.querySelector('script[src="https://edge.marker.io/latest/shim.js"]');e&&e.remove()}function handleMarker(){let e=new URLSearchParams(window.location.search),r=e.get("marker");"true"===r?(localStorage.setItem("markerEnabled","true"),loadMarker()):"false"===r?"true"===localStorage.getItem("markerEnabled")&&(localStorage.removeItem("markerEnabled"),unloadMarker(),setTimeout(()=>location.reload(),100)):"true"===localStorage.getItem("markerEnabled")&&loadMarker()}document.addEventListener("DOMContentLoaded",handleMarker);
</script></div><div class="custom-css w-embed"><style>
[data-wf--navbar--variant="dark-theme"] {
    color: var(--swatches--black) !important;
}

[data-wf--navbar--variant="dark-theme"] .divider{
        background-color: #0006 !important;
}

.faq-acc .w-button,
.faq-acc a{
 padding:0px;
 color:inherit;
 background-color:transparent;
 text-decoration:underline;
}

body:has(.humburger-menu.w--open) {
    overflow: hidden;
}

.w-dropdown-toggle:has(.nav-link.w--current) .nav-dd-icon{
    color: var(--swatches--red);
}

.nav-dd-toggle:hover {
    color: var(--swatches--red);
}

.swiper-button-disabled{
 opacity:0.5;
 pointer-events:none;
}

/* Apply "..." after 3 lines of text */
[line-clamp="3"] {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
[acc-head="faq"].open [faq-icon]{
     transform: rotateZ(180deg);
}

[card-img]{
 transition: all 0.4s;
}

[card]:hover [card-img]{
     transform: scale(1.03);
}

[button-icon]:first-child{
    margin-left:-100%;
}

[button]:hover [button-icon]:first-child{
    margin-left:0%;
}

 :root {
    --horizontal-container-padding--desktop: var(--horizontal-container-padding--mobile);
  }
 
@media (max-width:1280px) and (min-width:991px){
 .testimonial-card{
  aspect-ratio: auto !important;
 }
}

</style></div></div><div class="global-embeds-extra"></div></div><main class="main-wrapper"><section hero="section" class="sec_template-project"><div class="bg-wrapper"><div class="project-overlayer"></div><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f347045f35ec945f7a4_68a319257fc9a0ca0751c0b7_688092ebbae18400076f6feb_6127043c3ec09994e1b393a1_Wave6.jpeg" loading="lazy" alt="About Hero " class="global-img"></div><div class="container"><div class="global-grid"><div id="w-node-e8ed7617-5341-20b7-4cd1-8738935309f8-ea141d29" class="grid_item"><h1 class="title5-1">Waverley Water Treatment Plant Upgrade</h1></div></div></div></section><div class="bg-color-white"><section class="sec_about"><div class="container"><h2 class="title1-1">JLE was engaged for the Automation, Electrical and instrumentation required to install a new Water Treatment Plant at Waverley in Taranaki. </h2></div></section><section class="sec-tp-details"><div class="container"><div class="tp-details-grid"><div id="w-node-_0379a8ab-a278-90f1-4ff8-9b82764a7902-ea141d29" class="grid_item"><div class="tp-details-list"><div class="tp-details-item"><div class="title7-1 uppercase">Services</div><div class="w-dyn-list"><div role="list" class="ps-cms-list w-dyn-items"><div role="listitem" class="ps-cms-item w-dyn-item"><div class="body1-1">Electrical</div><div class="body1-1">,</div></div><div role="listitem" class="ps-cms-item w-dyn-item"><div class="body1-1">Instrumentation</div><div class="body1-1">,</div></div></div></div></div><div class="tp-details-item"><div class="title7-1 uppercase">Location</div><div class="body1-1">Taranaki, New Zealand</div></div><div class="tp-details-item"><div class="title7-1 uppercase">Client</div><div class="body1-1">Filtec</div></div><div class="tp-details-item"><div class="title7-1 uppercase">Project team size</div><div class="body1-1">10</div></div><div class="tp-details-item"><div class="title7-1 uppercase">Project duration</div><div class="body1-1">13 months</div></div></div></div><div id="w-node-_9eae49e5-4213-9b9b-b524-83795dbc548f-ea141d29" class="grid_item"><div class="project-richtext w-richtext"><p>JLE’s scope of work included Automation, Electrical Switchboard construction, PLC installation, Design and CAD services and the installation of all electrical equipment and instrumentation. JLE was directly involved in Commissioning the entire plant in conjunction with Filtec Process Engineers and the client. JLE completed over 2,500 hours in this timeframe and had 0 LTI’s and MTI’s. During Covid-19 restrictions, this Project was deemed critical &amp; some stages were completed during Covid-19 restrictions which meant JLE had to adapt to enhanced Health and Safety Plans.</p></div></div></div></div></section><section class="sec_template-feature is-active-01 w-condition-invisible"><div feature-template="" class="container is-active-01"><div class="sec_title"><div class="title7-1">Features</div></div><div class="st-slider"><div class="st-feature-grid"><div id="w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbbd-ea141d29" class="grid_item"><div class="st-feature-content"><div class="feature-title w-dyn-list"><div class="w-dyn-empty"><div>No items found.</div></div></div><div class="feature-desc w-dyn-list"><div class="w-dyn-empty"><div>No items found.</div></div></div></div></div><div id="w-node-cda94514-7c69-52c7-3160-0fbdb1b5dbcf-ea141d29" class="grid_item"><div swiper="st-feature" class="swiper st-feature-swiper w-dyn-list"><div class="w-dyn-empty"><div>No items found.</div></div></div></div></div><div class="st-slider-arrow"><div class="swiper-arrow-wrap"><div swiper-prev="st-feature" class="swiper-arrow"><div class="swiper-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.928933 7.99998L7.33912 1.58979L8.05068 2.30136L3.05035 7.30168L3.24002 7.49135L14.6105 7.53941L14.5684 8.50269L3.25025 8.49702L3.04896 8.69832L8.05646 13.7058L7.34562 14.4167L0.928933 7.99998Z" fill="currentcolor"></path>
</svg></div></div><div swiper-next="st-feature" class="swiper-arrow"><div class="swiper-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0711 8.00002L8.66088 14.4102L7.94932 13.6986L12.9496 8.69832L12.76 8.50865L1.3895 8.46059L1.43165 7.49731L12.7497 7.50298L12.951 7.30168L7.94354 2.29417L8.65438 1.58333L15.0711 8.00002Z" fill="currentcolor"></path>
</svg></div></div></div></div></div></div></section><section class="sec-tp-related"><div class="container"><div class="sec_title"><div class="title7-1">Related Projects</div></div><div class="project-cms-wrapper w-dyn-list"><div role="list" class="project-cms-list is-template w-dyn-items"><div role="listitem" class="project-cms-item w-dyn-item"><div card="" class="project-card"><div class="card-border"></div><div class="project-img-wrap"><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f35386c96037e38ffec_68a31925177dc57b2d3d5988_688092ebf223728fd3008d9a_612585df927f65040f8c4546_RAAF2.jpeg" loading="lazy" card-img="" alt="Williamtown RAAF Explosive Stores Stage 2" class="global-img"></div><div class="project-card-details"><div class="body1-1">Williamtown RAAF Explosive Stores Stage 2</div></div><a href="https://na13-jle.webflow.io/projects/williamtown-raaf-explosive-stores-stage-2" class="project-link w-inline-block"></a></div></div><div role="listitem" class="project-cms-item w-dyn-item"><div card="" class="project-card"><div class="card-border"></div><div class="project-img-wrap"><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f341b6574571b6329af_68a319250885623f166fd3d9_688092ed4be80a010995c784_612586d9675dda1081d1284d_WALTZ.avif" loading="lazy" card-img="" alt="WALZ Rockland Copper Project" class="global-img"></div><div class="project-card-details"><div class="body1-1">WALZ Rockland Copper Project</div></div><a href="https://na13-jle.webflow.io/projects/walz-rockland-copper-project" class="project-link w-inline-block"></a></div></div><div role="listitem" class="project-cms-item w-dyn-item"><div card="" class="project-card"><div class="card-border"></div><div class="project-img-wrap"><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f3495634bf014cd3057_68a31924f0f154c58bf776f7_688092ea1bbcf05a459c8e1d_612581fe8a13df268383b43f_Victoria%2525252520Tunnel%25252525203.jpeg" loading="lazy" card-img="" alt="Victoria Park Tunnel" class="global-img"></div><div class="project-card-details"><div class="body1-1">Victoria Park Tunnel</div></div><a href="https://na13-jle.webflow.io/projects/victoria-park-tunnel-2" class="project-link w-inline-block"></a></div></div><div role="listitem" class="project-cms-item w-dyn-item"><div card="" class="project-card"><div class="card-border"></div><div class="project-img-wrap"><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/687f7ff451d04c5a03b25dea/68a31f33bedc5aa90e70c066_68a31924cf03956075982f84_688092e95fa108bfcfeebf4f_61271b4d16f3fb24966f4ca1_Tuakau4.jpeg" loading="lazy" card-img="" alt="Tuakau Water Treatment Plant - Waikato 50" class="global-img"></div><div class="project-card-details"><div class="body1-1">Tuakau Water Treatment Plant - Waikato 50</div></div><a href="https://na13-jle.webflow.io/projects/tuakau-water-treatment-plant" class="project-link w-inline-block"></a></div></div></div></div></div></section><section class="sec_cta industries-cta"><div class="container"><div class="sec_title"><div class="title7-1">Get in touch</div></div><div class="cta-container"><div class="cta-layer"><div id="w-node-f75ae75c-ff66-c244-4e95-dfa40c1af76f-0c1af76a" class="grid_item"><div class="cta-content"><h2 class="title2-1">Contact us to discuss how JLE can support your next industrial build.</h2><a data-button-type="" button="" data-wf--global-button--variant="white-fill-button" href="https://na13-jle.webflow.io/contact" class="button w-variant-a265ec15-6099-9474-cdb6-4bced896f6f6 w-inline-block"><div class="body1-1">Contact Us</div></a></div></div></div><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687/6892f8c8783ad7d6016c3821_Cta%2520Image.avif" loading="lazy" sizes="100vw" srcset="https://cdn.prod.website-files.com/686294a0804e317b92ff7687/6892f8c8783ad7d6016c3821_Cta%20Image-p-500.avif 500w, https://cdn.prod.website-files.com/686294a0804e317b92ff7687/6892f8c8783ad7d6016c3821_Cta%20Image-p-800.avif 800w, https://cdn.prod.website-files.com/686294a0804e317b92ff7687/6892f8c8783ad7d6016c3821_Cta%20Image.avif 2071w" alt="CTA Banner" class="cta-bg"></div></div></section></div></main><footer class="footer"><div class="footer-logo-wrap"><img src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687/6880f08aef218040b3d4e494_Footer%2520Logo.svg" loading="lazy" alt="Footer Logo" class="footer-big-logo"></div><div class="container"><div class="footer-grid"><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea18713-4ea1870e" class="grid_item"><div class="footer-wrapper"><a href="https://na13-jle.webflow.io/" class="footer-logo w-inline-block"><div class="foter-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 116 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5866 30.0019C7.89215 30.0019 0 28.1453 0 18.388V16.1047H13.447V17.2585C13.447 21.0329 13.8998 21.8689 16.8407 21.897C19.9771 21.897 20.3282 20.7879 20.3282 18.1625V0.00390625H33.7753V18.6903C33.7753 24.6955 31.0065 30.0019 17.5914 30.0019" fill="currentcolor"></path>
<path d="M74.9095 29.1708H41.0859V0H54.533V20.6159H74.9057L74.9095 29.1708Z" fill="currentcolor"></path>
<path d="M115.9 29.1708H80.1133V0H115.9V7.65865H93.5584V10.8537H114.495V18.4356H93.5584V21.515H115.899L115.9 29.1708Z" fill="currentcolor"></path>
</svg></div></a><div class="footer-desc-wrap"><p class="body1-1">Stay updated with JLE news, projects, and industry insights</p></div><div class="subscribe-form-block w-form"><form id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" method="get" class="subscribe-form" data-wf-page-id="688092181b0b702eea141d29" data-wf-element-id="c4e778f2-bfd4-688d-0242-14e74ea1871b"><div form-field="wrap" class="subscribe-field-wrap"><input class="subscribe-input-field w-input" maxlength="256" name="email" data-msg-email="Please enter valid email address" data-name="Email" placeholder="Enter your email" type="email" id="email" data-msg="Email is required" required=""></div><input type="submit" data-wait="Please wait..." class="button-red w-button" value="Subscribe"></form><div class="success-message w-form-done"><div class="body1-1">Thanks! You’ll now receive our latest updates.</div></div><div class="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div><div class="footer-social-wrap"><a href="https://www.linkedin.com/company/jle-holding-limited/" target="_blank" class="f_social-link w-inline-block"><div class="social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentcolor"></path>
</svg></div></a><a href="https://www.facebook.com/JLE-Holdings-1077762665641499/" target="_blank" class="f_social-link w-inline-block"><div class="social-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentcolor"></path>
</svg></div></a></div></div></div><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea1872a-4ea1870e" class="footer-line"></div><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea1872b-4ea1870e" class="footer-line is-2"></div><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea1872c-4ea1870e" class="grid_item"><div class="footer-menu"><div class="footer-menu-holder"><div class="footer-menu-label">Industries</div><div class="footer-links-holder"><a href="https://na13-jle.webflow.io/industries" class="footer-link">All industries</a><div class="footer-cms-wrapper is_top w-dyn-list"><div role="list" class="footer-menu-links w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/infrastructure" class="footer-link">Infrastructure</a></div></div><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/power-generation" class="footer-link">Power Generation</a></div></div><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/industrial-processing" class="footer-link">Industrial Processing</a></div></div><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/water-and-waste-facilities" class="footer-link">Water and Waste facilities</a></div></div><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/food-and-beverage" class="footer-link">Food and Beverage</a></div></div><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/dairy" class="footer-link">Dairy</a></div></div><div role="listitem" class="w-dyn-item"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/industries/petrochemical" class="footer-link">Petrochemical</a></div></div></div></div></div></div><div class="footer-menu-holder"><div class="footer-menu-label">Location</div><div class="footer-links-holder"><div class="location-form-block w-form"><form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="688092181b0b702eea141d29" data-wf-element-id="a204f2cd-5396-e1a0-3907-86ea08664fc5"><div data-hover="false" data-delay="0" fs-selectcustom-element="dropdown" class="location-dd w-dropdown"><div class="location-dd-toggle w-dropdown-toggle"><div class="color-gray">Australia</div><div class="location-icon w-embed"><svg width="100%" height="100%" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.738745 1.00521L5.86689 6.13335L11.0002 1L10.4316 0.431327L6.42557 4.43733L5.8675 4.99707L5.30826 4.43622L1.308 0.435956L0.738745 1.00521Z" fill="currentcolor"></path>
</svg></div></div><nav class="location-dd-navigation w-dropdown-list"><div class="location-dd-list"><a href="#" class="locations">Primary</a><select id="languageSelect" name="field" data-name="Field" fs-list-field="location" class="location-select w-select"><option value="/">Rest of the World</option><option value="/en-au">Australia</option><option value="/en-nz">New Zealand</option><option value="/en-pg">Papua new guinea</option></select></div></nav></div></form><div class="w-form-done"><div>Thank you! Your submission has been received!</div></div><div class="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div></div></div><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea1874a-4ea1870e" class="grid_item"><div class="footer-menu"><div class="footer-menu-holder"><div class="footer-menu-label">About Us</div><div class="footer-menu-links"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/about-us" class="footer-link">Who is JLE</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/our-people" class="footer-link">Our People</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/blog" class="footer-link">Blog</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/projects" class="footer-link">Projects</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/contact" class="footer-link">Contact</a></div></div></div><div class="footer-menu-holder"><a href="https://na13-jle.webflow.io/services" class="footer-menu-label">Services</a><div class="footer-menu-links"><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/services" class="footer-link">All services</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/services#Electrical-Services" class="footer-link">Electrical</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/services#Mechanical-Services" class="footer-link">Mechanical</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/services#Instrumentation-Services" class="footer-link">Instrumentation &amp; Tubing</a></div><div class="footer-link-wrap"><a href="https://na13-jle.webflow.io/services#Steel-Fabrication-Services" class="footer-link">Fabrication</a></div></div></div><div class="footer-menu-holder is-mob"><div class="footer-menu-label">Legal</div><div class="footer-menu-links is-legal"><a href="#" class="footer-link">Terms &amp; Conditions</a><a href="#" class="footer-link">Privacy Policy</a></div></div></div></div><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea18770-4ea1870e" class="grid_item"><div class="footer-menu"><div class="footer-text">JLE ©2025</div></div></div><div id="w-node-c4e778f2-bfd4-688d-0242-14e74ea18774-4ea1870e" class="grid_item"><div class="footer-menu"><a href="https://www.na.studio/" target="_blank" class="na-link">Built by Not Another™</a></div></div></div></div></footer></main><script src="https://d4rkh0rse.github.io/demo-test/assets/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript"></script><script src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/686294a0804e317b92ff7687/js/na13-jle.dcff56d0.5e6dd6b835ea5b2d.js" type="text/javascript"></script><script src="https://d4rkh0rse.github.io/demo-test/assets/cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js" type="text/javascript"></script><noscript><img height="1" width="1" style="display:none"
  src=https://www.facebook.com/tr?id=5749317588493823&ev=PageView&noscript=1
/></noscript>

<noscript><img height="1" width="1" style="display:none"
  src=https://www.facebook.com/tr?id=759553742430094&ev=PageView&noscript=1
/></noscript>

<script type="text/javascript">
_linkedin_partner_id = "4537924";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=4537924&fmt=gif" />
</noscript>

<script src="https://d4rkh0rse.github.io/demo-test/assets/cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
<script src="https://d4rkh0rse.github.io/demo-test/assets/vgm3l2.csb.app/na-form-validation.js"></script>
<script src="https://d4rkh0rse.github.io/demo-test/assets/vgm3l2.csb.app/jle/global.js"></script>
<script>
[...document.querySelectorAll("[data-copyright-year]")].forEach(el => el.textContent = new Date().getFullYear());
</script>

<script>
document.addEventListener("DOMContentLoaded",()=>{let t=encodeURIComponent(window.location.origin);[...document.querySelectorAll("[data-not-another]")].forEach(e=>{let n=e.getAttribute("data-not-another")||"client-footer";e.href=\`https://na.studio/?utm_source=\${t}&utm_medium=referral&utm_campaign=\${encodeURIComponent(n)}&utm_content=na13\`;e.target="_blank"})});
</script>

<!--script>
  window.markerConfig = {
    project: '688e46fc8c2d4ceda5975a3f', 
    source: 'snippet'
  };

  !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","clearReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
</script-->



<script src="https://d4rkh0rse.github.io/demo-test/assets/cdn.jsdelivr.net/gh/himanshu201209/javascript-map-api@main/map-embed.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("languageSelect");
  const currentPath = window.location.pathname.toLowerCase();

  // Auto-select the current language based on URL
  if (currentPath.startsWith("/en-au")) {
    select.value = "/en-au";
  } else if (currentPath.startsWith("/en-nz")) {
    select.value = "/en-nz";
  } else if (currentPath.startsWith("/en-pg")) {
    select.value = "/en-pg";
  } else {
    select.value = "/";
  }

  // Handle dropdown change (redirect)
  select.addEventListener("change", function () {
    const selectedLang = this.value;
    let newPath = currentPath;

    // Remove existing language prefixes
    newPath = newPath
      .replace(/^\\/en-au/, "")
      .replace(/^\\/en-nz/, "")
      .replace(/^\\/en-pg/, "");

    // Build new URL (keep subpage)
    let finalPath = selectedLang === "/" ? newPath || "/" : selectedLang + newPath;

    // Redirect to full new URL
    window.location.href = window.location.origin + finalPath;
  });
});
</script><script src="https://d4rkh0rse.github.io/demo-test/assets/unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script src="https://d4rkh0rse.github.io/demo-test/assets/vgm3l2.csb.app/jle/featureslider.js"></script>


</body></html>`;
    
    // Scripts inserted via innerHTML do not execute. Re-create them!
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      // Copy all attributes
      Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
      // Copy inline script content
      newScript.textContent = oldScript.textContent;
      // Replace the old script with the new one
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });

    document.body.appendChild(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHTML);
  } else {
    injectHTML();
  }
})();
