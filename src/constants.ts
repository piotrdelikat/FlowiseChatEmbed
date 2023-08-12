import type { BubbleProps } from './features/bubble';

export const defaultBotProps: BubbleProps = {
  chatflowid: '',
  apiHost: undefined,
  callback: (data) => console.log('callback', data),
  chatflowConfig: undefined,
  theme: undefined,
};
