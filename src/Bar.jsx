import * as React from 'react';
import Foo from './Foo';

<Foo/>; // error: Type '{}' is not assignable to type '{ a: string; b: number; }'
<Foo a='a' b={0}/>; // OK
<Foo a='a' b={0} c={20}/>; // error: Property 'c' does not exist on type 'IntrinsicAttributes ...