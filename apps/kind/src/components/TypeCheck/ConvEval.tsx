import {CompareCodeBlock} from '../CompareCodeBlock';

const kind2 = `
List (t: Type) : Type
  Cons <t: Type> (head: t) (tail: List t) : List t
  Nil <t: Type> : List t
  
Fold <t: Type> (list: List t) <p: Type> (cons: t -> p -> p) (nil: p) : p
Fold t (Nil u)       p c n = n
Fold t (Cons u x xs) p c n = c x (Fold xs c n)

Range (n: U60) (list: List U60) : List U60
Range 0 xs = xs
Range n xs =
  let m = (- n 1)
  Range m (Cons m xs)

Main (n: U60) {
  let size = (* 1000000 n)
  let list = Range size Nil
  Fold list (a => b => (+ a b)) 0
}
`;

const haskell = `
import Data.Word
import System.Environment

data List a = Nil | Cons a (List a)

fold :: List a -> (a -> r -> r) -> r -> r
fold Nil         c n = n
fold (Cons x xs) c n = c x (fold xs c n)

range :: Word64 -> List Word64 -> List Word64
range 0 xs = xs
range n xs =
  let m = n - 1
  in range m (Cons m xs)

main :: IO ()
main = do
  n <- read.head <$> getArgs :: IO Word64
  let size = 1000000 * n
  let list = range size Nil
  print $ fold list (+) 0
`;

export function ConvEval() {
  return <CompareCodeBlock haskell={haskell} kind2={kind2} title="List Fold" />;
}
