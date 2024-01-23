import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { MainHeader } from '../components/Header/Header'

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <MainHeader />
    <Content>{children}</Content>
    <Footer>footer</Footer>
  </Layout>
)
