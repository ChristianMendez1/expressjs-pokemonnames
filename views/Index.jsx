const React = require('react');
    
const myStyle = {
    color: 'darkblue',
    backgroundColor: 'lightgray',
    };

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon</h1>
                <ul>
                    {pokemon.map((pokemon, x) => {
                        return(
                            <a href={`/pokemon/${x}`}>
                                <li>
                                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}                                
                                </li>
                            </a>
                        )
                    })}
                </ul>
                <a href="/"> back </a>
            </div>
        );
    }
}

module.exports = Index;