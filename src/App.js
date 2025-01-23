import {Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      items: [
        {
          id: 1,
          title: 'Кресло черное',
          img: '1.jpg',
          desc: 'Дизайнерское кресло с кожаными вставками',
          category: 'chairs',
          price: '129.99'
        },
        {
          id: 2,
          title: 'Кресло желтое',
          img: '2.jpg',
          desc: 'Мягкое комфортное кресло из желтого велюра',
          category: 'chairs',
          price: '89.99'
        },
        {
          id: 3,
          title: 'Стул серый',
          img: '3.jpg',
          desc: 'Серое кресло для гостинной в стиле ложт',
          category: 'chairs',
          price: '299.99'
        },
        {
          id: 4,
          title: 'Диван оранжевый',
          img: '4.jpg',
          desc: 'Комфортный диван из оранжевой замши',
          category: 'beds',
          price: '399.99'
        },
        {
          id: 5,
          title: 'Столик придвижной',
          img: '5.jpg',
          desc: 'Столик многоуровневый для любого интерьера',
          category: 'tables',
          price: '49.99'
        },
      ]
    }
  }

  render () {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
