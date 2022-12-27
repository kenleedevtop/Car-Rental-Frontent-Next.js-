import React from 'react';

import {
  CampaignsIcon,
  ClientsIcon,
  HomeIcon,
  DiscoverIcon,
  FinanceIcon,
  ReportsIcon,
  SMLIcon,
  HelpIcon,
  AccountIcon,
  SurveyIcon,
} from 'components/svg';
import { TSidebarItem } from 'components/custom/sidebar/types';

export const DSidebarItems: Array<TSidebarItem> = [
  {
    id: 1,
    type: 'route',
    icon: <HomeIcon />,
    label: 'Home',
    location: '/',
    roles: ['admin', 'influencer', 'client', 'ambasador'],
  },
  {
    id: 2,
    type: 'nested',
    icon: <DiscoverIcon />,
    label: 'Discover',
    roles: ['admin'],
    items: [
      {
        id: 13,
        label: 'Influencers',
        location: '/discover/influencers',
      },
      {
        id: 14,
        label: 'Clients',
        location: '/discover/clients',
      },
    ],
  },
  {
    id: 3,
    type: 'nested',
    icon: <ClientsIcon />,
    label: 'Users',
    roles: ['admin'],
    items: [
      {
        id: 15,
        label: 'Influencers',
        location: '/users/influencers',
      },
      {
        id: 16,
        label: 'Clients',
        location: '/users/clients',
      },
      {
        id: 17,
        label: 'Ambassadors',
        location: '/users/ambasadors',
      },
    ],
  },
  {
    id: 4,
    type: 'route',
    icon: <CampaignsIcon />,
    label: 'Campaigns',
    location: '/campaigns',
    roles: ['admin', 'influencer', 'client'],
  },
  {
    id: 5,
    type: 'route',
    icon: <ReportsIcon />,
    label: 'Reports',
    location: '/reports',
    roles: ['admin', 'client'],
  },
  {
    id: 6,
    type: 'route',
    icon: <SMLIcon />,
    label: 'SML',
    location: '/sml',
    roles: ['admin', 'client'],
  },
  {
    id: 7,
    type: 'route',
    icon: <SurveyIcon />,
    label: 'Surveys',
    location: '/surveys',
    roles: ['admin', 'influencer', 'client'],
  },
  {
    id: 8,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Income',
    location: '/income',
    roles: ['influencer', 'ambasador'],
  },
  {
    id: 9,
    type: 'route',
    icon: <SMLIcon />,
    label: 'Benefits',
    location: '/benefits',
    roles: ['influencer'],
  },

  {
    id: 10,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Finance',
    location: '/finance',
    roles: ['admin'],
  },
  {
    id: 11,
    type: 'route',
    icon: <HelpIcon />,
    label: 'Help',
    location: '/help',
    roles: ['influencer', 'client', 'ambasador'],
  },
  {
    id: 12,
    type: 'route',
    icon: <AccountIcon />,
    label: 'Account',
    location: '/account',
    roles: ['influencer', 'client', 'ambasador'],
  },
];
