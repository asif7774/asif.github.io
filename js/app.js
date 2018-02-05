import IntroCard from './components/intro-card';

class App extends React.Component {
   render() {
    return (
      <div>
        <IntroCard />
    	</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);