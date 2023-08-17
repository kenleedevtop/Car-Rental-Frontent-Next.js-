import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TExportFinanceModalProps } from 'features/finance/elements/export-finance-modal/types';
import {
  AddProjectModalMain,
  AddProjectHeadline,
  AddProjectDocumentPlaceholder,
} from 'features/opportunities/role/admin/elements/add-project-modal/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { UploadIcon, VerticalDotsIcon } from 'components/svg';

const ExportFinanceModal = ({
  onClose,
  ...props
}: TExportFinanceModalProps) => {
  const [state, setState] = useState();

  const [tab, setTab] = useState(0);

  return (
    <Modal
      size="medium"
      title="Add Project"
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Add
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack>
        <Tabs tabs={['Overview', 'Documents']} value={tab} onValue={setTab} />
        {tab === 0 && (
          <AddProjectModalMain columns={2}>
            <Input
              type="text"
              label="Name"
              value={null}
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="select"
              label="Location"
              value={null}
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="text"
              label="Total Spots"
              value={null}
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="text"
              label="Available Spots"
              value={null}
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="text"
              label="Rent"
              value={null}
              onValue={() => {}}
              placeholder="Please Enter"
            />
            <Input
              type="select"
              label="Theme"
              value={null}
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="select"
              label="Status"
              value={null}
              onValue={() => {}}
              placeholder="Please Select"
            />
            <Input
              type="text"
              label="Info"
              value={null}
              placeholder="Please Enter"
              onValue={() => {}}
              style={{ gridColumn: '1/3' }}
              multiline
              rows={3}
            />
          </AddProjectModalMain>
        )}
        {tab === 1 && (
          <AddProjectModalMain columns={1}>
            <AddProjectHeadline>
              Images <UploadIcon />
            </AddProjectHeadline>
            <AddProjectDocumentPlaceholder>
              IMG_01.png <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
            <AddProjectDocumentPlaceholder>
              IMG_02.png <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
            <AddProjectHeadline>
              Documents <UploadIcon />
            </AddProjectHeadline>
            <AddProjectDocumentPlaceholder>
              Rooms.pdf <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
            <AddProjectDocumentPlaceholder>
              Floor_plan.pdf <VerticalDotsIcon />
            </AddProjectDocumentPlaceholder>
          </AddProjectModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default ExportFinanceModal;
