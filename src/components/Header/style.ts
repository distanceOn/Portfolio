import { Header } from 'antd/es/layout/layout'
import styled from 'styled-components'

export const HeaderContainer = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3%;
  padding: 0 8%;
`
export const Logo = styled.img`
  height: 80%;
  cursor: pointer;
`
