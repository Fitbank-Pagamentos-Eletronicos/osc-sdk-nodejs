import * as Collections from 'typescript-collections';
import { OSC } from '../../index';
import { Scopes } from '../../src/domains/enums';

const testing = async () => {
  const testingOSC = new OSC(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external,
    'Name'
  );

  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external,
    'Beans'
  );

  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external,
    'Pasta'
  );

  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external,
    'Rice'
  );

  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external,
    ' EstA é UMA strINg dE TESTE !@#$%¨&*()_-+={}[]ºª§¬¢£³²¹<> 0123456789 ÁÉÍÓÚ ÂÊÎÔÛÇç '
  ); //ThIs iS a TesT sTrInG
  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external
  );
  const instances = new Collections.LinkedList<OSC>();
  instances.add(OSC.getInstance('Rice')!);
  instances.add(OSC.getInstance('Beans')!);
  instances.add(OSC.getInstance('Pasta')!);
  instances.add(OSC.getInstance()!);

  // Here you can try to find an instance that doesn't exist. So will return an error.
  // instances.add(OSC.getInstance('wrong name')!);

  instances.forEach((e) => console.log(e));
  console.log(await testingOSC.getToken());
  //Auth already being tested on getToken
};
testing();
