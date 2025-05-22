export interface CardProps {
  title: string;
  description: string;
  author: string;
  days: number;
  likes: number;
  isRunningOnZero?: boolean;
  gradientColors: string;
  icon?: string;
}

export function Card({
  title,
  description,
  author,
  days,
  likes,
  isRunningOnZero = false,
  gradientColors,
  icon
}: CardProps) {
  return (
    <div className={`card ${gradientColors} h-full flex flex-col card-hover-effect`}>
      <div className="p-4 flex justify-between items-start">
        <div className="text-xs text-white font-medium bg-black/20 px-2 py-1 rounded-md">
          {isRunningOnZero ? "Running on ⚡ ZERO" : "Running"}
        </div>
        <div className="flex items-center text-white">
          <span className="mr-1">❤️</span>
          <span className="text-sm">{likes}</span>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          {icon && <span className="mr-2">{icon}</span>}
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
      
      <div className="p-4 bg-black/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs mr-2">
              {author.charAt(0).toUpperCase()}
            </div>
            <span className="text-white text-sm">{author}</span>
          </div>
          <span className="text-white/70 text-xs">{days} days ago</span>
        </div>
      </div>
    </div>
  );
}
