"use client";
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

function PageDialog({ children }: React.ComponentProps<"div">) {
  const [isOpen, setisOpen] = useState(true);
  const router = useRouter();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpn) => {
        router.back()
        !isOpn && setisOpen(isOpn);
      }}
    >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="min-w-96 min-h-96">{children}</DialogContent>
    </Dialog>
  );
}

export default PageDialog;
