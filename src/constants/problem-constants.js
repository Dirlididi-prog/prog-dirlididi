export const HEADERS_TABLE_CONFIG = [
  { dataField: 'key', isKey: true, label: 'Key', width: '100' },
  { dataField: 'name', label: 'Problem', width: '250' },
  { dataField: 'description', label: 'Description' },
  { dataField: 'created', label: 'Created', width: '250' },
  { dataField: 'solved', label: 'Solved', width: '80' } // check how we're going to deal with solving
];

export const TABLE_CONFIG = {
  search: true,
  pagination: true,
  hover: true
};

export const TEST_HEADERS_TABLE = {
  description: { label: 'Description', width: '250' },
  tip: { label: 'Tip', width: '100' },
  input: { label: 'Input', width: '250' },
  output: { label: 'Output', width: '250' }
};

export const HEADERS_TABLE_ADD_PROBLEM = {
  key: { label: 'Key', width: '100' },
  name: { label: 'Problem', width: '250' },
  description: { label: 'Description' }
};

export const URLS = {
  addProblem: '/addProblem'
};
