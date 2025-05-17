export type NavLinkType = {
  id: string;
  label: string;
  href: string;
};

export type NavbarProps = {
  logo: {
    src: string;
    alt: string;
  };
  links: NavLinkType[];
  translations: {
    en: Record<string, string>;
    id: Record<string, string>;
  };
};
