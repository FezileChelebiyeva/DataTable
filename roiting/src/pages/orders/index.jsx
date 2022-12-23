import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import TbodyComp from "../../components/tbody";
const OrdersPage = () => {
  const [dataOrders, setDataOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/orders")
      .then((data) => setDataOrders(data.data));
  }, []);
  return (
    <ChakraProvider>
      <h1 style={{ color: "blue", fontWeight: "bold" }}>Orders Page</h1>
      <TableContainer style={{ textAlign: "start" }}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th style={{ textAlign: "center" }}>Id</Th>
              <Th style={{ textAlign: "center" }}>Customer Id</Th>
              <Th style={{ textAlign: "center" }}>Order Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataOrders.map((element) => {
              return (
                <TbodyComp
                  key={element.id}
                  id={element.id}
                  customerId={element.customerId}
                  orderDate={element.orderDate}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
    // <div>
    //   <h1>Orders Page</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th></th>
    //         <th></th>
    //       </tr>
    //     </thead>
    //   </table>
    // </div>
  );
};

export default OrdersPage;
