[`Adam`, `has`, `a`, `dog`, `The`, `name`, `of`, `the`, `is`, `also`].map(val => global[val] = arg => arg ? `${val} ${arg}` : `${val}.`);

Adam=_=>'Adam has a dog.';The=_=>'The name of the dog is also Adam.'
has=a=dog=name=of=the=is=also=_=>_

function Adam() {return ['Adam',has(),a(),dog()].join(' ')+'.'}
function has() {return 'has'}
function a() {return 'a'}
function dog() {return 'dog'}
function The() {return ['The',name(),of(),the(),dog(),is(),also(),'Adam'].join` `+'.'}
function name() {return 'name'}
function of() {return 'of'}
function the() {return 'the'}
function is() {return 'is'}
function also() {return 'also'}