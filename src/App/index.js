import React, { Component } from 'react';
import data from '../Data';
import Column from '../Column';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';

const Title = styled.div`
  text-align: center;
  margin-top: 5px;
  padding: 10px;
`;

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 33%;
  display: flex;
`;

class App extends Component {
  constructor(){
    super();
    this.state = data;
  }

    onDragEnd = result => {
      const {destination, source, draggableId} = result;
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
      const begin = this.state.columns[source.droppableId];
      const end = this.state.columns[destination.droppableId];
      if(begin === end){
        const newblockIds = Array.from(begin.blockId);
        newblockIds.splice(source.index, 1);
        newblockIds.splice(destination.index, 0, draggableId);
        const newColumn = {
          ...begin,
          blockId: newblockIds,
        };
        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn,
          },
        };
        this.setState(newState);
        return;
      }
      const beginblockIds = Array.from(begin.blockId);
      beginblockIds.splice(source.index, 1);
      const newBegin = {
        ...begin,
        blockId: beginblockIds
      };
      const endblockIds = Array.from(end.blockId);
      endblockIds.splice(destination.index, 0, draggableId);;
      const newEnd = {
        ...end,
        blockId: endblockIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newBegin.id]: newBegin,
          [newEnd.id]: newEnd,
        },
      };
      this.setState(newState);

    };


  render() {
    return (
      <div>
        <Title>  
          <text>Avengers Infinity War</text>
        </Title>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnsort.map(columnId => {
              const column = this.state.columns[columnId];
              const blocks = column.blockId.map(blockId => this.state.blocks[blockId]);
              return <Column key={Column.id} column={column} blocks={blocks} />;
            })}
          </Container>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
