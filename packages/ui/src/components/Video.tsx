import clsx from "clsx";
import { useState } from "react";
import { VideoPlayerIcon } from "./Icon/VideoPlayerIcon";

export type VideoProps = {
  embed: string;
};

export function Video(props: VideoProps) {
  const { embed } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const className = "w-[500px] h-[350px] bg-[#DDDCDA] rounded-lg";

  const children = !isPlaying ? (
    <VideoPlayerIcon className="w-20 h-20" />
  ) : (
    <iframe
      className={className}
      src={`https://www.youtube.com/embed/${embed}?autoplay=1`}
    />
  );

  return (
    <div
      className={clsx("flex justify-center items-center", className)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {children}
    </div>
  );
}
