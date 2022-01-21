import { CSSObject } from '@emotion/styled'

export const header: CSSObject = {
  borderTop: '4px solid #3f1661',
  background: '#6f3096',
  padding: 4,
  color: '#FFF',

  '& a': {
    textDecoration: 'none',
    color: '#FFF'
  }
}

export const input: CSSObject = {
  background: '#FFF',
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2
}

export const main: CSSObject = {
  padding: 4
}

export const title: CSSObject = {
  color: '#fff',
  fontSize: '32px',
  fontWeight: 'bold',
  textDecoration: 'none'
}

export const informations: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 2,

  '& p, a': {
    display: 'inherit',
    alignItems: 'center',
    gap: 1
  }
}