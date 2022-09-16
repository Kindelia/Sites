import {Button, Text, Video} from 'ui';

import {ListFold} from '../components/Runtime/ListFold';
import {OptimalLambdaArithmetic} from '../components/Runtime/OptimalLambdaArithmetic';
import {ParallelQuicksort} from '../components/Runtime/ParallelQuicksort';
import {Asymptotics} from '../components/TypeCheck/Asymptotics';
import {ConvEval} from '../components/TypeCheck/ConvEval';
import {Stic} from '../components/TypeCheck/Stic';

export type HomeProps = {};

export default function Home(_props: HomeProps): JSX.Element {
  return (
    <>
      <main className="bg-springwood flex h-[93vh] flex-row items-center justify-around">
        <div className="flex h-80 w-[529px] flex-col">
          <Text className="text-mineshaft font-sans text-4xl font-bold">
            A Kindness Proof
          </Text>
          <Text className="text-taupegray text-xl leading-10">
            Kind2 is a pure functional, lazy, non-garbage-collected,
            general-purpose, dependently typed programming language focusing on
            performance and usability.
          </Text>
          <div className="mt-auto flex gap-4">
            <Button>Documentation</Button>
            <Button variant="secondary" className="px-8 font-bold">
              Join us
            </Button>
          </div>
        </div>
        <Video embed="QJJYpsA5tv8" />
      </main>
      <main className="flex flex-col gap-8 bg-gainsboro2 px-44 py-44">
        <Text className="text-mineshaft font-sans text-4xl font-bold">
          Benchmarks
        </Text>
        <Text className="text-taupegray text-base font-semibold">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Text>
        <Text className="text-mineshaft border-b border-[#87878A] pb-3 text-2xl font-bold">
          Runtime
        </Text>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <ListFold />
          <ParallelQuicksort />
          <OptimalLambdaArithmetic />
        </div>
        <Text className="text-mineshaft border-b border-[#87878A] pb-3 text-2xl font-bold">
          Type-Check
        </Text>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <Asymptotics />
          <Stic />
          <ConvEval />
        </div>
      </main>
    </>
  );
}
