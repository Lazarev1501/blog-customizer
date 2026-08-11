import { useState, useRef, SyntheticEvent } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Spacing } from 'components/spacing';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Select } from 'components/select';
import { Text } from 'components/text';
import { useClose } from 'components/hooks/useClose';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export type ArticleParamsFormProps = {
	setArticleState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({
	setArticleState,
}: ArticleParamsFormProps) => {
	const defaultStateForm = useRef<ArticleStateType>(defaultArticleState);
	const asideRef = useRef<HTMLDivElement | null>(null);

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const [fontFamily, setFontFamily] = useState<OptionType>(
		defaultStateForm.current.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState<OptionType>(
		defaultStateForm.current.fontSizeOption
	);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultStateForm.current.backgroundColor
	);
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultStateForm.current.fontColor
	);
	const [contentWidth, setContentWidth] = useState<OptionType>(
		defaultStateForm.current.contentWidth
	);

	useClose({
		isOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false),
		rootRef: asideRef,
	});

	const toggleStateMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleFontFamilyChange = (option: OptionType) => {
		setFontFamily(option);
	};
	const handleFontSizeChange = (option: OptionType) => {
		setFontSize(option);
	};
	const handleBackgroundColorChange = (option: OptionType) => {
		setBackgroundColor(option);
	};
	const handleFontColorChange = (option: OptionType) => {
		setFontColor(option);
	};
	const handleContentWidthChange = (option: OptionType) => {
		setContentWidth(option);
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		setArticleState({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		});
	};

	const handleReset = () => {
		setArticleState(defaultStateForm.current);

		setFontFamily(defaultStateForm.current.fontFamilyOption);
		setFontSize(defaultStateForm.current.fontSizeOption);
		setBackgroundColor(defaultStateForm.current.backgroundColor);
		setFontColor(defaultStateForm.current.fontColor);
		setContentWidth(defaultStateForm.current.contentWidth);
	};

	return (
		<div ref={asideRef}>
			<ArrowButton onClick={toggleStateMenu} isMenuOpen={isMenuOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						options={fontFamilyOptions}
						selected={fontFamily}
						onChange={handleFontFamilyChange}
						title='шрифт'
					/>
					<Spacing size={50} />
					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={fontSize}
						onChange={handleFontSizeChange}
						title='размер шрифта'
					/>
					<Spacing size={50} />
					<Select
						options={fontColors}
						selected={fontColor}
						onChange={handleFontColorChange}
						title='цвет шрифта'
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						options={backgroundColors}
						selected={backgroundColor}
						onChange={handleBackgroundColorChange}
						title='цвет фона'
					/>
					<Spacing size={50} />
					<Select
						options={contentWidthArr}
						selected={contentWidth}
						onChange={handleContentWidthChange}
						title='ширина контента'
					/>
					<Spacing size={207} />
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							variant='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' type='submit' variant='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
