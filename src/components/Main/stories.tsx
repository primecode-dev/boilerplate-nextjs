import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'Boilerplate Next.js')}
    description={text(
      'Description',
      'Projeto iniciado com sucesso, agora só customizar seus componentes e criar as páginas'
    )}
  />
)
