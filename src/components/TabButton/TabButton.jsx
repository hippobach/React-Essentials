import styles from './TabButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TabButton = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={cx(isSelected ? 'active' : null)} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
