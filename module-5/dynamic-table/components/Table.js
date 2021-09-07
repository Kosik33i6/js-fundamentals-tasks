class Table {
  constructor(data, tableContainer) {
    if(!Array.isArray(data)) {
      throw new Error('Argument data have to be a array');
    }
    if(tableContainer === undefined) {
      throw new Error('Argument tableContainer cannot be undefind');
    }
    this.data = data;
    this.getElements(tableContainer);
  }

  getElements(element) {
    this.dom = {};
    this.dom.tableContainer = element;

  }

  getDataKeysForTableHeaderCells() {
    const keys = Object.keys(this.data[0]);
    return keys;
  }

  renderTableHeaderCells(keys) {
    if(!Array.isArray(keys)) {
      throw new Error('Keys in initTableHeaderCells method have to be a array');
    }
    this.renderTableRow();
    keys.forEach(key => {
      const tableHeaderCell = document.createElement('th');
      tableHeaderCell.innerHTML = key;
      this.dom.tableRow.appendChild(tableHeaderCell);
    });
  }

  renderTableCells(data) {
    if(!Array.isArray(data)) {
      throw new Error('Data in renderTableCells method have to be a array');
    }
    data.forEach(person => {
      this.renderTableRow();
      const personData = Object.values(person);

      personData.forEach(value => {
        let personDataValue = value;
        if(Array.isArray(personDataValue)) {
          personDataValue = value.join(', ');
        }

        const tableCell = document.createElement('td');
        tableCell.innerHTML = personDataValue;
        this.dom.tableRow.appendChild(tableCell);

      });
    });
  }

  renderTableRow() {
    this.dom.tableRow = document.createElement('tr');
    this.dom.table.appendChild(this.dom.tableRow);
  }

  renderTable() {
    this.dom.table = document.createElement('table');
    this.dom.tableContainer.appendChild(this.dom.table);
    this.renderTableHeaderCells(this.getDataKeysForTableHeaderCells());
    this.renderTableCells(this.data);
  }

  init() {
    console.log(this.dom);
    this.renderTable();
  }
}

export default Table;
