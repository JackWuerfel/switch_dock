"use client";

import { useEffect, useState } from "react";
import Card from "../card";
import { Reorder } from "motion/react";

import { gql, useQuery } from "@apollo/client";
import type { Benefit } from "@prisma/client";
import { usePathname } from "next/navigation";
import Loader from "../loader";

const AllBenefitsQuery = gql`
  query {
    benefits {
      id
      title
      description
    }
  }
`;

const CardWrapper: React.FC = () => {
  const { data, loading, error } = useQuery(AllBenefitsQuery);
  const [domloaded, setDomloaded] = useState(false);
  const [listItems, setListItems] = useState<Benefit[]>([]);
  const [enabledData, setEnabledData] = useState([]);
  const route = usePathname();

  useEffect(() => {
    setDomloaded(true);
    if (route === "/") {
      setListItems(data?.benefits ? data?.benefits : []);
    }
    if (route === "/safety") {
      setListItems(data?.safety ? data?.safety : []);
    }
    if (route === "/policies") {
      setListItems(data?.policies ? data?.policies : []);
    }
  }, [data?.benefits, data?.policies, data?.safety, route]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="card-wrapper">
        {" "}
        <Card enabledData={enabledData} setEnabledData={setEnabledData}>
          <p>Oh no... {error.message}</p>
        </Card>
      </div>
    );

  return domloaded && listItems ? (
    <Reorder.Group
      className="card-wrapper"
      axis="y"
      as="div"
      onReorder={setListItems}
      values={listItems}
    >
      {listItems?.map((item: Benefit) => (
        <Card
          key={item.id ? item?.id : 0 + 1}
          data={item}
          enabledData={enabledData}
          setEnabledData={setEnabledData}
        />
      ))}
      {!listItems.length ? (
        <Card enabledData={enabledData} setEnabledData={setEnabledData}>
          <p>
            Looks like nothing is implemented for this route. Please go back to
            the home page or hit the back arrow to continue browsing.
          </p>
        </Card>
      ) : null}
    </Reorder.Group>
  ) : null;
};

export default CardWrapper;
