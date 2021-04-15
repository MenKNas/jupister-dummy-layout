// import * as React from "react";
// import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateTime } from "../../../DateTime";
// import { BetStatus } from "../BetStatus";
// import { useTranslation } from "react-i18next";
// import { Currency } from "../../../Currency";

// const BooleanDisplay = ({ value = false }) => (
//   <FontAwesomeIcon icon={value ? <faCheck /> : <faTimes />} fixedWidth />
// );

// function Row({ label, value }) {
//   return (
//     <div className="tw:flex tw:flex-col md:tw:items-center tw:justify-between md:tw:flex-row md:tw:space-s-4 tw:overflow">
//       <dt className="truncate">{label}</dt>
//       <dd>{value}</dd>
//     </div>
//   );
// }

// function BetDetails({
//   id,
//   created,
//   stake,
//   possibleReturns,
//   actualReturns,
//   type,
//   eachWay,
//   betStatus,
// }) {
//   const { t } = useTranslation();
//   return (
//     <dl className="tw:flex tw:flex-col tw:space-y-2">
//       <Row label={t("global.category")} value={t("category.live_racing")} />
//       <Row label={t("global.bet_type")} value={type} />
//       <Row label={t("global.bet_id")} value={id} />
//       <Row label={t("global.date")} value={<DateTime date={created} />} />
//       <Row
//         label={t("global.each_way")}
//         value={<BooleanDisplay value={eachWay} />}
//       />
//       <Row label={t("global.stake")} value={<Currency value={stake} />} />
//       <Row
//         label={t("global.possible_returns")}
//         value={<Currency value={possibleReturns} />}
//       />
//       <Row
//         label={t("global.actual_returns")}
//         value={<Currency value={actualReturns} />}
//       />
//       <Row
//         label={t("global.bet_status")}
//         value={<BetStatus status={betStatus} />}
//       />
//     </dl>
//   );
// }

// function Selections({ selections }) {
//   const { t } = useTranslation();
//   return (
//     <div className="tw:overflow-x-auto">
//       <table className="tw:w-full">
//         <tbody>
//           {selections.map(
//             ({
//               meeting: { name: meetingName },
//               event: { id, name: eventName, time },
//               selections,
//             }) =>
//               selections.map(({ num, name, price }) => (
//                 <tr key={`${id} - ${num}`}>
//                   <td className="tw:py-1 tw:whitespace-nowrap">
//                     <DateTime date={time} />
//                   </td>
//                   <td className="tw:py-1 tw:whitespace-nowrap">
//                     {meetingName}
//                   </td>
//                   <td className="tw:py-1 tw:whitespace-nowrap">{eventName}</td>
//                   <td className="tw:py-1 tw:whitespace-nowrap">{`${num}.${name}`}</td>
//                   <td className="tw:py-1 tw:whitespace-nowrap tw:text-end">
//                     {price ? <Currency value={price} /> : t("had.sp")}
//                   </td>
//                 </tr>
//               ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export function Had({ selections, ...rest }) {
//   const { t } = useTranslation();
//   return (
//     <div className="tw:space-y-2">
//       <BetDetails {...rest} />
//       <div className="tw:font-bold">{t("had.selections")}</div>
//       <Selections selections={selections} />
//     </div>
//   );
// }
