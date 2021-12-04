type LoaderProps = {
  progress: number;
};

export const Loader = ({ progress }: LoaderProps) => {
  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white">
      {Math.floor(progress)}%
    </div>
  );
};
