import React, { useState } from 'react';
import { Modal } from 'components/custom';
import { TLostPasswordModalProps } from 'features/login/elements/lost-password-modal/types';
import {
  LostPasswordModalMain,
  LostPasswordTitle,
  LostPasswordText,
  LostPasswordInput,
} from 'features/login/elements/lost-password-modal/styles';
import { Button } from 'components/ui';
import { AuthorizationAPI } from 'api';
import { useSnackbar } from 'hooks';
import { emailSchema } from 'utilities/validators';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const LostPasswordModal = ({ onClose, ...props }: TLostPasswordModalProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { push } = useSnackbar();

  const handleReset = async () => {
    try {
      const { message } = await AuthorizationAPI.resetPassword(
        { email },
        locale
      );
      push(message, { variant: 'success' });
      onClose();
    } catch (e: any) {
      push(e.response.data.message, { variant: 'error' });
    }
  };

  const isDisabled = !email.trim() || error;

  return (
    <Modal size="medium" onClose={onClose} {...props}>
      <LostPasswordModalMain columns={1}>
        <LostPasswordTitle>{t('Lost your password?')}</LostPasswordTitle>
        <LostPasswordText>
          {t(
            "Forgot your password? No problem! Just enter your email address below and we'll send you a link to reset your password."
          )}
          <p>
            {t(
              "If you're still having trouble, please contact our support team at support@patientsinfluence.com for assistance."
            )}
          </p>
        </LostPasswordText>
        <LostPasswordInput
          type="text"
          placeholder={t('Please Enter your Email') as string}
          value={email}
          onValue={(input) => setEmail(input)}
          errorCallback={setError}
          validators={[
            {
              message: 'Not a valid email format',
              validator: (v) => {
                try {
                  emailSchema.validateSync({ email: v });
                  return true;
                } catch {
                  return false;
                }
              },
            },
          ]}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleReset}
          disabled={isDisabled}
        >
          {t('SEND')}
        </Button>
      </LostPasswordModalMain>
    </Modal>
  );
};

export default LostPasswordModal;
