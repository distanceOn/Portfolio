import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../Pages/MainPage/MainPage'

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="*" element={<div>not found</div>} />
  </Routes>
)
