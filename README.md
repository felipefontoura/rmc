# RMC - Remove Class by Cookie

# Install NPM packages

```
$ npm install
```

# Build and Dist

```
$ grunt
```

# Using

```html
<script type="text/javascript">
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.async = true;
  mf.src = "//yourserver/path/rmc.min.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();

rmc('cookie-name', 'class-to-remove');
</script>
```
