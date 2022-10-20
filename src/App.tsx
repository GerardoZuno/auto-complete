import React, { useEffect, useState } from "react";
import { CharacterList } from "./interfaces/ListInterface";
import { Loader } from "./Components/Loader";
import { Search } from "./Components/Search";
import { SearchContent } from "./Components/SearchContent";
import { SearchResult } from "./Components/SearchResult";
const App = () => {
  const [characterList, setCharacterList] = useState<CharacterList[]>([]);
  const [characterMatch, setCharacterMatch] = useState<CharacterList[]>([]);
  const [characterSelected, setCharacterSelected] = useState({
    fullName: "",
    img: "",
  });
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    const getPokemonList = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacterList(data.results);
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false);
      }
    };
    getPokemonList();
  }, []);

  useEffect(() => {
    if (query === "") {
      setCharacterMatch([]);
      setCharacterSelected({ fullName: "", img: "" });
      setQuery("");
    }

    setShowOptions(true);
    const matches = characterList.filter((character) => {
      return character.name.toLowerCase().includes(query.toLowerCase());
    });
    setCharacterMatch(matches.length > 0 ? matches : []);
  }, [query]);

  const chooseCharacter = (pokemon: string, img: string) => {
    setShowOptions(false);
    setCharacterSelected({ fullName: pokemon, img: img });
  };

  const handlePressEnter = () => {
    if (query !== "") {
      const matches = characterList.filter((character) => {
        return character.name.toLowerCase().includes(query.toLowerCase());
      });
      setCharacterSelected({
        fullName: matches[0]?.name,
        img: matches[0]?.image,
      });
    } else {
      setCharacterMatch([]);
      setCharacterSelected({ fullName: "", img: "" });
      setQuery("");
    }

    if (query !== "" && characterMatch.length === 0) {
      setCharacterSelected({ fullName: "", img: "" });
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Search
        titleClassName="text-xl font-semibold"
        className="w-2/4 shadow-lg shadow-black-500/50 rounded p-1 outline-0 mt-2"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={() => handlePressEnter()}
        placeholder="Place input your character"
      />
      {loading ? (
        <Loader />
      ) : (
        <>
        {
          error && (
            <span className="mt-2 mb-2">An error was ocurred pleas recharge the page!</span>
          )
        }
          <SearchContent
            characters={characterMatch}
            chooseCharacter={chooseCharacter}
            query={query}
            showOptions={showOptions}
            className="bg-[#fff] w-2/4 mt-2 shadow-lg shadow-black-500/50 flex flex-col"
          />
          <SearchResult
            characters={characterMatch}
            query={query}
            characterSelected={characterSelected}
            className="bg-[#fff] w-2/4 mt-2 shadow-lg shadow-black-500/50 flex flex-col"
          />
        </>
      )}
    </div>
  );
};

export default App;
