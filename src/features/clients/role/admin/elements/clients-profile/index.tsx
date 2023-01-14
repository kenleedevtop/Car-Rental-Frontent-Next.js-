import React, { useState } from 'react';
import { Modal, Tabs } from 'components/custom';
import { TClientsProfileModalProps } from 'features/clients/role/admin/elements/clients-profile/types';
import {
  ClientsProfileModalMain,
  ClientTitle,
} from 'features/clients/role/admin/elements/clients-profile/style';
import { Button, Input } from 'components/ui';
import { Stack } from 'components/system';
import { EditIcon } from 'components/svg';

const ClientsProfile = ({ onClose, ...props }: TClientsProfileModalProps) => {
  const [state, setState] = useState({
    clientName: '',
    email: '',
    role: '',
    phone: '',
    company: null,
    product: null,
    industry: null,
    diseaseArea: null,
    location: null,
    market: null,

    totalCampaigns: '',
    campaignsLastMonth: '',
    totalReports: '',
    reportsLastMonth: '',
    totalSMLReports: '',
    smlLastMonth: '',
    totalSurveys: '',
    surveysLastMonth: '',
    totalRevenue: '',
    revenueLastMonth: '',

    comments: [],
    labels: [],
    meetings: [],
    reminders: [],
    tasks: [],
    onPlatformSince: null,
    status: '',
    statusChange: null,
  });

  const [tab, setTab] = useState(0);

  const [editActive, setEditActive] = useState(true);

  const handleEdit = () => {
    setEditActive((prev) => !prev);
  };

  return (
    <Modal
      size="medium"
      title={
        <ClientTitle>
          First Name Last Name <EditIcon onClick={handleEdit} />
        </ClientTitle>
      }
      actions={[
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          Close
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <Stack style={{ height: '500px' }}>
        <Tabs
          tabs={['Info', 'Projects', 'Management']}
          value={tab}
          onValue={setTab}
        />
        {tab === 0 && (
          <ClientsProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Client Name"
                placeholder="Please Enter"
                value={state.clientName}
                onValue={(clientName) => setState({ ...state, clientName })}
              />
              <Input
                disabled={editActive}
                type="text"
                label="Email"
                placeholder="Please Enter"
                value={state.email}
                onValue={(email) => setState({ ...state, email })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Role"
                placeholder="Please Enter"
                value={state.role}
                onValue={(role) => setState({ ...state, role })}
              />
              <Input
                disabled={editActive}
                type="text"
                label="Phone Number"
                placeholder="Please Enter"
                value={state.phone}
                onValue={(phone) => setState({ ...state, phone })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="select"
                label="Company"
                placeholder="Please Select"
                value={state.company}
                onValue={(company) => setState({ ...state, company })}
              />
              <Input
                disabled={editActive}
                type="select"
                label="Product"
                placeholder="Please Select"
                value={state.product}
                onValue={(product) => setState({ ...state, product })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="select"
                label="Industry"
                placeholder="Please Select"
                value={state.industry}
                onValue={(industry) => setState({ ...state, industry })}
              />
              <Input
                disabled={editActive}
                type="select"
                label="Disease Area"
                placeholder="Please Select"
                value={state.diseaseArea}
                onValue={(diseaseArea) => setState({ ...state, diseaseArea })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="select"
                label="Location"
                placeholder="Please Select"
                value={state.location}
                onValue={(location) => setState({ ...state, location })}
              />
              <Input
                disabled={editActive}
                type="select"
                label="Market"
                placeholder="Please Select"
                value={state.market}
                onValue={(market) => setState({ ...state, market })}
              />
            </Stack>
          </ClientsProfileModalMain>
        )}
        {tab === 1 && (
          <ClientsProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Total Campaigns"
                placeholder="Please Enter"
                value={state.totalCampaigns}
                onValue={(totalCampaigns) =>
                  setState({ ...state, totalCampaigns })
                }
              />
              <Input
                disabled={editActive}
                type="text"
                label="Campaigns in Last 30 Days"
                placeholder="Please Enter"
                value={state.campaignsLastMonth}
                onValue={(campaignsLastMonth) =>
                  setState({ ...state, campaignsLastMonth })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Total Reports"
                placeholder="Please Enter"
                value={state.totalReports}
                onValue={(totalReports) => setState({ ...state, totalReports })}
              />
              <Input
                disabled={editActive}
                type="text"
                label="Reports in Last 30 Days"
                placeholder="Please Enter"
                value={state.reportsLastMonth}
                onValue={(reportsLastMonth) =>
                  setState({ ...state, reportsLastMonth })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Total SML Reports"
                placeholder="Please Enter"
                value={state.totalSMLReports}
                onValue={(totalSMLReports) =>
                  setState({ ...state, totalSMLReports })
                }
              />
              <Input
                disabled={editActive}
                type="text"
                label="SML Reports in Last 30 Days"
                placeholder="Please Enter"
                value={state.smlLastMonth}
                onValue={(smlLastMonth) => setState({ ...state, smlLastMonth })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Total Surveys"
                placeholder="Please Enter"
                value={state.totalSurveys}
                onValue={(totalSurveys) => setState({ ...state, totalSurveys })}
              />
              <Input
                disabled={editActive}
                type="text"
                label="Surveys in Last 30 Days"
                placeholder="Please Enter"
                value={state.surveysLastMonth}
                onValue={(surveysLastMonth) =>
                  setState({ ...state, surveysLastMonth })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Total Revenue"
                placeholder="Please Enter"
                value={state.totalRevenue}
                onValue={(totalRevenue) => setState({ ...state, totalRevenue })}
              />
              <Input
                disabled={editActive}
                type="text"
                label="Revenue in Last 30 Days"
                placeholder="Please Enter"
                value={state.revenueLastMonth}
                onValue={(revenueLastMonth) =>
                  setState({ ...state, revenueLastMonth })
                }
              />
            </Stack>
          </ClientsProfileModalMain>
        )}
        {tab === 2 && (
          <ClientsProfileModalMain columns={1}>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="multiselect"
                label="Comments"
                placeholder="Please Enter"
                value={state.comments}
                onValue={(comments) => setState({ ...state, comments })}
              />
              <Input
                disabled={editActive}
                type="multiselect"
                label="Labels"
                placeholder="Please Enter"
                value={state.labels}
                onValue={(labels) => setState({ ...state, labels })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="multiselect"
                label="Meetings"
                placeholder="Please Enter"
                value={state.meetings}
                onValue={(meetings) => setState({ ...state, meetings })}
              />
              <Input
                disabled={editActive}
                type="multiselect"
                label="Reminders"
                placeholder="Please Enter"
                value={state.reminders}
                onValue={(reminders) => setState({ ...state, reminders })}
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="multiselect"
                label="Tasks"
                placeholder="Please Enter"
                value={state.tasks}
                onValue={(tasks) => setState({ ...state, tasks })}
              />
              <Input
                disabled={editActive}
                type="date"
                label="On Platform Since"
                placeholder="Please Enter"
                value={state.onPlatformSince}
                onValue={(onPlatformSince) =>
                  setState({ ...state, onPlatformSince })
                }
              />
            </Stack>
            <Stack direction="horizontal">
              <Input
                disabled={editActive}
                type="text"
                label="Status"
                placeholder="Please Enter"
                value={state.status}
                onValue={(status) => setState({ ...state, status })}
              />
              <Input
                disabled={editActive}
                type="date"
                label="Status Change"
                placeholder="Please Enter"
                value={state.statusChange}
                onValue={(statusChange) => setState({ ...state, statusChange })}
              />
            </Stack>
          </ClientsProfileModalMain>
        )}
      </Stack>
    </Modal>
  );
};

export default ClientsProfile;
