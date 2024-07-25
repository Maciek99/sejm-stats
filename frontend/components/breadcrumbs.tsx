// components/Breadcrumbs.tsx
"use client";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const urlToPolishName: { [key: string]: string } = {
  envoys: "Posłowie",
  clubs: "Kluby parlamentarne",
  votings: "Głosowania",
  processes: "Procesy legislacyjne",
  committees: "Komisje sejmowe",
  interpellations: "Interpelacje",
  acts: "Dziennik ustaw",
  // Add more mappings as needed
};

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  // Don't render breadcrumbs on the home page
  if (pathname === "/") {
    return null;
  }

  const pathSegments = pathname?.split("/").filter((segment) => segment !== "");

  return (
    <Breadcrumb className="px-5 py-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex flex-row items-center gap-2">
            <FaHome />
            Strona główna
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {
          pathSegments?.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const polishName = urlToPolishName[segment] || segment;

            return (
              <>
                <BreadcrumbItem key={href}>
                  {
                    isLast ? (
                      <BreadcrumbPage>

                        {polishName}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>
                        {polishName}
                      </BreadcrumbLink>
                    )
                  }
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </>
            );
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
