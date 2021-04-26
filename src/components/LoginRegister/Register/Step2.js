// import * as React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
// import * as yup from "yup";
// import { useTranslation, Trans } from "react-i18next";
// import { Field } from "../../Inputs/Field";
// // import { LazyLoadImage } from "../../LazyLoadImage";
// // import sideImg from "image-trace-loader!skin/static/register.png";
// // import { useSettings } from "../../Settings";
// import MainButton from "../../Buttons/MainButton";
// import {
//   MobileNumber,
//   MobileNumberPrefix,
//   MobileNumberValue,
// } from "../../Inputs/MobileNumber";
// import {
//   DaySelector,
//   MonthSelector,
//   YearSelector,
//   DateSelector,
// } from "../../Inputs/DateSelector";
// import { addYears, isAfter } from "date-fns";

// const schema = (t) =>
//   yup.object().shape({
//     firstName: yup
//       .string()
//       .label(t("global.firstname"))
//       .min(2)
//       .max(64)
//       .required(),
//     lastName: yup
//       .string()
//       .label(t("global.lastname"))
//       .min(2)
//       .max(64)
//       .required(),
//     city: yup.string().label(t("global.city")).max(64).required(),
//     country: yup.string().label(t("global.country")).required(),
//     houseNumberAndStreetName: yup
//       .string()
//       .label(t("global.housenumberandstreetname"))
//       .min(5)
//       .max(128)
//       .required(),
//     postCode: yup.string().max(16).label(t("global.postcode")).required(),
//     gender: yup.string().label(t("global.gender")).required(),
//     mobileNumber: yup.string().label(t("global.mobilenumber")).required(),
//     dateOfBirth: yup
//       .string()
//       .label(t("global.dateofbirth"))
//       .required()
//       .test(
//         "Validate date",
//         t("global.validate_18_years_of_age"),
//         (value) => !isAfter(addYears(new Date(value), 18), new Date())
//       ),
//     accept: yup.boolean().oneOf([true]),
//   });

// function FormField({ label, input }) {
//   return (
//     <div className="flex flex-col w-full">
//       <div className="text-text-secondary font-light tracking-wide text-sm py-1 truncate">
//         {label}
//       </div>
//       <div className="w-full">{input}</div>
//     </div>
//   );
// }

