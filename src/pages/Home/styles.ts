import { CSSObject } from '@emotion/styled'

export const card: CSSObject = {
  border: '1px solid #aaaaaa2b',
  boxShadow: '0px 0px 17px -7px rgba(0, 0, 0, 0.45)',
  borderRadius: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: 2,
  boxSizing: 'border-box',
  position: 'relative'
}

export const title: CSSObject = {
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
  minHeight: 50,
  margin: '15px 0',
  display: 'inherit',
  alignItems: 'center'
}

export const price: CSSObject = {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#d7d713'
}

export const favorite: CSSObject = {
  position: 'absolute',
  top: 0,
  left: 24,
  width: 50,
  height: 70,
  backgroundColor: '#000',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    color: '#FFF'
  },

  '&:hover > svg': {
    color: 'red'
  },

  '&.active > svg': {
    color: 'red'
  }
}