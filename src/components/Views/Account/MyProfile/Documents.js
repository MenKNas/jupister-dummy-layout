import * as React from "react";
// import { gql, useMutation, useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
import * as yup from "yup";
import { Field } from "../../../Inputs/Field";
import { ErrorsList } from "../../../Generic/ErrorsList";
import { containerVariants } from "../../../Generic/animationVariants";
import MainButton from "../../../Buttons/MainButton";
import { motion } from "framer-motion";

const MAX_FILE_SIZE = 5000000; //5 MB

const DOCUMENT_TYPES = [
  "IDENTITY",
  "ADDRESS_VERIFICATION",
  "CREDIT_CARD",
  "BANK_STATEMENT",
  "OTHER_PAYMENT_METHOD",
  "OTHER",
];

// const UPLOAD_DOCUMENT = gql`
//   mutation coreUploadDocument($input: DocumentInput!) {
//     response: coreUploadDocument(input: $input) {
//       name
//       type
//       createdDate
//     }
//   }
// `;

// export const GET_DOCUMENTS = gql`
//   query coreGetDocuments {
//     result: coreGetDocuments {
//       createdDate
//       name
//       type
//     }
//   }
// `;

const schema = (t) =>
  yup.object().shape({
    document_type: yup
      .string()
      .label(t("global.document_type"))
      .trim()
      .required(),
    file: yup
      .mixed()
      .label(t("global.file"))
      .required()
      .test("is-valid", t("validations.file_not_valid"), (value) => {
        if (!value[0]) return false;
        const { name, size } = value[0];
        const extension = name.substr(name.lastIndexOf(".") + 1);
        if (!/(pdf|png|jpg|jpeg)$/gi.test(extension)) return false;
        return size <= MAX_FILE_SIZE;
      }),
    notes: yup.string().label(t("global.notes")).trim(),
  });

function FormField({ label, input }) {
  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="lg:w-1/3 text-text-secondary">{label}</div>
      <div className="lg:w-2/3">{input}</div>
    </div>
  );
}

function Form() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    errors,
    // reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: { document_type: "" },
    resolver: yupResolver(schema(t)),
  });
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="flex flex-col space-y-4 w-full md:w-7/10">
        <Field invalid={errors.file?.message}>
          <FormField
            label={<Field.Label>{t("global.file")}</Field.Label>}
            input={
              <>
                <Field.Input
                  name="file"
                  type="file"
                  disabled={isSubmitting}
                  ref={register}
                />
                <Field.Error>{errors.file?.message}</Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors.document_type?.message}>
          <FormField
            label={<Field.Label>{t("global.document_type")}</Field.Label>}
            input={
              <>
                <Field.Select
                  disabled={isSubmitting}
                  name="document_type"
                  ref={register}
                  className="pr-2"
                >
                  <option value="" disabled>
                    {t("global.please_select_document_type")}
                  </option>
                  {DOCUMENT_TYPES.map((value, index) => (
                    <option value={value} key={index}>
                      {t(`document_type.${value.toLowerCase()}`)}
                    </option>
                  ))}
                </Field.Select>
                <Field.Error>{errors.document_type?.message} </Field.Error>
              </>
            }
          />
        </Field>
        <Field invalid={errors.notes?.message}>
          <FormField
            label={<Field.Label>{t("global.notes")}</Field.Label>}
            input={
              <>
                <Field.TextArea
                  name="notes"
                  rows="3"
                  disabled={isSubmitting}
                  ref={register}
                />
                <Field.Error>{errors.notes?.message}</Field.Error>
              </>
            }
          />
        </Field>
      </div>
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
    </form>
  );
}

function UploadDocument({ disabled }) {
  // const [uploadDocument, { error }] = useMutation(UPLOAD_DOCUMENT);
  return (
    <div className="tw:space-y-4">
      {/* <ErrorsList
        errors={error?.graphQLErrors?.map(({ message }) => message) ?? []}
      /> */}
      <Form
      // disabled={disabled}
      // onSubmit={(data) =>
      //   uploadDocument({
      //     variables: {
      //       input: {
      //         file: data.file[0],
      //         type: data.document_type,
      //         notes: data.notes,
      //       },
      //     },
      //     optimisticResponse: {
      //       __typename: "Mutation",
      //       response: {
      //         __typename: "Document",
      //         name: data.file[0].name,
      //         createdDate: new Date().toISOString(),
      //         type: data.document_type,
      //       },
      //     },
      //     update: (proxy, { data: { response } }) => {
      //       const data = proxy.readQuery({ query: GET_DOCUMENTS });
      //       proxy.writeQuery({
      //         query: GET_DOCUMENTS,
      //         data: {
      //           ...data,
      //           result: [response, ...data.result],
      //         },
      //       });
      //     },
      //   })
      // }
      />
    </div>
  );
}

function UploadedDocuments() {
  return (
    <div className="text-text-secondary">
      This is going to be the Upload Documents table (showing all the documents)
    </div>
  );
}

export default function Documents() {
  // const { loading, error, data } = useQuery(GET_DOCUMENTS, {
  //   fetchPolicy: "cache-and-network",
  // });
  //dummy error const for dev/test purposes
  const error = false;
  return error ? (
    <ErrorsList
      errors={error?.graphQLErrors?.map(({ message }) => message) ?? []}
    />
  ) : (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full space-y-8 overflow-hidden p-3"
    >
      <UploadedDocuments />
      <UploadDocument />
    </motion.div>
  );
}
