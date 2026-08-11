import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		title: {
			control: 'text',
			description: 'Текст кнопки',
		},
		onClick: {
			action: 'clicked',
			description: 'Обработчик клика',
		},
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			description: 'HTML тип кнопки',
		},
		variant: {
			control: 'select',
			options: ['apply', 'clear'],
			description: 'Вариант оформления кнопки',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
	render: () => {
		return (
			<>
				<Button
					title='Сбросить'
					type='reset'
					variant='clear'
					onClick={() => alert('клик на кнопку сбросить')}
				/>
				<Button
					title='Применить'
					type='submit'
					variant='apply'
					onClick={() => alert('клик на кнопку применить')}
				/>
			</>
		);
	},
};

export const ApplyButton: Story = {
	args: {
		title: 'Применить',
		variant: 'apply',
		onClick: () => alert('Применить'),
	},
};

export const ClearButton: Story = {
	args: {
		title: 'Сбросить',
		variant: 'clear',
		onClick: () => alert('Сбросить'),
	},
};

export const BothButtons: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '20px' }}>
			<Button
				title='Сбросить'
				variant='clear'
				onClick={() => alert('Сбросить')}
			/>
			<Button
				title='Применить'
				variant='apply'
				onClick={() => alert('Применить')}
			/>
		</div>
	),
};
