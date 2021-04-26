import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { Field } from "../../../Inputs/Field";
import {
  MobileNumber,
  MobileNumberPrefix,
  MobileNumberValue,
} from "../../../Inputs/MobileNumber";
import {
  DaySelector,
  MonthSelector,
  YearSelector,
  DateSelector,
} from "../../../Inputs/DateSelector";
import MainButton from "../../../Buttons/MainButton";
import { motion } from "framer-motion";
import { containerVariants } from "../../../Generic/animationVariants";
// import { CountriesProvider } from "../../../Generic/CountriesList";

const schema = (t) =>
  yup.object().shape({
    city: yup.string().label("city").required(),
    country: yup.string().label("country").required(),
    houseNumberAndStreetName: yup
      .string()
      .label("housenumberandstreetname")
      .min(5)
      .required(),
    postCode: yup.string().label("postcode").required(),
    mobileNumber: yup.string().label("mobilenumber").required(),
  });

function FormField({ label, input }) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-text-secondary font-light  text-sm py-1 truncate">
        {label}
      </div>
      <div className="w-full">{input}</div>
    </div>
  );
}

export function Form() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    control,
    // watch,
    // formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      //   country: user.country,
      //   city: user.city,
      //   houseNumberAndStreetName: user.houseNumberAndStreetName,
      //   postCode: user.postCode,
      //   mobileNumber: user.mobileNumber,
    },
    resolver: yupResolver(schema(t)),
  });
  //   const fieldDisabled = profileChangeDisabled || isSubmitting;
  const onSubmit = (data) => console.log(data);
  // console.log(errors);
  // console.log(watch("city"));
  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-7/10 gap-y-4 gap-x-4">
        <FormField
          label={<label htmlFor="email">{t("First Name")}</label>}
          input={
            <Field.Input
              type="text"
              name="firstname"
              //   defaultValue={user.email}
              disabled
              className="w-full"
            />
          }
        />
        <FormField
          label={<label htmlFor="currency">{t("Last Name")}</label>}
          input={
            <Field.Input
              type="text"
              name="lastname"
              //   defaultValue={user.currency}
              disabled
              className="w-full"
            />
          }
        />
        <FormField
          label={<label htmlFor="currency">{t("Email")}</label>}
          input={
            <Field.Input
              type="text"
              name="email"
              //   defaultValue={user.currency}
              disabled
              className="w-full"
            />
          }
        />
        <FormField
          label={<label htmlFor="gender">{t("Gender")}</label>}
          input={
            <Field.Input
              type="text"
              name="gender"
              //   defaultValue={t(`gender.${user.gender.toLowerCase()}`)}
              disabled
              className="w-full"
            />
          }
        />
        <FormField
          label={<label htmlFor="dateOfBirth">{t("Date of Birth")}</label>}
          input={
            <div className="flex space-x-2">
              <DateSelector>
                <div className="w-1/4">
                  <DaySelector disabled />
                </div>
                <div className="w-2/4">
                  <MonthSelector disabled />
                </div>
                <div className="w-1/4">
                  <YearSelector disabled />
                </div>
              </DateSelector>
            </div>
          }
        />
        <FormField
          label={<label htmlFor="currency">{t("Currency")}</label>}
          input={
            <Field.Input
              type="text"
              name="currency"
              //   defaultValue={user.currency}
              disabled
              className="w-full"
            />
          }
        />
        {/* Need to integrate with GraphQL in order to work properly */}
        <div> Countries will be here </div>
        {/* <Field invalid={errors.country?.message}>
          <FormField
            label={
              <Field.Label htmlFor="country">{t("global.country")}</Field.Label>
            }
            input={
              <>
                <CountriesProvider
                  onCountries={({ loading, countries }) =>
                    loading ? (
                      <Field.Select
                        name="country"
                        defaultValue=""
                        disabled={true}
                      >
                        <option value="" disabled>
                          {t("global.loading")}
                        </option>
                      </Field.Select>
                    ) : (
                      <Field.Select
                        name="country"
                        ref={register}
                        // disabled={fieldDisabled || loading}
                      >
                        {countries
                          .filter(({ blocked }) => !blocked)
                          .map((value) => (
                            <option value={value.id} key={value.id}>
                              {value.name}
                            </option>
                          ))}
                      </Field.Select>
                    )
                  }
                />
                <Field.Error>{errors.country?.message}</Field.Error>
              </>
            }
          />
        </Field> */}
        <Field invalid={errors.city?.message}>
          <FormField
            label={<Field.Label htmlFor="city">{t("City")}</Field.Label>}
            input={
              <>
                <Field.Input
                  type="text"
                  name="city"
                  ref={register}
                  //   disabled={fieldDisabled}
                />
                <Field.Error>{errors.city?.message}</Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors?.houseNumberAndStreetName?.message}>
          <FormField
            label={
              <Field.Label htmlFor="houseNumberAndStreetName">
                {t("House Number and Street Name")}
              </Field.Label>
            }
            input={
              <>
                <Field.Input
                  type="text"
                  name="houseNumberAndStreetName"
                  ref={register}
                  //   disabled={fieldDisabled}
                />
                <Field.Error>
                  {errors?.houseNumberAndStreetName?.message}
                </Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors?.postCode?.message}>
          <FormField
            label={
              <Field.Label htmlFor="postCode">{t("Postcode")}</Field.Label>
            }
            input={
              <>
                <Field.Input
                  type="text"
                  name="postCode"
                  ref={register}
                  //   disabled={fieldDisabled}
                />
                <Field.Error>{errors?.postCode?.message}</Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors?.mobileNumber?.message}>
          <FormField
            label={
              <Field.Label htmlFor="mobileNumber">
                {t("Mobile Number")}
              </Field.Label>
            }
            input={
              <>
                <Controller
                  name="mobileNumber"
                  control={control}
                  render={(props) => (
                    <div className="flex space-x-2">
                      <MobileNumber
                        defaultValue={props.value}
                        onChange={props.onChange}
                        isInvalid={errors.mobileNumber?.message}
                        error={errors.mobileNumber?.message}
                      >
                        <div className="w-1/3">
                          <MobileNumberPrefix
                          //   disabled={fieldDisabled}
                          />
                        </div>
                        <div className="w-2/3">
                          <MobileNumberValue
                          //   disabled={fieldDisabled}
                          />
                        </div>
                      </MobileNumber>
                    </div>
                  )}
                />
                <Field.Error>{errors?.mobileNumber?.message}</Field.Error>
              </>
            }
          />
        </Field>
      </div>
      {/* {!profileChangeDisabled && ( */}
      <FormField
        input={
          <MainButton
            formBtn
            type="submit"
            className="md:w-1/4 w-full"
            // disabled={isSubmitting}
            // loading={isSubmitting}
          >
            {t("Submit")}
          </MainButton>
        }
      />
      {/* )} */}
    </form>
  );
}

export default function PersonalInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-3"
    >
      <Form />
    </motion.div>
  );
}
