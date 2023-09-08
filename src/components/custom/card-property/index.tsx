import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  CardMain,
  CardHead,
  CardPrice,
  CardPriceValue,
  CardBody,
  CardAddress,
  CardAddressSmall,
  CardTitle,
  CardProgressValue,
  CardProgressItem,
  CardCompletedMark,
  TableMenu,
  ISpan,
  CardLink,
} from 'components/custom/card-property/styles';
import Image from 'next/image';

import { TPropertyCardProps } from 'components/custom/card-property/types';
import { formatNumber } from 'utilities/extended-proto';
import { CarretDownIcon, EditIcon, CarIcon } from 'components/svg';
import { Button } from 'components/ui';
import { useMenu, useModal } from 'hooks';
import { EditProjectModal } from './elements';
import { convertLocationToFlag } from 'utilities/converters';
import Project from 'constants/project';
import { ApplicationModal } from 'features/opportunities/role/user/elements';

const PropertyCard = ({
  image,
  house,
  link,
  label = 'Apply',
  completed = false,
  dropdown = false,
  refresh,
  ...props
}: TPropertyCardProps) => {
  const [menu, open, handleMenu, buttonRef, position] = useMenu(false);
  const [editModal, openEditModal, closeEditModal] = useModal(false);
  const [applicationModal, openApplicationModal, closeApplicationModal] =
    useModal(false);

  const [flagUrl, setFlagUrl] = useState<string>();
  const router = useRouter();
  useEffect(() => {
    const flag = convertLocationToFlag(house.location);
    setFlagUrl(flag);
  }, [house.location]);

  return (
    <CardMain animation="zoom-in" {...props}>
      {completed && <CardCompletedMark>Filled</CardCompletedMark>}
      <Image
        src={image ? `${Project.apis.v1}/public/images/${image.key}` : ''}
        alt="Supercars thumbnail"
        width={500}
        height={500}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          maxHeight: '250px',
          borderTopRightRadius: 7,
          borderTopLeftRadius: 7,
          cursor: 'pointer',
        }}
        onClick={() => {
          router.push(link);
        }}
      />
      <CardHead>
        {house.rent && (
          <CardPrice>
            Rent
            <CardPriceValue>€{formatNumber(house.rent)}</CardPriceValue>
          </CardPrice>
        )}
        {house.theme && (
          <CardPrice>
            Theme
            <CardPriceValue>{house.theme}</CardPriceValue>
          </CardPrice>
        )}
      </CardHead>
      <CardBody>
        <CardLink
          onClick={() => {
            router.push(link);
          }}
        >
          <CardAddress>
            <CardAddressSmall src={flagUrl} />
            {house.location}
          </CardAddress>
          <CardTitle>{house.name}</CardTitle>
          {house.availableSpots && house.totalSpots && (
            <CardProgressItem>
              Available spots
              <CardProgressValue>
                {house.availableSpots}/{house.totalSpots}
              </CardProgressValue>
            </CardProgressItem>
          )}
          {house.status && (
            <CardProgressItem>
              Status
              <CardProgressValue>{house.status}</CardProgressValue>
            </CardProgressItem>
          )}
        </CardLink>
        {!dropdown && (
          <Button
            color="primary"
            variant="contained"
            size="large"
            disabled={completed}
            onClick={openApplicationModal}
          >
            {label}
          </Button>
        )}
        {dropdown && (
          <Button variant="contained" color="primary">
            <ISpan onClick={handleMenu} ref={buttonRef}>
              {label} <CarretDownIcon style={{ marginLeft: '10px' }} />
            </ISpan>
            {open && (
              <TableMenu
                position={position}
                items={[
                  {
                    icon: <CarIcon />,
                    label: 'View',
                    action: () => {
                      router.push(link);
                      handleMenu();
                    },
                  },
                  {
                    icon: <EditIcon />,
                    label: 'Edit',
                    action: () => {
                      handleMenu();
                      openEditModal();
                    },
                  },
                ]}
                ref={menu}
              />
            )}
          </Button>
        )}
      </CardBody>
      {editModal && (
        <EditProjectModal
          carId={house.id}
          onClose={closeEditModal}
          refresh={refresh}
        />
      )}
      {applicationModal && (
        <ApplicationModal
          carId={house.id}
          onClose={closeApplicationModal}
          houseName={house.name}
        />
      )}
    </CardMain>
  );
};

export default PropertyCard;
