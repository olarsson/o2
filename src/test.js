var expect = require('chai').expect,
    $ = require('jquery'),
    jsdom = require('../node_modules/jsdom');

var script = require('./index.js');

var html = `
<body>
  <div class="domelem"></div>
  <div class="domelem"></div>
  <div class="test first">
    <div class="a"></div>
  </div>
  <div class="domelem"></div>
  <div class="test last">
    <div class="row">
      <div class="col-2 a"></div>
      <div class="col-2 b"></div>
    </div>
  </div>
  <div class="domelem"></div>
  <script src="./index.js"></script>
</body>
`;

//console.log(window.el);


global.document = new jsdom.JSDOM(html);
global.window = document.defaultView;

window.el = script.el;

function incrementer(i) {
  $('div').text(i + 1);
}

describe('Hello World', function () {
/*     beforeEach(function () {
        $('body').html('<div>1</div>');
    }); */
    it('should start with 1', function () {
        el('body').o.addClass('oneA');
        expect($('body').hasClass('oneA'));
    });
/*     it('should increment to 6', function () {
        incrementer(5);
        expect($('div').text()).equal('6');
    });
    it('should start with 1', function () {
        expect($('div').text()).equal('1');
    }); */
});

/* var assert = require('assert');
var index = require('./index.js');

it('should return -1 when the value is not present', function () {
  assert.equal(
    el('body').o.hasClass('oneA'),
    el('body').o.addClass('oneA')
  );
});
 */