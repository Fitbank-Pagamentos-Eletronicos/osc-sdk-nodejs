import * as Collections from 'typescript-collections';
import { OSC } from '../../index';
import { Scopes } from '../../src/domains/enums';

const testing = async () => {
  const testingOSC = new OSC(
    'name',
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    Scopes.api_external
  );
  // console.log(testingOSC.auth());
  await testingOSC.auth();
  testingOSC;
  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    'Feijoada',
    Scopes.api_external
  );

  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    'Feijoada 1',
    Scopes.api_external
  );
  OSC.createInstance(
    '4dbe3aa7-8ce9-43a4-9298-73b700e712bb',
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8',
    'Arroz',
    Scopes.api_external
  );
  const instances = new Collections.LinkedList<OSC>();
  instances.add(OSC.getInstance('arroz'));
  instances.add(OSC.getInstance('Feijoada'));
  instances.forEach((e) => console.log(e));
  console.log(await testingOSC.getToken());
  // console.log(OSC.exist('Arroz'));
  // await testingOSC.newToken();
  // console.log(await testingOSC.getToken());
  // console.log(testingOSC.client_id);
};
testing();
