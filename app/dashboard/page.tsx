import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <nav>
        <div className="flex p-5">
          <div className="space-x-2">
            <Button>
              <Link href="/dashboard">Home</Link>
            </Button>
            <Button>
              <Link href="/dashboard/prodi">Prodi</Link>
            </Button>
            <Button>
              <Link href="/dashboard/kampus">Kampus</Link>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
