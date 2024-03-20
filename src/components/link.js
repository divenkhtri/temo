/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import Play from './icons/play';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <Link href={path}>
      <div className="nav-item" {...rest}>
        {label}
      </div>
    </Link>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <Play />
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'primary',
    cursor: 'pointer',
    fontSize: [1, null, null, null, '15px'],
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    svg: {
      ml: 2,
    },
  },
};
