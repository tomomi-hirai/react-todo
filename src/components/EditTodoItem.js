import React, { Component } from 'react';

class EditTodoItem extends Component {
  constructor(props) {
    super(props);

    const editItem = {
      title: this.props.title,
      desc: this.props.desc
    }

    this.state = {
      editItem: editItem
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const editItem = {...this.state.editItem};
    const newEditItem = {...editItem, [name]: value}

    this.setState({ editItem: newEditItem });
    localStorage.setItem('editItems', JSON.stringify(newEditItem));
  }

  handleUpdate = () => {
    const { title, desc } = this.state.editItem;
    this.props.updateTodoItem(this.props.id, title, desc);
  }

  handleCancel = () => {
    this.props.cancelEdit(this.props.id);
  }

  render() {
    return(
      <li className="todoList__item editItem">
        <div className="editItem__content">
          <form className="editForm">
            <input className="editForm__textBox" type="text" name="title" value={this.state.editItem.title} onChange={this.handleChange} />
            <textarea className="editForm__textBox" name="desc" value={this.state.editItem.desc} onChange={this.handleChange}></textarea>
          </form>
        </div>
        <ul className="todoList__actionBtnList">
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--update" type="button" onClick={this.handleUpdate}>
              <img className="actionBtn__icon" src="img/icon_update.svg" alt="更新" />
            </button>
          </li>
          <li className="todoList__actionBtnItem">
            <button className="actionBtn actionBtn--return" type="button" onClick={this.handleCancel}>
              <img className="actionBtn__icon" src="img/icon_return.svg" alt="キャンセル" />
            </button>
          </li>
        </ul>
      </li>
    );
  }
}

export default EditTodoItem;