// export default function Step2({ children, onSubmit, onBack, defaultValues }) {
//   const { t } = useTranslation();
//   //   const {
//   //     NAME: brandName,
//   //     AUTO_BONUS: shouldHideAutoBonusPrompt,
//   //     AUTO_MAILING_LIST: shouldHideMailingListPrompt,
//   //   } = useSettings();
//   const {
//     register,
//     handleSubmit,
//     errors,
//     control,
//     formState: { isSubmitting },
//   } = useForm({
//     defaultValues,
//     resolver: yupResolver(schema(t)),
//   });
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full lg:w-1/2 space-y-4 py-1 px-4"
//     >
//       <div className="space-y-2 mb-4">{children}</div>
//       <div className="space-y-4 space-y-4">
//         <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
//           <div className="lg:w-1/2">
//             <Field invalid={errors.firstName?.message}>
//               <Field.Input
//                 type="text"
//                 name="firstName"
//                 placeholder={t("global.firstname")}
//                 ref={register}
//                 disabled={isSubmitting}
//               />
//               <Field.Error>{errors.firstName?.message}</Field.Error>
//             </Field>
//           </div>
//           <div className="lg:w-1/2">
//             <Field invalid={errors.lastName?.message}>
//               <Field.Input
//                 type="text"
//                 name="lastName"
//                 placeholder={t("global.lastname")}
//                 ref={register}
//                 disabled={isSubmitting}
//               />
//               <Field.Error>{errors.lastName?.message}</Field.Error>
//             </Field>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
//           <div className="lg:w-1/2">
//             <Field invalid={errors.country?.message}>
//               <CountriesProvider
//                 onCountries={({ loading, countries }) =>
//                   loading ? (
//                     <Field.Select
//                       name="country"
//                       defaultValue=""
//                       disabled={true}
//                     >
//                       <option value="" disabled>
//                         {t("global.country")}
//                       </option>
//                     </Field.Select>
//                   ) : (
//                     <Field.Select
//                       name="country"
//                       ref={register}
//                       disabled={isSubmitting || loading}
//                     >
//                       <option value="" disabled>
//                         {t("global.country")}
//                       </option>
//                       {countries
//                         .filter(({ blocked }) => !blocked)
//                         .map((value) => (
//                           <option value={value.id} key={value.id}>
//                             {value.name}
//                           </option>
//                         ))}
//                     </Field.Select>
//                   )
//                 }
//               />
//               <Field.Error>{errors.country?.message}</Field.Error>
//             </Field>
//           </div>
//           <div className="lg:w-1/2">
//             <Field invalid={errors.city?.message}>
//               <Field.Input
//                 type="text"
//                 name="city"
//                 placeholder={t("global.city")}
//                 ref={register}
//                 disabled={isSubmitting}
//               />
//               <Field.Error>{errors.city?.message}</Field.Error>
//             </Field>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
//           <div className="lg:w-1/2">
//             <Field invalid={errors.dateOfBirth?.message}>
//               <Controller
//                 control={control}
//                 name="dateOfBirth"
//                 render={(props) => (
//                   <div className="flex space-x-2">
//                     <DateSelector
//                       defaultValue={props.value}
//                       onChange={props.onChange}
//                     >
//                       <div className="w-1/3">
//                         <DaySelector disabled={isSubmitting} />
//                       </div>
//                       <div className="w-1/3">
//                         <MonthSelector disabled={isSubmitting} />
//                       </div>
//                       <div className="w-1/3">
//                         <YearSelector
//                           maxYear={new Date().getFullYear() - 18}
//                           disabled={isSubmitting}
//                         />
//                       </div>
//                     </DateSelector>
//                   </div>
//                 )}
//               />
//               <Field.Error>{errors.dateOfBirth?.message}</Field.Error>
//             </Field>
//           </div>
//           <div className="lg:w-1/2 flex">
//             <div className="w-3/5">
//               <Field invalid={errors.houseNumberAndStreetName?.message}>
//                 <Field.Input
//                   type="text"
//                   name="houseNumberAndStreetName"
//                   placeholder={t("global.housenumberandstreetname")}
//                   ref={register}
//                   disabled={isSubmitting}
//                 />
//                 <Field.Error>
//                   {errors.houseNumberAndStreetName?.message}
//                 </Field.Error>
//               </Field>
//             </div>
//             <div className="w-2/5 ps-2">
//               <Field invalid={errors.postCode?.message}>
//                 <Field.Input
//                   type="text"
//                   name="postCode"
//                   placeholder={t("global.postcode")}
//                   ref={register}
//                   disabled={isSubmitting}
//                 />
//                 <Field.Error>{errors.postCode?.message}</Field.Error>
//               </Field>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
//           <div className="lg:w-1/2">
//             <Field invalid={errors.gender?.message}>
//               <GraphqlEnumListProvider
//                 name="Gender"
//                 onData={({ loading, data }) =>
//                   loading ? (
//                     <Field.Select name="gender" defaultValue="" disabled={true}>
//                       <option value="" disabled>
//                         {t("global.gender")}
//                       </option>
//                     </Field.Select>
//                   ) : (
//                     <Field.Select
//                       name="gender"
//                       disabled={isSubmitting || loading}
//                       ref={register}
//                     >
//                       <option value="" disabled>
//                         {t("global.gender")}
//                       </option>
//                       {data.map((gender) => (
//                         <option value={gender} key={gender}>
//                           {t(`gender.${gender.toLowerCase()}`)}
//                         </option>
//                       ))}
//                     </Field.Select>
//                   )
//                 }
//               />
//               <Field.Error>{errors.gender?.message} </Field.Error>
//             </Field>
//           </div>
//           <div className="flex flex-col lg:w-1/2">
//             <Field invalid={errors.mobileNumber?.message}>
//               <Controller
//                 name="mobileNumber"
//                 control={control}
//                 render={(props) => (
//                   <div className="flex space-x-2">
//                     <MobileNumber
//                       defaultValue={props.value}
//                       onChange={props.onChange}
//                     >
//                       <div className="w-1/3">
//                         <MobileNumberPrefix disabled={isSubmitting} />
//                       </div>
//                       <div className="w-2/3">
//                         <MobileNumberValue disabled={isSubmitting} />
//                       </div>
//                     </MobileNumber>
//                   </div>
//                 )}
//               />
//               <Field.Error>{errors.mobileNumber?.message}</Field.Error>
//             </Field>
//           </div>
//         </div>
//       </div>
//       <Field invalid={errors.accept?.message}>
//         <div className="inline-flex space-x-2 items-center">
//           <Field.Checkbox
//             name="accept"
//             id="accept"
//             className="flex-shrink-0"
//             ref={register}
//             disabled={isSubmitting}
//           />
//           <Field.Label htmlFor="accept">
//             <Trans i18nKey="global.register_accept_terms_and_conditions">
//               I am at least 18 years of age and I have read, accept and agree to
//               the terms & conditions , privacy policy, cookies policy and
//               policies relating to age verification and KYC (know Your Customer)
//             </Trans>
//           </Field.Label>
//         </div>
//       </Field>
//       {!shouldHideMailingListPrompt && (
//         <Field>
//           <div className="inline-flex space-x-2 items-center">
//             <Field.Checkbox
//               id="newsletter"
//               name="newsletter"
//               className="flex-shrink-0"
//               ref={register}
//               disabled={isSubmitting}
//             />
//             <Field.Label htmlFor="newsletter">
//               <Trans i18nKey="global.register_newsletter">
//                 I would like to receive news, promotional material and other
//                 information from {{ name: brandName }} and its affiliates
//               </Trans>
//             </Field.Label>
//           </div>
//         </Field>
//       )}
//       {!shouldHideAutoBonusPrompt && (
//         <Field>
//           <div className="inline-flex space-x-2 items-center">
//             <Field.Checkbox
//               id="autoBonus"
//               name="autoBonus"
//               className="flex-shrink-0"
//               ref={register}
//               disabled={isSubmitting}
//             />
//             <Field.Label htmlFor="autoBonus">
//               <Trans i18nKey="global.register_auto_bonus">
//                 I would like to participate to automatic bonuses
//               </Trans>
//             </Field.Label>
//           </div>
//         </Field>
//       )}
//       <div className="flex flex-col items-center space-y-4">
//         <div className="w-1/2 lg:w-1/3">
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={isSubmitting}
//             loading={isSubmitting}
//           >
//             {t("global.register")}
//           </Button>
//         </div>
//         <div>
//           <button type="button" onClick={onBack} disabled={isSubmitting}>
//             {t("global.back")}
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
