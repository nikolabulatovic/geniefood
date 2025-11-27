'use client';

interface LanguageLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const LanguageLink = ({
  href,
  label,
  isActive,
  onClick,
}: LanguageLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-2 py-1 rounded-md transition-colors duration-300 ${
        isActive
          ? 'bg-primary text-secondary'
          : 'text-primary hover:text-tertiary hover:bg-primary/20'
      }`}>
      {label}
    </a>
  );
};

export default LanguageLink;
