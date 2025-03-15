import {Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кресло черное',
          img: 'black-leather.jpeg',
          desc: 'Дизайнерское кресло с кожаными вставками',
          category: 'chairs',
          price: '129.99'
        },
        {
          id: 2,
          title: 'Кресло желтое',
          img: 'yellow.jpeg',
          desc: 'Мягкое комфортное кресло из желтого велюра',
          category: 'chairs',
          price: '89.99'
        },
        {
          id: 3,
          title: 'Стул серый',
          img: '3.jpeg',
          desc: 'Серое кресло для гостинной в стиле лофт',
          category: 'chairs',
          price: '299.99'
        },
        {
          id: 4,
          title: 'Диван оранжевый',
          img: '4.jpeg',
          desc: 'Комфортный диван из оранжевой замши',
          category: 'sofa',
          price: '399.99'
        },
        {
          id: 5,
          title: 'Столик придвижной',
          img: '5.jpeg',
          desc: 'Столик многоуровневый для любого интерьера',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Стол офисный',
          img: 'table-office.jpeg',
          desc: 'Стильный минималистичный стол для вашего офиса',
          category: 'tables',
          price: '169.99'
        },
        {
          id: 7,
          title: 'Лампа напольная',
          img: 'light-loft.jpeg',
          desc: 'Лаконичная напольная лампа для лофт-интерьера',
          category: 'light',
          price: '105.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onShowModal={this.onShowModal}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({currentItems: this.state.items.filter(el => el.category === category )})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id )})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) 
        isInArray = true;
    })

    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }
}

export default App;