import Icon from "../Icon/Icon";
import { IIconName } from "../../models/iconName";

export default function SocialLink({
  href,
  iconName,
  className = "",
}: {
  href: string;
  iconName: IIconName;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={href}
    >
      <Icon name={iconName} />
    </a>
  );
}
