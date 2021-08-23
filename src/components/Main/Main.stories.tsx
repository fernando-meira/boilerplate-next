import { text, withKnobs } from '@storybook/addon-knobs';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Main
    title={text('Title', 'Next.js')}
    description={text(
      'React avançado',
      'TypeScript, ReactJS, Next.js e Styled Components'
    )}
  />
);
