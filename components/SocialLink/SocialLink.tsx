import { IIconName } from "../../models/iconName";
import Icon from "../Icon/Icon";

export default function SocialLink({
  href,
  iconName,
}: {
  href: string;
  iconName: IIconName;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon name={iconName} />
    </a>
  );
}
