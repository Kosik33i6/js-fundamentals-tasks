import Table from './components/Table';

import {select} from './settings';
import data from './db/tableData.json';

const app = {

  initTable() {
    const tableWrapper = document.querySelector(select.table.tableContainer);
    const table = new Table(data, tableWrapper);
    table.init();
  },

  init() {
    this.initTable();
  }
};

app.init();
