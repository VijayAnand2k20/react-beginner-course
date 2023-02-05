function Body (props) {
    return (
        <div className="App">
        <header className="App-header">
          <img src={props.logo} className="App-logo" alt="logo" />
          <p>
            <code>Vanakkamda Maapla..!</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
};

export default Body;