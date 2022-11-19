import { useEffect, useState } from "react";
import DeveloperCard from "./DeveloperCard";

const DeveloperCards = () => {
  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    // fetch('https://api.terawork.com/service-categories/sellers-services/computer-software-development')
    fetch('/developers-list.json')
      .then(res => res.json())
      .then(data => setDevelopers(data.data.service_search_results.hits))
  }, [])

  return (
    <div className="flex flex-wrap gap-4 mt-16">
      {developers.map(developer => (
        <DeveloperCard
          key={developer._source.profile_id}
          developer={developer._source}
        />
      ))}
    </div>
  );
};

export default DeveloperCards;
