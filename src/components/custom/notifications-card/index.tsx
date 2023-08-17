import React from 'react';
import {
  NotificationsCardMain,
  NotificationsCardList,
  NotificationCard,
  NotificationTitle,
} from 'components/custom/notifications-card/styles';

import {
  Notification,
  NotificationSettings,
} from 'components/custom/notifications-card/elements';
import { DNotifications } from 'components/custom/notifications-card/data';
import { TNotificationsCardProps } from 'components/custom/notifications-card/types';
import { useAppContext } from 'context';
import { SettingsIcon } from 'components/svg';
import { useModal } from 'hooks';

const NotificationsCard = ({ ...props }: TNotificationsCardProps) => {
  const { role } = useAppContext();

  const [nModal, openNModal, closeNModal] = useModal(false);

  return (
    <>
      {/* {['ADMIN', 'SUPERADMIN'].includes(role) && (
        <NotificationCard>
          <NotificationTitle>
            Notifications <SettingsIcon onClick={openNModal} />{' '}
          </NotificationTitle>
          <NotificationsCardList>
            {DNotifications.map(({ id, ...x }) => (
              <Notification key={id} {...x} />
            ))}
          </NotificationsCardList>
        </NotificationCard>
      )} */}
      {['ADMIN', 'USER'].includes(role) && (
        <NotificationsCardMain title="Notifications" {...props}>
          <NotificationsCardList>
            {DNotifications.map(({ id, ...x }) => (
              <Notification key={id} {...x} />
            ))}
          </NotificationsCardList>
        </NotificationsCardMain>
      )}
      {nModal && <NotificationSettings onClose={closeNModal} />}
    </>
  );
};

export default NotificationsCard;
