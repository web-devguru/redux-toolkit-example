import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { setCategoryFilter } from "../../store/categoryFilter/actions";
import { categoryFilters } from '../../store/categoryFilter/reducer';

const CategoriesList = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector(state => state.entities);

  const [activeTab, setActiveTab] = useState(0)

  const handleCategoryClick = (e) => {
    setActiveTab(+e.target.value);
    dispatch(setCategoryFilter(+e.target.value));
  }

  return (
    <ListGroup>
      <ListGroup.Item action value={ categoryFilters.SHOW_ALL } onClick={e => handleCategoryClick(e)} active={activeTab === 0}>
        Все категории
      </ListGroup.Item>
      {
        categories.map((category, index) =>
        <ListGroup.Item key={index} action onClick={ e => handleCategoryClick(e) } value={ category.id } active={activeTab === category.id}>
          { category.title }
        </ListGroup.Item>)
      }
    </ListGroup>
  )
}

export default CategoriesList;