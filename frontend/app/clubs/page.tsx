import ClubsList from "@/components/clubList";
import ClubsChart from "@/components/clubChart";
import { fetchAllActs, fetchAllClubs } from "@/lib/api";
import LoadableContainer from "@/components/loadableContainer"
export default async function ClubsPage() {
  const clubsData = await fetchAllClubs();

  return (
    <div className="container mx-auto mt-4 px-4">
      <hr className="my-4" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LoadableContainer>
          <h2 className="text-2xl font-normal text-secondary-foreground  mb-4">
            Lista Klubów
          </h2>
          <ClubsList clubs={clubsData} />
        </LoadableContainer>
        <LoadableContainer>
          <h2 className="text-2xl font-normal text-secondary-foreground mb-4">
            Rozkład mandatów{" "}
          </h2>
          <ClubsChart clubs={clubsData} />
        </LoadableContainer>
      </div>
    </div>
  );
}
