import {useQuery} from '@tanstack/react-query';
import {Daum} from './useBlockQuery';

const PEERS = ['143.244.188.237', '167.99.210.123', '188.166.189.185'];

export interface BlocksData {
  data: Daum[];
  status: string;
}

export function useBlocksQuery() {
  return useQuery<BlocksData>(['blockData'], () =>
    fetch(`http://${PEERS[0]}:8000/blocks/`).then((res) => res.json()),
  );
}