function App({ list }) {
  return (
    <ul>
      {
        list.map((character, i) => (
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
