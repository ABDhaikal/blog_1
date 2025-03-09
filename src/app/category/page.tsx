

// fetch data from api and display it category

import React from 'react'
import CategoriesTitle from './_components/CategoriesTitle';
import CategoriesList from './_components/CategoriesList';

const Categorypage = async() => {
  return (
    <div>
        <CategoriesTitle />
        <CategoriesList />

    </div>
  )
}

export default Categorypage
