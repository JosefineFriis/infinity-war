const data = {
  blocks: {
    'drive_forward': {id: 'drive_forward', name: 'Drive Forward'},
    'turn_left': {id: 'turn_left', name: 'Turn Left'}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: "Tool Box",
      blockId: ['drive_forward', 'turn_left']
    },
    'column-2': {
      id: 'column-2',
      title: 'Build your program',
      blockId: [],
    }
  },
  columnsort: ['column-1', 'column-2']
}
export default data;