import { useEffect, useState } from "react";
import DeveloperCard from "./DeveloperCard";

const DeveloperCards = () => {
  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    fetch('/developers-list.json')
      .then(res => res.json())
      .then(data => setDevelopers(data.data.service_search_results.hits))
  }, [])

  developers.map(developer => console.log(developer._source))

  return (
    <div className="flex gap-5 mt-16">
      <DeveloperCard />
    </div>
  );
};

export default DeveloperCards;
