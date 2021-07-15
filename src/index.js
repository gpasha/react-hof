import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const characters = [
  {name: 'Люк Скайвокер', side: 'light'},
  {name: 'Йода', side: 'light'},
  {name: 'Обиван Кеноби', side: 'light'},
  {name: 'Палпатин', side: 'dark'},
  {name: 'Дарт Вэйдер', side: 'dark'}
]

function withFilteredProps (Component) {
  return function({ list, side }) {
    const filteredList = list.filter(el => el.side === side)
    return <Component list={filteredList} />
  }
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={characters} side={'light'} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
