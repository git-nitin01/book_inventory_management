import React from 'react'
import { DataProvider } from './context/DataProvider'
import FilterBar from './components/FilterBar'
import { BodyWrapper, AppWrapper } from './styles/common'
import './index.css'
import DataList from './components/DataList'
import NavBar from './components/NavBar'

function App() {
  return (
    <BodyWrapper>
      <DataProvider>
      <NavBar />
      <AppWrapper>
        <FilterBar />
        <DataList />
      </AppWrapper>
      </DataProvider>
    </BodyWrapper>
  )
}

export default App
