import * as F from '@fxts/core';
import {useState} from 'react';

enum Category {
  ALL_FILTERS = 'All Filters',
  ADDRESSES = 'Addresses',
  TOKENS = 'Tokens',
  NAME_TAGS = 'Name Tags',
  LABELS = 'Labels',
  WEBSITES = 'Websites',
  BLOCKS = 'Blocks',
  FUNCTIONS = 'Functions',
  CONTRACTS = 'Contracts',
}

export function Search() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.ALL_FILTERS,
  );

  const options = F.pipe(
    F.entries(Category),
    F.map(([key, value]) => (
      <option
        selected={selectedCategory === value}
        value={key}
        key={key}
        onSelect={() => setSelectedCategory(Category[key])}
      >
        {value}
      </option>
    )),
    F.toArray,
  );

  return (
    <div className="flex h-[45px] w-[620px] items-center rounded-md shadow-md shadow-black">
      <div className="bg-mineshaft flex w-[300px] items-center justify-center gap-2">
        {
          <select
            className="text-springwood font-inter border-none bg-transparent outline-none"
            defaultValue={selectedCategory}
          >
            {options}
          </select>
        }
      </div>
      <input
        className="bg-springwood font-inter placeholder:font-inter flex h-full w-full px-4 outline-none"
        placeholder="Search Transactions, Blocks, Programs..."
      />
      <div className="bg-mineshaft flex w-24 items-center justify-center">
        {/* <IoIosSearch fontSize={25} /> */}
      </div>
    </div>
  );
}
