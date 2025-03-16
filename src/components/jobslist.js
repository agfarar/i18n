import React, { useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import Job from "./job";

const JobsList = () => {
  const intl = useIntl();
  const isSpanish = intl.locale.startsWith("es");
  const headerClass = isSpanish ? "thead-light" : "thead-dark";

  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      visits: 1250,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      visits: 3000,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      visits: 850,
      city: "Cali, Colombia",
      date: "2019-03-28",
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className={headerClass}>
          <tr>
            <th scope="col">
              <FormattedMessage id="table.header.id" defaultMessage="#" />
            </th>
            <th scope="col">
              <FormattedMessage id="table.header.position" defaultMessage="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="table.header.company" defaultMessage="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="table.header.salary" defaultMessage="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="table.header.visits" defaultMessage="Visits" />
            </th>
            <th scope="col">
              <FormattedMessage id="table.header.city" defaultMessage="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="table.header.date" defaultMessage="Publication date" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, i) => (
            <Job key={i} offer={offer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;

