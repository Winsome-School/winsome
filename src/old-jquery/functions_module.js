export default class List {
  constructor() {
    this.listItems =[];
  }

  addListItem(item) {
    this.listItems.push(item)
    this.renderArray();
  }

  removeListItem(index) {
    this.listItems.splice(index, 1)
    this.renderArray();
  }

  shiftUpItem(index) {
    if(!index) {
      return null;
    } else {
      var temp = this.listItems.splice(index, 1)
      this.listItems.splice(index-1, 0, temp[0])
      this.renderArray();
    }
  }

  shiftDownItem(index) {
    if(index >= this.listItems.length -1) {
      return null;
    } else {
      var temp = this.listItems.splice(index, 1)
      this.listItems.splice(index+1, 0, temp[0])
      this.renderArray();
    }
  }

  completeItem(index) {
    this.listItems[index].completed = !this.listItems[index].completed;
    console.log(this.listItems[index].completed)
    this.renderArray();
  }

  renderArray() {
    console.log('render-array ', this)
    $('tbody').remove();
    $('table').append('<tbody></tbody>')
    this.listItems.map((listItem, index) => {
      console.log('list-items ', this)
      return (
        `<tr id="row_${index}">
          <td>${index}</td>
          <td class=${listItem.completed ? "completed" : ""}>${listItem.item_value}</td>
          <td>
            <button id="btn_complete_${index}" class="btn btn-success">Completed</button>
            <button id="btn_shift_up_${index}" type="button" class="btn btn-primary">
              Shift <span class="glyphicon glyphicon-menu-up"></span>
            </button>
            <button id="btn_shift_down_${index}" type="button" class="btn btn-primary">
              Shift <span class="glyphicon glyphicon-menu-down"></span>
            </button>
            <button id="btn_delete_${index}" class="btn btn-danger">Delete</button>
          </td>
        </tr>`
      )
    }).forEach((item, index) => {
          $('tbody').append(item);
          $(`#btn_delete_${index}`).on('click', e => {
            console.log('delete has been clicked')
            this.removeListItem(index);
          })
          $(`#btn_shift_up_${index}`).on('click', e => {
            this.shiftUpItem(index);
          })
          $(`#btn_shift_down_${index}`).on('click', e => {
            this.shiftDownItem(index);
          })
          $(`#btn_complete_${index}`).on('click', e => {
            this.completeItem(index);
          })
      })
  }
}

