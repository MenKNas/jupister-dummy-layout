// import * as React from "react";
// import { DateTime } from "../../../DateTime";
// import { BetStatus } from "../BetStatus";
// import { useTranslation } from "react-i18next";
// import { Currency } from "../../../Currency";

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
//   betStatus,
// }) {
//   const { t } = useTranslation();
//   return (
//     <dl className="tw:flex tw:flex-col tw:space-y-2">
//       <Row label={t("global.category")} value={t("category.sports_book")} />
//       <Row label={t("global.bet_id")} value={id} />
//       <Row label={t("global.date")} value={<DateTime date={created} />} />
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

// function Events({ events }) {
//   return (
//     <div className="tw:overflow-x-auto">
//       <table className="tw:w-full">
//         <tbody>
//           {events.map(({ name, marketValue, outcome, odds, date }, index) => (
//             <tr key={index}>
//               <td className="tw:py-1 tw:whitespace-nowrap">
//                 <DateTime date={date} />
//               </td>
//               <td className="tw:py-1 tw:whitespace-nowrap">{`${outcome} - ${marketValue}`}</td>
//               <td className="tw:py-1 tw:whitespace-nowrap">{name}</td>
//               <td className="tw:py-1 tw:whitespace-nowrap tw:text-end">
//                 <Currency value={odds} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export function Altenar({ events, ...rest }) {
//   const { t } = useTranslation();
//   return (
//     <div className="tw:space-y-2">
//       <BetDetails {...rest} />
//       <div className="tw:font-bold">{t("altenar.events")}</div>
//       <Events events={events} />
//     </div>
//   );
// }
