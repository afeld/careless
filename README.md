# careless

[LESS](http://lesscss.org/) CSS rendering as a service, built in NodeJS.  Demo is deployed at [careless.duostack.net](http://careless.duostack.net).

## GET /

Returns this help page.

## POST /render

Returns the rendered CSS.

### Params

**(body)** - (required) your LESS stylesheet

### Example 1

Post some LESS a string to `http://careless.duostack.net/render`

    $ curl -d ".class { width: 1 + 1 }" "http://careless.duostack.net/render"
    
    /* outputs: */
    
    .class {
      width: 2;
    }

### Example 2

Given a LESS file,

    // style.less
    
    @color: #4D926F;
    
    #header {
      color: @color;
    }
    h2 {
      color: @color;
    }

post the file:

    $ curl -d @style.less "http://careless.duostack.net/render"
    
    /* outputs: */
    
    #header {
      color: #4D926F;
    }
    h2 {
      color: #4D926F;
    }
