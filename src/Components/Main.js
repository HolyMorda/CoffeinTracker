import React,{Component} from "react";
import Comment from '../Components/Comment'
import AdviceSwitcher from '../Components/AdviceSwitcher'

 const coffee =
  [
    {"name":"Заварной",      "coffein":150},
    {"name":"Растворимый",   "coffein":80},
    {"name":"Эспрессо",      "coffein":90},
    {"name":"Капучино",      "coffein":75},
    {"name":"Латте",         "coffein":55}
  ];


class Main extends Component {

constructor() {
    super();
    this.state = {
      coffeinTotal: 0,
    };
  }

  render() {

    return (
      <div className = "background">
         <div className = "container pt-5">
          <div className = "row">
            <div className = "col-sm-4">
                 <h1>{this.state.coffeinTotal}</h1>

              <div className = "btn-group-vertical">
               {coffee.map((place, index) => (
                  <button type="button" className="btn btn-primary" key={index} 
                  onClick = {() => {
                    this.setState({ coffeinTotal: this.state.coffeinTotal + place.coffein });
                    }}>
                        {place.name}
                  </button>   
                ))}        
              </div>
 
            </div>
                
            <div className = "col-sm-4">
                <h1>Комментарий</h1>
                <h4><em>{AdviceSwitcher(this.state.coffeinTotal)}</em></h4>
            </div> 
           </div>
          </div>
             {/* Смена цитат */}
          <div className = "container mt-5">
             <p><Comment update={this.state.coffeinTotal}/></p>  {/* обновление внутренней переменной для перезапуска компонента и получения новой цитаты */}
          </div>

      </div>
    );
  }
}

export default Main;