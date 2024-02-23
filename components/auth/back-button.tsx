"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  lable: string;
  href: string;
}

const BackButton = ({ lable, href }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-medium w-full" size="sm" asChild>
      <Link href={href}>{lable}</Link>
    </Button>
  );
};

export default BackButton;
