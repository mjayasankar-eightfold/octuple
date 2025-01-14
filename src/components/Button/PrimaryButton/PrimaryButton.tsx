import React, { FC, Ref } from 'react';
import {
    ButtonShape,
    BaseButton,
    ButtonProps,
    ButtonSize,
    ButtonType,
} from '../';
import { classNames } from '../../../shared/utilities';

import styles from '../button.module.scss';

export const PrimaryButton: FC<ButtonProps> = React.forwardRef(
    (
        {
            allowDisabledFocus = false,
            ariaLabel,
            checked = false,
            className,
            disabled = false,
            disruptive = false,
            dropShadow = false,
            htmlType,
            icon,
            iconColor,
            onClick,
            shape = ButtonShape.Rectangle,
            size = ButtonSize.Flex,
            style,
            text,
            theme,
            toggle,
            buttonWidth,
        },
        ref: Ref<HTMLButtonElement>
    ) => {
        const buttonClassNames: string = classNames([
            className,
            styles.button,
            styles.buttonPrimary,
            { [styles.buttonPrimaryDisruptive]: disruptive },
        ]);

        return (
            <BaseButton
                ref={ref}
                allowDisabledFocus={allowDisabledFocus}
                ariaLabel={ariaLabel}
                checked={checked}
                className={buttonClassNames}
                disabled={disabled}
                disruptive={disruptive}
                dropShadow={dropShadow}
                htmlType={htmlType}
                icon={icon}
                iconColor={iconColor}
                onClick={onClick}
                shape={shape}
                size={size}
                style={style}
                text={text}
                theme={theme}
                type={ButtonType.Primary}
                toggle={toggle}
                buttonWidth={buttonWidth}
            />
        );
    }
);
