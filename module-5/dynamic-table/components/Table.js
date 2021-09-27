import {createElement} from '../settings';



// ? 1 array methods / reduce

// ? 3. promise methods, translate


class Table {
  constructor(data, tableContainer) {
    const isArray = Array.isArray(data);
    if(!isArray) throw new Error('Argument data have to be an array');

    const isUndefind = tableContainer === undefined;
    if(isUndefind) throw new Error('Argument tableContainer cannot be undefind');

    this.data = data;
    this.keys = this.getDataKeysForTableHeaderCells();
    console.log(this.keys);
    this.getElements(tableContainer);
  }

  getElements(element) {
    const isUndefind = element === undefined;
    if(isUndefind) throw new Error('Argument element cannot be undefind');

    this.domElements = {};
    this.domElements.tableContainer = element;
  }

  getDataKeysForTableHeaderCells() {
    if(!Array.isArray(this.data)) throw new Error('Argument data in getDataKeysForTableHeaderCells method have to be a array');

    const columnKeys = this.data.reduce((columns, personData) => {
      const selectedKeys = Object.keys(personData);
      const keys = new Set([...columns, ...selectedKeys]);
      return keys;
    }, []);

    return Array.from(columnKeys);
  }

  renderTableHeaderCells() {
    if(!Array.isArray(this.keys)) throw new Error('Argument keys in initTableHeaderCells method have to be a array');

    this.renderTableRow();
    this.keys.forEach(key => {
      const tableHeaderCell = document.createElement(createElement.table.header);
      tableHeaderCell.innerHTML = key;
      this.domElements.tableRow.appendChild(tableHeaderCell);
    });
  }

  renderTableEntries() {
    const isArray = Array.isArray(this.data) && Array.isArray(this.keys);
    if(!isArray) throw new Error('Data adn keys in renderTableEntries method have to be a array');

    this.data.forEach(person => {
      this.renderTableRow();
      this.keys.forEach(key => {
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
    this.renderTableHeaderCells();
    this.renderTableEntries();
  }

  init() {
    this.renderTable();
  }
}

export default Table;
