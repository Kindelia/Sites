import {Text} from 'ui';

export type FeaturedCardProps = {
  key?: string | number;
};

export function FeaturedCard(props: FeaturedCardProps): JSX.Element {
  const {key} = props;

  return (
    <div key={key} className="h-[441px] w-[326px] rounded-md bg-white p-8">
      <div className="flex items-center justify-between">
        <Text className="text-mineshaft text-sm">Rodrigo O.</Text>
        <div className="flex items-center gap-2">
          {/* <FiHeart color="rgb(209, 213,219)" fontSize={14} /> */}
          <Text className="text-xs text-gray-300">250</Text>
        </div>
      </div>
      <Text className="text-xs text-gray-300">2D Pixel Art Game</Text>
      <div className="bg-mineshaft mt-4 h-64 w-64 rounded-lg"></div>
    </div>
  );
}
