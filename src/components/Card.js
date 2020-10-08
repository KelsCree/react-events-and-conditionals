import React from 'react'

class Card extends React.Component {

  state = {
    isClicked: false
  }

  render() {
    return (
      <div className={this.props.character.status === 'Dead' ? 'card dead' : 'card'}>
        <img
          src={this.props.character.image}
          onClick ={ () => this.setState({ isClicked: !this.state.isClicked })}
          />

        {
          this.state.isClicked ?
          <React.Fragment>
            <h2>{this.props.character.name}</h2>
            <p>{this.props.character.species}</p>
            <p>{this.props.character.status}</p>
          </React.Fragment>
        : null
        }


      </div>
    )
  } 
}

export default Card