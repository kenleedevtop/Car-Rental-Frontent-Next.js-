import React, { useState } from 'react';
import {
  SidebarMain,
  SidebarLogo,
  SidebarItems,
  SidebarLogoLink,
  SidebarCancel,
} from 'components/custom/sidebar/styles';
import {
  SidebarItem,
  SidebarItemNested,
} from 'components/custom/sidebar/elements';
import { DSidebarItems } from 'components/custom/sidebar/data';
import { TSidebarProps } from 'components/custom/sidebar/types';
import { useAppContext } from 'context';
import { CancelIcon } from 'components/svg';
import { useRouter } from 'next/router';

const Sidebar = ({ ...props }: TSidebarProps) => {
  const { role, user, handleMobileMenu, showMobileMenu } = useAppContext();

  const router = useRouter();

  const handleSidebar = () => {
    if (window.innerWidth < 1200) {
      handleMobileMenu(!showMobileMenu);
    }
  };

  const nestedArray = [
    {
      id: 0,
      state: false,
    },
    {
      id: 1,
      state: false,
    },
    {
      id: 2,
      state: false,
    },
  ];

  const [nested, setNested] = useState<any>(nestedArray);

  const handleNested = (id: number | string) => {
    const helper = [...nested];

    helper.forEach((x: any) => {
      if (x.id === id) {
        if (x.state) return;
        x.state = !x.state;
      } else {
        x.state = false;
      }

      // return null;
    });

    setNested(helper);
  };

  // React.useEffect(() => {
  //   if (role === 'INFLUENCER') {
  //     const allowedIllegalPaths = ['/account', '/help'];
  //     if (user.status >= 5 && !allowedIllegalPaths.includes(router.pathname)) {
  //       router.push('/account');
  //     }
  //   }
  // }, [router, user, role]);

  return (
    <SidebarMain {...props}>
      <SidebarCancel onClick={handleSidebar}>
        <CancelIcon />
      </SidebarCancel>
      <SidebarLogoLink href="/">
        <SidebarLogo src="/static/assets/images/PatientsInfluence.svg" />
      </SidebarLogoLink>
      <SidebarItems>
        {DSidebarItems.filter((x) => x.roles.includes(role)).map((x, index) =>
          x.type === 'nested' ? (
            <SidebarItemNested
              label={x.label}
              icon={x.icon}
              items={x.items}
              key={x.id}
              item={nested[index - 1]}
              onClick={() => {
                handleNested(index - 1);
              }}
              action={handleSidebar}
            />
          ) : (
            <SidebarItem
              label={x.label}
              icon={x.icon}
              location={x.location}
              key={x.id}
              isDisabled={
                x.influencerStatus
                  ? !x.influencerStatus?.includes(user.status)
                  : false
              }
              onClick={handleSidebar}
            />
          )
        )}
      </SidebarItems>
    </SidebarMain>
  );
};

export default Sidebar;
