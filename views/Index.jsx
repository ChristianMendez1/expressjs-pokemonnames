const React = require('react');
    
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div style={myStyle}>
                <ul>
                    {pokemon.map((pokemon, x) => {
                        return(
                            <a href={`/pokemon/${x}`}>
                                <li>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                            </a>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

module.exports = Index;