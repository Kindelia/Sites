import {convertBase64ToText} from '../../utils';
import {CompareCodeBlock} from '../CompareCodeBlock';

const kind2 = 'Not found';

const haskell =
  'ey0jIExBTkdVQUdFIFJhbmtOVHlwZXMgIy19DQoNCmltcG9ydCBEYXRhLldvcmQNCmltcG9ydCBTeXN0ZW0uRW52aXJvbm1lbnQNCg0KLS0gVGhlIFNjb3R0LUVuY29kZWQgQml0cyB0eXBlDQpuZXd0eXBlIEJpdHMgPSBCaXRzIHsgZ2V0IDo6IGZvcmFsbCBhLiBhIC0+IChCaXRzIC0+IGEpIC0+IChCaXRzIC0+IGEpIC0+IGEgfQ0KZW5kICA9IEJpdHMgKFxlIC0+IFxvIC0+IFxpIC0+IGUpDQpiMCBwID0gQml0cyAoXGUgLT4gXG8gLT4gXGkgLT4gbyBwKQ0KYjEgcCA9IEJpdHMgKFxlIC0+IFxvIC0+IFxpIC0+IGkgcCkNCg0KLS0gQXBwbGllcyBgZmAgYHhzYCB0aW1lcyB0byBgeGANCmFwcCA6OiBCaXRzIC0+IChhIC0+IGEpIC0+IGEgLT4gYQ0KYXBwIHhzIGYgeCA9DQogIGxldCBlID0gXGYgLT4gXHggLT4geA0KICAgICAgbyA9IFxwIC0+IFxmIC0+IFx4IC0+IGFwcCBwIChcayAtPiBmIChmIGspKSB4DQogICAgICBpID0gXHAgLT4gXGYgLT4gXHggLT4gYXBwIHAgKFxrIC0+IGYgKGYgaykpIChmIHgpDQogIGluIGdldCB4cyBlIG8gaSBmIHgNCg0KLS0gSW5jcmVtZW50cyBhIEJpdHMgYnkgMQ0KaW5jIDo6IEJpdHMgLT4gQml0cw0KaW5jIHhzID0gQml0cyAkIFxleCAtPiBcb3ggLT4gXGl4IC0+DQogIGxldCBlID0gZXgNCiAgICAgIG8gPSBpeA0KICAgICAgaSA9IFxwIC0+IG94IChpbmMgcCkNCiAgaW4gZ2V0IHhzIGUgbyBpDQoNCi0tIEFkZHMgdHdvIEJpdHMNCmFkZCA6OiBCaXRzIC0+IEJpdHMgLT4gQml0cw0KYWRkIHhzIHlzID0gYXBwIHhzIChceCAtPiBpbmMgeCkgeXMNCg0KLS0gTXVscyB0d28gQml0cw0KbXVsIDo6IEJpdHMgLT4gQml0cyAtPiBCaXRzDQptdWwgeHMgeXMgPQ0KICBsZXQgZSA9IGVuZA0KICAgICAgbyA9IFxwIC0+IGIwIChtdWwgcCB5cykNCiAgICAgIGkgPSBccCAtPiBhZGQgeXMgKGIwIChtdWwgcCB5cykpDQogIGluIGdldCB4cyBlIG8gaQ0KDQotLSBDb252ZXJ0cyBhIEJpdHMgdG8gYW4gVTMyDQp0b1UzMiA6OiBCaXRzIC0+IFdvcmQzMg0KdG9VMzIgeXMgPQ0KICBsZXQgZSA9IDANCiAgICAgIG8gPSBccCAtPiB0b1UzMiBwICogMiArIDANCiAgICAgIGkgPSBccCAtPiB0b1UzMiBwICogMiArIDENCiAgaW4gZ2V0IHlzIGUgbyBpDQoNCi0tIENvbnZlcnRzIGFuIFUzMiB0byBhIEJpdHMNCmZyb21VMzIgOjogV29yZDMyIC0+IFdvcmQzMiAtPiBCaXRzDQpmcm9tVTMyIDAgaSA9IGVuZA0KZnJvbVUzMiBzIGkgPSBmcm9tVTMyUHV0IChzIC0gMSkgKGkgYG1vZGAgMikgKGkgYGRpdmAgMikgd2hlcmUNCiAgZnJvbVUzMlB1dCBzIDAgaSA9IGIwIChmcm9tVTMyIHMgaSkNCiAgZnJvbVUzMlB1dCBzIDEgaSA9IGIxIChmcm9tVTMyIHMgaSkNCg0KLS0gU3F1YXJlcyAobiAqIDEwMGspDQptYWluIDo6IElPICgpDQptYWluID0gZG8NCiAgbiA8LSByZWFkLmhlYWQgPCQ+IGdldEFyZ3MgOjogSU8gV29yZDMyDQogIGxldCBhID0gZnJvbVUzMiAzMiAoMTAwMDAwICogbikNCiAgbGV0IGIgPSBmcm9tVTMyIDMyICgxMDAwMDAgKiBuKQ0KICBwcmludCAkIHRvVTMyIChtdWwgYSBiKQ==';

export function OptimalLambdaArithmetic(): JSX.Element {
  return (
    <CompareCodeBlock
      haskell={convertBase64ToText(haskell)}
      kind2={kind2}
      title="Optimal Lambda Arithmetic"
    />
  );
}
