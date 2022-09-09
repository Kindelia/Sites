import {useState} from 'react';
import {CopyBlock, dracula} from 'react-code-blocks';
import {Text} from 'ui';

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
      <div className="min-h-[450px] border-2 border-black">
        <div className="flex flex-row items-center justify-around">
          <div
            className="bg-mineshaft h-[41px] w-full  text-center"
            onClick={() => setShowHaskell(false)}
          >
            <Text className="text-xl text-white">Kind2</Text>
          </div>
          <div
            className="bg-springwood border-mineshaft h-[41px] w-full border text-center"
            onClick={() => setShowHaskell(true)}
          >
            <Text className="text-xl text-white">Haskell</Text>
          </div>
        </div>

        <div className="flex flex-row">
          <CopyBlock
            language={'text'}
            text={kind2}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          <CopyBlock
            language={'haskell'}
            text={haskell}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </div>
        {/* <img src="https://github.com/Kindelia/Functional-Benchmarks/blob/master/image/runtime_list_fold_.png?raw=true"  /> */}
      </div>
    </div>
  );
}
