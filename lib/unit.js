/*
  File: jstest.Unit()
    Unit Test for JavaScript

    Author: Joshaven Potter <yourtech@gmail.com>

    Creation date:      Aug-11-09

    Last modification:  today
    
    Parameters:
      src - tests or path to test file
    
*/

Unit = function(){
  // internal private variables
  var self      = this,   // reference to test's global 'this'
      config    = {},     // customization object
      internal  = {       // cache object for self.cached()
        queue: [],          // test storage
        results: {          // test resutls
          success:[],
          fail:[],
          pending:[]
        }
      };
      
      
  // public (privilaged) methods
  self.cached = function(key, val){
    return val === undefined ? cache[key] : cache[key] = val;
  };
  
  self.push = function(result, actual, expected, message) {
    message = message || (result ? "okay" : "failed");
    // QUnit.ok( result, result ? message + ": " + expected : message + ", expected: " + jsDump.parse(expected) + " result: " + jsDump.parse(actual) );
    results[result].push()
  };
};

/*
  Function: Result()
    
  
  Parameters:
    status - Boolean
    actual - output generated
    expected - expected output
    message - Optional explanation
    
  Return:
    Result Object
  
  Example:
    r = new Test.Result(true, 'Hello World', 'Hello World', 'Example string comparison')
*/
Unit.Result = function(status, actual, expected, message){
  
};

/*
Tests should have a queue
Test queues should be runnable
Tests should have results
Tests that are run should be removed from the queue and the result accumulated

Tests could check for & report namespace polution: for( var key in $(global_namespace) ){...}

Tests could be grouped in modules
/*

/*

  // Specify the number of expected assertions to gurantee that failed test (no assertions are run at all) don't slip through.
  function expect(asserts) {config.expected = asserts;
  
  // Asserts true.}
  function ok(a, msg) {
  	QUnit.log(a, msg);

  	config.assertions.push({
  		result: !!a,
  		message: msg
  	});
  }
  
  // Asserts that two arrays are the same
  function isSet(a, b, msg) {
  	function serialArray( a ) {
  		var r = [];

  		if ( a && a.length )
  	        for ( var i = 0; i < a.length; i++ ) {
  	            var str = a[i].nodeName;
  	            if ( str ) {
  	                str = str.toLowerCase();
  	                if ( a[i].id )
  	                    str += "#" + a[i].id;
  	            } else
  	                str = a[i];
  	            r.push( str );
  	        }

  		return "[ " + r.join(", ") + " ]";
  	}
  	var ret = true;
  	if ( a && b && a.length != undefined && a.length == b.length ) {
  		for ( var i = 0; i < a.length; i++ )
  			if ( a[i] != b[i] )
  				ret = false;
  	} else
  		ret = false;
  	QUnit.ok( ret, !ret ? (msg + " expected: " + serialArray(b) + " result: " + serialArray(a)) : msg );
  }
  
  // Asserts that two objects are equivalent
  function isObj(a, b, msg) {
  	var ret = true;

  	if ( a && b ) {
  		for ( var i in a )
  			if ( a[i] != b[i] )
  				ret = false;

  		for ( i in b )
  			if ( a[i] != b[i] )
  				ret = false;
  	} else
  		ret = false;

      QUnit.ok( ret, msg );
  }
  
  // Checks that the first two arguments are equal, with an optional message.
  function equals(actual, expected, message) {
  	push(expected == actual, actual, expected, message);
  }
  
*/
