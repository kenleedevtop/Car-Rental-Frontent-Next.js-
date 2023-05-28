import React, { useEffect, useState } from 'react';
import {
  RegisterTitle,
  RegisterSubtitle,
  RegisterCompanyMain,
  RegisterCompanyTopStack,
  RegisterCompanyBottomStack,
  RegisterCompanyFName,
  RegisterCompanyLName,
  RegisterCompanyCompany,
  RegisterCompanyRole,
  RegisterLocalization,
  RegisterCheckbox,
} from 'features/register/styles';
import { Button, Input } from 'components/ui';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'utilities/validators';
import { ClientAPI, LegalsAPI, CompanyAPI } from 'api';
import { useModal, useSnackbar } from 'hooks';
import { ConfirmRegistrationModal } from 'features/register/elements';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    company: {
      value: undefined,
      label: '',
      name: '',
    },
    companyTitleId: {
      value: null,
      label: '',
    },
    // company: {
    //   name: 1,
    //   role: 1,
    // },
    email: '',
    password: '',
    commonLegalId: null,
  });

  const router = useRouter();

  const [legalsChecked, setLegalsChecked] = useState(false);
  const [commonLegal, setCommonLegals] = useState<any>(null);

  const getLegals = async () => {
    const data = await LegalsAPI.getLegals();

    let common;

    if (router.locale === 'en-US') {
      common = data.find((x: any) => x.type === 0 && x.language === 'en');
    } else {
      common = data.find((x: any) => x.type === 0 && x.language === 'de');
    }

    setState({
      ...state,
      commonLegalId: common.id,
    });

    setCommonLegals(common);
  };

  const [counter, setCounter] = useState(0);

  const { push } = useSnackbar();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    // false,
    // false,
  ]);

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const timeoutTime = 10000;

  const isDisabled =
    !state.firstName ||
    !state.lastName ||
    // !state.company.name ||
    // !state.company.role ||
    !state.email ||
    !state.password ||
    !!errors.find((x) => x) ||
    counter === 1 ||
    !legalsChecked;

  // , router.locale as string

  const handleRegister = async () => {
    try {
      await ClientAPI.registration({
        ...state,
        companyTitleId: state.companyTitleId.value,
        company: {
          name: state.company.label,
          companyId: state.company.value,
        },
      });
      openCrModal();
    } catch (e: any) {
      let step = 0;
      step += 1;
      setCounter(step);
      push(e.response.data.message, { variant: 'error' });
      setTimeout(() => {
        setCounter(0);
      }, timeoutTime);
    }
  };

  const handleClose = () => {
    router.push('/login');
    closeCrModal();
  };

  const [companies, setCompanies] = useState<any>([]);
  const [titles, setTitles] = useState<any>([]);

  const getCompanies = async () => {
    const { result } = await CompanyAPI.getAll();

    setCompanies(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getTitles = async () => {
    const { result } = await CompanyAPI.getAllTitles();

    setTitles(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setState({
        ...state,
        company: { ...state.company, label: event.target.value },
      });
    }
  };

  useEffect(() => {
    getCompanies();
    getTitles();
    getLegals();
  }, []);

  useEffect(() => {
    getLegals();
  }, [router.locale]);

  return (
    <RegisterCompanyMain>
      <RegisterTitle>{t('Sign Up as Company')}</RegisterTitle>
      <RegisterSubtitle>
        {t(
          'Reach the most relevant market possible by connecting with influencers who have pre-established trust with your target audience.'
        )}
      </RegisterSubtitle>
      <RegisterCompanyTopStack direction="horizontal">
        <RegisterCompanyFName
          type="text"
          label={t('First Name') as string}
          required
          placeholder={t('Please Enter your First Name') as string}
          value={state.firstName}
          onValue={(firstName) => setState({ ...state, firstName })}
          errorCallback={handleErrors(0)}
          validators={[
            {
              message: t('First name is required'),
              validator: (firstName) => {
                const v = firstName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t('First name needs to be at least 2 characters long'),
              validator: (firstName) => {
                try {
                  firstNameSchema.validateSync({ firstName });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
        <RegisterCompanyLName
          type="text"
          label={t('Last Name') as string}
          required
          placeholder={t('Please Enter your Last Name') as string}
          value={state.lastName}
          onValue={(lastName) => setState({ ...state, lastName })}
          errorCallback={handleErrors(1)}
          validators={[
            {
              message: t('Last name is required'),
              validator: (lastName) => {
                const v = lastName as string;
                if (v.trim()) return true;
                return false;
              },
            },
            {
              message: t('Last name needs to be at least 2 characters long'),
              validator: (lastName) => {
                try {
                  lastNameSchema.validateSync({ lastName });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
      </RegisterCompanyTopStack>
      <RegisterCompanyBottomStack direction="horizontal">
        <RegisterCompanyCompany
          type="select"
          label={t('Company') as string}
          required
          placeholder={t('Please Enter your Company') as string}
          value={state.company.name ? state.company.name : state.company}
          onValue={(value) => setState({ ...state, company: value })}
          options={companies}
          onKeyDown={handleKeyDown}
          // errorCallback={handleErrors(2)}
          // validators={[
          //   {
          //     message: t('Company is required'),
          //     validator: (company) => {
          //       const v = company as string;
          //       if (v.trim()) return true;
          //       return false;
          //     },
          //   },
          // ]}
        />
        <RegisterCompanyRole
          type="select"
          label={t('Role') as string}
          required
          placeholder={t('Please Enter your Role') as string}
          value={state.companyTitleId}
          onValue={(value) => setState({ ...state, companyTitleId: value })}
          options={titles}
          // errorCallback={handleErrors(3)}
          // validators={[
          //   {
          //     message: t('Role is required'),
          //     validator: (role) => {
          //       const v = role as string;
          //       if (v.trim()) return true;
          //       return false;
          //     },
          //   },
          // ]}
        />
      </RegisterCompanyBottomStack>
      <Input
        type="text"
        label={t('Email') as string}
        required
        placeholder={t('Please Enter your Email') as string}
        value={state.email}
        onValue={(email) => setState({ ...state, email })}
        errorCallback={handleErrors(4)}
        validators={[
          {
            message: t('Email is required'),
            validator: (email) => {
              const v = email as string;
              if (v.trim()) return true;
              return false;
            },
          },
          {
            message: t('Not a valid email format'),
            validator: (email) => {
              try {
                emailSchema.validateSync({ email });
                return true;
              } catch {
                return false;
              }
            },
          },
        ]}
      />
      <Input
        type="password"
        label={t('Password') as string}
        required
        placeholder={t('Please Enter your Password') as string}
        value={state.password}
        onValue={(password) => setState({ ...state, password })}
        errorCallback={handleErrors(5)}
        validators={[
          {
            message: t('Password is required'),
            validator: (password) => {
              const v = password as string;
              if (v.trim()) return true;
              return false;
            },
          },
          {
            message: t(
              'Password must have at least one uppercase, lowercase letter, number and symbol'
            ),
            validator: (password) => {
              try {
                passwordSchema.validateSync({ password });
                return true;
              } catch {
                return false;
              }
            },
          },
        ]}
      />
      <RegisterCheckbox
        value={legalsChecked}
        onValue={(value) => setLegalsChecked(value)}
        label={<span dangerouslySetInnerHTML={{ __html: commonLegal?.text }} />}
        size="small"
        color="primary"
      />
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={isDisabled}
        onClick={handleRegister}
      >
        {t('SIGN UP NOW')}
      </Button>
      <RegisterLocalization />
      {crModal && (
        <ConfirmRegistrationModal email={state.email} onClose={handleClose} />
      )}
    </RegisterCompanyMain>
  );
};

export default RegisterPage;
