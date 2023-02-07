import React from "react";
import {
  Tr,
  Td,
} from "@chakra-ui/react";

const TbodyComp = ({ id, companyName, contactName, categoryId, customerId, orderDate,name }) => {
  return (
    <Tr>
      <Td style={{ textAlign: 'center' }} isNumeric>{id}</Td>
      <Td style={{ textAlign: 'center' }}>{companyName}{categoryId}{customerId}</Td>
      <Td style={{ textAlign: 'center' }}>{contactName}{orderDate}{name}</Td>
    </Tr>
  );
};

export default TbodyComp;
