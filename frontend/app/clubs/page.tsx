import ClubsList from "@/components/clubList";
import ClubsChart from "@/components/clubChart";
import { fetchAllActs, fetchAllClubs } from "@/lib/api";

export default async function ClubsPage() {
  const clubsData = await fetchAllClubs();

  return (
    <div className="container mx-auto mt-4 px-4">
      <hr className="my-4" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="mx-auto bg-card  rounded shadow-md my-4 md:mx-3 2xl:mx-16 md:px-4 max-md:px-1 py-3">
          <h2 className="text-2xl font-normal text-secondary-foreground  mb-4">
            Lista Klubów
          </h2>
          <ClubsList clubs={clubsData} />
        </div>
        <div className="mx-auto bg-card  rounded shadow-md my-4 md:mx-3 2xl:mx-16 md:px-4 max-md:px-1 py-3">
          <h2 className="text-2xl font-normal text-secondary-foreground mb-4">
            Rozkład mandatów{" "}
          </h2>
          <ClubsChart clubs={clubsData} />
        </div>
      </div>
    </div>
  );
}
