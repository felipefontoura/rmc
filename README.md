# RMC - Remove Class by Cookie

## Install NPM packages

```
$ npm install
```

## Build and Dist

```
$ grunt
```

## Using

Copy and paste:

```html
<script type="text/javascript">
(function() {
  var r = document.createElement("script");
  r.type = "text/javascript"; r.async = true;
  r.src = "//yourserver/path/rmc.min.js";
  document.getElementsByTagName("head")[0].appendChild(r);
})();

rmc('cookie-name', 'class-to-remove');
</script>
```

## Author

Copyright 2016 (c) Felipe Fontoura.

## License

RMC is released under the [MIT License](http://www.opensource.org/licenses/MIT).
