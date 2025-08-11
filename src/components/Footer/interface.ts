export type FooterLink = {
    label: string;
    href: string;
  };
  
  export type SocialLink = {
    icon: React.ReactNode;
    href: string;
  };
  
  export type FooterGroup = {
    title: string;
    links: FooterLink[];
  };
  
  export interface FooterProps {
    logoSrc?: string;
    addressLines?: string[];
    socials?: SocialLink[];
    groups?: FooterGroup[];
    newsletter?: {
      title: string;
      description: string;
      placeholder: string;
    };
    bottomNote?: React.ReactNode;
    bottomLinks?: FooterLink[];
  }