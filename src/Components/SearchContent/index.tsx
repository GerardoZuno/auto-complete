import { CharacterList } from "../../interfaces/ListInterface";
import { NotFound } from "../NotFound";

interface ISearchContent {
  className?: string;
  characters: CharacterList[];
  chooseCharacter: (character: string, img: string) => void;
  query: string;
  showOptions: boolean;
}

export const SearchContent = ({
  className,
  characters,
  chooseCharacter,
  query,
  showOptions,
}: ISearchContent) => {
  return (
    <div className={className}>
      {showOptions && (
        <>
          {characters.length > 0 && (
            <>
              {characters.slice(0, 5).map((character, index) => (
                <div className="list" key={character.name}>
                  <button
                  className="w-full"
                    onClick={() =>
                      chooseCharacter(character.name, character.image)
                    }
                  >
                    <h2
                      style={
                        index === 0
                          ? { color: "#0795D3" }
                          : { color: "#333333" }
                      }
                      className={"flex gap-2 w-full bg-[#FCFCFC] hover:bg-[#F0F0F0] flex items-center"}
                    >
                      <span>{index + 1}:</span>
                      <span>{character.name}</span>
                      <img src={character.image} alt='' className="object-cover w-[18px] h-[18px] rounded-full"/>
                    </h2>
                    <hr className="bg-[#000]"/>
                  </button>
                </div>
              ))}
            </>
          )}
        </>
      )}
      {characters.length === 0 && query.length > 0 && (
        <NotFound
          title="I don't have data yet"
          message="This character doesn't exist 😞"
          className="flex flex-col items-center py-2 px-1"
          titleClassName="text-lg"
          messageClassName="text-sm"
          imageClassName="object-cover w-[150px] h-[250px]"
        />
      )}
    </div>
  );
};
