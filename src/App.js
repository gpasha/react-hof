function App({ list, side }) {
  const filteredList = list.filter(el => el.side === side)
  return (
    <ul>
      {
        filteredList.map((character, i) => (
          <li key={character.name + i}>
            <strong>{character.name} - </strong>
            {character.side}
          </li>
        ))
      }
    </ul>
  );
}

export default App;
