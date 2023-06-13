import React from 'react';
import {
  DiscoverActionsMain,
  DiscoverActionsMenu,
  ISpan,
} from 'features/influencers/role/admin/elements/discover-actions/styles';
import { useMenu, useModal } from 'hooks';
import {
  ContactIcon,
  DeleteIcon,
  EditIcon,
  ScheduleIcon,
  VerticalDotsIcon,
} from 'components/svg';
import {
  ContactInfluencerModal,
  DeleteInfluencerModal,
  NoteInfluencer,
  ScheduleInfluencerModal,
} from 'features/influencers/role/admin/elements';
import { TDiscoverActionsMenuProps } from 'features/influencers/role/admin/elements/discover-actions/types';

const DiscoverActions = ({ data, ...props }: TDiscoverActionsMenuProps) => {
  const [menu, open, setOpen, buttonRef, position] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);

  return (
    <DiscoverActionsMain>
      <ISpan onClick={handleMenu} ref={buttonRef}>
        <VerticalDotsIcon onClick={handleMenu} />
      </ISpan>
      {open && (
        <DiscoverActionsMenu
          position={position}
          items={[
            {
              icon: <ContactIcon />,
              label: 'Contact',
              action: () => {
                openCiModal();
                handleMenu();
              },
            },
            {
              icon: <EditIcon />,
              label: 'Note',
              action: () => {
                openNiModal();
                handleMenu();
              },
            },
            {
              icon: <ScheduleIcon />,
              label: 'Schedule',
              action: () => {
                openSiModal();
                handleMenu();
              },
            },
            {
              icon: <DeleteIcon />,
              label: 'Remove',
              action: () => {
                openDiModal();
                handleMenu();
              },
            },
          ]}
          ref={menu}
        />
      )}
      {ciModal && (
        <ContactInfluencerModal id={data.id} onClose={closeCiModal} />
      )}
      {niModal && <NoteInfluencer onClose={closeNiModal} />}
      {diModal && (
        <DeleteInfluencerModal
          id={data.id}
          onClose={() => {
            closeDiModal();
          }}
        />
      )}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />}
    </DiscoverActionsMain>
  );
};

export default DiscoverActions;
