import React, { useState, Children } from 'react';
import { CallendlyWidget, Modal } from 'components/custom';
import { TApplyModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  RTEContainer,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { ApplicationAPI, ShareAPI } from 'api';
import { useSnackbar } from 'hooks';
import { useAppContext } from 'context';
import { calculateLeftDays } from 'utilities/calendar';

const ExportFinanceModal = ({
  onClose,
  refresh,
  carId,
  carName,
  availableShares,
  sharePrice,
  totalShares,
  startDate,

  ...props
}: TApplyModalProps) => {
  const [state, setState] = useState();
  const [totalPrice, setTotalPrice] = useState('');
  const [shares, setShares] = useState({ label: '', value: 0 });
  const { push } = useSnackbar();
  const { user } = useAppContext();

  const leftDays = calculateLeftDays(startDate);
  const DL = leftDays > 300 ? 300 : leftDays;

  const sendApplication = async () => {
    try {
      const data = {
        carId: carId,
        carName: carName,
        sharesCount: shares.value,
      };
      const car = await ApplicationAPI.apply(data);
      const shareData = {
        count: shares.value,
        weekendDays: 13 * shares.value,
        peakSeasonDays: 7 * shares.value,
        reservedDays: 0,
        carId: carId,
        applicationId: car.id,
        availableDays: Math.floor(totalShares ? (DL / totalShares) * shares.value : 0),
        ownerId: user.id,
      };
      const share = await ShareAPI.createShare(shareData);
      onClose();
      refresh();
      push(`Your application for ${carName} has been successfully sent.`, { variant: 'success' });
    } catch {
      push('Something went wrong with your application.', {
        variant: 'error',
      });
    }
  };

  return (
    <Modal
      size="medium"
      title="Application"
      actions={Children.toArray([
        <></>,
      ])}
      onClose={onClose}
      {...props}
    >
      <AddProjectModalMain>
        <Input
          type="select"
          label="Shares"
          options={Array.from({ length: availableShares ? availableShares : 0 }, (_, i) => ({
            label: `${i + 1}`,
            value: `${i + 1}`,
          }))}
          value={shares}
          onValue={(e) => {
            if (e) {
              const tmp = sharePrice ? sharePrice : 0;
              setTotalPrice((e.value * tmp).toString());
              setShares({ label: e.value, value: parseInt(e.value) });
            } else {
              setTotalPrice('');
              setShares({ label: '', value: 0 });
            }
          }}
          placeholder="Please Select"
        />
        <Input
          type="text"
          label="Total Price"
          value={totalPrice ? '€' + totalPrice : ''}
          onValue={() => { }}
          placeholder="Please Select"
        />
        <RTEContainer>
          <CallendlyWidget onScheduled={sendApplication} shareCount={shares.value} name={user.firstName + ' ' + user.lastName} email={user.email} />
        </RTEContainer>
      </AddProjectModalMain>
    </Modal>
  );
};

export default ExportFinanceModal;
