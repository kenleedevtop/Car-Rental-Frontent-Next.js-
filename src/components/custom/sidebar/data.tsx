import React from 'react';

import {
  CampaignsIcon,
  ClientsIcon,
  HomeIcon,
  DiscoverIcon,
  FinanceIcon,
  InfluencersIcon,
  ReportsIcon,
  SMLIcon,
  HelpIcon,
  AccountIcon,
} from 'components/svg';
import { TSidebarItem } from 'components/custom/sidebar/types';

export const DSidebarItems: Array<TSidebarItem> = [
  {
    id: 1,
    type: 'route',
    icon: <HomeIcon />,
    label: 'Home',
    location: '/',
    roles: ['admin', 'influencer', 'client'],
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
    type: 'route',
    icon: <InfluencersIcon />,
    label: 'Influencers',
    location: '/influencers',
    roles: ['admin'],
  },
  {
    id: 4,
    type: 'route',
    icon: <ClientsIcon />,
    label: 'Clients',
    location: '/clients',
    roles: ['admin'],
  },
  {
    id: 5,
    type: 'route',
    icon: <CampaignsIcon />,
    label: 'Campaigns',
    location: '/campaigns',
    roles: ['admin', 'influencer', 'client'],
  },
  {
    id: 6,
    type: 'route',
    icon: <ReportsIcon />,
    label: 'Reports',
    location: '/reports',
    roles: ['admin', 'client'],
  },
  {
    id: 7,
    type: 'route',
    icon: <FinanceIcon />,
    label: 'Income',
    location: '/income',
    roles: ['influencer'],
  },
  {
    id: 8,
    type: 'route',
    icon: <SMLIcon />,
    label: 'SML',
    location: '/sml',
    roles: ['admin', 'client'],
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
    roles: ['influencer', 'client'],
  },
  {
    id: 12,
    type: 'route',
    icon: <AccountIcon />,
    label: 'Account',
    location: '/account',
    roles: ['influencer', 'client'],
  },
];
