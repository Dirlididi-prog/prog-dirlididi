export const HEADERS_TABLE_CONFIG = [
  { dataField: 'id', isKey: true, label: 'ID', width: '10' },
  { dataField: 'name', label: 'Name', width: '150' },
  { dataField: 'members', label: 'Members', width: '30' },
  { dataField: 'owner', label: 'Owner', width: '80' },
  { dataField: 'language', label: 'Language', width: '80' },
  { dataField: 'enrolled', label: 'Enrolled', width: '30' },
  { dataField: 'actions', label: 'Actions', width: '30' } // check how we're going to deal with solving
];

export const TABLE_CONFIG = {
  search: true,
  pagination: true,
  hover: true
};
