const React = require('react');
    
const myStyle = {
    color: 'darkgreen',
    backgroundColor: 'lightgray',
    };

class Show extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <div style={myStyle}>
                <h1>Gotta Catch Em All</h1>
                <h2>
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}                                
                    <img src={`${pokemon.img.concat('.jpg')}`}></img>
                </h2>
                <a href="/pokemon"> back </a>
            </div>
        );
    }
}

module.exports = Show;