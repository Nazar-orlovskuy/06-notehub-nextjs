"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../../lib/api";
import * as Yup from "yup";
import type { NoteTag } from "../../types/note";

const schema = Yup.object({
  title: Yup.string().required().min(3).max(50),
  content: Yup.string().max(500),
  tag: Yup.string().required(),
});

export default function NoteForm({ onClose }: { onClose: () => void }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      onClose();
    },
  });

  return (
    <Formik
      initialValues={{ title: "", content: "", tag: "Todo" as NoteTag }}
      validationSchema={schema}
      onSubmit={(vals) => mutation.mutate(vals)}
    >
      <Form>
        <label>Title</label>
        <Field name="title" />
        <ErrorMessage name="title" />

        <label>Content</label>
        <Field as="textarea" name="content" />
        <ErrorMessage name="content" />

        <label>Tag</label>
        <Field as="select" name="tag">
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </Field>

        <button type="button" onClick={onClose}>Cancel</button>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
}
