import { Menu } from 'antd'
import Logo from '../../shared/lib/logo.svg'
import * as S from './style'
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

const items = headerList.map((item, index) => {
  const key = index + 1
  return {
    key,
    label: item.label,
  }
})
export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={Logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ flex: 1 }}
      />
    </S.HeaderContainer>
  )
}
