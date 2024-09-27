import type {Meta, StoryObj} from '@storybook/html';
import { layout } from '../../ui-kit/layout/layout';
import { createElement } from '../../renderer/create-element';

type Story = StoryObj;

const LayoutMeta: Meta = {
  title: 'UI-KIT/Layout',
  render: () => {
    return createElement(
        'div',
        layout(
            `left`,
            `main`,
            `right`
        ))
  },
}

export default LayoutMeta;

export const Layout: Story = {};
