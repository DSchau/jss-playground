import * as React from 'react';
import glamorous from 'glamorous';

import { ThemeProps } from '../../style';

const Button = glamorous.button<ThemeProps>(
  {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none'
  },
  ({ theme }) => ({
    ':focus': {
      boxShadow: `0 0 5px ${theme[theme.primary].accent}`
    }
  })
);

interface Props {
  children?(args: any): any;
  onClick?(ev: any);
  render?(): React.ReactElement<any>;
  tabIndex?: number;
}

interface State {}

export class Accessible extends React.Component<Props, State> {
  static defaultProps = {
    onClick: () => {},
    tabIndex: 0
  };

  render() {
    const { children, onClick, render, tabIndex, ...rest } = this.props;
    return (
      <Button tabIndex={tabIndex} onClick={onClick} {...rest}>
        {render ? render() : children({})}
      </Button>
    );
  }
}
