# css-class-tool
a css class tool.

# Install
```
npm css-class-tool
```

# Usage & Api
```html
<style>
.ht.selected{
	background:lavender;
}
</style>

<script>
css_class_tool = require("css-class-tool");
</script>

<span class='ht selected'>css .ht.selected style sample</span>

<div>
<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>

<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	css_class_tool([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected',null,'ht');
	css_class_tool([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'',null,'ht');"
></input>toggle by set()</label><br>
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	css_class_tool.setEl('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],
	this.checked?[chs[1],chs[3]]:[chs[0],chs[2]],null,'ht');"
></input>toggle by setEl()</label><br>
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	css_class_tool.setEl('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);"
></input>setEl() toggle	//may fail at firstly click</label><br>
</div>;

```
