import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { Header } from '../components/Header/Header'

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
    <Footer>footer</Footer>
  </Layout>
)
