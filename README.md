# careless

LESS rendering as a service.  Demo is deployed at [careless.duostack.net](http://careless.duostack.net).

## GET /

### Returns

Returns this help page.

## POST /render

### Params

Returns the rendered CSS.

**(body)** - (required) your LESS stylesheet

### Example 1

Post a string to `http://careless.duostack.net/render`

    $ curl -d ".class { width: 1 + 1 }" "http://careless.duostack.net/render"

### Example 2

Given a LESS file,

    // styles.less
    @color: #4D926F;
    
    #header {
      color: @color;
    }
    h2 {
      color: @color;
    }

post the file:

    $ curl -d @style.less "http://careless.duostack.net/render"
    
    // outputs:
    
    #header {
      color: #4D926F;
    }
    h2 {
      color: #4D926F;
    }
