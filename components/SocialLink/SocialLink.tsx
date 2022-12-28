import { IIconName } from "../../models/iconName";
import Icon from "../Icon/Icon";

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
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <Icon name={iconName} />
    </a>
  );
}