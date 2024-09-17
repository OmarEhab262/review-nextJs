import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <div>
      <Card>
        Archived
        <br />
        <Link href="/dashboard">default</Link>
      </Card>
    </div>
  );
}
