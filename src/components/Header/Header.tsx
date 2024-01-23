import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'

export const MainHeader = () => {
  const headerList = [
    {
      label: 'О себе',
      link: '#about',
    },
    {
      label: 'Опыт',
      link: '#experience',
    },
    {
      label: 'Стек',
      link: '#stack',
    },
    {
      label: 'Проекты',
      link: '#projects',
    },
    {
      label: 'Контакты',
      link: '#contacts',
    },
  ]

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={headerList.map((item, index) => {
          const key = index + 1
          return {
            key,
            label: item.label,
          }
        })}
      />
    </Header>
  )
}
