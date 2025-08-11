export type NavLinkItem = {
  label: string;
  href: string;
};

export interface HeaderProps {
  leftLinks?: NavLinkItem[];
  rightLinks?: NavLinkItem[];
  logoSrc?: string;
  cartCount?: number;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onMenuClick?: () => void;
}


