import Badge from './badge';
import Icon from './icon';

class IntroCard extends React.Component {
  
  componentWillMount() {
    this.props.baseWord = "Hello";
    this.setState({word: this.props.baseWord});
    this.timeout = null;
  }
  
  onMouseOver(word) {
     clearTimeout(this.timeout);
     this.setState({word: word});
  }
  
  onMouseOut() {
    
    // Don't leave, if they enter a different active state quickly.
    this.timeout = setTimeout(function() {
		  this.setState({word: this.props.baseWord});      
    }.bind(this), 10);
  }

  render() {
    return (<div className="card">
      <Badge word={this.state.word} />
			<h1>I'm Asif Ansari</h1>
      <p>UI Developer and maker, find me on:</p>
      <p>
        <Icon href="https://github.com/asif7774" name="github" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon href="https://codepen.io/asif7774" name="codePen" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon href="https://www.linkedin.com/in/asif7774" name="linkedin" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon href="https://twitter.com/asif7774" name="twitter" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon href="https://facebook.com/asif7774" name="facebook" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
       </p>
    </div>)
  }

};

export default IntroCard;