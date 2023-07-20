import React, { useState } from 'react';

import {
  IncomePageMain,
  IncomePageCharts,
  IncomePageChartsGrid,
  IncomePageFilter,
  IncomePageFilterActions,
  IncomePageFilterContainer,
  WithdrawContainer,
  WithdrawGrid,
  WithdrawGridLeft,
  WithdrawGridRight,
  WithdrawNameContainer,
  AmbassadorInput,
} from 'features/income/styles';

import { DGenerateIncomeFilter } from 'features/income/role/influencer/data';

import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  CurrencyFeedback,
  Tabs,
} from 'components/custom';
import {
  SlidersHorizontalIcon,
  UserFocusIcon,
  CampaignsIcon,
  SurveysAIcon,
  DonationsIcon,
  AffiliateIcon,
  IncomeSmallIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Card, Input, InputGroup, Pagination } from 'components/ui';
import { Collapse, Stack } from 'components/system';
import { useModal } from 'hooks';
import {
  ExportIncomePModal,
  ExportIncomeSModal,
} from 'features/income/role/influencer/elements';
import Note from 'components/custom/note';

const IncomePage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState<any>(DGenerateIncomeFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [eiPModal, openEipModal, closeEipModal] = useModal(false);
  const [eiSModal, openEisModal, closeEisModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateIncomeFilter());
  };

  return (
    <IncomePageMain>
      <IncomePageCharts>
        <IncomePageChartsGrid>
          <CardWithChart
            title="Campaigns"
            icon={<CampaignsIcon />}
            smallIcon={<IncomeSmallIcon />}
            percent={5}
            count={90.56}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Surveys"
            icon={<SurveysAIcon />}
            smallIcon={<IncomeSmallIcon />}
            percent={5}
            count={90.56}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Affiliate program"
            icon={<AffiliateIcon />}
            smallIcon={<IncomeSmallIcon />}
            percent={5}
            count={90.56}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Donations"
            icon={<DonationsIcon />}
            smallIcon={<IncomeSmallIcon />}
            percent={5}
            count={90.56}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
        </IncomePageChartsGrid>
      </IncomePageCharts>
      <Card>
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Account Statement', 'Affiliate Program', 'Withdraw']}
          style={
            window.innerWidth < 500
              ? {
                  maxWidth: '77vw',
                }
              : {}
          }
        />
        {tab === 0 && (
          <CardWithText
            title="Account Statement"
            style={
              window.innerWidth < 600
                ? { padding: '1.25rem 10px', boxShadow: 'unset' }
                : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
            }
            actions={[
              <Button
                color={filterOpen ? 'secondary' : 'default'}
                variant="contained"
                onClick={toggleFilter}
                startIcon={<SlidersHorizontalIcon width="18" height="18" />}
              >
                Filters
              </Button>,
              <Button
                color="default"
                variant="contained"
                onClick={openEisModal}
              >
                Export
              </Button>,
            ]}
          >
            <Stack>
              <Collapse removeGap in={filterOpen}>
                <IncomePageFilter>
                  <IncomePageFilterContainer>
                    <Input
                      type="text"
                      label="Search"
                      placeholder="Please Enter"
                      value={filter.search}
                      onValue={(search) => setFilter({ ...filter, search })}
                    />
                    <Input
                      type="select"
                      label="Type"
                      placeholder="Please Enter"
                      value={filter.type}
                      onValue={(type) => setFilter({ ...filter, type })}
                    />
                    <InputGroup
                      label="Date"
                      inputRatio="1fr 1fr"
                      elements={[
                        {
                          value: filter.start,
                          onValue: (start) => setFilter({ ...filter, start }),
                          type: 'date',
                          placeholder: 'Start date',
                        },
                        {
                          value: filter.end,
                          onValue: (end) => setFilter({ ...filter, end }),
                          type: 'date',
                          placeholder: 'End date',
                        },
                      ]}
                    />
                    <AmbassadorInput
                      type="min-max"
                      label="Amount"
                      value={filter.amount}
                      onValue={(amount) => setFilter({ ...filter, amount })}
                    />
                  </IncomePageFilterContainer>
                  <IncomePageFilterActions direction="horizontal">
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
                  </IncomePageFilterActions>
                </IncomePageFilter>
              </Collapse>
              <CheckboxTable
                head={[
                  {
                    reference: 'statement',
                    label: 'Statement',
                    visible: true,
                  },
                  {
                    reference: 'type',
                    label: 'Type',
                    visible: true,
                  },
                  {
                    reference: 'date',
                    label: 'Date',
                    visible: true,
                  },
                  {
                    reference: 'amount',
                    label: 'Amount',
                    visible: true,
                  },
                ]}
                items={[]}
                renderItem={() => {}}
              />

              <Pagination count={0} />
            </Stack>
          </CardWithText>
        )}
        {tab === 1 && (
          <CardWithText
            title="Affiliate Program"
            style={
              window.innerWidth < 600
                ? { padding: '1.25rem 0', boxShadow: 'unset' }
                : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
            }
            actions={[
              <Button
                color={filterOpen ? 'secondary' : 'default'}
                variant="contained"
                onClick={toggleFilter}
                startIcon={<SlidersHorizontalIcon width="18" height="18" />}
              >
                Filters
              </Button>,
              <Button
                color="default"
                variant="contained"
                onClick={openEipModal}
              >
                Export
              </Button>,
            ]}
          >
            <Stack>
              <Collapse removeGap in={filterOpen}>
                <IncomePageFilter>
                  <IncomePageFilterContainer>
                    <Input
                      type="select"
                      label="Search"
                      placeholder="Please Enter"
                      value={filter.searchForUser}
                      onValue={(searchForUser) =>
                        setFilter({ ...filter, searchForUser })
                      }
                    />
                    <InputGroup
                      label="Start & Finish"
                      inputRatio="200px 200px"
                      elements={[
                        {
                          value: filter.registrationDateStart,
                          onValue: (registrationDateStart) =>
                            setFilter({ ...filter, registrationDateStart }),
                          type: 'date',
                          placeholder: 'Start date',
                        },
                        {
                          value: filter.registrationDateEnd,
                          onValue: (registrationDateEnd) =>
                            setFilter({ ...filter, registrationDateEnd }),
                          type: 'date',
                          placeholder: 'End date',
                        },
                      ]}
                    />
                    <AmbassadorInput
                      type="min-max"
                      label="Amount"
                      value={filter.amountP}
                      onValue={(amountP) => setFilter({ ...filter, amountP })}
                    />
                  </IncomePageFilterContainer>
                  <IncomePageFilterActions direction="horizontal">
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
                  </IncomePageFilterActions>
                </IncomePageFilter>
              </Collapse>
              <CheckboxTable
                head={[
                  {
                    reference: 'name',
                    label: 'Name',
                    visible: true,
                  },
                  {
                    reference: 'registrationDate',
                    label: 'Registration Date',
                    visible: true,
                  },
                  {
                    reference: 'lifetimeValue',
                    label: 'Lifetime Value',
                    visible: true,
                  },
                ]}
                items={[]}
                renderItem={() => {}}
              />

              <Pagination count={0} />
            </Stack>
          </CardWithText>
        )}
        {tab === 2 && (
          <WithdrawContainer>
            <Stack>
              <WithdrawGrid>
                <WithdrawGridLeft>
                  <Stack>
                    <WithdrawNameContainer direction="horizontal">
                      <Input
                        type="text"
                        label="First Name"
                        placeholder="Please Enter"
                        value={filter.firstName}
                        onValue={(firstName) =>
                          setFilter({ ...filter, firstName })
                        }
                      />
                      <Input
                        type="text"
                        label="Last Name"
                        placeholder="Please Enter"
                        value={filter.lastName}
                        onValue={(lastName) =>
                          setFilter({ ...filter, lastName })
                        }
                      />
                    </WithdrawNameContainer>
                    <Input
                      type="text"
                      label="Bank Name"
                      placeholder="Please Enter"
                      value={filter.bankName}
                      onValue={(bankName) => setFilter({ ...filter, bankName })}
                    />
                    <Input
                      type="text"
                      label="Bank Address"
                      placeholder="Please Enter"
                      value={filter.bankAddress}
                      onValue={(bankAddress) =>
                        setFilter({ ...filter, bankAddress })
                      }
                    />
                    <Input
                      type="text"
                      label="IBAN"
                      placeholder="Please Enter"
                      value={filter.iban}
                      onValue={(iban) => setFilter({ ...filter, iban })}
                    />
                  </Stack>
                </WithdrawGridLeft>
                <WithdrawGridRight>
                  <Stack>
                    <Input
                      label="Enter Amount (Available amount is 0.00)"
                      type="number"
                      startAdornment="CHF"
                      value={filter.amountW}
                      onValue={(amount) =>
                        setFilter({ ...filter, amountW: amount })
                      }
                    />
                    <CurrencyFeedback value={filter.amountW} />
                    <Input
                      type="text"
                      label="Confirm Password"
                      placeholder="Password"
                      value={filter.password}
                      onValue={(password) => setFilter({ ...filter, password })}
                    />
                    <Note showIcon>
                      Enter your password to make sure it is really you.
                    </Note>
                    <Button color="primary" variant="contained">
                      Withdraw
                    </Button>
                  </Stack>
                </WithdrawGridRight>
              </WithdrawGrid>
            </Stack>
          </WithdrawContainer>
        )}
      </Card>
      {eiPModal && <ExportIncomePModal onClose={closeEipModal} />}
      {eiSModal && <ExportIncomeSModal onClose={closeEisModal} />}
    </IncomePageMain>
  );
};

export default IncomePage;
