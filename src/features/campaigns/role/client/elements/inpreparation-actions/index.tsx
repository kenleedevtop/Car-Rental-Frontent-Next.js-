import React from 'react';
import {
  InPreparationActionsMain,
  InPreparationActionsMenu,
  ISpan,
} from 'features/surveys/role/client/elements/inpreparation-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ContactIcon,
  InfoIcon,
  ManageIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import { TInpreparationActionsMenuProps } from 'features/surveys/role/client/elements/inpreparation-actions/types';
import { CreatedCampaignModal } from 'features/campaigns/role/client/elements';
import { useRouter } from 'next/router';

const InPreparationActions = ({
  data,
  ...props
}: TInpreparationActionsMenuProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [ccModal, openCcModal, closeCcModal] = useModal(false);

  const router = useRouter();

  return (
    <InPreparationActionsMain {...props}>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <InPreparationActionsMenu
          position={position}
          items={[
            {
              icon: <InfoIcon />,
              label: 'Info',
              action: openCcModal,
            },
            // {
            //   icon: <ManageIcon />,
            //   label: 'Manage',
            //   action: () => {},
            // },
            {
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {
                window.location.href = `mailto:client@patientsinfluence.com`;
              },
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {
                router.push(
                  'https://calendly.com/patientsinfluence-client/30min'
                );
              },
            },
          ]}
          ref={menu}
        />
      )}
      {ccModal && <CreatedCampaignModal id={data} onClose={closeCcModal} />}
    </InPreparationActionsMain>
  );
};

export default InPreparationActions;
