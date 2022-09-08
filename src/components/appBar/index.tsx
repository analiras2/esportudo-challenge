import React from 'react';
import * as St from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Typography, {FontType} from '../typography';
import colors from '../../res/colors';

interface Props {
  title: string;
  children?: JSX.Element[];
  onBackPress?: () => void;
  onRightPress?: () => void;
}

const AppBar: React.FC<Props> = ({
  title,
  children,
  onBackPress,
  onRightPress,
}) => {
  return (
    <St.Container>
      <St.LeftContainer>
        {onBackPress && (
          <Icon
            name="chevron-left"
            size={30}
            color={colors.APP_BAR_ICON}
            onPress={onBackPress}
          />
        )}
      </St.LeftContainer>
      <St.TitleView>
        {children ? (
          {children}
        ) : (
          <Typography color={colors.TEXT_LIGHT} type={FontType.SCREEN_TITLE}>
            {title}
          </Typography>
        )}
      </St.TitleView>
      <St.RightContainer>
        {onRightPress && (
          <Icon
            name="search"
            size={30}
            color={colors.APP_BAR_ICON}
            onPress={onRightPress}
          />
        )}
      </St.RightContainer>
    </St.Container>
  );
};

export default AppBar;
