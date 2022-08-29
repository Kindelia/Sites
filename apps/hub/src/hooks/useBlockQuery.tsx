import {useQuery} from '@tanstack/react-query';

const KINDELIA_URL = 'http://143.110.233.192:8000';

export interface Daum {
  block: Block;
  content: any[];
  hash: string;
  height: number;
  results: any[];
}

export interface Block {
  body: number[];
  meta: string;
  prev: string;
  time: string;
}

export interface BlockData {
  data: Daum;
  status: string;
}

export function useBlockQuery({hash}: {hash: string}) {
  return useQuery<BlockData, unknown, {hash: string}>(['blockData'], () =>
    fetch(`${KINDELIA_URL}/blocks/${hash}`).then((res) => res.json()),
  );
}
