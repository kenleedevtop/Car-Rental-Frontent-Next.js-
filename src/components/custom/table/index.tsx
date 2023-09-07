import React, { useState } from 'react';
import {
  TableWrapper,
  TableMain,
  TableHead,
  TableBody,
  TableHeadCell,
  TableBodyCell,
  TableHeadRow,
  TableBodyRow,
  TableEmpty,
} from 'components/custom/table/styles';
import { TTableProps, TTableHeadItem } from 'components/custom/table/types';
import getObjectDynamicPath from 'utilities/extended-proto/index';
import { useModal } from 'hooks';
import { Modal } from 'components/custom';
import { Button } from 'components/ui';
import { Reorder } from 'framer-motion';
import { OrderListDraggable } from './elements';

const Table = ({
  head = [],
  items = [],
  renderItem = (_b) => {},
}: TTableProps) => {
  const [localHead, setLocalHead] = useState(head);
  const [tModal, openTModal, closeTModal] = useModal(false);

  const visibleItems = localHead.filter((x) => x.visible);

  return (
    <>
      <TableWrapper>
        <TableMain>
          <TableHead>
            <TableHeadRow>
              {visibleItems.map((x: any) => (
                <TableHeadCell key={x.reference}>{x.label}</TableHeadCell>
              ))}
            </TableHeadRow>
          </TableHead>
          {!!items.length && (
            <TableBody>
              {items.map((x: any, y: number) => (
                <TableBodyRow key={Math.random() * 10000}>
                  {visibleItems.map((a: TTableHeadItem, b: number) => (
                    <TableBodyCell key={y + b}>
                      {renderItem({
                        headItem: a,
                        cell: {
                          index: b,
                          data: getObjectDynamicPath(x, a.reference),
                        },
                        row: {
                          index: y,
                          data: x,
                        },
                        table: items,
                      })}
                    </TableBodyCell>
                  ))}
                </TableBodyRow>
              ))}
            </TableBody>
          )}
        </TableMain>
        {!items.length && <TableEmpty>No records</TableEmpty>}
      </TableWrapper>
      {tModal && (
        <Modal
          title="Manage columns"
          onClose={closeTModal}
          size="small"
          actions={[
            <Button color="primary" variant="contained" onClick={closeTModal}>
              Close
            </Button>,
          ]}
        >
          <Reorder.Group
            values={localHead}
            onReorder={setLocalHead}
            axis="y"
            as="div"
            style={{ height: '500px', overflowY: 'scroll' }}
          >
            {localHead.map((x) => (
              <OrderListDraggable
                key={x.reference}
                label={x.label}
                value={x.visible}
                reference={x.reference}
                item={x}
                onValue={(visible) =>
                  setLocalHead(
                    localHead.map((a) =>
                      a.reference === x.reference ? { ...a, visible } : a
                    )
                  )
                }
              />
            ))}
          </Reorder.Group>
        </Modal>
      )}
    </>
  );
};

export default Table;
