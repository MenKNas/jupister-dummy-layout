// import { useQuery, gql } from "@apollo/client";

// const GET_COUNTRIES = gql`
//   query countries {
//     countries: countries {
//       id
//       name
//       blocked
//     }
//   }
// `;

// export function useCountries() {
//   const { loading, data } = useQuery(GET_COUNTRIES);
//   return {
//     loading,
//     data,
//   };
// }

// export function CountriesProvider({ onCountries }) {
//     const { loading, data: { countries = [] } = {} } = useCountries();
//   return onCountries({ loading, countries });
// }
