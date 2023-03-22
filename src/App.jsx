import Title from './Title'
import { useState } from 'react'
import menu from './data'
import Menu from './Menu'
import Categories from './Categories'

// //* This code creates a new array with the values of all the categories in the menu array.
// const tempCategories = menu.map(item => item.category)
// //* It then creates a new Set from that array, which removes any duplicate values.
// const tempSet = new Set(tempCategories)
// //* Finally, it creates a new array with the value 'all' and the values from the Set.
// const tempItems = ['all', ...tempSet]

//* This code creates a new array with the values of all the categories in the menu array.
//* It then creates a new Set from that array, which removes any duplicate values.
//* Finally, it creates a new array with the value 'all' and the values from the Set.
//* This is a great way to create a list of unique values from an array.
//* The spread operator (...) is used to add the values from the Set to the new array.

const allCategories = ['all', ...new Set(menu.map(item => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter(item => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
