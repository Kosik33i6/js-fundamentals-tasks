import {createElement} from '../settings';

class Table {
  constructor(data, tableContainer) {
    const isArray = Array.isArray(data);
    if(!isArray) throw new Error('Argument data have to be an array');

    const isUndefind = tableContainer === undefined;
    if(isUndefind) throw new Error('Argument tableContainer cannot be undefind');

    this.data = data;
    this.keys = this.getDataKeysForTableHeaderCells(this.data);
    this.getElements(tableContainer);
  }

  getElements(element) {
    const isUndefind = element === undefined;
    if(isUndefind) throw new Error('Argument element cannot be undefind');

    this.domElements = {};
    this.domElements.tableContainer = element;
  }

  getDataKeysForTableHeaderCells(data) {
    if(!Array.isArray(data)) throw new Error('Argument data in getDataKeysForTableHeaderCells method have to be a array');
    const keys = [];
    data.forEach(personData => {
      for(const key in personData) {
        if(!keys.includes(key)) {
          keys.push(key);
        }
      }
    })
    return keys;
  }

  renderTableHeaderCells(keys) {
    if(!Array.isArray(keys)) throw new Error('Argument keys in initTableHeaderCells method have to be a array');

    this.renderTableRow();
    keys.forEach(key => {
      const tableHeaderCell = document.createElement('th');
      tableHeaderCell.innerHTML = key;
      this.domElements.tableRow.appendChild(tableHeaderCell);
    });
  }

  renderTableEntries(data, keys) {
    const isArray = Array.isArray(data) && Array.isArray(keys);
    if(!isArray) throw new Error('Data adn keys in renderTableEntries method have to be a array');

    data.forEach(person => {
      this.renderTableRow();
      keys.forEach(key => {
        const tableCell = document.createElement(createElement.table.cell);
        let keyValue = person[key];

        if(Array.isArray(keyValue)) {
          keyValue = keyValue.join(', ');
        }

        tableCell.innerHTML = keyValue !== undefined ? keyValue : '';
        this.domElements.tableRow.appendChild(tableCell);
      });
    });

  }

  renderTableRow() {
    this.domElements.tableRow = document.createElement(createElement.table.row);
    this.domElements.table.appendChild(this.domElements.tableRow);
  }

  renderTable() {
    this.domElements.table = document.createElement(createElement.table.table);
    this.domElements.tableContainer.appendChild(this.domElements.table);
    this.renderTableHeaderCells(this.keys);
    this.renderTableEntries(this.data, this.keys);
  }

  init() {
    console.log(this.domElements);
    this.renderTable();
  }
}

export default Table;
