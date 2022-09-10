import {useState} from 'react';
import {CopyBlock, solarizedLight} from 'react-code-blocks';
import {ArrowIcon, Modal, Text} from 'ui';

export type CompareCodeBlockProps = {
  kind2: string;
  haskell: string;
  title: string;
};

export function CompareCodeBlock(props: CompareCodeBlockProps) {
  const {kind2, haskell, title} = props;

  const [showHaskell, setShowHaskell] = useState(false);

  return (
    <div className="flex min-h-[450px] flex-col items-center">
      <Text className="mb-11">{title}</Text>
      <div className="min-h-[450px]">
        <div className="flex flex-row items-center justify-around">
          <div
            className="bg-mineshaft flex h-[41px] w-full items-center justify-center rounded-t-xl"
            onClick={() => setShowHaskell(false)}
          >
            <Text className="text-base text-white">Kind</Text>
          </div>
          <div
            className="bg-springwood border-mineshaft flex h-[41px] w-full items-center justify-center rounded-t-xl border"
            onClick={() => setShowHaskell(true)}
          >
            <Text className="text-mineshaft text-base">(cod.outra)</Text>
            <ArrowIcon className="h-8 w-8" />
          </div>
        </div>

        <div className="flex flex-col">
          <CopyBlock
            customStyle={{
              borderRadius: '0px',
              width: '400px',
              fontSize: '12px',
            }}
            language={showHaskell ? 'haskell' : 'text'}
            text={showHaskell ? haskell : kind2}
            codeBlock
            theme={solarizedLight}
            showLineNumbers={false}
          />
          <img
            src="https://github.com/Kindelia/Functional-Benchmarks/blob/master/image/runtime_list_fold_.png?raw=true"
            className="w-[400px]"
          />
        </div>
        <Modal />
      </div>
    </div>
  );
}
