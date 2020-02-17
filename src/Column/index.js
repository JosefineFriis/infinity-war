import React from 'react';
import Block from '../Block';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 33%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding: 10px;
`;

const BlockList = styled.div`
  padding: 10px;
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <BlockList 
              innerRef={provided.innerRef} 
              {...provided.droppableProps}
            >
              {this.props.blocks.map((block, index) => (
                <Block key={block.id} block={block} index={index} />
              ))}
              {provided.placeholder}
            </BlockList>
          )}
        </Droppable>
      </Container>
    );
  }
}
