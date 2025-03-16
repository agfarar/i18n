import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = (props) => {
  const { offer } = props;
  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>
        <FormattedMessage
          id="job.salary"
          defaultMessage="{value, number} million"
          values={{ value: offer.salary }}
        />
      </td>
      <td>
        <FormattedNumber value={offer.visits} />
      </td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
    </tr>
  );
};

export default Job;
