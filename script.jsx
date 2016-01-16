
var Main = React.createClass({
  render: function(){
    var cards = this.state.logins.map(function(login){
      return (
        <Card login={login}/>
      )
    });
    return (
      <div>
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    )
  }
});

React.render(<Main />, document.getElementById('root'));
