const Search = (props) => {
  const check = () => {
    if (document.getElementById("input").value !== "") {
      props.click();
      document.getElementById("input").value = "";
    }
  };

  return (
    <header>
      <input placeholder="Search for the weather in another city" id="input" />;
      <button onClick={check}>Search</button>
    </header>
  );
};

export default Search;
