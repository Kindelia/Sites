import {useQuery} from '@tanstack/react-query';
import { Daum } from './useBlockQuery';

const KINDELIA_URL = 'http://143.110.233.192:8000';

export interface BlocksData {
  data: Daum[]
  status: string
}

export function useBlocksQuery() {
  return useQuery<BlocksData>(['blockData'], () =>
    fetch(`${KINDELIA_URL}/blocks/`).then((res) => res.json()),
  );
}
