import { CharacterList } from "../../interfaces/ListInterface";

interface ISearchResult {
  characterSelected?: { fullName: string; img: string };
  className?: string;
  query: string;
  characters: CharacterList[]
}

export const SearchResult = ({
  characterSelected,
  className,
  query,
  characters
}: ISearchResult) => {
  return (
    <div className={className}>
      {characters.length > 0 && query !== "" && (
        <>
          {characterSelected?.fullName !== "" && characterSelected?.img !== "" && (
            <div className="flex flex-col items-center">
              <span className="text-lg text-[#333333]">Character selected</span>
              <div className="flex flex-col w-full items-center">
                <span className="text-lg text-[#333333]">
                  {characterSelected?.fullName}
                </span>
                <img
                  src={characterSelected?.img}
                  alt=""
                  className="w-full object-cover mt-2 rounded shadow-lg shadow-black-500/50"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
