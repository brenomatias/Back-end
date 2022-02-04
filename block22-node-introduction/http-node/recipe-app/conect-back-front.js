// imagine um componente React que precisa exibir essa lista de receitas. Ele ficaria mais ou menos assim:



class receitasList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recipes: [],
        isLoading: true,
      };
    }
  
    componentDidMount() {
      fetch('http://localhost:3001/recipes') 
        .then(response => response.json())

        .then((recipes) => this.setState(
          {
            recipes,
            isLoading: false,
          },
        ));
    }
  
    render() {
      const { recipes, isLoading } = this.state;
  
      return (
        <div>
          <div>
            {isLoading && <Loading />}
            <div className='card-group'>
              {recipes.map((recipe) => (
                <div key={recipe.id}>
                  <h1>{recipe.name}</h1>
                  <span>Preço: {recipe.price}</span>
                  <span>Tempo de preparo: {recipe.waitTime}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }