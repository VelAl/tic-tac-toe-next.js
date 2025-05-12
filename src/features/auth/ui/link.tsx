import Link from "next/link";

type T_Props = {
  text: string;
  linkText: string;
  url: string;
};

export default function BottomLink({ linkText, text, url }: T_Props) {
  return (
    <p className="text-sm">
      {text}
      <Link
        href={url}
        className="ml-2 font-medium text-blue-600 hover:text-blue-500"
      >
        {linkText}
      </Link>
    </p>
  );
}
