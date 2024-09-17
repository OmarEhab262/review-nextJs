import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      <Card>
        Notification
        <Link className="block" href="/dashboard/archived">
          Archived
        </Link>
      </Card>
    </div>
  );
}
