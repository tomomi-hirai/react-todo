import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const className = 'incompleteItem';
    const btn1 = this.props.done ? 'done' : 'return';
    const btn2 = this.props.done ? 'return' : 'delete';

    return(
      <li className={`todoList__item ${className}`} >
        <div className={`${className}__content`}>
          <span className={`${className}__title`}>{this.props.title}</span>
          <p className={`${className}__desc`}>{this.props.desc}</p>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className={`actionBtn actionBtn--${btn1}`} type="button">
              <img className="actionBtn__icon" src={`img/icon_${btn1}.svg`} />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className={`actionBtn actionBtn--${btn2}`} type="button">
              <img className="actionBtn__icon" src={`img/icon_${btn2}.svg`} />
            </button>
          </li>
        </ul>
      </li>
      /* <li className="todoList__item doneItem">
        <div className="doneItem__content">
          <span className="doneItem__title">タイトル</span>
          <p className="doneItem__desc">ここにテキストが入ります。ここにテキストが入ります。</p>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--return" type="button">
              <img className="actionBtn__icon" src="img/icon_return.svg" />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--delete" type="button">
              <img className="actionBtn__icon" src="img/icon_delete.svg"/>
            </button>
          </li>
        </ul>
      </li> */
    );
  }
}

export default TodoItem;