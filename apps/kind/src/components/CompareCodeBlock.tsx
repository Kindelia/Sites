import {useState} from 'react';
import {CopyBlock, solarizedLight} from 'react-code-blocks';
import {ArrowIcon, Text} from 'ui';

export type CompareCodeBlockProps = {
  kind2: string;
  haskell: string;
  title: string;
};

export function CompareCodeBlock(props: CompareCodeBlockProps) {
  const {kind2, haskell, title} = props;

  const [showHaskell, setShowHaskell] = useState(false);

  return (
    <div className="flex min-h-[350px] flex-col items-center">
      <Text className="mb-11">{title}</Text>
      <div className="min-h-[350px]">
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
            <ArrowIcon className="h-12 w-12 text-minHeight" />
          </div>
        </div>
        <div className="flex flex-col border rounded-b-3xl border-mineshaft">
          <CopyBlock
            customStyle={{
              borderRadius: '0px',
              width: '350px',
              fontSize: '12px',
              minHeight: '250px',
              maxHeight: '250px',
              overflow: 'scroll',
            }}
            language={showHaskell ? 'haskell' : 'text'}
            text={showHaskell ? haskell : kind2}
            codeBlock
            theme={solarizedLight}
            showLineNumbers={false}
          />
          <img
            src="https://github.com/Kindelia/Functional-Benchmarks/blob/master/image/runtime_list_fold_.png?raw=true"
            className="w-[350px] border-b-2 rounded-b-3xl"
          />
        </div>
      </div>
    </div>
  );
}
