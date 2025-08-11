export type ServiceItem = {
  id: string | number;
  title: string;
  imageSrc: string;
  href?: string;
};

export interface ServicesProps {
  title: string;
  ctaLabel: string;
  ctaHref?: string;
  items: ServiceItem[];
  hideHeader?: boolean;
}


