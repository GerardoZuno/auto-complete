interface ISearch {
  onChange?: (e: any) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  titleClassName?: string
  onKeyPress?: (e: any) => void;
}

export const Search = (params: ISearch) => {
  return (
    <>
      <h1 className={params.titleClassName}>Search your favorite Character</h1>
      <input {...params}/>
    </>
  );
};
