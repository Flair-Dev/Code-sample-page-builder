import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';

import { TextInput, Button } from 'src/components';
import { validatePageField } from 'src/utils/validation';
import { TBasePage, TPage } from 'src/types';

import { usePageCreation } from '../../hooks';

type Errors = Record<string, string>;

const getPrefilledPath = (name: string) =>
  name.toLowerCase().replace(/ /g, '-');

const initialValues = {
  name: '',
  path: '',
  category: '',
};

export const PageCreation = () => {
  const { createPage, pathExists } = usePageCreation();

  const [values, setValues] = useState<TBasePage | TPage>(initialValues);

  const [errors, setErrors] = useState<Errors>({});

  const checkErrors = () => {
    const errors = Object.entries(values).reduce((acc, [key, value]) => {
      acc[key] = validatePageField(key, value);
      return acc;
    }, {} as Errors);

    if (!errors.path) {
      errors.path = pathExists(values.path) ? 'Path already exists' : '';
    }

    const hasError = Object.values(errors).some((err) => err);

    if (hasError) {
      setErrors(errors);
    }

    return hasError;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkErrors()) {
      createPage(values);
      setValues(initialValues);
      setErrors({});
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      ...(e.target.name === 'name' && prev.path === getPrefilledPath(prev.name)
        ? { path: getPrefilledPath(e.target.value) }
        : {}),
    }));
  };

  return (
    <div className="form-wrapper">
      <Helmet>
        <title>Create Page</title>
      </Helmet>
      <h1 className="title">Create Page</h1>
      <form className="form" onSubmit={handleSubmit}>
        <TextInput
          name="name"
          required
          placeholder="Route name"
          onChange={handleChange}
          value={values.name}
          error={errors.name}
        />
        <TextInput
          name="path"
          required
          placeholder="path"
          prefilledText="/"
          onChange={handleChange}
          value={values.path}
          error={errors.path}
        />
        <TextInput
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={values.category}
          error={errors.category}
        />
        <Button
          title="Submit"
          color="blue"
          onClick={() => handleSubmit}
          fullWidth
          marginTop
        />
      </form>
    </div>
  );
};
