import PageDialog from "@/components/page-dialog";
import Link from "next/link";
import React from "react";

async function Page({ params }: { params: { temp: string[] } }) {
  const { temp } = await params;
  console.log("intercepted", temp);
  return (
    <PageDialog>
      <div className="text-lg text-red-400">
        Showcase Intercepting Page
        <Link href={"/templates/single"}>Dialog Page</Link>
      </div>
    </PageDialog>
  );
}

export default Page;
