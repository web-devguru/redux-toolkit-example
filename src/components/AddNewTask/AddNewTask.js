import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { addTask } from "../../store/tasks/actions";

const AddNewTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { categories } = state.entities;

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  }

  const handleTaskSubmit = () => {
    dispatch(addTask({
      title: taskTitle,
      category: taskCategory ? taskCategory : 1
    }));
    setTaskTitle('');
  }

  const handleTaskCategoryChange = e => {
    setTaskCategory(+e.target.value);
  }

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Добавить новый таск" value={ taskTitle } onChange={e => handleTaskTitleChange(e)} />
      <Form.Control as="select" className="col-3" onChange={ e => handleTaskCategoryChange(e) }>
        <option>Выбрать категорию</option>
        { categories && categories.map(cat => <option value={ cat.id } key={ cat.id }>{ cat.title }</option>) }
      </Form.Control>
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={ handleTaskSubmit } disabled={ !taskTitle }>Сохранить</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddNewTask;