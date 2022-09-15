import {useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {VideoPlayerIcon} from './Icon/VideoPlayerIcon';

export type VideoProps = {
  embed: string;
};

export function Video(props: VideoProps) {
  const {embed} = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const className = 'w-[500px] h-[350px] bg-gainsboro rounded-lg shadow-2xl';

  const children = !isPlaying ? (
    <VideoPlayerIcon className="h-20 w-20" />
  ) : (
    <iframe
      className={className}
      src={`https://www.youtube.com/embed/${embed}?autoplay=1`}
    />
  );

  return (
    <div
      className={twMerge('flex items-center justify-center', className)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {children}
    </div>
  );
}
