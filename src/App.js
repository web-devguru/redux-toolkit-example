import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import TaskList from "./components/TaskList/TaskList";
import AddNewTask from "./components/AddNewTask/AddNewTask";
import { useSelector } from "react-redux";
import './App.css';
import CategoriesList from "./components/CatagoriesList";
import AddNewCategory from "./components/AddNewCategory";
import StatusFilter from './components/StatusFilter';
import { selectVisibleTasks } from './store/selectors';

function App() {

  const state = useSelector(state => state);

  const tasks = selectVisibleTasks(state);

  return (
    <Container className="main-app-container">
      <Row className="mb-4">
        <Col className="mt-4">
          <AddNewTask />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Row className="align-items-center">
            <Col md={6}>
              <h4 className="mb-0">Список задач</h4>
            </Col>
            <Col md={6}>
              <StatusFilter />
            </Col>
          </Row>
          <hr/>
        </Col>
        <Col md={3}>
          <CategoriesList />
          <AddNewCategory />
        </Col>
        <Col>
          {tasks.length
            ? <TaskList tasks={ tasks } />
            : 'У вас пока нет задач. Воспользуйтесь формой выше для добавления задачи.'
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
