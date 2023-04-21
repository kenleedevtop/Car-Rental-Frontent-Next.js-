import React, { useState } from 'react';
import {
  ClientsPageMain,
  ClientsPageCharts,
  ClientsPageFilter,
  ClientsPageFilterActions,
} from 'features/clients/styles';
import {
  CardWithChart,
  CardWithText,
  Menu,
  CheckboxTable,
  Title,
} from 'components/custom';
import {
  ContactedIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  HospitalIcon,
  IdentifiedIcon,
  RegisteredIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DClientsHead, DGenerateClientsFilter } from 'features/clients/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal } from 'hooks';
import {
  ContactClientsModal,
  DeleteClientsModal,
  ExportClientsModal,
  ClientsProfile,
  NoteClients,
  NotificationsSettingsModal,
  ScheduleClientsModal,
} from 'features/clients/role/admin/elements';

const ClientsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateClientsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateClientsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [eModal, openEModal, closeEModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [nsModal, openNsModal, closeNsModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);

  return (
    <ClientsPageMain>
      <ClientsPageCharts>
        <CardWithChart
          title="Identified"
          icon={<IdentifiedIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Contacted"
          icon={<ContactedIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Registered"
          icon={<RegisteredIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Total"
          icon={<HospitalIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </ClientsPageCharts>
      <CardWithText
        title="Clients"
        description="More than 290+ new Clients"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEModal}>
            Export
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <ClientsPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Enter"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
                />
                <Input
                  type="multiselect"
                  label="Industry"
                  placeholder="Please Select"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
                />
                <Input
                  type="multiselect"
                  label="Company"
                  placeholder="Please Select"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="multiselect"
                  label="Role"
                  placeholder="Please Select"
                  value={filter.role}
                  onValue={(role) => setFilter({ ...filter, role })}
                />
                <Input
                  type="multiselect"
                  label="Product"
                  placeholder="Please Select"
                  value={filter.product}
                  onValue={(product) => setFilter({ ...filter, product })}
                />
                <Input
                  type="multiselect"
                  label="Ambassador"
                  placeholder="Please Select"
                  value={filter.ambassador}
                  onValue={(ambassador) => setFilter({ ...filter, ambassador })}
                />
                <Input
                  type="multiselect"
                  label="Disease Area"
                  placeholder="Please Select"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="multiselect"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="multiselect"
                  label="Market"
                  placeholder="Please Select"
                  value={filter.market}
                  onValue={(market) => setFilter({ ...filter, market })}
                />
                <Input
                  type="select"
                  label="Project Status"
                  placeholder="Please Select"
                  value={filter.projectStatus}
                  onValue={(projectStatus) =>
                    setFilter({ ...filter, projectStatus })
                  }
                />
                <InputGroup
                  label="Date Joined"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      value: filter.joinedStart,
                      onValue: (joinedStart) =>
                        setFilter({ ...filter, joinedStart }),
                      type: 'date',
                      placeholder: 'From',
                    },
                    {
                      value: filter.joinedEnd,
                      onValue: (joinedEnd) =>
                        setFilter({ ...filter, joinedEnd }),
                      type: 'date',
                      placeholder: 'To',
                    },
                  ]}
                />
                <Input
                  type="multiselect"
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="multiselect"
                  label="Schedule"
                  placeholder="Please Select"
                  value={filter.schedule}
                  onValue={(schedule) => setFilter({ ...filter, schedule })}
                />
                <Input
                  type="multiselect"
                  label="Project"
                  placeholder="Please Select"
                  value={filter.project}
                  onValue={(project) => setFilter({ ...filter, project })}
                />
                <Input
                  type="min-max"
                  label="Total Project"
                  value={filter.totalProject}
                  onValue={(totalProject) =>
                    setFilter({ ...filter, totalProject })
                  }
                />
                <Input
                  type="min-max"
                  label="Project Last 30 Days"
                  value={filter.projectLast30Days}
                  onValue={(projectLast30Days) =>
                    setFilter({ ...filter, projectLast30Days })
                  }
                />
                <Input
                  type="min-max"
                  label="Budget"
                  placeholder="Please Select"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
                />
              </Grid>
              <ClientsPageFilterActions direction="horizontal">
                <Button color="primary" variant="contained">
                  Filter
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={clearFilters}
                >
                  Clear filter
                </Button>
              </ClientsPageFilterActions>
            </ClientsPageFilter>
          </Collapse>
          <Title title="Clients" />
          <CheckboxTable
            head={DClientsHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openDiModal}>
              Delete Client
            </Button>
            <Button color="primary" variant="contained" onClick={openCiModal}>
              Contact Client
            </Button>
            <Button color="primary" variant="contained" onClick={openSiModal}>
              Schedule Client
            </Button>
            <Button color="primary" variant="contained" onClick={openNsModal}>
              Notifications Settings
            </Button>
            <Button color="primary" variant="contained" onClick={openIpModal}>
              Client Profile
            </Button>
            <Button color="primary" variant="contained" onClick={openNiModal}>
              Note Client
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenu}>
              Action button
            </Button>
          </Stack>
          {open && (
            <Menu
              items={[
                {
                  icon: <ContactIcon />,
                  label: 'Contact',
                  action: () => {},
                },
                {
                  icon: <EditIcon />,
                  label: 'Note',
                  action: () => {},
                },
                {
                  icon: <ScheduleIcon />,
                  label: 'Schedule',
                  action: () => {},
                },
                {
                  icon: <DeleteIcon />,
                  label: 'Remove',
                  action: () => {},
                },
              ]}
              ref={menu}
            />
          )}
        </Stack>
      </CardWithText>
      {eModal && <ExportClientsModal onClose={closeEModal} />}
      {diModal && <DeleteClientsModal onClose={closeDiModal} />}
      {ciModal && <ContactClientsModal onClose={closeCiModal} />}
      {siModal && <ScheduleClientsModal onClose={closeSiModal} />}
      {nsModal && <NotificationsSettingsModal onClose={closeNsModal} />}
      {ipModal && <ClientsProfile onClose={closeIpModal} />}
      {niModal && <NoteClients onClose={closeNiModal} />}
    </ClientsPageMain>
  );
};

export default ClientsPage;
