import { Text } from 'components/text';

import styles from './Button.module.scss';

export type ButtonVariant = 'apply' | 'clear';

export interface ButtonProps {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	variant?: ButtonVariant;
}

export const Button = ({
	title,
	onClick,
	type,
	variant = 'apply',
}: ButtonProps) => {
	return (
		<button
			className={`${styles.button} ${styles[`button_${variant}`]}`}
			type={type}
			onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
